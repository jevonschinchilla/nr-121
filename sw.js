/* NBIS service worker. Change VERSION whenever index.html, nbis_core.js or this file changes. */
var VERSION = '1.0.0';
var CACHE = 'nbis-' + VERSION;
var ASSETS = [
  './', './index.html', './nbis_core.js', './manifest.webmanifest', './icon-180.png',
  './banks/m00_seed.js',
  './banks/m01.js', './banks/m02.js', './banks/m03.js', './banks/m04.js', './banks/m05.js', './banks/m06.js',
  './banks/m07.js', './banks/m08.js', './banks/m09.js', './banks/m10.js', './banks/m11.js', './banks/m12.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (cache) {
    /* Missing banks return 404 and are simply not cached. */
    return Promise.all(ASSETS.map(function (u) {
      return fetch(new Request(u, { cache: 'reload' })).then(function (res) {
        if (res && res.ok) return cache.put(u, res);
      }).catch(function () {});
    }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('nbis-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Responses are re-issued with Cache-Control: no-store so the browser's memory and HTTP caches never
   reuse a copy across a reload; the service worker cache is the only cache layer. */
function noStore(res) {
  var h = new Headers(res.headers);
  h.set('Cache-Control', 'no-store');
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
}

function isIndexNav(url) {
  var p = url.pathname;
  return p.slice(-1) === '/' || p.slice(-11) === '/index.html';
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate' && isIndexNav(url)) {
    e.respondWith(caches.open(CACHE).then(function (cache) {
      return cache.match('./index.html').then(function (hit) { return hit ? noStore(hit) : fetch(req); });
    }));
    return;
  }
  e.respondWith(caches.open(CACHE).then(function (cache) {
    return cache.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) return noStore(hit);
      return fetch(req).then(function (res) {
        var scopePath = new URL(self.registration.scope).pathname;
        var rel = url.pathname.indexOf(scopePath) === 0 ? './' + url.pathname.slice(scopePath.length) : null;
        if (res && res.ok && rel && ASSETS.indexOf(rel) >= 0) cache.put(rel, res.clone());
        return res && res.ok ? noStore(res) : res;
      });
    });
  }));
});

function bodiesEqual(a, b) {
  if (a.byteLength !== b.byteLength) return false;
  var x = new Uint8Array(a), y = new Uint8Array(b);
  for (var i = 0; i < x.length; i++) if (x[i] !== y[i]) return false;
  return true;
}

/* Message API: {type: 'refresh'} re-fetches every asset and replaces changed copies; replies {changed: [names]}.
   {type: 'skipWaiting'} activates a waiting worker. */
self.addEventListener('message', function (e) {
  var data = e.data || {};
  var port = e.ports && e.ports[0];
  if (data.type === 'skipWaiting') { self.skipWaiting(); return; }
  if (data.type !== 'refresh') return;
  var changed = [];
  var work = caches.open(CACHE).then(function (cache) {
    return Promise.all(ASSETS.map(function (u) {
      return fetch(new Request(u, { cache: 'reload' })).then(function (res) {
        return cache.match(u).then(function (old) {
          if (!res || !res.ok) {
            if (old) { changed.push(u.replace('./', '') + ' (removed)'); return cache.delete(u); }
            return null;
          }
          if (!old) { changed.push(u.replace('./', '')); return cache.put(u, res); }
          var fresh = res.clone();
          return Promise.all([old.arrayBuffer(), res.arrayBuffer()]).then(function (bufs) {
            if (bodiesEqual(bufs[0], bufs[1])) return null;
            changed.push(u.replace('./', ''));
            return cache.put(u, fresh);
          });
        });
      }).catch(function () { return null; });
    }));
  });
  e.waitUntil(work.then(function () { if (port) port.postMessage({ changed: changed }); }));
});
