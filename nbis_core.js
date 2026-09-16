/* NBIS core: scoring, selection, glossary generation, validation.
   Shared by index.html and tests.html. No DOM access; runs under Node for tests.
   Version and behaviour are specified in NBIS_schema.md. */
(function (root) {
  'use strict';
  var NBIS = {};
  NBIS.CORE_VERSION = '1.0.0';

  /* ---------- Random helpers ---------- */
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, rng) {
    rng = rng || Math.random;
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sameOrder(a, b) {
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }
  /* Shuffle an index array [0..n-1]; redraw while the result equals the identity order. */
  function shuffleNotIdentity(n, rng) {
    var idx = [];
    for (var i = 0; i < n; i++) idx.push(i);
    if (n < 2) return idx;
    var out = shuffle(idx, rng);
    var guard = 0;
    while (sameOrder(out, idx) && guard < 1000) { out = shuffle(idx, rng); guard++; }
    return out;
  }

  /* ---------- Normalisation ---------- */
  function normalise(s) {
    if (s === null || s === undefined) return '';
    var t = String(s).toLowerCase();
    t = t.normalize('NFKD').replace(/\p{M}/gu, '');
    t = t.replace(/&/g, ' and ');
    t = t.replace(/[-\u2010-\u2015\u2212\/]/g, ' ');
    t = t.replace(/(\d)\.(\d)/g, '$1\u0001$2');
    t = t.replace(/[^\p{L}\p{N}\s%\u0001]/gu, '');
    t = t.replace(/\u0001/g, '.');
    t = t.replace(/\s+/g, ' ').trim();
    t = t.replace(/^(the|a|an) /, '');
    return t;
  }
  /* Optimal string alignment (restricted Damerau-Levenshtein) distance. */
  function dlDistance(a, b) {
    var la = a.length, lb = b.length;
    if (la === 0) return lb;
    if (lb === 0) return la;
    var d = [];
    for (var i = 0; i <= la; i++) { d[i] = [i]; }
    for (var j = 1; j <= lb; j++) { d[0][j] = j; }
    for (i = 1; i <= la; i++) {
      for (j = 1; j <= lb; j++) {
        var cost = a[i - 1] === b[j - 1] ? 0 : 1;
        var v = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          v = Math.min(v, d[i - 2][j - 2] + 1);
        }
        d[i][j] = v;
      }
    }
    return d[la][lb];
  }

  /* ---------- Numeric parsing ---------- */
  function parseNumber(s) {
    if (s === null || s === undefined) return null;
    var t = String(s).trim().toLowerCase();
    t = t.replace(/[\s,]/g, '');
    t = t.replace(/[$\u00a3\u20ac\u00a5]/g, '');
    t = t.replace(/%$/, '');
    var m = /^(-?)(\d+\.?\d*|\.\d+)(k|m|bn)?$/.exec(t);
    if (!m) return null;
    var v = parseFloat(m[2]);
    if (!isFinite(v)) return null;
    if (m[1] === '-') v = -v;
    var mult = { k: 1e3, m: 1e6, bn: 1e9 }[m[3]] || 1;
    return v * mult;
  }

  /* ---------- Scorers ---------- */
  function scoreRecall(item, answer) {
    var ans = normalise(answer);
    var fuzzy = item.fuzzy !== false;
    if (!ans) return { correct: false, method: 'empty' };
    var ansNs = ans.replace(/ /g, '');
    var i, acc, n;
    for (i = 0; i < item.accept.length; i++) {
      acc = item.accept[i]; n = normalise(acc);
      if (!n) continue;
      if (ans === n) return { correct: true, matched: acc, method: 'exact' };
      if (ansNs === n.replace(/ /g, '')) return { correct: true, matched: acc, method: 'spacing' };
    }
    if (fuzzy) {
      for (i = 0; i < item.accept.length; i++) {
        acc = item.accept[i]; n = normalise(acc);
        var allowed = Math.floor(n.length / 6);
        if (allowed > 0 && dlDistance(ans, n) <= allowed) {
          return { correct: true, matched: acc, method: 'fuzzy' };
        }
      }
    }
    return { correct: false, method: 'none' };
  }

  function tokens(s) { return s ? s.split(' ') : []; }
  function wordMatch(pw, aw) {
    if (pw === aw) return true;
    if (pw.length >= 6) return dlDistance(pw, aw) <= 1;
    return false;
  }
  function phrasePresent(phraseNorm, ansTokens) {
    var pt = tokens(phraseNorm);
    if (!pt.length) return false;
    for (var i = 0; i + pt.length <= ansTokens.length; i++) {
      var ok = true;
      for (var j = 0; j < pt.length; j++) {
        if (!wordMatch(pt[j], ansTokens[i + j])) { ok = false; break; }
      }
      if (ok) return true;
    }
    return false;
  }
  function conceptPresent(concept, ansTokens) {
    for (var i = 0; i < concept.length; i++) {
      if (phrasePresent(normalise(concept[i]), ansTokens)) return true;
    }
    return false;
  }
  function scoreDefine(item, answer) {
    var ans = normalise(answer);
    var at = tokens(ans);
    var r = item.rubric || {};
    var must = (r.must || []).map(function (c) { return { label: c[0], present: conceptPresent(c, at) }; });
    var should = (r.should || []).map(function (c) { return { label: c[0], present: conceptPresent(c, at) }; });
    var forbid = (r.forbid || []).map(function (c) { return { label: c[0], present: conceptPresent(c, at) }; });
    var shouldMin = r.should_min || 0;
    var mustOk = must.every(function (m) { return m.present; });
    var shouldCount = should.filter(function (s) { return s.present; }).length;
    var forbidHit = forbid.filter(function (f) { return f.present; }).map(function (f) { return f.label; });
    var correct = !!ans && mustOk && shouldCount >= shouldMin && forbidHit.length === 0;
    var matched = must.concat(should).filter(function (c) { return c.present; }).map(function (c) { return c.label; });
    var missing = must.concat(should).filter(function (c) { return !c.present; }).map(function (c) { return c.label; });
    return { correct: correct, matched: matched, missing: missing, forbidden: forbidHit,
      must_ok: mustOk, should_count: shouldCount, should_min: shouldMin };
  }

  function scoreNumeric(item, answer) {
    var v = parseNumber(answer);
    if (v === null) return { correct: false, parsed: null };
    var diff = Math.abs(v - item.value);
    var eps = 1e-9 * Math.max(1, Math.abs(item.value));
    var ok = false;
    if (typeof item.tolerance_abs === 'number') ok = ok || diff <= item.tolerance_abs + eps;
    if (typeof item.tolerance_pct === 'number') ok = ok || diff <= Math.abs(item.value) * item.tolerance_pct / 100 + eps;
    return { correct: ok, parsed: v, diff: diff };
  }

  function sortedNums(a) { return a.slice().sort(function (x, y) { return x - y; }); }
  function scoreMcq(item, selectedIdx) {
    var sel = sortedNums(selectedIdx || []);
    var cor = sortedNums(item.correct);
    var hit = sel.filter(function (i) { return cor.indexOf(i) >= 0; }).length;
    var extra = sel.length - hit;
    return { correct: sameOrder(sel, cor), hit: hit, of: cor.length, extra: extra };
  }
  function scoreSequence(item, orderedSteps) {
    var given = orderedSteps || [];
    var first = -1;
    for (var i = 0; i < item.steps.length; i++) {
      if (given[i] !== item.steps[i]) { first = i; break; }
    }
    return { correct: first === -1 && given.length === item.steps.length, first_divergence: first };
  }
  function scoreSlot(item, labels) {
    var given = labels || [];
    var wrong = [];
    for (var i = 0; i < item.correct.length; i++) if (given[i] !== item.correct[i]) wrong.push(i);
    return { correct: wrong.length === 0 && given.length === item.correct.length, wrong: wrong };
  }
  function scoreMatch(item, pairs) {
    /* pairs: array of right-hand strings in left order */
    var given = pairs || [];
    var wrong = [];
    for (var i = 0; i < item.pairs.length; i++) if (given[i] !== item.pairs[i][1]) wrong.push(i);
    return { correct: wrong.length === 0 && given.length === item.pairs.length, wrong: wrong };
  }
  function scoreClassify(item, idx) {
    return { correct: idx === item.correct };
  }
  function score(item, answer) {
    switch (item.type) {
      case 'mcq': return scoreMcq(item, answer);
      case 'recall': return scoreRecall(item, answer);
      case 'define': return scoreDefine(item, answer);
      case 'numeric': return scoreNumeric(item, answer);
      case 'sequence': return scoreSequence(item, answer);
      case 'slot': return scoreSlot(item, answer);
      case 'match': return scoreMatch(item, answer);
      case 'classify': return scoreClassify(item, answer);
      default: return { correct: false };
    }
  }

  /* ---------- Constants ---------- */
  var TYPES = ['mcq', 'recall', 'define', 'numeric', 'sequence', 'slot', 'match', 'classify'];
  var QUOTA25 = { mcq: 9, recall: 4, define: 4, numeric: 2, sequence: 2, slot: 1, match: 1, classify: 2 };
  var GLOSSARY_QUOTA25 = { def: 12, mcq: 9, 'var': 4 };
  var PRIORITY_WEIGHT = { red: 3, amber: 2, green: 1 };
  var CLASSIFY_SETS = [
    ['Fact', 'Assumption', 'Company claim', 'Analytical interpretation'],
    ['Structural protection', 'Narrative comfort']
  ];
  var TYPED_TYPES = ['recall', 'define', 'numeric'];
  var SELECT_BADGES = { one: 'Select one', all: 'Select all that apply', all_not: 'Select all that do NOT apply' };

  /* ---------- Attempt statistics ---------- */
  /* attempts: chronological array of {ts, correct} for one item. */
  function itemStats(attempts, nowMs) {
    var a = attempts || [];
    var last3 = a.slice(-3);
    var wrong3 = last3.filter(function (x) { return !x.correct; }).length;
    var weak = wrong3 >= 2;
    var mastered = a.length >= 2 && a[a.length - 1].correct && a[a.length - 2].correct;
    var recent = false;
    var cutoff = (nowMs || Date.now()) - 24 * 3600 * 1000;
    for (var i = a.length - 1; i >= 0; i--) {
      var t = typeof a[i].ts === 'number' ? a[i].ts : Date.parse(a[i].ts);
      if (t < cutoff) break;
      if (a[i].correct) { recent = true; break; }
    }
    return { seen: a.length > 0, attempts: a.length, weak: weak, mastered: mastered, recentCorrect: recent };
  }

  /* ---------- Allocation (largest remainder with caps) ---------- */
  function allocate(ratio, n, available) {
    var keys = Object.keys(ratio);
    var alloc = {};
    keys.forEach(function (k) { alloc[k] = 0; });
    var active = keys.filter(function (k) { return (available[k] || 0) > 0 && ratio[k] > 0; });
    var remaining = n;
    var guard = 0;
    while (remaining > 0 && active.length && guard < 50) {
      guard++;
      var sumR = 0;
      active.forEach(function (k) { sumR += ratio[k]; });
      var rows = active.map(function (k) {
        var exact = remaining * ratio[k] / sumR;
        var fl = Math.floor(exact + 1e-9);
        return { k: k, v: fl, rem: exact - fl };
      });
      var left = remaining;
      rows.forEach(function (r) { left -= r.v; });
      var order = rows.slice().sort(function (x, y) {
        if (Math.abs(y.rem - x.rem) > 1e-9) return y.rem - x.rem;
        return keys.indexOf(x.k) - keys.indexOf(y.k);
      });
      for (var i = 0; i < left && i < order.length; i++) order[i].v += 1;
      rows.forEach(function (r) {
        var room = (available[r.k] || 0) - alloc[r.k];
        alloc[r.k] += Math.min(r.v, Math.max(0, room));
      });
      remaining = n;
      keys.forEach(function (k) { remaining -= alloc[k]; });
      active = active.filter(function (k) { return alloc[k] < (available[k] || 0); });
    }
    return alloc;
  }

  /* ---------- Weighted draw ---------- */
  function weightedTake(cands, weightFn, k, rng, canTake) {
    var pool = cands.slice();
    var out = [];
    while (out.length < k && pool.length) {
      var weights = pool.map(function (it) { return canTake && !canTake(it) ? 0 : weightFn(it); });
      var total = 0;
      weights.forEach(function (w) { total += w; });
      if (total <= 0) break;
      var r = rng() * total, acc = 0, pick = -1;
      for (var i = 0; i < pool.length; i++) {
        acc += weights[i];
        if (r < acc) { pick = i; break; }
      }
      if (pick < 0) pick = pool.length - 1;
      if (weights[pick] <= 0) { pool.splice(pick, 1); continue; }
      out.push(pool[pick]);
      pool.splice(pick, 1);
    }
    return out;
  }

  /* Draw k items from a sub-pool under the tiering rule. stats(item) -> itemStats. */
  function drawTiered(items, k, statsOf, rng, priorityFn, canTake) {
    priorityFn = priorityFn || function () { return 1; };
    var unseen = items.filter(function (it) { return !statsOf(it).seen; });
    var seen = items.filter(function (it) { return statsOf(it).seen; });
    var out = weightedTake(unseen, function (it) { return priorityFn(it); }, k, rng, canTake);
    if (out.length < k) {
      var more = weightedTake(seen, function (it) {
        var s = statsOf(it);
        var w = s.weak ? 2 : 1;
        if (s.recentCorrect) w *= 0.25;
        return w * priorityFn(it);
      }, k - out.length, rng, canTake);
      out = out.concat(more);
    }
    return out;
  }

  /* ---------- Session selection ----------
     opts: { n, mode: 'module'|'glossary'|'mixture'|'weak', history: {id: [attempts]},
             now: ms, rng: fn, redOnly: bool }
     pool: array of valid items (with .type, .id, and for glossary items .glossary=true, .gkind, .priority). */
  function selectSession(pool, opts) {
    var n = opts.n || 25;
    var rng = opts.rng || Math.random;
    var history = opts.history || {};
    var now = opts.now || Date.now();
    var cache = {};
    var statsOf = function (it) {
      if (!cache[it.id]) cache[it.id] = itemStats(history[it.id] || [], now);
      return cache[it.id];
    };
    var byId = {};
    var uniq = pool.filter(function (it) { if (byId[it.id]) return false; byId[it.id] = true; return true; });
    var chosen = [];
    var chosenIds = {};
    var take = function (arr) { arr.forEach(function (it) { if (!chosenIds[it.id]) { chosenIds[it.id] = true; chosen.push(it); } }); };
    var notChosen = function (it) { return !chosenIds[it.id]; };

    if (opts.mode === 'weak') {
      var weakItems = uniq.filter(function (it) { return statsOf(it).weak; });
      take(drawTiered(weakItems, n, statsOf, rng));
      return shuffle(chosen, rng);
    }

    if (opts.mode === 'glossary') {
      var g = uniq.filter(function (it) { return it.glossary; });
      if (opts.redOnly) g = g.filter(function (it) { return it.priority === 'red'; });
      var pri = function (it) { return PRIORITY_WEIGHT[it.priority] || 1; };
      var availG = { def: 0, mcq: 0, 'var': 0 };
      g.forEach(function (it) { availG[it.gkind] = (availG[it.gkind] || 0) + 1; });
      var allocG = allocate(GLOSSARY_QUOTA25, n, availG);
      Object.keys(allocG).forEach(function (kind) {
        var sub = g.filter(function (it) { return it.gkind === kind; });
        take(drawTiered(sub, allocG[kind], statsOf, rng, pri));
      });
      if (chosen.length < n) take(drawTiered(g.filter(notChosen), n - chosen.length, statsOf, rng, pri));
      return shuffle(chosen, rng);
    }

    /* module and mixture: type quota over the whole pool */
    var glossaryCap = opts.mode === 'mixture' ? Math.round(n * 5 / 25) : 0;
    var glossaryCount = 0;
    var canTake = function (it) {
      if (chosenIds[it.id]) return false;
      if (it.glossary && glossaryCount >= glossaryCap) return false;
      return true;
    };
    var avail = {};
    TYPES.forEach(function (t) { avail[t] = 0; });
    uniq.forEach(function (it) {
      if (opts.mode !== 'mixture' && it.glossary) return;
      avail[it.type] = (avail[it.type] || 0) + 1;
    });
    var alloc = allocate(QUOTA25, n, avail);
    var candidates = uniq.filter(function (it) { return opts.mode === 'mixture' || !it.glossary; });
    TYPES.forEach(function (t) {
      if (!alloc[t]) return;
      var sub = candidates.filter(function (it) { return it.type === t; });
      var got = drawTiered(sub, alloc[t], statsOf, rng, null, canTake);
      got.forEach(function (it) { if (it.glossary) glossaryCount++; });
      take(got);
    });
    if (chosen.length < n) {
      var rest = drawTiered(candidates.filter(notChosen), n - chosen.length, statsOf, rng, null, canTake);
      rest.forEach(function (it) { if (it.glossary) glossaryCount++; });
      take(rest);
    }
    return shuffle(chosen, rng);
  }

  /* ---------- Presentation shuffles ---------- */
  function presentation(item, rng) {
    rng = rng || Math.random;
    var p = {};
    if (item.type === 'mcq') p.order = shuffle(item.options.map(function (_, i) { return i; }), rng);
    if (item.type === 'sequence') p.order = shuffleNotIdentity(item.steps.length, rng);
    if (item.type === 'match') p.right = shuffleNotIdentity(item.pairs.length, rng);
    if (item.type === 'slot') p.choices = shuffle(item.choices.map(function (_, i) { return i; }), rng);
    return p;
  }

  /* ---------- Glossary generation ---------- */
  function slugify(term) {
    return normalise(term).replace(/[^a-z0-9 ]/g, '').trim().replace(/ +/g, '-') || 'term';
  }
  var PRI_RANK = { red: 3, amber: 2, green: 1 };
  function mergeGlossary(banks) {
    var byKey = {};
    var order = [];
    banks.forEach(function (bank) {
      (bank.glossary || []).forEach(function (e) {
        if (!e || typeof e.term !== 'string') return;
        var key = normalise(e.term);
        if (!key) return;
        var mod = typeof e.module === 'number' ? e.module : bank.module;
        if (!byKey[key]) {
          byKey[key] = { term: e.term, aliases: (e.aliases || []).slice(), definition: e.definition,
            relevance: e.relevance || '', priority: e.priority || 'green', module: mod,
            variants: e.variants || null, sources: [mod] };
          order.push(key);
        } else {
          var cur = byKey[key];
          if (mod < cur.module) { cur.definition = e.definition; cur.term = e.term; cur.module = mod; cur.relevance = e.relevance || cur.relevance; }
          (e.aliases || []).forEach(function (a) { if (cur.aliases.indexOf(a) < 0) cur.aliases.push(a); });
          if ((PRI_RANK[e.priority] || 0) > (PRI_RANK[cur.priority] || 0)) cur.priority = e.priority;
          if (!cur.variants && e.variants) cur.variants = e.variants;
          cur.sources.push(mod);
        }
      });
    });
    return order.map(function (k) { return byKey[k]; });
  }
  function glossaryItems(entries, rng) {
    rng = rng || mulberry32(7);
    var items = [];
    entries.forEach(function (e, idx) {
      var slug = slugify(e.term);
      var base = { module: e.module, priority: e.priority, glossary: true, difficulty: e.priority === 'red' ? 2 : 1,
        topic: 'glossary', source: 'Glossary, Module ' + e.module, as_of: null, time_sensitive: false,
        explanation: e.relevance ? ('Relevance: ' + e.relevance) : ('Term: ' + e.term) };
      var def = Object.assign({}, base, { id: 'g-' + slug + '-def', gkind: 'def', type: 'recall',
        stem: 'Which term is defined as: ' + e.definition, accept: [e.term].concat(e.aliases || []), fuzzy: true });
      items.push(def);
      var others = entries.filter(function (o, j) { return j !== idx && o.definition !== e.definition; });
      var same = others.filter(function (o) { return o.module === e.module; });
      var pool = same.length >= 3 ? same : others.filter(function (o) { return o.priority === e.priority; });
      if (pool.length < 3) pool = others;
      if (pool.length >= 3) {
        var d = shuffle(pool, rng).slice(0, 3).map(function (o) { return o.definition; });
        items.push(Object.assign({}, base, { id: 'g-' + slug + '-mcq', gkind: 'mcq', type: 'mcq', select: 'one',
          stem: 'Which definition matches the term "' + e.term + '"?', options: [e.definition].concat(d), correct: [0] }));
      }
      var v = e.variants;
      if (v && typeof v === 'object') {
        var uk = (typeof v.UK === 'string' && v.UK.trim()) ? v.UK : e.term;
        var acc = [];
        var labels = [];
        ['US', 'EU'].forEach(function (reg) {
          if (typeof v[reg] === 'string' && v[reg].trim() && normalise(v[reg]) !== normalise(uk)) {
            if (acc.indexOf(v[reg]) < 0) acc.push(v[reg]);
            labels.push(reg);
          }
        });
        if (acc.length) {
          items.push(Object.assign({}, base, { id: 'g-' + slug + '-var', gkind: 'var', type: 'recall',
            stem: 'The UK term is "' + uk + '". What is the ' + labels.join(' or ') + ' term?', accept: acc, fuzzy: true }));
        }
      }
    });
    return items;
  }

  /* ---------- Validation ---------- */
  function isStr(x) { return typeof x === 'string' && x.trim().length > 0; }
  function isInt(x) { return typeof x === 'number' && Math.floor(x) === x; }
  function wordCount(s) { return String(s || '').trim().split(/\s+/).filter(Boolean).length; }
  function validateItem(it, errors) {
    var e = function (m) { errors.push(m); };
    if (!isStr(it.type) || TYPES.indexOf(it.type) < 0) { e('type must be one of ' + TYPES.join(', ')); return; }
    if (!isStr(it.stem)) e('stem missing');
    if (!isStr(it.explanation)) e('explanation missing');
    if (!isStr(it.source)) e('source missing');
    if (!(it.as_of === null || (typeof it.as_of === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(it.as_of)))) e('as_of must be an ISO date or null');
    if (typeof it.time_sensitive !== 'boolean') e('time_sensitive must be boolean');
    if ([1, 2, 3].indexOf(it.difficulty) < 0) e('difficulty must be 1, 2 or 3');
    if (!isStr(it.topic)) e('topic missing');
    var i;
    switch (it.type) {
      case 'mcq':
        if (['one', 'all', 'all_not'].indexOf(it.select) < 0) e('select must be one, all or all_not');
        if (!Array.isArray(it.options) || it.options.length < 4 || it.options.length > 6 || !it.options.every(isStr)) e('options must be 4 to 6 strings');
        if (!Array.isArray(it.correct) || !it.correct.every(isInt)) { e('correct must be an array of indices'); break; }
        if (Array.isArray(it.options)) {
          for (i = 0; i < it.correct.length; i++) if (it.correct[i] < 0 || it.correct[i] >= it.options.length) e('correct index out of range: ' + it.correct[i]);
        }
        if (new Set(it.correct).size !== it.correct.length) e('correct contains duplicates');
        if (it.select === 'one' && it.correct.length !== 1) e('select one requires exactly one correct index');
        if (it.select !== 'one' && it.correct.length < 1) e('at least one correct index required');
        if (it.select === 'all_not' && !/do NOT apply/.test(it.stem || '')) e('all_not stem must contain "do NOT apply"');
        break;
      case 'recall':
        if (!Array.isArray(it.accept) || it.accept.length < 1 || !it.accept.every(isStr)) e('accept must be a non-empty array of strings');
        if (it.fuzzy !== undefined && typeof it.fuzzy !== 'boolean') e('fuzzy must be boolean');
        break;
      case 'define':
        if (!isStr(it.model_answer)) e('model_answer missing');
        if (!it.rubric || typeof it.rubric !== 'object') { e('rubric missing'); break; }
        var okList = function (l) { return Array.isArray(l) && l.every(function (c) { return Array.isArray(c) && c.length > 0 && c.every(isStr); }); };
        if (!Array.isArray(it.rubric.must) || it.rubric.must.length < 1 || !okList(it.rubric.must)) e('rubric.must must be a non-empty list of phrase lists');
        if (it.rubric.should !== undefined && !okList(it.rubric.should)) e('rubric.should must be a list of phrase lists');
        if (it.rubric.forbid !== undefined && !okList(it.rubric.forbid)) e('rubric.forbid must be a list of phrase lists');
        if (it.rubric.should_min !== undefined && !isInt(it.rubric.should_min)) e('rubric.should_min must be an integer');
        if (isInt(it.rubric.should_min) && it.rubric.should_min > (it.rubric.should || []).length) e('should_min exceeds the number of should concepts');
        if (errors.length === 0 && isStr(it.model_answer)) {
          var r = scoreDefine(it, it.model_answer);
          if (!r.correct) e('model_answer fails its own rubric (missing: ' + r.missing.join('; ') + (r.forbidden.length ? '; forbidden: ' + r.forbidden.join('; ') : '') + ')');
        }
        break;
      case 'numeric':
        if (typeof it.value !== 'number' || !isFinite(it.value)) e('value must be a number');
        if (!(typeof it.tolerance_pct === 'number' || typeof it.tolerance_abs === 'number')) e('tolerance_pct or tolerance_abs required');
        if (typeof it.tolerance_pct === 'number' && it.tolerance_pct < 0) e('tolerance_pct must be non-negative');
        if (typeof it.tolerance_abs === 'number' && it.tolerance_abs < 0) e('tolerance_abs must be non-negative');
        if (it.unit !== undefined && typeof it.unit !== 'string') e('unit must be a string');
        if (!isStr(it.working)) e('working missing');
        break;
      case 'sequence':
        if (!Array.isArray(it.steps) || it.steps.length < 3 || it.steps.length > 8 || !it.steps.every(isStr)) e('steps must be 3 to 8 strings');
        else if (new Set(it.steps).size !== it.steps.length) e('steps must be distinct');
        break;
      case 'slot':
        if (!Array.isArray(it.nodes) || it.nodes.length < 2 || !it.nodes.every(function (x) { return x === null || isStr(x); })) e('nodes must be strings with null at blanks');
        if (['stack', 'flow'].indexOf(it.layout) < 0) e('layout must be stack or flow');
        if (!Array.isArray(it.choices) || it.choices.length < 2 || !it.choices.every(isStr)) e('choices must be strings');
        if (!Array.isArray(it.correct) || !it.correct.every(isStr)) { e('correct must be an array of labels'); break; }
        if (Array.isArray(it.nodes)) {
          var blanks = it.nodes.filter(function (x) { return x === null; }).length;
          if (blanks < 1 || blanks > 2) e('one or two blanks required');
          if (blanks !== it.correct.length) e('number of blanks (' + blanks + ') must equal length of correct (' + it.correct.length + ')');
        }
        if (Array.isArray(it.choices)) {
          for (i = 0; i < it.correct.length; i++) if (it.choices.indexOf(it.correct[i]) < 0) e('correct label not in choices: ' + it.correct[i]);
        }
        break;
      case 'match':
        if (!Array.isArray(it.pairs) || it.pairs.length < 3 || it.pairs.length > 5 ||
            !it.pairs.every(function (p) { return Array.isArray(p) && p.length === 2 && isStr(p[0]) && isStr(p[1]); })) e('pairs must be 3 to 5 [left, right] string pairs');
        else {
          if (new Set(it.pairs.map(function (p) { return p[1]; })).size !== it.pairs.length) e('right-hand entries must be distinct');
          if (new Set(it.pairs.map(function (p) { return p[0]; })).size !== it.pairs.length) e('left-hand entries must be distinct');
        }
        break;
      case 'classify':
        if (!isStr(it.statement)) e('statement missing');
        var setOk = Array.isArray(it.categories) && CLASSIFY_SETS.some(function (s) { return sameOrder(s, it.categories); });
        if (!setOk) e('categories must be one of the two fixed sets');
        if (!isInt(it.correct) || (Array.isArray(it.categories) && (it.correct < 0 || it.correct >= it.categories.length))) e('correct must be an index into categories');
        break;
    }
  }
  function validateGlossaryEntry(g, errors) {
    var e = function (m) { errors.push(m); };
    if (!isStr(g.term)) e('term missing');
    if (!isStr(g.definition)) e('definition missing');
    if (g.aliases !== undefined && (!Array.isArray(g.aliases) || !g.aliases.every(isStr))) e('aliases must be an array of strings');
    if (['red', 'amber', 'green'].indexOf(g.priority) < 0) e('priority must be red, amber or green');
    if (g.module !== undefined && !isInt(g.module)) e('module must be an integer');
    if (g.variants !== undefined && g.variants !== null && (typeof g.variants !== 'object' || Array.isArray(g.variants))) e('variants must be an object {UK, EU, US} or null');
  }
  /* Returns { valid: [items], glossary: [entries], issues: [{id, message}] }.
     seenIds: object used across banks to detect duplicate ids (mutated). */
  function validateBank(bank, seenIds) {
    seenIds = seenIds || {};
    var issues = [];
    var valid = [];
    var gloss = [];
    var bankLabel = 'bank';
    if (!bank || typeof bank !== 'object') return { valid: [], glossary: [], issues: [{ id: bankLabel, message: 'bank is not an object' }] };
    if (!isInt(bank.module)) issues.push({ id: bankLabel, message: 'module must be an integer' });
    if (!isStr(bank.module_title)) issues.push({ id: bankLabel, message: 'module_title missing' });
    if (!(typeof bank.bank_version === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(bank.bank_version))) issues.push({ id: bankLabel, message: 'bank_version must be YYYY-MM-DD' });
    if (!Array.isArray(bank.items)) issues.push({ id: bankLabel, message: 'items must be an array' });
    if (bank.glossary !== undefined && !Array.isArray(bank.glossary)) issues.push({ id: bankLabel, message: 'glossary must be an array' });
    (Array.isArray(bank.items) ? bank.items : []).forEach(function (it, idx) {
      var errors = [];
      var id = (it && typeof it.id === 'string') ? it.id : ('item[' + idx + ']');
      if (!it || typeof it !== 'object') { issues.push({ id: id, message: 'item is not an object' }); return; }
      if (!isStr(it.id)) errors.push('id missing');
      else if (!/^[a-z0-9]+-[a-z0-9-]+$/i.test(it.id)) errors.push('id pattern should be like m06-001');
      else if (seenIds[it.id]) errors.push('duplicate id');
      validateItem(it, errors);
      if (typeof it.explanation === 'string' && wordCount(it.explanation) > 60) errors.push('explanation exceeds 60 words');
      if (errors.length) { issues.push({ id: id, message: errors.join('; ') }); if (isStr(it.id)) seenIds[it.id] = true; return; }
      seenIds[it.id] = true;
      var copy = Object.assign({}, it, { module: bank.module });
      valid.push(copy);
    });
    (Array.isArray(bank.glossary) ? bank.glossary : []).forEach(function (g, idx) {
      var errors = [];
      if (!g || typeof g !== 'object') { issues.push({ id: 'glossary[' + idx + ']', message: 'entry is not an object' }); return; }
      validateGlossaryEntry(g, errors);
      if (errors.length) { issues.push({ id: 'glossary: ' + (g.term || idx), message: errors.join('; ') }); return; }
      gloss.push(Object.assign({}, g, { module: isInt(g.module) ? g.module : bank.module }));
    });
    return { valid: valid, glossary: gloss, issues: issues };
  }

  /* ---------- Model answer text for feedback ---------- */
  function modelAnswer(item) {
    switch (item.type) {
      case 'mcq': return item.correct.map(function (i) { return item.options[i]; }).join('; ');
      case 'recall': return item.accept[0];
      case 'define': return item.model_answer;
      case 'numeric': return String(item.value) + (item.unit ? ' ' + item.unit : '');
      case 'sequence': return item.steps.map(function (s, i) { return (i + 1) + '. ' + s; }).join(' ');
      case 'slot': return item.correct.join('; ');
      case 'match': return item.pairs.map(function (p) { return p[0] + ' = ' + p[1]; }).join('; ');
      case 'classify': return item.categories[item.correct];
      default: return '';
    }
  }

  NBIS.mulberry32 = mulberry32;
  NBIS.shuffle = shuffle;
  NBIS.shuffleNotIdentity = shuffleNotIdentity;
  NBIS.sameOrder = sameOrder;
  NBIS.normalise = normalise;
  NBIS.dlDistance = dlDistance;
  NBIS.parseNumber = parseNumber;
  NBIS.scoreRecall = scoreRecall;
  NBIS.scoreDefine = scoreDefine;
  NBIS.scoreNumeric = scoreNumeric;
  NBIS.scoreMcq = scoreMcq;
  NBIS.scoreSequence = scoreSequence;
  NBIS.scoreSlot = scoreSlot;
  NBIS.scoreMatch = scoreMatch;
  NBIS.scoreClassify = scoreClassify;
  NBIS.score = score;
  NBIS.TYPES = TYPES;
  NBIS.QUOTA25 = QUOTA25;
  NBIS.GLOSSARY_QUOTA25 = GLOSSARY_QUOTA25;
  NBIS.PRIORITY_WEIGHT = PRIORITY_WEIGHT;
  NBIS.CLASSIFY_SETS = CLASSIFY_SETS;
  NBIS.TYPED_TYPES = TYPED_TYPES;
  NBIS.SELECT_BADGES = SELECT_BADGES;
  NBIS.itemStats = itemStats;
  NBIS.allocate = allocate;
  NBIS.drawTiered = drawTiered;
  NBIS.selectSession = selectSession;
  NBIS.presentation = presentation;
  NBIS.slugify = slugify;
  NBIS.mergeGlossary = mergeGlossary;
  NBIS.glossaryItems = glossaryItems;
  NBIS.validateBank = validateBank;
  NBIS.validateItem = validateItem;
  NBIS.modelAnswer = modelAnswer;
  NBIS.wordCount = wordCount;

  if (typeof module !== 'undefined' && module.exports) module.exports = NBIS;
  root.NBIS = NBIS;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
