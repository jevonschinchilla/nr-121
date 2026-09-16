window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
 "bank_version": "2026-09-16",
 "module": 1,
 "module_title": "AI market and compute fundamentals",
 "items": [
  {
   "id": "m01-001",
   "type": "mcq",
   "select": "one",
   "stem": "DeepSeek-V3 holds 671bn total parameters. Approximately how many parameters does it activate per token?",
   "options": [
    "37bn",
    "71bn",
    "171bn",
    "671bn",
    "15bn"
   ],
   "correct": [
    0
   ],
   "explanation": "DeepSeek-V3 routes each token through a subset of experts, activating about 37bn of its 671bn parameters. 671bn is the total, which mainly sets storage; active parameters set compute and memory traffic per token served.",
   "source": "DeepSeek-V3 technical report, Dec 2024",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "parameters"
  },
  {
   "id": "m01-002",
   "type": "mcq",
   "select": "one",
   "stem": "During the decode phase of serving, which resource is the binding constraint?",
   "options": [
    "Tensor-core FLOPs",
    "Memory bandwidth",
    "Scale-out network bandwidth",
    "CPU throughput",
    "Rack power"
   ],
   "correct": [
    1
   ],
   "explanation": "Decode emits one token per step and must stream the active weights plus the KV cache out of GPU memory each time, so memory bandwidth binds and the arithmetic units sit largely idle. FLOPs bind prefill, not decode.",
   "source": "Established technical literature (uncited in note)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "inference"
  },
  {
   "id": "m01-003",
   "type": "mcq",
   "select": "one",
   "stem": "When Token Factory launched in November 2025, which pricing basis replaced GPU-per-hour pricing for managed inference?",
   "options": [
    "Per megawatt of reserved capacity",
    "Per seat",
    "Per million tokens",
    "Per task completed",
    "Per request"
   ],
   "correct": [
    2
   ],
   "explanation": "The 2025 Form 20-F records that Token Factory launched with per-token pricing, replacing GPU-per-hour pricing. Per-task or per-seat pricing belongs to the agent layer above managed inference, not to Token Factory itself.",
   "source": "Nebius 2025 Form 20-F",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "token-factory"
  },
  {
   "id": "m01-004",
   "type": "mcq",
   "select": "one",
   "stem": "Approximately what aggregate NVLink bandwidth does a GB200 or GB300 NVL72 rack provide across its 72 GPUs?",
   "options": [
    "900 GB/s",
    "1.8 TB/s",
    "8 TB/s",
    "130 TB/s",
    "400 Gb/s"
   ],
   "correct": [
    3
   ],
   "explanation": "NVLink connects all 72 GPUs into one coherent domain with about 130 TB/s aggregate. 1.8 TB/s is the per-GPU NVLink figure and 8 TB/s the per-GPU HBM bandwidth; 400 Gb/s is InfiniBand NDR, a scale-out fabric.",
   "source": "NVIDIA NVL72 product brief (vendor figure)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "interconnect"
  },
  {
   "id": "m01-005",
   "type": "mcq",
   "select": "one",
   "stem": "According to the 2022 Chinchilla result, roughly how many training tokens per parameter is compute-optimal?",
   "options": [
    "0.75",
    "2",
    "20",
    "38",
    "200"
   ],
   "correct": [
    2
   ],
   "explanation": "Hoffmann et al. (2022) found compute-optimal training uses roughly 20 tokens per parameter. 38 is close to the actual Llama 3 405B ratio, which deliberately overtrains; 0.75 is the words-per-token rule of thumb.",
   "source": "Kaplan 2020; Hoffmann et al. 2022",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "scaling"
  },
  {
   "id": "m01-006",
   "type": "mcq",
   "select": "one",
   "stem": "The Microsoft agreement effective 7 September 2025 provides up to approximately what contract value over five years?",
   "options": [
    "$2.9bn",
    "$7.0bn",
    "$12bn",
    "$17.4bn",
    "$27bn"
   ],
   "correct": [
    3
   ],
   "explanation": "The 2025 Form 20-F gives up to approximately $17.4bn over five years for dedicated capacity at Vineland. $7.0bn is the upfront payment within that contract; $2.9bn and $27bn are the two Meta agreements.",
   "source": "Nebius 2025 Form 20-F",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "contracts"
  },
  {
   "id": "m01-007",
   "type": "mcq",
   "select": "one",
   "stem": "Under Meta's March 2026 agreement, how does the up-to-$15bn component operate?",
   "options": [
    "Firm dedicated Vera Rubin capacity delivering from early 2027 on take-or-pay terms",
    "Meta must purchase specified capacity that Nebius fails to sell to third parties",
    "Customer prepayments funding 50-60% of the associated capex",
    "A warrant-structured equity investment in Nebius",
    "A revenue share on Token Factory inference"
   ],
   "correct": [
    1
   ],
   "explanation": "The $15bn tranche is a contractual demand backstop: Meta buys specified capacity Nebius cannot sell to third parties. The $12bn firm Vera Rubin capacity is the other component of the same agreement, not the backstop.",
   "source": "Nebius 2025 Form 20-F",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "contracts"
  },
  {
   "id": "m01-008",
   "type": "mcq",
   "select": "one",
   "stem": "Why has InfiniBand been the default scale-out fabric for synchronous training?",
   "options": [
    "Lower cost per port than Ethernet",
    "Higher aggregate bandwidth than NVLink inside the rack",
    "Low tail latency, because synchronous training advances at the pace of the slowest packet",
    "Native support for FP8 arithmetic",
    "Easier operability at hyperscale"
   ],
   "correct": [
    2
   ],
   "explanation": "Synchronous training is gated by the slowest packet, so InfiniBand's low tail latency made it the default. Cost and operability are the reasons hyperscalers favour Ethernet, so that option describes the alternative, not InfiniBand.",
   "source": "NVIDIA networking documentation (uncited in note)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "interconnect"
  },
  {
   "id": "m01-009",
   "type": "mcq",
   "select": "one",
   "stem": "How does Nebius define ARR?",
   "options": [
    "Contracted recurring revenue over the next twelve months",
    "Quarterly AI cloud revenue multiplied by four",
    "Trailing twelve-month group revenue",
    "The last month of the quarter's AI cloud revenue multiplied by twelve",
    "Contract backlog divided by average tenor"
   ],
   "correct": [
    3
   ],
   "explanation": "Nebius annualises the last month of the quarter's AI cloud revenue, a point-in-time run rate. Contracted recurring revenue is the SaaS convention and is the common misreading; the Nebius figure moves with one month's billings.",
   "source": "Nebius shareholder letters (stated definition)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "metrics"
  },
  {
   "id": "m01-010",
   "type": "mcq",
   "select": "one",
   "stem": "At what margin was Nebius's first secured, asset-backed facility priced in July 2026?",
   "options": [
    "SOFR plus 1.25%",
    "SOFR plus 2.625%",
    "SOFR plus 4.50%",
    "A fixed coupon of 1.250%",
    "SOFR plus 2.50%"
   ],
   "correct": [
    4
   ],
   "explanation": "The ~$775m facility priced at SOFR plus 2.50%, structured by MUFG with nine other banks. 1.250% and 2.625% are the coupons on the March 2026 convertibles, senior unsecured instruments rather than secured debt.",
   "source": "Nebius secured debt release, 17 Jul 2026",
   "as_of": "2026-07-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "financing"
  },
  {
   "id": "m01-011",
   "type": "mcq",
   "select": "one",
   "stem": "Which of the following Nebius reliability credentials is an independent third-party ranking?",
   "options": [
    "NVIDIA Exemplar status for training on GB300 NVL72",
    "NVIDIA Cloud Partner status",
    "First in Europe to deploy HGX B300 with Quantum-X800",
    "Nebius's own best-in-class characterisation of its endpoints",
    "Gold in SemiAnalysis ClusterMAX 2.0"
   ],
   "correct": [
    4
   ],
   "explanation": "ClusterMAX 2.0 is published by SemiAnalysis, an independent party. Exemplar status is conferred by NVIDIA, which is also a supplier and shareholder, so it is commercially valuable but not arm's-length validation.",
   "source": "MLPerf and SemiAnalysis publications; Nebius letters",
   "as_of": "2025-11-01",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "validation"
  },
  {
   "id": "m01-012",
   "type": "mcq",
   "select": "one",
   "stem": "At what price per million input tokens did GPT-5 list in August 2025?",
   "options": [
    "$1.25",
    "$0.14",
    "$5",
    "$15",
    "$30"
   ],
   "correct": [
    0
   ],
   "explanation": "GPT-5 listed at $1.25 per million input tokens. $30 was GPT-4's launch price in March 2023, the comparison the note uses for price deflation; $0.14 is DeepSeek V4-Flash and $5 the premium end in August 2026.",
   "source": "OpenAI price lists, Mar 2023 and Aug 2025",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "pricing"
  },
  {
   "id": "m01-013",
   "type": "mcq",
   "select": "one",
   "stem": "In the bear case's monetisation-gap argument, roughly what level of 2026 hyperscaler capex guidance stands against direct AI revenues estimated from about $51bn upward?",
   "options": [
    "$176bn",
    "$410bn",
    "$700bn",
    "$1.4tn",
    "$5.3tn"
   ],
   "correct": [
    2
   ],
   "explanation": "The note sets roughly $700bn of 2026 hyperscaler capex guidance against direct AI revenues of $51bn to the low hundreds of billions. $410bn is 2025 spend; $1.4tn is OpenAI's commitments; $176bn is Burry's depreciation estimate.",
   "source": "Analyst analyses via web search, Mar-Jun 2026",
   "as_of": "2026-06-01",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "capex-debate"
  },
  {
   "id": "m01-014",
   "type": "mcq",
   "select": "one",
   "stem": "Which historical episode does the note give as the closest analogue to today's circular AI financing?",
   "options": [
    "The Lucent and Nortel vendor-financing collapse of 1999-2001",
    "The cloud computing build-out of 2011",
    "The 2008 mortgage securitisation crisis",
    "The Enron collapse of 2001",
    "The 1990s Japanese asset bubble"
   ],
   "correct": [
    0
   ],
   "explanation": "Vendor financing by Lucent and Nortel in 1999-2001 is the analogue: suppliers funding their own customers' purchases, as NVIDIA and Oracle now do for OpenAI. The 2011 cloud stage is used for the spend-to-revenue ratio, not circularity.",
   "source": "Module 1 note text, 14 Aug 2026",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "capex-debate"
  },
  {
   "id": "m01-015",
   "type": "mcq",
   "select": "all",
   "stem": "Which of the following are mechanisms by which agentic workloads multiply token consumption relative to chat? Select all that apply.",
   "options": [
    "Long reasoning traces emitted per step",
    "Agent loops re-ingesting accumulated context on each call",
    "Tool use and retrieval injecting further tokens",
    "Machine-speed operation around the clock, decoupled from human attention",
    "Larger total parameter counts in agent models",
    "Higher per-token prices for agent traffic"
   ],
   "correct": [
    0,
    1,
    2,
    3
   ],
   "explanation": "The note lists four compounding mechanisms: reasoning traces, multi-call loops re-ingesting context, tool and retrieval tokens, and continuous machine-speed operation. Parameter count and price affect cost per token, not the number of tokens consumed.",
   "source": "Module 1 note text, 14 Aug 2026",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "agents"
  },
  {
   "id": "m01-016",
   "type": "mcq",
   "select": "all",
   "stem": "Which of the following are among the four compute buyer classes identified in the note? Select all that apply.",
   "options": [
    "Frontier labs",
    "Hyperscalers",
    "AI-native companies",
    "Enterprises and sovereigns",
    "GPU manufacturers",
    "Colocation providers"
   ],
   "correct": [
    0,
    1,
    2,
    3
   ],
   "explanation": "The four classes are frontier labs, hyperscalers, AI-native companies and enterprises and sovereigns, ordered by deal size and tenor. GPU manufacturers and colocation providers sit on the supply side of the stack, not the demand side.",
   "source": "Module 1 note text, 14 Aug 2026",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "buyers"
  },
  {
   "id": "m01-017",
   "type": "mcq",
   "select": "all",
   "stem": "Which characteristics describe inference economics, as opposed to training economics, in the note? Select all that apply.",
   "options": [
    "Many tenants",
    "Spiky diurnal demand",
    "Revenue in tokens delivered",
    "Near-continuous utilisation",
    "Revenue contracted in GPU-hours",
    "A few large tenants"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "Inference is a service: many tenants, spiky demand, capacity sized to peak and revenue in tokens. Near-continuous utilisation and GPU-hour contracts characterise training, which is a project with a few large tenants.",
   "source": "Module 1 note text, 14 Aug 2026",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "economics"
  },
  {
   "id": "m01-018",
   "type": "mcq",
   "select": "all",
   "stem": "Which of the following does the note classify as structural protections rather than narrative comfort? Select all that apply.",
   "options": [
    "Take-or-pay obligations from two investment-grade counterparties",
    "The Meta backstop purchase obligation on up to $15bn of unsold capacity",
    "Customer prepayments self-financing 50-60% of related capex",
    "The $7-9bn year-end 2026 ARR target",
    "The 5 GW contracted-power target",
    "Management's characterisations of demand"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "Structural protections are contractual or financial: take-or-pay, the Meta backstop and prepayments. The ARR target is the strongest distractor because it is quantified, but it is guidance with no counterparty, so it is narrative comfort.",
   "source": "Nebius Q2 2026 shareholder letter, 12 Aug 2026",
   "as_of": "2026-08-12",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "risk"
  },
  {
   "id": "m01-019",
   "type": "mcq",
   "select": "all",
   "stem": "Which statements about quantisation are correct according to the note? Select all that apply.",
   "options": [
    "FP8 is standard on the Hopper generation",
    "FP4 is native on the Blackwell generation",
    "Each step down roughly halves memory footprint and doubles effective bandwidth",
    "Quantisation removes accuracy costs entirely",
    "FP4 is native on the Hopper generation"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "FP8 is standard on Hopper, FP4 native on Blackwell, and each step down roughly halves footprint and doubles effective bandwidth. The accuracy costs are small and managed, not eliminated, so that statement fails.",
   "source": "NVIDIA architecture documentation (uncited in note)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "quantisation"
  },
  {
   "id": "m01-020",
   "type": "mcq",
   "select": "all",
   "stem": "Which instruments formed part of Nebius's $6.3bn Q1 2026 fundraising? Select all that apply.",
   "options": [
    "A ~$2bn NVIDIA warrant-structured equity investment",
    "$2.5875bn of 1.250% convertibles due 2031",
    "$1.75bn of 2.625% convertibles due 2033",
    "A ~$775m secured asset-backed facility",
    "Microsoft's ~$7.0bn upfront payment"
   ],
   "correct": [
    0,
    1,
    2
   ],
   "explanation": "The March 2026 raise comprised NVIDIA's ~$2bn equity and ~$4.34bn of convertibles in two series. The secured facility came in July 2026, and Microsoft's upfront payment is customer prepayment under the 2025 contract, not fundraising.",
   "source": "Nebius 2025 Form 20-F; Q1 2026 letter",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "financing"
  },
  {
   "id": "m01-021",
   "type": "mcq",
   "select": "all_not",
   "stem": "Nebius's fleet, fabric and hardware design as described in the 2025 Form 20-F: which of the following do NOT apply?",
   "options": [
    "GB300 NVL72 systems in the fleet",
    "H100 systems in the fleet",
    "InfiniBand NDR/XDR as the cluster fabric",
    "Spectrum-X Ethernet as the cluster fabric",
    "Servers and racks designed by NVIDIA rather than in-house"
   ],
   "correct": [
    3,
    4
   ],
   "explanation": "The 20-F describes GB300 NVL72, GB200 NVL72, HGX B200/B300 and H100 fleets on InfiniBand NDR/XDR, with servers and racks designed in-house. Spectrum-X is the Ethernet fabric hyperscalers favour, and the silicon, not the server design, is what Nebius procures from NVIDIA.",
   "source": "Nebius 2025 Form 20-F (F-055)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "fleet"
  },
  {
   "id": "m01-022",
   "type": "mcq",
   "select": "all_not",
   "stem": "The note sets out five bear-case arguments in the AI capex debate. Which of the following do NOT apply as one of those five?",
   "options": [
    "The monetisation gap between capex and direct AI revenue",
    "GPU depreciation lives that may be too long",
    "Circularity of vendor financing",
    "Power and grid connection lead times",
    "Token price deflation eliminating serving margins",
    "Counterparty concentration in Nebius's contracted revenue"
   ],
   "correct": [
    4,
    5
   ],
   "explanation": "The five arguments are monetisation gap, depreciation, circularity, funding mix and power. Price deflation is treated as a Jevons-style demand driver rather than a bear argument, and concentration is a Nebius-specific risk, not a sector-wide capex argument.",
   "source": "Module 1 note text, 14 Aug 2026",
   "as_of": "2026-08-14",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "capex-debate"
  },
  {
   "id": "m01-023",
   "type": "mcq",
   "select": "all_not",
   "stem": "Nebius states that training and inference demand are converging on one platform. Which of the following do NOT apply as channels the company cites for that convergence?",
   "options": [
    "Training customers need production inference",
    "Inference customers evolve toward fine-tuning and post-training",
    "Training generates inference demand through RL rollouts, evaluations and synthetic data",
    "Inference customers migrate to bare-metal GPU rental",
    "Pre-training runs shrink as inference volumes grow"
   ],
   "correct": [
    3,
    4
   ],
   "explanation": "The Q2 2026 letter cites three channels: training customers needing inference, inference customers moving into post-training, and training itself generating inference-shaped load. Bare-metal migration reverses the argument; shrinking pre-training is not claimed.",
   "source": "Nebius Q2 2026 shareholder letter, 12 Aug 2026",
   "as_of": "2026-08-12",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "convergence"
  },
  {
   "id": "m01-024",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following do NOT apply as correct pairings of NVIDIA platform and HBM capacity per GPU?",
   "options": [
    "A100 with 80 GB HBM2e",
    "H200 with 141 GB HBM3e",
    "B200 with 192 GB HBM3e",
    "B300 with 192 GB HBM3e",
    "H100 with 141 GB HBM3"
   ],
   "correct": [
    3,
    4
   ],
   "explanation": "B300 carries 288 GB, the memory-heavy Blackwell Ultra part, and H100 carries 80 GB. The B300 pairing is the strongest distractor because 192 GB is the B200 figure one generation earlier on the same HBM3e technology.",
   "source": "NVIDIA datasheets (vendor peak, approximate)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "hardware"
  },
  {
   "id": "m01-025",
   "type": "recall",
   "stem": "Name the town and state where Nebius provides the dedicated capacity under the Microsoft agreement.",
   "accept": [
    "Vineland, New Jersey",
    "Vineland NJ",
    "Vineland"
   ],
   "fuzzy": true,
   "explanation": "The 2025 Form 20-F places the Microsoft dedicated capacity at Vineland, New Jersey, delivered in nine tranches through 2026.",
   "source": "Nebius 2025 Form 20-F",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "contracts"
  },
  {
   "id": "m01-026",
   "type": "recall",
   "stem": "Which serving framework does the note credit with popularising continuous (in-flight) batching?",
   "accept": [
    "vLLM"
   ],
   "fuzzy": true,
   "explanation": "Continuous batching, which admits and retires requests token-by-token, was popularised by frameworks such as vLLM and multiplies throughput several-fold.",
   "source": "vLLM project publications (uncited in note)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "inference"
  },
  {
   "id": "m01-027",
   "type": "recall",
   "stem": "Which company did Nebius acquire in February 2026 to supply real-time web retrieval for agents?",
   "accept": [
    "Tavily"
   ],
   "fuzzy": true,
   "explanation": "Tavily supplies the retrieval layer agents need; its developer community grew from 1m to over 2.5m between February and Q2 2026, per the Q2 2026 letter.",
   "source": "Nebius Q4 2025 and Q2 2026 shareholder letters",
   "as_of": "2026-08-12",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "agents"
  },
  {
   "id": "m01-028",
   "type": "recall",
   "stem": "Name the 4-bit quantisation method authored by Eigen AI's co-founders.",
   "accept": [
    "AWQ",
    "activation-aware weight quantisation",
    "activation-aware quantisation",
    "activation aware weight quantization"
   ],
   "fuzzy": true,
   "explanation": "AWQ (activation-aware weight quantisation) won the MLSys 2024 best paper and is now standard for 4-bit serving, per the Eigen AI acquisition release.",
   "source": "Nebius Eigen AI acquisition release, 1 May 2026",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "quantisation"
  },
  {
   "id": "m01-029",
   "type": "recall",
   "stem": "Which bank structured and led Nebius's July 2026 secured, asset-backed facility?",
   "accept": [
    "MUFG",
    "Mitsubishi UFJ Financial Group"
   ],
   "fuzzy": true,
   "explanation": "The ~$775m facility at SOFR plus 2.50% was structured by MUFG with nine other banks and was oversubscribed.",
   "source": "Nebius secured debt release, 17 Jul 2026",
   "as_of": "2026-07-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "financing"
  },
  {
   "id": "m01-030",
   "type": "recall",
   "stem": "Name NVIDIA's Ethernet networking platform on which Meta, Microsoft, Oracle and xAI were building giga-scale sites in late 2025.",
   "accept": [
    "Spectrum-X",
    "NVIDIA Spectrum-X"
   ],
   "fuzzy": true,
   "explanation": "NVIDIA management said in November 2025 that Ethernet GPU attach on Spectrum-X was roughly on par with InfiniBand, with those four building giga-scale sites on it.",
   "source": "NVIDIA Q3 FY26 earnings call, Nov 2025",
   "as_of": "2025-11-01",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "interconnect"
  },
  {
   "id": "m01-031",
   "type": "recall",
   "stem": "Which AI lab uses Nebius's SWE-rebench dataset and leaderboard for RL training environments?",
   "accept": [
    "Moonshot",
    "Moonshot AI"
   ],
   "fuzzy": true,
   "explanation": "Nebius states that Moonshot uses SWE-rebench for RL training environments, which the note cites as keeping Nebius credible with the labs it serves.",
   "source": "Nebius Q3 2025 and Q2 2026 shareholder letters",
   "as_of": "2026-08-12",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "research"
  },
  {
   "id": "m01-032",
   "type": "recall",
   "stem": "What is the industry term for the share of theoretical cluster compute actually converted into training progress?",
   "accept": [
    "Model FLOPs utilisation",
    "MFU",
    "goodput",
    "model flops utilization",
    "model FLOP utilisation"
   ],
   "fuzzy": true,
   "explanation": "Goodput, or model FLOPs utilisation (MFU), is often only 35-45% even for elite operators, which is why cluster engineering rather than chip procurement is where GPU clouds differentiate.",
   "source": "Module 1 note text, 14 Aug 2026",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "reliability"
  },
  {
   "id": "m01-033",
   "type": "define",
   "stem": "Define the prefill and decode phases of inference and state the bottleneck of each.",
   "model_answer": "Prefill processes the whole prompt in parallel and is compute-bound; decode generates one token at a time, streaming the active weights and the KV cache from GPU memory, so it is memory-bandwidth-bound.",
   "rubric": {
    "must": [
     [
      "prefill",
      "prompt processing",
      "processes the prompt"
     ],
     [
      "decode",
      "token generation",
      "generates one token",
      "one token at a time"
     ],
     [
      "memory bandwidth",
      "bandwidth bound",
      "bandwidth limited",
      "memory bound"
     ]
    ],
    "should": [
     [
      "compute bound",
      "flops bound",
      "compute limited",
      "arithmetic"
     ],
     [
      "parallel",
      "one pass",
      "single pass"
     ],
     [
      "kv cache",
      "key value cache",
      "weights"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "Prefill is a parallel pass over the prompt that saturates the arithmetic units; decode is sequential and must stream weights plus KV cache each step, so bandwidth, not FLOPs, limits it. Answers that call decode compute-bound invert the asymmetry that sizes inference fleets.",
   "source": "Established technical literature (uncited in note)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "inference"
  },
  {
   "id": "m01-034",
   "type": "define",
   "stem": "Define continuous batching and explain why it raises per-token gross margin.",
   "model_answer": "Continuous batching admits and retires requests token by token so that one weight-streaming decode step serves many users simultaneously, multiplying throughput per GPU; the limit is latency, since larger batches raise time-to-first-token.",
   "rubric": {
    "must": [
     [
      "token by token",
      "token boundary",
      "in flight",
      "per token step",
      "continuous"
     ],
     [
      "many users",
      "multiple users",
      "concurrent users",
      "concurrent requests",
      "simultaneously",
      "amortises",
      "amortizes",
      "shared across",
      "several requests"
     ],
     [
      "throughput",
      "tokens per second",
      "more tokens",
      "several fold",
      "multiplies"
     ]
    ],
    "should": [
     [
      "latency",
      "time to first token",
      "ttft",
      "service level"
     ],
     [
      "weight streaming",
      "streaming",
      "weights",
      "fixed cost"
     ],
     [
      "margin",
      "gross margin",
      "cost per token"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "The weight-streaming cost of a decode step is fixed, so packing many users into it multiplies tokens per second per dollar of hardware, which is the margin equation. The constraint is latency: interactive service levels cap batch size below the throughput optimum.",
   "source": "Module 1 note text, 14 Aug 2026",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "inference"
  },
  {
   "id": "m01-035",
   "type": "define",
   "stem": "Define take-or-pay as it operates in the Microsoft and Meta contracts.",
   "model_answer": "Take-or-pay means the customer's fees are payable irrespective of utilisation: Microsoft and Meta owe the contracted amounts whether or not they use the capacity, which is the credit backbone of Nebius's contracted revenue.",
   "rubric": {
    "must": [
     [
      "irrespective of utilisation",
      "irrespective of utilization",
      "regardless of utilisation",
      "regardless of utilization",
      "regardless of usage",
      "regardless of use",
      "whether or not",
      "even if unused",
      "irrespective of use",
      "whether they use",
      "regardless of whether"
     ],
     [
      "fees",
      "payment",
      "payable",
      "pay",
      "paid",
      "owed",
      "owe"
     ]
    ],
    "should": [
     [
      "microsoft",
      "meta",
      "counterparty",
      "customer"
     ],
     [
      "credit",
      "structural protection",
      "contract",
      "contractual",
      "binding"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "The defining feature is payment irrespective of utilisation, which converts capacity into a contractual receivable from an investment-grade counterparty. It is not a prepayment (that is separate) and the protection remains conditional on Nebius meeting delivery terms.",
   "source": "Nebius 2025 Form 20-F",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "contracts"
  },
  {
   "id": "m01-036",
   "type": "define",
   "stem": "Define ARR as Nebius reports it and state how it differs from the SaaS convention.",
   "model_answer": "Nebius's ARR is the last month of the quarter's AI cloud revenue multiplied by twelve, a point-in-time run rate; SaaS ARR implies contracted recurring subscription revenue, so the two are not comparable.",
   "rubric": {
    "must": [
     [
      "last month",
      "last months",
      "final month",
      "one month",
      "single month",
      "month",
      "months"
     ],
     [
      "multiplied by twelve",
      "times twelve",
      "x 12",
      "times 12",
      "by 12",
      "annualised",
      "annualized",
      "annualise",
      "annualize"
     ],
     [
      "run rate",
      "point in time",
      "not recurring",
      "not contracted",
      "snapshot",
      "one month's billings"
     ]
    ],
    "should": [
     [
      "saas",
      "software",
      "subscription"
     ],
     [
      "ai cloud revenue",
      "cloud revenue",
      "revenue"
     ],
     [
      "contracted",
      "recurring"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "ARR here annualises one month of AI cloud revenue, so it moves with that month's billings and includes nothing contractual. SaaS ARR implies contracted recurring revenue, the common misreading; an answer that treats the Nebius figure as recurring fails the distinction.",
   "source": "Nebius shareholder letters (stated definition)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "metrics"
  },
  {
   "id": "m01-037",
   "type": "define",
   "stem": "Define the KV cache and explain why it matters for GPU memory demand.",
   "model_answer": "The KV cache is the per-token intermediate state the model keeps in GPU memory during generation; it grows with context length and with the number of concurrent users, so long context and high concurrency inflate HBM demand and it is streamed on every decode step.",
   "rubric": {
    "must": [
     [
      "intermediate state",
      "intermediate results",
      "per token state",
      "keys and values",
      "key value",
      "cached keys",
      "attention state"
     ],
     [
      "gpu memory",
      "hbm",
      "memory",
      "high bandwidth memory"
     ],
     [
      "context length",
      "context window",
      "longer context",
      "long context",
      "concurrent users",
      "number of users",
      "grows with",
      "concurrency"
     ]
    ],
    "should": [
     [
      "decode",
      "generation",
      "generating",
      "serving"
     ],
     [
      "bandwidth",
      "streamed",
      "streaming"
     ],
     [
      "h200",
      "b300",
      "memory heavy"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "The cache holds intermediate state for every token in context and scales with context length times concurrent users, which is why it is the largest consumer of HBM in serving and why the fleet skews to memory-heavy parts. It is not model weights.",
   "source": "Established technical literature (uncited in note)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "inference"
  },
  {
   "id": "m01-038",
   "type": "define",
   "stem": "Define distillation and state its role in Token Factory's catalogue.",
   "model_answer": "Distillation trains a smaller student model on a large teacher's outputs, transferring capability at lower serving cost; it is the standard route from frontier capability to servable cost and feeds the distilled open-weight models Token Factory serves.",
   "rubric": {
    "must": [
     [
      "student",
      "smaller model",
      "small model",
      "smaller network"
     ],
     [
      "teacher",
      "larger model",
      "large model",
      "frontier model"
     ],
     [
      "outputs",
      "trained on",
      "generated",
      "generations"
     ]
    ],
    "should": [
     [
      "servable",
      "serving cost",
      "cost per token",
      "cheaper",
      "lower cost"
     ],
     [
      "open weight",
      "token factory",
      "catalogue",
      "deepseek r1",
      "r1"
     ],
     [
      "fine tuning",
      "26 fold",
      "pipeline"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "Distillation transfers a teacher's capability into a student trained on the teacher's outputs, which is how frontier capability becomes servable cost. It differs from fine-tuning, which adapts an existing model to proprietary data rather than compressing a larger one.",
   "source": "DeepSeek-R1 release, Jan 2025",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "lifecycle"
  },
  {
   "id": "m01-039",
   "type": "define",
   "stem": "Define model FLOPs utilisation (goodput) and give the typical range for elite operators.",
   "model_answer": "MFU or goodput is the share of a cluster's theoretical peak compute actually converted into useful training progress; even elite operators often achieve only 35-45%, which is why cluster engineering rather than chip procurement differentiates GPU clouds.",
   "rubric": {
    "must": [
     [
      "theoretical",
      "peak",
      "peak flops",
      "theoretical compute",
      "rated"
     ],
     [
      "useful",
      "training progress",
      "actually converted",
      "achieved",
      "converted",
      "useful work"
     ],
     [
      "35 45%",
      "35 to 45%",
      "35% to 45%",
      "35 45 percent",
      "35 45",
      "35 to 45",
      "35% 45%",
      "35 and 45"
     ]
    ],
    "should": [
     [
      "mfu",
      "goodput",
      "utilisation",
      "utilization"
     ],
     [
      "hardware",
      "reliability",
      "failures",
      "cluster engineering",
      "interruptions"
     ],
     [
      "share",
      "fraction",
      "percentage",
      "ratio"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "MFU is achieved useful FLOPs over theoretical peak FLOPs, typically 35-45% even for elite operators because failures and synchronisation stalls waste capacity. It is not the share of GPUs rented (commercial utilisation), a common confusion.",
   "source": "Module 1 note text, 14 Aug 2026",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "reliability"
  },
  {
   "id": "m01-040",
   "type": "define",
   "stem": "Define test-time compute and explain why it shifts demand toward inference infrastructure.",
   "model_answer": "Test-time compute means a reasoning model spends more tokens thinking at inference to buy accuracy; capability is therefore purchased partly at serving time, so this new scaling axis lands demand on inference infrastructure regardless of training budgets.",
   "rubric": {
    "must": [
     [
      "inference",
      "serving",
      "serving time",
      "at inference time",
      "generation"
     ],
     [
      "accuracy",
      "capability",
      "better answers",
      "reasoning",
      "quality"
     ],
     [
      "more tokens",
      "spend more",
      "spends more",
      "thinking",
      "longer",
      "additional compute",
      "extra compute",
      "more compute"
     ]
    ],
    "should": [
     [
      "reasoning model",
      "reasoning models",
      "o series",
      "r1",
      "deepseek"
     ],
     [
      "scaling axis",
      "new axis",
      "third axis",
      "scaling"
     ],
     [
      "training budget",
      "pre training",
      "regardless of training"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "Reasoning models convert inference-time tokens into accuracy, so capability gains are bought at serving time and land on inference-shaped hardware whatever happens to pre-training budgets. It is distinct from RL post-training, the other new scaling axis, which is a training-side process.",
   "source": "Module 1 note text, 14 Aug 2026",
   "as_of": "2026-08-14",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "scaling"
  },
  {
   "id": "m01-041",
   "type": "numeric",
   "stem": "Nebius reported ARR of $3.0bn for Q2 2026 and defines ARR as the last month of the quarter's AI cloud revenue multiplied by twelve. What was AI cloud revenue in the last month of the quarter, in $m?",
   "value": 250,
   "tolerance_pct": 3,
   "unit": "$m",
   "working": "3,000 / 12 = 250",
   "explanation": "Dividing the annualised figure by twelve recovers the single month it rests on. The trap is dividing quarterly AI cloud revenue ($575m) by three, which gives a quarterly average rather than the last month the definition uses.",
   "source": "Nebius Q2 2026 shareholder letter, 12 Aug 2026",
   "as_of": "2026-08-12",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "metrics"
  },
  {
   "id": "m01-042",
   "type": "numeric",
   "stem": "GPT-4 launched at $30 per million input tokens in March 2023 and GPT-5 listed at $1.25 per million input tokens in August 2025. By what factor did the price per million input tokens fall?",
   "value": 24,
   "tolerance_pct": 3,
   "unit": "factor",
   "working": "30 / 1.25 = 24",
   "explanation": "The list price fell 24-fold over roughly two and a half years, consistent with the LLMflation observation of around an order of magnitude per year. Subtracting rather than dividing ($28.75) is the common error.",
   "source": "OpenAI price lists, Mar 2023 and Aug 2025",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "pricing"
  },
  {
   "id": "m01-043",
   "type": "numeric",
   "stem": "Combined big-four 2026 capex guidance is near $725bn against roughly $410bn spent in 2025. What is the percentage increase from 2025 to 2026?",
   "value": 76.8,
   "tolerance_pct": 3,
   "unit": "%",
   "working": "(725 - 410) / 410 = 76.8%",
   "explanation": "The increase is about 77%, the figure the note quotes. Dividing the difference by 2026 guidance instead of the 2025 base gives 43%, which understates the step-up.",
   "source": "CreditSights aggregation via web search, Jul 2026",
   "as_of": "2026-07-01",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "capex-debate"
  },
  {
   "id": "m01-044",
   "type": "numeric",
   "stem": "Llama 3 405B was trained on 15.6tn tokens. Using the Chinchilla rule of roughly 20 tokens per parameter, by what multiple did the run exceed the compute-optimal token budget?",
   "value": 1.93,
   "tolerance_pct": 3,
   "unit": "multiple",
   "working": "Optimal budget 405bn x 20 = 8.1tn; 15.6 / 8.1 = 1.93",
   "explanation": "Chinchilla-optimal for 405bn parameters is 8.1tn tokens, so the run overtrained by about 1.9x, a deliberate choice to obtain a cheaper-to-serve model. Using total tokens per parameter (38.5) answers a different question.",
   "source": "Meta Llama 3 paper, Jul 2024; Hoffmann et al. 2022",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "scaling"
  },
  {
   "id": "m01-045",
   "type": "numeric",
   "stem": "DeepSeek-V3 has 671bn total parameters and activates about 37bn per token. What percentage of total parameters is active per token?",
   "value": 5.5,
   "tolerance_pct": 3,
   "unit": "%",
   "working": "37 / 671 = 5.5%",
   "explanation": "Only about 5.5% of the network is active per token, which is why active rather than total parameters govern serving cost. Inverting the ratio (671 / 37 = 18x) gives the compression factor, not the percentage asked.",
   "source": "DeepSeek-V3 technical report, Dec 2024",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "parameters"
  },
  {
   "id": "m01-046",
   "type": "numeric",
   "stem": "Each GPU in a GB200 NVL72 rack has 1.8 TB/s of NVLink bandwidth and the rack holds 72 GPUs. What is the aggregate NVLink bandwidth of the rack in TB/s?",
   "value": 129.6,
   "tolerance_pct": 3,
   "unit": "TB/s",
   "working": "72 x 1.8 = 129.6 TB/s",
   "explanation": "Multiplying per-GPU NVLink bandwidth by the 72 GPUs in the domain gives about 130 TB/s, the vendor's aggregate figure. Using the 8 TB/s HBM bandwidth per GPU instead conflates memory bandwidth with interconnect.",
   "source": "NVIDIA datasheets (vendor peak, approximate)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "interconnect"
  },
  {
   "id": "m01-047",
   "type": "sequence",
   "stem": "Order the stages of the model lifecycle from first to last.",
   "steps": [
    "Pre-training (episodic, FLOP-bound)",
    "Post-training (SFT, then RLHF or DPO, then RLVR)",
    "Customer fine-tuning (LoRA on proprietary data)",
    "Distillation and quantisation (cuts cost per token)",
    "Serving (bandwidth-bound, continuous)"
   ],
   "explanation": "Pre-training produces the raw predictor, post-training makes it an assistant, customers then fine-tune, distillation and quantisation compress it for serving, and serving runs continuously. The cycle then feeds RL rollouts and synthetic data back into post-training.",
   "source": "Module 1 note text, 14 Aug 2026, compiled 15 Sep 2026, sections A-C and Figure 2 (P-001)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "lifecycle"
  },
  {
   "id": "m01-048",
   "type": "sequence",
   "stem": "Order the steps of the inference request path from prompt to output.",
   "steps": [
    "Prompt received",
    "Prefill: whole prompt processed in parallel (compute-bound)",
    "KV cache built in GPU memory",
    "Decode loop: one token per step, streaming weights plus KV cache from HBM",
    "Tokens streamed to the user"
   ],
   "explanation": "Prefill must complete and populate the KV cache before decode can begin, and tokens stream out as the decode loop runs. Placing the KV cache after decode is the usual error; decode reads the cache built during prefill.",
   "source": "Module 1 note text, 14 Aug 2026, compiled 15 Sep 2026, section C (P-002)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "inference"
  },
  {
   "id": "m01-049",
   "type": "sequence",
   "stem": "Order the steps of the distillation-to-serving pipeline.",
   "steps": [
    "Large teacher generates outputs",
    "Outputs curated into training data",
    "Smaller student trained on the curated data",
    "Student quantised (AWQ, FP8 or FP4)",
    "Deployed to production serving"
   ],
   "explanation": "The teacher's outputs become the student's training data; the student is then quantised and deployed. Quantisation before training is the plausible misordering, but it applies to the finished student, and optional customer fine-tuning sits before quantisation.",
   "source": "Module 1 note text, 14 Aug 2026, compiled 15 Sep 2026, sections B-C (P-004)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "lifecycle"
  },
  {
   "id": "m01-050",
   "type": "sequence",
   "stem": "Order the steps of an agent task loop.",
   "steps": [
    "Plan",
    "Act (model call, tool call or retrieval)",
    "Observe result, re-ingesting accumulated context",
    "Retry or iterate",
    "Complete task"
   ],
   "explanation": "An agent plans, acts, observes and iterates before completing, and each iteration re-ingests accumulated context, which is why token consumption compounds. Observing before acting is the common inversion.",
   "source": "Module 1 note text, 14 Aug 2026, compiled 15 Sep 2026, section F (P-010)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "agents"
  },
  {
   "id": "m01-051",
   "type": "slot",
   "stem": "Complete the Nebius revenue driver tree: fill the two blank capacity states.",
   "nodes": [
    "Contracted power",
    null,
    null,
    "ACV per MW",
    "Revenue"
   ],
   "layout": "flow",
   "choices": [
    "Connected power",
    "Active power",
    "ARR",
    "Token Factory overlay",
    "Training contracts"
   ],
   "correct": [
    "Connected power",
    "Active power"
   ],
   "explanation": "Contracted power converts to connected (built and equipped) and then active (consuming and revenue-generating); active megawatts times ACV per MW drives revenue. Only active power earns, so placing ARR in the chain confuses the output metric with a capacity state.",
   "source": "Nebius Q2 2026 shareholder letter, 12 Aug 2026; Module 1 glossary (S-007)",
   "as_of": "2026-08-12",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "drivers"
  },
  {
   "id": "m01-052",
   "type": "slot",
   "stem": "Complete the cluster network hierarchy from the GPU outward: fill the two blanks.",
   "nodes": [
    "GPU",
    null,
    null,
    "Cluster"
   ],
   "layout": "flow",
   "choices": [
    "NVLink domain (rack, scale-up)",
    "Scale-out fabric (InfiniBand or Ethernet)",
    "HBM stacks",
    "Grace CPU",
    "Liquid-cooled rack enclosure"
   ],
   "correct": [
    "NVLink domain (rack, scale-up)",
    "Scale-out fabric (InfiniBand or Ethernet)"
   ],
   "explanation": "Scale-up ends at the rack wall, where NVLink fuses 72 GPUs into one accelerator; beyond it the scale-out fabric connects racks into a cluster. HBM sits inside the GPU package, not between GPU and cluster.",
   "source": "Module 1 note text, 14 Aug 2026, compiled 15 Sep 2026, section D (S-003)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "interconnect"
  },
  {
   "id": "m01-053",
   "type": "slot",
   "stem": "Complete Nebius's mid-2026 capital stack from most senior to most junior: fill the two blanks.",
   "nodes": [
    "Senior secured: ~$775m asset-backed facility at SOFR plus 2.50% (July 2026)",
    null,
    null
   ],
   "layout": "stack",
   "choices": [
    "Senior unsecured: $4.34bn convertibles (1.250% due 2031, 2.625% due 2033)",
    "Equity: NVIDIA $2bn warrant plus listed equity and ATM",
    "Customer prepayments (over $9bn expected in 2026)",
    "Cash (~$8bn at end-Q2 2026)"
   ],
   "correct": [
    "Senior unsecured: $4.34bn convertibles (1.250% due 2031, 2.625% due 2033)",
    "Equity: NVIDIA $2bn warrant plus listed equity and ATM"
   ],
   "explanation": "Asset-level secured debt ranks ahead of the unsecured convertibles, which rank ahead of equity. Cash and customer prepayments sit alongside the stack as quasi-funding: prepayments are customer-funded working capital, not debt, so neither belongs in a seniority layer.",
   "source": "Nebius 2025 Form 20-F; Q1 and Q2 2026 shareholder letters; secured debt release, 17 Jul 2026 (S-006)",
   "as_of": "2026-07-17",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "financing"
  },
  {
   "id": "m01-054",
   "type": "match",
   "stem": "Match each metric to its formula.",
   "pairs": [
    [
     "ARR (Nebius definition)",
     "Last month of the quarter's AI cloud revenue x 12"
    ],
    [
     "ACV per MW",
     "Annual contract value / contracted megawatts"
    ],
    [
     "MFU (goodput)",
     "Useful model FLOPs / theoretical peak FLOPs"
    ],
    [
     "Cost per million tokens",
     "(GPU-hour cost / tokens per GPU-hour) x 1e6"
    ],
    [
     "Chinchilla ratio",
     "Compute-optimal training tokens per parameter (~20)"
    ]
   ],
   "explanation": "Each formula follows the formula register. The nearest confusion is ARR against ACV per MW: both annualise, but ARR annualises one month's revenue with no denominator, while ACV per MW divides contract value by contracted capacity.",
   "source": "Module 1 note text, 14 Aug 2026, compiled 15 Sep 2026; Nebius Q2 2026 shareholder letter; Hoffmann et al. 2022; a16z LLMflation, Nov 2024 (M-001, M-002, M-004, M-007, M-008)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "metrics"
  },
  {
   "id": "m01-055",
   "type": "match",
   "stem": "Match each disclosed metric to the misuse the note warns against.",
   "pairs": [
    [
     "ARR (Nebius definition)",
     "Reading it as contracted or SaaS-style recurring revenue"
    ],
    [
     "ACV per MW",
     "Comparing across contract tenor or hardware generation"
    ],
    [
     "Deal payback period",
     "Treating a forecast that includes unbuilt capacity as realised economics"
    ],
    [
     "Prepayment self-financing ratio",
     "Extending a deal-level ratio to total group capex"
    ]
   ],
   "explanation": "Each misuse is the one the formula register attaches to that metric. Payback and prepayment ratio are the closest pair because both are disclosed on deal-level company methodology, but payback embeds forecast and residual-value assumptions while the prepayment ratio is a scope question.",
   "source": "Module 1 note text, 14 Aug 2026, compiled 15 Sep 2026; Nebius Q2 2026 shareholder letter, 12 Aug 2026 (M-001, M-002, M-003, M-012)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "metrics"
  },
  {
   "id": "m01-056",
   "type": "match",
   "stem": "Match each glossary term to its plain-English definition.",
   "pairs": [
    [
     "HBM",
     "Memory stacked directly beside the GPU die"
    ],
    [
     "Neocloud",
     "GPU-specialist cloud outside the hyperscalers"
    ],
    [
     "Open-weight model",
     "Model whose weights are downloadable and self-hostable"
    ],
    [
     "Take-or-pay",
     "Payment owed irrespective of utilisation"
    ],
    [
     "Test-time compute",
     "Spending more inference tokens to buy accuracy"
    ]
   ],
   "explanation": "Definitions follow the module glossary. Open-weight is the entry most often misdefined: it means downloadable weights, not an open licence, and take-or-pay is about payment obligation rather than prepayment timing.",
   "source": "Module 1 note text, 14 Aug 2026, compiled 15 Sep 2026, glossary table (B6)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "glossary"
  },
  {
   "id": "m01-057",
   "type": "classify",
   "stem": "Classify the following statement.",
   "statement": "Payback on new Q2 2026 deals is estimated at one year ten months, with 50-60% of associated capex self-financed by customer prepayments.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 2,
   "explanation": "The payback figure is Nebius's own estimate on company methodology, using revenue recognition, forecast costs and capacity not yet built, so it is a company claim. It is not a fact from a primary source because no third party can verify it.",
   "source": "Nebius Q2 2026 shareholder letter, 12 Aug 2026",
   "as_of": "2026-08-12",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "metrics"
  },
  {
   "id": "m01-058",
   "type": "classify",
   "stem": "Classify the following statement.",
   "statement": "Industry-wide token processing was tracking near 300-370tn per day by mid-2026.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 1,
   "explanation": "This is an analyst estimate with definitional slack, which the register classes as an estimate or assumption. It is not a company claim because no company reports it, and not a fact because the per-day industry total is not measured by anyone.",
   "source": "Analyst estimate (io-fund), Aug 2026",
   "as_of": "2026-08-01",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "demand"
  },
  {
   "id": "m01-059",
   "type": "classify",
   "stem": "Classify the following statement in the structural protection versus narrative comfort framework.",
   "statement": "Under the March 2026 agreement, Meta must purchase specified capacity, up to $15bn, that Nebius fails to sell to third parties.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 0,
   "explanation": "The backstop is a contractual purchase obligation on a named counterparty, documented in the 20-F, so it is structural protection. It would be narrative comfort only if it were a stated intention rather than a signed obligation.",
   "source": "Nebius 2025 Form 20-F",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "contracts"
  },
  {
   "id": "m01-060",
   "type": "classify",
   "stem": "Classify the following statement in the structural protection versus narrative comfort framework.",
   "statement": "Nebius targets 5 GW of contracted power by year-end 2026.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 1,
   "explanation": "The 5 GW figure is management guidance with no counterparty bound to it, so it is narrative comfort even though it is quantified and has been raised repeatedly. Contracted power already secured would be structural; a target for it is not.",
   "source": "Nebius shareholder letters, Aug 2025 through 12 Aug 2026",
   "as_of": "2026-08-12",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "risk"
  }
 ],
 "glossary": [
  {
   "term": "Token",
   "aliases": [
    "tok",
    "subword unit"
   ],
   "definition": "Subword text fragment, ~0.75 English words; the unit of training data, pricing and usage",
   "relevance": "Token Factory's billing unit; the industry's demand metric",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "Parameter (total vs active)",
   "aliases": [
    "weights",
    "params",
    "MoE active params"
   ],
   "definition": "A learned model weight; MoE models activate only a subset per token",
   "relevance": "Active parameters set serving cost on Nebius hardware",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Transformer / attention",
   "aliases": [
    "self-attention",
    "attention mechanism"
   ],
   "definition": "Architecture letting every token weigh every other in parallel",
   "relevance": "Why the workload maps onto GPUs at all",
   "priority": "green",
   "module": 1,
   "variants": null
  },
  {
   "term": "Context window",
   "aliases": [
    "context length",
    "ctx window"
   ],
   "definition": "Tokens the model can hold per request (128k to 1m+)",
   "relevance": "Long context inflates memory demand, favouring H200/B300 fleets",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "KV cache",
   "aliases": [
    "key-value cache",
    "attention cache"
   ],
   "definition": "Per-token intermediate state kept in GPU memory during generation",
   "relevance": "Largest consumer of HBM in serving; a core optimisation target",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Mixture-of-experts (MoE)",
   "aliases": [
    "MoE",
    "sparse model",
    "expert routing"
   ],
   "definition": "Routing each token through a subset of the network",
   "relevance": "Dominant open-weight architecture served on Token Factory",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Pre-training",
   "aliases": [
    "pretraining",
    "base-model training"
   ],
   "definition": "Self-supervised training on trillions of tokens; the big episodic spend",
   "relevance": "The workload Nebius's large contiguous clusters are sold for",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Post-training (SFT, RLHF, RLVR)",
   "aliases": [
    "SFT",
    "RLHF",
    "DPO",
    "RLVR",
    "alignment training"
   ],
   "definition": "Turning a raw predictor into an assistant; RL on verifiable tasks builds reasoning",
   "relevance": "Generation-heavy RL blurs training into inference demand",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Distillation",
   "aliases": [
    "teacher-student training",
    "distilled model"
   ],
   "definition": "Training a small student on a large teacher's outputs",
   "relevance": "Feeds servable open-weight models; a Token Factory pipeline",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Quantisation (FP8/FP4, AWQ)",
   "aliases": [
    "INT8/FP8/FP4",
    "AWQ",
    "4-bit serving"
   ],
   "definition": "Compressing weights to 8- or 4-bit formats",
   "relevance": "Direct margin lever; Eigen AI co-founded the AWQ standard",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Prefill vs decode",
   "aliases": [
    "prompt processing vs generation"
   ],
   "definition": "Prompt processing (compute-bound) vs token generation (bandwidth-bound)",
   "relevance": "Explains inference hardware sizing and disaggregated serving",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "Continuous batching",
   "aliases": [
    "in-flight batching",
    "dynamic batching"
   ],
   "definition": "Admitting and retiring requests token-by-token to pack the GPU",
   "relevance": "The central throughput lever in Token Factory economics",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Throughput vs latency (TTFT)",
   "aliases": [
    "TTFT",
    "ITL",
    "latency SLO"
   ],
   "definition": "Tokens/s served vs time-to-first-token per user; a trade-off frontier",
   "relevance": "Why interactive serving runs below throughput-optimal utilisation",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "HBM",
   "aliases": [
    "HBM2e/HBM3/HBM3e",
    "stacked memory"
   ],
   "definition": "High-bandwidth memory stacked beside the GPU die",
   "relevance": "Supply chokepoint; capacity per GPU defines fleet generations",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Memory wall / bandwidth",
   "aliases": [
    "bandwidth wall",
    "data-movement bound"
   ],
   "definition": "Compute grew faster than memory speed; decode is bandwidth-bound",
   "relevance": "Why FLOP specs mislead; bandwidth sets token throughput",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "NVLink (scale-up)",
   "aliases": [
    "NVLink 5",
    "NVL72 domain",
    "scale-up fabric"
   ],
   "definition": "Fabric making 72 GPUs one coherent accelerator per rack",
   "relevance": "The NVL72 systems Nebius deploys; drives liquid cooling",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "InfiniBand vs Ethernet (scale-out)",
   "aliases": [
    "IB",
    "NDR/XDR",
    "RoCE",
    "Spectrum-X",
    "scale-out"
   ],
   "definition": "Cluster fabrics linking racks; IB for tail latency, Ethernet for cost",
   "relevance": "Nebius runs InfiniBand NDR/XDR; know both when hyperscalers visit",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "Goodput / MFU",
   "aliases": [
    "MFU",
    "effective utilisation"
   ],
   "definition": "Share of theoretical compute converted into useful work",
   "relevance": "Nebius's core engineering pitch (Exemplar, ClusterMAX Gold)",
   "priority": "amber",
   "module": 1,
   "variants": null
  },
  {
   "term": "Scaling laws / Chinchilla",
   "aliases": [
    "Kaplan laws",
    "Chinchilla-optimal",
    "20:1 ratio"
   ],
   "definition": "Predictable capability gains with compute; ~20 tokens/parameter optimum, now deliberately exceeded",
   "relevance": "Frames the demand-durability debate in every model",
   "priority": "green",
   "module": 1,
   "variants": null
  },
  {
   "term": "Test-time compute",
   "aliases": [
    "inference-time scaling",
    "reasoning tokens",
    "TTC"
   ],
   "definition": "Spending more inference tokens to buy accuracy (reasoning models)",
   "relevance": "A new demand axis landing on inference infrastructure",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "Agentic workload",
   "aliases": [
    "agents",
    "agentic AI",
    "autonomous workflows"
   ],
   "definition": "Multi-step autonomous tasks chaining many model calls",
   "relevance": "Consumption scales with work automated, not users; Tavily/Eigen layer",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "Open-weight model",
   "aliases": [
    "open weights",
    "OSS model (loose usage)"
   ],
   "definition": "Model whose weights are downloadable and self-hostable",
   "relevance": "Token Factory's entire catalogue (DeepSeek, Qwen, GLM, Kimi, Llama). Variant note: \"open-source\" used loosely in US media; open weights do not imply an open licence",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "Neocloud",
   "aliases": [
    "GPU cloud",
    "AI cloud",
    "GPU-as-a-service"
   ],
   "definition": "GPU-specialist cloud outside the hyperscalers (Nebius, CoreWeave)",
   "relevance": "Nebius's competitive set and the lens analysts apply to it",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "ARR (Nebius definition)",
   "aliases": [
    "annualised run-rate revenue",
    "run-rate ARR"
   ],
   "definition": "Last month of the quarter's AI cloud revenue x 12",
   "relevance": "Headline growth metric; a run rate, not SaaS recurring revenue. Variant note: US SaaS usage implies contracted recurring revenue; flag the difference",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "Take-or-pay",
   "aliases": [
    "ToP",
    "capacity reservation",
    "take-or-pay offtake"
   ],
   "definition": "Payment owed irrespective of utilisation",
   "relevance": "Basis of the Microsoft and Meta contracts; the credit backbone",
   "priority": "red",
   "module": 1,
   "variants": null
  },
  {
   "term": "Contracted / connected / active power",
   "aliases": [
    "capacity taxonomy",
    "MW pipeline states"
   ],
   "definition": "Secured by contract / built and equipped / consuming and revenue-generating",
   "relevance": "Nebius's own capacity taxonomy; never conflate the three",
   "priority": "red",
   "module": 1,
   "variants": null
  }
 ]
});
