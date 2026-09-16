window.NBIS_BANKS = window.NBIS_BANKS || [];
window.NBIS_BANKS.push({
 "bank_version": "2026-09-16",
 "module": 2,
 "module_title": "Data centre fundamentals (facility layer)",
 "items": [
  {
   "id": "m02-001",
   "type": "mcq",
   "select": "one",
   "stem": "In Nebius's three-tier capacity vocabulary, which definition describes connected power?",
   "options": [
    "Capacity secured by contracted land and power commitments",
    "Power connected into fully built and equipped data centres",
    "Power consumed by installed, operational IT equipment and available for revenue",
    "Utility intake at the grid connection before facility overheads",
    "Capacity reserved under customer contracts but not yet energised"
   ],
   "correct": [
    1
   ],
   "explanation": "Connected power is energised into built, equipped facilities. Contracted power (land and power secured) and active power (installed IT earning revenue) are the other two tiers; the strongest distractor, active power, is the next stage after connected, once IT is installed and consuming.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius Q1 2026 shareholder letter (F-002)",
   "as_of": "2026-03",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "capacity tiers"
  },
  {
   "id": "m02-002",
   "type": "mcq",
   "select": "one",
   "stem": "As at July 2025, what industry weighted-average PUE did the Uptime Institute Global Data Center Survey 2025 report?",
   "options": [
    "1.09",
    "1.25",
    "1.54",
    "1.67",
    "2.0"
   ],
   "correct": [
    2
   ],
   "explanation": "The Uptime 2025 survey average was 1.54, essentially flat for six years. 1.25 is Nebius's company-reported portfolio figure and 1.09 is Google's disclosed fleet PUE; both are operator figures, not the industry average.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Uptime Institute Global Data Center Survey 2025, Jul 2025 (F-044)",
   "as_of": "2025",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "PUE"
  },
  {
   "id": "m02-003",
   "type": "mcq",
   "select": "one",
   "stem": "Why has mechanical (cooling) plant traditionally been fed outside the UPS?",
   "options": [
    "Cooling plant draws more current than double-conversion static UPS modules can carry",
    "Standby generators accept load faster than UPS batteries can be recharged",
    "Cooling plant operates at medium voltage, upstream of the low-voltage UPS bus",
    "Thermal mass lets an air-cooled hall ride through a brief cooling interruption",
    "Uptime tier rules prohibit mechanical loads on the critical bus"
   ],
   "correct": [
    3
   ],
   "explanation": "Thermal ride-through in an air-cooled hall means a short cooling interruption is tolerable, so UPS capacity is reserved for the IT load. The current-draw option is a plausible misreading but the note gives ride-through, not sizing, as the reason; liquid-cooled halls lose that ride-through and must move pumps onto UPS.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Schneider Electric, The AI Factory white paper (project files) (F-022)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "power train"
  },
  {
   "id": "m02-004",
   "type": "mcq",
   "select": "one",
   "stem": "A standard rear-door heat exchanger is designed for roughly 30 to 40 kW racks, and a GB300 NVL72 rack is reported at about 135 to 142 kW. Which conclusion follows?",
   "options": [
    "It needs direct-to-chip liquid cooling; rear-door units cannot carry the load",
    "Fitting two rear-door units per rack would bring the GB300 NVL72 within the rear-door design range",
    "Rear-door units suffice provided hot and cold aisle containment is added",
    "The GB300 NVL72 can be air-cooled with high-velocity chassis fans",
    "Rear-door units are adequate whenever the rack runs at partial load below 40 kW"
   ],
   "correct": [
    0
   ],
   "explanation": "The rack sheds over three times the rear-door ceiling and is fully liquid-cooled as a platform, so cold plates and a CDU are required. Doubling rear-door units is the strongest distractor, but the note states standard units cannot handle NVL-class loads and the servers would remain internally air-cooled.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Spheron, GB200 NVL72 guide, Mar 2026; Nvidia; ModulEdge, Jun 2026 (F-028, F-089)",
   "as_of": "2026-03",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "cooling"
  },
  {
   "id": "m02-005",
   "type": "mcq",
   "select": "one",
   "stem": "Under the Uptime Institute tier classification, what does Tier III certify?",
   "options": [
    "Basic capacity with no redundant components and a single distribution path",
    "Redundant components on a single distribution path",
    "Fault tolerance, with independent and physically isolated systems and continuous cooling throughout",
    "A contractually guaranteed availability of 99.982 per cent per year",
    "Concurrent maintainability: any component can be serviced without dropping the load"
   ],
   "correct": [
    4
   ],
   "explanation": "Tier III is concurrently maintainable. Fault tolerance with continuous cooling is Tier IV; redundant components alone is Tier II. The availability percentage is folk shorthand, not something the certification confers, so it is the strongest distractor and still wrong.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Uptime Institute, as tabulated in the Data Centre Impact Study, Nov 2025 (project files) (F-065, F-066)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "tiers"
  },
  {
   "id": "m02-006",
   "type": "mcq",
   "select": "one",
   "stem": "As at 2024, US powered shell cap rates sat around 5 per cent against mid-6 per cent for turnkey. What explains the tighter powered shell pricing?",
   "options": [
    "Powered shell leases are shorter, so rent resets faster to market",
    "Powered shells carry higher rents per kW than turnkey halls",
    "Turnkey operators retain no operational or technology risk, so investors demand less yield from turnkey than from shells",
    "The tenant funds and owns the M&E, leaving the landlord a simpler credit-lease cash flow",
    "Powered shells are typically Tier IV certified"
   ],
   "correct": [
    3
   ],
   "explanation": "With tenant-owned M&E the landlord income is bond-like, so the yield is lower; the turnkey spread compensates the operational and technology risk the operator retains. The fourth option inverts the risk allocation, which is the common misreading.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Avison Young, US Data Center Update, Q1 2025 (project files) (F-075, F-076)",
   "as_of": "2024",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "taxonomy"
  },
  {
   "id": "m02-007",
   "type": "mcq",
   "select": "one",
   "stem": "Nebius states that its original Finnish air-based design achieves cooling in which way?",
   "options": [
    "Chilled-water CRAH units rejecting heat through rooftop air-cooled chillers and dry coolers",
    "Evaporative cooling towers drawing on municipal water",
    "Filtered outside air with no mechanical chillers, water or refrigerants",
    "Rear-door heat exchangers fitted to every rack",
    "Direct-expansion CRAC units with airside free-cooling economisers"
   ],
   "correct": [
    2
   ],
   "explanation": "Nebius describes filtered outside air with no chillers, water or refrigerants, enabled by servers rated for elevated temperatures. The economiser option is the strongest distractor: free cooling bypasses a chiller for part of the year, whereas the Nebius design has no chiller at all.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius 2025 Sustainability Report (F-026)",
   "as_of": "2025",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "cooling"
  },
  {
   "id": "m02-008",
   "type": "mcq",
   "select": "one",
   "stem": "Which combination correctly describes the composition of a GB200 NVL72 rack?",
   "options": [
    "72 GPUs and 36 Grace CPUs across 18 compute trays and 9 switch trays",
    "72 GPUs and 72 Grace CPUs across 36 compute trays and 9 switch trays",
    "36 GPUs and 18 Grace CPUs across 9 compute trays and 18 switch trays",
    "72 GPUs and 36 Grace CPUs across 9 compute trays and 18 switch trays"
   ],
   "correct": [
    0
   ],
   "explanation": "The rack integrates 72 GPUs and 36 Grace CPUs in 18 compute trays with 9 NVLink switch trays, behaving as a single NVLink domain. The last option transposes the tray counts, the most common slip; the second doubles the CPU count.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; SemiAnalysis, Oct 2025; Nvidia documentation (F-085)",
   "as_of": "2025",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "rack-scale systems"
  },
  {
   "id": "m02-009",
   "type": "mcq",
   "select": "one",
   "stem": "Under direct-to-chip cooling, what happens to reported PUE if rack-integrated pump and fan energy is metered as IT load?",
   "options": [
    "PUE worsens because the additional pumping energy is added to the facility overhead numerator",
    "PUE is unaffected because the total energy drawn by the facility does not change",
    "PUE becomes undefined because IT energy can no longer be isolated from cooling energy",
    "PUE falls below 1.0 once pumps are counted as IT",
    "PUE improves with no genuine efficiency gain, since overhead moves into the denominator"
   ],
   "correct": [
    4
   ],
   "explanation": "Energy that was overhead in the numerator moves into the IT denominator, so the ratio improves while the work of cooling is unchanged; the note flags this as a boundary question to put to any operator. The second option is the strongest distractor: total energy is constant, but the ratio is not.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026 (F-053)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "PUE"
  },
  {
   "id": "m02-010",
   "type": "mcq",
   "select": "one",
   "stem": "What is the primary role of the UPS in the critical path of a data centre power train?",
   "options": [
    "To bridge the seconds between a utility disturbance and generators accepting load",
    "To supply the entire IT load for several hours during an extended utility outage",
    "To step voltage down from medium to low voltage at the unit substations",
    "To provide the tie point where redundant utility feeds and standby sources connect",
    "To smooth cooling plant load during chiller start-up"
   ],
   "correct": [
    0
   ],
   "explanation": "Battery strings are sized for minutes, and their job is to carry the load across the gap before generators stabilise. The hours-long option is the strongest distractor: sustained autonomy is the generators' role, with days of fuel on site, not the UPS's.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius 2025 Sustainability Report definition footnote; engineering convention (F-017)",
   "as_of": "2025",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "power train"
  },
  {
   "id": "m02-011",
   "type": "mcq",
   "select": "one",
   "stem": "As at the CBRE 2025 Global Data Center Investor Intentions Survey, which segment was the most preferred for new investment for the third consecutive year?",
   "options": [
    "Retail colocation",
    "Turnkey hyperscale",
    "Powered shell",
    "Edge facilities",
    "Enterprise self-build"
   ],
   "correct": [
    1
   ],
   "explanation": "Turnkey hyperscale led for a third year, with hyperscale build-to-suit named the top opportunity by 49 per cent of respondents. Powered shell was second at 28 per cent, making it the strongest distractor; retail colocation is among the largest existing exposures, not the preferred new investment.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; CBRE 2025 Global Data Center Investor Intentions Survey (project files) (F-074)",
   "as_of": "2025",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "taxonomy"
  },
  {
   "id": "m02-012",
   "type": "mcq",
   "select": "one",
   "stem": "Nebius states that in Q2 2026 it introduced an asset-light partnership model. Under that model, what does Nebius supply?",
   "options": [
    "Land, facility and power, with the partner supplying the hardware",
    "Hardware only, installed in partner-owned and partner-operated facilities",
    "The software stack and go-to-market; partners fund and own facilities and hardware",
    "Construction finance for partner facilities that are built to Nebius reference designs",
    "Colocation space leased from partners on long-term contracts"
   ],
   "correct": [
    2
   ],
   "explanation": "Partners fund and own facilities and hardware built to Nebius reference designs; Nebius supplies the software stack and go-to-market and converts partner-financed capacity into revenue with minimal capital outlay. The construction-finance option contradicts the minimal-outlay point and is the strongest distractor.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius Q2 2026 shareholder letter; press release, 15 Jul 2026 (F-082)",
   "as_of": "2026-07",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "delivery models"
  },
  {
   "id": "m02-013",
   "type": "mcq",
   "select": "one",
   "stem": "Within what interval has NERC documented ramp behaviour on emerging large loads such as synchronised AI training?",
   "options": [
    "Within roughly five seconds",
    "Within about one minute",
    "Within roughly fifteen minutes",
    "Within a quarter of a second"
   ],
   "correct": [
    3
   ],
   "explanation": "NERC documented ramps within a quarter of a second, with training profiles oscillating between high-utilisation and checkpoint states. The minute-scale option is the strongest distractor because legacy colocation billing and thermal management were built for minute-to-minute swings; training loads move far faster than that.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; NERC 2025, as cited in the Data Centre Impact Study, Nov 2025 (project files) (F-100)",
   "as_of": "2025",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "load behaviour"
  },
  {
   "id": "m02-014",
   "type": "mcq",
   "select": "one",
   "stem": "As at mid-2026, how should the 800 V DC distribution architecture announced for the Kyber rack generation be treated in a facility model?",
   "options": [
    "As current practice already deployed in GB300 NVL72 halls at Nebius and elsewhere",
    "As a 2027-plus design assumption, since it is announced rather than deployed",
    "As an architecture superseded by 415 V AC busbar distribution",
    "As a hyperscaler-only standard with no relevance to neocloud facility design",
    "As a mandatory Uptime Tier IV requirement"
   ],
   "correct": [
    1
   ],
   "explanation": "The note flags 800 VDC as announced architecture for the second half of 2027, to be modelled as a 2027-plus assumption. The first option is the strongest distractor because GB300 does use DC busbar within the rack, but its power shelves are fed at 415 V three-phase AC, not 800 VDC.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nvidia GTC 2025 via DCD, The Register, Tom's Hardware; ModulEdge, Jun 2026 (F-091, F-092)",
   "as_of": "2026",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "rack-scale systems"
  },
  {
   "id": "m02-015",
   "type": "mcq",
   "select": "all",
   "stem": "Which of the following areas are grey space rather than white space?",
   "options": [
    "UPS and battery rooms",
    "Data hall rack rows",
    "CDU galleries",
    "Hot and cold aisle containment",
    "Meet-me rooms for carrier interconnection",
    "Generator yards"
   ],
   "correct": [
    0,
    2,
    4,
    5
   ],
   "explanation": "Grey space is the supporting electrical and mechanical plant: UPS rooms, CDU galleries, generator yards, cooling plant, meet-me rooms and the operations centre. Rack rows and aisle containment sit inside the revenue-generating data hall and are white space; containment is the strongest distractor because it is infrastructure, but it is hall infrastructure.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Industry convention, as stated in the note (F-038)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "facility anatomy"
  },
  {
   "id": "m02-016",
   "type": "mcq",
   "select": "all",
   "stem": "Which of the following are arguments the note gives AGAINST running AI training halls at reduced redundancy?",
   "options": [
    "A hall-wide power event destroys expensive progress between checkpoints",
    "Training clusters already tolerate constant hardware failure through checkpointing",
    "Thermal ride-through at liquid-cooled densities is seconds, not minutes",
    "Shaving 2N to N+1 materially cuts cost per MW and build time",
    "Inference and enterprise cloud revenue on the same campus still demands availability",
    "Customer contracts, insurers and lenders have not yet repriced reduced-redundancy designs"
   ],
   "correct": [
    0,
    2,
    4,
    5
   ],
   "explanation": "The counterarguments are the inter-checkpoint loss, seconds of thermal ride-through, mixed revenue needing availability, and unrepriced contracts, insurers and lenders. Checkpoint tolerance and cost savings are the bear case FOR cutting redundancy; the checkpointing point is the strongest distractor because it appears on both sides of the debate in different roles.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026 (F-062, F-063)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "redundancy"
  },
  {
   "id": "m02-017",
   "type": "mcq",
   "select": "all",
   "stem": "According to the BEEHE Electric white paper cited in the note, which operational risks does liquid cooling introduce in place of airflow problems?",
   "options": [
    "Coolant leakage",
    "Hot-aisle recirculation",
    "Water chemistry",
    "Filter contamination",
    "Hydraulic imbalance",
    "Raised-floor tile bypass"
   ],
   "correct": [
    0,
    2,
    3,
    4
   ],
   "explanation": "The white paper lists coolant leakage, water chemistry, filter contamination and hydraulic imbalance as the new risk set. Hot-aisle recirculation and floor-tile bypass are airflow problems of the air-cooled world that liquid cooling replaces; recirculation is the strongest distractor because residual air cooling persists, but it is not a liquid-loop risk.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; BEEHE Electric, Beyond PUE white paper, 2026 (project files) (F-033)",
   "as_of": "2026",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "cooling"
  },
  {
   "id": "m02-018",
   "type": "mcq",
   "select": "all",
   "stem": "Nebius states a preference for greenfield self-build. As at May 2026, which of the following does it list as owned sites?",
   "options": [
    "Mäntsälä",
    "Paris",
    "Lappeenranta",
    "Kansas City",
    "Lille",
    "Independence, Missouri"
   ],
   "correct": [
    0,
    2,
    4,
    5
   ],
   "explanation": "Mäntsälä (75 MW), Lappeenranta (up to 310 MW), Lille (240 MW) and the 1.2 GW Independence campus are owned. Paris and Kansas City are colocation sites used opportunistically for speed; Kansas City is the strongest distractor because it sits in the same state as the Independence campus.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Form 20-F FY2025; press releases of 31 Mar and 12 May 2026; Q1 2026 shareholder letter (F-079, F-080, F-081)",
   "as_of": "2026-05",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "Nebius footprint"
  },
  {
   "id": "m02-019",
   "type": "mcq",
   "select": "all",
   "stem": "On which fronts is the retrofit of a legacy 8 to 12 kW colocation hall for NVL-class racks constrained?",
   "options": [
    "Power density per rack position",
    "Carrier density and interconnection",
    "Floor structure",
    "Cooling, including the absence of facility water loops",
    "Fibre route diversity"
   ],
   "correct": [
    0,
    2,
    3
   ],
   "explanation": "The three simultaneous constraints are power per rack position, floor loading and cooling. Carrier density is the strongest distractor: it is central to retail colocation value but the note says it matters far less for AI factories, and it is not a retrofit constraint; fibre diversity is a site attribute, not a hall limitation.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026 (F-097)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "legacy stock"
  },
  {
   "id": "m02-020",
   "type": "mcq",
   "select": "all",
   "stem": "Which statements correctly describe how AI factories differ from classical colocation?",
   "options": [
    "The unit of demand is tens to hundreds of megawatts for one tenant",
    "Carrier density and interconnection ecosystems drive most of the value",
    "Speed-to-power replaces location as the binding site-selection constraint",
    "The facility is engineered around a specific accelerator generation",
    "The typical tenant is an enterprise buying racks and cages"
   ],
   "correct": [
    0,
    2,
    3
   ],
   "explanation": "AI factories are single-tenant at tens to hundreds of MW, sited for speed-to-power and engineered around one accelerator generation. Carrier density is the heart of retail colocation value and matters far less here, making it the strongest distractor; racks and cages describe the retail buyer, not the AI factory.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026 (F-078)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "delivery models"
  },
  {
   "id": "m02-021",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following statements do NOT apply to a powered shell lease?",
   "options": [
    "The landlord delivers the building plus power to the wall",
    "The operator funds, installs and owns the mechanical and electrical fit-out",
    "The tenant funds, installs and owns the M&E",
    "Landlord income has a bond-like, credit-lease character",
    "Space is sold as racks, cages and cross-connects to many tenants"
   ],
   "correct": [
    1,
    4
   ],
   "explanation": "In a powered shell the tenant owns the M&E, so operator-funded fit-out describes turnkey wholesale, not a shell; racks and cages to many tenants describes retail colocation. The operator-funded option is the strongest distractor because it is true of the neighbouring turnkey model.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Market convention (project-file market reports) (F-071, F-069, D-008)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "delivery models"
  },
  {
   "id": "m02-022",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following statements do NOT apply to PUE as defined in the note?",
   "options": [
    "It is total facility energy divided by IT equipment energy",
    "It includes water consumption within its scope",
    "Its theoretical floor is 1.0",
    "It measures the efficiency of the IT equipment itself",
    "It is a dimensionless ratio"
   ],
   "correct": [
    1,
    3
   ],
   "explanation": "PUE excludes water use and IT efficiency by design; water is WUE's domain and IT efficiency is outside the ratio entirely. The water option is the strongest distractor because the two metrics are routinely quoted together, but they measure different overheads over the same IT-energy denominator.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Metric definition (Green Grid / Uptime convention) (F-043, F-052, D-003)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "PUE"
  },
  {
   "id": "m02-023",
   "type": "mcq",
   "select": "all_not",
   "stem": "Which of the following statements do NOT apply to a GB200 NVL72 rack as described in the note?",
   "options": [
    "It weighs about 1.36 tonnes",
    "It is cooled by a standard rear-door heat exchanger with servers air-cooled internally",
    "It behaves as a single NVLink domain",
    "It draws about 40 kW nominal at full load",
    "It requires dedicated three-phase circuits and direct liquid cooling"
   ],
   "correct": [
    1,
    3
   ],
   "explanation": "The rack draws about 120 kW nominal (130 to 132 kW observed) and needs direct-to-chip cooling, since standard rear-door units top out around 30 to 40 kW and air is not viable at that load. The 40 kW figure is the strongest distractor: it is the dense air-cooled H100 rack, one generation earlier.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; SemiAnalysis, Oct 2025; Spheron, Mar 2026; ModulEdge, Jun 2026 (F-085, F-086, F-087, F-088, F-028)",
   "as_of": "2026",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "rack-scale systems"
  },
  {
   "id": "m02-024",
   "type": "mcq",
   "select": "all_not",
   "stem": "Nebius describes its liquid-cooling architecture at owned sites. Which of the following do NOT apply to that architecture as Nebius states it?",
   "options": [
    "A closed glycol loop carries heat from the racks",
    "Heat is rejected through rooftop dry coolers",
    "Evaporative cooling towers consume water to save fan energy",
    "A heat-exchange provision allows export of heat to municipal partners",
    "The system draws water from an open intake and discharges it after use"
   ],
   "correct": [
    2,
    4
   ],
   "explanation": "Nebius states a closed glycol loop, rooftop dry coolers, no water intake, discharge or evaporation, and a heat-export provision. Evaporative towers and open intake both consume or exchange water, which the closed design excludes; the tower option is the strongest distractor because towers are the generic alternative that trades water for lower PUE.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius 2025 Sustainability Report (F-035, F-036)",
   "as_of": "2025",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "cooling"
  },
  {
   "id": "m02-025",
   "type": "recall",
   "stem": "Name the Nebius capacity tier defined as capacity secured by contracted land and power commitments.",
   "accept": [
    "Contracted power",
    "contracted capacity",
    "secured power",
    "contracted"
   ],
   "fuzzy": true,
   "explanation": "Contracted power is the headline tier, secured by land and power commitments and guided to 5 GW by end-2026. Connected power is the commonest confusion, but that tier requires the facility to be built, equipped and energised.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius Q1 2026 shareholder letter (F-001)",
   "as_of": "2026-03",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "capacity tiers"
  },
  {
   "id": "m02-026",
   "type": "recall",
   "stem": "Nebius reports a WUE figure for Finland-1 for FY2025 in litres per kWh of IT energy. What is that figure?",
   "accept": [
    "0.018",
    "0.018 L/kWh",
    "0.018 litres per kWh"
   ],
   "fuzzy": false,
   "explanation": "Nebius reports 0.018 L/kWh at Finland-1, reflecting the no-intake closed-loop design. The projected 2025 US average of 0.46 L/kWh is the figure most often confused with it; hyperscalers report 0.03 to 0.3.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius 2025 Sustainability Report (F-058)",
   "as_of": "2025",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "WUE"
  },
  {
   "id": "m02-027",
   "type": "recall",
   "stem": "As at May 2026, which company is Nebius's partner for the 328 MW of behind-the-meter fuel-cell capacity it states it has contracted?",
   "accept": [
    "Bloom Energy",
    "Bloom"
   ],
   "fuzzy": true,
   "explanation": "The 328 MW fuel-cell commitment is contracted through the Bloom Energy partnership and previews the module 5 theme that the grid queue, not capital, is the binding constraint. Nvidia is the obvious wrong answer for a Nebius partner question; it supplies accelerators, not generation.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius 2025 Sustainability Report; press release, 20 May 2026 (F-019)",
   "as_of": "2026-05",
   "time_sensitive": true,
   "difficulty": 1,
   "topic": "power train"
  },
  {
   "id": "m02-028",
   "type": "recall",
   "stem": "What is the US term for the product the UK market calls a powered shell?",
   "accept": [
    "Powered base building",
    "PBB",
    "powered base bldg"
   ],
   "fuzzy": true,
   "explanation": "US usage is powered base building, abbreviated PBB; the UK term is also used in the US. Shell-and-core is the nearest confusion, but that describes a building without the power provision that defines the product.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Glossary register B6 (Glossary: Powered shell)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "terminology"
  },
  {
   "id": "m02-029",
   "type": "recall",
   "stem": "Which North American reliability body has documented large-load ramp behaviour occurring within a quarter of a second?",
   "accept": [
    "NERC",
    "North American Electric Reliability Corporation"
   ],
   "fuzzy": true,
   "explanation": "NERC 2025, as cited in the Data Centre Impact Study, documented the sub-second ramps produced by synchronised training. FERC is the frequent confusion: it is the federal regulator, whereas NERC is the reliability body that studies load behaviour.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; NERC 2025, as cited in the Data Centre Impact Study, Nov 2025 (project files) (F-100)",
   "as_of": "2025",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "load behaviour"
  },
  {
   "id": "m02-030",
   "type": "recall",
   "stem": "Which Uptime tier is defined as fault-tolerant with independent, isolated systems and continuous cooling?",
   "accept": [
    "Tier IV",
    "Tier 4",
    "IV",
    "4",
    "Tier four"
   ],
   "fuzzy": false,
   "explanation": "Tier IV is fault-tolerant with continuous cooling. Tier III, the usual confusion, certifies only concurrent maintainability: components can be serviced without dropping the load, but a fault can still take it down.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Uptime Institute, as tabulated in the Data Centre Impact Study, Nov 2025 (project files) (F-065)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "tiers"
  },
  {
   "id": "m02-031",
   "type": "recall",
   "stem": "Nebius states that it holds a named NVIDIA status on GB300 NVL72 for training workloads. What is that status called?",
   "accept": [
    "Exemplar Cloud",
    "NVIDIA Exemplar Cloud",
    "Nvidia Exemplar Cloud status"
   ],
   "fuzzy": true,
   "explanation": "The Q1 2026 shareholder letter states NVIDIA Exemplar Cloud status on GB300 NVL72 for training, across multiple GPU generations. Reference-design or preferred-partner labels are the common confusions but are not the term Nebius uses.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius Q1 2026 shareholder letter (F-094)",
   "as_of": "2026-03",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "rack-scale systems"
  },
  {
   "id": "m02-032",
   "type": "recall",
   "stem": "As at 2026, in the project pipeline cited in the note, for which company is Crusoe building to suit, with the capacity consumed by OpenAI?",
   "accept": [
    "Oracle",
    "Oracle Corporation"
   ],
   "fuzzy": true,
   "explanation": "Crusoe builds to suit for Oracle, with OpenAI consuming the capacity; the chain illustrates build-to-suit operating at gigawatt scale. Microsoft is the common wrong answer through its association with OpenAI, but it is not the counterparty in this pipeline example.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Data Centres: The Leading Questions, 2026 (project files) (F-077)",
   "as_of": "2026",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "delivery models"
  },
  {
   "id": "m02-033",
   "type": "define",
   "stem": "Define active power as Nebius reports it.",
   "model_answer": "Active power is the power consumed by installed, operational IT equipment that is available for revenue generation.",
   "rubric": {
    "must": [
     [
      "consumed",
      "drawn",
      "used",
      "consumption",
      "consuming"
     ],
     [
      "installed IT",
      "installed equipment",
      "operational IT",
      "IT equipment",
      "installed operational"
     ],
     [
      "revenue",
      "revenue generation",
      "billable",
      "earning",
      "earns"
     ]
    ],
    "should": [
     [
      "available",
      "ready",
      "revenue ready"
     ]
    ],
    "should_min": 0,
    "forbid": []
   },
   "explanation": "Active power is consumed by installed, operational IT and is revenue-ready; it was roughly 170 MW at end-2025. Answers describing energised but unpopulated capacity describe connected power, the adjacent tier, not active power.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius Q1 2026 shareholder letter (F-003)",
   "as_of": "2026-03",
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "capacity tiers"
  },
  {
   "id": "m02-034",
   "type": "define",
   "stem": "Define PUE and state its theoretical floor.",
   "model_answer": "PUE is total facility energy divided by IT equipment energy, a dimensionless ratio whose theoretical floor is 1.0.",
   "rubric": {
    "must": [
     [
      "total facility energy",
      "facility energy",
      "total energy",
      "total power",
      "facility power",
      "total site energy"
     ],
     [
      "IT energy",
      "IT equipment energy",
      "IT load",
      "IT power",
      "energy used by IT",
      "energy consumed by IT"
     ],
     [
      "divided by",
      "ratio",
      "over",
      "per unit",
      "relative to",
      "equals",
      "compared to",
      "energy it energy",
      "power it power",
      "energy it load",
      "energy it equipment"
     ]
    ],
    "should": [
     [
      "1.0",
      "one",
      "floor of 1",
      "floor 1",
      "unity"
     ]
    ],
    "should_min": 1,
    "forbid": [
     [
      "water"
     ]
    ]
   },
   "explanation": "PUE is total facility energy over IT energy; 1.0 is the floor because IT energy cannot exceed total energy. Any mention of water confuses it with WUE, which measures litres per kWh of IT energy; PUE excludes water by design.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Metric definition (Green Grid / Uptime convention) (M-001, F-043)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "PUE"
  },
  {
   "id": "m02-035",
   "type": "define",
   "stem": "Define concurrent maintainability as the substance behind an Uptime Tier III claim.",
   "model_answer": "Concurrent maintainability means any component of the topology can be serviced or replaced without shutting down the IT load.",
   "rubric": {
    "must": [
     [
      "component",
      "any component",
      "equipment",
      "plant",
      "system",
      "part",
      "facility",
      "site",
      "infrastructure",
      "topology"
     ],
     [
      "serviced",
      "maintained",
      "service",
      "maintenance",
      "repaired",
      "replaced",
      "taken out",
      "removed"
     ],
     [
      "without shutting down",
      "without dropping",
      "without interrupting",
      "without downtime",
      "without taking down",
      "load stays",
      "load remains",
      "no interruption",
      "still running",
      "stays up",
      "keeps running",
      "without taking the load",
      "load offline",
      "without an outage",
      "without outage",
      "without shutdown",
      "live"
     ]
    ],
    "should": [
     [
      "Tier III",
      "Tier 3"
     ],
     [
      "load",
      "IT load",
      "critical load"
     ]
    ],
    "should_min": 0,
    "forbid": []
   },
   "explanation": "Tier III certifies that any component can be taken out for service without dropping the load. It does not certify fault tolerance, which is Tier IV, and it confers no availability percentage; the common error is to describe Tier III as surviving a fault rather than surviving maintenance.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Uptime Institute, as tabulated in the Data Centre Impact Study, Nov 2025 (project files) (F-065, Glossary: Concurrent maintainability)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "tiers"
  },
  {
   "id": "m02-036",
   "type": "define",
   "stem": "Distinguish white space from grey space in a data centre.",
   "model_answer": "White space is the data hall with the racks that earns revenue directly; grey space is the supporting electrical and mechanical plant, such as UPS rooms, generator yards and cooling plant, that keeps it alive.",
   "rubric": {
    "must": [
     [
      "earns revenue",
      "revenue",
      "generates revenue",
      "billable",
      "sellable",
      "sold"
     ],
     [
      "supporting",
      "supports",
      "support",
      "keeps it alive",
      "keeps it running",
      "plant",
      "back of house",
      "electrical and mechanical",
      "M&E"
     ],
     [
      "data hall",
      "racks",
      "halls",
      "computer room",
      "rack space"
     ]
    ],
    "should": [
     [
      "UPS",
      "generator",
      "cooling plant",
      "CDU",
      "electrical rooms",
      "battery rooms",
      "switchgear"
     ]
    ],
    "should_min": 0,
    "forbid": []
   },
   "explanation": "White space earns revenue directly (halls, racks, containment); grey space supports it (electrical rooms, UPS, generators, cooling plant, CDU galleries, meet-me rooms). The usual error is to file the operations centre or meet-me rooms as white space because they are occupied, but they do not host billable racks.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Industry convention, as stated in the note (D-004, F-038)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "facility anatomy"
  },
  {
   "id": "m02-037",
   "type": "define",
   "stem": "Explain why the spread between Nebius's contracted, connected and active power is a measure of execution risk.",
   "model_answer": "Contracted megawatts earn nothing until they are carried through construction, energisation and hardware installation, and each of those transitions carries schedule, supply-chain and commissioning risk, so a wide spread means more capacity still exposed to delay.",
   "rubric": {
    "must": [
     [
      "earn nothing",
      "earns nothing",
      "no revenue",
      "not yet revenue",
      "does not earn",
      "earn no revenue",
      "not billable",
      "not revenue",
      "no income",
      "not earning"
     ],
     [
      "construction",
      "built",
      "build",
      "energisation",
      "energised",
      "commissioning",
      "installation",
      "installed",
      "constructed"
     ]
    ],
    "should": [
     [
      "schedule",
      "supply chain",
      "delay",
      "delayed",
      "delays",
      "slippage",
      "slip",
      "slips",
      "commissioning risk",
      "timing"
     ],
     [
      "transition",
      "stage",
      "step",
      "tier",
      "gap",
      "spread"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "Contracted capacity is only land and power secured; it must be built, energised and populated with hardware before it earns, and each step can slip. The wide spread (over 3.5 GW contracted against roughly 170 MW active) is therefore unearned capacity exposed to delivery risk, not a pipeline of near-certain revenue.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026 (F-010, P-005)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "capacity tiers"
  },
  {
   "id": "m02-038",
   "type": "define",
   "stem": "Explain the water-versus-power trade-off between evaporative cooling and dry cooling, and what decides which side is cheap.",
   "model_answer": "Evaporative systems such as cooling towers save power but consume water, whereas dry coolers and air-cooled chillers save water but spend fan energy and worsen PUE; the site climate decides which side of the trade is cheap.",
   "rubric": {
    "must": [
     [
      "evaporative",
      "cooling tower",
      "towers",
      "wet cooling",
      "evaporation"
     ],
     [
      "consume water",
      "consumes water",
      "uses water",
      "water consumption",
      "spends water",
      "water use",
      "use water",
      "spend water"
     ],
     [
      "dry cooler",
      "dry coolers",
      "air cooled chiller",
      "air cooled",
      "fan energy",
      "fan power",
      "fans",
      "closed coil"
     ]
    ],
    "should": [
     [
      "PUE",
      "energy",
      "power",
      "electricity"
     ],
     [
      "climate",
      "site",
      "location",
      "ambient",
      "hot climates",
      "cool climates"
     ]
    ],
    "should_min": 1,
    "forbid": []
   },
   "explanation": "Evaporation removes heat cheaply in energy terms but at the cost of water; dry rejection avoids water but the fans cost energy and push PUE up. Climate sets the price of each side. The common error is to present low WUE as free; Nebius's near-zero WUE is paid for in fan energy.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Engineering convention, as stated in the note (F-036, F-037, D-013)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "cooling"
  },
  {
   "id": "m02-039",
   "type": "define",
   "stem": "Define a powered shell as a delivery model.",
   "model_answer": "A powered shell is a building delivered with power to the wall, where the tenant funds, installs and owns the mechanical and electrical fit-out, leaving the landlord a bond-like income.",
   "rubric": {
    "must": [
     [
      "building",
      "shell",
      "base building",
      "structure"
     ],
     [
      "power to the wall",
      "with power",
      "plus power",
      "power in place",
      "power connection",
      "power supply",
      "powered",
      "grid connection",
      "utility power",
      "power delivered",
      "power provided",
      "power brought",
      "power supplied",
      "power available"
     ],
     [
      "tenant funds",
      "tenant installs",
      "tenant owns",
      "tenant fits out",
      "tenant provides",
      "occupier installs",
      "occupier funds",
      "tenant owned",
      "tenant supplies",
      "tenant pays",
      "tenant builds"
     ]
    ],
    "should": [
     [
      "bond like",
      "credit lease",
      "tighter cap rate",
      "lower cap rate",
      "lower yield",
      "simpler"
     ]
    ],
    "should_min": 0,
    "forbid": [
     [
      "operator funds",
      "operator installs",
      "operator fitted",
      "operator owns",
      "landlord installs",
      "landlord funds the M&E",
      "landlord owns the M&E"
     ]
    ]
   },
   "explanation": "The landlord delivers building and power; the tenant installs and owns the M&E, so landlord income is bond-like and priced tighter than turnkey. Saying the operator or landlord funds the fit-out describes turnkey wholesale, the neighbouring model, and fails the definition.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Market convention (project-file market reports) (F-071, Glossary: Powered shell)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "delivery models"
  },
  {
   "id": "m02-040",
   "type": "define",
   "stem": "Explain why coolant distribution units and pumps must now be UPS-backed in high-density liquid-cooled halls.",
   "model_answer": "At 100 kW-plus rack densities the thermal ride-through is only seconds, so a pump or CDU interruption would cause throttling or damage before generators pick up the load, which makes cooling continuity as critical as power continuity.",
   "rubric": {
    "must": [
     [
      "seconds",
      "second",
      "within seconds",
      "almost immediately",
      "instantly"
     ],
     [
      "ride through",
      "thermal mass",
      "throttling",
      "throttle",
      "overheat",
      "damage",
      "overheating",
      "thermal"
     ],
     [
      "pump",
      "pumps",
      "coolant",
      "flow",
      "CDU",
      "liquid"
     ]
    ],
    "should": [
     [
      "density",
      "100 kW",
      "liquid cooled",
      "NVL",
      "high density",
      "dense"
     ],
     [
      "generator",
      "transfer",
      "outage",
      "disturbance"
     ]
    ],
    "should_min": 0,
    "forbid": []
   },
   "explanation": "An air-cooled hall has thermal mass to survive a short cooling gap; a liquid-cooled hall at 100 kW plus per rack has seconds, so pumps and CDUs need UPS backing with redundant pumps and supplies. The error is to keep the legacy assumption that mechanical plant can sit outside the protected path.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Schneider Electric, The AI Factory white paper (project files) (F-023, F-022)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "cooling"
  },
  {
   "id": "m02-041",
   "type": "numeric",
   "stem": "A site has 150 MW of grid intake and an annualised PUE of 1.25. Approximately what IT load, in MW, does it support at steady state?",
   "value": 120,
   "tolerance_pct": 3,
   "unit": "MW",
   "working": "IT load = gross intake / PUE = 150 / 1.25 = 120 MW.",
   "explanation": "Dividing gross intake by PUE gives 120 MW. Multiplying instead (187.5 MW) is the common error and would exceed the grid intake, which is impossible; sellable capacity can also sit below 120 MW because of ramp-period PUE, redundancy margins and reservations.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Self-test question 2 and answer, Part A (M-003)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "gross versus IT load"
  },
  {
   "id": "m02-042",
   "type": "numeric",
   "stem": "A facility has 100 MW of grid intake. If its PUE improves from the 1.54 industry average to 1.25, by how many MW does its steady-state IT load increase?",
   "value": 15.06,
   "tolerance_pct": 3,
   "unit": "MW",
   "working": "100 / 1.25 = 80.0 MW; 100 / 1.54 = 64.9 MW; difference = 15.1 MW.",
   "explanation": "IT load rises from about 65 MW to 80 MW, a gain of roughly 15 MW of sellable capacity from the same grid connection, which is why the note calls efficiency a revenue lever. Taking 0.29 x 100 = 29 MW confuses the PUE difference with the load difference.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Uptime Institute survey 2025; Nebius 2025 Sustainability Report; Figure 3 (M-003, F-051, F-044, F-048)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "PUE"
  },
  {
   "id": "m02-043",
   "type": "numeric",
   "stem": "As at the Savills May 2024 spotlight, European greenfield build costs averaged $9.1m per MW in 2023. If that figure is taken as a Tier III build, and Tier IV fit-out is cited at 25 to 40 per cent above Tier III, what would the Tier IV cost per MW be at the top of that range, in $m per MW?",
   "value": 12.74,
   "tolerance_pct": 3,
   "unit": "$m per MW",
   "working": "9.1 x 1.40 = 12.74 $m per MW.",
   "explanation": "Applying the 40 per cent premium to $9.1m gives $12.74m per MW. Using the 25 per cent floor gives $11.4m, the lower bound rather than the top of the range; both figures are dated 2023-24 and directional only, as the note warns.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Savills EMEA data centre spotlight, May 2024, citing Turner & Townsend and Dgtl Infra (F-011, F-014, M-007)",
   "as_of": "2024",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "build cost"
  },
  {
   "id": "m02-044",
   "type": "numeric",
   "stem": "A deployed NVL72 rack sheds roughly 115 kW to liquid and about 17 kW to air. What percentage of the rack's total thermal load leaves by air? Enter a bare number.",
   "value": 12.9,
   "tolerance_pct": 3,
   "unit": "%",
   "working": "17 / (115 + 17) = 17 / 132 = 12.9%.",
   "explanation": "The air share is 17 of 132 kW, about 13 per cent, below the 20 to 30 per cent Schneider cites for supplemental air in general. Dividing by 115 alone (14.8 per cent) uses the liquid load rather than the total as the denominator.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; HPE specification, via ModulEdge, Jun 2026 (F-031, F-032)",
   "as_of": "2026",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "cooling"
  },
  {
   "id": "m02-045",
   "type": "numeric",
   "stem": "Nebius reports that, as at FY2025, Mäntsälä exported 19.5 GWh to district heating in 2025, up 28 per cent year on year. What was the implied 2024 export, in GWh?",
   "value": 15.23,
   "tolerance_pct": 3,
   "unit": "GWh",
   "working": "19.5 / 1.28 = 15.2 GWh.",
   "explanation": "A 28 per cent rise to 19.5 GWh implies a 2024 base of 19.5 / 1.28, about 15.2 GWh. Subtracting 28 per cent of 19.5 (14.0 GWh) applies the growth rate to the wrong base and understates the prior year; the figure is company-reported.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius 2025 Sustainability Report (F-106)",
   "as_of": "2025",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "heat reuse"
  },
  {
   "id": "m02-046",
   "type": "numeric",
   "stem": "Nebius reports active power of approximately 170 MW at 31 December 2025 and, as at Q1 2026, guides connected power to 800 MW to 1 GW by end-2026. Taking the low end of that guidance, what multiple of end-2025 active power is the end-2026 connected target? Enter a bare number.",
   "value": 4.71,
   "tolerance_pct": 3,
   "unit": "x",
   "working": "800 / 170 = 4.7x.",
   "explanation": "The low end of connected guidance is 4.7 times end-2025 active power, which illustrates the execution spread the tiers expose. Using 1,000 MW gives 5.9x, the top of the range; comparing to contracted power (over 3.5 GW) would mix tiers, the misuse the note warns against.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Form 20-F FY2025, filed 30 Apr 2026; Nebius Q1 2026 shareholder letter (F-004, F-008, M-006)",
   "as_of": "2026-03",
   "time_sensitive": true,
   "difficulty": 3,
   "topic": "capacity tiers"
  },
  {
   "id": "m02-047",
   "type": "sequence",
   "stem": "Place the utility-loss ride-through sequence in order, from the moment of disturbance to normal supply.",
   "steps": [
    "Utility disturbance occurs",
    "UPS batteries carry the critical load for seconds to minutes",
    "Standby generators start and stabilise",
    "Load transfers to generators via switchgear",
    "Utility returns and load retransfers"
   ],
   "explanation": "Batteries bridge the gap while generators start and stabilise; only then does switchgear transfer the load, and it retransfers when utility returns. The common error is to place the transfer before the generators have stabilised, which is exactly the moment GPU load variability makes hazardous.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius 2025 Sustainability Report footnote (P-002)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "power train"
  },
  {
   "id": "m02-048",
   "type": "sequence",
   "stem": "Order the steps by which Nebius capacity matures from contracted to active power.",
   "steps": [
    "Secure land and power commitments (contracted)",
    "Construct the shell and fit out the M&E",
    "Energise and commission (connected)",
    "Install IT equipment",
    "Ramp to operational, revenue-generating load (active)"
   ],
   "explanation": "Contracted status is reached on land and power; connected requires the built facility to be energised and commissioned; active requires installed IT ramped to revenue-generating load. Placing IT installation before energisation is the usual slip; equipment cannot be commissioned into an unenergised hall.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius Q1 2026 shareholder letter definitions (P-005, F-010)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "capacity tiers"
  },
  {
   "id": "m02-049",
   "type": "sequence",
   "stem": "Order the direct-to-chip heat path from the silicon to the atmosphere.",
   "steps": [
    "Cold plates absorb heat on GPUs, CPUs and switch silicon",
    "Technology cooling loop carries heat to the CDU",
    "CDU exchanges heat into the facility water system",
    "Facility loop delivers heat to the rejection plant",
    "Dry coolers, towers or chillers reject heat to atmosphere"
   ],
   "explanation": "Heat moves from cold plates through the technology loop to the CDU, which isolates it into the facility loop for rejection outdoors. The common error is to put the CDU after the facility loop; the CDU is the boundary between the two loops, not a rejection device.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Figure 2 and section 2 of the note (P-004, F-030)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "cooling"
  },
  {
   "id": "m02-050",
   "type": "sequence",
   "stem": "Order the power train energisation path from utility intake to the IT racks.",
   "steps": [
    "Utility intake at high voltage",
    "Step-down transformation HV to MV to LV with switchgear at each level",
    "UPS and batteries condition the critical path",
    "Busway and PDUs distribute in the hall",
    "IT racks draw the critical load"
   ],
   "explanation": "Power steps down through transformers and switchgear, is conditioned by the UPS on the critical path, then distributed by busway and PDUs to the racks. Placing the UPS ahead of step-down is the usual error; the UPS sits on the low-voltage critical path, not at the intake.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Figure 1 and section 2 of the note (P-001, S-002)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "power train"
  },
  {
   "id": "m02-051",
   "type": "slot",
   "stem": "Complete the electrical distribution hierarchy from utility intake to the hall.",
   "layout": "flow",
   "nodes": [
    "HV utility intake",
    "Step-down transformers",
    null,
    "LV unit substations and switchboards",
    null,
    "Busway and PDUs"
   ],
   "choices": [
    "MV switchgear",
    "UPS-protected bus",
    "Standby generators",
    "Rack level",
    "Battery energy storage system",
    "CRAH units"
   ],
   "correct": [
    "MV switchgear",
    "UPS-protected bus"
   ],
   "explanation": "Medium-voltage switchgear follows the step-down transformers, and the UPS-protected bus sits between the LV switchboards and the busway. Standby generators are real plant but tie in at switchgear rather than forming a level; rack level is the end of the chain, not a distribution stage.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Figure 1 and section 2 of the note (S-002)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "power train"
  },
  {
   "id": "m02-052",
   "type": "slot",
   "stem": "Complete the Uptime tier hierarchy with the structural property each tier adds.",
   "layout": "stack",
   "nodes": [
    "Tier I: basic capacity",
    null,
    null,
    "Tier IV: fault-tolerant with continuous cooling"
   ],
   "choices": [
    "Tier II: redundant components",
    "Tier III: concurrently maintainable",
    "Tier II: dual utility feeds",
    "Tier III: 99.982 per cent availability",
    "Tier III: N+1 generators"
   ],
   "correct": [
    "Tier II: redundant components",
    "Tier III: concurrently maintainable"
   ],
   "explanation": "Tier II adds redundant components; Tier III adds concurrent maintainability. The availability percentage is folk shorthand, not a tier property; dual feeds and N+1 generators are redundancy topologies that a tier may use but do not define it, which is the confusion M-005 flags.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Uptime Institute, via Data Centre Impact Study, Nov 2025 (project files) (S-007, F-065, F-066)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "tiers"
  },
  {
   "id": "m02-053",
   "type": "slot",
   "stem": "Complete the direct-to-chip component chain from the silicon outwards.",
   "layout": "flow",
   "nodes": [
    "Cold plates",
    null,
    "Rack manifolds",
    "Flexible hoses",
    null,
    "Facility cooling loops"
   ],
   "choices": [
    "Quick disconnects",
    "CDUs",
    "Dry coolers",
    "Rear-door heat exchangers",
    "CRAC units"
   ],
   "correct": [
    "Quick disconnects",
    "CDUs"
   ],
   "explanation": "Quick disconnects couple the cold plates to the rack manifolds, and the CDU is the heat exchanger and pump set between the hoses and the facility loop. Dry coolers are real plant but sit beyond the facility loop at rejection; rear-door exchangers and CRAC units belong to other cooling architectures.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; BEEHE Electric, Beyond PUE white paper, 2026 (project files) (S-004, F-034)",
   "as_of": "2026",
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "cooling"
  },
  {
   "id": "m02-054",
   "type": "match",
   "stem": "Match each metric to its formula.",
   "pairs": [
    [
     "PUE",
     "Total facility energy divided by IT equipment energy"
    ],
    [
     "WUE",
     "Litres of water consumed per kWh of IT energy"
    ],
    [
     "IT load from gross capacity",
     "Gross intake divided by PUE"
    ],
    [
     "Cost per MW",
     "Total development cost divided by commissioned IT megawatts"
    ],
    [
     "Rack density",
     "Power drawn per rack, in kW"
    ]
   ],
   "explanation": "PUE and WUE share the IT-energy denominator but measure energy and water overhead respectively; IT load is gross intake over PUE; cost per MW uses commissioned IT megawatts, not gross. The common error is to pair cost per MW with a gross-MW denominator, the mixing the note warns against.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Formula and metric register B4 (M-001, M-002, M-003, M-004, M-007)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "metrics"
  },
  {
   "id": "m02-055",
   "type": "match",
   "stem": "As at Q2 2026, match each Nebius capacity tier to the figure Nebius reports or guides for it.",
   "pairs": [
    [
     "Contracted power",
     "Exceeded 3.5 GW in Q1 2026, guided to 5 GW by end-2026"
    ],
    [
     "Connected power",
     "Guided to 800 MW to 1 GW by end-2026"
    ],
    [
     "Active power",
     "Approximately 170 MW at 31 December 2025"
    ]
   ],
   "explanation": "The ordering MW_contracted >= MW_connected >= MW_active holds: gigawatts contracted, hundreds of megawatts connected by year-end, and roughly 170 MW active at end-2025. Assigning the 5 GW figure to connected power is the common slip; the connected target is an order of magnitude smaller. All figures are company-reported.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius Q1 and Q2 2026 shareholder letters; Form 20-F FY2025 (M-006, F-004, F-005, F-007, F-008)",
   "as_of": "2026-06",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "capacity tiers"
  },
  {
   "id": "m02-056",
   "type": "match",
   "stem": "Match each UK term to the US or alternative term given in the module glossary.",
   "pairs": [
    [
     "Grey space",
     "Gray space"
    ],
    [
     "Dry cooler",
     "Fluid cooler"
    ],
    [
     "Powered shell",
     "Powered base building"
    ],
    [
     "Free cooling",
     "Economisation"
    ],
    [
     "Heat reuse",
     "Heat recovery"
    ]
   ],
   "explanation": "Gray space, fluid cooler and powered base building are US usage; economisation and heat recovery are the alternative terms the glossary lists. Pairing dry cooler with economisation is the plausible confusion, since both concern rejecting heat with ambient air, but economisation is chiller bypass, not a coil.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Glossary register B6 (Glossary: Grey space, Dry cooler, Powered shell, Free cooling, Heat reuse)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 1,
   "topic": "terminology"
  },
  {
   "id": "m02-057",
   "type": "classify",
   "stem": "Classify the following statement from the note.",
   "statement": "As at FY2025, Nebius's portfolio weighted-average PUE was 1.25 for 2025, with commissioning months excluded and colocation figures partly partner-supplied.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 2,
   "explanation": "The 1.25 figure is self-reported under a management-chosen boundary and is not audited operating data, so it is a company claim. It is easily filed as fact because it carries a precise number and a methodology note, but the note itself contrasts it with Uptime's independently surveyed 1.54.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026; Nebius 2025 Sustainability Report, methodology notes (F-048, D-014)",
   "as_of": "2025",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "PUE"
  },
  {
   "id": "m02-058",
   "type": "classify",
   "stem": "Classify the following statement from the note.",
   "statement": "UK utility intake is typically at 132 kV or 33 kV, and US practice is typically 115 kV to 138 kV.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 1,
   "explanation": "The register classifies the voltage levels as a convention-level assumption: the note itself says to treat the figures as typical conventions, not universals. They read like engineering facts, but they are not sourced to a standard or measurement and vary by site.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026 (F-015)",
   "as_of": null,
   "time_sensitive": false,
   "difficulty": 2,
   "topic": "power train"
  },
  {
   "id": "m02-059",
   "type": "classify",
   "stem": "Classify the following statement from the note.",
   "statement": "As at 17 August 2026, a growing share of the existing colocation stock is functionally obsolete for AI workloads, and its terminal-value assumptions deserve scepticism.",
   "categories": [
    "Fact",
    "Assumption",
    "Company claim",
    "Analytical interpretation"
   ],
   "correct": 3,
   "explanation": "The note labels this an investment translation and a proposal rather than a sourced claim, so it is analytical interpretation. It rests on facts (8 to 12 kW halls, 130 kW racks, retrofit constraints) but the obsolescence and valuation conclusion is the author's, not a market report's.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026 (F-099)",
   "as_of": "2026-08-17",
   "time_sensitive": true,
   "difficulty": 2,
   "topic": "legacy stock"
  },
  {
   "id": "m02-060",
   "type": "classify",
   "stem": "Classify the following feature as it would be assessed in diligence.",
   "statement": "A colocation provider describes its site as Tier III equivalent, designed to Uptime principles but without Uptime certification.",
   "categories": [
    "Structural protection",
    "Narrative comfort"
   ],
   "correct": 1,
   "explanation": "Without Uptime assessment the label is self-declared design intent, unverified by definition, so it is narrative comfort until certified. A certified Tier III attestation, or physically present dual utility feeds at 2N, would be structural; the word equivalent is the tell.",
   "source": "Module 02 note, 17 Aug 2026, compiled 15 Sep 2026 (D-015, D-006, F-067)",
   "as_of": "2026-08-17",
   "time_sensitive": false,
   "difficulty": 3,
   "topic": "tiers"
  }
 ],
 "glossary": [
  {
   "term": "Contracted power",
   "aliases": [
    "Contracted capacity",
    "secured power"
   ],
   "definition": "Capacity secured by contracted land and power commitments",
   "relevance": "Headline growth metric; guided to 5 GW by end-2026. Nebius-specific term.",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "Connected power",
   "aliases": [
    "Energised capacity",
    "capacity in place"
   ],
   "definition": "Power energised into built, equipped facilities",
   "relevance": "The 800 MW to 1 GW 2026 delivery target. Nebius-specific term.",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "Active power",
   "aliases": [
    "Revenue-generating capacity",
    "live load"
   ],
   "definition": "Power consumed by installed IT, revenue-ready",
   "relevance": "Bridges capacity to revenue; ~170 MW at end-2025. Nebius-specific term.",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "IT (critical) load",
   "aliases": [
    "Critical IT power",
    "IT MW"
   ],
   "definition": "Power delivered to racks; the sellable product",
   "relevance": "Denominator of PUE; basis of all capacity claims",
   "priority": "red",
   "module": 2,
   "variants": {
    "UK": "IT load",
    "EU": "IT load",
    "US": "Critical load"
   }
  },
  {
   "term": "Gross capacity",
   "aliases": [
    "Grid intake",
    "utility capacity",
    "nameplate power"
   ],
   "definition": "Utility intake before overheads",
   "relevance": "Ask which tier any quoted MW sits in. No material jurisdictional variant.",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "PUE",
   "aliases": [
    "Power usage effectiveness"
   ],
   "definition": "Total facility energy over IT energy",
   "relevance": "Reported 1.25 portfolio, 1.15 best month",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "WUE",
   "aliases": [
    "Water usage effectiveness"
   ],
   "definition": "Litres of water per kWh of IT energy",
   "relevance": "0.018 at Finland-1 via closed-loop design. US spelling of the unit is liters.",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "White space",
   "aliases": [
    "Technical space",
    "raised-floor area"
   ],
   "definition": "Revenue-generating data hall area",
   "relevance": "Shrinks relative to plant as density rises. Also called data hall or computer room.",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "Grey space",
   "aliases": [
    "Plant areas",
    "back-of-house"
   ],
   "definition": "Supporting electrical and mechanical areas",
   "relevance": "Where CDUs, UPS, fuel cells live",
   "priority": "red",
   "module": 2,
   "variants": {
    "UK": "Grey space",
    "EU": "Grey space",
    "US": "Gray space"
   }
  },
  {
   "term": "N / N+1 / 2N",
   "aliases": [
    "Need-plus-one",
    "dual-path (2N)",
    "system-plus-system"
   ],
   "definition": "None, one spare, or fully duplicated systems",
   "relevance": "Nebius states N+1 or 2N by site",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "Concurrent maintainability",
   "aliases": [
    "CM",
    "concurrently maintainable"
   ],
   "definition": "Serviceable without dropping the load",
   "relevance": "The substance behind Tier III claims",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "Uptime Tier I-IV",
   "aliases": [
    "Tier Standard: Topology",
    "tier rating"
   ],
   "definition": "Topology classification, not an availability promise",
   "relevance": "Distinguish certified from equivalent",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "Rack density",
   "aliases": [
    "Power density",
    "kW/rack"
   ],
   "definition": "kW drawn per rack",
   "relevance": "Defines which halls can host NVL fleets",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "CRAH / CRAC",
   "aliases": [
    "Computer-room air handler / air conditioner"
   ],
   "definition": "Chilled-water or refrigerant room cooling units",
   "relevance": "Legacy air path still needed for residual heat",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "Aisle containment",
   "aliases": [
    "HAC",
    "CAC",
    "hot- or cold-aisle containment"
   ],
   "definition": "Physical separation of hot and cold air",
   "relevance": "Baseline air-cooling discipline",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "Free cooling",
   "aliases": [
    "Economiser mode",
    "airside/waterside economisation"
   ],
   "definition": "Ambient air or water replacing chiller work",
   "relevance": "Core of the Mäntsälä design. Also termed economisation.",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "Dry cooler",
   "aliases": [
    "Dry air cooler",
    "air-cooled radiator"
   ],
   "definition": "Closed-coil ambient heat rejection, no water",
   "relevance": "Nebius rooftop rejection; the WUE lever",
   "priority": "amber",
   "module": 2,
   "variants": {
    "UK": "Dry cooler",
    "EU": "Dry cooler",
    "US": "Fluid cooler"
   }
  },
  {
   "term": "RDHx",
   "aliases": [
    "Rear-door heat exchanger",
    "rear-door cooler",
    "active/passive rear door"
   ],
   "definition": "Water coil replacing the rack rear door",
   "relevance": "Mid-density option; below NVL loads",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "Direct-to-chip (DLC)",
   "aliases": [
    "DTC",
    "D2C",
    "cold-plate cooling"
   ],
   "definition": "Cold plates on silicon, liquid carries heat",
   "relevance": "Standard for Blackwell and Rubin fleets. Also termed direct liquid cooling.",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "CDU",
   "aliases": [
    "Coolant distribution unit",
    "in-row or liquid-to-liquid CDU"
   ],
   "definition": "Heat exchanger and pumps linking rack loop to facility loop",
   "relevance": "New critical, UPS-backed grey-space kit",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "TCS / FWS loops",
   "aliases": [
    "Technology cooling system",
    "facility water system"
   ],
   "definition": "Rack-side and facility-side water circuits",
   "relevance": "The two loops a CDU separates. Also termed secondary/primary loop.",
   "priority": "green",
   "module": 2,
   "variants": null
  },
  {
   "term": "Busway",
   "aliases": [
    "Busbar trunking",
    "track busway"
   ],
   "definition": "Overhead busbar distribution to racks",
   "relevance": "Replaces cabling at NVL densities. Also termed bus duct.",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "UPS",
   "aliases": [
    "Uninterruptible power supply",
    "double-conversion UPS"
   ],
   "definition": "Battery-backed bridge to generator start",
   "relevance": "Now also protects pumps and CDUs",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "ATS",
   "aliases": [
    "Transfer switch",
    "changeover switch"
   ],
   "definition": "Automatic transfer switch between sources",
   "relevance": "Where standby ties into the train",
   "priority": "green",
   "module": 2,
   "variants": null
  },
  {
   "term": "BESS",
   "aliases": [
    "Battery energy storage system",
    "grid-following battery"
   ],
   "definition": "Battery storage smoothing load and backup",
   "relevance": "Mitigant for training load swings",
   "priority": "green",
   "module": 2,
   "variants": null
  },
  {
   "term": "Powered shell",
   "aliases": [
    "PBB",
    "shell-and-power",
    "shell-and-core with power"
   ],
   "definition": "Building plus power; tenant installs M&E",
   "relevance": "Comparator for the partner model economics",
   "priority": "red",
   "module": 2,
   "variants": {
    "UK": "Powered shell",
    "EU": "Powered shell",
    "US": "Powered base building"
   }
  },
  {
   "term": "Turnkey wholesale",
   "aliases": [
    "Wholesale colocation",
    "fully fitted",
    "turnkey"
   ],
   "definition": "Operator-fitted halls sold in MW blocks",
   "relevance": "What Nebius buys as colocation",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "Build-to-suit",
   "aliases": [
    "BTS",
    "pre-let development"
   ],
   "definition": "Bespoke build for a pre-committed tenant",
   "relevance": "New Jersey site model",
   "priority": "amber",
   "module": 2,
   "variants": null
  },
  {
   "term": "AI factory",
   "aliases": [
    "AI campus",
    "GPU factory"
   ],
   "definition": "Single-purpose GPU campus, power-led design",
   "relevance": "Nebius's own label for owned sites. Nvidia-derived term.",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "NVL72",
   "aliases": [
    "GB200/GB300 NVL72",
    "rack-scale system",
    "NVLink rack"
   ],
   "definition": "72-GPU liquid-cooled rack acting as one system",
   "relevance": "Deployed at GB300; Rubin from H2 2026",
   "priority": "red",
   "module": 2,
   "variants": null
  },
  {
   "term": "Kyber / 800 VDC",
   "aliases": [
    "NVL576 rack",
    "Rubin Ultra rack",
    "800 V DC distribution"
   ],
   "definition": "Announced 600 kW rack and DC power architecture",
   "relevance": "2027 design assumption, not current build",
   "priority": "green",
   "module": 2,
   "variants": null
  },
  {
   "term": "Heat reuse",
   "aliases": [
    "Waste-heat export",
    "district-heating export"
   ],
   "definition": "Exporting waste heat to external users",
   "relevance": "19.5 GWh to district heating in 2025. Also termed heat recovery.",
   "priority": "amber",
   "module": 2,
   "variants": null
  }
 ]
});
