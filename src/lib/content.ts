/**
 * Single source of truth for all site copy & data.
 * Sourced from NavGPA marketing collateral, the Apex QS Solutions / Nav Projects
 * Support Ltd company profile, and the founder's published ICE research.
 */

export const company = {
  name: "NAV Global Project Advisory",
  shortName: "NavGPA",
  legalLegacy: "Nav Projects Support Ltd.",
  tagline: "Building Confidence. Delivering Value.",
  pillars: ["Advise", "Manage", "Deliver Value"],
  badge: ["USA Based", "Globally Focused", "Future Ready"],
  heroLede:
    "Expert construction & commercial advisory powered by digital innovation, data and global experience.",
  intro:
    "A USA-based construction and commercial advisory firm providing end-to-end consultancy services for the built environment across the globe. We help clients plan smarter, manage better and deliver successful projects with confidence.",
  location: "San Francisco, California",
  phone: "+1 510 322 1536",
  phoneHref: "tel:+15103221536",
  email: "n.n.vasudeva@navgpa.com",
  emailHref: "mailto:n.n.vasudeva@navgpa.com",
  web: "navgpa.com",
} as const;

export const stats = [
  { value: "17+", label: "Years of experience" },
  { value: "8", label: "Core advisory services" },
  { value: "4", label: "Continents served" },
  { value: "5D", label: "BIM cost intelligence" },
] as const;

export const valueProps = [
  {
    key: "global",
    title: "Global Mindset",
    body: "Serving clients across the USA, UK, Middle East, Asia & beyond with one consistent standard of excellence.",
    icon: "globe",
  },
  {
    key: "data",
    title: "Data Driven",
    body: "Digital workflows, BIM and analytics turn project data into clear, confident commercial decisions.",
    icon: "chart",
  },
  {
    key: "trusted",
    title: "Trusted Advisor",
    body: "Integrity, transparency and commitment at every stage — your interests protected from inception to handover.",
    icon: "shield",
  },
  {
    key: "success",
    title: "Client Success",
    body: "Focused on value creation and long-term partnerships, not one-off transactions.",
    icon: "users",
  },
] as const;

export const approach = [
  {
    step: "01",
    title: "Advise",
    headline: "Strategic insight, smart decisions",
    body: "We frame the commercial strategy early — feasibility, budgets, risk and procurement routes — so the right calls are made before cost is locked in.",
  },
  {
    step: "02",
    title: "Manage",
    headline: "Cost · Risk · Contract performance",
    body: "Through delivery we control cost, administer contracts and monitor performance, keeping the project measurable, accountable and on track.",
  },
  {
    step: "03",
    title: "Deliver Value",
    headline: "Efficiency · Certainty · Sustainable results",
    body: "We close out with certainty — settled accounts, captured lessons and outcomes that protect value over the whole asset lifecycle.",
  },
] as const;

export const services = [
  {
    title: "Quantity Surveying",
    body: "Accurate measurement and rigorous cost management at every stage of the project lifecycle.",
    icon: "ruler",
  },
  {
    title: "Cost Estimating & Cost Planning",
    body: "Robust cost planning and estimation that give clients dependable numbers for informed decisions.",
    icon: "calculator",
  },
  {
    title: "BIM & Digital Take-offs",
    body: "BIM modelling and accurate 5D cost take-offs that connect design intent to commercial reality.",
    icon: "cube",
  },
  {
    title: "Tender & Procurement Support",
    body: "Tender documentation, bid analysis and supplier engagement to secure the best value packages.",
    icon: "doc",
  },
  {
    title: "Contract Administration",
    body: "Contract management, payment certification and reporting under JCT, NEC and bespoke forms.",
    icon: "scroll",
  },
  {
    title: "Commercial Management",
    body: "Maximising value, monitoring cost and driving performance across the supply chain.",
    icon: "trend",
  },
  {
    title: "Claims & Variations",
    body: "Claims preparation, evaluation and negotiation — including extension-of-time and loss & expense.",
    icon: "scale",
  },
  {
    title: "Project Advisory",
    body: "Strategic, independent advice that solves the hard problems and creates value for stakeholders.",
    icon: "compass",
  },
] as const;

export const founder = {
  name: "N. Narendra Vasudeva",
  role: "Founder & Director",
  credentials:
    "PGCAP · MSc (BIM) · BSc (Hons) Quantity Surveying · Dip. Commercial Arbitration · Assoc. APM · FHEA",
  titles: [
    "Senior Quantity Surveyor",
    "Cost Manager",
    "BIM / 5D Consultant",
    "Construction Management Lecturer",
  ],
  bio: [
    "Narendra brings over 17 years of experience in quantity surveying, cost management, BIM implementation, project controls and construction education.",
    "His work spans residential developments, commercial buildings, hotels, mixed-use schemes and infrastructure across the UK, Sri Lanka, the Middle East and the USA — combining deep commercial discipline with a digital-first, BIM-aligned way of working.",
  ],
  mission:
    "To provide construction professionals with accurate, dependable and technology-driven commercial and BIM support that improves project outcomes.",
} as const;

export const publication = {
  label: "Published research",
  title:
    "Ethical and social implications of smart contracts in construction: comparison with Joint Contracts Tribunal procedures",
  authors: "N. N. Vasudeva & P. Tracey — University of Salford, Manchester, UK",
  venue: "Proceedings of the Institution of Civil Engineers (ICE)",
  blurb:
    "Peer-reviewed research on blockchain-enabled smart contracts, BIM and the JCT 2024 suite — proposing a hybrid model where automation adds auditable efficiency while professional judgement and fairness are preserved.",
  href: "/vasudeva-smart-contracts-construction-ice.pdf",
} as const;

export const trackRecord = [
  {
    project: "Battersea Power Station",
    image: "/projects/battersea.jpg",
    location: "London, UK",
    role: "BIM coordination · 4D structural simulation",
    detail:
      "Supported the BIM Manager developing 4D simulation of the structural scope on the landmark redevelopment (structural package, J. Coffey to Mace) under the Level 2 BIM protocol.",
  },
  {
    project: "Soapworks — Ministry of Justice",
    image: "/projects/soapworks.jpg",
    location: "MediaCityUK",
    role: "Government Soft Landings research",
    detail:
      "MSc dissertation evaluating Government Soft Landings (GSL) and PRINCE2 project-management structures within a BIM-aligned government project.",
  },
  {
    project: "Taj Samudra Hotel",
    image: "/projects/taj-samudra.jpg",
    location: "Colombo, Sri Lanka",
    role: "Commercial management",
    detail:
      "Commercial manager on the refurbishment of the landmark city hotel, controlling cost and contract through a live, occupied environment.",
  },
  {
    project: "Renuka Organic Factory & Warehouse",
    image: "/projects/renuka-factory.jpg",
    location: "Watupitiwala FTZ, Sri Lanka",
    role: "Project management · cost control",
    detail:
      "Engaged from early design — developing contract documents, subcontract agreements, progress schedules and cost-control systems for the factory and warehouse build.",
  },
  {
    project: "Church of the Ascension",
    image: "/projects/church-ascension.jpg",
    location: "Salford, UK",
    role: "Value engineering · low-carbon",
    detail:
      "Comparative feasibility study and value-engineering exercise on renewable-energy options for the rebuild of a Grade II-listed church.",
  },
  {
    project: "Modular Housing Programme",
    location: "United Kingdom",
    role: "QS · takt-time cost analysis",
    detail:
      "Quantity surveying and time-and-motion (takt-time) cost analysis for prefabricated modular homes, benchmarking modern methods of construction.",
  },
  {
    project: "Newlands House & Oakhill Clinic",
    image: "/projects/newlands-house.jpg",
    location: "United Kingdom",
    role: "Construction programming",
    detail:
      "Developed the construction-stage works programme across buildings A–D for the Newlands House and former Oakhill Clinic development (Tydewell Ltd.).",
  },
] as const;

export const sectors = [
  "Commercial",
  "Residential",
  "Industrial",
  "Infrastructure",
  "Healthcare",
  "Education",
  "Hospitality",
  "Mixed-Use",
] as const;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Contact", href: "/#contact" },
] as const;

/**
 * Full case studies for the dedicated /projects page.
 * Drawn from the Apex QS Solutions / Nav Projects Support Ltd company profile,
 * rebranded for NavGPA (legacy branding and personal contact details removed).
 */
export const caseStudies = [
  {
    project: "Battersea Power Station",
    image: "/projects/battersea.jpg",
    location: "London, United Kingdom",
    region: "United Kingdom",
    sector: "Mixed-Use Regeneration",
    role: "BIM Coordinator",
    client: "J. Coffey Construction (structural package to Mace)",
    detail:
      "Supported the BIM Manager on one of London's largest regeneration schemes, contributing to the daily use of project information and BIM processes for the structural package. Helped develop a 4D simulation of the structural scope — sequencing construction against programme under the Level 2 BIM protocol.",
    highlights: ["4D structural simulation", "Level 2 BIM protocol", "Information management"],
  },
  {
    project: "Soapworks — Ministry of Justice",
    image: "/projects/soapworks.jpg",
    location: "MediaCityUK, United Kingdom",
    region: "United Kingdom",
    sector: "Government / Workplace",
    role: "Researcher — MSc Dissertation",
    client: "Ministry of Justice · University of Salford",
    detail:
      "A six-month MSc research study at the Ministry of Justice exploring the benefits of Government Soft Landings (GSL) on BIM-aligned projects. Evaluated the PRINCE2 project-management structure adopted at MoJ against traditional approaches, capturing the operational and handover benefits of a soft-landings methodology.",
    highlights: ["Government Soft Landings", "PRINCE2 evaluation", "BIM-aligned delivery"],
  },
  {
    project: "Church of the Ascension",
    image: "/projects/church-ascension.jpg",
    location: "Lower Broughton, Salford, UK",
    region: "United Kingdom",
    sector: "Heritage / Low-Carbon",
    role: "Value Engineering Researcher",
    client: "Parish Church Council",
    detail:
      "Comparative feasibility study and design proposals for renewable-energy options within the rebuild programme of the Grade II-listed Church of the Ascension. Carried out a value-engineering exercise on stained-glass window panels and their impact on the building's energy consumption.",
    highlights: ["Renewable-energy feasibility", "Grade II-listed heritage", "Value engineering"],
  },
  {
    project: "Demonstrator Modular Home",
    image: "/projects/modular-home.jpg",
    location: "United Kingdom",
    region: "United Kingdom",
    sector: "Residential / MMC",
    role: "Quantity Surveyor",
    client: "Comfortable Living Ltd.",
    detail:
      "Quantity surveying and time-and-motion studies for a prefabricated demonstrator two-bedroom modular home. Measured process (takt) time across all construction activities and performed a detailed review and analysis of the cost plan — benchmarking modern methods of construction.",
    highlights: ["Takt-time measurement", "MMC cost analysis", "Cost-plan review"],
  },
  {
    project: "Newlands House & Oakhill Clinic",
    image: "/projects/newlands-house.jpg",
    location: "United Kingdom",
    region: "United Kingdom",
    sector: "Healthcare / Conversion",
    role: "Construction Programming",
    client: "Tydewell Ltd.",
    detail:
      "Developed the construction-stage works programme across buildings A, B, C and D for the Newlands House and former Oakhill Clinic development — sequencing the works packages for coordinated delivery.",
    highlights: ["Construction-stage programme", "Multi-building sequencing"],
  },
  {
    project: "Taj Samudra Hotel",
    image: "/projects/taj-samudra.jpg",
    location: "Colombo, Sri Lanka",
    region: "International",
    sector: "Hospitality (5-Star)",
    role: "Commercial Manager",
    client: "Taj Hotels",
    detail:
      "Commercial manager within the projects team for the refurbishment of the landmark Taj Samudra city hotel — controlling cost and contract through a live, occupied five-star environment.",
    highlights: ["Live occupied refurbishment", "Cost & contract control", "5-star hospitality"],
  },
  {
    project: "Renuka Organic Factory & Warehouse",
    image: "/projects/renuka-factory.jpg",
    location: "Watupitiwala FTZ, Sri Lanka",
    region: "International",
    sector: "Industrial",
    role: "Projects Manager",
    client: "Renuka Group",
    detail:
      "Projects manager engaged from the early design stage for a large coconut-products factory and warehouse. Developed contract documents, subcontract agreements and construction progress schedules, and implemented cost-control and measurement systems. The facility comprised circa 3,300 m² of storage (≈7,000 pallet positions) plus a two-storey factory and office building with mezzanine production and staff facilities.",
    highlights: ["Early-stage engagement", "Contract documentation", "Cost-control systems"],
  },
] as const;

export const projectPartners = [
  "University of Salford",
  "Mace",
  "Ministry of Justice",
  "Taj Hotels",
  "Renuka Group",
  "Wise Property Refurbishment",
  "Nu-lok Roofing Systems",
] as const;

/**
 * The BIM advantage — benefits of our BIM-aligned delivery approach,
 * from the company profile.
 */
export const bimBenefits = [
  {
    title: "The golden thread",
    body: "BIM is a key element of design and construction, maintaining the golden thread of the building's purpose through to delivery and operation.",
  },
  {
    title: "Early end-user engagement",
    body: "End users are engaged early and throughout, with a BIM champion embedded on the project team during design and construction.",
  },
  {
    title: "Committed aftercare",
    body: "The design and construction team commits to aftercare post-construction — not just handover and walk away.",
  },
  {
    title: "Post-occupancy feedback",
    body: "Post-occupancy evaluation feeds lessons learnt back to the design and construction team and into future projects.",
  },
  {
    title: "FM-ready asset data",
    body: "A fully populated asset data set feeds directly into FM systems, with modelling that supports planning modifications across the building life cycle.",
  },
  {
    title: "Buildings that perform",
    body: "The outcome is a building that meets end-user needs and required operational outcomes — measured, not assumed.",
  },
  {
    title: "Early design challenge",
    body: "Design decisions that would impact ongoing maintenance and operating cost are challenged early, while change is still cheap.",
  },
  {
    title: "Whole-life cost focus",
    body: "Most asset expenditure happens over the lifecycle, not the capital phase — operational cost impacts are considered from day one.",
  },
  {
    title: "Smooth commissioning & handover",
    body: "Training, commissioning and handover are planned early, cutting protracted handovers and reaching optimal building performance sooner.",
  },
  {
    title: "Measured performance",
    body: "Clear building-performance measures are monitored up to three years post-completion, with remedy mechanisms where performance is not met.",
  },
  {
    title: "Proven savings",
    body: "As early adopters of BIM, we have identified significant time and cost savings on new-build and refurbishment projects in the UK and internationally.",
  },
  {
    title: "Less waste, less delay",
    body: "Estimating, detailed BOQs and commercial assistance delivered in line with the Level 2 BIM protocol help minimise waste and delay.",
  },
] as const;

/**
 * Resource personnel — the multidisciplinary network behind our projects,
 * from the company profile (personal contact details intentionally omitted).
 */
export const personnel = [
  {
    name: "N. Narendra Vasudeva",
    role: "Director",
    credentials: "MSc (BIM), BSc (Hons) QS (UK), Dip. Commercial Arb. (SL), ICIOB",
    body: "Leads contracts and project management from letter of intent to successful handover — contract negotiation with clients, consultants and contractors, resource and cost planning, claims and variations, and enforcement of contractual obligations while avoiding contractual risk.",
  },
  {
    name: "Deepali Kirtikumar Mody",
    role: "Chartered Architect",
    credentials: "Senior Architect — Hyundai E&C, John Keells Waterfront",
    body: "Led shop-drawing teams, value-engineering proposals and design coordination across MEP and structural disciplines on one of Sri Lanka's largest mixed-use projects, with deep knowledge of local practice and building regulations.",
  },
  {
    name: "Rohan Saputhanthri",
    role: "Chartered Building Services Engineer",
    credentials: "BSc Eng, CEng, MIE (SL), LEED GA (USA), MASHRAE (USA)",
    body: "Fifteen years across design, estimation, testing, commissioning and project management of MEP services — star-class hotels, hospitals, airports, and high-rise commercial and residential towers in Sri Lanka and overseas.",
  },
  {
    name: "Sarathchandra Samarasekara",
    role: "Measurement Engineer",
    credentials: "BSc (Eng), MSc (Project Management)",
    body: "Measurement engineering and engineering consultancy, including major infrastructure such as the Moragolla Hydropower Project with Nippon Koei.",
  },
] as const;
