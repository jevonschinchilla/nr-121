// NBIS bank template. Copy to banks/mNN.js (two-digit module number, e.g. banks/m06.js) and fill in.
// Rules: the object passed to push() must be strict JSON (double-quoted keys and strings, no trailing
// commas, no undefined). Comments like these are allowed anywhere outside strings; NBIS_validate.py strips them.
// Validate before upload: python3 NBIS_validate.py banks/mNN.js
// Full format, scoring and validation rules: NBIS_schema.md.
window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
  "bank_version": "2026-01-01",          // YYYY-MM-DD; change on every upload so the home screen shows the new version
  "module": 6,                            // integer 1 to 12 (0 is reserved for the seed bank)
  "module_title": "Revenue models and the cost stack",
  "items": [
    // Every item carries: id (mNN-001 pattern, unique across all banks), type, stem, explanation (60 words or fewer),
    // source (document name and date), as_of ("YYYY-MM-DD" or null), time_sensitive (true/false), difficulty (1, 2 or 3), topic.
    // Delete the examples below before authoring; they are placeholders, not content.

    // mcq: select "one" (exactly one correct index), "all" (2 to 4 correct indices) or "all_not" (indices of the options
    // that do NOT apply, which are the ones the user must select; the stem must contain the words "do NOT apply").
    // 4 to 6 options; shuffled at presentation; the correct option should not be systematically the longest.
    {
      "id": "m06-001",
      "type": "mcq",
      "select": "one",
      "stem": "Question text?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": [1],
      "explanation": "Why B is right and why the strongest distractor is wrong.",
      "source": "NBIS Module 6 note, 15 September 2026 (F-001)",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "topic tag"
    },

    // recall: accept lists every accepted answer, canonical display form first; fuzzy (default true) allows
    // floor(L/6) edits against each accepted entry of normalised length L. Keep answers to four words or fewer.
    {
      "id": "m06-002",
      "type": "recall",
      "stem": "Which term ...?",
      "accept": ["Canonical answer", "alias", "ABBR"],
      "fuzzy": true,
      "explanation": "...",
      "source": "...",
      "as_of": null,
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "topic tag"
    },

    // define: must (1 to 3 concepts, each a list of synonym phrases), should (concepts, with should_min required),
    // forbid (phrases that fail the answer). The model_answer must pass its own rubric; the validator checks this.
    {
      "id": "m06-003",
      "type": "define",
      "stem": "Define ...",
      "model_answer": "One or two sentences naming the core concept and a supporting concept, which pass the rubric below.",
      "rubric": {
        "must": [["core concept", "synonym", "technical phrasing"]],
        "should": [["supporting concept"], ["another supporting concept"]],
        "should_min": 1,
        "forbid": [["common confusion"]]
      },
      "explanation": "...",
      "source": "...",
      "as_of": null,
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "topic tag"
    },

    // numeric: value plus tolerance_pct or tolerance_abs (at least one); unit is shown beside the input;
    // working is shown in feedback. The stem states every input needed. Suffixes k, m, bn are accepted in answers.
    {
      "id": "m06-004",
      "type": "numeric",
      "stem": "Given ..., what is ...?",
      "value": 1891,
      "tolerance_pct": 3,
      "unit": "$m",
      "working": "51,400 x 8,760 x 70% x $6.00 = $1,891m",
      "explanation": "...",
      "source": "...",
      "as_of": null,
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "topic tag"
    },

    // sequence: 3 to 8 distinct steps in correct order; shuffled at presentation (never shown in the correct order).
    {
      "id": "m06-005",
      "type": "sequence",
      "stem": "Put the steps of ... in order.",
      "steps": ["First step", "Second step", "Third step", "Fourth step"],
      "explanation": "...",
      "source": "...",
      "as_of": null,
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "topic tag"
    },

    // slot: nodes with null at each blank (one or two blanks); layout "stack" (top to bottom) or "flow" (left to right);
    // choices include every correct label plus distractors; correct lists the labels in blank order.
    {
      "id": "m06-006",
      "type": "slot",
      "stem": "Complete the ...",
      "nodes": ["Top node", null, "Third node", null],
      "layout": "stack",
      "choices": ["Correct for blank 1", "Correct for blank 2", "Distractor A", "Distractor B"],
      "correct": ["Correct for blank 1", "Correct for blank 2"],
      "explanation": "...",
      "source": "...",
      "as_of": null,
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "topic tag"
    },

    // match: 3 to 5 [left, right] pairs; right-hand entries must be distinct and distinguishable; the right column is shuffled.
    {
      "id": "m06-007",
      "type": "match",
      "stem": "Match each ... to its ...",
      "pairs": [["Left 1", "Right 1"], ["Left 2", "Right 2"], ["Left 3", "Right 3"]],
      "explanation": "...",
      "source": "...",
      "as_of": null,
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "topic tag"
    },

    // classify: categories must be exactly one of the two fixed sets, in this order:
    //   ["Fact", "Assumption", "Company claim", "Analytical interpretation"]  or  ["Structural protection", "Narrative comfort"]
    {
      "id": "m06-008",
      "type": "classify",
      "stem": "Classify the following statement.",
      "statement": "The statement to classify.",
      "categories": ["Fact", "Assumption", "Company claim", "Analytical interpretation"],
      "correct": 2,
      "explanation": "...",
      "source": "...",
      "as_of": null,
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "topic tag"
    }
  ],
  "glossary": [
    // One entry per term in the module's glossary register (B6). variants is {"UK", "EU", "US"} or null;
    // a variant item is generated only where the US or EU term differs from the UK term.
    {
      "term": "Term",
      "aliases": ["abbreviation", "alternative name"],
      "definition": "Plain-English definition.",
      "relevance": "Relevance to Nebius.",
      "priority": "red",
      "module": 6,
      "variants": { "UK": "Term", "EU": "Term", "US": "US term" }
    }
  ]
});
