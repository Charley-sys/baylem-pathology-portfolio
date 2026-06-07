// ─────────────────────────────────────────────
// BAYLEM PORTFOLIO — CONTENT DATA
// All images live in: src/assets/images/
//   ├── partners/   → partner logos
//   ├── projects/   → project photos
//   ├── coldchain/  → cold chain solution images
//   └── pathology/  → pathology solution images
// ─────────────────────────────────────────────

// ── COLD CHAIN SOLUTIONS ──────────────────────
export const coldChainSolutions = [
  {

  id: "cc-1",
  category: "Mortuary Infrastructure",
  title: "Morgue Body Cold Rooms & Preservation Systems",
  description:
    "Advanced mortuary cold rooms, body preservation chambers, and cadaver storage systems designed for hospitals, county referral facilities, funeral homes, and pathology departments. Built to ensure dependable preservation, operational efficiency, and compliance with modern mortuary standards.",
  specs: [
    "Single-body to multi-body configurations",
    "2°C – 8°C controlled preservation",
    "Stainless steel trays and racking systems",
    "24/7 monitoring, alarms & backup protection"
  ],
  image: require('../assets/images/coldchain/cold-room.png'),
  imagePlaceholderClass: "img-cold-1",
  imagePlaceholderText: "Morgue Preservation System"
},
  {
    id: "cc-2",
    category: "Medical Cold Chain",
    title: "Blood Bank Refrigeration",
    description:
      "Dedicated blood bank refrigerators, platelet agitators, and plasma freezers with continuous temperature data logging, audible/visual alarms, and validation documentation packages.",
    specs: ["4°C ± 1°C precision", "Continuous data logging", "FDA/WHO compliant", "7-day battery backup UPS"],
    image: require("../assets/images/coldchain/blood-bank.png"),
    imagePlaceholderClass: "img-cold-2",
    imagePlaceholderText: "Blood Bank Systems",
  },
  {
   
  id: "cc-3",
  category: "Cold Chain Logistics",
  title: "Refrigerated Trucks & Mobile Cold Chain Solutions",
  description:
    "Advanced refrigerated vehicle systems for the safe transport of pharmaceuticals, vaccines, laboratory specimens, food products, and other temperature-sensitive cargo. Designed to maintain precise temperature control throughout the distribution chain while ensuring product integrity and regulatory compliance.",
  specs: [
    "-25°C to +15°C temperature range",
    "Real-time GPS & temperature monitoring",
    "Multi-temperature compartment options",
    "24/7 alarm and fleet management integration"
  ],
  image: require("../assets/images/coldchain/Refrigerated-Truck.png"),
  imagePlaceholderClass: "img-cold-2",
  imagePlaceholderText: "Refrigerated Transport Systems"
},
 {
    id: "cc-4",
    category: "Medical Cold Chain",
    title: "Ultra-Low Temperature Freezers (-80°C)",
    description:
      "ULT freezers for long-term biological sample storage, mRNA vaccine preservation, and research biobanking. Upright and chest configurations from 50L to 800L.",
    specs: ["-86°C minimum temp", "Hydrocarbon refrigerant", "Auto cascade system", "Alarm relay output"],
    image: require("../assets/images/coldchain/ultralow-freezer.png"),
    imagePlaceholderClass: "img-cold-3",
    imagePlaceholderText: "ULT Freezers -80°C",
  },
  {
    id: "cc-5",
    category: "Industrial Cold Chain",
    title: "Walk-In Cold Room Systems",
    description:
      "Modular insulated panel cold rooms from 5m³ to 500m³+ with Bitzer/Copeland compressors, EC fan evaporators, and BMS integration. For food processing, floriculture, and agri-business.",
    specs: ["5m³ – 500m³ capacity", "Bitzer/Copeland compressors", "PU foam insulated panels", "BMS integration ready"],
    image: require("../assets/images/coldchain/Industrial-walk-in-freezer.jpg"),
    imagePlaceholderClass: "img-cold-1",
    imagePlaceholderText: "Walk-In Cold Room",
  },
  {
    id: "cc-6",
    category: "Industrial Cold Chain",
    title: "Controlled Atmosphere Storage",
    description:
      "CA storage solutions for fresh produce, flowers, and perishable goods. Oxygen and CO₂ control systems extending shelf life by up to 300% for export markets.",
    specs: ["O₂ & CO₂ control", "Humidity management", "Remote monitoring", "Export market certified"],
    image: require("../assets/images/coldchain/Controlled-storage.jpg"),
    imagePlaceholderClass: "img-cold-2",
    imagePlaceholderText: "CA Storage System",
  },
  {
    id: "cc-7",
    category: "Refrigeration Equipment",
    title: "Cold Chain Monitoring & Alarms",
    description:
      "IoT-enabled temperature and humidity monitoring systems with cloud dashboards, SMS/email alerts, and full regulatory-compliant data logging for all cold storage assets.",
    specs: ["Cloud dashboard", "SMS & email alerts", "21 CFR Part 11 ready", "Unlimited sensors"],
    image: require("../assets/images/coldchain/temp-monitor.jpeg"),
    imagePlaceholderClass: "img-cold-3",
    imagePlaceholderText: "Monitoring System",
  },
];

// ── PATHOLOGY & MORTUARY SOLUTIONS ───────────────────────

export const pathologySolutions = [
  {
    id: "path-1",
    category: "Histopathology",
    title: "Automated Tissue Processors",
    description:
      "High-throughput tissue processing systems for routine and advanced histopathology laboratories. Designed for precise specimen preparation, reagent management, and workflow efficiency.",
    image: require("../assets/images/pathology/Tissue-processor.jpg"),
    imagePlaceholderClass: "img-path-1",
    imagePlaceholderText: "Tissue Processor",
    brand: "Leica Biosystems / Thermo Fisher",
  },

  {
    id: "path-2",
    category: "Histopathology",
    title: "Rotary Microtomes",
    description:
      "Precision microtomes for consistent tissue sectioning in diagnostic and research laboratories, delivering high-quality sections for accurate microscopic examination.",
    image: require("../assets/images/pathology/Microtome.jpg"),
    imagePlaceholderClass: "img-path-2",
    imagePlaceholderText: "Rotary Microtome",
    brand: "Leica Biosystems",
  },

  {
    id: "path-3",
    category: "Histopathology",
    title: "Grossing Stations",
    description:
      "Ventilated pathology grossing workstations with integrated lighting, formalin fume extraction, photography systems, and specimen handling accessories for safe tissue examination.",
    image: require("../assets/images/pathology/grossing-station.png"),
    imagePlaceholderClass: "img-path-1",
    imagePlaceholderText: "Grossing Station",
    brand: "UFSK International",
  },

  {
    id: "path-4",
    category: "Mortuary Equipment",
    title: "Body & Cadaver Storage Freezers",
    description:
      "Multi-body refrigerated storage systems and cadaver preservation freezers designed for hospitals, mortuaries, pathology departments, and medical training institutions.",
    image: require("../assets/images/pathology/body-freezer.png"),
    imagePlaceholderClass: "img-path-2",
    imagePlaceholderText: "Cadaver Storage Freezer",
    brand: "Mixta",
  },

  {
    id: "path-5",
    category: "Mortuary Equipment",
    title: "Autopsy & Dissection Tables",
    description:
      "Stainless steel autopsy and dissection tables with integrated drainage systems, ventilation options, and ergonomic designs for modern pathology and forensic facilities.",
    image: require("../assets/images/pathology/Autopsy-table.jpg"),
    imagePlaceholderClass: "img-path-1",
    imagePlaceholderText: "Autopsy Table",
    brand: "UFSK International",
  },

  {
    id: "path-6",
    category: "Mortuary Equipment",
    title: "Body Lifters & Mortuary Handling Systems",
    description:
      "Hydraulic and electric body lifting systems designed to improve safety, efficiency, and ergonomics during body handling, storage, and transfer operations.",
    image: require("../assets/images/pathology/body-lift.png"),
    imagePlaceholderClass: "img-path-2",
    imagePlaceholderText: "Body Lifter",
    brand: "UFSK International",
  },

  {
    id: "path-7",
    category: "Mortuary Equipment",
    title: "Embalming Machines & Preparation Systems",
    description:
      "Professional embalming machines and preparation equipment for funeral homes, mortuaries, and anatomical pathology facilities requiring controlled fluid injection and drainage.",
    image: require("../assets/images/pathology/embalming.png"),
    imagePlaceholderClass: "img-path-1",
    imagePlaceholderText: "Embalming Machine",
    brand: "The Maxwell Group/Dodge",
  },

  {
    id: "path-8",
    category: "Mortuary Equipment",
    title: "Body Trolleys & Transfer Systems",
    description:
      "Heavy-duty stainless steel body trolleys, transfer carts, and transport systems designed for safe movement of remains within hospitals, mortuaries, and funeral facilities.",
    image: require("../assets/images/pathology/Body-trolley.jpg"),
    imagePlaceholderClass: "img-path-2",
    imagePlaceholderText: "Body Trolley",
    brand: "Baylem Fabrication",
  },

  {
    id: "path-9",
    category: "Forensic & Pathology",
    title: "Autopsy Instrument Sets",
    description:
      "Complete autopsy and dissection instrument sets comprising precision surgical tools for pathology, forensic medicine, anatomical studies, and post-mortem examinations.",
    image: require("../assets/images/pathology/Autopsy-Oscillator.png"),
    imagePlaceholderClass: "img-path-1",
    imagePlaceholderText: "Autopsy Set",
    brand: "Berger Medical",
  },
];

// ── PROJECTS ──────────────────────────────────
export const projects = [
  
  {
    id: "proj-1",
    name: "Thika Level 5 Hospital — Mortuary Cold Storage System",
    location: "Kiambu County, Kenya",
    type: "Mortuary Infrastructure",
    year: "2014",
    challenge:
      "Limited mortuary capacity affecting body preservation and operational efficiency during high patient influx periods.",
    solution:
      "Installed 112-body capacity cold storage system with full mortuary setup including racking, refrigeration units, and workflow optimization.",
    impact: "Significantly improved storage capacity and mortuary handling efficiency.",
    tags: ["Mortuary", "Cold Storage", "Hospital"],
    imagePlaceholderClass: "img-proj-4",
    image: require("../assets/images/projects/Thika-cold-rooms.jpeg"),
  },
  {
    id: "proj-2",
    name: "Mbagathi Hospital — Mortuary Cold Room Installation",
    location: "Nairobi County, Kenya",
    type: "Mortuary Infrastructure",
    year: "2016",
    challenge:
      "Overstretched mortuary facilities unable to handle increasing caseload and storage demands.",
    solution:
      "Delivered and installed 112-body capacity cold storage system with full mortuary equipment integration.",
    impact: "Expanded capacity and improved mortuary workflow efficiency.",
    tags: ["Mortuary", "Cold Storage", "Hospital"],
    imagePlaceholderClass: "img-proj-5",
    image: require("../assets/images/projects/Mbagathi-cold-rooms.jpg"),
  },
  {
    id: "proj-3",
    name: "KEMSA — Pharmaceutical Walk-In Freezers",
    location: "Nairobi County, Kenya",
    type: "Pharmaceutical Cold Chain",
    year: "2020",
    challenge:
      "Need for reliable large-scale cold storage for pharmaceutical distribution and vaccine logistics.",
    solution:
      "Installed pharmaceutical-grade walk-in freezers designed for bulk vaccine and medicine storage with temperature monitoring systems.",
    impact: "Strengthened national pharmaceutical distribution cold chain reliability.",
    tags: ["Cold Chain", "Pharmaceutical", "KEMSA"],
    imagePlaceholderClass: "img-proj-6",
    image: require("../assets/images/projects/Kemsa-cold-room.jpg"),
  },
  {
    id: "proj-4",
    name: "Kenyatta University Funeral Home — Cold Storage & Body Lifters",
    location: "Nairobi County, Kenya",
    type: "Mortuary Infrastructure",
    year: "2019",
    challenge:
      "Need for improved mortuary handling systems and body preservation capacity within the facility.",
    solution:
      "Installed 48-body capacity cold storage system integrated with hydraulic body lifters for efficient handling operations.",
    impact: "Improved operational efficiency and body handling safety.",
    tags: ["Mortuary", "Cold Storage", "Hydraulic Systems"],
    imagePlaceholderClass: "img-proj-7",
    image: require("../assets/images/projects/ku-cold-rooms.png"),
  },
  {
    id: "proj-5",
    name: "Montezuma Monalisa Funeral Home — Cold Storage Systems",
    location: "Nairobi County, Kenya",
    type: "Mortuary Infrastructure",
    year: "2023",
    challenge:
      "Demand for expanded and reliable body preservation systems for high-volume funeral operations.",
    solution:
      "Supplied and installed high-efficiency body cold storage freezers tailored for funeral home operations.",
    impact: "Enhanced storage reliability and operational continuity.",
    tags: ["Mortuary", "Cold Storage", "Funeral Home"],
    imagePlaceholderClass: "img-proj-8",
    image: require("../assets/images/projects/Montezuma.jpg"),
  },
  {
    id: "proj-6",
    name: "University of Nairobi Enterprise — Locally Fabricated Cold Room",
    location: "Nairobi County, Kenya",
    type: "Medical Cold Chain",
    year: "2024",
    challenge:
      "Need for cost-effective locally fabricated cold storage solution for institutional use.",
    solution:
      "Designed and delivered locally fabricated body cold storage system with reliable temperature control and modular design.",
    impact: "Reduced procurement cost while maintaining functional cold chain standards.",
    tags: ["Cold Chain", "Fabrication", "University"],
    imagePlaceholderClass: "img-proj-9",
    image: require("../assets/images/projects/UNES-freezers.png"),
  },
  {
    id: "proj-7",
    name: "Chiromo Funeral Parlour — Hydraulic Body Lifter Installation",
    location: "Nairobi County, Kenya",
    type: "Mortuary Equipment",
    year: "2024",
    challenge:
      "Manual body handling processes causing inefficiency and increased operational strain.",
    solution:
      "Installed hydraulic body lifter system to improve ergonomics and handling efficiency.",
    impact: "Improved safety, efficiency, and workflow in body handling operations.",
    tags: ["Mortuary", "Hydraulic Systems", "Equipment"],
    imagePlaceholderClass: "img-proj-10",
    image: require("../assets/images/projects/Hydraulic-lifter2.png"),
  },
];

// ── TECHNOLOGY PARTNERS ───────────────────────
export const partners = [
  {
    id: 0,
    name: "UFSK International",
    category: "Cold Chain & Pathology",
    logo: require("../assets/images/partners/UFSK.png"),
    logoFallback: "UFSK International",
  },
  {
    id: 1,
    name: "Mixta Medical",
    category: "Pathology & Cold Chain",
    logo: require("../assets/images/partners/Mixta-.png"),
    logoFallback: "Mixta Medical",
  },
  {
    id: 2,
    name: "Leica Biosystems",
    category: "Histopathology",
    logo: require("../assets/images/partners/Leica-.png"),
    logoFallback: "Leica Biosystems",
  },
  {
    id: 3,
    name: "Berger Medical",
    category: "Autopsy & Mortuary",
    logo: require("../assets/images/partners/Berger-.png"),
    logoFallback: "Berger Medical",
  },
  {
    id: 4,
    name: "The Maxwell Group",
    category: "Embalming & Autopsy",
    logo: require("../assets/images/partners/Mazwell-Group-Logo.webp"),
    logoFallback: "The Maxwell Group",
  },
  {
    id: 5,
    name: "Haier Biomedical",
    category: "Medical Cold Chain",
    logo: require("../assets/images/partners/Haier.png"),
    logoFallback: "Haier Biomedical",
  },
  {
    id: 6,
    name: "Baylem Local Fabrication",
    category: "In-House Fabrication",
    logo: require("../assets/images/logo/baylem-logo.png"),
    logoFallback: "Baylem",
    isBaylem: true,
  },
];

// ── STATS ─────────────────────────────────────
export const stats = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 47, suffix: "+", label: "Counties Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

// ── NAV LINKS ─────────────────────────────────
export const navLinks = [
  { label: "Cold Chain", href: "#cold-chain" },
  { label: "Pathology", href: "#pathology" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
];