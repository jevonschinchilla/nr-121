// NBIS bank: Module 6, Revenue models and the cost stack. Generated 16 September 2026.
window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
  "bank_version": "2026-09-16",
  "module": 6,
  "module_title": "Revenue models and the cost stack",
  "items": [
    {
      "id": "m06-001",
      "type": "mcq",
      "select": "one",
      "difficulty": 1,
      "topic": "depreciation",
      "stem": "As at January 2026, over how many years does Nebius depreciate server and network equipment?",
      "options": [
        "Three years",
        "Four years",
        "Five years",
        "Six years"
      ],
      "correct": [
        2
      ],
      "explanation": "Nebius extended the useful life of servers and network equipment from four to five years from 1 January 2026. Four years is the previous policy, not the current one; six years is the longest life used by peers such as CoreWeave, not by Nebius.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-001, F-115)",
      "as_of": "2026-01",
      "time_sensitive": true
    },
    {
      "id": "m06-002",
      "type": "mcq",
      "select": "one",
      "difficulty": 2,
      "topic": "revenue recognition",
      "stem": "Why did Nebius conclude that the Microsoft and Meta agreements are service contracts under ASC 606 rather than leases under ASC 842?",
      "options": [
        "Nebius operates the clusters and the customer does not obtain control of identified assets",
        "The contracts run for less than twelve months, so lease accounting is not required",
        "The customer pays a large proportion of the contract value upfront before any capacity is delivered",
        "GPU servers are movable equipment and movable equipment is excluded from ASC 842"
      ],
      "correct": [
        0
      ],
      "explanation": "A lease requires the customer to control identified assets and direct their use; Nebius retains operation of the clusters and delivers capacity as a service. Upfront payment is a cash-flow feature that has no bearing on classification, and the contracts run five years, not under twelve months.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-005, D-004)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-003",
      "type": "mcq",
      "select": "one",
      "difficulty": 1,
      "topic": "ARR",
      "stem": "How does Nebius define its headline ARR metric?",
      "options": [
        "Quarterly AI cloud revenue multiplied by four",
        "AI cloud revenue in the last month of the quarter multiplied by twelve",
        "Contracted recurring revenue from signed customer agreements over the next twelve months",
        "Trailing twelve months of AI cloud revenue"
      ],
      "correct": [
        1
      ],
      "explanation": "Nebius annualises the final month of the quarter's AI cloud revenue, a point-in-time figure that embeds the ramp of recently delivered tranches. Contracted recurring revenue is the SaaS definition, which Nebius does not use, so the two are not comparable without checking definitions.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (F-046, M-001)",
      "as_of": "2026-08",
      "time_sensitive": false
    },
    {
      "id": "m06-004",
      "type": "mcq",
      "select": "one",
      "difficulty": 1,
      "topic": "Microsoft contract",
      "stem": "As at 31 December 2025, what were the estimated committed fees under the Microsoft agreement through October 2031?",
      "options": [
        "Up to $2,880.7 million",
        "Up to $6,958.1 million",
        "Up to $12 billion",
        "Up to $17,392.9 million",
        "Up to $27 billion in total"
      ],
      "correct": [
        3
      ],
      "explanation": "The 20-F estimates Microsoft committed fees at up to $17,392.9 million through October 2031, payable irrespective of utilisation. $6,958.1 million is the upfront component only; $2,880.7 million is the 2025 Meta agreement; $12 billion and $27 billion belong to the 2026 Meta agreement.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-023)",
      "as_of": "2025-12-31",
      "time_sensitive": true
    },
    {
      "id": "m06-005",
      "type": "mcq",
      "select": "one",
      "difficulty": 3,
      "topic": "Meta 2026 agreement",
      "stem": "As at March 2026, why does treating the full $27 billion of the 2026 Meta agreement as firm backlog overstate the committed component?",
      "options": [
        "The $15 billion part-two figure is a ceiling reached only if Nebius sells none of the capacity to third parties",
        "The $12 billion part-one figure is conditional on Meta exercising an option to add capacity at each tranche delivery date",
        "The agreement is denominated in euros and the dollar figures are translated estimates",
        "The $27 billion includes the 2025 Meta agreement, which was already in RPO"
      ],
      "correct": [
        0
      ],
      "explanation": "Part two obliges Meta to buy only what Nebius fails to sell to third parties, so its $15 billion is a maximum; the firm element is $12 billion plus whatever the backstop absorbs. Part one is a conventional take-or-pay order, not an option, and the 2025 agreement is separate.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-036, F-040)",
      "as_of": "2026-03",
      "time_sensitive": true
    },
    {
      "id": "m06-006",
      "type": "mcq",
      "select": "one",
      "difficulty": 2,
      "topic": "cost of revenue",
      "stem": "Nebius reported cost of revenue at 23 per cent of Q2 2026 revenue. Why is 77 per cent not a meaningful gross margin?",
      "options": [
        "Because cost of revenue includes share-based compensation, which is not a cash cost and should be added back",
        "Because the ratio is stated before customer prepayments are deducted",
        "Because depreciation and amortisation is presented on a separate line below cost of revenue",
        "Because Token Factory revenue is excluded from the denominator"
      ],
      "correct": [
        2
      ],
      "explanation": "Nebius presents D&A (45 per cent of Q2 revenue) on its own line, so cost of revenue excludes the largest economic cost of delivery, the consumption of the GPU fleet. Share-based compensation sits in operating expenses, not cost of revenue, and prepayments affect the balance sheet, not this ratio.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (F-053, D-010)",
      "as_of": "2026-06-30",
      "time_sensitive": false
    },
    {
      "id": "m06-007",
      "type": "mcq",
      "select": "one",
      "difficulty": 1,
      "topic": "financing",
      "stem": "In July 2026 Nebius completed its first secured debt financing. What were the size and pricing?",
      "options": [
        "$500 million at SOFR plus 3.00 per cent",
        "$775 million at SOFR plus 2.50 per cent",
        "$1,000 million at SOFR plus 2.00 per cent",
        "$2,000 million at SOFR plus 2.50 per cent"
      ],
      "correct": [
        1
      ],
      "explanation": "The July 2026 facility was $775 million at SOFR plus 2.50 per cent, backed by deployed GPU infrastructure and contracted cash flows from an investment-grade customer. $2,000 million is the size of the NVIDIA pre-funded warrant, an equity instrument, not this debt facility.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius press release, 17 July 2026; Nebius Q2 2026 shareholder letter (August 2026) (F-071, F-072)",
      "as_of": "2026-07",
      "time_sensitive": true
    },
    {
      "id": "m06-008",
      "type": "mcq",
      "select": "one",
      "difficulty": 2,
      "topic": "revenue recognition",
      "stem": "When a customer prepayment precedes delivery by more than a year, what is the income statement effect of the significant financing component?",
      "options": [
        "Revenue is reduced by the imputed interest and no interest expense is recognised in the income statement",
        "The prepayment is reclassified from deferred revenue to debt with no P&L effect",
        "Interest income is recognised on the advance, offset by lower revenue",
        "Interest expense accrues on the advance with a corresponding uplift to recognised revenue"
      ],
      "correct": [
        3
      ],
      "explanation": "Under ASC 606 the advance is treated as customer financing: Nebius accrues interest expense at an implicit borrowing rate and recognises correspondingly more revenue, grossing up both lines. The prepayment is not debt and the effect on revenue is an increase, not a reduction.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-014, P-004)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-009",
      "type": "mcq",
      "select": "one",
      "difficulty": 2,
      "topic": "utilisation",
      "stem": "Which statement correctly describes model FLOPs utilisation (MFU) as distinct from commercial utilisation?",
      "options": [
        "MFU measures the customer's compute efficiency inside GPU-hours it has already paid for",
        "MFU is the share of deployed GPU-hours that the provider has billed",
        "MFU is the provider's revenue per GPU-hour across all contract types, committed and on-demand",
        "MFU is the share of fleet capacity covered by take-or-pay contracts"
      ],
      "correct": [
        0
      ],
      "explanation": "MFU is customer-side efficiency: it affects the customer's cost per useful FLOP and willingness to pay, not the provider's revenue directly. The billed share of deployed GPU-hours is commercial (sold-hours) utilisation, which is the metric that drives provider revenue.",
      "source": "Module 6 note, compiled 15 September 2026 (D-008, M-020)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-010",
      "type": "mcq",
      "select": "one",
      "difficulty": 1,
      "topic": "asset-light",
      "stem": "Under the asset-light infrastructure partnership model announced on 15 July 2026, through which mechanisms does Nebius earn revenue?",
      "options": [
        "Colocation fees per kW per month charged to the partner for the space and power Nebius supplies",
        "Sale of GPU hardware to the partner at a margin",
        "Revenue-sharing, licensing fees, commissions or committed capacity that Nebius resells",
        "Interest on construction loans advanced to the partner"
      ],
      "correct": [
        2
      ],
      "explanation": "The partner finances, owns and operates the facility and hardware; Nebius supplies architecture, the software stack and demand, and takes a share through revenue-sharing, licensing, commissions or resold committed capacity. Nebius does not sell hardware or charge colocation fees under this model.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius press release, 15 July 2026 (F-073, F-075)",
      "as_of": "2026-07-15",
      "time_sensitive": false
    },
    {
      "id": "m06-011",
      "type": "mcq",
      "select": "one",
      "difficulty": 2,
      "topic": "price decay",
      "stem": "As at July 2026, what characterises the second phase of the H100 rental price path from late 2025 into 2026?",
      "options": [
        "A structural collapse as Blackwell supply replaced Hopper demand",
        "A cyclical firming in which committed-capacity pricing rose while headline on-demand stayed soft",
        "A return to 2023 scarcity pricing of around $8 per hour",
        "A convergence of marketplace and hyperscaler on-demand prices at a single clearing level of around $4 per hour"
      ],
      "correct": [
        1
      ],
      "explanation": "GPUSmith reports the committed segment moving upward between October 2025 and March 2026 even as headline on-demand stayed soft; the note classifies this as cyclical firming on ageing hardware. Phase one, 2023 to mid-2025, was the structural decay; prices did not return to $8.",
      "source": "Module 6 note, compiled 15 September 2026; GPUSmith, July 2026 (F-094, D-012)",
      "as_of": "2026-07",
      "time_sensitive": true
    },
    {
      "id": "m06-012",
      "type": "mcq",
      "select": "one",
      "difficulty": 1,
      "topic": "RPO",
      "stem": "As at 31 December 2025, what share of Nebius's remaining performance obligations was expected to be recognised in the 24 months to December 2027?",
      "options": [
        "61 per cent",
        "45 per cent",
        "39 per cent",
        "28 per cent"
      ],
      "correct": [
        3
      ],
      "explanation": "The 20-F discloses 28 per cent of RPO within the first 24 months and 39 per cent in months 25 to 48, with the remainder thereafter. 39 per cent is the second band, not the first; 45 per cent is the Q2 2026 D&A ratio, an unrelated figure.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-017, S-010)",
      "as_of": "2025-12-31",
      "time_sensitive": true
    },
    {
      "id": "m06-013",
      "type": "mcq",
      "select": "one",
      "difficulty": 3,
      "topic": "Microsoft contract",
      "stem": "Why does the note describe the five-year tranche terms of the Microsoft agreement as contract terms that amortise the asset?",
      "options": [
        "The five-year service term broadly matches Nebius's five-year depreciation life for GPU hardware",
        "Microsoft pays the full contract value upfront, so the asset is paid for at delivery",
        "The agreement obliges Microsoft to buy the hardware at the end of the term",
        "The contract term is shorter than the depreciation life, so the asset is recovered before it is fully depreciated"
      ],
      "correct": [
        0
      ],
      "explanation": "A five-year take-or-pay revenue stream set against a five-year straight-line depreciation life means contracted revenue covers the asset over its accounting life. Only about 40 per cent of the value arrives upfront, and there is no hardware purchase obligation at term end.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-116, F-001)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-014",
      "type": "mcq",
      "select": "one",
      "difficulty": 3,
      "topic": "pricing",
      "stem": "As at 17 August 2026, Nebius listed H100 at $3.85 per GPU-hour on demand and $2.15 preemptible. Approximately what discount does the preemptible price represent?",
      "options": [
        "About 25 per cent",
        "About 35 per cent",
        "About 45 per cent",
        "About 55 per cent",
        "About 65 per cent"
      ],
      "correct": [
        2
      ],
      "explanation": "1 minus 2.15 divided by 3.85 is 0.44, so the preemptible discount is about 44 to 45 per cent; the same ratio holds for H200 and B200 on the Nebius list. 35 per cent is the maximum commitment discount cited by ComputePrices, a different mechanism.",
      "source": "Module 6 note, compiled 15 September 2026; nebius.com/prices, retrieved 17 August 2026 (F-079, M-021)",
      "as_of": "2026-08-17",
      "time_sensitive": true
    },
    {
      "id": "m06-015",
      "type": "mcq",
      "select": "all",
      "difficulty": 2,
      "topic": "cost of revenue",
      "stem": "Which of the following are included in Nebius's reported cost of revenues? Select all that apply.",
      "options": [
        "Colocation of data centre facilities",
        "Depreciation of servers and network equipment",
        "Electricity, utilities and maintenance",
        "Personnel costs",
        "Share-based compensation for engineers",
        "Product development expense"
      ],
      "correct": [
        0,
        2,
        3
      ],
      "explanation": "The 20-F lists colocation, electricity, utilities and maintenance, personnel and payment processing as the main components of cost of revenues. Depreciation is presented on a separate line, which is why the ratio understates the full cost of delivery; product development and its share-based compensation are operating expenses.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-018, F-053)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-016",
      "type": "mcq",
      "select": "all",
      "difficulty": 1,
      "topic": "revenue lines",
      "stem": "Which of the following are revenue lines of the Nebius AI cloud? Select all that apply.",
      "options": [
        "Wholesale leasing of conditioned space and power at dollars per kW per month",
        "Multi-year committed take-or-pay contracts",
        "Reserved and on-demand GPU-hours",
        "Per-token inference through Token Factory",
        "Sale of GPU servers to enterprise customers",
        "Infrastructure partnership take-rate revenue"
      ],
      "correct": [
        1,
        2,
        3,
        5
      ],
      "explanation": "Nebius earns AI cloud revenue from committed contracts, reserved and on-demand GPU-hours, per-token inference and managed services, plus the partnership take rate introduced in July 2026. Leasing space and power per kW is the landlord model, not the GPU cloud; Nebius does not sell servers.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026); Nebius press release, 15 July 2026 (S-004, D-001)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-017",
      "type": "mcq",
      "select": "all",
      "difficulty": 2,
      "topic": "Microsoft contract",
      "stem": "Which of the following are features of the Microsoft agreement effective 7 September 2025? Select all that apply.",
      "options": [
        "Meta acts as purchaser of last resort for unsold capacity",
        "Dedicated GPU capacity at Vineland, New Jersey over a five-year term",
        "Fees payable only on metered usage billed monthly in arrears",
        "Deployment in nine tranches during 2025 and 2026",
        "Rights to service credits or termination of individual tranches on delivery delays or availability failures",
        "Deployment in two tranches in December 2025 and February 2026"
      ],
      "correct": [
        1,
        3,
        4
      ],
      "explanation": "The Microsoft agreement covers Vineland capacity over five years in nine tranches, with per-tranche service credits and termination rights. Fees are take-or-pay, payable irrespective of utilisation, not usage-based; two tranches and the purchaser-of-last-resort backstop belong to the Meta agreements.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-021, F-022, F-026)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-018",
      "type": "mcq",
      "select": "all",
      "difficulty": 2,
      "topic": "utilisation",
      "stem": "On a fleet fully contracted under take-or-pay terms, which risks remain with Nebius? Select all that apply.",
      "options": [
        "Demand risk on unsold GPU-hours",
        "Delivery execution against dated tranche obligations",
        "SLA performance and availability",
        "Counterparty concentration",
        "Price decay on the contracted fleet during the term"
      ],
      "correct": [
        1,
        2,
        3
      ],
      "explanation": "Take-or-pay makes commercial utilisation 100 per cent by construction, so demand risk and in-term price decay are borne by the customer. What remains is delivery against tranche dates, SLA availability (credits then termination rights) and the concentration of the backlog in two counterparties.",
      "source": "Module 6 note, compiled 15 September 2026 (F-112)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-019",
      "type": "mcq",
      "select": "all",
      "difficulty": 2,
      "topic": "Q2 2026 deals",
      "stem": "As at August 2026, which of the following does Nebius state in its Q2 2026 shareholder letter about deals signed in the quarter? Select all that apply.",
      "options": [
        "Four landmark AI cloud deals averaged more than $1 billion of total contract value each",
        "Annual contract value on Q2 deals averaged above $40 million per MW",
        "Roughly 70 per cent of deals included customer prepayments",
        "Estimated payback on Q2 deals is one year ten months",
        "All capacity under the 2026 Meta agreement had been delivered"
      ],
      "correct": [
        0,
        2,
        3
      ],
      "explanation": "The letter cites four deals above $1 billion each, prepayments on roughly 70 per cent of deals and a one year ten month payback. Q2 deals averaged above $20 million per MW; the $40 million figure is for short-term Q3 capacity. Meta 2026 capacity is on track for early 2027, not delivered.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (F-063, F-064, F-066, F-060, F-061)",
      "as_of": "2026-08",
      "time_sensitive": true
    },
    {
      "id": "m06-020",
      "type": "mcq",
      "select": "all",
      "difficulty": 2,
      "topic": "delivery models",
      "stem": "Under the asset-light delivery model described in the Q2 2026 shareholder letter, which layers does the partner provide? Select all that apply.",
      "options": [
        "Cloud platform",
        "Land and facility",
        "Service, software and go-to-market",
        "Power",
        "GPU hardware"
      ],
      "correct": [
        1,
        3,
        4
      ],
      "explanation": "Asset-light goes one step beyond colocation: the partner provides land, facility, power and the hardware, while Nebius supplies the cloud platform and the service, software and go-to-market layer. Under colocation the partner provides only land, facility and power.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026); Nebius press release, 15 July 2026 (S-003, F-076)",
      "as_of": "2026-08",
      "time_sensitive": false
    },
    {
      "id": "m06-021",
      "type": "mcq",
      "select": "all_not",
      "difficulty": 3,
      "topic": "Meta 2026 agreement",
      "stem": "As at March 2026, which of the following statements about part two of the 2026 Meta agreement do NOT apply? Select all that do NOT apply.",
      "options": [
        "Meta must purchase capacity on specified clusters that Nebius does not sell to third parties",
        "The potential value is up to $15 billion",
        "The $15 billion is firm contracted revenue regardless of third-party sales",
        "Nebius intends to sell the capacity to third-party customers before the backstop applies",
        "The backstop price relative to third-party market pricing is disclosed in the 20-F"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "Part two is a backstop: Meta buys only what remains unsold for the rest of five years from deployment, so $15 billion is a ceiling, not firm revenue. The 20-F does not disclose the backstop price relative to market; that it sits below market is an assumption in the note.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-036, F-037, F-038, F-040)",
      "as_of": "2026-03",
      "time_sensitive": true
    },
    {
      "id": "m06-022",
      "type": "mcq",
      "select": "all_not",
      "difficulty": 2,
      "topic": "cost stack",
      "stem": "Which of the following statements about the cost stack of a deployed GPU rack do NOT apply? Select all that do NOT apply.",
      "options": [
        "Depreciation accrues whether or not the GPU-hours are sold",
        "Colocation is billed on reserved kW rather than on GPU-hours sold",
        "Depreciation falls to zero in months when no GPU-hours are sold",
        "Only metered power varies meaningfully with load, and only partially",
        "Colocation fees are charged only on the GPU-hours actually billed to customers"
      ],
      "correct": [
        2,
        4
      ],
      "explanation": "Almost the whole stack is fixed or capacity-driven: depreciation runs on the asset regardless of sales, and colocation is a reserved-kW commitment accounted as an operating lease. Only metered power moves with load, and even that partially because committed capacity is held energised.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (S-005, F-019)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-023",
      "type": "mcq",
      "select": "all_not",
      "difficulty": 2,
      "topic": "adjusted EBITDA",
      "stem": "As at Q2 2026, which of the following statements about Nebius's adjusted EBITDA do NOT apply? Select all that do NOT apply.",
      "options": [
        "It excludes depreciation and amortisation",
        "It excludes share-based compensation",
        "The AI cloud adjusted EBITDA margin was 49.7 per cent in Q2 2026",
        "It equals the GAAP operating result",
        "It deducts the depreciation of the GPU fleet before arriving at the margin"
      ],
      "correct": [
        3,
        4
      ],
      "explanation": "Adjusted EBITDA strips out D&A and share-based compensation, which is why the AI cloud margin of 49.7 per cent coexists with a negative GAAP operating line once D&A at 45 per cent of revenue is charged. It neither equals GAAP operating profit nor deducts fleet depreciation.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (S-008, M-016, F-047, F-054)",
      "as_of": "2026-06-30",
      "time_sensitive": true
    },
    {
      "id": "m06-024",
      "type": "mcq",
      "select": "all_not",
      "difficulty": 2,
      "topic": "revenue recognition",
      "stem": "Which of the following statements about the significant financing component on customer advances do NOT apply? Select all that do NOT apply.",
      "options": [
        "It is assessed where payment and transfer of the service differ by more than one year",
        "Interest expense is accrued on the customer advance at an implicit borrowing rate",
        "There is a corresponding increase in the revenue recognised",
        "It is assessed on every advance, including those where the gap is one year or less",
        "It reduces the revenue recognised because part of the advance is treated as interest"
      ],
      "correct": [
        3,
        4
      ],
      "explanation": "The component applies only where the gap exceeds one year; the practical expedient means shorter gaps are not assessed. Its effect is to gross up both lines: interest expense on the advance and a matching uplift to revenue, not a reduction.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-014, P-004)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-025",
      "type": "recall",
      "difficulty": 1,
      "topic": "ARR",
      "stem": "As at 30 June 2026, what was Nebius's AI cloud ARR?",
      "accept": [
        "$3.0 billion",
        "3.0bn",
        "$3bn",
        "3bn",
        "3 billion",
        "3.0 billion",
        "$3,000m",
        "3000m",
        "USD 3.0 billion"
      ],
      "explanation": "The Q2 2026 shareholder letter reports AI cloud ARR of $3.0 billion, defined as the last month of the quarter's AI cloud revenue multiplied by twelve. It is a point-in-time annualisation, not a contracted floor.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (F-045)",
      "as_of": "2026-06-30",
      "time_sensitive": true
    },
    {
      "id": "m06-026",
      "type": "recall",
      "difficulty": 1,
      "topic": "Microsoft contract",
      "stem": "In how many tranches is the Microsoft GPU capacity deployed during 2025 and 2026?",
      "accept": [
        "Nine",
        "9",
        "nine tranches",
        "9 tranches"
      ],
      "explanation": "The 20-F describes nine tranches through 2025 and 2026, each with its own delivery date, service term and termination right. The two-tranche structure belongs to the 2025 Meta agreement.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-022)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-027",
      "type": "recall",
      "difficulty": 1,
      "topic": "revenue recognition",
      "stem": "Under US GAAP, which accounting standard codification topic does Nebius apply to revenue recognition?",
      "accept": [
        "ASC 606",
        "Topic 606",
        "606",
        "ASC Topic 606",
        "Accounting Standards Codification 606"
      ],
      "explanation": "Nebius reports under US GAAP and applies ASC 606 to revenue. ASC 842 is the lease standard against which the significant contracts were assessed and rejected; IFRS 15 is the near-identical standard under IFRS, which Nebius does not use.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-004)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-028",
      "type": "recall",
      "difficulty": 1,
      "topic": "platform",
      "stem": "As at August 2026, under what release name does the Nebius AI Cloud platform ship?",
      "accept": [
        "Aether",
        "Nebius Aether",
        "Aether 3.6",
        "Aether 3.5"
      ],
      "explanation": "Nebius AI Cloud ships under the release name Aether: version 3.5 added serverless inference in Q1 2026 and 3.6 added the Echo operations agent in Q2. Token Factory is the per-token inference product, and Echo is an agent within Aether, not the platform name.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q1 2026 shareholder letter (May 2026); Nebius Q2 2026 shareholder letter (August 2026) (F-069)",
      "as_of": "2026-08",
      "time_sensitive": true
    },
    {
      "id": "m06-029",
      "type": "recall",
      "difficulty": 2,
      "topic": "Microsoft contract",
      "stem": "As at 31 December 2025, through which month and year do the Microsoft committed fees run?",
      "accept": [
        "October 2031",
        "Oct 2031",
        "10/2031",
        "2031-10",
        "October, 2031"
      ],
      "explanation": "Committed fees are estimated at up to $17,392.9 million through October 2031, with the balance after upfront payments invoiced monthly over each tranche's service term. September 2025 is the effective date and 2026 the final deployment year; neither is the end of the fee period.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-023)",
      "as_of": "2025-12-31",
      "time_sensitive": true
    },
    {
      "id": "m06-030",
      "type": "recall",
      "difficulty": 2,
      "topic": "deferred revenue",
      "stem": "As at 31 December 2025, what was Nebius's deferred revenue balance (current plus non-current)?",
      "accept": [
        "$1,577.5 million",
        "1577.5m",
        "1,577.5",
        "$1,577.5m",
        "1.5775bn",
        "$1.58bn",
        "1.58 billion",
        "1,577.5 million",
        "USD 1,577.5 million",
        "1.6bn"
      ],
      "explanation": "Deferred revenue rose from $16.3 million at end-2024 to $1,577.5 million at end-2025 as prepayments arrived under the strategic agreements. It is a contract liability that unwinds into revenue over one to five years, not revenue itself.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (F-012, M-014)",
      "as_of": "2025-12-31",
      "time_sensitive": true
    },
    {
      "id": "m06-031",
      "type": "recall",
      "difficulty": 1,
      "topic": "audit",
      "stem": "What did the auditor designate the revenue recognition judgement on Nebius's significant customer contracts, including the service-versus-lease assessment?",
      "accept": [
        "Critical audit matter",
        "CAM",
        "critical audit matters",
        "a critical audit matter"
      ],
      "explanation": "The audit report identifies revenue recognition on significant customer contracts, including whether they are services or leases, as a critical audit matter. The designation matters because lease classification would change income statement geography and the comparability of margins with peers.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026), audit report (F-006)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-032",
      "type": "recall",
      "difficulty": 2,
      "topic": "asset-light",
      "stem": "On what date did Nebius announce its asset-light infrastructure partnership model?",
      "accept": [
        "15 July 2026",
        "15 Jul 2026",
        "July 15 2026",
        "15/07/2026",
        "2026-07-15",
        "July 2026"
      ],
      "explanation": "The infrastructure partnership model was introduced by press release on 15 July 2026, two days before the 17 July 2026 announcement of the $775 million secured financing. The two July announcements are easily conflated; the financing is the later one.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius press release, 15 July 2026 (F-073)",
      "as_of": "2026-07-15",
      "time_sensitive": false
    },
    {
      "id": "m06-033",
      "type": "define",
      "difficulty": 1,
      "topic": "take-or-pay",
      "stem": "In one sentence, define a take-or-pay contract as used in Nebius's committed capacity agreements.",
      "model_answer": "The customer pays the contracted fees whether or not it actually uses the capacity.",
      "rubric": {
        "must": [
          [
            "whether or not",
            "irrespective of",
            "regardless of",
            "even if",
            "without regard to",
            "independent of"
          ],
          [
            "uses",
            "use",
            "used",
            "usage",
            "utilisation",
            "utilization",
            "consumes",
            "consumption",
            "utilises",
            "utilized"
          ]
        ],
        "should": [
          [
            "contracted fees",
            "committed fees",
            "fixed fees",
            "fees",
            "fee",
            "payments",
            "contracted amount"
          ],
          [
            "capacity",
            "gpu capacity",
            "computing capacity",
            "compute"
          ]
        ],
        "should_min": 1,
        "forbid": [
          [
            "only on usage",
            "on metered usage",
            "pay as you go",
            "pay per use",
            "only when used"
          ]
        ]
      },
      "explanation": "The defining feature is payment on the capacity schedule irrespective of consumption, which makes commercial utilisation 100 per cent by construction and underpins backlog quality. A pay-as-you-go definition, billed only on metered usage in arrears, is the opposite structure.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (G-001, D-002)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-034",
      "type": "define",
      "difficulty": 3,
      "topic": "revenue recognition",
      "stem": "In one or two sentences, define the significant financing component and its effect on Nebius's income statement.",
      "model_answer": "Where a customer pays more than a year before the service is delivered, Nebius recognises imputed interest expense on the advance with a corresponding increase in revenue.",
      "rubric": {
        "must": [
          [
            "more than a year",
            "more than one year",
            "over a year",
            "over one year",
            "exceeds one year",
            "exceeds a year",
            "longer than a year",
            "longer than one year",
            "more than 12 months",
            "beyond one year"
          ],
          [
            "interest",
            "imputed interest",
            "financing cost",
            "interest expense",
            "finance cost"
          ],
          [
            "revenue",
            "revenues",
            "turnover",
            "sales",
            "top line"
          ]
        ],
        "should": [
          [
            "prepayment",
            "advance",
            "upfront",
            "paid in advance",
            "pays before",
            "prepaid",
            "prepayments",
            "advances"
          ],
          [
            "increase",
            "uplift",
            "gross up",
            "grosses up",
            "higher",
            "increases",
            "additional",
            "corresponding"
          ]
        ],
        "should_min": 1,
        "forbid": [
          [
            "reduces revenue",
            "reduce revenue",
            "lower revenue",
            "reduction in revenue",
            "net of interest"
          ]
        ]
      },
      "explanation": "The advance is treated as customer financing: interest expense accrues at an implicit borrowing rate and revenue is grossed up by the same amount, so both lines rise. Stating that revenue is reduced by the interest is the common error; the effect on revenue is an uplift.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (G-008, F-014)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-035",
      "type": "define",
      "difficulty": 3,
      "topic": "RPO",
      "stem": "In one or two sentences, define remaining performance obligations (RPO) as disclosed by Nebius.",
      "model_answer": "The transaction price allocated to performance obligations that are unsatisfied or partly unsatisfied at the balance sheet date, comprising deferred revenue plus unbilled non-cancellable contract revenue and excluding obligations of one year or less.",
      "rubric": {
        "must": [
          [
            "performance obligations",
            "performance obligation",
            "obligations",
            "obligation"
          ],
          [
            "unsatisfied",
            "not yet satisfied",
            "not yet delivered",
            "remaining",
            "yet to be performed",
            "undelivered",
            "not yet performed",
            "still to be delivered",
            "outstanding"
          ]
        ],
        "should": [
          [
            "transaction price",
            "contract value",
            "contracted revenue",
            "revenue",
            "contract price"
          ],
          [
            "deferred revenue",
            "unbilled",
            "non cancellable",
            "non-cancellable",
            "contract liability",
            "billed"
          ],
          [
            "one year",
            "12 months",
            "twelve months",
            "short duration"
          ]
        ],
        "should_min": 1,
        "forbid": []
      },
      "explanation": "RPO is the audited accounting measure of contracted revenue still to be recognised, $21,333.0 million at end-2025. It is narrower than the $40 billion commercial commitments figure, which includes later agreements and the Meta part-two ceiling, and broader than deferred revenue, which excludes unbilled amounts.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (G-007, M-013, D-005)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-036",
      "type": "define",
      "difficulty": 2,
      "topic": "Meta 2026 agreement",
      "stem": "In one or two sentences, define a capacity backstop as used in part two of the March 2026 Meta agreement.",
      "model_answer": "An obligation on Meta to purchase any capacity on specified clusters that Nebius has not sold to third parties, so that Meta acts as purchaser of last resort for the remainder of five years from deployment.",
      "rubric": {
        "must": [
          [
            "purchase",
            "buy",
            "take",
            "acquire",
            "pay for",
            "purchases",
            "buys",
            "takes"
          ],
          [
            "unsold",
            "not sold",
            "fails to sell",
            "does not sell",
            "left unsold",
            "remains unsold",
            "cannot sell",
            "has not sold",
            "not sold to third parties",
            "doesn t sell",
            "unable to sell",
            "left over",
            "residual"
          ]
        ],
        "should": [
          [
            "third parties",
            "third party",
            "other customers",
            "the market",
            "market"
          ],
          [
            "last resort",
            "backstop",
            "floor",
            "guarantee"
          ],
          [
            "meta"
          ]
        ],
        "should_min": 1,
        "forbid": []
      },
      "explanation": "The backstop converts merchant capacity into contracted revenue only for what remains unsold: Nebius keeps the upside of selling into a rising market while Meta absorbs the left tail. It is not a purchase of dedicated clusters, which is part one, and the backstop price is undisclosed.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (G-004, F-036)",
      "as_of": "2026-03",
      "time_sensitive": false
    },
    {
      "id": "m06-037",
      "type": "define",
      "difficulty": 2,
      "topic": "utilisation",
      "stem": "In one or two sentences, define sold-hours (commercial) utilisation and state its value on a take-or-pay fleet.",
      "model_answer": "The share of deployed GPU-hours that are actually billed to customers; it drives provider revenue and is 100 per cent by construction on a take-or-pay fleet.",
      "rubric": {
        "must": [
          [
            "billed",
            "sold",
            "paid for",
            "invoiced",
            "charged",
            "paid"
          ],
          [
            "deployed",
            "available",
            "installed",
            "fleet",
            "total",
            "capacity"
          ]
        ],
        "should": [
          [
            "revenue",
            "provider",
            "merchant",
            "economics"
          ],
          [
            "take or pay",
            "100 per cent",
            "100%",
            "by construction",
            "contracted",
            "committed",
            "100 percent"
          ]
        ],
        "should_min": 1,
        "forbid": [
          [
            "flops",
            "model flops utilisation",
            "mfu",
            "compute efficiency"
          ]
        ]
      },
      "explanation": "Commercial utilisation is the provider's billed share of deployed hours, the quantity that swings a rack between excellent and uneconomic. Model FLOPs utilisation is the customer's efficiency inside hours already paid for; conflating the two is the common error.",
      "source": "Module 6 note, compiled 15 September 2026 (G-012, M-020, D-008)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-038",
      "type": "define",
      "difficulty": 2,
      "topic": "pricing metric",
      "stem": "In one or two sentences, define ACV per MW as Nebius discloses it and note the ambiguity in its denominator.",
      "model_answer": "Annual contract value of a deal divided by the megawatts of capacity it occupies; Nebius's disclosed pricing metric, with the MW basis (IT load or gross power) not stated.",
      "rubric": {
        "must": [
          [
            "annual contract value",
            "acv",
            "contract value per year",
            "annual value",
            "yearly contract value",
            "annualised contract value"
          ],
          [
            "megawatt",
            "mw",
            "per mw",
            "megawatts",
            "per megawatt"
          ]
        ],
        "should": [
          [
            "it load",
            "gross",
            "basis",
            "pue",
            "undefined",
            "not stated",
            "not defined",
            "unclear",
            "ambiguous",
            "unspecified",
            "denominator"
          ],
          [
            "12",
            "20",
            "40",
            "pricing metric",
            "q2"
          ]
        ],
        "should_min": 1,
        "forbid": []
      },
      "explanation": "ACV per MW is annual contract value over the megawatts a deal occupies; Nebius cites about $12 million base, above $20 million on Q2 2026 deals and above $40 million on short-term Q3 capacity. Because IT and gross MW differ by the PUE factor, figures on different bases are not comparable.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (G-005, M-002, F-105)",
      "as_of": "2026-08",
      "time_sensitive": false
    },
    {
      "id": "m06-039",
      "type": "define",
      "difficulty": 2,
      "topic": "pricing",
      "stem": "In one sentence, define preemptible capacity as listed on Nebius's price page.",
      "model_answer": "Discounted GPU capacity that the provider can reclaim at short notice; Nebius lists it at roughly 45 per cent below on-demand.",
      "rubric": {
        "must": [
          [
            "reclaim",
            "take back",
            "interrupt",
            "withdraw",
            "revoke",
            "preempt",
            "pre-empt",
            "interrupted",
            "reclaimed",
            "taken away",
            "terminate",
            "terminated",
            "stopped",
            "evict",
            "evicted"
          ],
          [
            "discount",
            "discounted",
            "cheaper",
            "lower price",
            "below on demand",
            "reduced",
            "lower rate",
            "less than on demand",
            "cheap"
          ]
        ],
        "should": [
          [
            "short notice",
            "any time",
            "without warning",
            "at will",
            "little notice"
          ],
          [
            "45",
            "44",
            "46",
            "spot",
            "interruptible",
            "half"
          ]
        ],
        "should_min": 1,
        "forbid": [
          [
            "reserved pricing",
            "committed pricing",
            "guaranteed",
            "committed for a term"
          ]
        ]
      },
      "explanation": "Preemptible capacity is priced at a discount because the provider can reclaim it on short notice; on the Nebius list the discount is about 44 to 46 per cent (H100 $2.15 against $3.85). Treating it as reserved pricing ignores the reclaim risk that the discount compensates.",
      "source": "Module 6 note, compiled 15 September 2026; nebius.com/prices, retrieved 17 August 2026 (G-010, M-021, D-021)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-040",
      "type": "define",
      "difficulty": 2,
      "topic": "asset-light",
      "stem": "In one or two sentences, define the asset-light partnership model Nebius introduced in July 2026.",
      "model_answer": "A model in which the partner finances and owns the facility and hardware while Nebius supplies the platform, software stack and demand, earning a revenue share, licence fee or commission.",
      "rubric": {
        "must": [
          [
            "partner",
            "third party",
            "counterparty",
            "partners"
          ],
          [
            "revenue share",
            "revenue sharing",
            "licence fee",
            "license fee",
            "commission",
            "take rate",
            "fees",
            "commissions",
            "licensing"
          ]
        ],
        "should": [
          [
            "hardware",
            "gpus",
            "servers",
            "facility",
            "data centre",
            "data center",
            "capex",
            "finances",
            "owns",
            "funds",
            "capital"
          ],
          [
            "platform",
            "software",
            "demand",
            "sales",
            "architecture",
            "customers",
            "stack"
          ]
        ],
        "should_min": 1,
        "forbid": []
      },
      "explanation": "Asset-light removes even hardware capex from Nebius's side: the partner funds land, facility, power and hardware and Nebius takes a share via revenue-sharing, licensing, commissions or resold committed capacity. The high-margin characterisation is a company claim; per MW Nebius earns a slice, not the whole stack.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius press release, 15 July 2026 (G-014, F-073, F-075)",
      "as_of": "2026-07-15",
      "time_sensitive": false
    },
    {
      "id": "m06-041",
      "type": "numeric",
      "difficulty": 3,
      "topic": "pricing metric",
      "stem": "As at August 2026, Nebius cited annual contract value of $20 million per MW on Q2 2026 deals. Assuming 600 GPUs per MW of IT load and 8,760 hours per year, what is the implied price per GPU-hour on fully paid committed capacity?",
      "value": 3.81,
      "tolerance_pct": 3,
      "unit": "$/GPU-hr",
      "working": "$20,000,000 / 600 GPUs / 8,760 hours = $3.81 per GPU-hour. On a gross-power basis at PUE 1.25 the divisor falls to 480 GPUs and the figure rises to $4.76; the disclosure does not state which MW basis applies.",
      "explanation": "Divide ACV per MW by GPUs per MW and by hours in a year: 20,000,000 / 600 / 8,760 gives $3.81. Take-or-pay capacity is paid on the full schedule, so no sold-share adjustment applies; using 480 GPUs (gross basis) would give $4.76 instead.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (M-004, F-104, F-060)",
      "as_of": "2026-08",
      "time_sensitive": true
    },
    {
      "id": "m06-042",
      "type": "numeric",
      "difficulty": 3,
      "topic": "cost stack",
      "stem": "A rack draws 120 kW of reserved colocation capacity at $140 per kW per month. What is the annual colocation cost, in $k?",
      "value": 201.6,
      "tolerance_pct": 3,
      "unit": "$k",
      "working": "120 kW x $140 per kW per month x 12 months = $201,600 per year, about $202k. Colocation is billed on reserved kW regardless of GPU-hours sold.",
      "explanation": "Reserved kW times the monthly rate times twelve: 120 x 140 x 12 = 201,600, or about $202k per rack per year (8 per cent of the fully contracted revenue in the worked example). Applying a PUE uplift here would be wrong: the colocation fee already covers cooling energy.",
      "source": "Module 6 note, compiled 15 September 2026 (M-007, F-107)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-043",
      "type": "numeric",
      "difficulty": 3,
      "topic": "unit economics",
      "stem": "A GB200 NVL72 rack holds 72 GPUs, is 100 per cent sold at a blended price of $4.25 per GPU-hour, and runs 8,760 hours per year. What is the annual revenue potential of the rack, in $m?",
      "value": 2.68,
      "tolerance_pct": 3,
      "unit": "$m",
      "working": "72 GPUs x 8,760 hours x 100% sold x $4.25 = $2,680,560, about $2.68m per rack per year.",
      "explanation": "Revenue potential is GPUs times hours times sold share times blended price: 72 x 8,760 x 4.25 = 2,680,560, about $2.68 million. Using the on-demand list price of $7.15 for B200 would be the common error; a contracted fleet earns the blended committed rate.",
      "source": "Module 6 note, compiled 15 September 2026 (M-005, F-108, F-107)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-044",
      "type": "numeric",
      "difficulty": 3,
      "topic": "breakeven",
      "stem": "On the worked rack, annual cash operating costs are power $118k, colocation $202k and other cash opex $170k; depreciation is $700k; revenue at full utilisation is $2,681k. What is the full breakeven utilisation including depreciation, in per cent?",
      "value": 44.4,
      "tolerance_pct": 3,
      "unit": "%",
      "working": "(118 + 202 + 170 + 700) / 2,681 = 1,190 / 2,681 = 44.4 per cent. Cash breakeven, excluding the $700k of depreciation, is 490 / 2,681 = 18 per cent.",
      "explanation": "Full breakeven divides cash opex plus depreciation by revenue at full utilisation: 1,190 / 2,681 = 44 per cent. Omitting depreciation gives cash breakeven of 18 per cent, which is the figure to avoid quoting as if it covered capital recovery; the 26-point gap is the capital recovery hurdle.",
      "source": "Module 6 note, compiled 15 September 2026 (M-011, M-010, F-110, D-009)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-045",
      "type": "numeric",
      "difficulty": 3,
      "topic": "payback",
      "stem": "On the worked rack, all-in deployed capex is $3.5 million and annual cash contribution is $2.19 million. What is the cash payback period, in years?",
      "value": 1.6,
      "tolerance_pct": 3,
      "unit": "years",
      "working": "$3.5m / $2.19m = 1.60 years. Nebius discloses one year ten months (about 1.8 years) on Q2 2026 deals, computed on forecast costs including capacity not yet built.",
      "explanation": "Cash payback is capex divided by annual cash contribution: 3.5 / 2.19 = 1.6 years, close to the one year ten months Nebius discloses on Q2 2026 deals. Dividing by contribution after depreciation (1.49) would give 2.3 years and double-count the capital recovery.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (M-012, F-109, F-066)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-046",
      "type": "numeric",
      "difficulty": 3,
      "topic": "Microsoft contract",
      "stem": "As at 31 December 2025, the Microsoft agreement carried aggregate upfront payments of approximately $6,958.1 million against estimated committed fees of up to $17,392.9 million. What share of the contract value is paid upfront, in per cent?",
      "value": 40.0,
      "tolerance_pct": 3,
      "unit": "%",
      "working": "6,958.1 / 17,392.9 = 0.400, about 40 per cent. The remainder is invoiced monthly over each tranche's service term through October 2031.",
      "explanation": "Upfront share is aggregate upfront payments over total contract value: 6,958.1 / 17,392.9 = 40 per cent. This is a Microsoft-specific figure, not a market constant; the Q2 2026 letter cites prepayments self-financing 50 to 60 per cent of capex on newer deals, a different ratio with a different denominator.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (M-015, F-024, F-023, F-025)",
      "as_of": "2025-12-31",
      "time_sensitive": true
    },
    {
      "id": "m06-047",
      "type": "sequence",
      "difficulty": 2,
      "topic": "contract mechanics",
      "stem": "Place the stages of a committed GPU capacity contract in order, from signing to the SLA regime.",
      "steps": [
        "Signing: total contract value, term and capacity schedule agreed",
        "Prepayment received and booked as deferred revenue",
        "Tranche buildout: capex incurred against dated delivery obligations",
        "Tranche delivered and made available",
        "Monthly take-or-pay billing irrespective of utilisation; revenue recognised rateably per tranche",
        "SLA monitoring with service credits on shortfall"
      ],
      "explanation": "The lifecycle runs signing, prepayment, buildout, delivery, take-or-pay billing with rateable recognition, then SLA monitoring; repeated availability failure or delivery delay can then trigger per-tranche termination rights. Billing cannot precede delivery, and the prepayment arrives at signing, before any capex.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026); Module 6 Figure 3 (P-001)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-048",
      "type": "sequence",
      "difficulty": 3,
      "topic": "revenue recognition",
      "stem": "Place the accounting steps in order for a large customer prepayment received more than a year before delivery, from cash receipt to disclosure.",
      "steps": [
        "Cash received in advance of service",
        "Deferred revenue (contract liability) recognised",
        "Significant financing component assessed because the gap exceeds one year",
        "Interest expense accrued on the advance at an implicit rate, increasing the revenue to be recognised",
        "Deferred revenue unwound into revenue rateably as each tranche is made available",
        "Unbilled and unsatisfied amounts disclosed as RPO"
      ],
      "explanation": "Receipt creates the liability; the financing component is then assessed and interest accrued, raising the revenue to be recognised; the liability unwinds as tranches go live; unsatisfied amounts are reported as RPO. Interest cannot be accrued before the liability exists, and RPO disclosure follows recognition.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (P-004)",
      "as_of": "2025-12-31",
      "time_sensitive": false
    },
    {
      "id": "m06-049",
      "type": "sequence",
      "difficulty": 3,
      "topic": "price decay",
      "stem": "Place the stages of the H100 rental price path in chronological order, from 2023 to August 2026.",
      "steps": [
        "2023 scarcity pricing near $8 per hour",
        "Supply ramp and marketplace price discovery from early 2024",
        "Silicon Data index decline from $3.06 (September 2024) to $2.36 (June 2025)",
        "Late-2025 band of $2 to $4 per hour",
        "Committed-segment repricing upward from October 2025",
        "2026 firming on older generations, with the Nebius list at $3.85 by August 2026"
      ],
      "explanation": "Phase one is structural decay from the 2023 peak through marketplace discovery and the index decline to mid-2025; phase two is the cyclical firming from late 2025, first in the committed segment and then in list prices. The dated points fix the order; the $2 to $4 band precedes the 2026 firming.",
      "source": "Module 6 note, compiled 15 September 2026; latent.space, December 2024; Silicon Data, 2025; GPUSmith, July 2026; nebius.com/prices, retrieved 17 August 2026 (P-005)",
      "as_of": "2026-08-17",
      "time_sensitive": true
    },
    {
      "id": "m06-050",
      "type": "sequence",
      "difficulty": 2,
      "topic": "asset-light",
      "stem": "Place the steps of onboarding an asset-light infrastructure partner in order.",
      "steps": [
        "Partner secures land, power and facility",
        "Partner finances and installs hardware to the Nebius reference design",
        "Nebius deploys its software and services stack and equips the partner operations team",
        "Nebius sells the resulting capacity through its global sales organisation",
        "Nebius earns revenue share, licence fee, commission or resold committed capacity; partner earns on owned assets"
      ],
      "explanation": "The partner provides the physical layers and hardware first, Nebius layers its platform on top, sells the capacity, and only then does the take-rate revenue flow. Capacity cannot be sold before the stack is deployed, and hardware cannot be installed before the site exists.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius press release, 15 July 2026; Nebius Q2 2026 shareholder letter (August 2026) (P-007)",
      "as_of": "2026-07-15",
      "time_sensitive": false
    },
    {
      "id": "m06-051",
      "type": "slot",
      "difficulty": 2,
      "topic": "Microsoft contract",
      "layout": "stack",
      "stem": "As at 31 December 2025, complete the two missing components of the Microsoft contract economics.",
      "nodes": [
        "Total committed fees up to $17,392.9m through October 2031",
        null,
        "Monthly invoicing on the remainder over each tranche's service term",
        "Nine tranches during 2025 and 2026",
        "SLA service credits",
        null
      ],
      "choices": [
        "Upfront payments of approximately $6,958.1m (about 40 per cent)",
        "Per-tranche termination rights",
        "Upfront payments of approximately $2,880.7m",
        "Capacity backstop up to $15bn",
        "Purchaser of last resort",
        "Upfront payments of approximately $12bn"
      ],
      "correct": [
        "Upfront payments of approximately $6,958.1m (about 40 per cent)",
        "Per-tranche termination rights"
      ],
      "explanation": "Roughly 40 per cent of the Microsoft value arrives upfront ($6,958.1 million), and SLA remedies escalate from service credits to termination of the affected tranche. $2,880.7 million is the 2025 Meta consideration and the backstop and purchaser-of-last-resort labels belong to Meta part two.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (S-009, F-023, F-024, F-026)",
      "as_of": "2025-12-31",
      "time_sensitive": true
    },
    {
      "id": "m06-052",
      "type": "slot",
      "difficulty": 3,
      "topic": "cost stack",
      "layout": "stack",
      "stem": "Complete the two missing layers of the GPU cloud stack, ordered from revenue at the top to the physical layers at the bottom.",
      "nodes": [
        "Revenue ($/GPU-hour, $/token; one to five year contracts and usage)",
        "Go to market and customers",
        null,
        "Cloud platform",
        null,
        "Power and cooling",
        "Land and facility"
      ],
      "choices": [
        "Software, services and SLAs",
        "GPU hardware (four to five year life)",
        "Tenant-provided hardware, software and customers",
        "Land and shell (20-plus year life)",
        "Colocation fees per kW per month",
        "Revenue share on partner capacity"
      ],
      "correct": [
        "Software, services and SLAs",
        "GPU hardware (four to five year life)"
      ],
      "explanation": "In the GPU cloud stack the software, services and SLA layer sits between go-to-market and the cloud platform, and GPU hardware sits between the platform and power. Tenant-provided hardware and land and shell are components of the landlord stack; colocation fees and revenue share are cost or income lines, not layers.",
      "source": "Module 6 note, compiled 15 September 2026; Module 6 Figure 1 (S-002, S-001)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-053",
      "type": "slot",
      "difficulty": 2,
      "topic": "Meta 2026 agreement",
      "layout": "flow",
      "stem": "As at March 2026, complete the missing component of the 2026 Meta agreement structure.",
      "nodes": [
        "Master Infrastructure Services Agreement (13 March 2026)",
        "Part one: dedicated cluster orders ($12bn, five years each, tranches through H1 2027)",
        null
      ],
      "choices": [
        "Part two: unsold-capacity backstop order (up to $15bn)",
        "Part two: dedicated cluster orders (up to $15bn)",
        "Part two: Microsoft option to acquire additional capacity",
        "Part two: recurring storage and connectivity fees ($27bn)"
      ],
      "correct": [
        "Part two: unsold-capacity backstop order (up to $15bn)"
      ],
      "explanation": "Part two is a further order under which Meta buys whatever Nebius fails to sell to third parties, up to $15 billion, with $27 billion the ceiling for the whole agreement. A second set of dedicated cluster orders would be more take-or-pay, not the merchant-with-backstop structure the 20-F describes.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026) (S-006, F-034, F-035, F-036)",
      "as_of": "2026-03",
      "time_sensitive": true
    },
    {
      "id": "m06-054",
      "type": "match",
      "difficulty": 3,
      "topic": "formulas",
      "stem": "Match each metric to its formula.",
      "pairs": [
        [
          "ARR (Nebius definition)",
          "AI cloud revenue in the last month of the quarter x 12"
        ],
        [
          "ACV per MW",
          "Annual contract value / megawatts occupied"
        ],
        [
          "Cash payback",
          "Capex / annual cash contribution"
        ],
        [
          "Cash breakeven utilisation",
          "Cash opex / revenue at full utilisation"
        ],
        [
          "Preemptible discount",
          "1 - preemptible price / on-demand price"
        ]
      ],
      "explanation": "Each formula follows the register: ARR annualises one month; ACV per MW divides annual value by megawatts; payback divides capex by cash contribution; cash breakeven divides cash opex by full-utilisation revenue; the preemptible discount is one minus the price ratio. Full breakeven would add depreciation to the numerator.",
      "source": "Module 6 note, compiled 15 September 2026 (M-001, M-002, M-012, M-010, M-021)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-055",
      "type": "match",
      "difficulty": 1,
      "topic": "glossary",
      "stem": "Match each term to its plain-English definition.",
      "pairs": [
        [
          "Take-or-pay",
          "Customer pays contracted fees whether or not it uses the capacity"
        ],
        [
          "Capacity backstop",
          "Obligation to purchase capacity left unsold to third parties"
        ],
        [
          "Preemptible capacity",
          "Discounted capacity the provider can reclaim on short notice"
        ],
        [
          "Sold-hours utilisation",
          "Share of deployed GPU-hours actually billed"
        ]
      ],
      "explanation": "Take-or-pay fixes payment to the schedule; the backstop is Meta's purchase of unsold part-two capacity; preemptible capacity is discounted for reclaim risk; sold-hours utilisation is the provider's billed share of deployed hours. Reserved capacity, by contrast, is committed for a term and cannot be reclaimed.",
      "source": "Module 6 note, compiled 15 September 2026 (G-001, G-004, G-010, G-012)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-056",
      "type": "match",
      "difficulty": 2,
      "topic": "income statement",
      "stem": "As at Q2 2026, match each Nebius income statement line to its share of revenue.",
      "pairs": [
        [
          "Cost of revenue",
          "23 per cent"
        ],
        [
          "Product development",
          "33 per cent"
        ],
        [
          "SG&A",
          "30 per cent"
        ],
        [
          "Depreciation and amortisation",
          "45 per cent"
        ]
      ],
      "explanation": "Q2 2026: cost of revenue 23 per cent, product development 33 per cent (including the $115.9 million Eigen AI one-off), SG&A 30 per cent and D&A 45 per cent, which together exceed revenue. Product development and SG&A are easily transposed; the engineering line is the larger of the two.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (S-008, F-049, F-050, F-051, F-052)",
      "as_of": "2026-06-30",
      "time_sensitive": true
    },
    {
      "id": "m06-057",
      "type": "classify",
      "difficulty": 2,
      "topic": "Q2 2026 deals",
      "stem": "Classify the following statement from the Q2 2026 shareholder letter.",
      "statement": "Nebius's first capacity auction pilot cleared its highest Blackwell price to date.",
      "categories": [
        "Fact",
        "Assumption",
        "Company claim",
        "Analytical interpretation"
      ],
      "correct": 2,
      "explanation": "This is a management characterisation of one pilot with no disclosed clearing price or volume and no external corroboration, so it is a company claim. It is not a fact from a primary financial statement line, and it is not an inference drawn by the note's author.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius Q2 2026 shareholder letter (August 2026) (F-067, D-013)",
      "as_of": "2026-08",
      "time_sensitive": true
    },
    {
      "id": "m06-058",
      "type": "classify",
      "difficulty": 3,
      "topic": "Meta 2026 agreement",
      "stem": "Classify the following statement about part two of the 2026 Meta agreement.",
      "statement": "The price Meta pays under the part-two backstop sits below what third-party customers would pay.",
      "categories": [
        "Fact",
        "Assumption",
        "Company claim",
        "Analytical interpretation"
      ],
      "correct": 1,
      "explanation": "The 20-F does not disclose the backstop price relative to market; the note reasons that it must sit below market or Nebius would have no incentive to sell to third parties, and labels that an assumption. It is not a disclosed fact, and Nebius has not stated it, so it is not a company claim.",
      "source": "Module 6 note, compiled 15 September 2026 (F-039, F-038)",
      "as_of": "2026-08-17",
      "time_sensitive": false
    },
    {
      "id": "m06-059",
      "type": "classify",
      "difficulty": 2,
      "topic": "price decay",
      "stem": "Classify the following statement from section (b) of the note dated 17 August 2026.",
      "statement": "Each GPU generation loses roughly half its rental value within 18 to 24 months of the successor ramping, subject to a floor that can rise in a power-constrained market.",
      "categories": [
        "Fact",
        "Assumption",
        "Company claim",
        "Analytical interpretation"
      ],
      "correct": 3,
      "explanation": "The note labels this a working generalisation drawn from several dated observations (A100, H100 index and cohort data) rather than a fact: it is the author's inference. The individual price points behind it are facts, but the half-life rule is analytical interpretation.",
      "source": "Module 6 note, compiled 15 September 2026 (F-097, D-016)",
      "as_of": "2026-08-17",
      "time_sensitive": true
    },
    {
      "id": "m06-060",
      "type": "classify",
      "difficulty": 3,
      "topic": "Microsoft contract",
      "stem": "Classify the following statement about the Microsoft agreement.",
      "statement": "All Microsoft capacity tranches were delivered on schedule by July 2026.",
      "categories": [
        "Structural protection",
        "Narrative comfort"
      ],
      "correct": 1,
      "explanation": "Delivery to date is a track record, not an enforceable mechanism: it says nothing about future tranche performance and the delivery statement is itself a company claim. The structural protections in this contract are the per-tranche SLA credits and termination rights, which protect Microsoft, not Nebius.",
      "source": "Module 6 note, compiled 15 September 2026; Nebius 20-F for FY2025 (filed early 2026); Nebius press release, 17 July 2026 (D-014, F-029)",
      "as_of": "2026-07",
      "time_sensitive": false
    }
  ],
  "glossary": [
    {
      "term": "Take-or-pay",
      "aliases": [
        "ToP",
        "take-or-pay commitment",
        "minimum commitment"
      ],
      "definition": "Customer pays contracted fees whether or not it uses the capacity",
      "relevance": "Governs Microsoft and both Meta agreements; basis of backlog quality. Same usage across jurisdictions; borrowed from commodity offtake contracts.",
      "priority": "red",
      "module": 6,
      "variants": null
    },
    {
      "term": "Tranche",
      "aliases": [
        "delivery tranche",
        "capacity block",
        "order (Meta 2026)"
      ],
      "definition": "A contractually scheduled block of capacity with its own delivery date, service term and termination right",
      "relevance": "Microsoft: nine tranches; SLA remedies attach per tranche. Universal term.",
      "priority": "red",
      "module": 6,
      "variants": null
    },
    {
      "term": "Customer prepayment / advance",
      "aliases": [
        "upfront payment",
        "advance",
        "customer advance",
        "prepay"
      ],
      "definition": "Cash received before service, held as deferred revenue",
      "relevance": "~$7.0bn upfront on Microsoft; >$9bn expected across 2026; funds 50-60% of related capex. The balance sheet label differs by framework (US GAAP: deferred revenue; IFRS: contract liability) but the prepayment itself is the same term.",
      "priority": "red",
      "module": 6,
      "variants": null
    },
    {
      "term": "Capacity backstop",
      "aliases": [
        "unsold-capacity order",
        "purchaser of last resort",
        "floor"
      ],
      "definition": "Obligation to purchase capacity left unsold to third parties",
      "relevance": "Part two of the March 2026 Meta agreement, up to $15bn. No standard term; sometimes described as offtake of last resort.",
      "priority": "red",
      "module": 6,
      "variants": null
    },
    {
      "term": "ACV per MW",
      "aliases": [
        "ACV/MW",
        "annual contract value per megawatt"
      ],
      "definition": "Annual contract value per megawatt of capacity",
      "relevance": "Nebius's disclosed pricing metric: $12m base, >$20m Q2 deals, >$40m short-term. Nebius-specific; MW basis (IT vs gross) undefined.",
      "priority": "red",
      "module": 6,
      "variants": null
    },
    {
      "term": "ARR (Nebius definition)",
      "aliases": [
        "annualised run-rate",
        "run-rate revenue",
        "ARR"
      ],
      "definition": "Last month of the quarter's AI cloud revenue x 12",
      "relevance": "$3.0bn at Q2 2026; embeds ramp of new tranches. Differs from SaaS ARR (contracted recurring); check definitions before comparing.",
      "priority": "red",
      "module": 6,
      "variants": null
    },
    {
      "term": "RPO",
      "aliases": [
        "remaining performance obligations",
        "backlog (loosely)"
      ],
      "definition": "Transaction price allocated to unsatisfied performance obligations",
      "relevance": "$21.3bn at YE2025 with disclosed recognition phasing. US GAAP term; IFRS 15 discloses the same concept under the same name.",
      "priority": "red",
      "module": 6,
      "variants": null
    },
    {
      "term": "Significant financing component",
      "aliases": [
        "SFC",
        "financing component",
        "imputed interest on advances"
      ],
      "definition": "Imputed interest where payment and delivery are more than a year apart",
      "relevance": "Large prepayments create interest expense and a matching revenue uplift. ASC 606 (US) and IFRS 15 (UK, EU); identical concept and term.",
      "priority": "amber",
      "module": 6,
      "variants": null
    },
    {
      "term": "ASC 606 vs ASC 842 boundary",
      "aliases": [
        "service vs lease test",
        "lease scoping",
        "Topic 606 / Topic 842"
      ],
      "definition": "Whether a capacity contract is a service or conveys control of identified assets (a lease)",
      "relevance": "Nebius: service contracts; a critical audit matter; drives comparability with peers. US: ASC 606/842; UK, EU: IFRS 15/16.",
      "priority": "amber",
      "module": 6,
      "variants": {
        "UK": "IFRS 15/16 boundary",
        "EU": "IFRS 15/16 boundary",
        "US": "ASC 606/842 boundary"
      }
    },
    {
      "term": "Preemptible capacity",
      "aliases": [
        "spot",
        "interruptible",
        "preemptible instance"
      ],
      "definition": "Discounted capacity the provider can reclaim on short notice",
      "relevance": "Nebius lists preemptible at roughly 45% below on-demand. Also called spot (AWS usage) or interruptible; provider naming, not a jurisdictional variant.",
      "priority": "amber",
      "module": 6,
      "variants": null
    },
    {
      "term": "Blended realised price",
      "aliases": [
        "realised rate",
        "average realised price",
        "effective $/GPU-hr"
      ],
      "definition": "Revenue divided by billed GPU-hours across all contract types",
      "relevance": "The number that reconciles list prices to reported revenue. Convention, not a defined term.",
      "priority": "amber",
      "module": 6,
      "variants": null
    },
    {
      "term": "Sold-hours utilisation",
      "aliases": [
        "commercial utilisation",
        "billed utilisation",
        "fleet utilisation"
      ],
      "definition": "Share of deployed GPU-hours actually billed",
      "relevance": "Drives merchant economics; 100% by construction on take-or-pay fleet. Distinct from MFU (customer-side efficiency).",
      "priority": "amber",
      "module": 6,
      "variants": null
    },
    {
      "term": "Contribution margin",
      "aliases": [
        "cash contribution",
        "contribution after depreciation",
        "rack margin"
      ],
      "definition": "Revenue less directly attributable costs, here shown before and after depreciation",
      "relevance": "Unit economics test for a rack or site. Universal term; specify the depreciation treatment.",
      "priority": "amber",
      "module": 6,
      "variants": null
    },
    {
      "term": "Asset-light partnership",
      "aliases": [
        "infrastructure partnership",
        "partner capacity",
        "asset-light model"
      ],
      "definition": "Partner funds facility and hardware; Nebius supplies platform and demand for a revenue share, licence fee or commission",
      "relevance": "Introduced July 2026; converts partner capex into take-rate revenue. Company-specific model.",
      "priority": "amber",
      "module": 6,
      "variants": null
    }
  ]
});
