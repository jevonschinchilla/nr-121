# Nebius Revision

Static flashcard engine for the Nebius pre-start curriculum. Vanilla HTML, CSS and JavaScript; no build step, no server, no external requests. Runs as a home-screen web app on iPhone from GitHub Pages and works offline once cached.

Application 1.0.0, 15 September 2026.

## Files

| File | Purpose | Upload to the repository |
|---|---|---|
| index.html | The application (UI, styles and logic, all inline) | yes |
| nbis_core.js | Scorer, selection, glossary generation and validation, shared with tests.html | yes |
| sw.js | Service worker: caches the application and banks for offline use; version constant inside | yes |
| manifest.webmanifest | Home-screen name, icon and standalone display | yes |
| icon-180.png | Home-screen icon | yes |
| .nojekyll | Stops GitHub Pages ignoring files whose names begin with an underscore | yes |
| banks/m00_seed.js | Seed bank, module 0 (24 items and six glossary entries); delete when module banks are live | yes, until retired |
| banks/m01.js to banks/m12.js | Module banks, added as each authoring chat delivers them | as authored |
| banks/TEMPLATE.js | Annotated empty bank for authoring chats | optional |
| NBIS_schema.md | Bank format, scoring, selection and validation rules | optional |
| NBIS_validate.py | Bank validator, run on the Mac before upload | no |
| NBIS_scorer.py | Python reference scorer with the fixture runner | no |
| NBIS_fixtures.js, NBIS_tests.js, tests.html | Test suite (tests.html can be hosted if you want to run it on the phone) | optional |

The service worker precaches index.html, nbis_core.js, manifest.webmanifest, icon-180.png and every bank file that exists. Only the files marked "yes" are needed for the site to run.

## Set-up (once)

A GitHub Pages site is public. Keep the repository name non-descriptive; the page carries a noindex tag; nothing in the banks should be anything a colleague could not read.

1. Create a free GitHub account with two-factor authentication.
2. New repository: non-descriptive name, Public, tick Add a README, Create repository.
3. Add file, Upload files: drag index.html, nbis_core.js, sw.js, manifest.webmanifest, icon-180.png, .nojekyll and the banks folder (Chrome and Safari on the Mac keep the folder path). Commit to main. If the browser drops the folder, use Add file, Create new file and type `banks/m00_seed.js` as the name: the slash creates the folder.
4. Settings, Pages: Source "Deploy from a branch", branch main, folder / (root), Save. The Actions tab shows the "pages build and deployment" run; the Pages settings page then shows the URL, `https://[username].github.io/[repository]/`.
5. Open the URL on the Mac. The home screen should list Seed with 24 items and show "Application 1.0.0" at the foot. A 404 in the first minutes is normal; if it persists, check that index.html sits at the repository root with that exact lower-case name.
6. iPhone: open the URL in Safari, Share, Add to Home Screen, Add. Launched from the icon the app runs standalone with its own storage, exempt from Safari's seven-day eviction of site data for sites you stop visiting.

## Operating loop

**Adding or replacing a bank.** Validate on the Mac first: `python3 NBIS_validate.py banks/m06.js` (or `banks/*.js` to check every bank together, which also catches duplicate stems across modules). Then in the repository open the banks folder, Add file, Upload files, drop the file (a file with the same name replaces the old one), Commit. GitHub Pages serves changed files within about ten minutes. On the phone: Settings, Check for updates. The status line names the files that changed and the page reloads; the new bank version shows on the home screen. Change `bank_version` in the file on every upload so this is visible.

**Updating the engine.** Upload index.html, nbis_core.js and sw.js together, with the `VERSION` constant in sw.js changed (the cache name is derived from it, so a new version replaces the old cache on the next visit). Check for updates on the phone installs the new worker and reloads.

**Retiring the seed bank.** Delete banks/m00_seed.js from the repository once module banks exist. Check for updates removes it from the phone's cache; Seed disappears from the home screen; attempts recorded against seed items stay in the log and are ignored.

**Backups.** Progress lives only on the phone. Settings, Export progress, then Share, saves the JSON to Files or iCloud Drive (the copy-to-clipboard fallback appears where sharing is unavailable). Import on the Mac or another phone merges by union: nothing is duplicated, nothing is lost. Export after each week's sessions.

**Faulty items.** On any feedback screen, Report issue records the item id and a note. Settings, Export issues copies the list to paste into a correction chat with the bank file. Items excluded at load for a validation error are listed under Settings, Bank issues.

**Profiles.** Settings, Profiles: rename the current profile, add another, or switch. Leaderboards, history, progress and Weak Spots are kept per profile.

## Using the app

Home lists the modes. Pick one to start a session of 25 questions (or 10, set in Settings). Each question shows the module and type badges and the elapsed clock, which pauses when the app is in the background. Answer, Submit, read the feedback, Next. Don't know records an incorrect attempt without an answer. A session left mid-way is offered for resumption on the next open, at the same question with the same option order; Discard drops it.

Typed answers (recall, define, numeric) are scored automatically. If the scorer rejects an answer you consider correct, Accept my answer on the feedback screen counts it as correct; the summary, leaderboard and statistics show how many overrides a run relied on.

Weak Spots lists every item with two or more incorrect answers in its last three attempts; Drill Weak Spots runs a session on that list. An item leaves the list after two consecutive correct answers.

Desktop shortcuts: 1 to 9 select options, chips or categories; Return submits and advances; Backspace returns the last sequence chip; Escape cancels a pending selection; Shift+Return inserts a line in a define answer.

## Testing on the Mac

- `node NBIS_tests.js`: scorer fixtures, selection quota and weighting, shuffles, validation and glossary generation (49 checks).
- `python3 NBIS_scorer.py`: the same 67 scorer fixtures against the Python reference (must match the JavaScript results exactly).
- `python3 NBIS_validate.py banks/*.js`: bank validation; exits non-zero on any error.
- tests.html: the JavaScript suite in a browser; open it from a local web server or the hosted URL so that the script files resolve (`python3 -m http.server` in the repository folder, then `http://localhost:8000/tests.html`).

index.html opens directly from Finder for a look at the interface, but the service worker and Check for updates need an http origin (the local server above or the hosted URL).

## Troubleshooting

A blank or stale page after an update: force-quit the home-screen app and reopen; if still stale, Settings, Check for updates; failing that, remove the icon, clear the site's data in Safari settings, and add it again.

A bank not appearing: the file name must match exactly (banks/m06.js, lower case) and contain the `window.NBIS_BANKS.push(` registration; Settings, Bank issues lists any validation error with the item id.

A module shows fewer items than the bank contains: the missing items failed validation; see Bank issues.

Storage: Settings shows the size of the progress record. At roughly one hundred bytes per attempt the record reaches a megabyte after some ten thousand attempts, well inside the browser limit; export regularly regardless.
