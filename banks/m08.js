// NBIS Module 8 bank. Generated 16 September 2026 from NBIS_M08.pdf (compiled 15 September 2026).
window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
 "bank_version": "2026-09-16",
 "module": 8,
 "module_title": "Financing and capital structure",
 "items": [
  {
   "id": "m08-001",
   "type": "mcq",
   "select": "one",
   "stem": "The June 2025 Nebius convertible notes due 2029 pay a 2.00% coupon. At what percentage of original principal do they redeem at maturity?",
   "options": [
    "115%",
    "120%",
    "125%",
    "130%"
   ],
   "correct": [
    1
   ],
   "explanation": "The 2029 notes accrete to 120% of principal; the 2031 notes accrete to 125% and the September 2025 series to 115%. 130% is the conversion price trigger, not a redemption level. The premium over par is what makes the 2.00% coupon understate the economic cost.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (F-007)",
   "as_of": "2025-06-05",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "convertibles"
  },
  {
   "id": "m08-002",
   "type": "mcq",
   "select": "one",
   "stem": "At what margin was Nebius's first senior secured facility, closed on 17 July 2026, priced?",
   "options": [
    "SOFR plus 2.25%",
    "SOFR plus 4.00%",
    "9.25% fixed",
    "SOFR plus 2.50%",
    "Approximately 5.9% fixed"
   ],
   "correct": [
    3
   ],
   "explanation": "The July 2026 facility priced at SOFR plus 2.50%, maturing 31 October 2030. SOFR plus 2.25% is the floating tranche of CoreWeave DDTL 4.0, the first investment-grade facility in the asset class, which is why the note treats the Nebius print as landing within 25 basis points of it.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Nebius press release, 17 Jul 2026 (F-040)",
   "as_of": "2026-07-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "secured facility"
  },
  {
   "id": "m08-003",
   "type": "mcq",
   "select": "one",
   "stem": "Which rating philosophy applies to CoreWeave DDTL 4.0, the facility rated A3 by Moody's and A (low) by DBRS?",
   "options": [
    "A corporate issue rating notched up from CoreWeave's BB- issuer rating",
    "A structured finance rating on the isolated contract cash flows",
    "A sovereign-linked rating derived from the anchor customer's home jurisdiction and its sovereign ceiling",
    "An unrated private placement with an indicative shadow rating",
    "A rating capped at the parent's issuer default rating"
   ],
   "correct": [
    1
   ],
   "explanation": "DDTL 4.0 carries a structured finance assessment of the ring-fenced contract cash flows, with CoreWeave's own credit largely beside the point. The notched corporate issue rating describes DDTL 5.0 and 5.5, which build from the BB- issuer rating plus a two-notch recovery uplift.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Friedman Substack, Jul 2026 (web-sourced); Fitch commentary, Aug 2026 (web-sourced) (F-080)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "ratings"
  },
  {
   "id": "m08-004",
   "type": "mcq",
   "select": "one",
   "stem": "DDTL 4.0 permits funding up to roughly 102% of cost once a site passes customer acceptance. Why does the note treat this as proof that the underwriting is contract-backed rather than asset-backed?",
   "options": [
    "Because the bad-boy guarantee covers any shortfall between loan and collateral value",
    "Because a lender funding above cost has given the collateral no protective role; the credit is the counterparty's covenant to pay",
    "Because GPU secondary-market prices exceeded the original deployment cost at the time of closing, so the collateral covered the whole advance",
    "Because the structured finance rating allows the lender to ignore loan-to-value limits",
    "Because the excess over cost is cash-collateralised by CoreWeave"
   ],
   "correct": [
    1
   ],
   "explanation": "An advance above 100% of cost cannot be secured by the asset, so the silicon plays no protective role and the entire credit rests on the counterparty's payment obligation. The bad-boy guarantee covers only installation and performance obligations, not a collateral shortfall, so it cannot explain the above-cost advance.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced) (D-011, F-075)",
   "as_of": "2026-03-31",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "underwriting"
  },
  {
   "id": "m08-005",
   "type": "mcq",
   "select": "one",
   "stem": "How does the note characterise, in economic terms, the order in the March 2026 Meta agreement under which Meta committed to purchase up to $15 billion of capacity that Nebius fails to sell to third parties?",
   "options": [
    "A customer prepayment",
    "A completed sale of dedicated capacity",
    "A contingent demand backstop: a capacity put held by Nebius",
    "A sale-and-leaseback of the affected clusters with Meta as lessor and Nebius as lessee",
    "A parent guarantee of the cluster financing"
   ],
   "correct": [
    2
   ],
   "explanation": "The commitment obliges Meta to buy capacity that fails to sell, at pre-agreed terms, so it floor-prices otherwise speculative buildout: a capacity put. It is not a prepayment because no cash is received until the condition is met, and not a sale because Nebius markets the capacity to third parties first.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (subsequent events) (F-093, D-012)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "demand backstop"
  },
  {
   "id": "m08-006",
   "type": "mcq",
   "select": "one",
   "stem": "What role did MUFG take on Nebius's July 2026 senior secured facility?",
   "options": [
    "Structuring agent, sole bookrunner and underwriter",
    "Mandated lead arranger alongside four other banks only",
    "Depository bank for the SPV collection account",
    "Rating adviser and independent engineer",
    "Anchor customer whose contract secures the facility"
   ],
   "correct": [
    0
   ],
   "explanation": "MUFG was structuring agent, sole bookrunner and underwriter, and also one of five mandated lead arrangers with ABN AMRO, Bank of America, Deutsche Bank and HSBC. Describing it as an arranger only understates the role; the anchor customer is an undisclosed investment-grade counterparty, not a bank.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Nebius press release, 17 Jul 2026 (F-042)",
   "as_of": "2026-07-17",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "secured facility"
  },
  {
   "id": "m08-007",
   "type": "mcq",
   "select": "one",
   "stem": "Under the Microsoft Agreement signed on 8 September 2025, fees not paid upfront are invoiced monthly through which date?",
   "options": [
    "December 2026, when the ninth tranche is delivered",
    "October 2030, matching the secured facility maturity",
    "September 2030, five years from signing",
    "October 2031"
   ],
   "correct": [
    3
   ],
   "explanation": "The 20-F states that the remainder after the upfront payments is invoiced monthly through October 2031. October 2030 is the maturity of the July 2026 secured facility, which the note contrasts with the contract invoicing horizon to show debt tenor sitting inside contract tenor.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (F-012)",
   "as_of": "2025-09-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Microsoft Agreement"
  },
  {
   "id": "m08-008",
   "type": "mcq",
   "select": "one",
   "stem": "According to the note's translation table, which project finance concept has no honest neocloud analogue?",
   "options": [
    "Major maintenance and lifecycle capex reserves",
    "Debt service reserve and lockbox accounts",
    "Debt service coverage ratio",
    "Step-in rights, direct agreements and lender security packages",
    "Take-or-pay offtake contracts"
   ],
   "correct": [
    0
   ],
   "explanation": "A GPU fleet's major maintenance is a new fleet at full cost every four to six years, and no current structure reserves for it; the note calls this the single largest hole in the analogy. Lockbox accounts are the cleanest transplant, and DSCR and take-or-pay contracts are load-bearing.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026 (Section F table, F-100)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "translation table"
  },
  {
   "id": "m08-009",
   "type": "mcq",
   "select": "one",
   "stem": "As at August 2026, which feature of CoreWeave DDTL 5.5 does the note identify as the structural inflection that breaks the sector's prior discipline?",
   "options": [
    "It is the first facility rated investment grade",
    "It is the first facility guaranteed by the parent and certain subsidiaries",
    "It is the first facility to use a depository-bank-controlled collection account inside the SPV",
    "Its five-year maturity runs against contracts averaging three years",
    "It abandons the undrawn fee"
   ],
   "correct": [
    3
   ],
   "explanation": "Every prior facility amortised inside its contract; DDTL 5.5 carries roughly five-year debt against three-year contracts, so the last two years of debt service depend on renewal or re-leasing. The first investment-grade facility was DDTL 4.0, and the parent guarantee arrived with DDTL 5.0.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Fitch commentary, Aug 2026 (web-sourced) (F-078)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "DDTL 5.5"
  },
  {
   "id": "m08-010",
   "type": "mcq",
   "select": "one",
   "stem": "At what exercise price per share is the pre-funded warrant that NVIDIA purchased from Nebius on 11 March 2026 exercisable?",
   "options": [
    "$0.0001",
    "$21",
    "$51.45",
    "$95",
    "$138.75"
   ],
   "correct": [
    0
   ],
   "explanation": "A pre-funded warrant carries a nominal exercise price, here $0.0001 per share, because the purchase price of about $2 billion was paid upfront. The $95 figure is the note's implied price per share; $51.45 and $138.75 are the June and September 2025 convertible conversion prices.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (subsequent events) (F-028)",
   "as_of": "2026-03-11",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "vendor equity"
  },
  {
   "id": "m08-011",
   "type": "mcq",
   "select": "one",
   "stem": "As at 30 June 2026, on what basis was Nebius's reported Q2 2026 payback metric of 1 year 10 months calculated?",
   "options": [
    "A cash basis including customer prepayments",
    "An adjusted EBITDA basis net of depreciation",
    "A contracted-value basis over the full contract term",
    "A revenue recognition basis excluding prepayments"
   ],
   "correct": [
    3
   ],
   "explanation": "The Q2 letter calculates payback on a revenue recognition basis excluding prepayments, which the note calls the honest convention. A cash basis including prepayments would be flattered by contract-liability inflows that carry no margin content, which is the strongest misreading.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Q2 2026 shareholder letter, Aug 2026 (F-053)",
   "as_of": "2026-06-30",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "prepayments"
  },
  {
   "id": "m08-012",
   "type": "mcq",
   "select": "one",
   "stem": "As at 15 July 2026, which instrument in the funding stack does the note describe as the one that reduces, rather than raises, Nebius's funding requirement per megawatt?",
   "options": [
    "Partner-owned capacity under the partnerships model",
    "Customer prepayments covering 50% to 60% of associated capex",
    "The at-the-market programme",
    "The senior secured SPV facility closed in July",
    "Convertible notes"
   ],
   "correct": [
    0
   ],
   "explanation": "Under the partnerships model partners finance, own and operate the shell and hardware, so Nebius's own capital need per megawatt falls. Prepayments fund part of Nebius's capex but leave the requirement itself unchanged, so they are the strongest distractor rather than the answer.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Nebius press release, 15 Jul 2026 (F-037, F-038)",
   "as_of": "2026-07-15",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "partnerships model"
  },
  {
   "id": "m08-013",
   "type": "mcq",
   "select": "one",
   "stem": "What is the equity split of the joint venture that owns Meta's Hyperion campus in Louisiana?",
   "options": [
    "Blue Owl 80%, Meta 20%",
    "Meta 80%, Blue Owl 20%",
    "Blue Owl 50%, Meta 50%",
    "Morgan Stanley 80%, Meta 20%",
    "PIMCO 80%, Meta 20%"
   ],
   "correct": [
    0
   ],
   "explanation": "Blue Owl holds 80% and Meta 20% of the JV, which is why the structure is a project-level SPV rather than Meta's own balance sheet. Morgan Stanley arranged the financing and PIMCO took about $18 billion of the bonds; neither holds JV equity.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Press coverage of Hyperion financing, Oct 2025 (web-sourced) (F-082)",
   "as_of": "2025-10",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Hyperion"
  },
  {
   "id": "m08-014",
   "type": "mcq",
   "select": "one",
   "stem": "As at 11 August 2026, CoreWeave's newest facilities price near SOFR plus 2.25% yet its blended interest burden runs near 10%. Which explanation does the note give?",
   "options": [
    "Floating-rate resets on the older facilities have lifted their cost above the original terms",
    "The cheap new money sits on top of the expensive old money rather than replacing it",
    "Interest on the customer prepayment balance is included in reported interest expense",
    "Undrawn fees on the DDTL commitments are charged at the full facility rate"
   ],
   "correct": [
    1
   ],
   "explanation": "Compression on the marginal facility has not compressed the stack because older layers (DDTL 1.0 at about 15%, 9.25% senior notes) remain outstanding beside the new money. The note warns against substituting the marginal rate for the average; prepayments carry no coupon, so they cannot explain the burden.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave Q2 2026 results, 11 Aug 2026 (web-sourced) (D-015, F-064)",
   "as_of": "2026-08-11",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "cost of debt"
  },
  {
   "id": "m08-015",
   "type": "mcq",
   "select": "all",
   "stem": "Under which conditions are the Nebius convertible note series convertible by holders? Select all that apply.",
   "options": [
    "When the share price exceeds a 130% price trigger",
    "On specified corporate events",
    "During the final two months before maturity",
    "At the holder's option at any time after issue",
    "On a downgrade of Nebius's credit rating",
    "Once the ATM programme has been used"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "All series are convertible only on conditions: a 130% price trigger, corporate events and the final two months before maturity, and are issuer-redeemable after a soft-call trigger. Conversion at any time is the strongest misreading; the notes are conditional, which is what keeps the 66 million share overhang contingent.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (F-021)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "convertibles"
  },
  {
   "id": "m08-016",
   "type": "mcq",
   "select": "all",
   "stem": "As at 17 July 2026, which of the following were disclosed in the Nebius press release on its first senior secured facility? Select all that apply.",
   "options": [
    "The facility sits in an SPV backed by deployed GPUs and contracted cash flows from an investment-grade customer",
    "The facility matures on 31 October 2030",
    "The facility plus contract cash flows cover more than 100% of the associated capex",
    "Pricing of SOFR plus 2.50%",
    "The anchor customer is named as Microsoft",
    "A rating of A3 from Moody's"
   ],
   "correct": [
    0,
    1,
    2,
    3
   ],
   "explanation": "The release disclosed the SPV structure, the October 2030 maturity, above-cost coverage and SOFR plus 2.50%. The anchor customer's identity was not disclosed and remains an open item; A3 is the DDTL 4.0 rating, and no rating for the Nebius facility appears in the material reviewed.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Nebius press release, 17 Jul 2026 (F-040, F-041, F-044)",
   "as_of": "2026-07-17",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "secured facility"
  },
  {
   "id": "m08-017",
   "type": "mcq",
   "select": "all",
   "stem": "As at August 2026, which of the following are publicly disclosed protections in the CoreWeave DDTL facilities? Select all that apply.",
   "options": [
    "Ring-fenced SPV borrowers",
    "First-priority security over equipment, the customer contract and associated data centre leases",
    "Depository-bank-controlled accounts",
    "An undrawn fee of 0.5% per annum",
    "The cross-default architecture between the SPVs",
    "The cash sweep percentages"
   ],
   "correct": [
    0,
    1,
    2,
    3
   ],
   "explanation": "The disclosed protections are ring-fenced SPVs, first-priority security, controlled accounts, monthly amortisation after stabilisation and undrawn fees. Cross-default architecture and sweep percentages are not public; the note flags them as open items to raise once inside comparable Nebius documentation.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced); Friedman Substack, Jul 2026 (web-sourced) (F-068, F-081)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "covenants"
  },
  {
   "id": "m08-018",
   "type": "mcq",
   "select": "all",
   "stem": "Which analytical disciplines does the note prescribe for modelling customer prepayments internally? Select all that apply.",
   "options": [
    "Treat operating cash flow before and after changes in contract liabilities as separate lines",
    "Treat deferred revenue as debt-like in a downside case rather than netting it to zero",
    "Flag the implied financing cost inside the prepayment discount as an unknown rather than assuming the capital is cheap",
    "Recognise prepayments as revenue on receipt so that margin reflects the cash",
    "Net contract liabilities against gross debt in leverage analysis"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "The three disciplines are accounting (separate the contract-liability line), credit treatment (deliver-or-refund behaves like debt) and the concession question (an undisclosed cost). Prepayments are recognised rateably as service is delivered, never on receipt, and netting them to zero is the leverage analysis the note calls self-flattering.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Q1 2026 shareholder letter, May 2026; Q2 2026 shareholder letter, Aug 2026 (Section C, F-092, F-094, D-016)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "prepayments"
  },
  {
   "id": "m08-019",
   "type": "mcq",
   "select": "all",
   "stem": "In the note's map of the neocloud funding stack (Figure 1), which of the following are corporate-level instruments with a claim on the whole group? Select all that apply.",
   "options": [
    "Convertible notes",
    "At-the-market programme",
    "Contract-backed SPV facilities",
    "Vendor equity",
    "Leases and colocation",
    "SPV and JV project debt"
   ],
   "correct": [
    0,
    1,
    3
   ],
   "explanation": "Corporate-level instruments (public equity, ATM, convertibles, high yield and vendor equity) claim on the whole group and absorb losses first. Contract-backed facilities, project debt and leases claim on ring-fenced cash flows. Vendor equity is the likeliest error: it is equity in the parent, not hardware credit.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026 (S-001)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "funding stack"
  },
  {
   "id": "m08-020",
   "type": "mcq",
   "select": "all",
   "stem": "As at August 2026, which of the following does the note's synthesis list as genuine structural protections rather than narrative comfort? Select all that apply.",
   "options": [
    "Take-or-pay payment obligations from investment-grade counterparties",
    "Ring-fenced SPVs with perfected security and controlled accounts",
    "Coverage-tested amortisation inside contract tenor",
    "Above-cost financing achieved only after customer acceptance",
    "The headline of more than $40 billion of customer commitments",
    "Management's description of the July facility as a repeatable framework"
   ],
   "correct": [
    0,
    1,
    2,
    3
   ],
   "explanation": "The synthesis lists the protections once: take-or-pay obligations from IG counterparties, ring-fenced SPVs with security and controlled accounts, coverage-tested amortisation inside tenor, above-cost funding only after acceptance, and the prepayment channel. The commitment headline aggregates contracts of differing quality and the framework claim is unverified until further deals print.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Nebius press release, 17 Jul 2026; Q2 2026 shareholder letter, Aug 2026 (Synthesis, D-001, D-002)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "structural protections"
  },
  {
   "id": "m08-021",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following statements do NOT apply to the September 2025 Nebius convertible notes? Select all that do NOT apply.",
   "options": [
    "Two equal series carrying 1.00% and 2.75% coupons",
    "Both series accrete to 115% of principal",
    "Conversion price of approximately $138.75 per share",
    "The series accrete to 120% and 125% of principal",
    "Conversion price of approximately $51.45 per share",
    "Both series redeem at par with no accretion"
   ],
   "correct": [
    3,
    4,
    5
   ],
   "explanation": "The September 2025 series (1.00% due 2030 and 2.75% due 2032) both accrete to 115% with conversion at about $138.75. Accretion to 120% and 125% and conversion at $51.45 belong to the June 2025 notes; redemption at par applies to none of the accreting series.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (F-018)",
   "as_of": "2025-09",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "convertibles"
  },
  {
   "id": "m08-022",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following features do NOT apply to CoreWeave DDTL 4.0, closed on 31 March 2026? Select all that do NOT apply.",
   "options": [
    "Borrowing capacity capped by depreciated GPU value",
    "Full recourse to CoreWeave as parent",
    "Stabilisation at a 1.2x DSCR after customer acceptance, site by site",
    "Loan-to-cost of up to approximately 102%",
    "A corporate issue rating notched up from CoreWeave's BB- issuer rating",
    "Maturity in March 2032"
   ],
   "correct": [
    0,
    1,
    4
   ],
   "explanation": "DDTL 4.0 ties borrowing to execution milestones rather than depreciated GPU value (the DDTL 3.0 frame), is non-recourse with only a bad-boy guarantee, and carries a structured finance rating rather than a notched corporate issue rating. The 1.2x DSCR, 102% LTC and March 2032 maturity all apply.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced); Friedman Substack, Jul 2026 (web-sourced) (F-074, F-075, F-080)",
   "as_of": "2026-03-31",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "DDTL 4.0"
  },
  {
   "id": "m08-023",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following do NOT apply to a customer prepayment as the note characterises it? Select all that do NOT apply.",
   "options": [
    "It is a senior-in-practice customer claim: deliver or refund",
    "It embeds an undisclosed pricing concession",
    "It concentrates delivery risk, because late capacity triggers the contract's remedy machinery",
    "It is recognised as revenue on receipt",
    "It is classified as debt in Nebius's reported capital structure",
    "It is free capital with no economic cost"
   ],
   "correct": [
    3,
    4,
    5
   ],
   "explanation": "A prepayment is a deliver-or-refund claim carrying a hidden concession and concentrated delivery risk. It sits as a contract liability recognised rateably, not as revenue on receipt; it is not classified as debt, although the note says it behaves like debt in a downside; and the concession means it is not free.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Q2 2026 shareholder letter, Aug 2026 (F-092, S-004)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "prepayments"
  },
  {
   "id": "m08-024",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following do NOT apply to the $15 billion unsold-capacity order in the 16 March 2026 Meta agreement? Select all that do NOT apply.",
   "options": [
    "Cash is received by Nebius upfront when the order is signed",
    "It is a completed sale of specified capacity to Meta",
    "Meta's obligation runs from the deployment of each block",
    "The pre-agreed terms are undisclosed",
    "The commitment attaches to specified clusters rather than the whole fleet",
    "Nebius markets the capacity to third parties first"
   ],
   "correct": [
    0,
    1
   ],
   "explanation": "No cash is received until the condition is met and the capacity is marketed to third parties first, so it is neither a prepayment nor a sale; it is a contingent commitment. The obligation running from deployment, the undisclosed terms and the cluster-level attachment are the note's three stated limitations.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (subsequent events) (F-031, D-012, P-004)",
   "as_of": "2026-03-16",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "demand backstop"
  },
  {
   "id": "m08-025",
   "type": "recall",
   "stem": "What undrawn fee per annum applies on the CoreWeave DDTL facilities?",
   "accept": [
    "0.5% per annum",
    "0.5%",
    "0.50%",
    "50bp",
    "50 bps",
    "50bps",
    "50 basis points",
    "half a percent",
    "0.5% p.a."
   ],
   "explanation": "Draws follow the hardware installation schedule and undrawn commitments carry a fee of 0.5% per annum. This is the delayed-draw mechanic that lets funding track installation; a 1% or 2% figure would be a plausible but wrong guess from other loan markets.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced); Friedman Substack, Jul 2026 (web-sourced) (F-068)",
   "as_of": "2026-07",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "DDTL mechanics"
  },
  {
   "id": "m08-026",
   "type": "recall",
   "stem": "Which single rating agency assigned the A+ rating to the Hyperion (Beignet Investor LLC) bonds?",
   "accept": [
    "S&P",
    "Standard & Poor's",
    "Standard and Poors",
    "S and P",
    "S&P Global",
    "S&P Global Ratings"
   ],
   "explanation": "The A+ was assigned by S&P alone, which the note stresses because a single-agency investment-grade rating on a renewal-dependent structure is narrative comfort rather than protection. Moody's and DBRS rated CoreWeave DDTL 4.0, not Hyperion.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Press coverage of Hyperion financing, Oct 2025 (web-sourced) (F-084)",
   "as_of": "2025-10",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Hyperion"
  },
  {
   "id": "m08-027",
   "type": "recall",
   "stem": "At which location does the Microsoft Agreement of 8 September 2025 provide dedicated capacity?",
   "accept": [
    "Vineland, New Jersey",
    "Vineland",
    "Vineland NJ",
    "Vineland New Jersey",
    "Vineland, NJ"
   ],
   "explanation": "The agreement covers dedicated capacity at Vineland, New Jersey, deployed in nine tranches through 2025 and 2026. Kansas City is a leased colocation site in the 20-F and is the likeliest confusion.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (F-010)",
   "as_of": "2025-09-08",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "Microsoft Agreement"
  },
  {
   "id": "m08-028",
   "type": "recall",
   "stem": "Name the special purpose vehicle through which the $27 billion of Hyperion debt was issued in October 2025.",
   "accept": [
    "Beignet Investor LLC",
    "Beignet Investor",
    "Beignet"
   ],
   "explanation": "Morgan Stanley arranged the $27 billion of debt and $2.5 billion of equity through Beignet Investor LLC in a 144A transaction. Blue Owl is the 80% JV equity holder, not the issuing vehicle.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Press coverage of Hyperion financing, Oct 2025 (web-sourced) (F-082)",
   "as_of": "2025-10",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "Hyperion"
  },
  {
   "id": "m08-029",
   "type": "recall",
   "stem": "As at August 2026, which Fitch Recovery Rating band, implying 71% to 90% expected recovery, applies to CoreWeave DDTL 5.5?",
   "accept": [
    "RR2",
    "RR 2",
    "Recovery Rating 2",
    "Recovery Rating RR2"
   ],
   "explanation": "DDTL 5.5 carries Fitch RR2, a two-notch uplift from the BB- issuer rating to BB+. RR1 would imply 91% to 100% recovery and a three-notch uplift; the band matters because it shows the rating is notched from the parent, not independent of it.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Fitch commentary, Aug 2026 (web-sourced) (F-078, M-009)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "ratings"
  },
  {
   "id": "m08-030",
   "type": "recall",
   "stem": "Which SEC registration statement form did Nebius file on 2 May 2025 as the platform for its subsequent registered issuance?",
   "accept": [
    "F-3ASR",
    "F3ASR",
    "Form F-3ASR",
    "F-3",
    "Form F-3"
   ],
   "explanation": "Nebius filed an automatically effective F-3ASR shelf. The F-3 is the foreign private issuer form; S-3 is the domestic equivalent and the likeliest wrong answer. The shelf is what made the ATM programme and the September 2025 offerings possible.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; SEC filing, 2 May 2025 (web-sourced) (F-005)",
   "as_of": "2025-05-02",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "equity"
  },
  {
   "id": "m08-031",
   "type": "recall",
   "stem": "On what date does Nebius's July 2026 senior secured facility mature?",
   "accept": [
    "31 October 2030",
    "October 2030",
    "31 Oct 2030",
    "Oct 2030",
    "31/10/2030",
    "2030-10-31"
   ],
   "explanation": "The facility matures on 31 October 2030 against anchor contract invoicing running into late 2031, so debt tenor sits inside contract tenor. March 2032 is the DDTL 4.0 maturity and the likeliest confusion.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Nebius press release, 17 Jul 2026 (F-040)",
   "as_of": "2026-07-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "secured facility"
  },
  {
   "id": "m08-032",
   "type": "recall",
   "stem": "Under which US GAAP codification topic do Nebius's customer prepayments sit as contract liabilities?",
   "accept": [
    "ASC 606",
    "ASC606",
    "Topic 606",
    "ASC Topic 606"
   ],
   "explanation": "Prepayments are contract liabilities under ASC 606, recognised rateably as service is delivered. IFRS 15 uses the same term but Nebius reports under US GAAP, so IFRS 15 is not accepted; ASC 842 governs leases, not revenue.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026 (Section C, G-008)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "accounting"
  },
  {
   "id": "m08-033",
   "type": "define",
   "stem": "Define principal accretion as it applies to the Nebius convertible notes, in one or two sentences.",
   "model_answer": "Notes issued at par that redeem above par at maturity, so the all-in yield exceeds the coupon; economically the premium is deferred PIK.",
   "rubric": {
    "must": [
     [
      "redeem above par",
      "redeems above par",
      "redemption above par",
      "redeemed above par",
      "above par",
      "above principal",
      "at a premium",
      "redemption premium",
      "more than principal",
      "more than par",
      "120%",
      "125%",
      "115%"
     ],
     [
      "yield exceeds the coupon",
      "yield exceeds coupon",
      "yield is higher than the coupon",
      "coupon understates",
      "understates the cost",
      "higher than the coupon",
      "exceeds the coupon",
      "true cost higher",
      "all in yield",
      "all in cost",
      "economic cost higher",
      "higher yield"
     ]
    ],
    "should": [
     [
      "deferred pik",
      "deferred payment in kind",
      "pik",
      "payment in kind"
     ],
     [
      "issued at par",
      "at par",
      "par"
     ]
    ],
    "should_min": 0,
    "forbid": []
   },
   "explanation": "Accretion means the notes redeem at 120%, 125% or 115% of principal while paying a low coupon, so the redemption premium adds to the coupon and the true cost is materially higher; the note calls it deferred PIK. The common error is quoting the coupon as the cost of capital.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (G-005, F-007, M-001)",
   "as_of": "2026-04-30",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "convertibles"
  },
  {
   "id": "m08-034",
   "type": "define",
   "stem": "Define a bad-boy guarantee in the context of a non-recourse GPU facility such as DDTL 4.0, in one or two sentences.",
   "model_answer": "A guarantee from the parent in a non-recourse deal that covers only specified misconduct or defined performance obligations, such as GPU installation, rather than the whole debt.",
   "rubric": {
    "must": [
     [
      "parent guarantee",
      "guarantee from the parent",
      "parent guarantees",
      "sponsor guarantee",
      "guarantee by the parent",
      "parent",
      "sponsor",
      "coreweave guarantees"
     ],
     [
      "specified misconduct",
      "misconduct",
      "specified obligations",
      "defined performance obligations",
      "performance obligations",
      "installation",
      "only specified",
      "limited to",
      "carve out",
      "carve outs",
      "narrow",
      "limited",
      "specific events",
      "specified events"
     ]
    ],
    "should": [
     [
      "non recourse",
      "nonrecourse",
      "limited recourse",
      "otherwise no recourse"
     ],
     [
      "not the whole debt",
      "rather than the whole debt",
      "not the full debt",
      "not a full guarantee",
      "does not guarantee the debt",
      "not the debt itself"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "full recourse",
      "guarantees the whole debt",
      "guarantees all of the debt",
      "guarantee of the entire",
      "full guarantee of the debt"
     ]
    ]
   },
   "explanation": "The parent is liable only for specified misconduct or defined obligations (in DDTL 4.0, GPU installation and performance), which keeps the facility non-recourse for everything else. The confusion to avoid is a full parent guarantee, which is what DDTL 5.0 carries and DDTL 4.0 does not.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced) (G-009, F-075)",
   "as_of": "2026-03-31",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "covenants"
  },
  {
   "id": "m08-035",
   "type": "define",
   "stem": "Define a take-or-pay capacity contract as used in the Microsoft and Meta agreements, in one sentence.",
   "model_answer": "A contract under which the customer pays the contracted capacity fees irrespective of whether it actually uses the capacity.",
   "rubric": {
    "must": [
     [
      "irrespective of utilisation",
      "irrespective of utilization",
      "irrespective of whether",
      "regardless of utilisation",
      "regardless of utilization",
      "regardless of use",
      "regardless of whether",
      "whether or not used",
      "whether or not it uses",
      "even if unused",
      "even if not used",
      "even if it does not use",
      "without regard to usage",
      "not dependent on usage",
      "regardless of actual usage",
      "irrespective of actual",
      "irrespective of use"
     ]
    ],
    "should": [
     [
      "contracted fees",
      "capacity fees",
      "fixed fees",
      "fees",
      "pays"
     ],
     [
      "customer",
      "offtaker",
      "counterparty",
      "buyer"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "The defining feature is that fees are payable irrespective of actual utilisation, which is what makes the payment obligation load-bearing for lenders. The note warns that enforceability turns on the conditions attached (delivery, availability), not on the label, so the phrase deserves clause-level verification.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (G-007, F-011)",
   "as_of": "2025-09-08",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "contracts"
  },
  {
   "id": "m08-036",
   "type": "define",
   "stem": "Define stabilisation in the context of a contract-backed GPU facility such as DDTL 4.0, in one or two sentences.",
   "model_answer": "The point at which a site passes customer acceptance and the coverage test (1.2x DSCR in DDTL 4.0), unlocking the full advance and starting amortisation.",
   "rubric": {
    "must": [
     [
      "customer acceptance",
      "passes acceptance",
      "acceptance",
      "accepted by the customer",
      "accepted"
     ],
     [
      "coverage test",
      "dscr",
      "debt service coverage",
      "1.2x",
      "1.2 times",
      "coverage ratio",
      "coverage"
     ]
    ],
    "should": [
     [
      "full advance",
      "unlocks funding",
      "unlocking full",
      "full funding",
      "maximum advance",
      "102%",
      "above cost"
     ],
     [
      "starts amortisation",
      "starting amortisation",
      "amortisation begins",
      "amortization begins",
      "amortisation starts",
      "begins to amortise",
      "repayment begins",
      "amortisation"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "Stabilisation is reached when the asset has passed acceptance and the coverage test, so funding to the full advance is released and amortisation starts, site by site. The confusion is with financial close: stabilisation is an operating milestone reached after deployment, not the signing of the facility.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced) (G-010, F-075)",
   "as_of": "2026-03-31",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "DDTL mechanics"
  },
  {
   "id": "m08-037",
   "type": "define",
   "stem": "Define a demand backstop (unsold-capacity commitment) as exemplified by the $15 billion Meta order, in one or two sentences.",
   "model_answer": "A counterparty's commitment to purchase, at pre-agreed terms, capacity that the operator fails to sell to third parties; economically a contingent offtake or capacity put that floor-prices the buildout.",
   "rubric": {
    "must": [
     [
      "fails to sell",
      "unsold capacity",
      "capacity that is not sold",
      "not sold to third parties",
      "remaining capacity",
      "cannot sell",
      "does not sell",
      "left unsold",
      "unsold"
     ],
     [
      "pre agreed terms",
      "pre agreed",
      "agreed terms",
      "agreed price",
      "agreed prices",
      "agreed rates",
      "agreed pricing",
      "at agreed",
      "fixed terms",
      "predetermined terms",
      "predetermined price",
      "set terms",
      "agreed in advance"
     ]
    ],
    "should": [
     [
      "contingent",
      "conditional",
      "only if",
      "put option",
      "capacity put",
      "put"
     ],
     [
      "floor",
      "floor prices",
      "floor priced",
      "price floor",
      "backstop",
      "downside protection"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "The commitment converts speculative merchant buildout into quasi-contracted buildout because Meta must buy what does not sell at pre-agreed terms, while Nebius keeps third-party upside. It is not a prepayment: no cash arrives until the condition is met, and protection attaches only once each cluster is deployed.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (subsequent events) (G-012, F-093)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "demand backstop"
  },
  {
   "id": "m08-038",
   "type": "define",
   "stem": "Define a pre-funded warrant as sold by Nebius to NVIDIA in March 2026, in one or two sentences.",
   "model_answer": "A warrant with a nominal exercise price where the purchase price is paid upfront, giving near-equity exposure without immediate delivery of the shares.",
   "rubric": {
    "must": [
     [
      "nominal exercise price",
      "nominal strike",
      "strike is nominal",
      "exercise price is nominal",
      "nominal exercise",
      "token exercise price",
      "near zero exercise price",
      "0.0001",
      "negligible exercise price",
      "minimal exercise price",
      "nominal price"
     ],
     [
      "paid upfront",
      "paid up front",
      "up front",
      "upfront",
      "purchase price paid",
      "price up front",
      "pays the full price",
      "prepaid",
      "paid in advance",
      "paid at purchase",
      "pre funded",
      "prefunded",
      "funded upfront",
      "paid on issue"
     ]
    ],
    "should": [
     [
      "near equity",
      "equivalent to equity",
      "effectively equity",
      "economically equity",
      "equity like",
      "like equity",
      "quasi equity"
     ],
     [
      "without immediate share delivery",
      "shares not delivered",
      "before the shares are issued",
      "no immediate shares",
      "not yet issued",
      "delivery deferred",
      "without delivering shares"
     ]
    ],
    "should_min": 0,
    "forbid": []
   },
   "explanation": "Because the purchase price is paid on issue and the exercise price is nominal ($0.0001 per share for NVIDIA's 21.1 million shares), the instrument is economically equity even though the shares are not yet delivered. A conventional warrant differs precisely in having a meaningful strike paid on exercise.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (subsequent events) (G-006, F-028)",
   "as_of": "2026-03-11",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "vendor equity"
  },
  {
   "id": "m08-039",
   "type": "define",
   "stem": "Define an at-the-market (ATM) programme as established by Nebius in November 2025, in one or two sentences.",
   "model_answer": "Continuous small-lot issuance of equity into the market off an effective shelf registration at prevailing prices, with no bookbuild.",
   "rubric": {
    "must": [
     [
      "continuous",
      "drip",
      "small lot",
      "small lots",
      "over time",
      "incremental",
      "in small amounts",
      "gradually",
      "ongoing",
      "dribble",
      "periodic"
     ],
     [
      "prevailing prices",
      "prevailing price",
      "market price",
      "market prices",
      "at market",
      "current price",
      "current market",
      "spot price",
      "trading price"
     ]
    ],
    "should": [
     [
      "shelf",
      "effective shelf",
      "registration statement",
      "f 3",
      "shelf registration"
     ],
     [
      "no bookbuild",
      "without a bookbuild",
      "no bookbuilding",
      "without bookbuilding",
      "no discount",
      "no placing",
      "not a placing",
      "no underwriter",
      "no block"
     ]
    ],
    "should_min": 0,
    "forbid": []
   },
   "explanation": "An ATM drips shares into the market off a shelf at prevailing prices rather than pricing a block through a bookbuild; it is slower, quieter and cheaper and signals nothing about timing. The UK analogue is a placing or accelerated bookbuild, but those are discrete transactions and not equivalents.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Q3 2025 results release, 11 Nov 2025 (web-sourced) (G-004, F-024)",
   "as_of": "2025-11-11",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "equity"
  },
  {
   "id": "m08-040",
   "type": "define",
   "stem": "Explain the tail inversion the note identifies between project finance and neocloud financing, in two sentences.",
   "model_answer": "In project finance the asset outlives the debt by decades, so the post-debt tail is equity upside; in a neocloud the depreciating GPU asset's life barely exceeds the contract, so the tail is a risk to be excluded from the base case, not a cushion.",
   "rubric": {
    "must": [
     [
      "outlives the debt",
      "outlive the debt",
      "longer than the debt",
      "beyond the debt",
      "long lived",
      "decades",
      "25 year",
      "long life",
      "asset life exceeds",
      "outlast"
     ],
     [
      "barely exceeds",
      "depreciating",
      "depreciates",
      "obsolescing",
      "obsolescence",
      "obsolete",
      "short life",
      "short lived",
      "used gpu",
      "secondary market",
      "reprices",
      "resale"
     ],
     [
      "risk",
      "not a cushion",
      "excluded from the base case",
      "exclude",
      "zero",
      "no value",
      "do not count",
      "should not be counted"
     ]
    ],
    "should": [
     [
      "equity upside",
      "upside",
      "cushion"
     ],
     [
      "terminal value",
      "renewal",
      "residual value",
      "residual"
     ]
    ],
    "should_min": 0,
    "forbid": []
   },
   "explanation": "PF assumes cash flows outlast financing, so the tail cushions lenders and rewards equity. Neoclouds invert this: asset life barely exceeds contract, contract barely exceeds debt, and terminal value is a used GPU repriced annually by NVIDIA's release cadence. The correct instinct on any renewal assumption is not how big but why any.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026 (D-013, Section F)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "translation table"
  },
  {
   "id": "m08-041",
   "type": "numeric",
   "stem": "The Microsoft Agreement provides for fees of up to $17,392.9 million, including aggregate upfront payments of approximately $6,958.1 million. What share of maximum total fees arrives upfront?",
   "value": 40.0,
   "tolerance_pct": 3,
   "unit": "%",
   "working": "6,958.1 / 17,392.9 = 0.400, i.e. approximately 40% of maximum total contract fees.",
   "explanation": "Two fifths of the largest contract in the company's history arrives as cash in advance. Note the denominator: this is upfront share of contract value, not the 50% to 60% of capex that Q2 2026 prepayments covered, which uses a different denominator and must not be mixed with it.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (M-002, F-013)",
   "as_of": "2025-09-08",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "prepayments"
  },
  {
   "id": "m08-042",
   "type": "numeric",
   "stem": "Using the note's approximation y = c + (R - 1) / T, estimate the all-in yield to maturity of the June 2025 Nebius notes due 2031: coupon 3.00%, redemption at 125% of principal, approximately 6.5 years to maturity. Answer in percent per annum.",
   "value": 6.85,
   "tolerance_pct": 3,
   "unit": "%",
   "working": "3.00% + (1.25 - 1) / 6.5 = 3.00% + 3.85% = approximately 6.8% per annum.",
   "explanation": "The 25% redemption premium annualised over about 6.5 years adds roughly 3.8 points to the 3.00% coupon, giving about 6.8%. Quoting 3.00% as the cost of capital is the common misuse the register flags; the accretion functions as deferred PIK.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (M-001, F-009)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "convertibles"
  },
  {
   "id": "m08-043",
   "type": "numeric",
   "stem": "As at 11 August 2026, CoreWeave guided Q3 2026 interest expense to $860 million to $950 million and carried roughly $35 billion of debt. Annualise the midpoint of the quarterly guidance ($905 million) and express it as a blended cost of debt in percent.",
   "value": 10.3,
   "tolerance_pct": 3,
   "unit": "%",
   "working": "905 x 4 = 3,620 $m run-rate interest; 3,620 / 35,000 = 10.3% blended cost of debt.",
   "explanation": "Annualised interest of about $3.6 billion on $35 billion of debt gives a blended cost near 10%, despite the newest facility pricing at SOFR plus 2.25%. The error to avoid is substituting the marginal spread for the average cost of the stack.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave Q2 2026 results, 11 Aug 2026 (web-sourced) (M-005, F-064)",
   "as_of": "2026-08-11",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "cost of debt"
  },
  {
   "id": "m08-044",
   "type": "numeric",
   "stem": "As at 17 July 2026, sum Nebius's gross external raises since relisting in $bn: $0.70bn December 2024 placement; $1.00bn June 2025 convertibles; $1.15bn September 2025 equity; $3.1625bn September 2025 convertibles; $2.00bn NVIDIA warrant; $4.3375bn March 2026 convertibles; $0.775bn July 2026 secured facility.",
   "value": 13.1,
   "tolerance_pct": 3,
   "unit": "$bn",
   "working": "0.70 + 1.00 + 1.15 + 3.1625 + 2.00 + 4.3375 + 0.775 = 13.125, approximately $13.1bn gross.",
   "explanation": "Cumulative gross external capital is approximately $13.1 billion: equity $3.85 billion including NVIDIA, convertibles about $8.5 billion and secured debt $0.775 billion. The figure excludes the Avride SAFE, ATM proceeds and all prepayments; adding those without disclosure is the register's flagged misuse.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026; Nebius press release, 17 Jul 2026 (M-007, F-045)",
   "as_of": "2026-07-17",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "capital raising"
  },
  {
   "id": "m08-045",
   "type": "numeric",
   "stem": "As at 31 December 2025, one Nebius customer accounted for $597.0 million, or 83%, of gross accounts receivable. What was total gross accounts receivable at year-end, in $m?",
   "value": 719,
   "tolerance_pct": 3,
   "unit": "$m",
   "working": "597.0 / 0.83 = 719.3, approximately $719m of gross accounts receivable.",
   "explanation": "Grossing up $597.0 million at 83% gives about $719 million. The concentration matters because the same investment-grade anchors that make facilities cheap make the revenue base narrow; Customer A was 25% and Customer B 15% of FY2025 revenue.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026 (M-010, F-056)",
   "as_of": "2025-12-31",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "concentration"
  },
  {
   "id": "m08-046",
   "type": "numeric",
   "stem": "A contract-backed facility applies DDTL 4.0's stabilisation test of 1.2x DSCR. If contracted cash flow available for debt service is $60 million per period, what is the maximum scheduled debt service (principal plus interest) per period that passes the test, in $m?",
   "value": 50,
   "tolerance_pct": 3,
   "unit": "$m",
   "working": "DSCR = CFADS / (P + I); 60 / 1.2 = 50, so scheduled debt service of at most $50m per period.",
   "explanation": "At 1.2x coverage, $60 million of CFADS supports $50 million of debt service. The misuse the register warns of is inflating CFADS with merchant, renewal-dependent or non-IG revenue: a passing ratio with a weak numerator definition is no protection.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced) (M-003, F-075)",
   "as_of": "2026-03-31",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "DSCR"
  },
  {
   "id": "m08-047",
   "type": "sequence",
   "stem": "As at August 2026, place Nebius's external capital raises since relisting in chronological order.",
   "steps": [
    "December 2024: $700.0m private placement of treasury shares",
    "June 2025: $1.0bn accreting convertible notes",
    "September 2025: $1.15bn public equity plus $3.16bn convertibles",
    "11 March 2026: approximately $2.0bn NVIDIA pre-funded warrant",
    "18 to 20 March 2026: approximately $4.34bn convertible notes",
    "July 2026: approximately $775m first senior secured SPV facility",
    "Q3 2026: ATM programme first used"
   ],
   "explanation": "Equity and converts funded the speculative phase; the first secured debt arrived only after the anchor contract entered servicing, and the ATM followed. The NVIDIA warrant (11 March) preceded the March convertibles (18 to 20 March) by a week, which is the order most easily reversed.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026; Nebius press release, 17 Jul 2026; Q2 2026 shareholder letter, Aug 2026 (P-001)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "capital raising"
  },
  {
   "id": "m08-048",
   "type": "sequence",
   "stem": "Place the cash flow cycle of a contract-backed DDTL facility in order, from contract signing to release of residual cash.",
   "steps": [
    "Customer signs a take-or-pay contract with the SPV borrower",
    "Lenders fund delayed draws into the SPV against installation milestones",
    "SPV acquires and deploys the GPU fleet as first-lien collateral",
    "Site passes customer acceptance and the facility stabilises at the coverage test",
    "Customer pays contracted fees into the depository-controlled collection account",
    "Collection account funds monthly amortisation and interest to lenders",
    "Residual cash above the coverage test releases to the parent"
   ],
   "explanation": "Draws track installation, stabilisation follows acceptance, and only then does contracted cash flow through the controlled account to service debt, with residual released to the parent last. Placing the customer payments before acceptance is the common error: fees start once capacity is accepted.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced); Nebius press release, 17 Jul 2026 (P-002)",
   "as_of": "2026-07-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "DDTL mechanics"
  },
  {
   "id": "m08-049",
   "type": "sequence",
   "stem": "Place the project finance order of operations, as the note says Nebius has applied it, in sequence.",
   "steps": [
    "Equity and convertibles fund the speculative build phase",
    "Anchor take-or-pay contract signed with an investment-grade customer",
    "Capacity delivered and enters its servicing phase",
    "Secured SPV debt raised against deployed assets and contracted cash flows",
    "Debt amortises inside contract tenor with residual to the parent"
   ],
   "explanation": "Construction risk sits on equity and operating cash flows are levered afterwards, which is why the July 2026 secured facility came only after the anchor contract entered servicing. Raising secured debt before delivery would be the reverse of the discipline the note credits Nebius with.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026; Nebius press release, 17 Jul 2026 (P-006, F-097)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "capital raising"
  },
  {
   "id": "m08-050",
   "type": "sequence",
   "stem": "Place the lender underwriting sequence for a neocloud facility, as set out in section E of the note, in order.",
   "steps": [
    "Assess contract quality: take-or-pay strength, conditionality and termination rights",
    "Match debt tenor to contract tenor and both to asset life",
    "Assess counterparty credit: investment grade versus unrated AI-native",
    "Assign residual value, typically at zero reliance",
    "Size debt as the present value of contracted non-conditional net cash flows sculpted inside tenor",
    "Impose structural controls: SPV, security, collection account, DSCR tests, amortisation, guarantees"
   ],
   "explanation": "Contract quality and tenor set the bankable cash flows, counterparty credit sets the advance rate, residual value is set to zero, sizing follows, and documentation comes last. Sizing before the residual-value decision is the error, since it would let terminal value creep into capacity.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026 (P-007, S-007)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "underwriting"
  },
  {
   "id": "m08-051",
   "type": "slot",
   "stem": "Complete the anatomy of a contract-backed SPV facility (Figure 2): which component inside the ring-fenced borrower receives the customer's fees and funds debt service?",
   "nodes": [
    "Parent opco (outside the ring-fence)",
    "SPV borrower (ring-fenced) holding the GPU fleet as first-lien collateral",
    null,
    "Debt service to lenders"
   ],
   "layout": "stack",
   "choices": [
    "Depository-bank-controlled collection account",
    "Investment-grade customer",
    "Bad-boy guarantee",
    "Convertible note trustee"
   ],
   "correct": [
    "Depository-bank-controlled collection account"
   ],
   "explanation": "The customer pays the SPV's depository-controlled collection account, which funds amortisation and interest before residual flows up to the parent. The customer is an external party, not a component inside the SPV, and the bad-boy guarantee runs from the parent, not through the cash waterfall.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced); Nebius press release, 17 Jul 2026 (S-002)",
   "as_of": "2026-07-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "SPV anatomy"
  },
  {
   "id": "m08-052",
   "type": "slot",
   "stem": "Complete the Meta Hyperion project-level structure from JV equity holders down to bondholders.",
   "nodes": [
    "Meta (20% JV equity, lessee)",
    null,
    "JV owning the campus",
    null,
    "Bondholders (PIMCO approximately $18bn)"
   ],
   "layout": "stack",
   "choices": [
    "Blue Owl (80% JV equity)",
    "Beignet Investor LLC ($27bn debt fully amortising to 2049, A+)",
    "Morgan Stanley (arranger)",
    "S&P (rating agency)",
    "CoreWeave parent opco"
   ],
   "correct": [
    "Blue Owl (80% JV equity)",
    "Beignet Investor LLC ($27bn debt fully amortising to 2049, A+)"
   ],
   "explanation": "Blue Owl holds 80% of the JV beside Meta's 20%, and Beignet Investor LLC issued the $27 billion of A+ rated debt to bondholders led by PIMCO. Morgan Stanley arranged and S&P rated; neither owns equity or issues the debt, and CoreWeave has no role in the structure.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Press coverage of Hyperion financing, Oct 2025 (web-sourced) (S-005, F-082)",
   "as_of": "2025-10",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "Hyperion"
  },
  {
   "id": "m08-053",
   "type": "slot",
   "stem": "Complete the rating architecture for a corporate issue rating on a GPU-backed facility such as CoreWeave DDTL 5.5.",
   "nodes": [
    "Issuer default rating (BB-)",
    null,
    "Issue rating BB+ / Ba2 (DDTL 5.0 and 5.5)"
   ],
   "layout": "flow",
   "choices": [
    "Recovery notching (RR2, two notches)",
    "Structured finance (sf) assessment of isolated cash flows",
    "DSCR stabilisation test",
    "Greenshoe exercise"
   ],
   "correct": [
    "Recovery notching (RR2, two notches)"
   ],
   "explanation": "A corporate issue rating builds from the parent's issuer default rating plus notches implied by expected recovery: RR2 (71% to 90%) adds two notches, BB- to BB+. The sf assessment is the other philosophy, applied to DDTL 4.0 on isolated cash flows, and does not sit in this chain.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Friedman Substack, Jul 2026 (web-sourced); Fitch commentary, Aug 2026 (web-sourced) (S-006, M-009)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "ratings"
  },
  {
   "id": "m08-054",
   "type": "match",
   "stem": "Match each metric from the note's formula register to its formula in symbols.",
   "pairs": [
    [
     "Debt service coverage ratio",
     "CFADS / (P + I)"
    ],
    [
     "Loan-to-cost (advance rate)",
     "D / C"
    ],
    [
     "Blended cost of debt",
     "I_annual / D"
    ],
    [
     "All-in yield of an accreting convertible",
     "c + (R - 1) / T"
    ],
    [
     "Gross EBITDA leverage (Fitch convention)",
     "D_ex-leases / EBITDA"
    ]
   ],
   "explanation": "DSCR divides contracted cash flow available for debt service by scheduled principal and interest; LTC divides facility amount by deployment cost; blended cost divides annualised interest by total debt; the accreting yield adds annualised redemption premium to coupon; Fitch leverage uses gross debt excluding leases.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026 (M-001, M-003, M-004, M-005, M-008)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "metrics"
  },
  {
   "id": "m08-055",
   "type": "match",
   "stem": "Match each glossary term to its plain-English definition.",
   "pairs": [
    [
     "Delayed draw term loan",
     "Committed term facility drawn in stages against milestones, with an undrawn fee"
    ],
    [
     "Pre-funded warrant",
     "Warrant with a nominal exercise price and the purchase price paid upfront"
    ],
    [
     "Stabilisation",
     "The point at which an asset passes acceptance and coverage tests, unlocking full advance"
    ],
    [
     "Demand backstop",
     "Counterparty commitment to purchase capacity the operator fails to sell, at pre-agreed terms"
    ]
   ],
   "explanation": "Each definition is the glossary register's own. The two most easily swapped are stabilisation and the DDTL itself: the DDTL is the instrument drawn against milestones, while stabilisation is the later point at which acceptance and coverage tests unlock the full advance and start amortisation.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026 (G-001, G-006, G-010, G-012)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "glossary"
  },
  {
   "id": "m08-056",
   "type": "match",
   "stem": "Match each rating concept to what it measures or represents.",
   "pairs": [
    [
     "Structured finance (sf) rating",
     "Assesses ring-fenced contract cash flows on their own, with the parent's credit largely irrelevant"
    ],
    [
     "Corporate issue rating",
     "Notches from the parent's issuer rating according to expected recovery on the instrument"
    ],
    [
     "Recovery Rating RR2",
     "Fitch band implying 71% to 90% expected recovery, worth two notches"
    ],
    [
     "Issuer default rating",
     "The borrower's own standalone rating, BB- for CoreWeave"
    ]
   ],
   "explanation": "The sf rating asks whether the customer will pay; the corporate issue rating asks what is recovered when the borrower does not, building from the issuer default rating by recovery notching. Reading a notched-up secured rating as independence from parent risk is the register's flagged misuse.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Friedman Substack, Jul 2026 (web-sourced); Fitch commentary, Aug 2026 (web-sourced) (G-011, M-009, S-006)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "ratings"
  },
  {
   "id": "m08-057",
   "type": "classify",
   "stem": "As at August 2026, classify the following statement from the note.",
   "statement": "Nebius's July 2026 secured facility is a repeatable framework against more than $40 billion of customer commitments from investment-grade counterparties including Microsoft and Meta.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 2,
   "explanation": "This is management's positioning of the facility, a forward-looking assertion not yet evidenced by a second deal on the same terms; the note calls it narrative until the second and third deals print. It is not a fact: only the closed facility's own coverage statement is verifiable against documents.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; Nebius press release, 17 Jul 2026; Q2 2026 shareholder letter, Aug 2026 (F-043, D-007)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "classification"
  },
  {
   "id": "m08-058",
   "type": "classify",
   "stem": "As at August 2026, classify the following statement from the note.",
   "statement": "The implied financing cost embedded in the pricing concessions that customers extract in exchange for prepayments cannot be modelled from public data.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 1,
   "explanation": "The register classifies this as an assumption, a flagged unknown: the note infers that rational counterparties charge for prepaying but cannot observe the cost. It is not a fact from a primary source, and it is more than an interpretation because the quantity is asserted to be unmodellable rather than derived.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026 (F-094, D-008)",
   "as_of": "2026-08",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "classification"
  },
  {
   "id": "m08-059",
   "type": "classify",
   "stem": "Classify the following feature of the CoreWeave DDTL facilities.",
   "statement": "Depository-bank-controlled collection accounts inside the SPV into which the customer pays contracted fees directly.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 0,
   "explanation": "A controlled collection account exists in executed documents for a closed facility and diverts cash before the borrower can touch it; the note calls it the cleanest transplant from project finance. Narrative comfort would be a forward claim, such as the repeatable framework description, that no document yet enforces.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave 8-K 30 Mar 2026 and DDTL 4.0 investor deck (web-sourced) (D-002, Section F table)",
   "as_of": "2026-08",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "classification"
  },
  {
   "id": "m08-060",
   "type": "classify",
   "stem": "As at 30 June 2026, classify the following statement.",
   "statement": "CoreWeave's revenue backlog was approximately $104 billion, excluding more than $25 billion of new third-quarter commitments.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 1,
   "explanation": "A backlog total aggregates contracts of differing quality, tenor and conditionality without conferring enforceability against any named obligor, so it is narrative comfort. The structural protection is the individual take-or-pay obligation from an investment-grade counterparty, which the headline number does not distinguish.",
   "source": "Module 8 briefing note (17 Aug 2026), compiled 15 Sep 2026; CoreWeave Q2 2026 results, 11 Aug 2026 (web-sourced) (D-001, F-066)",
   "as_of": "2026-06-30",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "classification"
  }
 ],
 "glossary": [
  {
   "term": "Delayed draw term loan (DDTL)",
   "aliases": [
    "DDTL",
    "delayed-draw facility",
    "phased-drawdown term facility",
    "HPC-backed DDTL"
   ],
   "definition": "Committed term facility drawn in stages against milestones, with an undrawn fee, so funding tracks hardware installation.",
   "relevance": "The sector's core secured template; Nebius's July 2026 facility follows the pattern. US loan-market term; UK usage would describe the mechanics as a phased-drawdown term facility rather than adopt a distinct term of art.",
   "priority": "red",
   "module": 8,
   "variants": null
  },
  {
   "term": "Advance rate / loan-to-cost",
   "aliases": [
    "LTC",
    "LTV",
    "borrowing base",
    "advance"
   ],
   "definition": "Debt provided as a share of collateral value or project cost.",
   "relevance": "DDTL 4.0 reached approximately 102% LTC on an investment-grade contract; Nebius's facility plus contract flows cover more than 100% of capex. LTC and LTV usage is consistent across markets; borrowing base is the US asset-based-lending framing of the same idea, not a jurisdictional variant.",
   "priority": "red",
   "module": 8,
   "variants": null
  },
  {
   "term": "Contract-backed (HPC-backed) facility",
   "aliases": [
    "GPU-backed loan",
    "HPC infrastructure-backed facility",
    "contract-secured SPV facility"
   ],
   "definition": "Secured lending underwritten on assigned customer contract cash flows, with hardware liens as secondary support.",
   "relevance": "The instrument Nebius will scale against its $40bn-plus commitments. Marketed in the US as GPU-backed or HPC infrastructure-backed; the substance is receivables-and-contract finance, and the marketing labels are not jurisdictional variants.",
   "priority": "red",
   "module": 8,
   "variants": null
  },
  {
   "term": "At-the-market (ATM) programme",
   "aliases": [
    "ATM",
    "ATM offering",
    "at-the-market equity programme",
    "drip issuance"
   ],
   "definition": "Continuous small-lot equity issuance into the market off an effective shelf at prevailing prices.",
   "relevance": "Nebius programme: up to 25m shares, established November 2025, first used Q3 2026. A US mechanism off an F-3 or S-3 shelf; the nearest UK equivalents, placings and accelerated bookbuilds under standing authorities, are discrete transactions rather than equivalents.",
   "priority": "amber",
   "module": 8,
   "variants": null
  },
  {
   "term": "Principal accretion (convertibles)",
   "aliases": [
    "accreting convertible",
    "accreted principal amount",
    "redemption premium",
    "deferred PIK"
   ],
   "definition": "Notes issued at par that redeem above par, so yield exceeds coupon; economically deferred PIK.",
   "relevance": "June 2025 notes redeem at 120% and 125%, September 2025 at 115%; coupons materially understate cost. US indentures use accreted principal amount; the UK convertible market more often expresses the same economics through redemption premium language.",
   "priority": "red",
   "module": 8,
   "variants": null
  },
  {
   "term": "Pre-funded warrant",
   "aliases": [
    "PFW",
    "pre-paid warrant",
    "nominal-strike warrant"
   ],
   "definition": "Warrant with a nominal exercise price, purchase price paid upfront; near-equity without immediate share delivery.",
   "relevance": "NVIDIA's $2bn instrument over 21.1m shares, March 2026. A US PIPE-market instrument with no standard UK retail equivalent.",
   "priority": "amber",
   "module": 8,
   "variants": null
  },
  {
   "term": "Take-or-pay capacity contract",
   "aliases": [
    "take-or-pay",
    "TOP",
    "capacity commitment",
    "committed capacity agreement"
   ],
   "definition": "Customer pays contracted fees irrespective of utilisation.",
   "relevance": "Both the Microsoft and Meta agreements use this construction. Same term across markets, from energy offtake practice; enforceability turns on the conditions, not the label.",
   "priority": "red",
   "module": 8,
   "variants": null
  },
  {
   "term": "Contract liability / deferred revenue",
   "aliases": [
    "deferred revenue",
    "contract liability (ASC 606 / IFRS 15)",
    "customer prepayment",
    "payments on account",
    "unearned revenue"
   ],
   "definition": "Customer cash received before service delivery, held as a balance-sheet liability and recognised rateably.",
   "relevance": "Microsoft upfronts approximately $7.0bn; more than $9bn of 2026 prepayments expected; inflates operating cash flow on receipt. Contract liability is the ASC 606 term under US GAAP, which Nebius applies; IFRS 15 uses the same term; payments on account is older UK usage.",
   "priority": "red",
   "module": 8,
   "variants": null
  },
  {
   "term": "Bad-boy guarantee",
   "aliases": [
    "bad-boy carve-out",
    "recourse carve-out guarantee",
    "non-recourse carve-out"
   ],
   "definition": "Parent guarantee in a non-recourse deal covering specified misconduct or defined performance obligations only.",
   "relevance": "DDTL 4.0's parent guarantee covers GPU installation and performance. Bad-boy guarantee is the US non-recourse real-estate term; UK documentation frames the same protection as recourse carve-outs.",
   "priority": "amber",
   "module": 8,
   "variants": {
    "UK": "recourse carve-out guarantee",
    "EU": "recourse carve-out guarantee",
    "US": "bad-boy guarantee"
   }
  },
  {
   "term": "Stabilisation (facility context)",
   "aliases": [
    "stabilisation test",
    "stabilised advance",
    "acceptance-based stabilisation"
   ],
   "definition": "The point at which an asset passes acceptance and coverage tests, unlocking full advance and starting amortisation.",
   "relevance": "DDTL 4.0: 1.2x DSCR post customer acceptance, site by site. Imported from US real-estate construction lending.",
   "priority": "amber",
   "module": 8,
   "variants": null
  },
  {
   "term": "Structured finance vs corporate issue rating",
   "aliases": [
    "sf rating",
    "structured finance rating",
    "corporate issue rating",
    "recovery rating (RR1 to RR6)",
    "notching"
   ],
   "definition": "An sf rating assesses ring-fenced cash flows on their own; a corporate issue rating notches from the parent's rating via expected recovery.",
   "relevance": "Determines whether a Nebius facility prices off the customer's credit or off Nebius's. Recovery Ratings (RR1 to RR6) are Fitch convention; the sf suffix is a global regulatory designation.",
   "priority": "amber",
   "module": 8,
   "variants": null
  },
  {
   "term": "Demand backstop (unsold-capacity commitment)",
   "aliases": [
    "capacity put",
    "contingent offtake",
    "unsold-capacity purchase commitment",
    "demand floor"
   ],
   "definition": "Counterparty commitment to purchase capacity the operator fails to sell, at pre-agreed terms.",
   "relevance": "The $15bn order in the March 2026 Meta agreement; converts speculative buildout into floor-priced buildout. No standard market term yet; economically a contingent offtake or capacity put.",
   "priority": "red",
   "module": 8,
   "variants": null
  }
 ]
});
