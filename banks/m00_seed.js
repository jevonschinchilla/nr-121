// NBIS seed bank. Module 0. Delete this file from the repository once the module banks are live.
// The object below is strict JSON (double quotes, no trailing commas) so that NBIS_validate.py can parse it.
window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
  "bank_version": "2026-09-15",
  "module": 0,
  "module_title": "Seed (delete when live)",
  "items": [
    {
      "id": "m00-001",
      "type": "mcq",
      "select": "one",
      "stem": "In the reference case as revised on 15 September 2026, what is the all-in capex per MW of IT load?",
      "options": ["$44m per MW", "$51m per MW", "$36m per MW", "$12m per MW"],
      "correct": [1],
      "explanation": "At $5.0m per GB300 NVL72 rack the reference site costs $5,110m for 100 MW, about $51m per IT MW. $44m was the previous spine at $4.0m per rack; $36m is the rack layer alone; $12m is the non-IT layer.",
      "source": "NBIS Module 12 note, 15 September 2026 (F-020)",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "reference case"
    },
    {
      "id": "m00-002",
      "type": "mcq",
      "select": "all",
      "stem": "Which of the following are inputs of the reference case as revised on 15 September 2026? Select all that apply.",
      "options": ["PUE of 1.15", "PUE of 1.25", "$4.0m per GB300 NVL72 rack", "70% utilisation", "$6.00 blended price per GPU-hour", "Four-year straight-line depreciation"],
      "correct": [0, 3, 4],
      "explanation": "The revised case keeps PUE 1.15, 70% utilisation and $6.00 per GPU-hour. The rack price moved from $4.0m to $5.0m on 15 September 2026, PUE 1.25 is a Module 6 gross-power example, and depreciation is five-year straight-line.",
      "source": "NBIS Module 12 note, 15 September 2026 (F-018, F-019)",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "reference case"
    },
    {
      "id": "m00-003",
      "type": "mcq",
      "select": "all_not",
      "stem": "Which of the following statements about the August 2026 convertible offering do NOT apply?",
      "options": ["It closed on 24 August 2026 in two series", "It totalled $4.50bn gross", "The 2034 notes carry a 4.50% coupon", "The 2030 notes carry a 2.625% coupon", "The initial purchasers' options were exercised in full"],
      "correct": [1, 3],
      "explanation": "The offering closed at $5.75bn gross ($3.45bn of 0.50% notes due 2030 and $2.3bn of 4.50% notes due 2034) with the purchasers' options exercised in full. $4.50bn was the 19 August proposal, and 2.625% belongs to the March 2026 notes due 2033.",
      "source": "Nebius press release, 24 August 2026 (F-005, F-007)",
      "as_of": "2026-08-24",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "financing"
    },
    {
      "id": "m00-004",
      "type": "mcq",
      "select": "one",
      "stem": "After assessing the Microsoft and Meta agreements against ASC 842, how did Nebius classify them?",
      "options": ["Service contracts under ASC 606", "Operating leases under ASC 842", "Finance leases under ASC 842", "Sales-type leases under ASC 842"],
      "correct": [0],
      "explanation": "The 2025 Form 20-F states that both agreements were tested against ASC 842 and classified as service contracts under ASC 606, not leases. Nebius reports under US GAAP, so revenue follows ASC 606 and leases ASC 842.",
      "source": "Nebius 2025 Form 20-F, 30 April 2026 (F-002)",
      "as_of": "2026-04-30",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "accounting"
    },
    {
      "id": "m00-005",
      "type": "recall",
      "stem": "Which ASC topic governs Nebius's revenue recognition under US GAAP?",
      "accept": ["ASC 606", "606", "Topic 606", "ASC Topic 606"],
      "fuzzy": true,
      "explanation": "Nebius Group N.V. prepares its consolidated financial statements under US GAAP, applying ASC 606 to revenue, ASC 842 to leases and ASC 835-20 to capitalised interest.",
      "source": "Nebius 2025 Form 20-F, 30 April 2026 (F-001)",
      "as_of": "2026-04-30",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "accounting"
    },
    {
      "id": "m00-006",
      "type": "recall",
      "stem": "The reference-case rack price of $5.0m, flagged as the weakest input in the model, applies to which rack configuration?",
      "accept": ["GB300 NVL72", "NVL72", "GB300", "NVIDIA GB300 NVL72"],
      "fuzzy": true,
      "explanation": "The reference case prices a GB300 NVL72 rack at $5.0m on August 2026 purchase-order evidence, within an unverified $3.5m to $6.5m range. Every dollar of rack price moves all-in capex by about $7.1m per MW.",
      "source": "NBIS Module 12 note, section 3.1, 15 September 2026 (F-019)",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "reference case"
    },
    {
      "id": "m00-007",
      "type": "recall",
      "stem": "State Nebius's 2026 capex guidance range as reaffirmed at Q2 2026, in $bn.",
      "accept": ["$20bn to $25bn", "20 to 25", "20 25", "20bn 25bn", "$20 to $25 billion", "20 billion to 25 billion", "USD 20bn to 25bn", "20bn to 25bn"],
      "fuzzy": true,
      "explanation": "Guidance is $20bn to $25bn for 2026, raised in May 2026 from $16bn to $20bn and reaffirmed at Q2 2026, with Q2 capex of about $5.7bn. The increase is stated to reflect investment in 2027 capacity.",
      "source": "Nebius Q2 2026 shareholder letter, 12 August 2026 (F-010)",
      "as_of": "2026-08-12",
      "time_sensitive": true,
      "difficulty": 2,
      "topic": "capex"
    },
    {
      "id": "m00-008",
      "type": "recall",
      "stem": "What coupon do the August 2026 convertible notes due 2034 carry?",
      "accept": ["4.50%", "4.5%", "4.5", "4.50", "4.5 percent", "4.5 per cent", "4.50 percent"],
      "fuzzy": false,
      "explanation": "The 2034 series carries 4.50%, against 0.50% on the 2030 series and 1.25% and 2.625% on the March 2026 notes. The step-up is read as the first hard evidence of Nebius's marginal unsecured cost of capital rising.",
      "source": "Nebius press release, 24 August 2026 (F-005, F-009)",
      "as_of": "2026-08-24",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "financing"
    },
    {
      "id": "m00-009",
      "type": "define",
      "stem": "Define connected power as Nebius uses the term, distinguishing it from the other two capacity states.",
      "model_answer": "Power connected into fully built and equipped data centres, as distinct from contracted power (land and power commitments) and active power (consumed by operational IT).",
      "rubric": {
        "must": [
          ["connected", "energised", "energized", "grid connected"],
          ["built and equipped", "fully built", "equipped data centre", "equipped data center", "built out", "constructed and equipped"]
        ],
        "should": [
          ["contracted"],
          ["active"],
          ["power"]
        ],
        "should_min": 1,
        "forbid": [
          ["revenue generating", "generating revenue", "available for revenue"]
        ]
      },
      "explanation": "Nebius defines contracted power as secured by land and power commitments, connected power as connected into fully built and equipped data centres, and active power as consumed by installed operational IT available for revenue. Describing connected power as revenue-generating confuses it with active power.",
      "source": "Nebius Q1 2026 shareholder letter, 13 May 2026 (F-016)",
      "as_of": "2026-05-13",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "capacity"
    },
    {
      "id": "m00-010",
      "type": "define",
      "stem": "Explain why PUE belongs on the capacity side of the driver tree at a power-constrained site.",
      "model_answer": "At a fixed fence power, PUE divides site power into sellable IT megawatts, so a higher PUE reduces capacity and revenue rather than only adding power cost.",
      "rubric": {
        "must": [
          ["divides", "converts", "reduces", "determines", "limits"],
          ["it mw", "it megawatts", "it load", "sellable capacity", "sellable it", "it capacity"]
        ],
        "should": [
          ["fence power", "site power", "fixed power", "power constrained", "power constraint", "grid connection"],
          ["revenue"],
          ["cost"]
        ],
        "should_min": 1,
        "forbid": []
      },
      "explanation": "At a power-constrained site the fence power is fixed, so PUE determines how many IT megawatts can be sold; its EBITDA sensitivity lives there. Modelled only as a cost driver it would move EBITDA by under $10m and rank last in the tornado.",
      "source": "NBIS Module 12 note, sections 1 and 6.1, 15 September 2026",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "drivers"
    },
    {
      "id": "m00-011",
      "type": "define",
      "stem": "Define take-or-pay as it applies to Nebius's committed capacity contracts.",
      "model_answer": "The customer pays the contracted fee irrespective of actual utilisation of the GPU capacity, so billing utilisation is 100% of contracted GPU-hours regardless of operational load.",
      "rubric": {
        "must": [
          ["irrespective of utilisation", "irrespective of utilization", "irrespective of actual utilisation", "irrespective of actual utilization", "regardless of use", "regardless of utilisation", "regardless of utilization", "whether or not used", "irrespective of use", "regardless of usage"],
          ["pays", "billed", "fee", "payment", "pay"]
        ],
        "should": [
          ["contracted"],
          ["100%", "full", "100 percent", "100 per cent"],
          ["gpu"]
        ],
        "should_min": 1,
        "forbid": [
          ["on demand"]
        ]
      },
      "explanation": "The 20-F states that Microsoft and Meta pay contracted fees irrespective of actual utilisation of the GPU capacity. For that population the model's utilisation input is billing utilisation; operational utilisation matters for power cost, not revenue. On-demand capacity is the opposite case.",
      "source": "Nebius 2025 Form 20-F, 30 April 2026; NBIS Module 12 note, section 2.3",
      "as_of": "2026-04-30",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "contracts"
    },
    {
      "id": "m00-012",
      "type": "numeric",
      "stem": "Reference case: 51,400 GPUs, 8,760 hours per year, 70% utilisation and a $6.00 blended price per GPU-hour. What is annual compute revenue?",
      "value": 1891,
      "tolerance_pct": 3,
      "unit": "$m",
      "working": "51,400 x 8,760 x 70% x $6.00 = $1,891m (about $18.9m per IT MW per year).",
      "explanation": "Sold GPU-hours are accelerators times hours times utilisation; revenue is sold GPU-hours times the blended rate. The result is unchanged by the rack-price revision, which is why rack price does not touch site EBITDA.",
      "source": "NBIS Module 12 note, 15 September 2026 (F-021, F-022)",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "reference case"
    },
    {
      "id": "m00-013",
      "type": "numeric",
      "stem": "Reference case: 100 MW of IT load at PUE 1.15, running 8,760 hours at full load, at $70 per MWh. What is the annual energy cost?",
      "value": 70.5,
      "tolerance_pct": 3,
      "unit": "$m",
      "working": "100 MW x 1.15 x 8,760 h x $70/MWh = $70.5m.",
      "explanation": "Energy cost is IT load times PUE times hours times tariff. The full-load assumption is deliberately conservative: a 50% energy-to-utilisation elasticity at 70% utilisation would save about $11m. Capacity and network charges are separate lines.",
      "source": "NBIS Module 12 note, section 4.2, 15 September 2026",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "opex"
    },
    {
      "id": "m00-014",
      "type": "numeric",
      "stem": "Reference case: facility opex of $15 per kW-month applied to 100 MW of IT load. What is annual facility opex?",
      "value": 18,
      "tolerance_pct": 3,
      "unit": "$m",
      "working": "$15 x 100,000 kW x 12 months = $18m.",
      "explanation": "Facility opex is quoted per kW of IT load per month, so the annual figure is the rate times IT kilowatts times twelve. It is one of the five site cash opex lines, which total about $218m against $1,891m of revenue.",
      "source": "Project handbook reference case; NBIS Module 12 note, section 4.1, 15 September 2026",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "opex"
    },
    {
      "id": "m00-015",
      "type": "numeric",
      "stem": "Reference case: approximately 714 GB300 NVL72 racks at $5.0m per rack. What is IT rack capex?",
      "value": 3570,
      "tolerance_pct": 3,
      "unit": "$m",
      "working": "714 x $5.0m = $3,570m, or $35.7m per IT MW.",
      "explanation": "Rack capex is rack count times rack price. At $5.0m per rack the rack layer is $35.7m per MW and, with $3.0m of networking and storage, IT is 76% of the $51.1m all-in figure. At the previous $4.0m the rack layer was $28.6m per MW.",
      "source": "NBIS Module 12 note, 15 September 2026 (F-020)",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "capex"
    },
    {
      "id": "m00-016",
      "type": "sequence",
      "stem": "Put the steps of building the GPU-hour revenue line in order, from site power to compute revenue.",
      "steps": [
        "Site MW divided by PUE gives IT MW",
        "IT kW divided by kW per rack gives racks",
        "Racks times GPUs per rack gives accelerators",
        "Accelerators times 8,760 times uptime gives available GPU-hours",
        "Available GPU-hours times utilisation gives sold GPU-hours",
        "Sold GPU-hours times rate by vintage gives compute revenue"
      ],
      "explanation": "The capacity ladder runs site power, IT load, racks, accelerators, available GPU-hours, sold GPU-hours, compute revenue. Each rung has a stated unit and denominator; the reviewer's first check is that no rung is skipped or double-counted.",
      "source": "NBIS Module 12 note, section 2.1 (P-007, S-002), 15 September 2026",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "drivers"
    },
    {
      "id": "m00-017",
      "type": "sequence",
      "stem": "Put Nebius's 2025 to 2026 financing events in chronological order.",
      "steps": [
        "$1.0bn convertible notes due 2029 and 2031",
        "$3.16bn convertible notes plus $1.15bn equity offering",
        "$2bn NVIDIA pre-funded warrant and $4.34bn convertible notes",
        "$775m senior secured facility at SOFR plus 2.50%",
        "$5.75bn convertible notes due 2030 and 2034"
      ],
      "explanation": "June 2025 notes; September 2025 notes plus equity; March 2026 NVIDIA warrant and notes; July 2026 secured facility; August 2026 notes with an $800m exchange of 2029 and 2031 notes. The ATM programme ran through Q2 2026 alongside these.",
      "source": "Nebius 2025 Form 20-F; press releases 17 July and 24 August 2026 (P-006)",
      "as_of": "2026-08-24",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "financing"
    },
    {
      "id": "m00-018",
      "type": "slot",
      "stem": "Complete the capex per IT MW stack for the revised reference case ($51.1m in total).",
      "nodes": ["GB300 NVL72 racks $35.7m", null, "Mechanical and electrical (liquid-cooled) $9.4m", null],
      "layout": "stack",
      "choices": ["Networking, storage and other IT $3.0m", "Land, shell and core $3.0m", "Software and go-to-market $2.0m", "Contingency $0.9m", "Power deposits $1.5m"],
      "correct": ["Networking, storage and other IT $3.0m", "Land, shell and core $3.0m"],
      "explanation": "The stack is racks $35.7m, networking and storage $3.0m, mechanical and electrical $9.4m, land, shell and core $3.0m. IT layers (76%) sit on five-year lives and the non-IT layers on ten to twenty-year lives; the rack price alone is 70% of the total.",
      "source": "NBIS Module 12 note, Figure 4 (S-003), 15 September 2026",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "capex"
    },
    {
      "id": "m00-019",
      "type": "slot",
      "stem": "Complete the capacity ladder from site power to compute revenue.",
      "nodes": ["Site power (MW at fence)", "IT load (IT MW)", null, "Accelerators", "Available GPU-hours", null, "Compute revenue"],
      "layout": "flow",
      "choices": ["Racks", "Sold GPU-hours", "Connected MW", "Billed GPU-months", "Contracted power"],
      "correct": ["Racks", "Sold GPU-hours"],
      "explanation": "The ladder is site power, IT load, racks, accelerators, available GPU-hours, sold GPU-hours, compute revenue, then revenue per IT MW. Connected and contracted power are capacity states, not rungs of the revenue ladder.",
      "source": "NBIS Module 12 note, section 2.1 (S-002), 15 September 2026",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "drivers"
    },
    {
      "id": "m00-020",
      "type": "match",
      "stem": "Match each convertible note series to its maturity.",
      "pairs": [["0.50% notes (August 2026)", "Due 2030"], ["4.50% notes (August 2026)", "Due 2034"], ["1.250% notes (March 2026)", "Due 2031"], ["2.625% notes (March 2026)", "Due 2033"]],
      "explanation": "The August 2026 offering comprised $3.45bn of 0.50% notes due 2030 and $2.3bn of 4.50% notes due 2034. The March 2026 notes were $2.25bn at 1.250% due 2031 and $1.75bn at 2.625% due 2033, increased to about $4.34bn by an option exercise.",
      "source": "Nebius press release, 24 August 2026; Nebius 2025 Form 20-F, 30 April 2026 (F-005, F-008)",
      "as_of": "2026-08-24",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "financing"
    },
    {
      "id": "m00-021",
      "type": "match",
      "stem": "Match each Nebius capacity state to its definition.",
      "pairs": [["Contracted power", "Secured by contracted land and power commitments"], ["Connected power", "Connected into fully built and equipped data centres"], ["Active power", "Consumed by installed operational IT available for revenue"]],
      "explanation": "The three states map to model start, energisation and ready-for-service. Active power is not disclosed by Nebius; the spread between contracted, connected and active is the execution-risk measure.",
      "source": "Nebius Q1 2026 shareholder letter, 13 May 2026 (F-016, F-017)",
      "as_of": "2026-05-13",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "capacity"
    },
    {
      "id": "m00-022",
      "type": "classify",
      "stem": "Classify the following statement from the Module 12 note.",
      "statement": "Q2 2026 deals averaged more than $20m of annual contract value per MW.",
      "categories": ["Fact", "Assumption", "Company claim", "Analytical interpretation"],
      "correct": 2,
      "explanation": "The figure comes from the Q2 2026 shareholder letter and is not independently verifiable, so the register classifies it as a company claim. The MW basis (IT versus gross) behind the disclosure is not stated, which is why it cannot be treated as a primary-source fact.",
      "source": "Nebius Q2 2026 shareholder letter, 12 August 2026 (F-026)",
      "as_of": "2026-08-12",
      "time_sensitive": true,
      "difficulty": 2,
      "topic": "classification"
    },
    {
      "id": "m00-023",
      "type": "classify",
      "stem": "Classify the following statement from the Module 12 note.",
      "statement": "The reference case prices a GB300 NVL72 rack at $5.0m.",
      "categories": ["Fact", "Assumption", "Company claim", "Analytical interpretation"],
      "correct": 1,
      "explanation": "The rack price is a modelling input chosen as the mid-range of unverified evidence ($3.5m to $6.5m), so it is an assumption, flagged red on the Assumptions sheet. It is neither a primary-source fact nor a Nebius disclosure.",
      "source": "NBIS Module 12 note, 15 September 2026 (F-019)",
      "as_of": "2026-09-15",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "classification"
    },
    {
      "id": "m00-024",
      "type": "classify",
      "stem": "Is the following a structural protection or narrative comfort?",
      "statement": "Under the Microsoft and Meta agreements, contracted fees are payable irrespective of actual utilisation of the GPU capacity, as disclosed in the 2025 Form 20-F.",
      "categories": ["Structural protection", "Narrative comfort"],
      "correct": 0,
      "explanation": "Take-or-pay billing is a contractual term disclosed in a filing and enforceable against the counterparty, so it is a structural protection. By contrast, a statement that capacity is sold out describes contracted allocation, not a binding cash obligation, and is narrative comfort.",
      "source": "Nebius 2025 Form 20-F, 30 April 2026; NBIS Module 12 note, section 2.3",
      "as_of": "2026-04-30",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "classification"
    }
  ],
  "glossary": [
    {
      "term": "PUE",
      "aliases": ["Power usage effectiveness", "power usage effectiveness ratio"],
      "definition": "Gross facility power divided by IT power; the conversion factor in every cost calculation.",
      "relevance": "Every $/MWh to $/MW-year translation; at a power-constrained site it divides fence power into sellable IT MW.",
      "priority": "red",
      "module": 0,
      "variants": null
    },
    {
      "term": "Take-or-pay",
      "aliases": ["take or pay", "committed capacity contract", "take-or-pay contract"],
      "definition": "A contract under which the customer pays the contracted fee irrespective of actual utilisation of the capacity.",
      "relevance": "The Microsoft and Meta agreements are billed irrespective of utilisation, per the 2025 Form 20-F.",
      "priority": "red",
      "module": 0,
      "variants": null
    },
    {
      "term": "Contracted power",
      "aliases": ["contracted MW", "contracted capacity"],
      "definition": "Power secured by contracted land and power commitments, before connection or IT installation.",
      "relevance": "Year-end 2026 target of 5 GW contracted against 800 MW to 1 GW connected.",
      "priority": "red",
      "module": 0,
      "variants": null
    },
    {
      "term": "Behind-the-meter generation",
      "aliases": ["BTM", "on-site generation", "behind the meter", "behind-the-meter"],
      "definition": "On-site power not routed through the grid meter.",
      "relevance": "The Bloom Energy fuel-cell agreement: 328 MW for the first US deployment, replacing planned reciprocating engines.",
      "priority": "amber",
      "module": 0,
      "variants": { "UK": "Private wire", "EU": "Behind-the-meter generation", "US": "Behind-the-meter generation" }
    },
    {
      "term": "Residual value",
      "aliases": ["RV", "terminal hardware value", "salvage value"],
      "definition": "The value of a hardware asset at the end of its accounting or economic life.",
      "relevance": "Drives depreciation adequacy and secured-lending collateral values; realised on the secondary market at refresh.",
      "priority": "amber",
      "module": 0,
      "variants": { "UK": "Residual value", "EU": "Residual value", "US": "Salvage value" }
    },
    {
      "term": "Tornado chart",
      "aliases": ["sensitivity chart", "ranked sensitivity chart", "tornado"],
      "definition": "A ranked bar chart of a single output's sensitivity to each input in turn.",
      "relevance": "Module 12 ranks the EBITDA and five-year NPV drivers with tornados; timing and revenue-side inputs dominate.",
      "priority": "green",
      "module": 0,
      "variants": null
    }
  ]
});
