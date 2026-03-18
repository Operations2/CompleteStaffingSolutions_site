export type CityFaq = [question: string, answer: string];

export type CityNearby = [slug: string, state: string, label: string];

export type CityType = "custom" | "template";

export type City = {
  slug: string;
  name: string;
  state: string;
  type: CityType;
  /** Optional hero tag line like "Serving Greater Boston, MA" */
  tag?: string;
  /** Optional SEO overrides */
  title?: string;
  description?: string;

  /** Page content */
  intro_h2?: string;
  intro_p?: string;
  market_p1?: string;
  market_p2?: string;
  employers?: string[];
  nearby_h3?: string;
  nearby?: CityNearby[];
  faq?: CityFaq[];
};

const templateCity = (name: string, state: string, slug: string): City => ({
  slug,
  name,
  state,
  type: "template",
  tag: `Serving ${name}, ${state}`,
  intro_h2: `Healthcare, Engineering & Finance Staffing in ${name}, ${state}`,
  intro_p: `Complete Staffing Solutions provides expert staffing services in ${name}, ${state}, specializing in Healthcare, Engineering, and Accounting & Finance placements. With over 25 years of experience and 200,000+ placements, we connect ${name} employers with qualified candidates in 48 hours or less.`,
  market_p1: `${name}'s growing economy creates consistent demand for healthcare professionals, skilled engineers, and finance experts. Our specialized recruiters understand the local market and maintain deep candidate pipelines in the ${name} area.`,
  market_p2: `Whether you need a Registered Nurse, a Civil Engineer, or a Senior Accountant, Complete Staffing Solutions delivers pre-screened, qualified candidates ready to contribute from day one.`,
  employers: [
    `Major ${state} Healthcare Systems`,
    "Local Engineering Firms",
    "Regional Financial Institutions",
    "Corporate Headquarters",
    "Manufacturing Companies",
    "Construction & Infrastructure",
  ],
  nearby_h3: `Also Serving the Greater ${name} Region`,
  nearby: [],
  faq: [
    [
      `How quickly can you fill positions in ${name}?`,
      "We typically present qualified candidates within 24–48 hours. For specialized roles, allow 3–5 business days.",
    ],
    [
      `What healthcare roles do you fill in ${name}?`,
      `We place Registered Nurses, Medical Assistants, Phlebotomists, Physical Therapists, Medical Billers, and administrative healthcare staff throughout ${state}.`,
    ],
    [
      `Do you offer engineering staffing in ${name}?`,
      `Yes. We place mechanical, civil, electrical, software, and manufacturing engineers across ${name} and Greater ${state}.`,
    ],
    [
      `What finance roles do you place in ${name}?`,
      "Controllers, CFOs, Financial Analysts, Staff Accountants, AP/AR Specialists, and Payroll Professionals across all sectors.",
    ],
  ],
});

/**
 * Cities keyed by slug (what appears in the URL).
 * Extracted from `Claudewebsite`'s inline JS city database.
 */
export const cities: Record<string, City> = {
  // ── Custom (fully written) ──
  "boston-ma": {
    slug: "boston-ma",
    name: "Boston",
    state: "MA",
    type: "custom",
    tag: "Serving Greater Boston, MA",
    intro_h2: "Staffing Solutions Built for Boston's Economy",
    intro_p:
      "Boston's healthcare systems, biotech firms, engineering companies, and financial institutions require specialized talent. Complete Staffing Solutions recruiters understand the local market, the regulatory environment, and the culture of Greater Boston employers. Whether you need a Registered Nurse for a major hospital network, a Mechanical Engineer for a Cambridge technology firm, or a Senior Accountant for a financial services company — we deliver qualified candidates, fast.",
    market_p1:
      "Boston's labor market is one of the most competitive in the country. World-class hospital and healthcare networks create constant demand for clinical and administrative talent. The Route 128 technology and biotech corridor drives engineering hiring across the region. Boston's dense concentration of investment firms, banks, and corporate headquarters means accounting and finance talent is always in high demand.",
    market_p2:
      "Our recruiters specialize in the disciplines they hire for — so you speak to someone who understands the difference between a charge nurse and a clinical coordinator, or knows why a private equity firm needs a different CFO profile than a manufacturing company.",
    employers: [
      "Major Hospital & Health Networks",
      "Academic Medical Centers",
      "Regional Banking Institutions",
      "Investment & Asset Management Firms",
      "Aerospace & Defense Contractors",
      "Biotech & Life Sciences Companies",
      "Higher Education Institutions",
      "Insurance & Financial Services",
      "Manufacturing & Engineering Firms",
      "Technology & Software Companies",
    ],
    nearby_h3: "Also Serving Greater Boston & New England",
    nearby: [
      ["worcester-ma", "MA", "Worcester, MA"],
      ["cambridge-ma", "MA", "Cambridge, MA"],
      ["lowell-ma", "MA", "Lowell, MA"],
      ["providence-ri", "RI", "Providence, RI"],
      ["hartford-ct", "CT", "Hartford, CT"],
      ["springfield-ma", "MA", "Springfield, MA"],
    ],
    faq: [
      [
        "How quickly can you fill a healthcare position in Boston?",
        "We typically present a shortlist of pre-screened, qualified healthcare candidates within 24–48 hours of receiving your job request. For specialized roles like Nurse Practitioners or Physical Therapists, allow 3–5 business days for a highly targeted search.",
      ],
      [
        "Do you offer engineering contract staffing in Boston?",
        "Yes. We offer direct/permanent placement, temporary staffing, and temp-to-hire arrangements for engineering roles. Contract engineers are employed by CSS — meaning you avoid payroll processing, benefits costs, and unemployment liability.",
      ],
      [
        "What accounting and finance roles do you specialize in for Boston employers?",
        "Our finance division places Controllers, CFOs, Financial Analysts, Staff Accountants, AP/AR Specialists, Payroll Professionals, and Tax Specialists across corporate, financial services, and nonprofit sectors throughout Greater Boston.",
      ],
      [
        "Does Complete Staffing Solutions serve all of Massachusetts?",
        "Yes. In addition to Boston and Greater Boston, we serve Worcester, Springfield, Lowell, Cambridge, Marlborough, Brockton, Quincy, and the broader Massachusetts market. We also operate across Connecticut, Rhode Island, New York, and Florida.",
      ],
    ],
  },
  "providence-ri": {
    slug: "providence-ri",
    name: "Providence",
    state: "RI",
    type: "custom",
    tag: "Serving Greater Providence, RI",
    intro_h2: "Staffing Solutions Built for Providence's Growing Economy",
    intro_p:
      "Providence is experiencing significant growth in healthcare, advanced manufacturing, and financial services. Major hospital systems and academic medical centers are among the largest healthcare employers in Rhode Island. Complete Staffing Solutions has deep roots in the Providence market and places hundreds of professionals across RI each year.",
    market_p1:
      "Rhode Island's economy is anchored by healthcare and higher education. The Jewelry District has evolved into a hub for technology and biotech startups. Financial services firms in downtown Providence need accounting and finance talent year-round. Advanced manufacturing throughout the state drives ongoing demand for skilled engineers across mechanical, electrical, and industrial disciplines.",
    market_p2:
      "Complete Staffing Solutions is headquartered in New England and has placed professionals across Rhode Island for over 25 years. Our local knowledge of the Providence market means faster, better-fit placements for employers across every sector.",
    employers: [
      "Major Hospital & Health Systems",
      "Academic Medical Centers",
      "Regional Banks & Credit Unions",
      "Insurance & Financial Services",
      "Advanced Manufacturing Companies",
      "Defense & Aerospace Contractors",
      "Higher Education Institutions",
      "Technology & Software Firms",
      "Construction & Engineering Companies",
      "Corporate & Professional Services",
    ],
    nearby_h3: "Also Serving Greater Rhode Island",
    nearby: [
      ["warwick-ri", "RI", "Warwick, RI"],
      ["cranston-ri", "RI", "Cranston, RI"],
      ["pawtucket-ri", "RI", "Pawtucket, RI"],
      ["boston-ma", "MA", "Boston, MA"],
      ["worcester-ma", "MA", "Worcester, MA"],
      ["hartford-ct", "CT", "Hartford, CT"],
    ],
    faq: [
      [
        "Does CSS place healthcare workers at Rhode Island hospital systems?",
        "Yes. We regularly place Registered Nurses, Medical Assistants, Phlebotomists, and administrative healthcare staff at major Rhode Island health systems and their affiliated facilities statewide.",
      ],
      [
        "Do you staff engineering roles in Providence?",
        "Absolutely. We place engineers across manufacturing, defense, biotech, and construction throughout Rhode Island. We cover mechanical, electrical, civil, and software engineering disciplines.",
      ],
      [
        "What finance and accounting roles do you fill in Providence?",
        "We place Controllers, Staff Accountants, Financial Analysts, Payroll Specialists, and senior finance executives across Providence's banking, insurance, and corporate sectors.",
      ],
      [
        "How does CSS serve smaller Rhode Island markets like Cranston and Warwick?",
        "Our Providence-area team covers all of Rhode Island statewide. We regularly fill positions in Warwick, Cranston, Pawtucket, East Providence, Newport, and throughout the state.",
      ],
    ],
  },
  "hartford-ct": {
    slug: "hartford-ct",
    name: "Hartford",
    state: "CT",
    type: "custom",
    tag: "Serving Greater Hartford, CT",
    intro_h2: "Hartford's Premier Healthcare, Engineering & Finance Staffing Firm",
    intro_p:
      "Hartford is the insurance capital of the world, making it a powerhouse for accounting and finance talent. Connecticut's manufacturing base — particularly in aerospace and defense — drives engineering demand. And Hartford's major hospital systems create consistent healthcare staffing needs. CSS has been placing professionals in Connecticut for over 25 years.",
    market_p1:
      "Hartford's identity as the insurance capital creates enormous demand for financial analysts, accountants, and finance professionals. Multiple major insurance carriers and financial services firms have headquarters or significant operations here. Aerospace and defense manufacturers across the state drive engineering hiring. And regional hospital systems and health networks are major healthcare employers throughout Greater Hartford.",
    market_p2:
      "Complete Staffing Solutions recruiters specialize in Connecticut's unique market — the intersection of insurance finance, aerospace engineering, and healthcare staffing. That local expertise gives you an edge that national firms simply cannot match.",
    employers: [
      "Major Insurance Carriers",
      "Financial Services Headquarters",
      "Aerospace & Defense Manufacturers",
      "Regional Hospital Systems",
      "Energy & Utilities Companies",
      "Higher Education Institutions",
      "State & Municipal Government",
      "Regional Banks & Credit Unions",
      "Manufacturing & Industrial Firms",
      "Technology & Professional Services",
    ],
    nearby_h3: "Also Serving Greater Connecticut",
    nearby: [
      ["stamford-ct", "CT", "Stamford, CT"],
      ["new-haven-ct", "CT", "New Haven, CT"],
      ["bridgeport-ct", "CT", "Bridgeport, CT"],
      ["springfield-ma", "MA", "Springfield, MA"],
      ["providence-ri", "RI", "Providence, RI"],
      ["worcester-ma", "MA", "Worcester, MA"],
    ],
    faq: [
      [
        "Can CSS fill accounting roles at Hartford's major insurance companies?",
        "Yes. We have extensive experience placing financial analysts, accountants, accounting managers, and senior finance professionals at Hartford's insurance carriers and financial services firms.",
      ],
      [
        "Do you staff aerospace engineering positions in Hartford?",
        "Absolutely. We place mechanical engineers, systems engineers, manufacturing engineers, and project managers at aerospace manufacturers and their supply chain partners throughout Connecticut.",
      ],
      [
        "How quickly can you fill a nursing role at Hartford hospital systems?",
        "We typically present qualified Registered Nurses and clinical staff within 24–48 hours. For specialized ICU or OR nursing roles, allow 3–5 business days for a targeted search.",
      ],
      [
        "Do you serve all of Connecticut?",
        "Yes. In addition to Hartford, we regularly place in Stamford, New Haven, Bridgeport, Waterbury, Greenwich, Groton, and throughout Connecticut.",
      ],
    ],
  },
  "stamford-ct": {
    slug: "stamford-ct",
    name: "Stamford",
    state: "CT",
    type: "custom",
    tag: "Serving Greater Stamford & Fairfield County, CT",
    intro_h2: "Fairfield County's Trusted Staffing Partner",
    intro_p:
      "Stamford and Fairfield County sit at the intersection of New York City's financial power and Connecticut's corporate base. Hedge funds, private equity firms, and Fortune 500 companies demand elite accounting and finance talent. Complete Staffing Solutions serves Stamford, Greenwich, Norwalk, and all of Fairfield County.",
    market_p1:
      "Stamford is home to major financial services and corporate headquarters — investment management firms, global banks, insurance companies, and media corporations all have significant operations here. Greenwich's investment corridor creates premium demand for finance professionals. Fairfield County's regional hospital systems also drive consistent clinical and administrative healthcare staffing needs.",
    market_p2:
      "Our Fairfield County recruiters understand the premium placed on candidate quality and discretion in this market. We maintain relationships with passive candidates who aren't actively looking — the kind of placements that national staffing firms simply cannot make.",
    employers: [
      "Major Investment & Hedge Funds",
      "Global Financial Services Firms",
      "Fortune 500 Corporate HQs",
      "Regional Hospital Systems",
      "Insurance Companies",
      "Media & Entertainment Corporations",
      "Technology & Data Analytics Firms",
      "Asset Management Companies",
      "Private Equity Firms",
      "Corporate & Professional Services",
    ],
    nearby_h3: "Also Serving Fairfield County & Nearby Markets",
    nearby: [
      ["hartford-ct", "CT", "Hartford, CT"],
      ["new-haven-ct", "CT", "New Haven, CT"],
      ["bridgeport-ct", "CT", "Bridgeport, CT"],
      ["new-york-ny", "NY", "New York City, NY"],
      ["providence-ri", "RI", "Providence, RI"],
      ["boston-ma", "MA", "Boston, MA"],
    ],
    faq: [
      [
        "Do you place finance professionals at Stamford investment firms?",
        "Yes. We work with Fairfield County investment management firms to place financial analysts, accountants, compliance officers, and back-office finance professionals.",
      ],
      [
        "Can CSS staff Fairfield County hospital systems?",
        "Absolutely. We place clinical and administrative healthcare professionals at regional Fairfield County healthcare providers and hospital systems.",
      ],
      [
        "Do you serve Greenwich and Norwalk as well?",
        "Yes. We serve all of Fairfield County including Greenwich, Norwalk, Westport, Darien, and New Canaan, in addition to Stamford.",
      ],
      [
        "What engineering roles do you fill in the Stamford area?",
        "We place civil engineers, project managers, systems engineers, and IT professionals across Fairfield County's corporate sector.",
      ],
    ],
  },
  "miami-fl": {
    slug: "miami-fl",
    name: "Miami",
    state: "FL",
    type: "custom",
    tag: "Serving Greater Miami & South Florida",
    intro_h2: "Miami's Healthcare, Engineering & Finance Staffing Specialists",
    intro_p:
      "Miami is one of the fastest-growing economies in the United States, with booming healthcare systems, major construction and infrastructure projects, and a rapidly expanding financial services sector. Complete Staffing Solutions brings over 25 years of placement expertise to South Florida employers.",
    market_p1:
      "South Florida's healthcare market is massive — major hospital systems, specialty care networks, and outpatient facilities across Miami-Dade all require constant clinical and administrative talent. Miami's construction and infrastructure boom drives civil and mechanical engineering demand. And as Miami cements its position as a Latin American financial hub, accounting and finance hiring is accelerating across banking, real estate, and corporate sectors.",
    market_p2:
      "Complete Staffing Solutions operates across South Florida including Miami-Dade, Broward, and Palm Beach counties. We understand the bilingual requirements of many Miami employers and maintain a candidate database that reflects the region's diverse workforce.",
    employers: [
      "Major Regional Hospital Systems",
      "Specialty Care & Outpatient Networks",
      "International Banking Institutions",
      "Investment & Private Equity Firms",
      "Real Estate Development Companies",
      "Cruise & Hospitality Corporations",
      "Airlines & Transportation Companies",
      "Construction & Infrastructure Firms",
      "Technology & Software Companies",
      "Corporate & Professional Services",
    ],
    nearby_h3: "Also Serving South Florida",
    nearby: [
      ["fort-lauderdale-fl", "FL", "Fort Lauderdale, FL"],
      ["naples-fl", "FL", "Naples, FL"],
      ["orlando-fl", "FL", "Orlando, FL"],
      ["tampa-fl", "FL", "Tampa, FL"],
      ["jacksonville-fl", "FL", "Jacksonville, FL"],
      ["new-york-ny", "NY", "New York City, NY"],
    ],
    faq: [
      [
        "Can you place bilingual healthcare workers in Miami?",
        "Yes. We maintain an active pool of bilingual (English/Spanish) healthcare professionals well-suited to South Florida's diverse patient population.",
      ],
      [
        "Do you staff civil engineers for Miami's construction boom?",
        "Absolutely. We regularly place civil engineers, project managers, estimators, and construction managers for Miami-Dade's major infrastructure and real estate development projects.",
      ],
      [
        "What finance roles do you fill in Miami?",
        "We place Controllers, Financial Analysts, CFOs, Accountants, and back-office finance professionals across Miami's banking, private equity, real estate, and corporate sectors.",
      ],
      [
        "Does CSS serve Fort Lauderdale and Broward County?",
        "Yes. We serve all of Miami-Dade, Broward, and Palm Beach counties, as well as Naples and Southwest Florida.",
      ],
    ],
  },
  "naples-fl": {
    slug: "naples-fl",
    name: "Naples",
    state: "FL",
    type: "custom",
    tag: "Serving Naples & Southwest Florida",
    intro_h2: "Southwest Florida's Healthcare, Engineering & Finance Staffing Firm",
    intro_p:
      "Naples and Southwest Florida are experiencing rapid population growth, driving demand across all three of our core verticals. Major regional healthcare systems are expanding aggressively. Major infrastructure and real estate development projects require engineers. And the affluent Naples market demands sophisticated financial and accounting professionals.",
    market_p1:
      "Naples, Bonita Springs, Marco Island, and Cape Coral are growing faster than almost any other metro in the country. This creates staffing challenges for local employers who can't find talent fast enough to keep pace with growth. Regional healthcare systems and physician groups have ongoing clinical staffing needs. The construction industry's explosive growth — particularly along major corridors — drives engineering demand year-round.",
    market_p2:
      "Complete Staffing Solutions has placed professionals throughout Southwest Florida and understands the unique dynamics of the Naples market — from the seasonality of the healthcare census to the premium placed on accounting talent in this high-net-worth community.",
    employers: [
      "Regional Hospital & Health Systems",
      "Physician Groups & Specialty Practices",
      "Real Estate Development Companies",
      "Engineering & Construction Firms",
      "Wealth Management & Financial Advisory",
      "Local & County Government",
      "Medical Device & Healthcare Technology",
      "Hospitality & Resort Operations",
      "Corporate & Professional Services",
      "Collier & Lee County Employers",
    ],
    nearby_h3: "Also Serving Southwest Florida",
    nearby: [
      ["miami-fl", "FL", "Miami, FL"],
      ["tampa-fl", "FL", "Tampa, FL"],
      ["fort-lauderdale-fl", "FL", "Fort Lauderdale, FL"],
      ["orlando-fl", "FL", "Orlando, FL"],
      ["jacksonville-fl", "FL", "Jacksonville, FL"],
      ["new-york-ny", "NY", "New York, NY"],
    ],
    faq: [
      [
        "Do you staff regional healthcare systems in Naples?",
        "Yes. We regularly place Registered Nurses, Medical Assistants, surgical support staff, and administrative healthcare professionals at Southwest Florida health systems and physician practices.",
      ],
      [
        "Can CSS fill engineering roles for Naples construction projects?",
        "Absolutely. We place civil engineers, project managers, site superintendents, and estimators for residential and commercial construction projects throughout Collier and Lee counties.",
      ],
      [
        "What accounting talent do you place in the Naples market?",
        "We place Controllers, Staff Accountants, Bookkeepers, Payroll Specialists, and senior finance executives for Naples's corporate, real estate, and wealth management firms.",
      ],
      [
        "Do you serve Bonita Springs, Cape Coral, and Fort Myers?",
        "Yes. We serve all of Collier and Lee counties, including Bonita Springs, Marco Island, Cape Coral, Fort Myers, and Estero.",
      ],
    ],
  },
  "new-york-ny": {
    slug: "new-york-ny",
    name: "New York City",
    state: "NY",
    type: "custom",
    tag: "Serving New York City & Tri-State Area",
    intro_h2: "New York City's Healthcare, Engineering & Finance Staffing Specialists",
    intro_p:
      "New York City is the world's financial capital and one of the largest healthcare markets in the country. The demand for top accounting, finance, engineering, and healthcare talent is constant and competitive. Complete Staffing Solutions connects NYC employers with pre-screened professionals across all disciplines.",
    market_p1:
      "New York City's healthcare system — comprising dozens of major hospital networks, academic medical centers, and specialty care facilities — is among the largest in the world and perpetually needs qualified clinical staff. The financial district and Midtown represent the most concentrated demand for accounting and finance professionals anywhere in the country. And NYC's ongoing infrastructure, real estate, and transit projects drive engineering talent demand continuously.",
    market_p2:
      "We serve Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and the broader tri-state area including Northern New Jersey and Westchester. Our NYC-region recruiters understand the pace, the premium on talent quality, and the speed at which decisions must be made.",
    employers: [
      "Major Hospital & Academic Medical Centers",
      "Global Investment Banks",
      "Asset Management & Hedge Funds",
      "Fortune 500 Corporate HQs",
      "Media & Technology Companies",
      "Real Estate Development Firms",
      "Transit & Infrastructure Agencies",
      "Energy & Utilities Companies",
      "Insurance & Financial Services",
      "Law Firms & Professional Services",
    ],
    nearby_h3: "Also Serving the Tri-State Region",
    nearby: [
      ["stamford-ct", "CT", "Stamford, CT"],
      ["albany-ny", "NY", "Albany, NY"],
      ["buffalo-ny", "NY", "Buffalo, NY"],
      ["boston-ma", "MA", "Boston, MA"],
      ["hartford-ct", "CT", "Hartford, CT"],
      ["providence-ri", "RI", "Providence, RI"],
    ],
    faq: [
      [
        "Do you staff Registered Nurses in NYC hospital systems?",
        "Yes. We place Registered Nurses, NPs, Medical Assistants, and clinical support staff at major NYC hospital systems and academic medical centers throughout the five boroughs.",
      ],
      [
        "Can CSS fill accounting roles at Wall Street firms?",
        "Absolutely. We place Financial Analysts, Controllers, Accountants, and senior finance professionals at investment banks, hedge funds, private equity firms, and corporate finance departments throughout NYC.",
      ],
      [
        "Do you staff infrastructure engineers in New York?",
        "Yes. We place civil engineers, project managers, systems engineers, and construction professionals for NYC's ongoing transit, real estate, and infrastructure projects.",
      ],
      [
        "How quickly can you fill positions in New York City?",
        "We present qualified candidates within 24–48 hours for most roles. NYC's competitive talent market means we maintain a deep active pipeline of pre-screened candidates.",
      ],
    ],
  },

  // ── Template (fallback-generated in HTML) ──
  "worcester-ma": templateCity("Worcester", "MA", "worcester-ma"),
  "cambridge-ma": templateCity("Cambridge", "MA", "cambridge-ma"),
  "lowell-ma": templateCity("Lowell", "MA", "lowell-ma"),
  "springfield-ma": templateCity("Springfield", "MA", "springfield-ma"),
  "marlborough-ma": templateCity("Marlborough", "MA", "marlborough-ma"),
  "new-haven-ct": templateCity("New Haven", "CT", "new-haven-ct"),
  "bridgeport-ct": templateCity("Bridgeport", "CT", "bridgeport-ct"),
  "waterbury-ct": templateCity("Waterbury", "CT", "waterbury-ct"),
  "groton-ct": templateCity("Groton", "CT", "groton-ct"),
  "warwick-ri": templateCity("Warwick", "RI", "warwick-ri"),
  "cranston-ri": templateCity("Cranston", "RI", "cranston-ri"),
  "pawtucket-ri": templateCity("Pawtucket", "RI", "pawtucket-ri"),
  "east-providence-ri": templateCity("East Providence", "RI", "east-providence-ri"),
  "albany-ny": templateCity("Albany", "NY", "albany-ny"),
  "buffalo-ny": templateCity("Buffalo", "NY", "buffalo-ny"),
  "rochester-ny": templateCity("Rochester", "NY", "rochester-ny"),
  "syracuse-ny": templateCity("Syracuse", "NY", "syracuse-ny"),
  "tampa-fl": templateCity("Tampa", "FL", "tampa-fl"),
  "orlando-fl": templateCity("Orlando", "FL", "orlando-fl"),
  "jacksonville-fl": templateCity("Jacksonville", "FL", "jacksonville-fl"),
  "fort-lauderdale-fl": templateCity(
    "Fort Lauderdale",
    "FL",
    "fort-lauderdale-fl",
  ),
};

export const stateCityIndex: Record<string, { stateName: string; cities: City[] }> =
  {
    MA: {
      stateName: "Massachusetts",
      cities: [
        cities["boston-ma"],
        cities["worcester-ma"],
        cities["cambridge-ma"],
        cities["lowell-ma"],
        cities["springfield-ma"],
        cities["marlborough-ma"],
      ],
    },
    CT: {
      stateName: "Connecticut",
      cities: [
        cities["hartford-ct"],
        cities["stamford-ct"],
        cities["new-haven-ct"],
        cities["bridgeport-ct"],
        cities["waterbury-ct"],
        cities["groton-ct"],
      ],
    },
    RI: {
      stateName: "Rhode Island",
      cities: [
        cities["providence-ri"],
        cities["warwick-ri"],
        cities["cranston-ri"],
        cities["pawtucket-ri"],
        cities["east-providence-ri"],
      ],
    },
    NY: {
      stateName: "New York",
      cities: [
        cities["new-york-ny"],
        cities["albany-ny"],
        cities["buffalo-ny"],
        cities["rochester-ny"],
        cities["syracuse-ny"],
      ],
    },
    FL: {
      stateName: "Florida",
      cities: [
        cities["miami-fl"],
        cities["tampa-fl"],
        cities["naples-fl"],
        cities["orlando-fl"],
        cities["jacksonville-fl"],
        cities["fort-lauderdale-fl"],
      ],
    },
  };

