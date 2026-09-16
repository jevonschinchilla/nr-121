window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
 "bank_version": "2026-09-16",
 "module": 11,
 "module_title": "Capstone model build, Stage 1: assumption architecture",
 "items": [
  {
   "id": "m11-001",
   "type": "mcq",
   "select": "one",
   "stem": "In the Stage 1 model, facility capex is denominated per MW of which load?",
   "options": [
    "Gross facility load",
    "IT load",
    "Connected power",
    "Contracted power"
   ],
   "correct": [
    1
   ],
   "explanation": "The register denominates facility capex per MW of IT (critical) load. Gross facility load, the strongest distractor, is what sizes the grid connection and transformers, not the capex denominator; connected and contracted power are Nebius capacity states, not denominators.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-003)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Capacity definition"
  },
  {
   "id": "m11-002",
   "type": "mcq",
   "select": "one",
   "stem": "Which load sizes the grid connection, transformers and generation scope in the Stage 1 model?",
   "options": [
    "Gross facility load (IT load multiplied by PUE)",
    "IT load, the capex denominator, before any PUE uplift",
    "Active power at each tranche RFS",
    "GPU-allocated IT load at the 90 per cent share",
    "Contracted power at model start"
   ],
   "correct": [
    0
   ],
   "explanation": "Power infrastructure is sized on gross facility load, IT load multiplied by PUE, because cooling and losses must be served. IT load, the strongest distractor, is the capex denominator but understates the grid draw; GPU-allocated load is a further subset.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-002)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Capacity definition"
  },
  {
   "id": "m11-003",
   "type": "mcq",
   "select": "one",
   "stem": "In the Stage 1 model, which of Nebius's capacity states is flagged at utility energisation?",
   "options": [
    "Connected power",
    "Active power",
    "Contracted power",
    "Committed power"
   ],
   "correct": [
    0
   ],
   "explanation": "Connected power (built and equipped data centres) maps to energisation. Active power, the strongest distractor, requires installed, revenue-generating IT and is flagged at each tranche's RFS; contracted power is flagged at model start; committed power is not a Nebius state.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; Nebius Q1 2026 shareholder letter, May 2026 (F-005)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Capacity states"
  },
  {
   "id": "m11-004",
   "type": "mcq",
   "select": "one",
   "stem": "Why does the Stage 1 note propose monthly rather than quarterly columns?",
   "options": [
    "Tranches land at two-to-three month intervals and quarterly columns smear the ramp",
    "Quarterly columns cannot carry a ten-year horizon within the 120-period limit of the engine",
    "Nebius reports contracted, connected and active power monthly, so the model must match that cadence",
    "Debt service in Stage 5 is paid monthly and needs a monthly flag",
    "The JLL construction benchmark is updated monthly"
   ],
   "correct": [
    0
   ],
   "explanation": "Monthly granularity preserves a ramp whose tranches arrive two to three months apart; quarterly columns would blur it. Monthly period-end flags also support semi-annual, not monthly, debt service in Stage 5, so the debt-service option is the strongest distractor and is wrong on the frequency.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-007)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Periodicity"
  },
  {
   "id": "m11-005",
   "type": "mcq",
   "select": "one",
   "stem": "What all-in price per GB300 NVL72 rack does the Stage 1 base case assume?",
   "options": [
    "$3.1 million",
    "$3.9 million",
    "$5.9 million",
    "$4.0 million",
    "$6.5 million"
   ],
   "correct": [
    3
   ],
   "explanation": "The base assumes $4.0m per rack all-in. $3.9m, the strongest distractor, is SemiAnalysis's GB200 all-in figure; $3.1m is GB200 bare; $5.9m is Bernstein's GB200-class all-in; $6.5m is the top of the reported GB300 range.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-044)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Capex register"
  },
  {
   "id": "m11-006",
   "type": "mcq",
   "select": "one",
   "stem": "Which component is the largest single block of facility capex in the Stage 1 register, at $5.5m per MW of IT load at base?",
   "options": [
    "Shell and core",
    "Power chain",
    "Cooling",
    "Fit-out, BMS and commissioning"
   ],
   "correct": [
    1
   ],
   "explanation": "The power chain (HV intake to busbar, UPS, backup scope) is $5.5m/MW at base, the largest facility line and the most lead-time-exposed. Shell and core and cooling, the strongest distractors, are each $2.5m/MW; fit-out is $1.5m/MW.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-043)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Capex register"
  },
  {
   "id": "m11-007",
   "type": "mcq",
   "select": "one",
   "stem": "In the base delivery timeline, in which month from NTP does utility energisation occur?",
   "options": [
    "Month 12",
    "Month 17",
    "Month 19",
    "Month 13",
    "Month 23"
   ],
   "correct": [
    3
   ],
   "explanation": "Energisation is base month 13, one month after shell and core completion (month 12). Month 19, the strongest distractor, is the downside energisation month; month 17 is tranche 1 RFS and month 23 is full 100 MW active.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-060)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Delivery timeline"
  },
  {
   "id": "m11-008",
   "type": "mcq",
   "select": "one",
   "stem": "Once grid connection is assumed secured at NTP, which milestone does the note identify as the single largest slip risk retained inside the model?",
   "options": [
    "Shell and core completion",
    "GPU delivery for tranche 1",
    "MEP installation",
    "Utility energisation",
    "Cluster burn-in"
   ],
   "correct": [
    3
   ],
   "explanation": "Utility energisation depends on grid works outside developer control, so it is the largest retained slip risk. GPU delivery, the strongest distractor, governs tranche RFS but sits later and shorter in the delivery-risk stack; shell and MEP are construction trades.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-062)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Delivery risk"
  },
  {
   "id": "m11-009",
   "type": "mcq",
   "select": "one",
   "stem": "As at 26 September 2025, how does the Stage 1 note classify the Nvidia CEO's statement that each GW of AI data centre capacity costs $50 to 60 billion of total capex?",
   "options": [
    "Vendor claim",
    "Independent estimate",
    "Fact (primary source)",
    "Sell-side bottom-up estimate"
   ],
   "correct": [
    0
   ],
   "explanation": "The figure originates with the party that benefits from the number, so it is a vendor claim and sits at the top of the range. Independent estimate, the strongest distractor, describes Epoch AI's $38bn model; Bernstein's $35bn is sell-side bottom-up.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; Nvidia CEO, reported by Tiger Brokers, 26 September 2025 (F-038, D-006)",
   "as_of": "2025-09-26",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Cost anchors"
  },
  {
   "id": "m11-010",
   "type": "mcq",
   "select": "one",
   "stem": "As at the 2026 JLL Global Data Center Outlook, what scope does JLL's $11.3 million per MW average construction cost cover?",
   "options": [
    "All-in project cost including the tenant technology fit-out and active IT equipment",
    "Power chain and cooling for a liquid-cooled facility, excluding shell and core and land",
    "Full facility including land, power, cooling and fit-out but excluding active IT",
    "Shell and core of a single-tenant 50 MW air-cooled facility, excluding land and active IT",
    "Liquid-cooled facility including the 10 per cent premium and land acquisition"
   ],
   "correct": [
    3
   ],
   "explanation": "JLL's $11.3m/MW is shell and core for a single-tenant 50 MW air-cooled facility, excluding land and active IT. The full-facility-with-land option is the strongest distractor: the note builds land, liquid premium and contingency on top of JLL's figure, so JLL's figure excludes them.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; JLL, 2026 Global Data Center Outlook (F-028)",
   "as_of": "2026",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Cost benchmarks"
  },
  {
   "id": "m11-011",
   "type": "mcq",
   "select": "one",
   "stem": "As at 30 April 2026, what change to useful lives does Nebius's 2025 Form 20-F record from 1 January 2026?",
   "options": [
    "Buildings extended from 20 to 25 years",
    "Infrastructure systems shortened to 3 years",
    "Server and network equipment extended from 4 to 5 years, applied prospectively",
    "Server and network equipment extended from 4 to 5 years, applied retrospectively",
    "Land depreciated over 20 years"
   ],
   "correct": [
    2
   ],
   "explanation": "The 20-F extends server and network equipment from four to five years prospectively from January 2026. The retrospective option is the strongest distractor and is wrong on application; buildings remain at 20 years and land is not depreciated.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; Nebius Group N.V. Form 20-F for FY2025, filed 30 April 2026 (F-070)",
   "as_of": "2026-04-30",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Depreciation"
  },
  {
   "id": "m11-012",
   "type": "mcq",
   "select": "one",
   "stem": "Which cash flow does the Stage 1 note assign to Stage 5 rather than to the Stage 1 capex phasing?",
   "options": [
    "Customer prepayment received against future capacity",
    "IT deposit paid to the vendor at order, four to six months before RFS",
    "Balance of IT capex paid to the vendor on delivery of the tranche",
    "Long-lead power equipment deposit paid pre-NTP as a month-zero balance"
   ],
   "correct": [
    0
   ],
   "explanation": "Customer prepayments are received by the operator and belong to Stage 5 financing. The IT deposit, the strongest distractor, is paid out by the operator to the vendor and drives Stage 1 peak funding; the note stresses that deposits and prepayments run in opposite directions.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (D-004, G-017)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Deposits and prepayments"
  },
  {
   "id": "m11-013",
   "type": "mcq",
   "select": "one",
   "stem": "Why must capex be tracked in at least three component pools from the first Stage 1 build?",
   "options": [
    "To match the four 25 MW tranches of IT delivery and their separate deposit and balance payments",
    "Because lenders in Stage 5 require a separate security package and covenant test per pool",
    "Because Stage 4 depreciates the pools on useful lives that differ by an order of magnitude",
    "To allow the 10/40/40/10 S-curve to be applied to each pool separately across months 0 to 20",
    "Because Nebius reports capex in three segments in its shareholder letters"
   ],
   "correct": [
    2
   ],
   "explanation": "Buildings depreciate over 20 years, infrastructure over 3 to 10 and servers over 4 to 5, so Stage 4 needs component pools. The S-curve option is the strongest distractor: the curve applies to facility capex only, and IT capex is lumpy, so pooling is not for phasing.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-072)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Depreciation pools"
  },
  {
   "id": "m11-014",
   "type": "mcq",
   "select": "one",
   "stem": "As at August 2026, reverse-engineering Nebius's stated ACV per MW and payback implies a cost per active MW consistent with $35 to 45 million. How does the note treat this result?",
   "options": [
    "As verification of the $43.5m per MW base case against a primary source",
    "As a fact from a primary source, since it appears in a shareholder letter",
    "As a vendor claim to be discounted, since Nebius benefits from the number",
    "As corroboration that does not verify the base case"
   ],
   "correct": [
    3
   ],
   "explanation": "Consistency with an independent line of evidence corroborates; only direct confirmation of the figure verifies, and a forward-looking company payback claim cannot do that. Verification is the strongest distractor and is exactly the misuse the formula register warns against.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter, August 2026 (F-055, D-008)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "Corroboration"
  },
  {
   "id": "m11-015",
   "type": "mcq",
   "select": "all",
   "stem": "Select all components that the Stage 1 register counts within facility capex (as opposed to IT capex).",
   "options": [
    "Power chain",
    "GB300 NVL72 compute racks",
    "Cooling (liquid loop, CDUs, heat rejection)",
    "Scale-out network and optics",
    "Contingency",
    "Storage, spares and integration"
   ],
   "correct": [
    0,
    2,
    4
   ],
   "explanation": "Facility capex comprises land, shell and core, power chain, cooling, fit-out and contingency, summing to $13.3m/MW. Network and optics, the strongest distractor, is an IT line at 12 per cent of compute; compute racks and storage are also IT lines.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-043, S-002)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Capex register"
  },
  {
   "id": "m11-016",
   "type": "mcq",
   "select": "all",
   "stem": "Select all checks that the Stage 1 note lists for the review of the Assumptions and Timing sheets.",
   "options": [
    "Active MW never exceeds connected MW, which never exceeds 100",
    "No hardcoded values outside the Assumptions sheet",
    "DSCR remains above the lender covenant in every period",
    "Timeline logic survives a six-month energisation slip without manual repair",
    "PUE is held at the Stage 3 value",
    "Flags are binary and mutually exhaustive"
   ],
   "correct": [
    0,
    1,
    3,
    5
   ],
   "explanation": "The listed checks are units and denominators, capex sums, binary flags, the MW ordering, no hardcodes and the six-month slip test. DSCR, the strongest distractor, is a Stage 5 debt metric; PUE is a Stage 3 input and no Stage 1 check references it.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-077)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Review checks"
  },
  {
   "id": "m11-017",
   "type": "mcq",
   "select": "all",
   "stem": "Select all items that the glossary counts as long-lead equipment.",
   "options": [
    "HV transformers",
    "Coolant distribution units",
    "Switchgear",
    "GB300 NVL72 racks",
    "Generators"
   ],
   "correct": [
    0,
    2,
    4
   ],
   "explanation": "Long-lead equipment means components with procurement lead times measured in years: HV transformers, switchgear and generators, ordered pre-NTP. GB300 racks, the strongest distractor, carry delivery risk of months, not years, and are ordered four to six months before RFS.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-011)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Long-lead equipment"
  },
  {
   "id": "m11-018",
   "type": "mcq",
   "select": "all",
   "stem": "Select all conditions that the NTP-start convention assumes are already in place at month zero.",
   "options": [
    "Land owned",
    "First tranche of GPUs delivered",
    "Permits granted",
    "Grid connection secured",
    "Shell and core complete"
   ],
   "correct": [
    0,
    2,
    3
   ],
   "explanation": "NTP start assumes land owned, permits granted and grid connection secured, placing development-phase risk outside the model. Shell and core, the strongest distractor, completes at month 12; GPUs arrive for tranche 1 RFS at month 17.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-006)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Scope boundary"
  },
  {
   "id": "m11-019",
   "type": "mcq",
   "select": "all",
   "stem": "Select all data points that the honesty note identifies as the weakest in Stage 1.",
   "options": [
    "The GB300 rack price",
    "Nebius's useful-life assumptions",
    "The facility component split",
    "The 25 MW tranche size",
    "The 10/40/40/10 S-curve",
    "Nebius's three-state capacity taxonomy"
   ],
   "correct": [
    0,
    2
   ],
   "explanation": "The weakest data are the GB300 rack price (credible estimates span 1.7 times) and the facility component split (only granular benchmark is a 2024 air-cooled vintage). The S-curve, the strongest distractor, is a proposal open to reshaping but is not flagged as weak data.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-076)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Data quality"
  },
  {
   "id": "m11-020",
   "type": "mcq",
   "select": "all",
   "stem": "Select all of the capacity states that Nebius reports in its Q1 2026 shareholder letter.",
   "options": [
    "Contracted power",
    "Committed power",
    "Connected power",
    "Energised power",
    "Active power",
    "Utilised power"
   ],
   "correct": [
    0,
    2,
    4
   ],
   "explanation": "Nebius reports contracted (land and power commitments), connected (built and equipped) and active (installed, revenue-generating IT). Energised power, the strongest distractor, describes the event that triggers the connected state, not a reported state; utilised power is a Stage 2 driver.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; Nebius Q1 2026 shareholder letter, May 2026 (F-004)",
   "as_of": "2026-05",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Capacity states"
  },
  {
   "id": "m11-021",
   "type": "mcq",
   "select": "all_not",
   "stem": "Select all statements that do NOT apply to a vendor deposit as defined in the Stage 1 note.",
   "options": [
    "It is paid by the operator to an equipment vendor",
    "It is paid at order",
    "It is received by the operator from a customer",
    "It is a Stage 5 financing item",
    "It drives peak funding requirement in Stage 1"
   ],
   "correct": [
    2,
    3
   ],
   "explanation": "A deposit is cash paid out by the operator to a vendor at order and drives Stage 1 peak funding. Receipt from a customer and Stage 5 classification describe a customer prepayment, which runs in the opposite direction; that conflation is the strongest distractor.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (D-004, G-017)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Deposits and prepayments"
  },
  {
   "id": "m11-022",
   "type": "mcq",
   "select": "all_not",
   "stem": "Select all statements that do NOT apply to IT (critical) load as defined in the Stage 1 note.",
   "options": [
    "It includes cooling and electrical losses",
    "It counts power delivered to servers, network and storage",
    "It is the denominator for every per-MW capex figure in the model",
    "It equals IT load multiplied by PUE",
    "Nebius quotes capacity in these terms"
   ],
   "correct": [
    0,
    3
   ],
   "explanation": "IT load excludes cooling and losses and is the model's capex denominator. Including losses and multiplying by PUE both describe gross facility load, the strongest distractor, which sizes the grid connection rather than denominating capex.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (D-001, G-001)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Capacity definition"
  },
  {
   "id": "m11-023",
   "type": "mcq",
   "select": "all_not",
   "stem": "Select all statements that do NOT apply to the base-case delivery timeline in the Stage 1 note.",
   "options": [
    "Shell and core complete in month 12",
    "Utility energisation occurs in month 13",
    "Tranche 1 reaches RFS in month 22",
    "Full 100 MW is active in month 23",
    "MEP installation runs from month 6 to month 18",
    "Energisation precedes shell and core completion"
   ],
   "correct": [
    2,
    5
   ],
   "explanation": "Base tranche 1 RFS is month 17; month 22 is the downside figure. Energisation (month 13) follows shell completion (month 12), so the ordering statement is structurally wrong. The month 22 option is the strongest distractor because the figure is in the register, under the wrong case.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-060, F-061)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Delivery timeline"
  },
  {
   "id": "m11-024",
   "type": "mcq",
   "select": "all_not",
   "stem": "Select all statements that do NOT apply to the S-curve capex phasing proposed in the Stage 1 note.",
   "options": [
    "It applies to facility capex",
    "It runs roughly 10, 40, 40, 10 per cent by half-year",
    "It spans months 0 to 20",
    "It is applied to IT capex",
    "It is front-loaded, with 40 per cent spent in the first half-year"
   ],
   "correct": [
    3,
    4
   ],
   "explanation": "The S-curve phases facility capex across months 0 to 20 at 10/40/40/10 by half-year. The formula register names applying it to IT capex, which is lumpy at deposits and deliveries, as the common misuse; a 40 per cent first half-year contradicts the slow-fast-slow profile.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-065, M-011)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Capex phasing"
  },
  {
   "id": "m11-025",
   "type": "recall",
   "stem": "Name the NVIDIA rack-scale system of 72 Blackwell Ultra GPUs in one NVLink domain that the Stage 1 build defines as current generation.",
   "accept": [
    "GB300 NVL72",
    "NVL72",
    "Blackwell Ultra rack",
    "GB300"
   ],
   "fuzzy": true,
   "explanation": "GB300 NVL72 is the fleet unit of the build, 643 racks at base. Vera Rubin NVL72 is the successor platform arriving from the second half of 2026 and belongs to refresh logic, not to this build.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-007)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Fleet definition"
  },
  {
   "id": "m11-026",
   "type": "recall",
   "stem": "What is the term for the heat exchanger and pump set that links the rack liquid loop to the facility cooling loop?",
   "accept": [
    "Coolant distribution unit",
    "CDU"
   ],
   "fuzzy": true,
   "explanation": "The coolant distribution unit sits within the cooling capex line and is needed because GB300 rejects about 90 per cent of its heat to liquid. Heat rejection plant and the liquid loop are related components, not the linking unit.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-016)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Cooling"
  },
  {
   "id": "m11-027",
   "type": "recall",
   "stem": "What is the term for the point at which the utility connection is live and the site can draw grid power?",
   "accept": [
    "Energisation",
    "Energization",
    "Grid live date",
    "Interconnection completion"
   ],
   "fuzzy": true,
   "explanation": "Energisation is base month 13, downside 19, and the largest retained slip risk. It is distinct from RFS, which is when a tranche is commissioned and revenue-ready, and from NTP, which is the construction start.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-012)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Delivery timeline"
  },
  {
   "id": "m11-028",
   "type": "recall",
   "stem": "What is the modelling term for an opening-movement-closing balance calculation repeated each period?",
   "accept": [
    "Corkscrew",
    "Roll-forward",
    "Roll forward",
    "BASE schedule"
   ],
   "fuzzy": true,
   "explanation": "A corkscrew (roll-forward or BASE schedule) is required for active MW, capex pools and later debt balances. It is a modelling convention with no jurisdictional variant; a waterfall allocates cash and is not the same construct.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-010)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Workbook architecture"
  },
  {
   "id": "m11-029",
   "type": "recall",
   "stem": "As at the 2026 outlook, which adviser forecasts the 2026 average global data centre construction cost at $11.3 million per MW?",
   "accept": [
    "JLL",
    "Jones Lang LaSalle"
   ],
   "fuzzy": true,
   "explanation": "JLL's 2026 Global Data Center Outlook forecasts $11.3m/MW for shell and core of a 50 MW air-cooled facility. Knight Frank supplies the 7 to 10 per cent liquid premium and the 15 per cent land uplift, not the headline construction cost.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; JLL, 2026 Global Data Center Outlook (F-028)",
   "as_of": "2026",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Cost benchmarks"
  },
  {
   "id": "m11-030",
   "type": "recall",
   "stem": "In which stage of the capstone build is PUE set as an input?",
   "accept": [
    "Stage 3",
    "Stage three",
    "3",
    "Three",
    "Opex stack"
   ],
   "fuzzy": true,
   "explanation": "PUE is a Stage 3 (opex stack) input; in Stage 1 it only defines the gross load the power infrastructure line is buying. Stage 2 covers capacity to revenue and Stage 4 depreciation and refresh.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-003, P-004)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Model stages"
  },
  {
   "id": "m11-031",
   "type": "recall",
   "stem": "In which stage of the capstone build does the sensitivity list sit, to which the rack price and the facility contingency percentage are assigned?",
   "accept": [
    "Stage 6",
    "Stage six",
    "6",
    "Six",
    "Returns and sensitivities"
   ],
   "fuzzy": true,
   "explanation": "Both assumption cells go on the Stage 6 (returns and sensitivities) list. Stage 4 handles refresh pricing and Stage 5 financing; neither is where sensitivities are run.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-075, P-004)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Model stages"
  },
  {
   "id": "m11-032",
   "type": "recall",
   "stem": "At which owned site did Nebius break ground on 12 May 2026, with first-phase construction underway?",
   "accept": [
    "Independence, Missouri",
    "Independence",
    "Missouri",
    "Independence MO"
   ],
   "fuzzy": true,
   "explanation": "Nebius broke ground on its gigawatt-scale AI factory in Independence, Missouri on 12 May 2026. Lappeenranta, Finland was announced on 31 March 2026 and is the other site whose cadence the note cites; Mäntsälä is the operational GB300 facility.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; Nebius press release, 12 May 2026 (F-056)",
   "as_of": "2026-05-12",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Nebius delivery cadence"
  },
  {
   "id": "m11-033",
   "type": "define",
   "stem": "Define gross facility load and state what it sizes in the Stage 1 model.",
   "model_answer": "Gross facility load is the total site power draw, equal to IT load multiplied by PUE; it sizes the grid connection, transformers and generation scope.",
   "rubric": {
    "must": [
     [
      "total site draw",
      "total site power draw",
      "total draw",
      "total power drawn",
      "full site load",
      "total power the site draws",
      "whole site draw",
      "site draw"
     ],
     [
      "IT load multiplied by PUE",
      "IT load times PUE",
      "IT load x PUE",
      "IT multiplied by PUE",
      "PUE multiplied by IT load",
      "PUE times IT load",
      "IT load by PUE"
     ]
    ],
    "should": [
     [
      "grid connection",
      "sizes the grid",
      "transformers",
      "generation scope",
      "utility connection",
      "grid capacity"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "excluding cooling and losses",
      "excludes cooling",
      "servers only",
      "only servers"
     ]
    ]
   },
   "explanation": "Gross facility load includes cooling and losses and is what the power chain must serve; IT load excludes them and is the capex denominator. Confusing the two is the denominator error the note warns against, so an answer describing power to servers only is wrong.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-002, M-003)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Capacity definition"
  },
  {
   "id": "m11-034",
   "type": "define",
   "stem": "Define PUE as used in the Stage 1 note.",
   "model_answer": "Power usage effectiveness: gross facility load divided by IT load, set in Stage 3 and defining the power chain the facility must buy.",
   "rubric": {
    "must": [
     [
      "power usage effectiveness",
      "power use effectiveness",
      "power utilisation effectiveness",
      "power utilization effectiveness"
     ],
     [
      "gross facility load divided by IT load",
      "gross load divided by IT load",
      "total load divided by IT load",
      "facility load over IT load",
      "gross facility load over IT load",
      "ratio of gross facility load to IT load",
      "ratio of total load to IT load",
      "site load divided by IT load",
      "total facility load divided by IT load",
      "gross facility load divided by critical load"
     ]
    ],
    "should": [
     [
      "Stage 3",
      "Stage three",
      "opex stack"
     ],
     [
      "power chain",
      "grid connection",
      "power infrastructure",
      "gross load"
     ]
    ],
    "should_min": 0,
    "forbid": [
     [
      "IT load divided by gross",
      "IT load divided by facility",
      "IT load over gross",
      "IT load divided by total"
     ]
    ]
   },
   "explanation": "PUE is gross facility load over IT load, so a value above one measures the cooling and losses overhead. The inverted ratio (IT over gross) is the specific confusion the rubric forbids; the PUE value itself is a Stage 3 input, not fixed in this note.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-003, M-003)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Capacity definition"
  },
  {
   "id": "m11-035",
   "type": "define",
   "stem": "Define RFS (ready for service) as used in the Stage 1 model and state its effect on active MW.",
   "model_answer": "Ready for service: the date on which a tranche is commissioned and available to generate revenue, at which active MW steps up.",
   "rubric": {
    "must": [
     [
      "ready for service",
      "ready to serve",
      "ready for use",
      "ready for operation"
     ],
     [
      "available to generate revenue",
      "able to generate revenue",
      "can generate revenue",
      "revenue generating",
      "starts earning revenue",
      "available for revenue",
      "revenue ready",
      "begins generating revenue",
      "can earn revenue",
      "generate revenue"
     ]
    ],
    "should": [
     [
      "commissioned",
      "commissioning complete",
      "commissioning"
     ],
     [
      "active MW steps up",
      "active MW increases",
      "becomes active",
      "goes active",
      "active power steps up",
      "active MW rises"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "utility connection is live",
      "site can draw grid power",
      "grid connection is live",
      "grid power is available"
     ]
    ]
   },
   "explanation": "RFS marks a commissioned, revenue-ready tranche and is when active MW steps up; each of four tranches has its own. Energisation, the forbidden confusion, is when the utility connection goes live (month 13) and triggers the connected state, four months before first RFS.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-006)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Delivery timeline"
  },
  {
   "id": "m11-036",
   "type": "define",
   "stem": "Define NTP as used in the Stage 1 model and state what is assumed secured at that point.",
   "model_answer": "Notice to proceed: the construction start decision from which the model timeline is counted; month zero, with land, permits and grid connection assumed secured.",
   "rubric": {
    "must": [
     [
      "notice to proceed",
      "instruction to proceed",
      "authorisation to proceed",
      "authorization to proceed",
      "go-ahead to proceed",
      "decision to proceed"
     ],
     [
      "construction start",
      "start of construction",
      "construction begins",
      "build starts",
      "month zero",
      "month 0",
      "start of the model timeline",
      "model timeline is counted",
      "timeline starts",
      "timeline begins",
      "start of the model"
     ]
    ],
    "should": [
     [
      "land, permits and grid",
      "grid connection assumed secured",
      "grid secured",
      "grid connection secured",
      "permits granted",
      "land owned",
      "permits and grid"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "same as financial close",
      "equivalent to financial close",
      "is financial close",
      "at financial close",
      "financial close date"
     ]
    ]
   },
   "explanation": "NTP is month zero and the construction start, with land, permits and grid secured, so development-phase risk sits outside the model. The glossary notes NTP is sometimes conflated with financial close in UK usage; an answer equating the two is forbidden.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-005, F-006)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Scope boundary"
  },
  {
   "id": "m11-037",
   "type": "define",
   "stem": "Distinguish the capacity ramp from the utilisation ramp in the Stage 1 note and state the modelling rule that follows.",
   "model_answer": "The capacity ramp counts MW coming active as tranches reach RFS; the utilisation ramp measures how much of the active MW is sold or used; they must never share a line in the model.",
   "rubric": {
    "must": [
     [
      "MW coming active",
      "MW becoming active",
      "capacity coming active",
      "megawatts becoming active",
      "capacity becoming active",
      "MW activated",
      "coming online",
      "MW reaching RFS",
      "tranches reach RFS",
      "capacity coming online",
      "MW that is active"
     ],
     [
      "how much of the active MW is sold",
      "use of active MW",
      "share of active MW used",
      "active MW is sold or used",
      "proportion of active capacity used",
      "utilisation of active capacity",
      "utilization of active capacity",
      "how much of active capacity is used",
      "active MW that is sold",
      "percentage of active capacity sold",
      "how much active capacity is used",
      "active MW is used",
      "active capacity is used",
      "sold or used"
     ]
    ],
    "should": [
     [
      "never share a line",
      "separate lines",
      "kept separate",
      "separate rows",
      "not share a line",
      "different lines",
      "must not be combined",
      "never share a row",
      "own line"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "Capacity ramp is supply (MW active); utilisation ramp is demand (share of active MW sold) and is a Stage 2 revenue driver. Merging them into one line hides the difference between a built but idle hall and a full one, which is why the note forbids it.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (D-003, F-064)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Ramp profile"
  },
  {
   "id": "m11-038",
   "type": "define",
   "stem": "Define contingency as used in the Stage 1 capex register and state its base level and denominator.",
   "model_answer": "An allowance added to base cost to absorb overrun and delay, set at 7.5 to 10 per cent of facility capex at base and treated as a sensitivity cell.",
   "rubric": {
    "must": [
     [
      "allowance",
      "buffer",
      "reserve",
      "cushion",
      "provision",
      "headroom",
      "uplift"
     ],
     [
      "absorb overrun",
      "cost overrun",
      "overrun",
      "overruns",
      "delay",
      "unexpected cost",
      "unforeseen cost",
      "cost increases"
     ]
    ],
    "should": [
     [
      "facility capex",
      "facility cost",
      "facility build",
      "of facility",
      "build cost",
      "facility subtotal"
     ],
     [
      "7.5 to 10",
      "7.5% to 10%",
      "7.5 and 10",
      "seven and a half",
      "7.5-10",
      "0.9"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "percentage of IT capex",
      "of IT capex",
      "applied to IT capex",
      "of compute capex",
      "of total project cost"
     ]
    ]
   },
   "explanation": "Contingency is an allowance for overrun and delay at 7.5 to 10 per cent of facility capex ($0.9m/MW base). The formula register names applying the percentage to IT capex, which is priced rather than built, as the common misuse, hence the forbidden phrasing.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-019, M-006)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Capex register"
  },
  {
   "id": "m11-039",
   "type": "define",
   "stem": "Distinguish corroboration from verification as the Stage 1 note uses the terms, and state which the Nebius payback cross-check provides.",
   "model_answer": "Corroboration is consistency of a figure with an independent line of evidence; verification is direct confirmation of the figure itself. Nebius's payback claim corroborates the capex base case but does not verify it.",
   "rubric": {
    "must": [
     [
      "independent line of evidence",
      "consistent with independent evidence",
      "consistent with an independent",
      "independent evidence",
      "consistent with another source",
      "agreement with independent",
      "supported by a separate source",
      "separate line of evidence",
      "consistency with independent",
      "another line of evidence",
      "consistent with a second source"
     ],
     [
      "direct confirmation",
      "directly confirms",
      "directly confirmed",
      "confirms the figure itself",
      "confirmation of the figure",
      "checked directly",
      "proves the figure",
      "direct proof",
      "confirmed directly",
      "confirms the figure"
     ]
    ],
    "should": [
     [
      "corroborates but does not verify",
      "does not verify",
      "corroborates only",
      "only corroborates",
      "corroboration not verification",
      "not verification",
      "corroborates the",
      "is corroboration"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "Corroboration is agreement with an independent line of evidence; verification confirms the figure directly. The payback reverse-engineering implies $35 to 45m per active MW, consistent with the base, but rests on a forward-looking company claim, so it corroborates and cannot verify.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (D-008, F-055)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Corroboration"
  },
  {
   "id": "m11-040",
   "type": "define",
   "stem": "As at August 2026, define ACV per MW and state how the Stage 1 note uses it.",
   "model_answer": "Annual contract value divided by contracted megawatts; Nebius reports Q2 2026 deals above $20m per MW and the note uses it to reverse-engineer cost per active MW.",
   "rubric": {
    "must": [
     [
      "annual contract value",
      "yearly contract value",
      "contract value per year",
      "annual contracted revenue",
      "annual revenue under contract",
      "contracted annual revenue"
     ],
     [
      "divided by contracted megawatts",
      "divided by contracted MW",
      "per contracted MW",
      "per contracted megawatt",
      "divided by megawatts",
      "divided by MW",
      "per MW of contracted",
      "over contracted MW",
      "per megawatt",
      "per MW"
     ]
    ],
    "should": [
     [
      "20m per MW",
      "$20m",
      "20 million",
      "above 20",
      "more than 20",
      "over 20"
     ],
     [
      "reverse-engineer",
      "reverse engineer",
      "back out",
      "imply cost",
      "implied cost",
      "cost per active MW",
      "infer the cost",
      "derive the cost"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "total contract value",
      "lifetime contract value",
      "TCV",
      "remaining performance obligation"
     ]
    ]
   },
   "explanation": "ACV per MW is annual, not lifetime, contract value per contracted MW; Nebius states Q2 2026 deals exceeded $20m/MW. The note multiplies it against the stated 22-month payback to corroborate cost per active MW. Total or lifetime contract value is the forbidden confusion.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter, August 2026 (G-020, M-007)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Deal economics"
  },
  {
   "id": "m11-041",
   "type": "numeric",
   "stem": "At a nominal draw of 140 kW per GB300 NVL72 rack, how many racks fit per MW of GPU-allocated IT load? Answer in racks per MW.",
   "value": 7.14,
   "tolerance_pct": 3,
   "unit": "racks per MW",
   "working": "1000 kW / 140 kW per rack = 7.14 racks per MW.",
   "explanation": "Racks per MW is 1000 divided by rack power in kW, giving about 7.1 at 140 kW. The common misuse is applying the ratio to total IT load without first removing the 10 per cent network, storage and management share, which overstates rack count.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; HPE product page and Lenovo Press product guide, retrieved 2026 (M-001)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Racks per MW"
  },
  {
   "id": "m11-042",
   "type": "numeric",
   "stem": "The site has 100 MW of IT load, of which 90 per cent is GPU-allocated, and each GB300 NVL72 rack draws 140 kW. How many racks does the base case carry? Answer in racks.",
   "value": 643,
   "tolerance_pct": 3,
   "unit": "racks",
   "working": "100 MW x 90% = 90 MW = 90,000 kW; 90,000 / 140 = 642.9, about 643 racks.",
   "explanation": "Share allocation (90 MW) then division by rack power (140 kW) gives 643 racks, the base fleet. Dividing the full 100 MW by 140 kW gives 714 racks and treats all IT load as GPU racks, the misuse the formula register names.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (S-003, M-002)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "IT load allocation"
  },
  {
   "id": "m11-043",
   "type": "numeric",
   "stem": "With 643 GB300 NVL72 racks at $4.0 million all-in each on a site of 100 MW IT load, what is the IT compute capex per MW of IT load? Answer in $m.",
   "value": 25.7,
   "tolerance_pct": 3,
   "unit": "$m",
   "working": "643 racks x $4.0m = $2,572m; $2,572m / 100 MW = $25.7m per MW of IT load.",
   "explanation": "Rack count times rack price divided by IT load gives $25.7m/MW, the largest single capex line. Dividing by the 90 MW GPU-allocated load instead would give $28.6m and mismatch the register's IT-load denominator.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (M-005, F-044)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "IT compute capex"
  },
  {
   "id": "m11-044",
   "type": "numeric",
   "stem": "At the base total capex of $43.5 million per MW of IT load, what is the total capex for the 100 MW site? Answer in $bn.",
   "value": 4.35,
   "tolerance_pct": 3,
   "unit": "$bn",
   "working": "$43.5m per MW x 100 MW of IT load = $4,350m = $4.35bn.",
   "explanation": "Capex per MW of IT load times site IT load gives $4.35bn at base ($3.5 to 5.5bn across the range). The common misuse is multiplying the per-MW figure by gross MW (IT times PUE), which inflates the site cost.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (M-010, F-048)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Total site capex"
  },
  {
   "id": "m11-045",
   "type": "numeric",
   "stem": "Scale-out network and optics capex is assumed at 12 per cent of compute capex. With compute capex of $25.7 million per MW of IT load, what is the network and optics line? Answer in $m.",
   "value": 3.084,
   "tolerance_pct": 3,
   "unit": "$m",
   "working": "12% x $25.7m = $3.08m per MW, rounded to $3.1m in the register.",
   "explanation": "Network capex ratio is network and optics divided by compute capex, 12 per cent at base, giving about $3.1m/MW. The misuse the register names is omitting scale-out fabric on the grounds that the rack already contains NVLink switching.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (M-009, F-045)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Network capex"
  },
  {
   "id": "m11-046",
   "type": "numeric",
   "stem": "Sum the three IT capex lines in the Stage 1 register at base: compute $25.7m, network and optics $3.1m, and storage, spares and integration $1.4m, all per MW of IT load. Answer in $m.",
   "value": 30.2,
   "tolerance_pct": 3,
   "unit": "$m",
   "working": "25.7 + 3.1 + 1.4 = $30.2m per MW of IT load.",
   "explanation": "IT items sum to $30.2m/MW and facility items to $13.3m/MW, together about $43.5m/MW. Adding contingency ($0.9m) to the IT total would be wrong: contingency is a percentage of facility capex ex-IT and already sits inside the $13.3m facility subtotal.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (S-002)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Capex stack"
  },
  {
   "id": "m11-047",
   "type": "sequence",
   "stem": "Place the base-case delivery milestones in order from earliest to latest.",
   "steps": [
    "Long-lead equipment ordered (pre-NTP)",
    "NTP (month 0)",
    "Shell and core complete (month 12)",
    "Utility energisation (month 13)",
    "Tranche 1 RFS (month 17)",
    "Full 100 MW active (month 23)"
   ],
   "explanation": "Long-lead orders precede NTP because transformer lead times run 100 to 120 weeks; shell completes at month 12, energisation follows at 13, tranche 1 reaches RFS at 17 and the fourth tranche at 23. Placing energisation before shell completion is the most common inversion.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (P-001)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Delivery timeline"
  },
  {
   "id": "m11-048",
   "type": "sequence",
   "stem": "Place the steps of the capex phasing and payment sequence in order.",
   "steps": [
    "Deposits on long-lead power equipment pre-NTP (month-zero balance)",
    "Facility capex drawn on the S-curve, months 0 to 20",
    "IT deposit paid at order, four to six months before tranche RFS",
    "IT balance paid on delivery",
    "Tranche activated at RFS"
   ],
   "explanation": "Long-lead deposits sit at month zero, facility spend follows the S-curve, then each tranche pays an IT deposit at order, the balance on delivery, and activates at RFS; steps three to five repeat for four tranches. The IT balance is paid on delivery, not at RFS.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (P-002)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Capex phasing"
  },
  {
   "id": "m11-049",
   "type": "sequence",
   "stem": "Place the steps of commissioning a single IT tranche in order.",
   "steps": [
    "Order placed and deposit paid (RFS minus four to six months)",
    "Delivery and balance paid",
    "Rack installation",
    "Cluster burn-in and commissioning",
    "RFS: tranche becomes active power"
   ],
   "explanation": "Order and deposit come first, then delivery with the balance, installation, burn-in and finally RFS, when the tranche becomes active power. Burn-in precedes RFS rather than following it; the platform-timing branch is that a late-2026 order may arrive as Vera Rubin.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (P-006)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Tranche commissioning"
  },
  {
   "id": "m11-050",
   "type": "sequence",
   "stem": "Place the seven stages of the Module 11 capstone build in order.",
   "steps": [
    "Assumption architecture: capex, timeline, ramp",
    "Capacity to revenue",
    "Opex stack",
    "Capex, depreciation and refresh",
    "Financing and debt sizing",
    "Returns and sensitivities",
    "One-page IC note and attack"
   ],
   "explanation": "Stage 1 fixes assumptions, Stages 2 to 4 build revenue, opex and depreciation, Stage 5 sizes debt, Stage 6 runs returns and sensitivities, and Stage 7 writes and attacks the IC note. Debt sizing must follow the operating build because it bites on contracted revenue.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (P-004)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Build sequence"
  },
  {
   "id": "m11-051",
   "type": "slot",
   "stem": "Complete the workbook architecture by filling the missing tier.",
   "nodes": [
    "Inputs (Assumptions; Timing and flags)",
    "Calculation engine (Capex; Revenue; Opex; Depreciation and tax; Debt)",
    "Outputs (Cash flow and returns; Sensitivities and IC note)",
    null
   ],
   "layout": "flow",
   "choices": [
    "Checks",
    "Sensitivities",
    "Debt",
    "Assumptions"
   ],
   "correct": [
    "Checks"
   ],
   "explanation": "The Checks sheet is the fourth tier and monitors every other tier. Sensitivities sits inside Outputs and Debt inside the engine, so neither is a separate tier; Assumptions is the first tier, already placed.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (S-001)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Workbook architecture"
  },
  {
   "id": "m11-052",
   "type": "slot",
   "stem": "Complete the timing flag hierarchy by filling the missing flag.",
   "nodes": [
    "NTP (month 0)",
    null,
    "Tranche RFS 1 to 4 (months 17, 19, 21, 23)",
    "Refresh event placeholder (Stage 4)"
   ],
   "layout": "flow",
   "choices": [
    "Energisation (month 13)",
    "Tranche 1 RFS (month 17)",
    "Full 100 MW active (month 23)",
    "Shell and core complete (month 12)"
   ],
   "correct": [
    "Energisation (month 13)"
   ],
   "explanation": "Energisation at month 13 is the flag between NTP and the tranche RFS flags; each later flag depends on it, so a slip propagates. Shell completion is a milestone but not a capacity flag; tranche 1 RFS and full active already belong to the RFS node.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (S-006)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Timing flags"
  },
  {
   "id": "m11-053",
   "type": "slot",
   "stem": "Complete the total-cost anchor hierarchy, ordered from least to most independent of the vendor, by filling the two missing sources.",
   "nodes": [
    "Vendor claim (Nvidia CEO, $50 to 60bn per GW)",
    null,
    "Sell-side bottom-up (Bernstein, about $35bn per GW)",
    null,
    "Operator-implied (Nebius yield and payback, $35 to 45m per MW)"
   ],
   "layout": "stack",
   "choices": [
    "Sell-side top-down (Barclays, $50 to 60bn per GW)",
    "Independent model (Epoch AI, $38bn per GW)",
    "Analyst rack estimate (Loop Capital, $3.7 to 4.0m per rack)",
    "Analyst rack estimate (SemiAnalysis, $3.9m per rack all-in)",
    "Short-seller commentary (Chanos)"
   ],
   "correct": [
    "Sell-side top-down (Barclays, $50 to 60bn per GW)",
    "Independent model (Epoch AI, $38bn per GW)"
   ],
   "explanation": "Barclays' top-down $50 to 60bn sits second, still echoing the vendor figure; Epoch AI's $38bn independent model sits fourth. Loop Capital and SemiAnalysis price racks, not GW-scale sites, and Chanos comments on the vendor gap without supplying an anchor.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (S-005)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Cost anchors"
  },
  {
   "id": "m11-054",
   "type": "match",
   "stem": "Match each Stage 1 metric to its formula.",
   "pairs": [
    [
     "Racks per MW",
     "1000 / rack power in kW"
    ],
    [
     "Gross facility load",
     "IT load x PUE"
    ],
    [
     "Capex per MW of IT load",
     "Total capex / IT load"
    ],
    [
     "Total site capex",
     "Capex per MW x site IT load"
    ]
   ],
   "explanation": "Racks per MW divides 1000 kW by rack power; gross load multiplies IT load by PUE; capex per MW divides total capex by IT load; site capex reverses that division. The recurring error is substituting gross MW for IT MW in the last two formulae.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (M-001, M-003, M-004, M-010)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Formulae"
  },
  {
   "id": "m11-055",
   "type": "match",
   "stem": "Match each UK glossary term to the US practitioner term the glossary gives for it.",
   "pairs": [
    [
     "IT load",
     "Critical IT capacity"
    ],
    [
     "Gross facility load",
     "Total facility load"
    ],
    [
     "Long-lead equipment",
     "Long-lead items (LLI)"
    ],
    [
     "Power chain",
     "Electrical distribution"
    ]
   ],
   "explanation": "US usage renders IT load as critical IT capacity, gross facility load as total facility load, long-lead equipment as long-lead items and the power chain as electrical distribution or power train. The tempting error pairs power chain with total facility load, which is a load, not equipment.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (G-001, G-002, G-011, G-015)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Glossary variants"
  },
  {
   "id": "m11-056",
   "type": "match",
   "stem": "Match each capex component to its base figure in $m per MW of IT load.",
   "pairs": [
    [
     "Land and development",
     "0.4"
    ],
    [
     "Fit-out, BMS and commissioning",
     "1.5"
    ],
    [
     "Network and optics",
     "3.1"
    ],
    [
     "Power chain",
     "5.5"
    ],
    [
     "GB300 NVL72 compute",
     "25.7"
    ]
   ],
   "explanation": "Land is 0.4, fit-out 1.5, network 3.1, power chain 5.5 and compute 25.7 at base. The likeliest confusion is swapping fit-out (1.5) with network (3.1); network is fixed at 12 per cent of compute, which anchors it above fit-out.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (S-002, F-043, F-044, F-045)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Capex register"
  },
  {
   "id": "m11-057",
   "type": "classify",
   "stem": "Classify the following statement from the Stage 1 note, as at August 2026.",
   "statement": "Nebius Q2 2026 AI cloud deals yielded more than $20 million per MW of annual contract value.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 2,
   "explanation": "The figure comes from Nebius's own shareholder letter about its own deals, so it is a company claim, not an independently observable fact. It appears in a filing-like document, which tempts the Fact label, but the register requires third-party observability for that.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter, August 2026 (F-051)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Deal economics"
  },
  {
   "id": "m11-058",
   "type": "classify",
   "stem": "Classify the following statement from the Stage 1 note.",
   "statement": "Facility capex in the model is denominated per MW of IT load, not gross load.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 1,
   "explanation": "This is a modelling convention chosen for the build, so it is an assumption. It is not a fact about the market (per-MW figures in the market mix denominators) and not an interpretation of evidence; it is a decision the author locks before cell one.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (F-003)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Capacity definition"
  },
  {
   "id": "m11-059",
   "type": "classify",
   "stem": "Classify the following feature of the Stage 1 model.",
   "statement": "Grid connection is assumed secured at NTP as a stated model convention, disclosed wherever the model is presented.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 0,
   "explanation": "A condition the model enforces and discloses is a structural protection: it defines what the model does and does not cover. It becomes narrative comfort only if presented as an assurance about the real project rather than a stated scope boundary.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026 (D-009)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Scope boundary"
  },
  {
   "id": "m11-060",
   "type": "classify",
   "stem": "Classify the following statement as it bears on the Stage 1 delivery timeline, as at May 2026.",
   "statement": "Nebius states that its Missouri owned site will be operational in 2027.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 1,
   "explanation": "A company statement about future delivery that the model cannot enforce is narrative comfort. It brackets the base case but cannot protect it; the enforceable element is the NTP-start convention, which is the structural protection the register contrasts it with.",
   "source": "Module 11 Stage 1 note, compiled 15 September 2026; Nebius Q1 2026 shareholder letter, May 2026 (D-009, F-057)",
   "as_of": "2026-05",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Nebius delivery cadence"
  }
 ],
 "glossary": [
  {
   "term": "IT load (critical load)",
   "aliases": [
    "IT capacity",
    "critical load",
    "MW IT"
   ],
   "definition": "Power delivered to the servers, network and storage themselves, excluding cooling and losses.",
   "relevance": "The denominator for every per-MW capex and yield figure in the model; Nebius quotes capacity in these terms. UK and EU usage: IT load, critical load. US usage also: white-space load.",
   "priority": "red",
   "module": 11,
   "variants": {
    "UK": "IT load",
    "EU": "IT load",
    "US": "critical IT capacity"
   }
  },
  {
   "term": "Gross facility load",
   "aliases": [
    "Site load",
    "connected load"
   ],
   "definition": "Total site draw: IT load multiplied by PUE.",
   "relevance": "Sizes grid connection, transformers and generation scope. US usage also: utility load.",
   "priority": "red",
   "module": 11,
   "variants": {
    "UK": "Gross facility load",
    "EU": "Gross facility load",
    "US": "total facility load"
   }
  },
  {
   "term": "PUE",
   "aliases": [
    "Power usage effectiveness"
   ],
   "definition": "Power usage effectiveness: gross facility load divided by IT load.",
   "relevance": "Set in Stage 3; defines the power chain the facility must buy. Same term across UK, EU and US.",
   "priority": "amber",
   "module": 11,
   "variants": null
  },
  {
   "term": "Contracted, connected, active power",
   "aliases": [
    "Contracted MW",
    "connected MW",
    "active MW"
   ],
   "definition": "Nebius's three capacity states: power secured by land and power commitments; power connected into built and equipped data centres; power consumed by installed, revenue-generating IT.",
   "relevance": "The model carries all three as flags; the states map to model start, energisation and RFS. Company-specific taxonomy; no jurisdictional variant.",
   "priority": "red",
   "module": 11,
   "variants": null
  },
  {
   "term": "NTP",
   "aliases": [
    "Notice to proceed",
    "construction start"
   ],
   "definition": "Notice to proceed: the construction start decision from which the model timeline is counted.",
   "relevance": "Month zero of the model; land, permits and grid assumed secured at NTP. UK usage sometimes conflates NTP with financial close; US: NTP.",
   "priority": "red",
   "module": 11,
   "variants": null
  },
  {
   "term": "RFS",
   "aliases": [
    "Ready for service",
    "COD"
   ],
   "definition": "Ready for service: the date a tranche is commissioned and available to generate revenue.",
   "relevance": "Each of four tranches has its own RFS; active MW steps up at RFS. UK and EU: RFS; practical completion refers to the building only. US: RFS, or commercial operation date (COD) borrowed from energy.",
   "priority": "red",
   "module": 11,
   "variants": {
    "UK": "RFS",
    "EU": "RFS",
    "US": "COD"
   }
  },
  {
   "term": "GB300 NVL72",
   "aliases": [
    "NVL72",
    "Blackwell Ultra rack",
    "rack-scale system"
   ],
   "definition": "NVIDIA rack-scale system of 72 Blackwell Ultra GPUs in one NVLink domain, drawing roughly 132 to 140 kW nominal.",
   "relevance": "The fleet unit of the build; 643 racks at base; the largest single capex line. Same designation globally.",
   "priority": "red",
   "module": 11,
   "variants": null
  },
  {
   "term": "Vera Rubin NVL72",
   "aliases": [
    "VR200 NVL72",
    "Rubin"
   ],
   "definition": "NVIDIA's successor rack-scale platform, arriving from the second half of 2026.",
   "relevance": "Platform-timing risk for the build and the refresh pricing reference in Stage 4. Same designation globally.",
   "priority": "amber",
   "module": 11,
   "variants": null
  },
  {
   "term": "Tranche",
   "aliases": [
    "Phase",
    "block",
    "hall"
   ],
   "definition": "A 25 MW block of IT capacity commissioned and activated as a unit.",
   "relevance": "Four tranches at two-month intervals define the capacity ramp. US usage: phase, hall or block.",
   "priority": "amber",
   "module": 11,
   "variants": {
    "UK": "Tranche",
    "EU": "Tranche",
    "US": "phase"
   }
  },
  {
   "term": "Corkscrew",
   "aliases": [
    "Roll-forward",
    "BASE schedule"
   ],
   "definition": "An opening-movement-closing balance calculation repeated each period.",
   "relevance": "Required for active MW, capex pools and later debt balances. Modelling convention, not jurisdiction-specific.",
   "priority": "amber",
   "module": 11,
   "variants": null
  },
  {
   "term": "Long-lead equipment",
   "aliases": [
    "LLI",
    "critical equipment"
   ],
   "definition": "Components with procurement lead times measured in years, chiefly HV transformers, switchgear and generators.",
   "relevance": "Ordered pre-NTP; the governing constraint on energisation. US usage: long-lead items (LLI).",
   "priority": "red",
   "module": 11,
   "variants": {
    "UK": "Long-lead equipment",
    "EU": "Long-lead equipment",
    "US": "long-lead items"
   }
  },
  {
   "term": "Energisation",
   "aliases": [
    "Energization",
    "grid live date"
   ],
   "definition": "The point at which the utility connection is live and the site can draw grid power.",
   "relevance": "Base month 13, downside 19; the largest retained slip risk. US spelling energization; US usage also: interconnection completion.",
   "priority": "red",
   "module": 11,
   "variants": {
    "UK": "Energisation",
    "EU": "Energisation",
    "US": "energization"
   }
  },
  {
   "term": "MEP",
   "aliases": [
    "M&E",
    "building services"
   ],
   "definition": "Mechanical, electrical and plumbing works: the power chain and cooling installation inside the shell.",
   "relevance": "Runs months 6 to 18 in the base case, overlapping shell completion. UK usage: M&E; US usage: MEP.",
   "priority": "amber",
   "module": 11,
   "variants": {
    "UK": "M&E",
    "EU": "MEP",
    "US": "MEP"
   }
  },
  {
   "term": "Shell and core",
   "aliases": [
    "Powered shell (once energised)",
    "core and shell"
   ],
   "definition": "The building structure and site works before power and cooling fit-out.",
   "relevance": "The longest-lived capex pool (20-year building life in Nebius's 20-F). UK and EU: shell and core, becoming powered shell once electrical is in. US: shell; powered shell.",
   "priority": "amber",
   "module": 11,
   "variants": {
    "UK": "Shell and core",
    "EU": "Shell and core",
    "US": "shell"
   }
  },
  {
   "term": "Power chain",
   "aliases": [
    "Electrical infrastructure",
    "power train"
   ],
   "definition": "Equipment from the HV intake to the rack busbar: transformers, switchgear, UPS and backup generation scope.",
   "relevance": "Largest facility capex block at $5.5m/MW base; lead-time exposed. US usage: electrical distribution or power train.",
   "priority": "red",
   "module": 11,
   "variants": {
    "UK": "Power chain",
    "EU": "Power chain",
    "US": "electrical distribution"
   }
  },
  {
   "term": "CDU",
   "aliases": [
    "Coolant distribution unit"
   ],
   "definition": "Coolant distribution unit: the heat exchanger and pump set that links the rack liquid loop to the facility cooling loop.",
   "relevance": "Part of the cooling capex line; needed because GB300 rejects about 90 per cent of heat to liquid. Same term globally.",
   "priority": "amber",
   "module": 11,
   "variants": null
  },
  {
   "term": "Vendor deposit vs customer prepayment",
   "aliases": [
    "Down payment",
    "advance payment"
   ],
   "definition": "A deposit is paid by the operator to an equipment vendor at order; a prepayment is received by the operator from a customer against future capacity.",
   "relevance": "Deposits drive peak funding in Stage 1; prepayments fund it in Stage 5. They run in opposite directions. No jurisdictional variant; frequently conflated in commentary.",
   "priority": "red",
   "module": 11,
   "variants": null
  },
  {
   "term": "S-curve phasing",
   "aliases": [
    "Drawdown curve",
    "spend profile"
   ],
   "definition": "Distribution of construction spend over time that starts slowly, peaks mid-build and tails off.",
   "relevance": "Facility capex drawn roughly 10/40/40/10 by half-year over months 0 to 20. Modelling convention.",
   "priority": "green",
   "module": 11,
   "variants": null
  },
  {
   "term": "Contingency",
   "aliases": [
    "Cost contingency",
    "allowance"
   ],
   "definition": "An allowance added to base cost to absorb overrun and delay.",
   "relevance": "7.5 to 10 per cent of facility capex at base; a sensitivity cell. US usage: contingency reserve.",
   "priority": "amber",
   "module": 11,
   "variants": {
    "UK": "Contingency",
    "EU": "Contingency",
    "US": "contingency reserve"
   }
  },
  {
   "term": "ACV per MW",
   "aliases": [
    "Yield per MW",
    "annual yield"
   ],
   "definition": "Annual contract value divided by contracted megawatts.",
   "relevance": "Nebius reports Q2 2026 deals above $20m per MW; used here to reverse-engineer cost per active MW. Company metric; no jurisdictional variant.",
   "priority": "amber",
   "module": 11,
   "variants": null
  }
 ]
});
