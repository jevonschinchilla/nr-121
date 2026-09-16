// NBIS bank: Module 09, Metrics, returns, valuation and sensitivities. Authored 16 September 2026 from NBIS_M09.pdf (compiled 15 September 2026).
window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
  "bank_version": "2026-09-16",
  "module": 9,
  "module_title": "Metrics, returns, valuation and sensitivities",
  "items": [
    {
      "id": "m09-001",
      "type": "mcq",
      "select": "one",
      "stem": "How does Nebius define annualised run-rate revenue (ARR) in its 2026 shareholder letters?",
      "options": [
        "AI cloud revenue from the last month of the quarter multiplied by 12",
        "Quarterly AI cloud revenue multiplied by four",
        "Contracted annual value of all signed customer agreements",
        "Trailing twelve-month AI cloud revenue",
        "Average monthly AI cloud revenue across the quarter multiplied by 12"
      ],
      "correct": [
        0
      ],
      "explanation": "The footnote in both 2026 letters defines ARR as AI cloud revenue from the last month of the quarter multiplied by 12. Quarterly revenue times four is the neighbouring construction the note contrasts it with: in Q2 2026 that gave $2.33 billion against $3.0 billion of ARR, because the exit month ran above the quarterly average.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 shareholder letter, 12 August 2026; Q1 2026 shareholder letter, 13 May 2026 (F-017)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "ARR"
    },
    {
      "id": "m09-002",
      "type": "mcq",
      "select": "one",
      "stem": "Nebius's Q2 2026 payback disclosure carries two footnoted qualifications. Which one does the note judge to be aggressive, because it imports delivery and construction risk into a metric that reads as achieved?",
      "options": [
        "Excluding prepayments from the calculation",
        "Including contracted capacity not yet built",
        "Measuring on a revenue-recognition basis rather than cash",
        "Using historical rather than Q2 2026 pricing",
        "Excluding central costs such as platform R&D"
      ],
      "correct": [
        1
      ],
      "explanation": "The payback is based on forecast costs and contracted capacity including capacity not yet built, so unbuilt capacity carries delivery and construction risk into a figure that reads as achieved. Excluding prepayments is the other qualification and is conservative: cash timing cannot manufacture a short payback, so it is the strongest distractor but points the wrong way.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 shareholder letter, 12 August 2026 (F-002, F-003, F-004)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Payback"
    },
    {
      "id": "m09-003",
      "type": "mcq",
      "select": "one",
      "stem": "Which of the following does the note classify as a structural protection against GPU obsolescence risk, rather than narrative comfort?",
      "options": [
        "The statement that unsold 2027 capacity could be placed at current prices",
        "Adjusted EBITDA margin expansion in the AI cloud segment",
        "Meta's up-to-$15 billion backstop order on unsold capacity",
        "Management's stated trajectory toward 20 to 30% EBIT margins",
        "NVIDIA's position that A100 units remain under multi-year commitments"
      ],
      "correct": [
        2
      ],
      "explanation": "The Meta backstop order obliges an enforceable counterparty to purchase capacity left unsold to third parties for five years from deployment, so it is a protection. The statement that unsold 2027 capacity could be placed in the market is a forecast of merchant demand with no counterparty, which the note labels narrative comfort.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (F-010, F-011)",
      "as_of": "2026-03-13",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Structural protection"
    },
    {
      "id": "m09-004",
      "type": "mcq",
      "select": "one",
      "stem": "Why does the note insist on unlevered project IRR rather than a levered figure when assessing a GPU deployment vintage?",
      "options": [
        "Unlevered IRR removes the reinvestment assumption entirely",
        "Unlevered IRR is the figure Nebius discloses for each vintage",
        "Levered IRR ignores the time value of money",
        "Levered IRR is easily flattered by debt in the structure",
        "Unlevered IRR is insensitive to prepayment timing"
      ],
      "correct": [
        3
      ],
      "explanation": "A levered IRR rises with debt in the structure without any change in the project's economics, so the note insists on unlevered project IRR for selection. The reinvestment assumption is a separate weakness that both levered and unlevered IRR share, so the first option is wrong; Nebius discloses payback, not IRR, at vintage level.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (F-013, D-018)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "IRR"
    },
    {
      "id": "m09-005",
      "type": "mcq",
      "select": "one",
      "stem": "As at 31 December 2025, what share of Nebius's remaining performance obligations was expected to be recognised in the 24 months to December 2027?",
      "options": [
        "39%",
        "61%",
        "33%",
        "15%",
        "28%"
      ],
      "correct": [
        4
      ],
      "explanation": "The 2025 Form 20-F states that 28% of the $21,333.0 million of RPO is expected to be recognised within the 24 months to December 2027. The strongest distractor, 39%, is the share expected in months 25 to 48; the remainder falls thereafter.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (F-025)",
      "as_of": "2025-12-31",
      "time_sensitive": true,
      "difficulty": 1,
      "topic": "RPO"
    },
    {
      "id": "m09-006",
      "type": "mcq",
      "select": "one",
      "stem": "Among the items Nebius adds back in arriving at adjusted EBITDA, which exclusion does the note judge to be right and important rather than one to challenge?",
      "options": [
        "Revaluation gains on equity securities, including ClickHouse",
        "Share-based compensation, which the note treats as recurring real compensation",
        "Acquisition and transaction-related costs",
        "Depreciation and amortisation",
        "Interest income and expense"
      ],
      "correct": [
        0
      ],
      "explanation": "Excluding the ClickHouse revaluation gains ($598.9 million in FY2025, $781 million in Q1 2026) is right because they would otherwise distort every margin. The note challenges the SBC add-back, which is recurring real compensation of $102.5 million in Q2 2026, and the transaction-related add-back that absorbed $115.9 million of Eigen AI-linked expense.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 shareholder letter, 12 August 2026; Q2 2026 results release, 12 August 2026 (F-032, F-033, F-034, F-035)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Adjusted EBITDA"
    },
    {
      "id": "m09-007",
      "type": "mcq",
      "select": "one",
      "stem": "By approximately how much does the extension of server useful lives from four to five years reduce Nebius's 2026 depreciation on the installed base at December 2025?",
      "options": [
        "$102.5 million",
        "$167.6 million",
        "$191.0 million",
        "$259.7 million",
        "$115.9 million"
      ],
      "correct": [
        1
      ],
      "explanation": "The 2025 Form 20-F quantifies the prospective change as approximately $167.6 million of lower 2026 depreciation on the December 2025 installed base. $259.7 million is Q2 2026 D&A, the strongest distractor because both concern depreciation; $102.5 million is Q2 SBC and $191.0 million is Q2 product development expense.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (F-048)",
      "as_of": "2025-12-31",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "Useful life"
    },
    {
      "id": "m09-008",
      "type": "mcq",
      "select": "one",
      "stem": "Why does the note describe EV/EBITDA as close to meaningless when comparing CoreWeave with Equinix, even though both are described as data centre businesses?",
      "options": [
        "Equinix reports under IFRS rather than US GAAP, so the EBITDA definitions differ",
        "CoreWeave's adjusted EBITDA is unaudited and non-GAAP",
        "Their asset lives and maintenance capex intensity differ sharply",
        "Equinix's EBITDA is stated after share-based compensation",
        "CoreWeave's revenue is growing far faster than Equinix's"
      ],
      "correct": [
        2
      ],
      "explanation": "A dollar of Equinix EBITDA converts largely to distributable cash because the assets are 20-to-40-year shells with recurring capex near 3% of revenue, whereas neocloud EBITDA must first fund a five-year hardware refresh. EV/EBITDA is only comparable across similar asset lives and maintenance intensity; growth rates affect the multiple but do not make it incomparable.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; web sources cited in the note, 11 to 18 August 2026 (F-084, F-085, D-013)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "EV/EBITDA"
    },
    {
      "id": "m09-009",
      "type": "mcq",
      "select": "one",
      "stem": "In the illustrative 100 MW cluster model, power cost ranks last among the value drivers. What is the note's explanation?",
      "options": [
        "The model assumes power is fully passed through to customers under the contracted ACV",
        "Power is procured under fixed long-term contracts in the model",
        "Nebius owns the majority of its contracted power sites",
        "Power is only about 3% of cluster revenue; depreciating silicon is what matters",
        "The model assumes a PUE of 1.0, which eliminates overhead"
      ],
      "correct": [
        3
      ],
      "explanation": "At $60 per MWh on a 1.2 PUE, power is roughly 3% of revenue in the model, so its NPV swing ($184 million) is the smallest; the cost that matters for a GPU cloud is the depreciating hardware. Nebius's ownership of contracted power is a company claim about site control, not the reason power ranks last in a cluster model.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; illustrative sensitivity model built for the note, 18 August 2026 (F-110, F-111, F-114)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Sensitivity"
    },
    {
      "id": "m09-010",
      "type": "mcq",
      "select": "one",
      "stem": "As at 17 August 2026, with Nebius shares near $278 and the September 2025 convertibles convertible at about $138.75, what does the note say is the internally consistent enterprise value treatment?",
      "options": [
        "Convert the notes into roughly 23 million additional shares and remove the debt from EV",
        "Treat the notes as debt at face value and leave the diluted share count entirely unchanged",
        "Treat the notes as debt at accreted value and add 23 million shares",
        "Exclude the notes from both debt and the share count until conversion"
      ],
      "correct": [
        0
      ],
      "explanation": "With the strike deeply in the money, the notes will convert, so consistency requires adding roughly 23 million shares and removing the debt. Keeping the debt in EV while also adding the shares double-counts the instrument; treating the notes as debt with an unchanged share count overstates EV and understates dilution.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; web sources cited in the note, 11 to 18 August 2026 (F-070, F-071, M-018)",
      "as_of": "2026-08-17",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "EV measurement"
    },
    {
      "id": "m09-011",
      "type": "mcq",
      "select": "one",
      "stem": "In the revenue evidential hierarchy the note sets out, which layer ranks weakest in evidential quality?",
      "options": [
        "Recognised revenue",
        "Customer commitments announced by press release",
        "Remaining performance obligations disclosed in the Form 20-F",
        "Deferred revenue"
      ],
      "correct": [
        1
      ],
      "explanation": "Commitments are the press-release layer: over $40 billion, unaudited, and including the up-to-$15 billion Meta backstop. RPO is audited under ASC 606, deferred revenue is cash actually received, and recognised revenue is earned, so quality ranks in reverse order of size. RPO is the nearest confusion because it is also forward-looking, but it is audited.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q2 2026 shareholder letter, 12 August 2026 (F-028, S-001)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "Evidential hierarchy"
    },
    {
      "id": "m09-012",
      "type": "mcq",
      "select": "one",
      "stem": "As at 18 August 2026, why does the note say every through-cycle ROIC claim for a neocloud, bullish or bearish, is a model output rather than an observation?",
      "options": [
        "ROIC cannot be computed while group returns sit around zero",
        "NOPAT is not disclosed at vintage level by any neocloud",
        "No neocloud has yet completed a full buy-earn-refresh cycle on a modern cohort",
        "The invested capital denominator is currently dominated by assets that are not yet earning"
      ],
      "correct": [
        2
      ],
      "explanation": "Through-cycle ROIC needs an observed cohort taken from purchase through earning to refresh at generation N+1 prices, and no neocloud has completed that at scale. The denominator being dominated by assets not yet earning is the note's separate reason why level ROIC is uninformative today; it does not explain why through-cycle claims are unobservable.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (F-053, P-006)",
      "as_of": "2026-08-18",
      "time_sensitive": true,
      "difficulty": 2,
      "topic": "ROIC"
    },
    {
      "id": "m09-013",
      "type": "mcq",
      "select": "all",
      "stem": "Which of the following statements about Nebius's Q2 2026 payback disclosure apply? Select all that apply.",
      "options": [
        "It is calculated on a revenue-recognition basis excluding prepayments",
        "It is based on forecast costs rather than incurred costs",
        "It includes contracted capacity not yet built",
        "It includes an allocation of central costs such as platform R&D",
        "It is an audited figure",
        "It is calculated on a cash-received basis"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "The two footnotes state that payback excludes prepayments and is based on forecast costs and contracted capacity, including capacity not yet built. Site-level return metrics exclude central costs, so the R&D allocation is wrong; the figure sits in a shareholder letter and is not audited, and it is on a revenue-recognition, not cash, basis.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 shareholder letter, 12 August 2026 (F-002, F-003, F-016)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Payback"
    },
    {
      "id": "m09-014",
      "type": "mcq",
      "select": "all",
      "stem": "Which of the following statements about Nebius's remaining performance obligations (RPO) as disclosed in the 2025 Form 20-F apply? Select all that apply.",
      "options": [
        "The figure includes estimated variable consideration",
        "Contracts with an original duration of one year or less are excluded",
        "It is an audited figure",
        "It includes the up-to-$15 billion Meta backstop order as a conventional order",
        "It exceeds the customer commitments cited in press releases",
        "It equals deferred revenue at the balance sheet date"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "RPO includes estimated variable consideration, excludes contracts of one year or less, and is audited under ASC 606. The backstop sits in the commitments layer as a floor mechanism, not a conventional order; commitments exceed RPO, not the reverse; and deferred revenue is only the cash-received subset ($1,577.5 million against $21,333.0 million).",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (F-024, F-026, F-028, P-002)",
      "as_of": "2025-12-31",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "RPO"
    },
    {
      "id": "m09-015",
      "type": "mcq",
      "select": "all",
      "stem": "Which of the following are excluded from Nebius's definition of adjusted EBITDA? Select all that apply.",
      "options": [
        "Share-based compensation",
        "Revaluation gains on equity securities",
        "Depreciation and amortisation",
        "Cost of revenue",
        "Product development expense",
        "Power costs at colocation sites"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "Adjusted EBITDA is net income from continuing operations before D&A, share-based compensation, transaction-related costs, interest, equity-method results, revaluation gains, other income and tax. Cost of revenue, product development and power are operating costs that remain inside adjusted EBITDA; product development is the nearest confusion because it is platform R&D above the vintage.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 shareholder letter, 12 August 2026 (F-032)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "Adjusted EBITDA"
    },
    {
      "id": "m09-016",
      "type": "mcq",
      "select": "all",
      "stem": "Which of the following are assumptions in the note's illustrative 100 MW cluster sensitivity model? Select all that apply.",
      "options": [
        "$32 million per MW of hardware capex",
        "85% blended utilisation",
        "A 12% discount rate",
        "$12 million per MW of contracted ACV",
        "A five-year economic life",
        "A 25% steady-state EBIT margin"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "The model assumes $32 million per MW capex, $20 million per MW ACV over a three-year term, 85% utilisation, a six-year economic life and a 12% discount rate. $12 million per MW is Nebius's disclosed 2026 base ACV, not the model input; the 25% EBIT margin belongs to the reverse DCF arithmetic, not the cluster model.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; illustrative sensitivity model built for the note, 18 August 2026 (F-109)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Sensitivity"
    },
    {
      "id": "m09-017",
      "type": "mcq",
      "select": "all",
      "stem": "As at 17 July 2026, which of the following instruments form part of the Nebius funding stack described in the note? Select all that apply.",
      "options": [
        "A $775 million senior secured facility at SOFR plus 2.50%",
        "A $2 billion NVIDIA equity investment in Q1 2026",
        "$4.3 billion of convertibles issued in March 2026",
        "A $3.1 billion delayed-draw term loan raised in May 2026",
        "A high-yield bond issue maturing in 2030",
        "$1.15 billion of equity raised in September 2025"
      ],
      "correct": [
        0,
        1,
        2,
        5
      ],
      "explanation": "The stack comprises the June, September and March convertibles ($8.5 billion face), the September 2025 equity, the NVIDIA investment, the ATM and the July 2026 secured facility. The $3.1 billion delayed-draw term loan is CoreWeave's, the strongest distractor; Nebius had issued no high-yield bonds in the period the note covers.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q1 2026 shareholder letter, 13 May 2026; Q2 2026 shareholder letter, 12 August 2026; secured debt press release, 17 July 2026 (F-060, F-062, F-063, F-065, P-004)",
      "as_of": "2026-07-17",
      "time_sensitive": true,
      "difficulty": 2,
      "topic": "Funding"
    },
    {
      "id": "m09-018",
      "type": "mcq",
      "select": "all",
      "stem": "As at 18 August 2026, which of the following are among the three measurable questions to which the note says the Nebius debate reduces? Select all that apply.",
      "options": [
        "Whether ARR reaches $7 to 9 billion by year-end 2026",
        "Whether five-year useful lives survive the Vera Rubin transition",
        "Whether the full-stack software layer sustains a pricing premium over bare metal",
        "Whether connected power reaches 5 GW by year-end 2026",
        "Whether ClickHouse completes an initial public offering",
        "Whether share-based compensation falls below 10% of revenue"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "The synthesis names ARR reaching $7 to 9 billion, five-year lives surviving the Vera Rubin transition, and the software premium over bare metal. The 5 GW figure is the contracted power target, not connected power (guided at 0.8 to 1.0 GW), so that option confuses the two definitions; the other two are not in the note.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (F-132, F-106, F-100)",
      "as_of": "2026-08-18",
      "time_sensitive": true,
      "difficulty": 2,
      "topic": "Sector debate"
    },
    {
      "id": "m09-019",
      "type": "mcq",
      "select": "all_not",
      "stem": "Which of the following characterisations of Nebius's ARR, as the note describes it, do NOT apply?",
      "options": [
        "It is contracted revenue",
        "It is a stock of value",
        "It is backlog",
        "It is a velocity gauge",
        "It is non-GAAP",
        "It is unaudited"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "ARR annualises one month of recognised revenue: a customer can roll off, so it is not contracted; it is a rate, not a stock; and it is not backlog, which is contracted future revenue. The note describes it as a velocity gauge that is unaudited and non-GAAP, so those three characterisations apply.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (F-022, M-001, D-001)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "ARR"
    },
    {
      "id": "m09-020",
      "type": "mcq",
      "select": "all_not",
      "stem": "Which of the following do NOT apply to connected power as the note defines it?",
      "options": [
        "Secured by land and power commitments only",
        "A press-release metric rather than the revenue-relevant one",
        "Already consuming power and revenue-capable",
        "Built and energised",
        "The measure against which realised revenue per MW should be computed"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "Connected power is capacity that is built and energised, and it is the revenue-relevant denominator for realised revenue per MW. Secured by land and power commitments describes contracted power, the press-release metric; consuming and revenue-capable describes active power, the layer below connected in the hierarchy.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q1 2026 shareholder letter, 13 May 2026 (D-007, S-007, M-016)",
      "as_of": "2026-03-31",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Power hierarchy"
    },
    {
      "id": "m09-021",
      "type": "mcq",
      "select": "all_not",
      "stem": "As at 13 August 2026, which of the following do NOT apply to a data centre REIT's EBITDA, as the note contrasts it with neocloud EBITDA?",
      "options": [
        "It must fund a five-year hardware refresh before anything is distributable",
        "It rests on assets whose economic life is disputed between two and six years",
        "It converts largely to distributable cash",
        "It runs against 20-to-40-year shells",
        "Recurring capex is guided at roughly 3% of revenue"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "REIT EBITDA converts largely to distributable cash because the assets are long-life shells and recurring capex is guided near 3% of revenue. Funding a five-year refresh and resting on silicon with a disputed two-to-six-year economic life are properties of neocloud EBITDA; the first is the strongest confusion because both businesses are labelled data centres.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; web sources cited in the note, 11 to 18 August 2026 (F-081, F-084, D-013)",
      "as_of": "2026-08-13",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "EV/EBITDA"
    },
    {
      "id": "m09-022",
      "type": "mcq",
      "select": "all_not",
      "stem": "Which of the following do NOT apply to payback as a return metric, as the note assesses it?",
      "options": [
        "It captures the value earned in the tail after cash recovery",
        "It embeds a reinvestment-rate assumption for the next GPU generation",
        "It distinguishes contracted dollars from merchant dollars",
        "It says nothing about what happens after the capital is recovered",
        "It is the most honest disclosure Nebius could give at vintage level"
      ],
      "correct": [
        0,
        1,
        2
      ],
      "explanation": "Payback stops at cash recovery, so it ignores the tail and treats contracted and merchant dollars as equal quality. The reinvestment assumption is IRR's weakness, not payback's, and is the strongest confusion because both are return metrics. The note does call payback the most honest disclosure Nebius could give, while also the most limited.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (F-013, F-014, D-006, M-010)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Payback"
    },
    {
      "id": "m09-023",
      "type": "recall",
      "stem": "Nebius's 2025 ARR disclosures annualised the core infrastructure business. Which segment do the 2026 disclosures annualise?",
      "accept": [
        "Nebius AI cloud",
        "AI cloud",
        "AI cloud segment",
        "Nebius AI cloud segment"
      ],
      "fuzzy": true,
      "explanation": "The 2026 letters annualise the Nebius AI cloud segment, whereas 2025 disclosures annualised the core infrastructure business. The substance is continuous but a time series should record the wording change; core infrastructure is the wrong answer for 2026 because it is the superseded label.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q1 2026 shareholder letter, 13 May 2026 (F-018)",
      "as_of": "2026-03-31",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "ARR"
    },
    {
      "id": "m09-024",
      "type": "recall",
      "stem": "According to the note, what share of value sits in the terminal period in a DCF of a company at Nebius's stage?",
      "accept": [
        "80 to 90%",
        "80-90%",
        "80 to 90 per cent",
        "80% to 90%",
        "80 to 90 percent",
        "eighty to ninety per cent"
      ],
      "fuzzy": true,
      "explanation": "The note puts 80 to 90% of DCF value in the terminal period for a company at this stage, which is why it calls the DCF a disguised exit multiple. A lower figure such as 50 to 60% would describe a mature business with a longer explicit forecast, not a neocloud in build-out.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (F-086)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "DCF"
    },
    {
      "id": "m09-025",
      "type": "recall",
      "stem": "As at 31 March 2026, Nebius management describes a trajectory toward what EBIT margin range in the Q1 2026 shareholder letter?",
      "accept": [
        "20 to 30%",
        "20-30%",
        "20 to 30 per cent",
        "20% to 30%",
        "20 to 30 percent",
        "twenty to thirty per cent"
      ],
      "fuzzy": true,
      "explanation": "The Q1 2026 letter describes a trajectory toward 20 to 30% EBIT margins, which the note adopts as the right yardstick because it is stated after depreciation. The nearest confusion is the roughly 40% adjusted EBITDA margin guided for FY2026, which is measured before D&A and is not an EBIT figure.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q1 2026 shareholder letter, 13 May 2026 (F-046)",
      "as_of": "2026-03-31",
      "time_sensitive": true,
      "difficulty": 1,
      "topic": "EBIT margin"
    },
    {
      "id": "m09-026",
      "type": "recall",
      "stem": "What margin over SOFR does Nebius's first secured facility of July 2026 carry?",
      "accept": [
        "2.50%",
        "2.5%",
        "250 basis points",
        "250bp",
        "250 bps",
        "250bps",
        "plus 2.50%",
        "SOFR plus 2.50%",
        "SOFR + 2.50%"
      ],
      "fuzzy": true,
      "explanation": "The $775 million senior secured facility, led by MUFG, is priced at SOFR plus 2.50% and matures on 31 October 2030. The 2.75% coupon belongs to the September 2025 convertibles due 2032, the nearest figure a reader might confuse with the facility margin.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; secured debt press release, 17 July 2026 (F-065)",
      "as_of": "2026-07-17",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "Funding"
    },
    {
      "id": "m09-027",
      "type": "recall",
      "stem": "As at August 2026, which investor expanded a short position against Nebius after the Q2 2026 print, describing the stock as what the top of a boom looks like?",
      "accept": [
        "Michael Burry",
        "Burry",
        "Mike Burry"
      ],
      "fuzzy": true,
      "explanation": "Michael Burry, who in November 2025 estimated that large cloud firms understate AI depreciation by about $176 billion across 2026 to 2028, expanded his Nebius short after the Q2 print as the stock surged 34%. He appears in the note only in his public role as a named short seller.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; web sources cited in the note, 11 to 18 August 2026 (F-119)",
      "as_of": "2026-08",
      "time_sensitive": true,
      "difficulty": 1,
      "topic": "Sector debate"
    },
    {
      "id": "m09-028",
      "type": "recall",
      "stem": "Under which US GAAP codification topic is Nebius's ClickHouse stake carried at cost and remeasured on observable rounds?",
      "accept": [
        "ASC 321",
        "ASC321",
        "Topic 321",
        "ASC Topic 321"
      ],
      "fuzzy": true,
      "explanation": "The measurement alternative under ASC 321 carries private equity stakes at cost, remeasured on observable transactions; the January 2026 ClickHouse Series D triggered the $781 million Q1 2026 remeasurement. ASC 606 is the revenue standard governing RPO and is the nearest wrong codification reference in this module.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q1 2026 shareholder letter, 13 May 2026 (G-011, F-088)",
      "as_of": "2026-03-31",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "Sum of the parts"
    },
    {
      "id": "m09-029",
      "type": "recall",
      "stem": "Which return metric does the note call the most honest disclosure Nebius could give at vintage level and simultaneously the most limited?",
      "accept": [
        "Payback",
        "payback period",
        "cash payback",
        "capex payback",
        "payback (Nebius basis)"
      ],
      "fuzzy": true,
      "explanation": "Payback is the only vintage-level return Nebius discloses; the note calls it the most honest and the most limited, because it says nothing about the tail and here includes unbuilt capacity. IRR and MOIC are the alternatives discussed but neither is disclosed by Nebius.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (F-014, M-010, G-007)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Payback"
    },
    {
      "id": "m09-030",
      "type": "recall",
      "stem": "What term does the note use for Meta's obligation to purchase Nebius capacity left unsold to third parties?",
      "accept": [
        "Backstop order",
        "backstop",
        "backstop arrangement",
        "capacity floor",
        "Meta backstop",
        "take-or-pay on unsold capacity"
      ],
      "fuzzy": true,
      "explanation": "The up-to-$15 billion backstop order obliges Meta to purchase capacity left unsold to third parties for five years from deployment; the note calls it a floor mechanism rather than a conventional order. Take-or-pay is its cousin in energy offtake but is not the term the 20-F uses for this arrangement.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (F-010, G-012)",
      "as_of": "2026-03-13",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "Structural protection"
    },
    {
      "id": "m09-031",
      "type": "define",
      "stem": "Define ARR on the Nebius basis.",
      "model_answer": "ARR is AI cloud revenue in the final month of the quarter multiplied by 12; it is a run-rate, not contracted revenue.",
      "rubric": {
        "must": [
          [
            "final month",
            "last month",
            "final month of the quarter",
            "last month of the quarter",
            "exit month",
            "one month"
          ],
          [
            "multiplied by 12",
            "times 12",
            "times twelve",
            "annualised",
            "x 12",
            "multiplied by twelve"
          ]
        ],
        "should": [
          [
            "AI cloud",
            "AI cloud revenue",
            "AI cloud segment",
            "segment revenue"
          ],
          [
            "run-rate",
            "run rate",
            "not contracted",
            "velocity gauge",
            "not backlog"
          ]
        ],
        "should_min": 1,
        "forbid": []
      },
      "explanation": "Nebius takes AI cloud revenue from the last month of the quarter and multiplies by 12. A competent answer names the single final month and the annualisation; the common error is to describe ARR as contracted or recurring revenue in the SaaS sense, which Nebius's run-rate construction is not.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 shareholder letter, 12 August 2026 (G-001, F-017, M-001)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "ARR"
    },
    {
      "id": "m09-032",
      "type": "define",
      "stem": "Define a backstop order as used in the Meta 2026 agreement.",
      "model_answer": "An obligation on Meta to purchase capacity that is left unsold to third parties, providing a floor under merchant risk on specified clusters.",
      "rubric": {
        "must": [
          [
            "purchase",
            "buy",
            "take",
            "obliged to purchase",
            "obligation to purchase",
            "must purchase"
          ],
          [
            "unsold",
            "left unsold",
            "not sold",
            "not placed",
            "remains unsold",
            "unsold capacity"
          ]
        ],
        "should": [
          [
            "third parties",
            "third party",
            "other customers",
            "the market"
          ],
          [
            "floor",
            "floor mechanism",
            "floor under",
            "backstop",
            "protection"
          ],
          [
            "five years",
            "5 years",
            "from deployment"
          ]
        ],
        "should_min": 1,
        "forbid": []
      },
      "explanation": "A backstop order obliges the counterparty to purchase capacity left unsold to third parties, here for five years from deployment and up to $15 billion; it is a floor mechanism sitting in the commitments layer, not a conventional order. Describing it as firm ordered capacity confuses it with the $12 billion of dedicated-cluster orders.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (G-012, F-010, S-008)",
      "as_of": "2026-03-13",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Structural protection"
    },
    {
      "id": "m09-033",
      "type": "define",
      "stem": "Define remaining performance obligations (RPO).",
      "model_answer": "RPO is the transaction price allocated to performance obligations under contract that are not yet satisfied; it is the audited ASC 606 counterpart to press-release commitments.",
      "rubric": {
        "must": [
          [
            "transaction price",
            "contract price",
            "contracted revenue",
            "contract value",
            "revenue allocated",
            "contracted amount"
          ],
          [
            "unsatisfied",
            "not yet satisfied",
            "remaining",
            "yet to be delivered",
            "not yet delivered",
            "undelivered",
            "not yet recognised",
            "not yet recognized",
            "future"
          ],
          [
            "performance obligations",
            "performance obligation",
            "obligations under contract",
            "contractual obligations",
            "under contract",
            "contracted"
          ]
        ],
        "should": [
          [
            "audited",
            "ASC 606",
            "IFRS 15",
            "accounting"
          ],
          [
            "variable consideration",
            "one year or less",
            "sub-one-year",
            "excludes contracts"
          ]
        ],
        "should_min": 0,
        "forbid": []
      },
      "explanation": "RPO is the transaction price allocated to unsatisfied performance obligations under contract, audited under ASC 606, including estimated variable consideration and excluding contracts of one year or less. The common confusion is with company-defined backlog or press-release commitments, which are broader and unaudited.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (G-002, M-004, F-026)",
      "as_of": "2025-12-31",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "RPO"
    },
    {
      "id": "m09-034",
      "type": "define",
      "stem": "Define deferred revenue as it arises from customer prepayments at Nebius.",
      "model_answer": "Deferred revenue is cash received from customers before delivery of the compute; it is recorded as a liability to provide the service and is not earned margin.",
      "rubric": {
        "must": [
          [
            "cash received",
            "received in advance",
            "paid in advance",
            "prepaid",
            "prepayment",
            "prepayments",
            "advance payment",
            "advances",
            "cash collected"
          ],
          [
            "before delivery",
            "not yet delivered",
            "not yet been delivered",
            "not been delivered",
            "not delivered",
            "still to be delivered",
            "undelivered",
            "ahead of delivery",
            "in advance of delivery",
            "before the service",
            "before providing",
            "prior to delivery",
            "yet to be delivered",
            "not yet provided",
            "future delivery",
            "before the compute"
          ]
        ],
        "should": [
          [
            "liability",
            "obligation",
            "owed",
            "obliges delivery"
          ],
          [
            "not earned",
            "not free money",
            "not revenue",
            "not margin",
            "unearned"
          ],
          [
            "contract liabilities",
            "contract liability"
          ]
        ],
        "should_min": 1,
        "forbid": []
      },
      "explanation": "Deferred revenue is cash received before delivery and a liability to provide compute; at Nebius it is customer financing against a delivery obligation, $1,577.5 million at end-2025. The confusion to avoid is treating it as earned revenue or as free cash: it funds capex but obliges delivery.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (G-004, F-030, F-031, D-003)",
      "as_of": "2025-12-31",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Deferred revenue"
    },
    {
      "id": "m09-035",
      "type": "define",
      "stem": "Define payback on the Nebius basis, including both footnoted qualifications.",
      "model_answer": "The months until cumulative revenue less operating cost covers the capex, calculated excluding prepayments and on forecast costs and contracted capacity including capacity not yet built.",
      "rubric": {
        "must": [
          [
            "covers capex",
            "covers the capex",
            "equals capex",
            "recover capex",
            "recovers capex",
            "recovered capex",
            "recover the capex",
            "capex recovered",
            "capital recovered",
            "recovers the investment",
            "recover the investment",
            "recovered the investment",
            "covers the investment",
            "capex is recovered",
            "cover capex",
            "paid back",
            "pays back",
            "recoup",
            "recouped",
            "recovery of capex",
            "capital is recovered",
            "investment is recovered"
          ],
          [
            "excluding prepayments",
            "excludes prepayments",
            "prepayments excluded",
            "without prepayments",
            "net of prepayments",
            "ignoring prepayments",
            "not including prepayments",
            "prepayments are excluded"
          ],
          [
            "contracted capacity",
            "not yet built",
            "unbuilt",
            "forecast costs",
            "forecast contracted",
            "capacity not yet built",
            "including unbuilt"
          ]
        ],
        "should": [
          [
            "months",
            "years",
            "time",
            "period",
            "how long"
          ],
          [
            "revenue less operating cost",
            "revenue less opex",
            "operating cash",
            "cash flow",
            "revenue less cost"
          ]
        ],
        "should_min": 0,
        "forbid": []
      },
      "explanation": "Payback is the time until cumulative revenue less operating cost covers capex. Nebius's version excludes prepayments (conservative) and is based on forecast costs and contracted capacity including capacity not yet built (aggressive). Quoting the 1 year 10 month figure without those two qualifications is the misuse the note warns against.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 shareholder letter, 12 August 2026 (G-007, M-010, F-002, F-003)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "Payback"
    },
    {
      "id": "m09-036",
      "type": "define",
      "stem": "Define terminal value in a DCF.",
      "model_answer": "Terminal value is the value of all cash flows beyond the explicit forecast period; in a neocloud DCF it dominates the result and depends on refresh-cycle economics.",
      "rubric": {
        "must": [
          [
            "beyond the explicit forecast",
            "beyond the forecast",
            "after the forecast period",
            "beyond the projection",
            "after the explicit period",
            "beyond the forecast horizon",
            "after the forecast horizon",
            "beyond the projection period",
            "after the explicit forecast",
            "post forecast"
          ],
          [
            "cash flows",
            "cash flow",
            "value of all",
            "future value",
            "continuing value"
          ]
        ],
        "should": [
          [
            "dominates",
            "80 to 90",
            "most of the value",
            "majority of value",
            "bulk of the value"
          ],
          [
            "refresh",
            "capex",
            "steady state",
            "steady-state",
            "exit multiple"
          ]
        ],
        "should_min": 0,
        "forbid": []
      },
      "explanation": "Terminal value captures all cash flows beyond the explicit forecast; for Nebius it holds 80 to 90% of DCF value and is hostage to unknowable refresh-cycle capex ratios and the steady-state EBIT margin. It is not the sum of the explicit-period cash flows, the confusion a weak answer makes.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (G-014, F-086)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 1,
      "topic": "DCF"
    },
    {
      "id": "m09-037",
      "type": "define",
      "stem": "Define MOIC and state its principal limitation.",
      "model_answer": "MOIC is cumulative cash returned divided by capital invested; it ignores time and the cost of capital, so a slow 1.8x can look adequate.",
      "rubric": {
        "must": [
          [
            "cash returned",
            "cash returned divided",
            "returned divided by",
            "distributions",
            "cash back",
            "cash received",
            "cumulative cash",
            "money returned",
            "returned over"
          ],
          [
            "capital invested",
            "invested capital",
            "capex",
            "investment",
            "capital deployed",
            "money invested",
            "amount invested"
          ]
        ],
        "should": [
          [
            "ignores time",
            "ignoring time",
            "no time value",
            "time value",
            "timing",
            "undiscounted",
            "not discounted"
          ],
          [
            "cost of capital",
            "discount rate",
            "1.8x",
            "slow"
          ]
        ],
        "should_min": 1,
        "forbid": []
      },
      "explanation": "MOIC divides cumulative cash returned by capital invested, ignoring time and the cost of capital, so a slow 1.8x can masquerade as adequate. The note uses it as the tail-value check alongside payback; it is not an annualised rate, which is where a reader confuses it with IRR.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (G-008, M-011, F-014)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "MOIC"
    },
    {
      "id": "m09-038",
      "type": "define",
      "stem": "Define the measurement alternative under ASC 321 as applied to Nebius's ClickHouse stake.",
      "model_answer": "Private equity stakes are carried at cost and remeasured only when an observable round or transaction provides a new price, which is how the January 2026 Series D produced the $781 million ClickHouse gain.",
      "rubric": {
        "must": [
          [
            "at cost",
            "carried at cost",
            "cost basis",
            "historical cost",
            "cost less impairment"
          ],
          [
            "observable",
            "observable round",
            "observable price",
            "observable transaction",
            "new round",
            "funding round",
            "priced round"
          ],
          [
            "remeasured",
            "remeasure",
            "remeasurement",
            "adjusted",
            "revalued",
            "marked",
            "stepped up",
            "written up"
          ]
        ],
        "should": [
          [
            "private",
            "unlisted",
            "equity stake",
            "minority stake"
          ],
          [
            "ClickHouse",
            "Series D",
            "$781",
            "781"
          ]
        ],
        "should_min": 0,
        "forbid": []
      },
      "explanation": "Under the ASC 321 measurement alternative, a private stake without a readily determinable fair value is carried at cost less impairment and remeasured only on observable price changes; the January 2026 ClickHouse Series D produced the $781 million Q1 2026 gain. It is not continuous fair value through P&L, which is the IFRS 9 treatment.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q1 2026 shareholder letter, 13 May 2026 (G-011, F-088, D-014)",
      "as_of": "2026-03-31",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Sum of the parts"
    },
    {
      "id": "m09-039",
      "type": "numeric",
      "stem": "As at 30 June 2026, Nebius reported ARR of $3,000 million and Q2 2026 group revenue of $582.3 million. By how much, in $m, does ARR exceed annualised Q2 revenue?",
      "value": 671,
      "tolerance_pct": 3,
      "unit": "$m",
      "working": "Annualised Q2 revenue = 4 x 582.3 = 2,329.2; gap = 3,000 - 2,329.2 = 670.8, about $671m.",
      "explanation": "Annualising the quarter gives $2,329 million, so ARR exceeds it by about $671 million. The gap is the intra-quarter ramp: June revenue of $250 million ran roughly 30% above the Q2 monthly average of $192 million. Dividing ARR by 12 gives the month, not the gap, which is the common wrong route.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 results release, 12 August 2026; Q2 2026 shareholder letter, 12 August 2026 (M-003, F-021)",
      "as_of": "2026-06-30",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "ARR"
    },
    {
      "id": "m09-040",
      "type": "numeric",
      "stem": "As at 30 June 2026, Nebius reported Q2 2026 revenue of $582.3 million and total operating costs and expenses of $758.2 million. What is the derived GAAP operating income in $m? Enter a loss as a negative number.",
      "value": -175.9,
      "tolerance_pct": 3,
      "unit": "$m",
      "working": "EBIT = revenue less total operating costs = 582.3 - 758.2 = -175.9.",
      "explanation": "Revenue less total operating costs and expenses gives an operating loss of $175.9 million, coexisting with adjusted EBITDA of +$236.2 million; D&A of $259.7 million does most of the bridging. Subtracting D&A from adjusted EBITDA alone gives about -$23.5 million and omits SBC and transaction costs, which is the error to avoid.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 results release, 12 August 2026 (M-006, F-039)",
      "as_of": "2026-06-30",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "EBIT"
    },
    {
      "id": "m09-041",
      "type": "numeric",
      "stem": "As at 30 June 2026, Nebius reported H1 2026 operating cash flow of $4,504.1 million and capex of $8,130.3 million. What was H1 2026 free cash flow in $bn? Enter an outflow as a negative number.",
      "value": -3.626,
      "tolerance_pct": 3,
      "unit": "$bn",
      "working": "FCF = OCF - capex = 4,504.1 - 8,130.3 = -3,626.2 $m, about -$3.6bn.",
      "explanation": "Free cash flow was roughly minus $3.6 billion in six months. The operating cash flow line is inflated by customer prepayments, so it must not be read as earned margin; the error to avoid is netting only the Q2 figure of $2,246.1 million, which gives a materially larger outflow.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 results release, 12 August 2026 (M-009, F-055)",
      "as_of": "2026-06-30",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "Free cash flow"
    },
    {
      "id": "m09-042",
      "type": "numeric",
      "stem": "As at 30 June 2026, Nebius H1 2026 capex was $8,130.3 million. At a five-year straight-line life, roughly how much additional annual depreciation, in $m, does that spend imply once in service?",
      "value": 1626,
      "tolerance_pct": 3,
      "unit": "$m",
      "working": "8,130.3 / 5 = 1,626.1 $m per year, about $1.6bn.",
      "explanation": "Dividing $8,130 million by five years gives about $1.6 billion of additional annual depreciation before any further spend, which is why the note says D&A is still catching up. Using the superseded four-year life gives $2,033 million; the five-year life applies to hardware installed from January 2026.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 results release, 12 August 2026; 2025 Form 20-F, filed 30 April 2026 (F-045, F-009)",
      "as_of": "2026-06-30",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "Depreciation"
    },
    {
      "id": "m09-043",
      "type": "numeric",
      "stem": "As at 12 August 2026, Nebius guides year-end 2026 ARR of $7 to 9 billion, and June 2026 monthly AI cloud revenue was $250 million. Using the top of the range, $9,000 million, what multiple of June's monthly revenue must December 2026 monthly revenue reach? Enter the multiple as a bare number.",
      "value": 3.0,
      "tolerance_pct": 3,
      "unit": "x",
      "working": "Required December month = 9,000 / 12 = 750 $m; 750 / 250 = 3.0x.",
      "explanation": "The top of the guide implies a December month of $750 million, three times June's $250 million; the bottom of the range implies $583 million, or 2.3x. Comparing the annual guide directly with June ARR of $3.0 billion also gives 3.0x at the top, but the note frames the step as a monthly-revenue multiple over six months.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q1 2026 shareholder letter, 13 May 2026; Q2 2026 shareholder letter, 12 August 2026 (F-098, P-003)",
      "as_of": "2026-08-12",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "Guidance bridge"
    },
    {
      "id": "m09-044",
      "type": "numeric",
      "stem": "As at 18 August 2026, take the midpoint of Nebius's year-end 2026 ARR guide, $8,000 million, and the midpoint of guided connected power, 900 MW. What realised revenue per connected MW, in $m per MW, does that imply?",
      "value": 8.89,
      "tolerance_pct": 3,
      "unit": "$m per MW",
      "working": "8,000 / 900 = 8.89 $m per connected MW, inside the note's $7 to 11 million range.",
      "explanation": "$8 billion of ARR across 900 MW gives about $8.9 million per connected MW, consistent with the disclosed $12 million base ACV after ramp timing and mix. Dividing by the 5 GW contracted target instead gives $1.6 million, the misuse the formula register flags: revenue per MW is measured against connected, not contracted, power.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q1 2026 shareholder letter, 13 May 2026 (M-016, F-101)",
      "as_of": "2026-08-18",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "Guidance bridge"
    },
    {
      "id": "m09-045",
      "type": "numeric",
      "stem": "As at 17 August 2026, the note's reverse DCF takes an enterprise value of $75 billion and a 12% discount rate to derive required steady-state unlevered free cash flow. Assuming a 25% EBIT margin and a 20% tax rate, what steady-state revenue in $bn does that require?",
      "value": 45,
      "tolerance_pct": 3,
      "unit": "$bn",
      "working": "Required FCF = 75 x 12% = 9 $bn; required revenue = 9 / (25% x (1 - 20%)) = 9 / 0.20 = 45 $bn.",
      "explanation": "$75 billion at 12% requires $9 billion of steady-state free cash flow; at a 25% margin after 20% tax that needs $45 billion of revenue, the top of the note's $40 to 45 billion range and roughly 14x the 2026 guidance midpoint. Ignoring tax gives $36 billion. This is what must be true, not a forecast.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (M-015, F-087, P-005)",
      "as_of": "2026-08-17",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "DCF"
    },
    {
      "id": "m09-046",
      "type": "numeric",
      "stem": "Nebius's September 2025 convertibles have a face value of $3,162.5 million and convert at about $138.75 per share. Ignoring accretion, roughly how many additional shares, in millions, would full conversion create?",
      "value": 22.8,
      "tolerance_pct": 3,
      "unit": "m",
      "working": "3,162.5 / 138.75 = 22.79, about 23 million shares.",
      "explanation": "Face value divided by the conversion price gives roughly 23 million shares, the figure the note uses for its consistent EV treatment. Dividing by the August 2026 share price near $278 instead gives about 11 million, which understates dilution because conversion happens at the strike, not the market price.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (M-018, F-061, F-071)",
      "as_of": "2025-12-31",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "EV measurement"
    },
    {
      "id": "m09-047",
      "type": "sequence",
      "stem": "Place the stages of a GPU deployment vintage's cash cycle, from deployment to refresh, in the order the note sets out.",
      "steps": [
        "Contract signed with prepayment",
        "Capex spent, hardware landed and energised",
        "Take-or-pay term earns contracted revenue",
        "Payback reached",
        "Contract expires; merchant tail with repricing and decay",
        "Book life ends",
        "Economic obsolescence and refresh decision at generation N+1 prices"
      ],
      "explanation": "On Nebius's disclosures the ordering is contract cover to about year three, payback inside year two on Q2 pricing, book life at five years from 2026, and a contested economic life. The most common inversion is placing book-life end before contract expiry; the four-to-five-year book life outlasts the three-year initial term.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 shareholder letter, 12 August 2026; 2025 Form 20-F, filed 30 April 2026 (P-001)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "Vintage cash cycle"
    },
    {
      "id": "m09-048",
      "type": "sequence",
      "stem": "Order the stages of the revenue evidential chain from customer commitment to ARR, as the note describes it.",
      "steps": [
        "Customer commitment announced by press release",
        "Contract signed and RPO recognised",
        "Prepayment received and deferred revenue booked",
        "Capacity delivered and revenue recognised",
        "Last-month revenue annualised into ARR"
      ],
      "explanation": "The chain runs from unaudited commitments through audited RPO, then cash received as deferred revenue, then delivery and recognition, with ARR annualising the final month. The common error is placing ARR before recognised revenue: ARR is derived from recognised revenue, so it must come last.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q2 2026 shareholder letter, 12 August 2026 (P-002)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Evidential hierarchy"
    },
    {
      "id": "m09-049",
      "type": "sequence",
      "stem": "Order Nebius's funding events from June 2025 to July 2026 chronologically, as set out in the note.",
      "steps": [
        "$1.0 billion convertibles due 2029 and 2031",
        "$3.1625 billion convertibles and $1.15 billion equity raise",
        "Customer prepayments lift deferred revenue by $1.56 billion",
        "$2 billion NVIDIA equity investment and $4.3 billion convertibles",
        "$2.8 billion gross ATM programme at a weighted average $223.6",
        "First $775 million secured facility at SOFR plus 2.50%"
      ],
      "explanation": "June 2025 convertibles came first, then the September 2025 convertibles and equity, then prepayments from Q4 2025, the NVIDIA investment and March 2026 convertibles in Q1 2026, the ATM in Q2 2026 and the secured facility in July 2026. Swapping the ATM and the secured facility is the likeliest error; the facility is the newest layer.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q1 2026 shareholder letter, 13 May 2026; Q2 2026 shareholder letter, 12 August 2026; secured debt press release, 17 July 2026 (P-004)",
      "as_of": "2026-07-17",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Funding"
    },
    {
      "id": "m09-050",
      "type": "sequence",
      "stem": "Order the steps of the note's reverse DCF procedure.",
      "steps": [
        "Take the current enterprise value",
        "Apply the discount rate to derive required steady-state unlevered free cash flow",
        "Divide by the assumed steady-state EBIT margin after tax to derive required revenue",
        "Express required revenue as a multiple of guided 2026 revenue",
        "State the result as what must be true, not as a forecast"
      ],
      "explanation": "The procedure runs EV, then discount rate to required cash flow, then margin and tax to required revenue, then the scale-up multiple, and finally the framing. Starting from a revenue forecast inverts the logic: a reverse DCF works backwards from price to the revenue the price capitalises.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (P-005, M-015)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "DCF"
    },
    {
      "id": "m09-051",
      "type": "slot",
      "stem": "Complete the revenue evidential hierarchy, ordered from weakest to strongest evidence.",
      "nodes": [
        "Customer commitments",
        "RPO",
        null,
        "Recognised revenue"
      ],
      "layout": "flow",
      "choices": [
        "Deferred revenue",
        "ARR",
        "Backstop order",
        "Net income"
      ],
      "correct": [
        "Deferred revenue"
      ],
      "explanation": "Deferred revenue, the cash-received portion, sits between audited RPO and recognised revenue; each layer is a subset of the one above with stronger evidence. ARR is the strongest distractor because it is revenue-based, but it annualises recognised revenue and is not a layer of the hierarchy.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q2 2026 shareholder letter, 12 August 2026 (S-001, F-028)",
      "as_of": "2026-06-30",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Evidential hierarchy"
    },
    {
      "id": "m09-052",
      "type": "slot",
      "stem": "As at 30 June 2026, complete the Q2 2026 bridge from Nebius adjusted EBITDA to the derived GAAP operating result.",
      "nodes": [
        "Adjusted EBITDA +$236.2m",
        null,
        "less SBC $102.5m",
        "less transaction-related costs incl. $115.9m Eigen AI",
        null
      ],
      "layout": "stack",
      "choices": [
        "less D&A $259.7m",
        "GAAP operating loss about $175.9m",
        "less interest expense",
        "GAAP net loss",
        "less product development $191.0m",
        "less revaluation gain $781m"
      ],
      "correct": [
        "less D&A $259.7m",
        "GAAP operating loss about $175.9m"
      ],
      "explanation": "D&A of $259.7 million is the first and largest deduction, and the bridge lands at a GAAP operating loss of about $175.9 million. Product development is already inside adjusted EBITDA, so it cannot be deducted again; interest and net loss sit below the operating line.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 results release, 12 August 2026 (S-002, F-039, F-040)",
      "as_of": "2026-06-30",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "EBIT"
    },
    {
      "id": "m09-053",
      "type": "slot",
      "stem": "Complete the sum-of-the-parts components for Nebius as at 30 June 2026, in the order the note lists them.",
      "nodes": [
        "AI cloud",
        "ClickHouse",
        null,
        "Avride",
        "TripleTen",
        null
      ],
      "layout": "stack",
      "choices": [
        "Toloka",
        "Net cash",
        "Eigen AI",
        "Vineland site",
        "Meta backstop order"
      ],
      "correct": [
        "Toloka",
        "Net cash"
      ],
      "explanation": "Toloka (81% economic, about $102 million book) follows ClickHouse, and net cash closes the list. Eigen AI appears in the module only as transaction-related expense, the Vineland site is part of the AI cloud, and the Meta backstop is a contract term, so none is a separate SOTP component.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q1 2026 shareholder letter, 13 May 2026; Q2 2026 shareholder letter, 12 August 2026 (S-004, F-090)",
      "as_of": "2026-06-30",
      "time_sensitive": true,
      "difficulty": 2,
      "topic": "Sum of the parts"
    },
    {
      "id": "m09-054",
      "type": "match",
      "stem": "Match each metric to its formula as set out in the note's formula register.",
      "pairs": [
        [
          "ARR (Nebius basis)",
          "Last-month AI cloud revenue multiplied by 12"
        ],
        [
          "Intra-quarter ramp gap",
          "ARR less four times quarterly revenue"
        ],
        [
          "Free cash flow (build-out)",
          "Operating cash flow less capex"
        ],
        [
          "Reverse DCF required cash flow",
          "Enterprise value multiplied by the discount rate"
        ],
        [
          "Realised revenue per connected MW",
          "ARR divided by connected megawatts"
        ]
      ],
      "explanation": "Each formula follows the register: ARR annualises one month, the ramp gap compares ARR with four times the quarter, FCF nets capex from OCF, the reverse DCF multiplies EV by the discount rate, and revenue per MW divides ARR by connected, not contracted, power. The ramp gap is the pair most often confused with the ARR definition.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (M-001, M-003, M-009, M-015, M-016)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "Formulae"
    },
    {
      "id": "m09-055",
      "type": "match",
      "stem": "Match each term to its reference value, as at 31 December 2025 for balance-sheet figures and 30 June 2026 for Q2 2026 disclosures.",
      "pairs": [
        [
          "RPO",
          "$21.3bn"
        ],
        [
          "Deferred revenue",
          "$1.58bn"
        ],
        [
          "2026 base ACV per MW",
          "$12m"
        ],
        [
          "Payback on Q2 2026 deals",
          "1 year 10 months"
        ],
        [
          "Useful-life change effect on 2026 depreciation",
          "$167.6m"
        ]
      ],
      "explanation": "RPO was $21,333.0 million and deferred revenue $1,577.5 million at end-2025; the 2026 base ACV is around $12 million per MW; Q2 deals paid back in 1 year 10 months; the useful-life change lowers 2026 depreciation by about $167.6 million. RPO and deferred revenue are the pair most often swapped.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q2 2026 shareholder letter, 12 August 2026 (F-024, F-030, F-005, F-001, F-048)",
      "as_of": "2026-06-30",
      "time_sensitive": true,
      "difficulty": 3,
      "topic": "Reference values"
    },
    {
      "id": "m09-056",
      "type": "match",
      "stem": "Match each glossary term to the alias or variant the glossary register gives for it.",
      "pairs": [
        [
          "MOIC",
          "Money multiple"
        ],
        [
          "Deferred revenue",
          "Contract liabilities"
        ],
        [
          "RPO",
          "Contracted backlog (ASC 606)"
        ],
        [
          "Terminal value",
          "Continuing value"
        ],
        [
          "Backstop order",
          "Take-or-pay on unsold capacity"
        ]
      ],
      "explanation": "Money multiple is the UK and EU private equity usage for MOIC; contract liabilities is the IFRS presentation of deferred revenue; contracted backlog under ASC 606 is RPO; continuing value is a synonym for terminal value; and the backstop is take-or-pay on unsold capacity. Contracted backlog is the most confusable, since company-defined backlog is broader.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (G-008, G-004, G-002, G-014, G-012)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Glossary"
    },
    {
      "id": "m09-057",
      "type": "classify",
      "stem": "Classify the following statement from the module, as at 30 June 2026.",
      "statement": "Payback on Nebius's Q2 2026 deals was 1 year 10 months, against a historical 2 to 3 years.",
      "categories": [
        "Fact",
        "Assumption",
        "Company claim",
        "Analytical interpretation"
      ],
      "correct": 2,
      "explanation": "The figure is management's own calculation in the Q2 2026 shareholder letter, on forecast costs and contracted capacity including capacity not yet built, and is not independently verified, so it is a company claim. It reads like a fact because it is precise and dated, which is why the register flags it.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; Q2 2026 shareholder letter, 12 August 2026 (F-001, D-011)",
      "as_of": "2026-06-30",
      "time_sensitive": true,
      "difficulty": 2,
      "topic": "Payback"
    },
    {
      "id": "m09-058",
      "type": "classify",
      "stem": "Classify the following statement from the module.",
      "statement": "In the reverse DCF, a 12% discount rate and a 25% steady-state EBIT margin are applied to an enterprise value of $75 billion.",
      "categories": [
        "Fact",
        "Assumption",
        "Company claim",
        "Analytical interpretation"
      ],
      "correct": 1,
      "explanation": "The discount rate and margin are chosen model inputs, so the statement is an assumption; the $75 billion EV embedded in it is a dated market observation but the statement as a whole is about the inputs applied. It is not a company claim: Nebius guides 20 to 30% EBIT margins and sets no discount rate.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026 (D-012, F-087)",
      "as_of": "2026-08-17",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "DCF"
    },
    {
      "id": "m09-059",
      "type": "classify",
      "stem": "Classify the following statement as the note treats it.",
      "statement": "Unsold 2027 capacity could be placed in the market at current prices.",
      "categories": [
        "Structural protection",
        "Narrative comfort"
      ],
      "correct": 1,
      "explanation": "The statement may be true, but it is a forecast of merchant demand with no enforceable counterparty, so the note labels it narrative comfort. The Meta backstop order, which obliges a counterparty to buy unsold capacity, is the structural protection a reader might confuse it with.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026 (F-011, D-008)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 2,
      "topic": "Structural protection"
    },
    {
      "id": "m09-060",
      "type": "classify",
      "stem": "Classify the following statement from the module.",
      "statement": "The $167.6 million reduction in 2026 depreciation from the useful-life change is roughly 5% of guided 2026 revenue at the midpoint.",
      "categories": [
        "Fact",
        "Assumption",
        "Company claim",
        "Analytical interpretation"
      ],
      "correct": 3,
      "explanation": "The $167.6 million quantum is a disclosed fact from the 20-F, but expressing it as roughly 5% of the $3.0 to 3.4 billion revenue guide midpoint is the note's own derivation, so the statement is analytical interpretation. A reader who anchors on the disclosed dollar figure misclassifies it as fact.",
      "source": "NBIS Module 09 briefing note, compiled 15 September 2026; 2025 Form 20-F, filed 30 April 2026; Q1 2026 shareholder letter, 13 May 2026 (F-049, F-048, D-010)",
      "as_of": "2026-08-18",
      "time_sensitive": false,
      "difficulty": 3,
      "topic": "Useful life"
    }
  ],
  "glossary": [
    {
      "term": "ARR (Nebius basis)",
      "aliases": [
        "Annualised run-rate revenue",
        "run-rate",
        "exit rate",
        "Nebius AI cloud ARR"
      ],
      "definition": "AI cloud revenue in the final month of the quarter multiplied by 12",
      "relevance": "The headline growth metric; guidance is set on it; definition is company-specific. Usage note: US SaaS usage often means contracted recurring revenue; Nebius's is a run-rate, not contracted.",
      "priority": "red",
      "module": 9,
      "variants": null
    },
    {
      "term": "RPO",
      "aliases": [
        "Remaining performance obligations",
        "contracted backlog (ASC 606)",
        "unsatisfied performance obligations"
      ],
      "definition": "Transaction price allocated to unsatisfied performance obligations under contract",
      "relevance": "$21.3bn at Dec-25; the audited counterpart to \"commitments\". Usage note: US GAAP ASC 606 term; IFRS 15 requires equivalent disclosure with different wording.",
      "priority": "red",
      "module": 9,
      "variants": null
    },
    {
      "term": "Revenue backlog",
      "aliases": [
        "Backlog",
        "contracted revenue",
        "order book",
        "TCV backlog"
      ],
      "definition": "Company-defined total of contracted future revenue, often broader than RPO",
      "relevance": "CoreWeave's headline metric ($104bn); compare definitions before comparing numbers. Usage note: not a defined accounting term anywhere; always check the footnote.",
      "priority": "amber",
      "module": 9,
      "variants": null
    },
    {
      "term": "Deferred revenue / prepayments",
      "aliases": [
        "Contract liabilities (IFRS)",
        "customer prepayments",
        "advances from customers",
        "strategic-agreement advances"
      ],
      "definition": "Cash received before delivery; a liability to provide service",
      "relevance": "$1.58bn at Dec-25; >$9bn of prepayments expected in 2026; funds capex but obliges delivery. Usage note: IFRS presentation term is \"contract liabilities\".",
      "priority": "red",
      "module": 9,
      "variants": null
    },
    {
      "term": "TCV",
      "aliases": [
        "Total contract value",
        "TCV",
        "contract value"
      ],
      "definition": "Total contract value over the full term",
      "relevance": "Q2 2026 landmark deals averaged >$1bn TCV each. Usage note: consistent usage across markets.",
      "priority": "amber",
      "module": 9,
      "variants": null
    },
    {
      "term": "ACV per MW",
      "aliases": [
        "Annual contract value per megawatt",
        "ACV/MW",
        "$ per MW-year",
        "revenue per MW"
      ],
      "definition": "Annual contract value per megawatt of IT load",
      "relevance": "$12m 2026 base; $20-25m Q2 deals; $40-50m short-term opportunity. Usage note: sector-specific; no accounting definition.",
      "priority": "red",
      "module": 9,
      "variants": null
    },
    {
      "term": "Payback (Nebius basis)",
      "aliases": [
        "Payback period",
        "cash payback",
        "capex payback",
        "months to payback"
      ],
      "definition": "Months until cumulative revenue less operating cost covers capex, excluding prepayments, on forecast contracted capacity",
      "relevance": "1 yr 10 m on Q2 deals vs 2-3 yrs historically; includes capacity not yet built. Usage note: note the exclusions before quoting externally.",
      "priority": "red",
      "module": 9,
      "variants": null
    },
    {
      "term": "MOIC",
      "aliases": [
        "Multiple on invested capital",
        "money multiple",
        "MoM",
        "cash-on-cash multiple",
        "TVPI/DPI at fund level"
      ],
      "definition": "Cumulative cash returned over capital invested, ignoring time",
      "relevance": "The right tail-value check alongside payback. Usage note: UK/EU private equity says \"money multiple\"; at fund level TVPI/DPI.",
      "priority": "amber",
      "module": 9,
      "variants": {
        "UK": "money multiple",
        "EU": "money multiple",
        "US": "MOIC"
      }
    },
    {
      "term": "Contracted / connected / active power",
      "aliases": [
        "Contracted/connected/active MW",
        "secured power",
        "energised capacity",
        "live capacity"
      ],
      "definition": "Secured by land and power commitments / built and energised / consuming and revenue-capable",
      "relevance": "5 GW contracted target vs 0.8-1.0 GW connected YE-26; only connected-to-active earns. Usage note: definitions from Q1 2026 letter; not standardised across peers.",
      "priority": "red",
      "module": 9,
      "variants": null
    },
    {
      "term": "Useful life (prospective change)",
      "aliases": [
        "Depreciation life",
        "asset life",
        "change in accounting estimate",
        "prospective change (ASC 250 / IAS 8)"
      ],
      "definition": "Depreciation period estimate; changes apply forward only",
      "relevance": "4 to 5 yrs from Jan-26; ~$167.6m lower 2026 depreciation. Usage note: IFRS (IAS 16) requires annual review; US GAAP change-in-estimate treatment is the same prospectively.",
      "priority": "red",
      "module": 9,
      "variants": null
    },
    {
      "term": "Measurement alternative (ASC 321)",
      "aliases": [
        "ASC 321 measurement alternative",
        "cost less impairment plus observable price changes",
        "remeasurement gain"
      ],
      "definition": "Private equity stakes carried at cost, remeasured on observable rounds",
      "relevance": "Governs the ClickHouse mark ($781m Q1-26 gain). Usage note: IFRS 9 would fair-value through P&L or OCI instead.",
      "priority": "green",
      "module": 9,
      "variants": null
    },
    {
      "term": "Backstop order",
      "aliases": [
        "Backstop arrangement",
        "capacity floor",
        "take-or-pay on unsold capacity",
        "Meta backstop"
      ],
      "definition": "Obligation to purchase capacity left unsold to third parties",
      "relevance": "Meta's up-to-$15bn order: a floor under merchant risk on specified clusters. Usage note: cousin of take-or-pay in energy offtake.",
      "priority": "amber",
      "module": 9,
      "variants": null
    },
    {
      "term": "EV/ARR",
      "aliases": [
        "EV to ARR",
        "enterprise value to run-rate",
        "EV/run-rate revenue"
      ],
      "definition": "Enterprise value over annualised run-rate revenue",
      "relevance": "The sector's working multiple; ~9x NBIS vs ~5x CRWV on YE-26 guides. Usage note: watch EV treatment of in-the-money convertibles.",
      "priority": "red",
      "module": 9,
      "variants": null
    },
    {
      "term": "Terminal value",
      "aliases": [
        "TV",
        "terminal value",
        "continuing value",
        "exit value",
        "Gordon growth value"
      ],
      "definition": "Value of all cash flows beyond the explicit forecast",
      "relevance": "Dominates any Nebius DCF; hostage to refresh-cycle economics. Usage note: same everywhere; the treachery is universal.",
      "priority": "amber",
      "module": 9,
      "variants": null
    }
  ]
});
