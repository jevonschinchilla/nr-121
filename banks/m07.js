window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
 "bank_version": "2026-09-16",
 "module": 7,
 "module_title": "Capex and GPU lifecycle economics",
 "items": [
  {
   "id": "m07-001",
   "type": "mcq",
   "select": "one",
   "stem": "As at 17 August 2026, what does JLL forecast as the global average shell-and-core construction cost per MW for 2026?",
   "options": [
    "$10.7 million per MW",
    "$11.3 million per MW",
    "$12.4 million per MW",
    "$25 million per MW"
   ],
   "correct": [
    1
   ],
   "explanation": "JLL forecasts $11.3 million per MW for 2026, a 6 per cent rise on the 2025 figure. $10.7 million is the 2025 average; $25 million is JLL's ceiling for tenant technology fit-out, not shell and core.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); JLL, 2026 Global Data Center Outlook (F-008)",
   "as_of": "2026",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "capex per MW"
  },
  {
   "id": "m07-002",
   "type": "mcq",
   "select": "one",
   "stem": "In the Bernstein GB200 NVL72 costing cited in the note (as at November 2025), what share of total capex do GPUs represent?",
   "options": [
    "25 per cent",
    "50 per cent",
    "39 per cent",
    "60 per cent"
   ],
   "correct": [
    2
   ],
   "explanation": "Bernstein puts GPUs at 39 per cent of total capex. The strongest distractor, 60 per cent, is Epoch AI's share for servers in annualised total cost of ownership, a different base; 50 per cent echoes Thunder Said's looser 'over half' framing.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Bernstein $/GW note via Investing.com, November 2025 (F-011)",
   "as_of": "2025-11",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "capex per MW"
  },
  {
   "id": "m07-003",
   "type": "mcq",
   "select": "one",
   "stem": "Epoch AI's May 2026 model (as at May 2026) gives the annualised cost of a one-gigawatt AI facility at three sensitivities of IT life. What is the figure at a three-year life?",
   "options": [
    "$7 billion",
    "$8.5 billion",
    "$0.9 billion",
    "$12 billion"
   ],
   "correct": [
    3
   ],
   "explanation": "At a three-year IT life the annualised cost rises to $12 billion. $8.5 billion is the five-year base case and $7 billion the seven-year case; $0.9 billion is the annual opex input, not an annualised cost.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Epoch AI, one-gigawatt TCO model, May 2026 (F-014)",
   "as_of": "2026-05",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "useful life sensitivity"
  },
  {
   "id": "m07-004",
   "type": "mcq",
   "select": "one",
   "stem": "Into roughly how many months did the Hopper to Blackwell to Rubin transition compress, according to the note?",
   "options": [
    "30 months",
    "12 months",
    "18 months",
    "48 months"
   ],
   "correct": [
    0
   ],
   "explanation": "The three-generation transition compressed into roughly 30 months, the fastest data centre equipment cycle to date. 12 to 18 months is the premium pricing window for a single vintage, not the span of three generations.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Nvidia cadence coverage, retrieved 17 August 2026 (F-029)",
   "as_of": "2026",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Nvidia cadence"
  },
  {
   "id": "m07-005",
   "type": "mcq",
   "select": "one",
   "stem": "At CES in January 2026 Nvidia renamed the rack announced as NVL144 to VR200 NVL72. What does the 72 count?",
   "options": [
    "72 GPU dies",
    "72 dual-die GPU packages",
    "72 NVLink switches",
    "72 Grace CPUs"
   ],
   "correct": [
    1
   ],
   "explanation": "The 72 counts dual-die GPU packages; the retired NVL144 name counted the 144 dies. Counting dies is the strongest distractor because it was the original CES 2025 naming basis for the same rack.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); CES January 2026 coverage (F-032, D-015)",
   "as_of": "2026-01",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Nvidia naming"
  },
  {
   "id": "m07-006",
   "type": "mcq",
   "select": "one",
   "stem": "As at 6 July 2026, what did the SemiAnalysis report of that date claim had slipped by more than 12 months?",
   "options": [
    "Base Vera Rubin VR200 NVL72 volume shipments",
    "Rubin CPX, the GDDR7 prefill part",
    "The Kyber-based Rubin Ultra tier, to 2028",
    "GB300 NVL72 production"
   ],
   "correct": [
    2
   ],
   "explanation": "SemiAnalysis reported the Kyber-based Rubin Ultra tier slipping to 2028 on rack midplane yield. Base Vera Rubin is wrong: Nvidia's same-day response stated base Rubin systems were in full production with eight cloud customers due deliveries in autumn 2026.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); SemiAnalysis, 6 July 2026, and Nvidia response (F-038)",
   "as_of": "2026-07-06",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Nvidia roadmap"
  },
  {
   "id": "m07-007",
   "type": "mcq",
   "select": "one",
   "stem": "By how much did Amazon's January 2025 reduction in useful life for a subset of servers and networking reduce 2025 operating income?",
   "options": [
    "About $600 million",
    "About $700 million",
    "About $920 million",
    "About $3.9 billion"
   ],
   "correct": [
    1
   ],
   "explanation": "The life reduction cut 2025 operating income by about $700 million. $920 million is the accelerated depreciation from early retirements booked in Q4 2024, and $600 million the further 2025 retirement charge; $3.9 billion is Alphabet's 2023 reduction.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Amazon Q4 2024 results, February 2025 (F-048, F-049)",
   "as_of": "2025-02",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "depreciation policy"
  },
  {
   "id": "m07-008",
   "type": "mcq",
   "select": "one",
   "stem": "As at 30 June 2026, by how much did the useful-life change increase Nebius's net income from continuing operations in H1 2026?",
   "options": [
    "$43.0 million",
    "$86.1 million",
    "$167.6 million",
    "$75.7 million"
   ],
   "correct": [
    3
   ],
   "explanation": "The 6-K reports a $75.7 million increase in net income from continuing operations. $86.1 million is the H1 depreciation reduction before tax effects, $43.0 million the Q2 depreciation reduction alone, and $167.6 million the expected full-year depreciation effect.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Form 6-K interim financials, 12 August 2026 (F-061)",
   "as_of": "2026-06-30",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Nebius useful life"
  },
  {
   "id": "m07-009",
   "type": "mcq",
   "select": "one",
   "stem": "As at 13 March 2026, which element of the Meta 2026 Agreement is a revenue floor rather than incremental committed demand?",
   "options": [
    "The up to $15 billion backstop order",
    "The $12 billion of dedicated GPU clusters",
    "The cluster tranches delivering in H1 2027",
    "The firm five-year orders"
   ],
   "correct": [
    0
   ],
   "explanation": "The backstop only crystallises on capacity Nebius fails to sell to third parties, so it floors revenue without adding demand. The $12 billion of dedicated clusters is the strongest distractor: those are firm five-year orders, which are incremental committed demand.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); 2025 Form 20-F, filed 30 April 2026, subsequent events (F-065, D-009)",
   "as_of": "2026-03-13",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "Meta agreement"
  },
  {
   "id": "m07-010",
   "type": "mcq",
   "select": "one",
   "stem": "As at March 2026, what level had SemiAnalysis's one-year H100 contract price index reached, having risen almost 40 per cent from its October 2025 low?",
   "options": [
    "$1.70 per GPU-hour",
    "$2.00 per GPU-hour",
    "$4.70 per GPU-hour",
    "$2.35 per GPU-hour"
   ],
   "correct": [
    3
   ],
   "explanation": "The index rose from $1.70 in October 2025 to $2.35 by March 2026. $1.70 is the starting low, $2.00 the Silicon Data December 2025 baseline, and $4.70 the bottom of launch-era pricing.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); SemiAnalysis, H100 one-year rental price index, April 2026 (F-083)",
   "as_of": "2026-03",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "H100 pricing"
  },
  {
   "id": "m07-011",
   "type": "mcq",
   "select": "one",
   "stem": "On the note's illustrative inputs, by roughly how much per GPU-hour does moving the server life from four to five years reduce the full-cost breakeven rate?",
   "options": [
    "About $0.24",
    "About $0.62",
    "About $0.37",
    "About $0.40"
   ],
   "correct": [
    2
   ],
   "explanation": "Breakeven falls from $2.26 at four years to $1.88 at five, roughly $0.37 per GPU-hour. $0.40 is the cash opex input, not the relief; $0.24 is the five-to-six-year step, and $0.62 the full four-to-six move.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); author calculation, section 6 (F-118, F-119)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "breakeven"
  },
  {
   "id": "m07-012",
   "type": "mcq",
   "select": "one",
   "stem": "How is a change in accounting estimate, such as Nebius's January 2026 useful-life revision, applied under both IAS 8 and ASC 250?",
   "options": [
    "Prospectively from the change date, with no restatement",
    "Retrospectively, with prior periods restated",
    "By disclosure only, with no effect on current-period depreciation",
    "From the start of the current year, with the cumulative effect booked in opening equity"
   ],
   "correct": [
    0
   ],
   "explanation": "A change in estimate is applied prospectively with no restatement, which is exactly how Nebius applied the four-to-five-year move from 1 January 2026. Retrospective restatement is the treatment for a change in accounting policy or an error, not an estimate.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-007; IAS 8 and ASC 250 (D-016)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "accounting estimate"
  },
  {
   "id": "m07-013",
   "type": "mcq",
   "select": "one",
   "stem": "What capacity did Oracle and OpenAI cancel at Abilene in March 2026, per the Knight Frank Q2 2026 report cited in the note?",
   "options": [
    "240 MW",
    "310 MW",
    "1.2 GW",
    "600 MW"
   ],
   "correct": [
    3
   ],
   "explanation": "The cancelled Abilene expansion was 600 MW, citing funding complications and volatile demand forecasts. 310 MW and 240 MW are Nebius's Lappeenranta and Lille figures; 1.2 GW is the size of each of Nebius's Independence and Pennsylvania sites.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Knight Frank, Data Centres: The Leading Questions, Q2 2026 (F-122)",
   "as_of": "2026-03",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "pipeline risk"
  },
  {
   "id": "m07-014",
   "type": "mcq",
   "select": "one",
   "stem": "Why does the note treat Amazon's January 2025 life reduction as stronger evidence on GPU useful lives than Meta's simultaneous extension?",
   "options": [
    "Amazon applied the change to its whole server fleet",
    "The change was voluntary and reduced reported earnings, and there is no incentive to over-depreciate",
    "Amazon's change increased its 2025 operating income",
    "Meta's extension was applied retrospectively with restatement"
   ],
   "correct": [
    1
   ],
   "explanation": "A voluntary change that reduces reported earnings is stronger evidence because nothing but operational data forces it. The first distractor is wrong on the facts: the cut applied to a subset of servers and networking, not the whole fleet.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 3 (D-006, F-048, F-051)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "evidence hierarchy"
  },
  {
   "id": "m07-015",
   "type": "mcq",
   "select": "all",
   "stem": "Which of the following apply to the July 2026 infrastructure-partnerships model announced by Nebius on 15 July 2026?",
   "options": [
    "Partners finance and own both the infrastructure and the hardware",
    "Partners operate the sites",
    "Nebius contributes architecture, supply-chain access, software and demand",
    "Nebius retains ownership of the GPUs deployed at partner sites",
    "Partner sites are pledged as collateral under the $775 million secured facility"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "Partners finance, own and operate; Nebius contributes architecture, supply-chain access, software and demand. The GPU-ownership option is wrong because partners own the hardware, which is also why the channel removes the asset-backed collateral that made the July financing possible.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Nebius press release, 15 July 2026 (F-025, F-026)",
   "as_of": "2026-07-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "partnerships model"
  },
  {
   "id": "m07-016",
   "type": "mcq",
   "select": "all",
   "stem": "Under which of the following conditions does the note conclude that a GPU earns back its cost before economic obsolescence?",
   "options": [
    "It was bought early in a scarcity window",
    "It carries committed offtake for most of its book life from a creditworthy counterparty",
    "It is deployed by an operator whose own workloads are the offtake",
    "It was bought late in a generation into a normalising merchant market",
    "It is depreciated over six years rather than four"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "The three conditions are scarcity-window timing, committed offtake from a creditworthy counterparty, and captive workloads. Depreciating over six years is the strongest distractor: the schedule changes reported margin, not cash, so it cannot make the asset pay back.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 6 (F-121, F-004)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "payback"
  },
  {
   "id": "m07-017",
   "type": "mcq",
   "select": "all",
   "stem": "A hall is engineered for liquid-cooled racks of about 130 kW. Which of the following rack-scale systems can it host without redesign, according to the note?",
   "options": [
    "GB200 NVL72",
    "GB300 NVL72",
    "Base Vera Rubin VR200 NVL72",
    "Kyber rack for Rubin Ultra"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "GB200, GB300 and base Vera Rubin all sit in the roughly 120 to 140 kW liquid envelope. The Kyber rack draws about 600 kW and needs a different power delivery and cooling envelope, so it is excluded on structural grounds.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 2 (F-042, S-005)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "facility envelope"
  },
  {
   "id": "m07-018",
   "type": "mcq",
   "select": "all",
   "stem": "Which of the following were extensions (lengthenings) of server useful life?",
   "options": [
    "Microsoft, four to six years, effective FY2023",
    "Alphabet, four to six years, effective January 2023",
    "Meta, to 5.5 years, effective January 2025",
    "Amazon, subset of servers six to five years, effective January 2025",
    "Nebius, five to four years, effective January 2026"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "Microsoft, Alphabet and Meta all lengthened lives. Amazon's January 2025 move shortened a subset from six to five years. The Nebius option reverses the direction of the actual change, which was from four to five years.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 3 depreciation table (F-045, F-047, F-048, F-051, F-058)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "depreciation policy"
  },
  {
   "id": "m07-019",
   "type": "mcq",
   "select": "all",
   "stem": "Under which of the following conditions does the note say training-to-inference cascading defends returns rather than flatters them?",
   "options": [
    "Contracted or demonstrably clearing inference demand at rates above cash cost",
    "The fleet sits where power is not the binding constraint",
    "The software stack keeps the hardware genuinely serviceable",
    "Redeployment to inference is a residual-value assumption in a model rather than a signed order",
    "The old fleet occupies scarce contracted megawatts whose opportunity cost is not reported"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "Cascading defends returns when inference demand clears above cash cost, power is unconstrained, and software keeps the kit serviceable. Assumed redeployment is the strongest distractor because it is the note's first example of the cascade flattering returns by relabelling under-utilisation.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 5 (D-012)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "cascade"
  },
  {
   "id": "m07-020",
   "type": "mcq",
   "select": "all",
   "stem": "Which of the following are among the three working rules the note sets for the Strategic Modelling seat?",
   "options": [
    "Model economic depreciation alongside book depreciation",
    "Segment every fleet metric by contract cover",
    "Treat deployment lag and vintage timing as first-class inputs, with assets not yet in use as the observable",
    "Use the five-year straight-line schedule as the only depreciation basis",
    "Blend contracted and merchant fleets into a single ROIC"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "The three rules are economic depreciation alongside book, segmentation by contract cover, and deployment lag and vintage as explicit inputs. Blending contracted and merchant fleets into one ROIC is the opposite of rule two and the misuse the note warns against.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 7 (F-126)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "modelling rules"
  },
  {
   "id": "m07-021",
   "type": "mcq",
   "select": "all_not",
   "stem": "As at 13 March 2026, which of the following statements do NOT apply to the up-to-$15 billion Meta backstop order?",
   "options": [
    "It crystallises only on capacity that Nebius fails to sell to third parties",
    "It acts as a revenue floor rather than incremental demand",
    "It comprises firm five-year orders for dedicated GPU clusters",
    "It adds committed demand on top of the $12 billion of cluster orders",
    "It caps the upside story on the capacity it covers"
   ],
   "correct": [
    2,
    3
   ],
   "explanation": "The backstop is contingent on unsold capacity, so it floors revenue and caps the upside without adding demand. Firm five-year cluster orders are the separate $12 billion element; describing the backstop as additional committed demand is the misreading the note warns against.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); 2025 Form 20-F, filed 30 April 2026, subsequent events (F-065, D-009, G-011)",
   "as_of": "2026-03-13",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "Meta agreement"
  },
  {
   "id": "m07-022",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following do NOT apply to a change in accounting estimate as described in the note?",
   "options": [
    "Prior periods must be restated",
    "It is applied retrospectively",
    "It receives the same treatment under IAS 8 and ASC 250",
    "It is applied prospectively from the date of the change",
    "Nebius's January 2026 useful-life revision is an example"
   ],
   "correct": [
    0,
    1
   ],
   "explanation": "An estimate change is prospective with no restatement and is treated alike under IAS 8 and ASC 250. Restatement and retrospective application belong to changes in accounting policy and error corrections, so both are wrong on structural grounds.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-007; IAS 8 and ASC 250 (D-016, P-005)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "accounting estimate"
  },
  {
   "id": "m07-023",
   "type": "mcq",
   "select": "all_not",
   "stem": "As at 17 August 2026, which of the following do NOT apply to JLL's 2026 shell-and-core benchmark of $11.3 million per MW?",
   "options": [
    "It includes land",
    "It includes active IT equipment",
    "It excludes tenant fit-out",
    "Liquid-cooled facilities carry a roughly 10 per cent premium on it",
    "It is roughly a quarter of the AI all-in figure"
   ],
   "correct": [
    0,
    1
   ],
   "explanation": "Shell and core excludes land, tenant fit-out and active IT by definition, and is roughly a quarter of the all-in AI figure. Including land or IT would make it a different metric, which is the confusion the distinction register warns against.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); JLL, 2026 Global Data Center Outlook (F-009, M-002, D-001)",
   "as_of": "2026",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "capex per MW"
  },
  {
   "id": "m07-024",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following do NOT apply to the note's illustrative Scenario C, the 2026 merchant-vintage GPU?",
   "options": [
    "Starts at $2.20 per hour and decays 25 per cent a year",
    "Assumes 70 per cent utilisation",
    "Pays back the $52,000 all-in capex within five years",
    "Plateaus around $32,000 of cumulative contribution",
    "Assumes a five-year take-or-pay contract"
   ],
   "correct": [
    2,
    4
   ],
   "explanation": "Scenario C never pays back: cumulative contribution plateaus near $32,000 against $52,000 of capex. A five-year take-or-pay is the defining feature of Scenario B, the contracted case, so it is wrong for C on structural grounds.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 6, Figure 5 assumptions (F-115, F-114)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "payback scenarios"
  },
  {
   "id": "m07-025",
   "type": "recall",
   "stem": "As at February 2025, which was the only US hyperscaler to have shortened server useful lives in response to the AI cadence?",
   "explanation": "Amazon reduced the life of a subset of servers and networking from six to five years effective January 2025. Every other operator in the table extended lives, so Meta, which moved to 5.5 years in the same month, is the common wrong answer.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Amazon Q4 2024 results, February 2025 (F-044, F-048)",
   "as_of": "2025-02",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "depreciation policy",
   "accept": [
    "Amazon",
    "AWS",
    "Amazon.com",
    "Amazon Web Services"
   ],
   "fuzzy": true
  },
  {
   "id": "m07-026",
   "type": "recall",
   "stem": "Name the rack to which Nvidia renamed NVL144 at CES in January 2026.",
   "explanation": "The rack became VR200 NVL72, counting 72 dual-die packages rather than 144 dies. GB200 NVL72 is the wrong generation: it is the Blackwell rack, not the Vera Rubin rack that carried the NVL144 name.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); CES January 2026 coverage (F-032)",
   "as_of": "2026-01",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Nvidia naming",
   "accept": [
    "VR200 NVL72",
    "Vera Rubin NVL72",
    "VR200",
    "Vera Rubin VR200 NVL72"
   ],
   "fuzzy": true
  },
  {
   "id": "m07-027",
   "type": "recall",
   "stem": "As at 30 April 2026, what expected reduction in FY2026 depreciation, in $ million, did the 2025 Form 20-F attribute to the January 2026 useful-life extension?",
   "explanation": "The 20-F discloses an expected FY2026 depreciation reduction of approximately $167.6 million on the installed base. $86.1 million is the realised H1 reduction and $75.7 million the H1 net income effect; neither is the full-year estimate.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); 2025 Form 20-F, filed 30 April 2026 (F-058)",
   "as_of": "2026-04-30",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Nebius useful life",
   "accept": [
    "167.6",
    "$167.6 million",
    "167.6m",
    "$167.6m",
    "approximately 167.6",
    "about 167.6"
   ],
   "fuzzy": true
  },
  {
   "id": "m07-028",
   "type": "recall",
   "stem": "As at 31 December 2025, under which US GAAP codification topic did Nebius begin capitalising interest in Q3 2025?",
   "explanation": "Interest is capitalised under ASC 835-20, with $28.0 million capitalised in 2025. IAS 23 is the IFRS equivalent (borrowing costs) and is not the standard Nebius reports under; ASC 250 governs changes in estimate, not capitalised interest.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); 2025 Form 20-F, filed 30 April 2026 (F-057, G-006)",
   "as_of": "2025-12-31",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "capitalised interest",
   "accept": [
    "ASC 835-20",
    "ASC 835 20",
    "835-20",
    "ASC 835",
    "Topic 835-20",
    "ASC Topic 835"
   ],
   "fuzzy": true
  },
  {
   "id": "m07-029",
   "type": "recall",
   "stem": "Which investor argued in 2025 that CoreWeave's annualised adjusted EBITDA did not cover the interest on its GPU assets even at a ten-year life (as at 2025)?",
   "explanation": "Jim Chanos made the cash-economics argument against CoreWeave. Michael Burry is the common confusion: his November 2025 argument attacked accounting optics across the hyperscalers, not CoreWeave's EBITDA against interest.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Chanos on CoreWeave, 2025 coverage (F-076, D-017)",
   "as_of": "2025",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "bear case",
   "accept": [
    "Jim Chanos",
    "Chanos",
    "James Chanos"
   ],
   "fuzzy": true
  },
  {
   "id": "m07-030",
   "type": "recall",
   "stem": "As at the March 2025 GTC roadmap, name the roughly 600 kW rack platform planned for Rubin Ultra.",
   "explanation": "Rubin Ultra is planned for the Kyber rack, drawing about 600 kW with 576 GPU dies. NVL72 is the wrong answer: it is the roughly 130 kW liquid-cooled envelope shared by GB200, GB300 and base Vera Rubin.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Nvidia GTC 2025 roadmap (F-037, S-005)",
   "as_of": "2025-03",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "Nvidia roadmap",
   "accept": [
    "Kyber",
    "Kyber rack",
    "Nvidia Kyber"
   ],
   "fuzzy": true
  },
  {
   "id": "m07-031",
   "type": "recall",
   "stem": "Nebius states that production inference workloads on its inference platform grew more than 3x in Q2 2026 (as at 30 June 2026). Name the platform.",
   "explanation": "The platform is Token Factory, the machinery through which Nebius monetises the training-to-inference cascade. Eigen AI and Clarifai are acquisitions and licences that strengthen the platform, not the platform itself.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Q2 2026 shareholder letter, August 2026 (F-102)",
   "as_of": "2026-06-30",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "cascade",
   "accept": [
    "Token Factory",
    "Nebius Token Factory",
    "Nebius AI Token Factory"
   ],
   "fuzzy": true
  },
  {
   "id": "m07-032",
   "type": "recall",
   "stem": "Nebius states an expected payback period for capex and operating costs on its Q2 2026 deals (as at August 2026). State that period in months.",
   "explanation": "Nebius states one year and ten months, that is 22 months, down from two to three years previously. The company figure is a claim based on forecast costs and contracted capacity, including capacity not yet built; two to three years is the superseded prior figure.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Q2 2026 shareholder letter, August 2026 (F-108)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "payback",
   "accept": [
    "22 months",
    "22",
    "twenty-two months",
    "1 year 10 months",
    "one year ten months"
   ],
   "fuzzy": true
  },
  {
   "id": "m07-033",
   "type": "define",
   "stem": "Define all-in capex per MW as the note uses it.",
   "explanation": "All-in capex per MW is total facility plus IT cost per MW of critical IT load, about $35 to 50 million for Blackwell-class capacity. The common error is quoting a shell-and-core-only figure, which is roughly a quarter of the all-in number.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-001 (M-001)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "capex per MW",
   "model_answer": "The total cost of a data centre including both the facility and IT payload, expressed per megawatt of critical IT load.",
   "rubric": {
    "must": [
     [
      "including both the facility and IT",
      "facility and IT",
      "facility plus IT",
      "including IT",
      "including the IT",
      "fully loaded",
      "total cost"
     ],
     [
      "critical IT load",
      "IT load",
      "critical load",
      "megawatt of IT",
      "MW of IT",
      "per MW",
      "per megawatt"
     ]
    ],
    "should": [
     [
      "facility",
      "building",
      "shell"
     ],
     [
      "GPU",
      "servers",
      "payload",
      "hardware",
      "compute"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "shell and core only",
      "excluding IT",
      "excludes IT",
      "excluding the IT"
     ]
    ]
   }
  },
  {
   "id": "m07-034",
   "type": "define",
   "stem": "Define critical IT load.",
   "explanation": "Critical IT load is the power available to the compute equipment, excluding cooling and losses; it is the denominator in Nebius's capacity and ACV-per-MW disclosures. Gross facility power, about 1.2 to 1.3 times higher at modern PUEs, is the confusion to avoid.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-003 (D-002, F-017)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "critical IT load",
   "model_answer": "The power available to the compute equipment itself, excluding cooling and electrical losses; it is the denominator for Nebius's capacity and ACV-per-MW disclosures.",
   "rubric": {
    "must": [
     [
      "compute equipment",
      "IT equipment",
      "computing equipment",
      "servers",
      "compute",
      "GPUs"
     ],
     [
      "excluding cooling",
      "excludes cooling",
      "not cooling",
      "without cooling",
      "net of cooling",
      "before cooling",
      "minus cooling"
     ]
    ],
    "should": [
     [
      "denominator",
      "per MW",
      "per megawatt"
     ],
     [
      "losses",
      "overhead",
      "PUE"
     ]
    ],
    "should_min": 1,
    "forbid": []
   }
  },
  {
   "id": "m07-035",
   "type": "define",
   "stem": "Define assets not yet in use, as the term appears in Nebius's 2025 Form 20-F.",
   "explanation": "Assets not yet in use are capitalised spend on equipment not yet placed in service, so neither earning nor depreciating; $2,417.4 million at end-2025. Confusing the line with placed-in-service assets misses the point: both clocks start only on the in-service date.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-004; 2025 Form 20-F, filed 30 April 2026 (F-027, D-011)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "deployment lag",
   "model_answer": "Capitalised spending on equipment that has not yet been placed in service, so it is neither earning revenue nor being depreciated; Nebius held about $2.4 billion at end-2025.",
   "rubric": {
    "must": [
     [
      "not yet been placed in service",
      "not yet placed in service",
      "not yet in service",
      "not in service",
      "not yet operating",
      "not yet deployed",
      "not yet commissioned",
      "not yet installed",
      "not yet earning"
     ],
     [
      "nor being depreciated",
      "not depreciated",
      "no depreciation",
      "not yet depreciating",
      "not being depreciated",
      "depreciation has not started",
      "before depreciation",
      "not yet depreciated",
      "not depreciating"
     ]
    ],
    "should": [
     [
      "capitalised",
      "capitalized",
      "capital spend",
      "capex",
      "spending"
     ],
     [
      "deployment lag",
      "lag",
      "idle",
      "waiting",
      "construction in progress"
     ]
    ],
    "should_min": 1,
    "forbid": []
   }
  },
  {
   "id": "m07-036",
   "type": "define",
   "stem": "Define take-or-pay in the context of Nebius's Microsoft and Meta agreements.",
   "explanation": "Take-or-pay means the customer pays the committed fees irrespective of utilisation, which is why the Microsoft and Meta contracts are the structural defence of the five-year life. A pay-per-use arrangement is the opposite: fees would follow usage rather than commitment.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-010 (D-005, F-063)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "take-or-pay",
   "model_answer": "A contract under which the customer pays the committed fees whether or not it uses the capacity; the Microsoft and Meta agreements are on these terms.",
   "rubric": {
    "must": [
     [
      "whether or not it uses",
      "whether or not they use",
      "irrespective of utilisation",
      "regardless of utilisation",
      "regardless of use",
      "regardless of usage",
      "even if unused",
      "irrespective of use",
      "whether used or not",
      "used or not"
     ],
     [
      "committed fees",
      "committed payments",
      "fixed fees",
      "committed amount",
      "must pay",
      "obliged to pay",
      "pays the committed",
      "pays regardless",
      "pays a fixed"
     ]
    ],
    "should": [
     [
      "Microsoft",
      "Meta"
     ],
     [
      "non-cancellable",
      "non cancellable",
      "binding",
      "five-year",
      "five year"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "only if used",
      "pay per use",
      "pay as you go",
      "only for what it uses"
     ]
    ]
   }
  },
  {
   "id": "m07-037",
   "type": "define",
   "stem": "Define a backstop capacity order, as in the Meta 2026 Agreement.",
   "explanation": "A backstop order commits the customer to buy only capacity that remains unsold to others, so it is a revenue floor rather than incremental demand. Treating Meta's up-to-$15 billion backstop as a firm order overstates committed demand.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-011 (D-009, F-065)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "backstop",
   "model_answer": "A commitment under which Meta buys only the capacity Nebius has failed to sell to third parties, so it acts as a revenue floor rather than incremental demand.",
   "rubric": {
    "must": [
     [
      "only the capacity",
      "only if unsold",
      "unsold",
      "not sold to others",
      "fails to sell",
      "failed to sell",
      "remains unsold",
      "cannot sell",
      "left over",
      "not sold to third parties"
     ],
     [
      "floor",
      "last resort",
      "backstop",
      "safety net",
      "minimum"
     ]
    ],
    "should": [
     [
      "rather than incremental",
      "not incremental",
      "not additional",
      "not new demand",
      "rather than new"
     ],
     [
      "Meta",
      "15 billion",
      "15bn",
      "$15bn"
     ]
    ],
    "should_min": 1,
    "forbid": []
   }
  },
  {
   "id": "m07-038",
   "type": "define",
   "stem": "Define a change in accounting estimate.",
   "explanation": "A change in estimate revises a judgement such as useful life and is applied prospectively from the change date with no restatement, under both IAS 8 and ASC 250. A change in policy or an error correction restates prior periods, which is the distinction to hold.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-007 (D-016)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "accounting estimate",
   "model_answer": "A revision of a judgement such as an asset's useful life, applied prospectively from the change date with no restatement of prior periods.",
   "rubric": {
    "must": [
     [
      "prospectively",
      "prospective",
      "going forward",
      "from the change date",
      "from that date forward",
      "from the date of change",
      "future periods only"
     ],
     [
      "no restatement",
      "not restated",
      "without restating",
      "without restatement",
      "prior periods unchanged",
      "does not restate",
      "not retrospective",
      "not retrospectively",
      "no restating"
     ]
    ],
    "should": [
     [
      "judgement",
      "judgment",
      "estimate",
      "useful life"
     ],
     [
      "IAS 8",
      "ASC 250"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "restates prior periods",
      "prior periods are restated",
      "must be restated",
      "requires restatement"
     ]
    ]
   }
  },
  {
   "id": "m07-039",
   "type": "define",
   "stem": "Define the cascade (waterfall) as a GPU fleet strategy.",
   "explanation": "The cascade demotes GPUs through progressively lighter workloads, from frontier training to inference and then batch, as they age rather than retiring them; Nebius states it as policy via Token Factory. Retirement or resale at generation end is the alternative it replaces.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-014 (F-101, P-001)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "cascade",
   "model_answer": "Demoting GPUs from frontier training to inference and then batch work as they age, rather than retiring them.",
   "rubric": {
    "must": [
     [
      "demoting",
      "demoted",
      "demotion",
      "training to inference",
      "training into inference",
      "from training",
      "hand-me-down",
      "redeploy",
      "redeployed",
      "redeploying",
      "moved down",
      "shifted to inference",
      "shifting"
     ],
     [
      "as they age",
      "as it ages",
      "over its life",
      "older",
      "ageing",
      "aging",
      "lifetime",
      "service life",
      "instead of retiring",
      "rather than retiring",
      "extend",
      "extends",
      "extending"
     ]
    ],
    "should": [
     [
      "inference"
     ],
     [
      "batch",
      "burst",
      "internal"
     ],
     [
      "Token Factory",
      "Nebius policy",
      "stated policy"
     ]
    ],
    "should_min": 1,
    "forbid": []
   }
  },
  {
   "id": "m07-040",
   "type": "define",
   "stem": "Define the accounting (full-cost) breakeven rate per GPU-hour.",
   "explanation": "The accounting breakeven is the hourly rate covering straight-line depreciation plus cash operating cost at an assumed utilisation, about $1.88 at a five-year life on the note's inputs. It is not a cash hurdle: the depreciation element is a schedule choice, not a cash outflow.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary G-015 (M-007, F-118)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "breakeven",
   "model_answer": "The hourly rate per GPU that covers straight-line depreciation plus cash operating cost at an assumed utilisation; about $1.88 per hour at a five-year life on the note's assumptions.",
   "rubric": {
    "must": [
     [
      "depreciation",
      "depreciation charge",
      "book charge",
      "straight line charge",
      "capital recovery"
     ],
     [
      "cash operating cost",
      "cash cost",
      "cash opex",
      "operating cost",
      "opex",
      "operating costs",
      "running cost"
     ],
     [
      "per GPU-hour",
      "per hour",
      "hourly",
      "per GPU hour",
      "GPU-hour",
      "an hour"
     ]
    ],
    "should": [
     [
      "utilisation",
      "utilization",
      "billed hours",
      "utilised hours"
     ],
     [
      "1.88",
      "five-year",
      "five year",
      "5-year"
     ]
    ],
    "should_min": 1,
    "forbid": []
   }
  },
  {
   "id": "m07-041",
   "type": "numeric",
   "stem": "Using the note's illustrative inputs (all-in capex $52,000 per deployed GPU, 80 per cent utilisation on 8,760 hours a year, cash opex $0.40 per billed hour, five-year straight-line life), calculate the full-cost breakeven rate per GPU-hour.",
   "explanation": "Depreciation per billed hour is 52,000 divided by (5 x 7,008) = $1.48; adding $0.40 cash cost gives $1.88. Using 8,760 unadjusted hours (ignoring utilisation) gives $1.59 and understates the breakeven.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 6 author calculation (M-007, F-118)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "breakeven",
   "value": 1.88,
   "tolerance_pct": 3,
   "unit": "$ per GPU-hour",
   "working": "52,000 / (5 x 8,760 x 0.80) = 52,000 / 35,040 = 1.48; 1.48 + 0.40 = 1.88"
  },
  {
   "id": "m07-042",
   "type": "numeric",
   "stem": "As at 17 August 2026, on the note's assumptions: all-in capex is $52,000 per deployed GPU and the customer prepays 50 per cent of capex. Calculate net cash at risk per GPU.",
   "explanation": "Net cash at risk is capex times (1 minus the prepaid share): 52,000 x 0.50 = $26,000, the top of the note's $21,000 to $26,000 range. Treating the prepayment as revenue rather than a financing of capex is the misuse the formula register flags.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 6 (M-006, F-116)",
   "as_of": "2026-08-17",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "payback",
   "value": 26000,
   "tolerance_pct": 3,
   "unit": "$ per GPU",
   "working": "52,000 x (1 - 0.50) = 26,000"
  },
  {
   "id": "m07-043",
   "type": "numeric",
   "stem": "As at 17 August 2026, a contracted deal yields $20 million of annual contract value per MW against all-in capex of $45 million per MW. Calculate the gross revenue payback in years.",
   "explanation": "Gross revenue payback is capex per MW divided by ACV per MW: 45 / 20 = 2.25 years, at the top of the note's 1.6 to 2.2 range. It is before operating costs and ignores prepayment timing, so it is not a cash payback.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 6 (M-004, F-109)",
   "as_of": "2026-08-17",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "payback",
   "value": 2.25,
   "tolerance_pct": 3,
   "unit": "years",
   "working": "45 / 20 = 2.25 years"
  },
  {
   "id": "m07-044",
   "type": "numeric",
   "stem": "As at 31 December 2025, Nebius reported $2,417.4 million of assets not yet in use and gross property and equipment of $6,190.3 million. Calculate assets not yet in use as a percentage of gross property and equipment.",
   "explanation": "2,417.4 / 6,190.3 = 39.1 per cent, the note's 'roughly 39 per cent'. Dividing by net property and equipment (gross less $637.0 million accumulated depreciation) would give about 43.5 per cent and overstate the share.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); 2025 Form 20-F, filed 30 April 2026 (M-010, F-027, F-028)",
   "as_of": "2025-12-31",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "deployment lag",
   "value": 39.1,
   "tolerance_pct": 3,
   "unit": "%",
   "working": "2,417.4 / 6,190.3 = 0.3905, so 39.1%"
  },
  {
   "id": "m07-045",
   "type": "numeric",
   "stem": "As at 30 June 2026, Nebius reported Q2 2026 D&A of $259.7 million on revenue of $582 million. Calculate depreciation intensity (D&A as a percentage of revenue).",
   "explanation": "259.7 / 582 = 44.6 per cent, which the letter rounds to 45 per cent, down from 72 per cent a year earlier. Reading the fall as pure operating leverage ignores the $43.0 million of Q2 depreciation removed by the useful-life extension.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Q2 2026 shareholder letter, August 2026 (M-009, F-060, F-062)",
   "as_of": "2026-06-30",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "depreciation intensity",
   "value": 44.6,
   "tolerance_pct": 3,
   "unit": "%",
   "working": "259.7 / 582 = 0.446, so 44.6%"
  },
  {
   "id": "m07-046",
   "type": "numeric",
   "stem": "In the note's Scenario B a GPU bills $2.50 per hour at 92 per cent billed hours on 8,760 hours a year, with cash opex of $0.40 per billed hour. Calculate year-one cash contribution per GPU.",
   "explanation": "Contribution is (rate minus cash opex) times billed hours: (2.50 - 0.40) x 0.92 x 8,760 = $16,924, matching the note's $17k first-year point. Charging opex on all 8,760 hours rather than billed hours gives $16,644 and understates contribution.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 6, Figure 5 (M-005, P-006, F-114)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "payback scenarios",
   "value": 16924,
   "tolerance_pct": 1.5,
   "unit": "$ per GPU-year",
   "working": "(2.50 - 0.40) x 0.92 x 8,760 = 2.10 x 8,059.2 = 16,924. Tolerance tightened to 1.5% so that the all-hours error ($16,644, 1.7% low) is not accepted."
  },
  {
   "id": "m07-047",
   "type": "sequence",
   "stem": "Place the stages of the GPU fleet cascade (waterfall) in the order hardware passes through them as it ages, per the note's Figure 4.",
   "explanation": "The cascade runs frontier training, fine-tuning and non-frontier training, high-volume inference, batch and burst capacity, then resale or scrap. The common error is placing high-volume inference before fine-tuning; inference is priced on cost per token and sits later in the ladder.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 5, Figure 4 (P-001, F-104)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "cascade",
   "steps": [
    "Frontier training at peak rates (months 0 to 18)",
    "Fine-tuning and non-frontier training (months 12 to 30)",
    "High-volume inference priced on cost per token (months 18 to 48)",
    "Batch, internal and burst capacity at cash pricing (months 36 to 60)",
    "Resale or scrap into a thin secondary market"
   ]
  },
  {
   "id": "m07-048",
   "type": "sequence",
   "stem": "As at 17 August 2026, place these Nvidia data centre generations in the order of the roadmap set out in the note.",
   "explanation": "The order is H100, H200, GB200 NVL72, GB300 NVL72, Vera Rubin VR200 NVL72, Rubin Ultra on Kyber, then Feynman. The likeliest slip is swapping GB300 and Vera Rubin: GB300 is the H2 2025 Ultra refresh of Blackwell, Vera Rubin the H2 2026 new generation.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 2, Figure 2 (P-002)",
   "as_of": "2026-08-17",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "Nvidia cadence",
   "steps": [
    "Hopper H100 (2022, air-cooled racks 30 to 45 kW)",
    "H200 (2024, HBM3e step)",
    "GB200 NVL72 (2025, liquid-cooled about 130 kW)",
    "GB300 NVL72 Ultra refresh (H2 2025, about 140 kW)",
    "Vera Rubin VR200 NVL72 (H2 2026, HBM4)",
    "Rubin Ultra on the Kyber rack (2027, possibly 2028)",
    "Feynman (2028)"
   ]
  },
  {
   "id": "m07-049",
   "type": "sequence",
   "stem": "Place the steps of the deployment lag from capex to earning asset in order, as the note traces it through Nebius's balance sheet.",
   "explanation": "Capex is paid and hardware delivered, capitalised as assets not yet in use, installed and commissioned, placed in service (starting both clocks), then invoiced or sold. Placing 'placed in service' before commissioning is the common error: depreciation starts only when the asset is ready for use.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); sections 1, 2 and 6; 2025 Form 20-F, filed 30 April 2026 (P-007, D-011)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "deployment lag",
   "steps": [
    "Capex paid and hardware delivered",
    "Capitalised as assets not yet in use (no depreciation, no revenue)",
    "Installation, power-on and commissioning",
    "Placed in service: depreciation and revenue clocks start",
    "Contracted invoicing or merchant sale begins"
   ]
  },
  {
   "id": "m07-050",
   "type": "sequence",
   "stem": "Place these hyperscaler and neocloud useful-life changes in chronological order.",
   "explanation": "The sequence runs 2020 to 2021 moves to four years, Microsoft's July 2022 announcement, Alphabet and CoreWeave in January 2023, Amazon's extension in January 2024, Meta's extension alongside Amazon's reversal in January 2025, and Nebius in January 2026. Amazon's 2024 extension is often forgotten and misplaced after its 2025 cut.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 3 (P-008)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "depreciation policy",
   "steps": [
    "Several operators move from three to four years (2020 to 2021)",
    "Microsoft announces four to six years (July 2022, effective FY2023)",
    "Alphabet moves to six years; CoreWeave five to six (January 2023)",
    "Amazon extends five to six years (January 2024)",
    "Meta extends to 5.5 years while Amazon reverses a subset to five (January 2025)",
    "Nebius extends four to five years (January 2026)"
   ]
  },
  {
   "id": "m07-051",
   "type": "slot",
   "stem": "Complete the rack-scale generation and facility-envelope ladder from the note, from the air-cooled Hopper rack to the Kyber rack.",
   "explanation": "The middle band is the liquid-cooled NVL72 envelope of about 120 to 140 kW shared by GB200, GB300 and VR200. Rubin CPX is a GDDR7 prefill part, not a rack envelope, and Feynman is a 2028 generation with no envelope given in the note.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 2, Figure 2 (S-005, F-039)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "facility envelope",
   "layout": "flow",
   "nodes": [
    "Air-cooled HGX H100 rack (30 to 45 kW)",
    null,
    "Kyber rack, Rubin Ultra (about 600 kW)"
   ],
   "choices": [
    "Liquid-cooled NVL72 rack, GB200 to VR200 (about 120 to 140 kW)",
    "Rubin CPX, GDDR7 prefill part",
    "Feynman generation (2028)"
   ],
   "correct": [
    "Liquid-cooled NVL72 rack, GB200 to VR200 (about 120 to 140 kW)"
   ]
  },
  {
   "id": "m07-052",
   "type": "slot",
   "stem": "As at August 2026, complete Nebius's 2026 capex funding stack, ordered from most to least asset-linked.",
   "explanation": "The second layer is secured asset-level debt ($775 million at SOFR plus 2.50 per cent) and the fourth is partner-owned capacity under the partnerships model. Take-or-pay invoicing and the Meta backstop are revenue mechanisms, not funding layers, and capitalised interest is a cost added to asset value, not a source of funds.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Q2 2026 shareholder letter, August 2026; press releases 15 and 17 July 2026 (S-004, F-021, F-023, F-025)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "capex funding",
   "layout": "stack",
   "nodes": [
    "Customer prepayments (over $9 billion expected in 2026; 50 to 60 per cent of capex on 70 per cent of Q2 deals)",
    null,
    "Equity and ATM ($2 billion Nvidia warrant, ATM in use, $8 billion cash)",
    null
   ],
   "choices": [
    "Secured asset-level debt ($775 million at SOFR plus 2.50 per cent)",
    "Partner-owned capacity (partnerships model, off Nebius balance sheet)",
    "Take-or-pay tranche invoicing (Microsoft, monthly through October 2031)",
    "Meta backstop order (up to $15 billion)",
    "Capitalised interest under ASC 835-20"
   ],
   "correct": [
    "Secured asset-level debt ($775 million at SOFR plus 2.50 per cent)",
    "Partner-owned capacity (partnerships model, off Nebius balance sheet)"
   ]
  },
  {
   "id": "m07-053",
   "type": "slot",
   "stem": "Complete the note's evidence hierarchy in the useful-life debate, ranked from most to least verifiable.",
   "explanation": "Market evidence (rental paths, secondary values, auction clears) ranks second and company claims (Nvidia's four-to-six-year statement, CoreWeave's 95 per cent rebooking) third. 'Assumption' and 'analytical interpretation' are classification labels from the fact register, not tiers of this hierarchy.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 4 (S-008)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "evidence hierarchy",
   "layout": "stack",
   "nodes": [
    "Structural evidence (contract cover, counterparty credit, voluntary and costly reversals)",
    null,
    null,
    "Narrative comfort (accounting symmetry, generic cascade assertions)"
   ],
   "choices": [
    "Market evidence (rental rate paths, secondary values, auction clears)",
    "Company claims (Nvidia four-to-six-year statement, CoreWeave 95 per cent rebooking)",
    "Assumption (illustrative model input)",
    "Analytical interpretation (the note's own reasoning)"
   ],
   "correct": [
    "Market evidence (rental rate paths, secondary values, auction clears)",
    "Company claims (Nvidia four-to-six-year statement, CoreWeave 95 per cent rebooking)"
   ]
  },
  {
   "id": "m07-054",
   "type": "match",
   "stem": "Match each metric from the note's formula register to its formula.",
   "explanation": "Breakeven divides capex by life, hours and utilisation then adds cash cost; net cash at risk scales capex by one minus the prepaid share; gross payback divides capex per MW by ACV per MW. The likeliest swap is reading gross payback as a per-GPU cash figure; it is per MW and pre-opex.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); formula register (M-004, M-006, M-007, M-010, M-012)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "formulas",
   "pairs": [
    [
     "Accounting breakeven rate per GPU-hour",
     "K / (L x 8,760 x u) + c"
    ],
    [
     "Net cash at risk after prepayment",
     "K x (1 minus prepaid share)"
    ],
    [
     "Gross revenue payback per MW",
     "Capex per MW / ACV per MW"
    ],
    [
     "Assets not yet in use share of gross PP&E",
     "ANYIU / gross property and equipment"
    ],
    [
     "Sector capex to depreciation ratio",
     "Trailing four-quarter capex / reported depreciation"
    ]
   ]
  },
  {
   "id": "m07-055",
   "type": "match",
   "stem": "Match each UK or IFRS term from the module glossary to its US GAAP or IFRS jurisdictional variant.",
   "explanation": "Assets not yet in use is construction in progress under US GAAP; residual value is salvage value in US usage; capitalised interest is IAS 23 borrowing costs under IFRS; shell and core is core and shell in the US. Salvage and residual are the pair most often reversed.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); glossary register (G-002, G-004, G-006, G-009)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "glossary variants",
   "pairs": [
    [
     "Assets not yet in use",
     "Construction in progress (US GAAP)"
    ],
    [
     "Residual value",
     "Salvage value (US)"
    ],
    [
     "Capitalised interest",
     "Borrowing costs under IAS 23 (IFRS)"
    ],
    [
     "Shell and core",
     "Core and shell (US)"
    ]
   ]
  },
  {
   "id": "m07-056",
   "type": "match",
   "stem": "As at 17 August 2026, match each operator's useful-life change to its disclosed financial effect.",
   "explanation": "Alphabet's 2023 extension cut depreciation $3.9 billion; Amazon's 2025 reduction cut operating income about $700 million; Meta's extension lowered 2025 depreciation about $2.9 billion; Nebius expects about $167.6 million lower FY2026 depreciation. Confusing Meta's $2.9 billion with the Meta 2025 order of ~$2.9 billion is a coincidence of figures, not a link.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 3 depreciation table (F-047, F-048, F-051, F-058)",
   "as_of": "2026-08-17",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "depreciation policy",
   "pairs": [
    [
     "Alphabet, four to six years, January 2023",
     "2023 depreciation reduced $3.9 billion; net income up $3.0 billion"
    ],
    [
     "Amazon, subset six to five years, January 2025",
     "2025 operating income reduced about $700 million"
    ],
    [
     "Meta, to 5.5 years, January 2025",
     "2025 depreciation about $2.9 billion lower"
    ],
    [
     "Nebius, four to five years, January 2026",
     "FY2026 depreciation expected about $167.6 million lower"
    ]
   ]
  },
  {
   "id": "m07-057",
   "type": "classify",
   "stem": "Classify the following statement from the note.",
   "explanation": "The payback figure is a company estimate built on forecast costs and contracted capacity, including capacity not yet built, so it is a company claim. It is not a fact until delivery, and the note's independent 1.6 to 2.2 year cross-check is the analytical interpretation.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); Q2 2026 shareholder letter, August 2026 (F-108, D-007)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "payback",
   "statement": "As at August 2026, the expected payback period for capex and operating costs on Nebius's Q2 2026 deals is one year and ten months.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 2
  },
  {
   "id": "m07-058",
   "type": "classify",
   "stem": "Classify the following statement from the note.",
   "explanation": "The $52,000 all-in figure is an illustrative model input the note constructs from benchmarks, so it is an assumption. It is not a fact from a filing, and it is not Nebius's number, so it cannot be a company claim.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 6 assumptions table (F-111)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "payback scenarios",
   "statement": "All-in capex per deployed H100 is $52,000: server $36,000, networking and storage $6,000 and facility allocation $10,000.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 1
  },
  {
   "id": "m07-059",
   "type": "classify",
   "stem": "Classify the following defence of Nebius's five-year server life.",
   "explanation": "A five-year take-or-pay from an investment-grade counterparty binds cash to the depreciation period, so it is structural protection. Contrast the accounting-symmetry argument, which binds nothing and is narrative comfort.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 4 counterarguments (D-005, F-100)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "useful life defence",
   "statement": "Five-year take-or-pay contracts with Microsoft and Meta match the depreciation period to contracted cash flows from investment-grade counterparties.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 0
  },
  {
   "id": "m07-060",
   "type": "classify",
   "stem": "Classify the following defence of five-to-six-year GPU lives.",
   "explanation": "Accounting symmetry is true but binds nothing: it concedes that reported margins are a modelling choice, so it is narrative comfort. Structural protection requires something that constrains cash or the counterparty, such as contract cover.",
   "source": "Module 7 note, 17 August 2026 (compiled 15 September 2026); section 4 counterargument 5 (D-005, F-085)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "useful life defence",
   "statement": "Cash is identical under any depreciation schedule, and both US GAAP and IFRS leave useful life to management judgement, so a three-to-six-year life is defensible either way.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 1
  }
 ],
 "glossary": [
  {
   "term": "All-in capex per MW",
   "aliases": [
    "Fully loaded cost per MW",
    "$/MW all-in",
    "capex/MW"
   ],
   "definition": "Total cost per MW of critical IT load including facility and IT payload",
   "relevance": "Benchmarks the ~$35 to 50m per MW against which Nebius deal yields are judged. Same usage across jurisdictions; ensure the IT-load versus gross-power denominator is stated.",
   "priority": "red",
   "module": 7,
   "variants": null
  },
  {
   "term": "Shell and core",
   "aliases": [
    "Core and shell",
    "S&C",
    "base build",
    "powered shell"
   ],
   "definition": "Building structure and base services, excluding tenant fit-out and IT",
   "relevance": "JLL's $11.3m per MW 2026 benchmark is shell and core only.",
   "priority": "amber",
   "module": 7,
   "variants": {
    "UK": "shell and core",
    "EU": "",
    "US": "core and shell"
   }
  },
  {
   "term": "Critical IT load",
   "aliases": [
    "IT load",
    "critical load",
    "IT capacity",
    "MW IT"
   ],
   "definition": "Power available to compute equipment, excluding cooling and losses",
   "relevance": "The denominator in Nebius capacity and ACV-per-MW disclosures. Universal term; contrast with gross or utility power.",
   "priority": "red",
   "module": 7,
   "variants": null
  },
  {
   "term": "Assets not yet in use",
   "aliases": [
    "CIP",
    "construction in progress",
    "AUC",
    "assets under construction",
    "WIP"
   ],
   "definition": "Capitalised spend on equipment not yet in service; no depreciation yet",
   "relevance": "$2.4bn at end-2025; the balance-sheet measure of deployment lag.",
   "priority": "red",
   "module": 7,
   "variants": {
    "UK": "",
    "EU": "assets under construction",
    "US": "construction in progress"
   }
  },
  {
   "term": "Placed in service",
   "aliases": [
    "In-service date",
    "brought into use",
    "commissioned",
    "energised"
   ],
   "definition": "The date an asset starts earning and depreciating",
   "relevance": "Start of both the revenue window and the depreciation clock per tranche. US tax-influenced term.",
   "priority": "amber",
   "module": 7,
   "variants": {
    "UK": "brought into use",
    "EU": "",
    "US": "placed in service"
   }
  },
  {
   "term": "Capitalised interest",
   "aliases": [
    "Capitalized interest",
    "IDC",
    "interest during construction",
    "IAS 23 borrowing costs"
   ],
   "definition": "Borrowing cost added to asset cost during construction (ASC 835-20)",
   "relevance": "Began Q3 2025; $28.0m in 2025; grows with the debt-funded build. Mandatory under both IFRS (IAS 23) and US GAAP; US spelling capitalized interest.",
   "priority": "amber",
   "module": 7,
   "variants": {
    "UK": "",
    "EU": "borrowing costs",
    "US": ""
   }
  },
  {
   "term": "Change in accounting estimate",
   "aliases": [
    "Prospective change",
    "useful-life revision",
    "estimate change",
    "ASC 250 change"
   ],
   "definition": "Revision of a judgement (e.g. useful life) applied prospectively, no restatement",
   "relevance": "The January 2026 four-to-five-year move; $167.6m expected 2026 effect. Same treatment under IFRS (IAS 8) and US GAAP (ASC 250).",
   "priority": "red",
   "module": 7,
   "variants": null
  },
  {
   "term": "Straight-line vs economic depreciation",
   "aliases": [
    "SL depreciation",
    "book vs economic depreciation",
    "accelerated vs straight-line"
   ],
   "definition": "Equal annual charge vs the actual value-loss curve, which is front-loaded for GPUs",
   "relevance": "The gap between the two is the entire useful-life controversy. Universal; UK texts use useful economic life for the underlying period.",
   "priority": "red",
   "module": 7,
   "variants": null
  },
  {
   "term": "Residual (salvage) value",
   "aliases": [
    "Salvage value",
    "scrap value",
    "terminal value",
    "RV",
    "residual value"
   ],
   "definition": "Assumed end-of-life value deducted from the depreciable amount",
   "relevance": "Usually near zero for GPUs; secondary prices inform life, not book salvage.",
   "priority": "amber",
   "module": 7,
   "variants": {
    "UK": "residual value",
    "EU": "residual value",
    "US": "salvage value"
   }
  },
  {
   "term": "Take-or-pay",
   "aliases": [
    "ToP",
    "committed capacity contract",
    "non-cancellable commitment",
    "hell-or-high-water"
   ],
   "definition": "Customer pays committed fees irrespective of utilisation",
   "relevance": "Microsoft and Meta agreements; the structural defence of the 5-year life. The US leasing analogue is the hell-or-high-water clause.",
   "priority": "red",
   "module": 7,
   "variants": null
  },
  {
   "term": "Backstop capacity order",
   "aliases": [
    "Backstop order",
    "capacity backstop",
    "floor commitment",
    "last-resort offtake"
   ],
   "definition": "Commitment to buy capacity only if unsold to others",
   "relevance": "Meta's up-to-$15bn 2026 order: a revenue floor, not incremental demand. Deal-specific; no standard variant.",
   "priority": "red",
   "module": 7,
   "variants": null
  },
  {
   "term": "NVL72 rack-scale system",
   "aliases": [
    "GB200 NVL72",
    "GB300 NVL72",
    "VR200 NVL72",
    "NVL144",
    "Oberon rack",
    "rack-scale system"
   ],
   "definition": "72 GPU packages, switches and CPUs sold and deployed as one ~130 kW liquid-cooled unit",
   "relevance": "The unit of Nebius capacity planning; Mantsala hosted Europe's first GB300 NVL72. Nvidia branding; die-count naming (NVL144) versus package count (VR200 NVL72).",
   "priority": "red",
   "module": 7,
   "variants": null
  },
  {
   "term": "Vintage",
   "aliases": [
    "Cohort",
    "deployment cohort",
    "fleet vintage",
    "generation cohort"
   ],
   "definition": "A cohort of fleet defined by purchase and deployment window",
   "relevance": "Return profiles differ sharply by vintage; ladder the fleet in models. Borrowed from credit; used identically.",
   "priority": "amber",
   "module": 7,
   "variants": null
  },
  {
   "term": "Cascade (waterfall)",
   "aliases": [
    "Waterfall",
    "redeployment",
    "demotion",
    "training-to-inference cascade",
    "hand-me-down fleet"
   ],
   "definition": "Demoting hardware through training, inference, batch as it ages",
   "relevance": "Stated Nebius policy via Token Factory; defends or flatters per section 5. Also refresh cycle, demotion; no jurisdictional variant.",
   "priority": "red",
   "module": 7,
   "variants": null
  },
  {
   "term": "Accounting breakeven rate",
   "aliases": [
    "Full-cost breakeven",
    "book breakeven $/GPU-hour",
    "all-in hourly cost"
   ],
   "definition": "Per-hour rate covering depreciation plus cash cost at assumed utilisation",
   "relevance": "~$1.88 per hour at a 5-year life on section 6 assumptions. Analytical term, not a filing term.",
   "priority": "amber",
   "module": 7,
   "variants": null
  }
 ]
});
