/**
 * Homepage content, transcribed from apeasternpower.com.
 *
 * Internal destinations that were not verifiable from the live markup are left
 * as "#" so nothing links somewhere misleading. External URLs and the handful
 * of internal paths that were confirmed (viewAllNews, districtMap, the GIS
 * portals) point at the real destination.
 */

export const ORG = {
  shortName: "APEPDCL",
  name: "Eastern Power Distribution Company of Andhra Pradesh Limited",
  legalName:
    "Andhra Pradesh Eastern Power Distribution Company Limited",
  cin: "U40109AP2000SGC034117",
  gstin: "37AAACE9876B1ZH",
  tagline: "Reliable Power Distribution for a Brighter Future",
  mission:
    "APEPDCL is committed to providing quality electricity distribution services to millions of customers across eastern Andhra Pradesh.",
  helpline: "1912",
  whatsappNumber: "+91 85000 01912",
  whatsappUrl: "https://wa.me/918500001912/?text=Hi",
  live: "https://apeasternpower.com",
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavItem[];
};

export const NAV: NavGroup[] = [
  { label: "Home", href: "/" },
  {
    label: "Business Area",
    items: [
      { label: "Company Information", href: "#" },
      { label: "Vision", href: "#" },
      { label: "Organogram", href: "#" },
      { label: "Achievements", href: "#" },
      { label: "Material Standards", href: "#" },
      { label: "Contact Offices", href: "#" },
      { label: "Policies", href: "#" },
      { label: "Annual Reports", href: "#" },
      { label: "Energy Accounting Reports", href: "#" },
    ],
  },
  {
    label: "Customers",
    items: [
      { label: "New Connections (LT / HT)", href: "#" },
      { label: "Complaint Management", href: "#" },
      { label: "Payment Options", href: "#" },
      { label: "LT Customer Requests", href: "#" },
      { label: "HT Customer Requests", href: "#" },
      { label: "Energy Savings & Safety", href: "#" },
      { label: "Solar Programs", href: "#" },
      { label: "Smart Meters", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    label: "RTI",
    items: [
      { label: "Right to Information Act", href: "#" },
      { label: "Section 4(1)(b) Disclosures", href: "#" },
      { label: "Section 5(1)(2) Officers", href: "#" },
    ],
  },
  {
    label: "Regulatory",
    items: [
      { label: "APERC", href: "http://aperc.gov.in/", external: true },
      { label: "Tariff Orders", href: "#" },
      { label: "ARR / MYT Filings", href: "#" },
      { label: "Regulatory Compliance", href: "#" },
      { label: "Acts", href: "#" },
      { label: "Petitions", href: "#" },
    ],
  },
  {
    label: "EoDB",
    items: [
      { label: "Ease of Doing Business", href: "#" },
      { label: "HT New Connection — EoDB Estimate", href: "#" },
    ],
  },
  {
    label: "Training",
    items: [
      { label: "EPTI Programmes", href: "#" },
      { label: "Training Calendar", href: "#" },
      { label: "Progress Reports", href: "#" },
      { label: "Training Library", href: "#" },
    ],
  },
  { label: "Careers", href: `${ORG.live}/careers` },
  {
    label: "FPPCA Filing",
    items: [
      { label: "FPPCA Filing FY 2025-26", href: "#" },
      { label: "FPPCA Reports", href: `${ORG.live}/fppcaReports` },
    ],
  },
];

/* --- Login options, from the homepage login modal --- */

export const LOGIN_TABS = [
  {
    id: "lt",
    label: "LT Consumer",
    field: "Service Number",
    placeholder: "Enter LT service number",
    icon: "/brand/lt-login.png",
  },
  {
    id: "ht",
    label: "HT Consumer",
    field: "Service Number",
    placeholder: "Enter HT service number",
    icon: "/brand/ht-login.png",
  },
  {
    id: "employee",
    label: "Employee",
    field: "Employee ID",
    placeholder: "Enter employee ID",
    icon: "/brand/employee-login.png",
  },
] as const;

/* --- Service quick links, grouped as on the live homepage --- */

export type ServiceGroup = {
  title: string;
  blurb: string;
  icon: string;
  links: NavItem[];
};

export const SERVICES: ServiceGroup[] = [
  {
    title: "New Connection",
    blurb: "Apply for a fresh supply and track the application end to end.",
    icon: "plug",
    links: [
      { label: "Apply for LT New Connection", href: "#" },
      { label: "Apply for HT New Connection", href: "#" },
      { label: "HT to LT New Service", href: "#" },
      { label: "HT New Connection — EoDB Estimate", href: "#" },
      { label: "Application Status", href: "#" },
    ],
  },
  {
    title: "Online Payments",
    blurb: "Pay current consumption bills, estimates and service charges.",
    icon: "rupee",
    links: [
      { label: "Pay / View CC Bill", href: "#" },
      { label: "Estimate Payments", href: "#" },
      { label: "Re-payments", href: "#" },
      { label: "Meter Replacement Charges", href: "#" },
      { label: "Service Inspection Fees", href: "#" },
    ],
  },
  {
    title: "LT Customer Services",
    blurb: "Modify an existing low-tension service without visiting an office.",
    icon: "sliders",
    links: [
      { label: "Load Change (Additional / Deration)", href: "#" },
      { label: "Name Change", href: "#" },
      { label: "Category Change", href: "#" },
      { label: "Virtual Net Metering", href: "#" },
      { label: "Other Consumer Services", href: "#" },
    ],
  },
  {
    title: "HT Consumer Services",
    blurb: "Load, metering and supply requests for high-tension consumers.",
    icon: "factory",
    links: [
      { label: "Load Additional / Deration / Restoration", href: "#" },
      { label: "Temporary Additional Supply", href: "#" },
      { label: "Open Access Metering", href: "#" },
      { label: "24-Hour Power Supply", href: "#" },
      { label: "Dedicated Feeder", href: "#" },
    ],
  },
  {
    title: "Solar Programs",
    blurb: "Rooftop solar registration, net metering and subsidy schemes.",
    icon: "sun",
    links: [
      { label: "PM Suryaghar Solar Registration", href: "https://pmsuryaghar.gov.in/", external: true },
      { label: "Non-CFA Solar Registration", href: "#" },
      { label: "Additional Capacity Registration", href: "#" },
      { label: "Net Meter Payments", href: "#" },
      { label: "Virtual Net Metering", href: "#" },
    ],
  },
  {
    title: "Complaints & Supply",
    blurb: "Report an outage, track a complaint and check supply status.",
    icon: "wrench",
    links: [
      { label: "Register a Complaint", href: "#" },
      { label: "Complaint / Service Status", href: "#" },
      { label: "Outage Management System", href: "#" },
      { label: "Consumer Rights", href: "#" },
      { label: "CGRF Orders and Reports", href: "#" },
    ],
  },
];

/* --- "Our Impact" band --- */

export const IMPACT = [
  { value: 73.7, suffix: "L+", label: "Active Consumers", icon: "users" },
  { value: 11, suffix: "", label: "Districts Served", icon: "map" },
  { value: 145, suffix: "K+", label: "KM Distribution Lines", icon: "bolt" },
  { value: 99.8, suffix: "%", label: "Service Reliability", icon: "shield" },
] as const;

/* --- "Quick Facts" grid --- */

export const QUICK_FACTS = [
  { value: "75,29,373", label: "Consumers", href: "#" },
  { value: "5,101", label: "MD Reached (MW)", href: "#" },
  { value: "5.61", label: "Distribution Losses (FY 25-26)", href: "#" },
  { value: "11", label: "Districts", href: `${ORG.live}/districtMap` },
  {
    value: "1,044",
    label: "33/11 kV Sub Stations",
    href: "https://gis.aptransco.co.in/portal/apps/webappviewer/index.html?id=18e70976c3b34a28be5dc01288834d91",
    external: true,
  },
  {
    value: "679",
    label: "33 kV Feeders",
    href: "https://gisweb.apeasternpower.com/thirtyThreeKVPage",
    external: true,
  },
  {
    value: "4,830",
    label: "11 kV Feeders",
    href: "https://gisweb.apeasternpower.com/elevenKvGisMap",
    external: true,
  },
  { value: "3,49,125", label: "DTRs", href: "#" },
];

/* --- Campaign banners downloaded from the live site --- */

export const BANNERS = [
  {
    src: "/banners/amaravathi.jpg",
    alt: "Amaravathi Unstoppable campaign banner",
    title: "Amaravathi — Unstoppable",
    body: "Powering the capital region's growth with resilient distribution infrastructure.",
  },
  {
    src: "/banners/solar.jpg",
    alt: "Rooftop solar campaign banner",
    title: "Go Solar with PM Surya Ghar",
    body: "Register for a subsidised rooftop solar plant and net metering.",
    cta: { label: "Apply on pmsuryaghar.gov.in", href: "https://pmsuryaghar.gov.in/" },
  },
  {
    src: "/banners/zero-poverty.jpg",
    alt: "Zero Poverty programme banner",
    title: "Zero Poverty — P4 Programme",
    body: "Supporting the state's household upliftment mission across 11 districts.",
  },
];

/* --- Latest News, verbatim from the homepage marquee --- */

export const NEWS = [
  {
    date: "12-11-2025",
    title:
      "Expression of Interest from Eligible Firms for Design, Development, Deployment and Maintenance of Head End System (HES) for Advance Metering Infrastructure.",
  },
  {
    date: "11-11-2025",
    title:
      "Expression of Interest (EoI) from Eligible Firms for Provisioning, Management and Monitoring of Networking Services (AMI e-SIM Connectivity) for Smart Meters.",
  },
  {
    date: "06-10-2025",
    title:
      "Results for Main Written Test conducted on 15-09-2025 for the post of Junior Engineer (IT & Telecom).",
  },
  {
    date: "25-09-2025",
    title:
      "Expression of interest for empanelment of external faculty institutions with APEPDCL training center.",
  },
  {
    date: "17-03-2025",
    title: "Expression of Interest (EoI) No. CGM/O/CS/APEPDCL/VSP/02/2024-25.",
  },
  {
    date: "14-03-2025",
    title:
      "EoI for termination and testing of already laid 218 km of 96F OFC cable under R-APDRP project, including O&M for 10 years in VSP city.",
  },
  {
    date: "04-12-2024",
    title:
      "APEPDCL — HRD Training Calendar for O&M Staff for FY 2024-2025.",
  },
];

/* --- Footer --- */

export const FOOTER_COLUMNS: { title: string; links: NavItem[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Downloads", href: "#" },
      { label: "Consumer Rights", href: "#" },
      { label: "Power Purchase", href: "#" },
      { label: "Complaint / Service Status", href: "#" },
      { label: "Electricity Ombudsman Office", href: "#" },
      { label: "CGRF Orders and Reports", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Power Supply",
    links: [
      { label: "Outage Management System", href: "#" },
      { label: "Geo Representation Map", href: `${ORG.live}/districtMap` },
      {
        label: "33 kV GIS Network",
        href: "https://gisweb.apeasternpower.com/thirtyThreeKVPage",
        external: true,
      },
      {
        label: "11 kV GIS Network",
        href: "https://gisweb.apeasternpower.com/elevenKvGisMap",
        external: true,
      },
      { label: "GB and LB Arrears", href: "#" },
      { label: "Ongoing Projects", href: "#" },
    ],
  },
  {
    title: "Tenders",
    links: [
      { label: "Tenders", href: "#" },
      { label: "Judicial Preview Tenders", href: "#" },
      { label: "Allotted Tenders", href: "#" },
      {
        label: "e-Procurement Portal",
        href: "http://www.apeprocurement.gov.in/",
        external: true,
      },
    ],
  },
  {
    title: "Vendors & Contractors",
    links: [
      { label: "Vendor Registration", href: "#" },
      { label: "Vendor and Contractor Lists", href: "#" },
      { label: "Blacklisted Firms / Contractors", href: "#" },
      { label: "Contractor Registration Procedure", href: "#" },
      { label: "Suppliers", href: "#" },
    ],
  },
];

export const PARTNER_LINKS: NavItem[] = [
  { label: "APERC", href: "http://aperc.gov.in/", external: true },
  { label: "AP Energy Department", href: "#" },
  { label: "APTRANSCO", href: "https://aptransco.co.in/", external: true },
  { label: "APGENCO", href: "https://apgenco.gov.in/", external: true },
  { label: "APSPDCL", href: "https://www.apspdcl.in/", external: true },
  {
    label: "Meeseva",
    href: "https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx",
    external: true,
  },
  { label: "AP Single Desk Portal", href: "#" },
  { label: "APSECM", href: "#" },
  {
    label: "e-Procurement",
    href: "http://www.apeprocurement.gov.in/",
    external: true,
  },
];

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/epdcl", icon: "facebook" },
  { label: "X (Twitter)", href: "https://twitter.com/ap_epdcl", icon: "twitter" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/apepdcl/", icon: "linkedin" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ap_epdcl?sub_confirmation=1",
    icon: "youtube",
  },
  { label: "Instagram", href: "https://www.instagram.com/ap_epdcl/", icon: "instagram" },
] as const;

export const APP_LINKS = {
  android:
    "https://play.google.com/store/apps/details?id=com.apepdcl.easternpower&hl=en_IN",
  ios: "https://apps.apple.com/in/app/eastern-power/id6605936671",
} as const;
