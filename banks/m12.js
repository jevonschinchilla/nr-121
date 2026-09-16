// NBIS bank: Module 12. Generated 2026-09-16.
window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
 "bank_version": "2026-09-16",
 "module": 12,
 "module_title": "Revenue, capex and opex drivers in data centre and neocloud modelling",
 "items": [
  {
   "id": "m12-001",
   "type": "mcq",
   "stem": "Under which accounting framework does Nebius Group N.V. prepare its consolidated financial statements?",
   "explanation": "The 2025 Form 20-F applies ASC 606, ASC 842 and ASC 835-20, so the group reports under US GAAP. IFRS is the strongest distractor because the original brief assumed IFRS 15 and IFRS 16; the module corrects that, using IFRS only where the difference changes a number.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-001)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "accounting framework",
   "select": "one",
   "options": [
    "US GAAP",
    "IFRS as adopted by the European Union",
    "FRS 101",
    "Dutch GAAP"
   ],
   "correct": [
    0
   ]
  },
  {
   "id": "m12-002",
   "type": "mcq",
   "stem": "Under ASC 842, how does a colocation operating lease appear in Nebius's income statement?",
   "explanation": "ASC 842 keeps an operating lease as one straight-line charge within cost of revenue, so leased capacity depresses EBITDA. Splitting into depreciation and interest is the IFRS 16 treatment, which would flatter EBITDA; it is the strongest distractor because the brief originally assumed it.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-003, D-014)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "lease accounting",
   "select": "one",
   "options": [
    "Split into a depreciation charge and an interest charge",
    "Capitalised into property and equipment and depreciated",
    "A single straight-line cost within cost of revenue",
    "Excluded from the income statement as an off-balance-sheet commitment"
   ],
   "correct": [
    2
   ]
  },
  {
   "id": "m12-003",
   "type": "mcq",
   "stem": "What was the total gross amount of the Nebius convertible notes offering that closed on 24 August 2026 in two series?",
   "explanation": "The offering closed at $5.75bn: $3.45bn of 0.50% notes due 2030 and $2.3bn of 4.50% notes due 2034, after full exercise of the purchasers' options. $4.50bn is the strongest distractor: it was the proposed size announced on 19 August 2026, which the closed amount supersedes.",
   "source": "Module 12 note, 15 September 2026; Nebius press release, 24 August 2026 (F-005, F-007)",
   "as_of": "2026-08-24",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "financing",
   "select": "one",
   "options": [
    "$4.50bn",
    "$3.45bn",
    "$4.34bn",
    "$5.75bn",
    "$2.3bn"
   ],
   "correct": [
    3
   ]
  },
  {
   "id": "m12-004",
   "type": "mcq",
   "stem": "As at 15 September 2026, which of Nebius's three defined power metrics is not disclosed at all?",
   "explanation": "Contracted power is reported quarterly and connected power is guided as a range, but active power, the revenue-bearing figure, is not disclosed. Connected power is the strongest distractor because only a guidance range, not an actual, is given; that is still a disclosure.",
   "source": "Module 12 note, 15 September 2026; Nebius Q1 2026 shareholder letter, 13 May 2026 (F-017, F-016)",
   "as_of": "2026-09-15",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "capacity disclosure",
   "select": "one",
   "options": [
    "Active power",
    "Contracted power",
    "Connected power",
    "Nameplate site power"
   ],
   "correct": [
    0
   ]
  },
  {
   "id": "m12-005",
   "type": "mcq",
   "stem": "For the Microsoft and Meta tranches, at which point does revenue recognition begin?",
   "explanation": "The 20-F states fees are payable subject to satisfaction of deployment and availability of each tranche, so revenue starts at acceptance. Energisation is the strongest distractor: a modeller who starts revenue there overstates the first quarter of every tranche by the acceptance lag.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-029, D-002)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "revenue timing",
   "select": "one",
   "options": [
    "At energisation, when power first reaches the installed IT",
    "At contract signing of the master agreement",
    "At delivery of the racks to site",
    "At acceptance of the tranche"
   ],
   "correct": [
    3
   ]
  },
  {
   "id": "m12-006",
   "type": "mcq",
   "stem": "At GB300 NVL72 density (72 GPUs per rack, 140 kW per rack) and 70% utilisation, approximately what blended price per GPU-hour corresponds to $20m of annual contract value per IT MW?",
   "explanation": "One IT MW holds about 514 GPUs, giving 3.15m sold GPU-hours a year at 70%; $20m over 3.15m is about $6.35. $6.00 is the strongest distractor because it is the reference-case spine, which the module notes sits marginally below Q2 deal yield.",
   "source": "Module 12 note, 15 September 2026 (F-027)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "pricing",
   "select": "one",
   "options": [
    "About $4.45",
    "About $6.35",
    "About $9.07",
    "About $6.00"
   ],
   "correct": [
    1
   ]
  },
  {
   "id": "m12-007",
   "type": "mcq",
   "stem": "How does Nebius define annualised run-rate revenue (ARR)?",
   "explanation": "Every letter since Q3 2025 defines ARR as AI cloud revenue from the last month of the quarter multiplied by twelve. Quarterly revenue times four is the strongest distractor: it is a common run-rate convention but understates a quarter in which acceptances land late.",
   "source": "Module 12 note, 15 September 2026; Nebius Q2 2026 shareholder letter, 12 August 2026 (F-053, M-007)",
   "as_of": "2026-08-12",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "run-rate metrics",
   "select": "one",
   "options": [
    "Quarterly AI cloud revenue multiplied by four",
    "Contracted revenue expected in the next twelve months",
    "AI cloud revenue from the last month of the quarter multiplied by twelve",
    "Remaining performance obligations divided by remaining contract term"
   ],
   "correct": [
    2
   ]
  },
  {
   "id": "m12-008",
   "type": "mcq",
   "stem": "In the module's model architecture, to which vector does the Meta $15bn unsold-capacity Order belong?",
   "explanation": "The Order is a capacity put exercisable only on capacity Nebius fails to sell, so it is a floor on the merchant vector. The contracted vector is the strongest distractor; counting the put as contracted revenue or backlog is the misreading the module warns against.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-040)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "contract structures",
   "select": "one",
   "options": [
    "The contracted take-or-pay vector",
    "Backlog within remaining performance obligations",
    "The ancillary revenue block",
    "The merchant vector, as a floor price"
   ],
   "correct": [
    3
   ]
  },
  {
   "id": "m12-009",
   "type": "mcq",
   "stem": "Why is rack price absent from the annual site EBITDA tornado yet the largest bar on the five-year site NPV tornado?",
   "explanation": "Rack price enters capex and depreciation, both below EBITDA, but the NPV deducts day-one capex in full, so the same input moves NPV by up to $1,167m. The IT support explanation is the strongest distractor: that small effect ($18m) is why the tornado base moved, not why rack price is absent.",
   "source": "Module 12 note, 15 September 2026 (F-091, F-093, D-011)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "sensitivity",
   "select": "one",
   "options": [
    "Rack price affects only IT support cost, which is capped at 2.5% of rack capex and never ranks",
    "The EBITDA tornado was run on the previous $4.0m spine",
    "Rack price sits in capex and depreciation, below EBITDA, but is deducted in full in the NPV",
    "The NPV tornado is levered and the EBITDA tornado is not"
   ],
   "correct": [
    2
   ]
  },
  {
   "id": "m12-010",
   "type": "mcq",
   "stem": "At 31 December 2025, what was the balance of assets not yet in use within Nebius's gross property and equipment?",
   "explanation": "The 20-F reports $2,417m of assets not yet in use within $6,190m of gross property and equipment. $6,190m is the strongest distractor because it is the gross total that contains the line; $1,058m is trade payables for property and equipment.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-069)",
   "as_of": "2025-12-31",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "capex timing",
   "select": "one",
   "options": [
    "$6,190m",
    "$2,417m",
    "$1,058m",
    "$5,553m"
   ],
   "correct": [
    1
   ]
  },
  {
   "id": "m12-011",
   "type": "mcq",
   "stem": "From 1 January 2026, what is Nebius's policy useful life for servers and network equipment?",
   "explanation": "The 20-F extends the life from four to five years from 1 January 2026, applied prospectively. Four years is the strongest distractor because it was the policy through 2025 and remains, in the module's view, the honest economic life for merchant capacity.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-074)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "useful life",
   "select": "one",
   "options": [
    "Three years",
    "Four years",
    "Five years",
    "Six years"
   ],
   "correct": [
    2
   ]
  },
  {
   "id": "m12-012",
   "type": "mcq",
   "stem": "Nebius reported $2,246m of net cash from operating activities for the quarter ended 30 June 2026. Which two items account for almost all of it?",
   "explanation": "Deferred revenue grew $1,197m and accounts receivable fell $1,187m as year-end and Q1 invoices were collected, leaving a residual near zero. Adjusted EBITDA plus depreciation is the strongest distractor: Q2 adjusted EBITDA was only $236m, far short of the cash figure.",
   "source": "Module 12 note, 15 September 2026; Nebius Q2 2026 results (6-K), 12 August 2026 (F-047, F-048)",
   "as_of": "2026-06-30",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "cash flow",
   "select": "one",
   "options": [
    "The increase in deferred revenue and the decrease in accounts receivable",
    "Adjusted EBITDA and the depreciation add-back",
    "Customer prepayments and supplier deferred-payment terms",
    "The increase in deferred revenue and the share-based compensation add-back"
   ],
   "correct": [
    0
   ]
  },
  {
   "id": "m12-013",
   "type": "mcq",
   "stem": "What is the module's standard modelling defence against the construction-period capitalised-interest circularity?",
   "explanation": "Capitalised interest depends on the qualifying asset balance, which depends on funding, which depends on interest; the fix is a prior-period-balance convention or an explicit iteration switch monitored on the Checks sheet. Expensing all interest is the strongest distractor: it breaks the circularity but misstates ASC 835-20.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (G-012, F-071)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "modelling conventions",
   "select": "one",
   "options": [
    "Expense all interest during construction rather than capitalise it",
    "A prior-period-balance convention or an explicit iteration switch on the Checks sheet",
    "Fix capitalised interest at the 2025 amount of $28.0m",
    "Model the convertible notes on a sculpted draw schedule"
   ],
   "correct": [
    1
   ]
  },
  {
   "id": "m12-014",
   "type": "mcq",
   "stem": "Why does PUE rank fourth in the reference-case site EBITDA tornado when its effect on the energy line is under $10m?",
   "explanation": "At a fixed 115 MW fence power, PUE divides site MW into IT MW: at 1.30 only 88.5 MW IT remains, losing 11.5% of accelerators and about $217m of EBITDA. Facility opex is the strongest distractor; that rate applies to IT kW and does not move with PUE.",
   "source": "Module 12 note, 15 September 2026 (F-090, D-012)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "sensitivity",
   "select": "one",
   "options": [
    "Because PUE also scales facility opex per kW-month",
    "Because the tornado is ranked on capex per MW rather than EBITDA",
    "Because a higher PUE increases the SLA credit exposure",
    "Because at fixed fence power PUE divides site MW into IT MW"
   ],
   "correct": [
    3
   ]
  },
  {
   "id": "m12-015",
   "type": "mcq",
   "stem": "Which of the following are forms of power that Nebius defines in its Q1 2026 shareholder letter? Select all that apply.",
   "explanation": "Nebius defines contracted power (land and power secured), connected power (connected into built and equipped data centres) and active power (consumed by operational IT). Nameplate is the strongest distractor: site nameplates appear in press releases but are not one of the three defined metrics.",
   "source": "Module 12 note, 15 September 2026; Nebius Q1 2026 shareholder letter, 13 May 2026 (F-016)",
   "as_of": "2026-05-13",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "capacity disclosure",
   "select": "all",
   "options": [
    "Contracted power",
    "Connected power",
    "Nameplate power",
    "Active power",
    "Billing power",
    "Sellable power"
   ],
   "correct": [
    0,
    1,
    3
   ]
  },
  {
   "id": "m12-016",
   "type": "mcq",
   "stem": "In the revised reference-case site opex composition, which lines are marked as proposals rather than handbook inputs? Select all that apply.",
   "explanation": "Power ($70.5m) and facility opex ($18.0m) derive from handbook inputs; IT support and warranty, cloud operations staffing and network transit and software are proposals. Power is the strongest distractor because its load-factor refinement is proposed, but the $70 per MWh input itself is handbook.",
   "source": "Module 12 note, 15 September 2026 (S-006, F-024)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "opex composition",
   "select": "all",
   "options": [
    "IT support and warranty",
    "Power",
    "Cloud operations and customer staffing",
    "Facility opex",
    "Network transit and software"
   ],
   "correct": [
    0,
    2,
    4
   ]
  },
  {
   "id": "m12-017",
   "type": "mcq",
   "stem": "Which of the following are true of Nebius's ARR metric as the module describes it? Select all that apply.",
   "explanation": "ARR annualises the last month, so it carries the ratable release of prepaid deferred revenue and any tranche accepted late in the quarter at full run-rate, and deducts nothing for churn or decay. It is not comparable with ACV per MW, which is a bookings yield excluding prepayment.",
   "source": "Module 12 note, 15 September 2026; Nebius Q2 2026 shareholder letter, 12 August 2026 (M-007, D-008)",
   "as_of": "2026-08-12",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "run-rate metrics",
   "select": "all",
   "options": [
    "It includes the ratable release of prepaid deferred revenue",
    "It is directly comparable with annual contract value per MW",
    "It includes tranches accepted in the last month at full run-rate",
    "It is measured on a bookings basis excluding prepayment",
    "It deducts nothing for churn or price decay"
   ],
   "correct": [
    0,
    2,
    4
   ]
  },
  {
   "id": "m12-018",
   "type": "mcq",
   "stem": "As at 15 September 2026, which of the following instruments form part of Nebius's capital structure as listed in the module? Select all that apply.",
   "explanation": "The register lists equity including the NVIDIA pre-funded warrant, convertible notes through 2034, the $775m senior secured facility at SOFR plus 2.50%, interest-bearing customer prepayments, supplier deferred-payment terms and lease liabilities. A receivables-backed revolver and preference shares are not listed.",
   "source": "Module 12 note, 15 September 2026; Nebius press releases, 17 July and 24 August 2026 (S-005, F-099, F-100)",
   "as_of": "2026-09-15",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "financing",
   "select": "all",
   "options": [
    "A $775m senior secured facility at SOFR plus 2.50%",
    "A revolving credit facility secured on trade receivables",
    "Convertible senior notes due 2034",
    "Preference shares",
    "A pre-funded warrant held by NVIDIA",
    "Customer prepayments carrying a significant financing component"
   ],
   "correct": [
    0,
    2,
    4,
    5
   ]
  },
  {
   "id": "m12-019",
   "type": "mcq",
   "stem": "Which of the following statements about the capex signatures of Nebius's delivery models are correct on the revised spine? Select all that apply.",
   "explanation": "Owned build carries every layer ($51.1m per IT MW); leased shell with owned fit-out about $48m with shell rent under ASC 842; colocation IT only (about $39m); partnership nil to minimal. Under ASC 842 the colocation fee is a single straight-line cost, not depreciation and interest.",
   "source": "Module 12 note, 15 September 2026 (D-015, F-020)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "delivery models",
   "select": "all",
   "options": [
    "Owned build carries all layers as capex, about $51.1m per IT MW",
    "Colocation carries IT capex only, about $39m per IT MW",
    "Under colocation the fee is split into depreciation and interest",
    "The infrastructure-partnership model carries nil to minimal capex",
    "Under owned build the power cost is capitalised into capex",
    "Leased shell with owned fit-out carries about $48m per IT MW"
   ],
   "correct": [
    0,
    1,
    3,
    5
   ]
  },
  {
   "id": "m12-020",
   "type": "mcq",
   "stem": "As at 15 September 2026, which of the following are undisclosed by Nebius and must therefore be assumed in the model? Select all that apply.",
   "explanation": "Active power, tranche sizes in MW and the backstop strike price are all undisclosed. Contracted power is the strongest distractor because only a group total is given, but that is a disclosure; useful lives by asset class and RPO at year-end 2025 are stated in the 20-F.",
   "source": "Module 12 note, 15 September 2026 (F-017, F-040, F-051, F-074)",
   "as_of": "2026-09-15",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "capacity disclosure",
   "select": "all",
   "options": [
    "Active power",
    "Tranche sizes in MW under the Microsoft and Meta agreements",
    "The total contracted power at group level",
    "The strike price of the Meta unsold-capacity Order",
    "Policy useful lives by asset class",
    "Remaining performance obligations at 31 December 2025"
   ],
   "correct": [
    0,
    1,
    3
   ]
  },
  {
   "id": "m12-021",
   "type": "mcq",
   "stem": "Which of the following do NOT apply to the reserved (committed) rate for multi-year capacity as the module describes it?",
   "explanation": "The reserved rate is fixed for the term, set at signing and forms the floor of the price term structure. Floating with scarcity and decaying within a generation are properties of the on-demand rate, the neighbouring concept; the blended rate, not the reserved rate, is the output.",
   "source": "Module 12 note, 15 September 2026 (D-009)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "pricing",
   "select": "all_not",
   "options": [
    "It is fixed for the contract term",
    "It floats with scarcity premia",
    "It is set at contract signing",
    "It decays within a generation as supply arrives",
    "It sets the floor of the price term structure"
   ],
   "correct": [
    1,
    3
   ]
  },
  {
   "id": "m12-022",
   "type": "mcq",
   "stem": "Which of the following do NOT apply to the Meta $15bn unsold-capacity Order?",
   "explanation": "Meta must buy capacity Nebius fails to sell to third parties, for the remainder of five years from initial deployment, at an undisclosed price. Paying irrespective of use is the take-or-pay feature of the dedicated tranches, not the Order; the Order sits in the merchant vector as a floor, not in contracted revenue.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-039, F-040, D-005)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "contract structures",
   "select": "all_not",
   "options": [
    "Meta is obligated to purchase capacity that Nebius fails to sell to third parties",
    "Meta pays for the capacity irrespective of whether Nebius has sold it to others",
    "The obligation runs for the remainder of five years from initial deployment",
    "It belongs in the contracted revenue vector of the model",
    "Its strike price is disclosed in the 2025 Form 20-F"
   ],
   "correct": [
    1,
    3,
    4
   ]
  },
  {
   "id": "m12-023",
   "type": "mcq",
   "stem": "Which of the following do NOT apply to Nebius's accounting for customer prepayments?",
   "explanation": "Prepayments are recorded as a contract liability and as operating cash inflow, with a significant financing component where receipt is more than a year ahead of delivery. Revenue is recognised ratably from acceptance, not on receipt, and the inflow sits in operating, not financing, cash flow.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-049, P-002)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "revenue recognition",
   "select": "all_not",
   "options": [
    "The cash is recorded as a contract liability (deferred revenue)",
    "The cash is recognised as revenue when received",
    "The cash appears as an operating cash inflow",
    "A significant financing component is recognised where receipt is more than a year ahead of delivery",
    "The cash is presented within financing activities in the cash flow statement"
   ],
   "correct": [
    1,
    4
   ]
  },
  {
   "id": "m12-024",
   "type": "mcq",
   "stem": "Which of the following do NOT apply to the reference-case annual site EBITDA tornado?",
   "explanation": "Energisation timing ranks first, PUE fourth as a capacity driver, and all cost-side bars together move EBITDA less than one quarter's SLA-credit exposure. Rack price and depreciation life are absent by construction: both sit below EBITDA, which is why the module rejects EBITDA as the headline metric.",
   "source": "Module 12 note, 15 September 2026 (F-091, D-011)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "sensitivity",
   "select": "all_not",
   "options": [
    "Energisation timing is the highest-ranked driver",
    "Rack price appears among the ten ranked drivers",
    "PUE ranks fourth because it is modelled as a capacity driver",
    "Depreciation life appears among the ten ranked drivers",
    "Every cost-side driver combined moves EBITDA by less than one quarter's SLA-credit exposure"
   ],
   "correct": [
    1,
    3
   ]
  },
  {
   "id": "m12-025",
   "type": "recall",
   "stem": "Under which US GAAP codification topic does Nebius capitalise interest on data centre construction and related equipment?",
   "explanation": "Nebius capitalises interest under ASC 835-20, beginning Q3 2025 with $28.0m capitalised in 2025. ASC 606 and ASC 842 are the revenue and lease topics and do not govern interest capitalisation; IAS 23 is the IFRS equivalent, not the applicable standard.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-071)",
   "as_of": "2025-12-31",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "capitalised interest",
   "accept": [
    "ASC 835-20",
    "835-20",
    "ASC 835",
    "835",
    "ASC Topic 835-20"
   ],
   "fuzzy": true
  },
  {
   "id": "m12-026",
   "type": "recall",
   "stem": "As at 20 May 2026, which supplier agreed to provide 328 MW of solid-oxide fuel-cell capacity behind the meter at Nebius's first US deployment?",
   "explanation": "The 20 May 2026 press release names Bloom Energy, replacing previously planned reciprocating engines. The arrangement converts the tariff line into a fuel line plus a capacity charge; the 2025 Sustainability Report calls it a long-term agreement, supporting a service-contract reading.",
   "source": "Module 12 note, 15 September 2026; Nebius press release, 20 May 2026 (F-083)",
   "as_of": "2026-05-20",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "power",
   "accept": [
    "Bloom Energy",
    "Bloom",
    "Bloom Energy Corporation"
   ],
   "fuzzy": true
  },
  {
   "id": "m12-027",
   "type": "recall",
   "stem": "What term does the Project use to characterise the Meta $15bn unsold-capacity Order?",
   "explanation": "The Project characterises the Order as a capacity put: a right to require Meta to buy capacity Nebius has failed to sell, at an undisclosed strike. It is not a take-or-pay commitment, which obliges payment on capacity the customer ordered irrespective of use.",
   "source": "Module 12 note, 15 September 2026 (F-040, G-007)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "contract structures",
   "accept": [
    "Capacity put",
    "Contingent demand backstop",
    "Demand backstop",
    "Capacity backstop"
   ],
   "fuzzy": true
  },
  {
   "id": "m12-028",
   "type": "recall",
   "stem": "Which line within Nebius's property and equipment holds vendor prepayments and construction in progress that have not yet been placed in service?",
   "explanation": "Assets not yet in use held $2,417m at 31 December 2025 and, per the note, includes prepayments made for property, plant and equipment. Depreciation begins only when assets are ready for intended use. UK and EU accounts call the same line assets under construction.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (G-011, F-069)",
   "as_of": "2025-12-31",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "capex timing",
   "accept": [
    "Assets not yet in use",
    "Assets under construction",
    "AUC",
    "Construction in progress",
    "CIP"
   ],
   "fuzzy": true
  },
  {
   "id": "m12-029",
   "type": "recall",
   "stem": "Which profit metric does the module defend as the headline number for a GPU cloud site, in place of EBITDA?",
   "explanation": "Site EBIT after tranche depreciation is the number to defend: depreciation at $2.75 per sold GPU-hour is four times cash opex, and rack price and economic life do not touch EBITDA at all. Adjusted EBITDA is the metric management leads with and is the confusion to avoid.",
   "source": "Module 12 note, 15 September 2026 (F-024, S-006, D-011)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "unit economics",
   "accept": [
    "EBIT after tranche depreciation",
    "EBIT",
    "Site EBIT",
    "EBIT after depreciation",
    "Operating profit"
   ],
   "fuzzy": true
  },
  {
   "id": "m12-030",
   "type": "recall",
   "stem": "What power usage effectiveness (PUE) does the reference case assume?",
   "explanation": "The reference case assumes PUE 1.15, so 115 MW at the fence yields 100 MW of IT load. The sourced range for liquid-cooled sites is 1.10 to 1.30; 1.30 would leave only 88.5 MW IT, which is why PUE ranks fourth on the EBITDA tornado.",
   "source": "Module 12 note, 15 September 2026 (F-018)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "reference case",
   "accept": [
    "1.15"
   ],
   "fuzzy": false
  },
  {
   "id": "m12-031",
   "type": "recall",
   "stem": "What is the UK colocation term for the contractual sign-off that a tranche is deployed and available, triggering billing?",
   "explanation": "UK colocation practice calls acceptance 'ready for service' (RFS). Energisation is the distinct earlier event when power reaches the installed IT; for the Microsoft and Meta tranches billing starts at acceptance, not energisation.",
   "source": "Module 12 note, 15 September 2026 (G-002)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "revenue timing",
   "accept": [
    "Ready for service",
    "RFS",
    "Ready-for-service date"
   ],
   "fuzzy": true
  },
  {
   "id": "m12-032",
   "type": "recall",
   "stem": "Which IFRS standard is the UK and EU equivalent of ASC 835-20 for the capitalisation of interest?",
   "explanation": "IAS 23 Borrowing Costs governs capitalisation under IFRS and is therefore the reference for Nebius UK Ltd's assumed FRS 101 or FRS 102 accounts. IAS 16 is the strongest confusion: it sets the available-for-use date but does not govern borrowing costs.",
   "source": "Module 12 note, 15 September 2026 (G-012)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "capitalised interest",
   "accept": [
    "IAS 23",
    "IAS 23 Borrowing Costs"
   ],
   "fuzzy": true
  },
  {
   "id": "m12-033",
   "type": "define",
   "stem": "Define 'take-or-pay' as it applies to the Microsoft and Meta dedicated-capacity agreements.",
   "explanation": "Take-or-pay obliges the customer to pay the contracted fee whether or not it uses the capacity; the 20-F says fees are payable irrespective of actual utilisation. The confusion is the capacity put, which obliges purchase only of capacity the operator fails to sell.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (G-006, F-030)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "contract structures",
   "model_answer": "A contract term under which the customer pays the contracted fee whether or not it actually uses the capacity.",
   "rubric": {
    "must": [
     [
      "pays",
      "pay",
      "payable",
      "payment",
      "paying"
     ],
     [
      "whether or not",
      "irrespective",
      "regardless",
      "even if unused",
      "even if not used",
      "does not use"
     ]
    ],
    "should": [
     [
      "customer",
      "offtaker",
      "buyer",
      "counterparty"
     ],
     [
      "capacity",
      "contracted fee",
      "committed capacity",
      "gpu hours"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "unsold capacity",
      "fails to sell",
      "fail to sell",
      "cannot sell"
     ]
    ]
   }
  },
  {
   "id": "m12-034",
   "type": "define",
   "stem": "Define 'active power' as Nebius uses the term.",
   "explanation": "Active power is power consumed by installed, operational IT that is available for revenue; it is the third and undisclosed metric. Contracted power (land and grid secured) is the confusion: it is four to five times larger and bills nothing.",
   "source": "Module 12 note, 15 September 2026; Nebius Q1 2026 shareholder letter, 13 May 2026 (G-001, F-016)",
   "as_of": "2026-05-13",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "capacity disclosure",
   "model_answer": "Power consumed by installed, operational IT that is available to generate revenue.",
   "rubric": {
    "must": [
     [
      "installed",
      "deployed",
      "in service",
      "in place",
      "operational"
     ],
     [
      "revenue",
      "billable",
      "billing",
      "generate revenue",
      "revenue capable"
     ]
    ],
    "should": [
     [
      "consumed",
      "drawn",
      "draws",
      "consumes",
      "used by"
     ],
     [
      "it",
      "hardware",
      "gpus",
      "servers",
      "compute",
      "racks"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "contracted",
      "land and power",
      "grid secured"
     ]
    ]
   }
  },
  {
   "id": "m12-035",
   "type": "define",
   "stem": "Define 'significant financing component' as it applies to Nebius's customer prepayments.",
   "explanation": "Where a customer pays more than a year before Nebius performs, ASC 606 treats part of the prepayment as a loan: interest expense is recognised and revenue is grossed up. The confusion is treating the prepayment as free cash; the 20-F confirms interest was booked on major-customer advances.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (G-004, F-049)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "revenue recognition",
   "model_answer": "An ASC 606 adjustment applied when payment and performance are more than a year apart, so that a customer prepayment is treated partly as a loan, with interest expense recognised and revenue grossed up.",
   "rubric": {
    "must": [
     [
      "more than a year",
      "over a year",
      "more than one year",
      "over one year",
      "exceeds one year",
      "year apart",
      "year or more",
      "over twelve months"
     ],
     [
      "loan",
      "financing",
      "interest",
      "borrowing",
      "time value"
     ]
    ],
    "should": [
     [
      "prepayment",
      "advance",
      "paid in advance",
      "payment before",
      "upfront",
      "prepaid"
     ],
     [
      "grossed up",
      "gross up",
      "revenue increased",
      "added to revenue",
      "higher revenue"
     ],
     [
      "asc 606",
      "ifrs 15",
      "revenue standard"
     ]
    ],
    "should_min": 1,
    "forbid": []
   }
  },
  {
   "id": "m12-036",
   "type": "define",
   "stem": "Define 'placed-in-service date'.",
   "explanation": "The placed-in-service date is when an asset is ready for its intended use: depreciation begins and interest capitalisation ends, and the auditor named it a critical audit matter. Delivery date is the confusion; racks delivered but not installed remain in assets not yet in use.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (G-014, F-072)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "capex timing",
   "model_answer": "The date an asset is ready for its intended use, on which depreciation begins and interest capitalisation ends.",
   "rubric": {
    "must": [
     [
      "ready for",
      "available for use",
      "intended use",
      "in service",
      "ready to use"
     ],
     [
      "depreciation",
      "depreciate",
      "depreciated",
      "depreciating"
     ]
    ],
    "should": [
     [
      "capitalisation ends",
      "capitalization ends",
      "capitalisation stops",
      "capitalization stops",
      "interest capitalisation",
      "interest capitalization",
      "capitalised interest",
      "capitalized interest"
     ],
     [
      "begins",
      "starts",
      "commences",
      "start",
      "begin"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "delivered",
      "delivery date",
      "on delivery"
     ]
    ]
   }
  },
  {
   "id": "m12-037",
   "type": "define",
   "stem": "Define 'capacity put' as the Project uses the term.",
   "explanation": "A capacity put is the operator's right to require a counterparty to buy unsold capacity at a pre-agreed price; Meta's $15bn Order is the example. Take-or-pay is the confusion: it obliges payment irrespective of use on capacity the customer ordered, not on capacity the operator failed to sell.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026 (G-007, F-039)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "contract structures",
   "model_answer": "The right of the operator to require a counterparty to buy unsold capacity at a pre-agreed price.",
   "rubric": {
    "must": [
     [
      "unsold",
      "not sold",
      "fails to sell",
      "fail to sell",
      "cannot sell",
      "failed to sell",
      "could not sell",
      "unable to sell",
      "does not sell",
      "has not sold",
      "not taken up"
     ],
     [
      "buy",
      "purchase",
      "take",
      "acquire",
      "pay for"
     ]
    ],
    "should": [
     [
      "pre agreed",
      "agreed price",
      "fixed price",
      "strike",
      "undisclosed price",
      "set price"
     ],
     [
      "right",
      "option",
      "require",
      "oblige",
      "obligated",
      "obliges",
      "obligation"
     ],
     [
      "counterparty",
      "customer",
      "meta",
      "buyer",
      "offtaker"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "whether or not it uses",
      "irrespective of use",
      "regardless of use",
      "irrespective of utilisation"
     ]
    ]
   }
  },
  {
   "id": "m12-038",
   "type": "define",
   "stem": "Define 'vintage' as the module uses the term in a data centre model.",
   "explanation": "A vintage is a cohort of hardware bought and energised together, carried with its own price, utilisation, life and residual; it is the basis of tranche depreciation and price ramps. The confusion is the accounting asset class, which is a policy category, not a purchase cohort.",
   "source": "Module 12 note, 15 September 2026 (G-010)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "modelling conventions",
   "model_answer": "A cohort of hardware bought and energised together, carried in the model with its own price, utilisation, life and residual value.",
   "rubric": {
    "must": [
     [
      "cohort",
      "batch",
      "group",
      "tranche",
      "generation",
      "set of"
     ],
     [
      "hardware",
      "racks",
      "gpus",
      "equipment",
      "accelerators",
      "servers"
     ]
    ],
    "should": [
     [
      "its own",
      "own price",
      "separate",
      "distinct",
      "specific"
     ],
     [
      "life",
      "lives",
      "useful life",
      "depreciation",
      "depreciated"
     ],
     [
      "residual",
      "salvage"
     ],
     [
      "utilisation",
      "utilization"
     ]
    ],
    "should_min": 2,
    "forbid": []
   }
  },
  {
   "id": "m12-039",
   "type": "define",
   "stem": "Define 'load factor' as the module uses it for a GPU site's power cost.",
   "explanation": "Load factor is actual energy drawn as a share of nameplate at a given utilisation; it determines how far power cost falls when utilisation falls, since idle Blackwell trays still draw a substantial fraction of TDP. Utilisation itself is the confusion: hours sold, not energy drawn.",
   "source": "Module 12 note, 15 September 2026 (G-016)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "power",
   "model_answer": "Actual energy drawn by the IT as a share of nameplate at a given utilisation.",
   "rubric": {
    "must": [
     [
      "nameplate",
      "rated",
      "tdp",
      "peak",
      "full load",
      "maximum"
     ],
     [
      "share",
      "fraction",
      "proportion",
      "percentage",
      "ratio",
      "percent",
      "relative to"
     ]
    ],
    "should": [
     [
      "energy",
      "power",
      "draw",
      "drawn",
      "consumption",
      "consumed"
     ],
     [
      "utilisation",
      "utilization",
      "usage",
      "workload"
     ]
    ],
    "should_min": 1,
    "forbid": []
   }
  },
  {
   "id": "m12-040",
   "type": "define",
   "stem": "Define 'refresh capex' and distinguish it from maintenance capex.",
   "explanation": "Refresh capex replaces the whole IT stack at the end of its economic life with a new vintage; maintenance capex (spares, failed trays, optics, 1% to 2% of IT capex a year) replaces failed components in the existing vintage. A model with a single depreciation life has no refresh at all.",
   "source": "Module 12 note, 15 September 2026 (G-019, D-019)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "lifecycle",
   "model_answer": "Capital expenditure to replace the whole IT stack at the end of its economic life with a new hardware vintage, rather than spend on spares and failed components.",
   "rubric": {
    "must": [
     [
      "replace",
      "replacement",
      "replacing",
      "swap",
      "swapped"
     ],
     [
      "end of",
      "end of life",
      "end of economic life",
      "life ends",
      "year five",
      "at year five"
     ]
    ],
    "should": [
     [
      "new vintage",
      "new generation",
      "new hardware",
      "next generation",
      "new racks"
     ],
     [
      "it stack",
      "racks",
      "gpus",
      "hardware",
      "servers",
      "accelerators"
     ],
     [
      "economic life",
      "useful life",
      "accounting life"
     ]
    ],
    "should_min": 1,
    "forbid": []
   }
  },
  {
   "id": "m12-041",
   "type": "numeric",
   "stem": "A 100 MW IT site holds 714 GB300 NVL72 racks at $5.0m per rack. Networking, storage and other IT is $3.0m per IT MW and non-IT capex is $12.4m per IT MW. What is the all-in capex in $m?",
   "explanation": "Racks 714 x $5.0m = $3,570m; other IT 100 x $3.0m = $300m; non-IT 100 x $12.4m = $1,240m; total $5,110m ($51.1m per IT MW). The common error is omitting the $300m of networking and storage, giving $4,810m.",
   "source": "Module 12 note, 15 September 2026 (F-020, M-013)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "capex per MW",
   "value": 5110,
   "unit": "$m",
   "tolerance_pct": 3,
   "working": "714 x 5.0 = 3,570; 100 x 3.0 = 300; 100 x 12.4 = 1,240; 3,570 + 300 + 1,240 = 5,110 ($m)."
  },
  {
   "id": "m12-042",
   "type": "numeric",
   "stem": "A site has 51,400 accelerators, 100% uptime, 70% utilisation and a blended price of $6.00 per sold GPU-hour. What is annual compute revenue in $m?",
   "explanation": "51,400 x 8,760 = 450.3m available GPU-hours; x 70% = 315.2m sold GPU-hours; x $6.00 = $1,891m. Applying 70% to price rather than hours, or using 8,000 hours, are the common slips.",
   "source": "Module 12 note, 15 September 2026 (F-021, M-005)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "revenue build",
   "value": 1891,
   "unit": "$m",
   "tolerance_pct": 3,
   "working": "51,400 x 8,760 = 450,264,000 available GPU-hours; x 0.70 = 315,184,800 sold; x $6.00 = $1,891m."
  },
  {
   "id": "m12-043",
   "type": "numeric",
   "stem": "A site has 100 MW of IT load at PUE 1.15, runs 8,760 hours at a 100% load factor, and pays an all-in tariff of $70 per MWh. What is the annual energy cost in $m?",
   "explanation": "100 x 1.15 = 115 MW at the fence; 115 x 8,760 = 1,007,400 MWh; x $70 = $70.5m. Forgetting PUE gives $61.3m; the answer is in $m, so the expected entry is 70.5, not 70,500,000.",
   "source": "Module 12 note, 15 September 2026 (F-081, M-009)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "power",
   "value": 70.5,
   "unit": "$m",
   "tolerance_pct": 3,
   "working": "100 x 1.15 = 115 MW; 115 x 8,760 = 1,007,400 MWh; x 70 = 70,518,000 = $70.5m."
  },
  {
   "id": "m12-044",
   "type": "numeric",
   "stem": "For the six months to 30 June 2026, Nebius reported net cash from operating activities of $4,504m, including a $4,395m increase in deferred revenue. What was operating cash flow before the change in deferred revenue, in $m?",
   "explanation": "OCF before prepayments = reported OCF less the deferred revenue movement: 4,504 less 4,395 = $109m. Reading the $4,504m as cash conversion of earnings is the misuse the metric exists to expose; almost all of it is customer prepayment.",
   "source": "Module 12 note, 15 September 2026; Nebius Q2 2026 results (6-K), 12 August 2026 (M-015, F-046)",
   "as_of": "2026-06-30",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "cash flow",
   "value": 109,
   "unit": "$m",
   "tolerance_pct": 3,
   "working": "4,504 - 4,395 = 109 ($m)."
  },
  {
   "id": "m12-045",
   "type": "numeric",
   "stem": "As at 15 September 2026, year-end 2026 ARR guidance has a low end of $7bn. Using Nebius's ARR definition and the disclosed 2026 base yield of $12m of annual contract value per MW, how many MW must be billing in December 2026 to reach $7bn? Answer in MW.",
   "explanation": "$7bn of ARR requires December revenue of $7,000m / 12 = $583m; at $12m per MW-year ($1.0m per MW-month) that is 583 MW billing. The same calculation at the $20m Q2 cohort yield gives 350 MW; using connected power guidance directly is the error, since only billing MW count.",
   "source": "Module 12 note, 15 September 2026; Nebius Q2 2026 shareholder letter, 12 August 2026 (F-097, F-096, P-008)",
   "as_of": "2026-09-15",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "ARR guidance test",
   "value": 583,
   "unit": "MW",
   "tolerance_pct": 3,
   "working": "7,000 / 12 = 583.3 ($m December revenue); 12 / 12 = 1.0 ($m per MW-month); 583.3 / 1.0 = 583 MW."
  },
  {
   "id": "m12-046",
   "type": "numeric",
   "stem": "A site generates $1,673m of EBITDA a year for five years, with $5,110m of capex on day one, no prepayment and no residual value. Discounting at 12%, what is the five-year unlevered pre-tax NPV in $m?",
   "explanation": "The five-year annuity factor at 12% is 3.605, so $1,673m a year is worth $6,031m; less $5,110m capex gives $921m. Discounting the capex as well, or using an undiscounted sum ($8,365m less $5,110m), are the common errors.",
   "source": "Module 12 note, 15 September 2026 (F-092, M-016)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "site NPV",
   "value": 921,
   "unit": "$m",
   "tolerance_pct": 3,
   "working": "Annuity factor (12%, 5 years) = (1 - 1.12^-5) / 0.12 = 3.605; 1,673 x 3.605 = 6,031; 6,031 - 5,110 = 921 ($m)."
  },
  {
   "id": "m12-047",
   "type": "sequence",
   "stem": "Put the timing chain from contracted power to cash receipt in order.",
   "explanation": "Contracted power (land and grid) precedes connected power (shell and M&E energised), then active power (IT installed and burned in), then acceptance against deployment and availability tests, then billing from acceptance, then cash receipt. Placing billing before acceptance is the error the module warns against.",
   "source": "Module 12 note, 15 September 2026; Nebius Q1 2026 shareholder letter, 13 May 2026; Nebius 2025 Form 20-F, 30 April 2026 (P-001)",
   "as_of": "2026-05-13",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "revenue timing",
   "steps": [
    "Contracted power: land and grid secured",
    "Connected power: shell and M&E built and energised",
    "Active power: IT installed and burned in",
    "Acceptance: tranche signed off against deployment and availability tests",
    "Billing starts: revenue recognised ratably from acceptance",
    "Cash receipt: prepaid element already held, or monthly invoice paid"
   ]
  },
  {
   "id": "m12-048",
   "type": "sequence",
   "stem": "Put the prepayment accounting chain from cash receipt to revenue recognition in order.",
   "explanation": "Cash arrives, is booked as deferred revenue and operating inflow, accrues a financing component if more than a year ahead of performance, then the tranche is accepted, the liability is released ratably to revenue and the unrecognised balance sits in RPO. Recognising revenue on receipt is the error.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026; Nebius Q2 2026 results (6-K), 12 August 2026 (P-002)",
   "as_of": "2026-06-30",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "revenue recognition",
   "steps": [
    "Cash received on signing or tranche delivery",
    "Recorded as deferred revenue (contract liability) and as operating cash inflow",
    "Significant financing component accrues as interest expense with revenue gross-up",
    "Tranche accepted; performance begins",
    "Deferred revenue released ratably to revenue over the service term",
    "Unrecognised balance reported within remaining performance obligations"
   ]
  },
  {
   "id": "m12-049",
   "type": "sequence",
   "stem": "Put Nebius's 2025 to 2026 financing sequence in chronological order.",
   "explanation": "June 2025 $1.0bn converts; September 2025 $3.16bn converts plus $1.15bn equity; March 2026 NVIDIA $2bn warrant and $4.34bn converts; Q2 2026 $2.8bn ATM; July 2026 $775m secured facility; August 2026 $5.75bn converts with $800m exchange. The secured facility preceding the ATM is the common inversion.",
   "source": "Module 12 note, 15 September 2026; Nebius 2025 Form 20-F, 30 April 2026; Nebius press releases, 17 July and 24 August 2026 (P-006)",
   "as_of": "2026-08-24",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "financing",
   "steps": [
    "June 2025: $1.0bn convertible notes (2029, 2031)",
    "September 2025: $3.16bn convertible notes plus $1.15bn equity offering",
    "March 2026: $2bn NVIDIA pre-funded warrant and $4.34bn convertible notes (2031, 2033)",
    "Q2 2026: ATM issuance of $2.8bn",
    "July 2026: $775m senior secured facility at SOFR plus 2.50%",
    "August 2026: $5.75bn convertible notes (2030, 2034) with $800m exchange of 2029 and 2031 notes"
   ]
  },
  {
   "id": "m12-050",
   "type": "sequence",
   "stem": "Put the steps of the module's ARR guidance test in order.",
   "explanation": "Divide guidance by twelve for required December revenue; compare with the June run-rate implied by reported ARR; divide by ACV per MW for billing MW required; compare with connected power guidance and the acceptance lag; classify the gap as timing or demand. Comparing with connected power before deriving billing MW skips the decisive step.",
   "source": "Module 12 note, 15 September 2026; Nebius Q2 2026 shareholder letter, 12 August 2026 (P-008)",
   "as_of": "2026-08-12",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "ARR guidance test",
   "steps": [
    "Divide year-end ARR guidance by twelve for required December revenue",
    "Compare with the June run-rate implied by reported ARR",
    "Divide required December revenue by ACV per MW for billing MW required",
    "Compare billing MW with connected power guidance and the acceptance lag",
    "Classify the gap as timing or demand"
   ]
  },
  {
   "id": "m12-051",
   "type": "slot",
   "stem": "Complete the capacity ladder from site power to compute revenue by filling the two blanks.",
   "explanation": "IT load converts to racks (at kW per rack) before accelerators, and available GPU-hours convert to sold GPU-hours (at utilisation) before revenue. Revenue per IT MW is the final reconciliation rung after compute revenue, not a step within the ladder; PUE is the divisor between site and IT MW, not a rung.",
   "source": "Module 12 note, 15 September 2026 (S-002)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "revenue build",
   "nodes": [
    "Site power (MW at fence)",
    "IT load (IT MW)",
    null,
    "Accelerators",
    "Available GPU-hours",
    null,
    "Compute revenue"
   ],
   "layout": "flow",
   "choices": [
    "Racks",
    "Sold GPU-hours",
    "Revenue per IT MW",
    "PUE",
    "Contracted power",
    "Depreciation"
   ],
   "correct": [
    "Racks",
    "Sold GPU-hours"
   ]
  },
  {
   "id": "m12-052",
   "type": "slot",
   "stem": "Complete the capex per IT MW stack for the revised reference case ($51.1m per MW) by filling the blank.",
   "explanation": "The stack is racks $35.7m, networking and storage $3.0m, mechanical and electrical $9.4m, land and shell $3.0m. IT support and warranty ($89.3m) and power ($70.5m) are annual opex lines, and capitalised interest ($28.0m) is a 2025 group figure, so none belongs in the per-MW capex stack.",
   "source": "Module 12 note, 15 September 2026 (S-003, F-064)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "capex per MW",
   "nodes": [
    "GB300 NVL72 racks $35.7m",
    "Networking, storage and other IT $3.0m",
    null,
    "Land, shell and core $3.0m"
   ],
   "layout": "stack",
   "choices": [
    "Mechanical and electrical (liquid-cooled) $9.4m",
    "Capitalised interest $28.0m",
    "IT support and warranty $89.3m",
    "Power $70.5m"
   ],
   "correct": [
    "Mechanical and electrical (liquid-cooled) $9.4m"
   ]
  },
  {
   "id": "m12-053",
   "type": "slot",
   "stem": "Complete the six-layer delivery-model capital stack from the Q2 2026 shareholder letter by filling the two blanks.",
   "explanation": "The layers run go-to-market, service and software, cloud platform, hardware, power, land and facility. Under colocation the partner holds power and facility; under partnership the partner also holds hardware. Networking and storage is a capex component within hardware, and the colocation fee and prepayments are not layers.",
   "source": "Module 12 note, 15 September 2026; Nebius Q2 2026 shareholder letter, 12 August 2026 (S-004)",
   "as_of": "2026-08-12",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "delivery models",
   "nodes": [
    "Go-to-market",
    "Service and software",
    null,
    "Hardware",
    null,
    "Land and facility"
   ],
   "layout": "stack",
   "choices": [
    "Cloud platform",
    "Power",
    "Networking and storage",
    "Colocation fee",
    "Customer prepayments",
    "Working capital"
   ],
   "correct": [
    "Cloud platform",
    "Power"
   ]
  },
  {
   "id": "m12-054",
   "type": "match",
   "stem": "Match each metric to its formula.",
   "explanation": "ARR annualises the last month; ACV per MW divides annual revenue by IT MW excluding prepayment; OCF before prepayments strips the deferred revenue movement; tranche depreciation is vintage capex less residual over vintage life; energy cost is IT MW x PUE x hours x load factor x tariff. Confusing ARR with ACV per MW is the common error.",
   "source": "Module 12 note, 15 September 2026 (M-007, M-006, M-015, M-014, M-009)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "formulas",
   "pairs": [
    [
     "ARR",
     "Last month's AI cloud revenue multiplied by twelve"
    ],
    [
     "Annual contract value per MW",
     "Annual revenue divided by IT MW, excluding prepayment"
    ],
    [
     "Operating cash flow before prepayments",
     "Reported OCF less the change in deferred revenue"
    ],
    [
     "Tranche depreciation",
     "Vintage capex less residual, divided by vintage life"
    ],
    [
     "Energy cost",
     "IT MW x PUE x 8,760 x load factor x tariff"
    ]
   ]
  },
  {
   "id": "m12-055",
   "type": "match",
   "stem": "Match each glossary term to the UK or EU usage the module records for it.",
   "explanation": "Active power is 'live IT load' to UK and EU operators; acceptance is 'ready for service' in UK colocation; assets not yet in use are 'assets under construction'; behind-the-meter generation is 'private wire' in the UK; the IFRS equivalent of ASC 835-20 capitalised interest is IAS 23.",
   "source": "Module 12 note, 15 September 2026 (G-001, G-002, G-011, G-012, G-017)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "terminology",
   "pairs": [
    [
     "Active power",
     "Live IT load"
    ],
    [
     "Acceptance",
     "Ready for service"
    ],
    [
     "Assets not yet in use",
     "Assets under construction"
    ],
    [
     "Behind-the-meter generation",
     "Private wire"
    ],
    [
     "Capitalised interest",
     "IAS 23"
    ]
   ]
  },
  {
   "id": "m12-056",
   "type": "match",
   "stem": "Match each rung of the reference-case capacity ladder to its value.",
   "explanation": "714 racks at 140 kW fill 100 MW IT; 72 GPUs per rack give 51,400 accelerators; 8,760 hours give 450.3m available GPU-hours; 70% utilisation gives 315.2m sold; $1,891m over 100 MW is $18.9m per MW-year. Swapping available and sold GPU-hours is the common error.",
   "source": "Module 12 note, 15 September 2026 (M-002, M-003, M-004, M-006, S-002)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "reference case",
   "pairs": [
    [
     "Racks",
     "714"
    ],
    [
     "Accelerators",
     "51,400"
    ],
    [
     "Available GPU-hours",
     "450.3m"
    ],
    [
     "Sold GPU-hours",
     "315.2m"
    ],
    [
     "Revenue per IT MW",
     "$18.9m per MW-year"
    ]
   ]
  },
  {
   "id": "m12-057",
   "type": "classify",
   "stem": "Classify the following statement as the module treats it.",
   "explanation": "The deal-yield figures come from the Q2 2026 shareholder letter without independent verification, so the module records them as a company claim, not a primary-source fact. It is not an analytical interpretation: the module's own $6.35 per GPU-hour conversion is the interpretation built on top of it.",
   "source": "Module 12 note, 15 September 2026; Nebius Q2 2026 shareholder letter, 12 August 2026 (F-026)",
   "as_of": "2026-08-12",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "classification",
   "statement": "Q2 2026 deals averaged more than $20m of annual contract value per MW, against a 2026 base of $12m per MW, as reported at 12 August 2026.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 2
  },
  {
   "id": "m12-058",
   "type": "classify",
   "stem": "Classify the following statement as the module treats it.",
   "explanation": "The deferred revenue balance is balance-sheet data from the Q2 2026 results, so it is a fact. The neighbouring statement that Nebius expects over $9bn of customer prepayments in 2026 is the company claim; the register pairs the two precisely to separate audited-basis data from management guidance.",
   "source": "Module 12 note, 15 September 2026; Nebius Q2 2026 results (6-K), 12 August 2026 (D-016, F-045)",
   "as_of": "2026-06-30",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "classification",
   "statement": "Deferred revenue (current plus non-current) was $5,975m at 30 June 2026.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 0
  },
  {
   "id": "m12-059",
   "type": "classify",
   "stem": "Classify the following statement as the module treats it.",
   "explanation": "The module states that the UK entity's statutory framework is an assumption (FRS 101 or FRS 102, both IFRS 16-based); it has not been verified from filings. It is not a fact, and it is not a company claim because Nebius has not stated it.",
   "source": "Module 12 note, 15 September 2026 (F-004)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "classification",
   "statement": "Nebius UK Ltd reports under FRS 101 or FRS 102, so its statutory accounts split a colocation lease into depreciation and interest.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 1
  },
  {
   "id": "m12-060",
   "type": "classify",
   "stem": "Classify the following statement about a Microsoft or Meta tranche.",
   "explanation": "Cash prepayment in hand is narrative comfort: it carries an implicit financing cost and an unwound liability, and does not by itself secure future revenue. The structural protection is the enforceable take-or-pay obligation on the accepted tranche, with defined service credits and termination rights.",
   "source": "Module 12 note, 15 September 2026 (D-007)",
   "as_of": "2026-09-15",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "classification",
   "statement": "The customer prepayment received at signing secures the tranche's future revenue.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 1
  }
 ],
 "glossary": [
  {
   "term": "Active power",
   "aliases": [
    "Live IT load",
    "revenue-generating MW"
   ],
   "definition": "Power drawn by installed, operational IT that can generate revenue",
   "relevance": "The undisclosed third power metric; the one revenue depends on. US usage; UK and EU operators say 'live IT load'",
   "priority": "red",
   "module": 12,
   "variants": {
    "UK": "Live IT load",
    "EU": "Live IT load",
    "US": "Active power"
   }
  },
  {
   "term": "Acceptance",
   "aliases": [
    "RFS",
    "tranche delivery",
    "go-live"
   ],
   "definition": "Contractual sign-off that a tranche is deployed and available, triggering billing",
   "relevance": "Microsoft and Meta tranches bill from acceptance, not energisation. UK colocation says 'ready for service'",
   "priority": "red",
   "module": 12,
   "variants": {
    "UK": "Ready for service",
    "EU": "Acceptance",
    "US": "Acceptance"
   }
  },
  {
   "term": "Contract liability (deferred revenue)",
   "aliases": [
    "Deferred revenue",
    "DR",
    "unearned revenue",
    "customer advances"
   ],
   "definition": "Cash received before performance, released to revenue as service is delivered",
   "relevance": "$5,975m at 30 June 2026; the source of the operating cash flow inflation. ASC 606 'contract liability'; IFRS 15 same term; 'deferred income' in UK GAAP",
   "priority": "red",
   "module": 12,
   "variants": null
  },
  {
   "term": "Significant financing component",
   "aliases": [
    "SFC",
    "financing component",
    "prepayment gross-up"
   ],
   "definition": "Adjustment when payment and performance are more than a year apart; the prepayment is treated partly as a loan",
   "relevance": "Nebius books interest expense on customer advances. Same under ASC 606 and IFRS 15",
   "priority": "amber",
   "module": 12,
   "variants": null
  },
  {
   "term": "Remaining performance obligations (RPO)",
   "aliases": [
    "RPO",
    "backlog",
    "contracted not yet recognised"
   ],
   "definition": "Contracted revenue not yet recognised, including deferred revenue and unbilled backlog",
   "relevance": "$21.3bn at year-end 2025; whether the Meta backstop is in it is undisclosed. 'Order backlog' in EU usage; RPO is the SEC term",
   "priority": "amber",
   "module": 12,
   "variants": null
  },
  {
   "term": "Take-or-pay",
   "aliases": [
    "ToP",
    "committed capacity",
    "reserved instance"
   ],
   "definition": "Customer pays the contracted fee whether or not it uses the capacity",
   "relevance": "Microsoft and Meta pay 'irrespective of actual utilization'. Same term in project finance; 'reserved capacity' in cloud pricing",
   "priority": "red",
   "module": 12,
   "variants": null
  },
  {
   "term": "Capacity put",
   "aliases": [
    "Demand backstop",
    "unsold-capacity Order",
    "capacity backstop"
   ],
   "definition": "Right of the operator to require a counterparty to buy unsold capacity at a pre-agreed price",
   "relevance": "The characterisation of Meta's $15bn unsold-capacity Order. Project term; not used by Nebius, which calls it an 'arrangement'",
   "priority": "red",
   "module": 12,
   "variants": null
  },
  {
   "term": "Annual contract value per MW",
   "aliases": [
    "ACV per MW",
    "yield per MW",
    "revenue per MW"
   ],
   "definition": "Annualised revenue from a deal divided by the IT MW it consumes, on a revenue-recognition basis excluding prepayment",
   "relevance": "Nebius's deal-yield metric: $12m base, $20m-plus Q2, $40m to $50m short-term. Nebius-specific; CoreWeave discloses backlog, not yield per MW",
   "priority": "red",
   "module": 12,
   "variants": null
  },
  {
   "term": "ARR",
   "aliases": [
    "Annualised run-rate revenue",
    "run-rate",
    "exit rate"
   ],
   "definition": "Last month's revenue multiplied by twelve",
   "relevance": "$3.0bn at June 2026; $7bn to $9bn year-end guidance. Same in all markets; definition varies by company",
   "priority": "red",
   "module": 12,
   "variants": null
  },
  {
   "term": "Vintage",
   "aliases": [
    "Tranche",
    "cohort",
    "generation (loosely)"
   ],
   "definition": "A cohort of hardware bought and energised together, carried with its own price, utilisation, life and residual",
   "relevance": "Basis of tranche depreciation and price ramps. Project-finance 'phase'; accounting 'asset class'",
   "priority": "red",
   "module": 12,
   "variants": null
  },
  {
   "term": "Assets not yet in use",
   "aliases": [
    "AUC",
    "CIP",
    "construction in progress"
   ],
   "definition": "Capitalised cost of equipment, construction in progress and vendor prepayments not yet placed in service",
   "relevance": "$2,417m at year-end 2025; depreciation starts on placed-in-service date. 'Assets under construction' in UK and EU accounts",
   "priority": "amber",
   "module": 12,
   "variants": {
    "UK": "Assets under construction",
    "EU": "Assets under construction",
    "US": "Assets not yet in use"
   }
  },
  {
   "term": "Capitalised interest",
   "aliases": [
    "IDC",
    "interest during construction",
    "ASC 835-20 interest"
   ],
   "definition": "Borrowing cost added to the cost of an asset under construction rather than expensed",
   "relevance": "ASC 835-20; $28.0m in 2025; source of construction-period circularity. Governed by IAS 23 in UK and EU",
   "priority": "amber",
   "module": 12,
   "variants": null
  },
  {
   "term": "Operating lease (ASC 842)",
   "aliases": [
    "ROU lease",
    "single-line lease cost"
   ],
   "definition": "Lease recognised on balance sheet with a single straight-line cost in operating expense",
   "relevance": "Colocation leases sit in cost of revenue; no EBITDA uplift. IFRS 16 has no operating-lease classification for lessees; all leases split into D&A and interest",
   "priority": "amber",
   "module": 12,
   "variants": null
  },
  {
   "term": "Placed-in-service date",
   "aliases": [
    "In-service date",
    "ready for intended use",
    "PIS"
   ],
   "definition": "Date an asset is ready for intended use; depreciation begins and interest capitalisation ends",
   "relevance": "Named as a critical audit matter in the 2025 20-F. 'Available for use' under IAS 16",
   "priority": "amber",
   "module": 12,
   "variants": {
    "UK": "Available for use",
    "EU": "Available for use",
    "US": "Placed-in-service date"
   }
  },
  {
   "term": "Residual value",
   "aliases": [
    "RV",
    "salvage",
    "terminal hardware value"
   ],
   "definition": "Expected proceeds at end of useful life",
   "relevance": "Hopper secondary market supports 60% to 80% at three years, with downside. 'Salvage value' in US usage",
   "priority": "amber",
   "module": 12,
   "variants": {
    "UK": "Residual value",
    "EU": "Residual value",
    "US": "Salvage value"
   }
  },
  {
   "term": "Load factor",
   "aliases": [
    "LF",
    "energy-to-utilisation elasticity"
   ],
   "definition": "Actual energy drawn as a share of nameplate at a given utilisation",
   "relevance": "Determines how far power cost falls with utilisation. Same term in UK and EU power",
   "priority": "green",
   "module": 12,
   "variants": null
  },
  {
   "term": "Behind-the-meter generation",
   "aliases": [
    "BTM",
    "on-site generation",
    "private wire"
   ],
   "definition": "On-site power not routed through the grid meter",
   "relevance": "Bloom fuel cells, 328 MW, first US deployment. 'Private wire' in UK usage",
   "priority": "amber",
   "module": 12,
   "variants": {
    "UK": "Private wire",
    "EU": "Behind-the-meter generation",
    "US": "Behind-the-meter generation"
   }
  },
  {
   "term": "Principal versus agent",
   "aliases": [
    "Gross versus net presentation"
   ],
   "definition": "Whether the reporting entity controls the service before transfer (gross revenue) or arranges it (net)",
   "relevance": "Determines partnership-model revenue presentation. Same under ASC 606 and IFRS 15",
   "priority": "green",
   "module": 12,
   "variants": null
  },
  {
   "term": "Refresh capex",
   "aliases": [
    "Technology refresh",
    "hardware replacement capex"
   ],
   "definition": "Replacement of the IT stack at end of economic life with a new vintage",
   "relevance": "Absent from a model with a single depreciation life. 'Technology refresh' in colocation contracts",
   "priority": "amber",
   "module": 12,
   "variants": null
  },
  {
   "term": "Tornado chart",
   "aliases": [
    "Sensitivity chart",
    "ranked sensitivity"
   ],
   "definition": "Ranked bar chart of a single output's sensitivity to each input",
   "relevance": "Section 6. Universal",
   "priority": "green",
   "module": 12,
   "variants": null
  }
 ]
});
