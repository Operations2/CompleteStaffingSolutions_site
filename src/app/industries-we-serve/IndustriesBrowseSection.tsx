"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DepartmentCards from "../../components/Departments/Departmentcards";

const INDUSTRIES = [
  {
    id: "corporateservices",
    image: "/industries/cards/corporate services.webp",
    title: "Corporate Services",
    description: "Professional staff for corporate operations and business services",
    iconColor: "#6CA642",
  },
  {
    id: "finance",
    image: "/67db95411df971225cd735e7_emerging_technologies_in_finance.webp",
    title: "Finance",
    description: "Financial experts for banking, accounting, and investment services",
    iconColor: "#6CA642",
  },
  {
    id: "healthcare",
    image: "/industries/cards/healthcare.webp",
    title: "Healthcare",
    description: "Qualified healthcare professionals for hospitals, clinics, and care facilities",
    iconColor: "#6CA642",
  },

  {
    id: "hardware",
    image: "/industries/cards/hardware.webp",
    title: "Hardware & Networking",
    description: "Technical professionals for hardware systems and network infrastructure",
    iconColor: "#6CA642",
  },

  {
    id: "legal",
    image: "/industries/cards/legal.webp",
    title: "Legal",
    description: "Experienced legal talent for law firms and legal departments",
    iconColor: "#6CA642",
  },
  {
    id: "manufacturing",
    image: "/industries/cards/construction.webp",
    title: "Manufacturing",
    description: "Skilled workers for production, assembly and quality control",
    iconColor: "#6CA642",
  },
  {
    id: "non-profit",
    image: "/industries/cards/non profit.webp",
    title: "Nonprofit",
    description: "Dedicated professionals for nonprofit organizations and social services",
    iconColor: "#6CA642",
  },
  {
    id: "property",
    image: "/industries/cards/real estate.webp",
    title: "Property Management",
    description: "Property management professionals for residential, commercial, and facility operations",
    iconColor: "#6CA642",
  },

  {
    id: "real-estate",
    image: "/industries/cards/real estate.webp",
    title: "Real Estate",
    description: "Reliable agents and support staff for real estate industry",
    iconColor: "#6CA642",
  },
  {
    id: "it",
    image: "/industries/cards/information.webp",
    title: "Software & IT Services",
    description: "Top-notch tech talent for IT solutions and digital operations",
    iconColor: "#6CA642",
  },
  {
    id: "transportation",
    image: "/industries/cards/transportation.webp",
    title: "Transportation & Logistics",
    description: "Workers for supply chain, warehousing and distribution",
    iconColor: "#6CA642",
  },
  {
    id: "financial-services",
    image: "/industries/cards/information.webp",
    title: "Financial Services",
    description: "Strategic expertise in banking, investment management, and global compliance",
    iconColor: "#6CA642",
  },
  {
    id: "communications",
    image: "/industries/cards/construction.webp",
    title: "Communications",
    description: "Connecting organizations with storytelling, PR, and digital media experts",
    iconColor: "#6CA642",
  },
  {
    id: "insurance",
    image: "/industries/cards/insurance.webp",
    title: "Insurance",
    description: "Professional staffing for risk assessment, underwriting, and claims management",
    iconColor: "#6CA642",
  },
];

// Icon component - renders proper icons based on industry
function IndustryIcon({ title, color }: { title: string; color: string }) {
  const getIcon = () => {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes('agriculture')) {
      return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />;
    }
    if (lowerTitle.includes('arts')) {
      return <path d="M12 3v9.28l-3.5 3.5L12 19.28l3.5-3.5L12 12.28V3z" />;
    }
    if (lowerTitle.includes('construction')) {
      return <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z" />;
    }
    if (lowerTitle.includes('consumer')) {
      return <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />;
    }
    if (lowerTitle.includes('corporate')) {
      return <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />;
    }
    if (lowerTitle.includes('design')) {
      return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />;
    }
    if (lowerTitle.includes('education')) {
      return <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />;
    }
    if (lowerTitle.includes('energy')) {
      return <path d="M7 2v11h3v9l7-12h-4l4-8z" />;
    }
    if (lowerTitle.includes('entertainment')) {
      return <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />;
    }
    if (lowerTitle.includes('finance')) {
      return <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />;
    }
    if (lowerTitle.includes('hardware')) {
      return <path d="M18 1.01L8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z" />;
    }
    if (lowerTitle.includes('healthcare') || lowerTitle.includes('health')) {
      return <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />;
    }
    if (lowerTitle.includes('legal')) {
      return <path d="M12 2L1 8l4 2.18v6L12 20l7-3.82v-6l2-1.09V17h2V8L12 2zm0 14.47L6.18 14l5.82-3.18L17.82 14 12 16.47z" />;
    }
    if (lowerTitle.includes('manufacturing')) {
      return <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10z" />;
    }
    if (lowerTitle.includes('media') || lowerTitle.includes('communication')) {
      return <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />;
    }
    if (lowerTitle.includes('nonprofit')) {
      return <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />;
    }
    if (lowerTitle.includes('public')) {
      return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />;
    }
    if (lowerTitle.includes('real estate') || lowerTitle.includes('estate')) {
      return <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />;
    }
    if (lowerTitle.includes('recreation') || lowerTitle.includes('travel')) {
      return <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />;
    }
    if (lowerTitle.includes('retail')) {
      return <path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" />;
    }
    if (lowerTitle.includes('software') || lowerTitle.includes('it')) {
      return <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />;
    }
    if (lowerTitle.includes('transportation') || lowerTitle.includes('logistics')) {
      return <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />;
    }
    if (lowerTitle.includes('wellness') || lowerTitle.includes('fitness')) {
      return <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z" />;
    }

    // Default icon
    return <circle cx="12" cy="12" r="8" />;
  };

  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-[1.04]"
      style={{ backgroundColor: color }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        {getIcon()}
      </svg>
    </div>
  );
}

export default function IndustriesBrowseSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const FILTERS = [
    "All",
    // "Agriculture",
    // "Arts",
    "Construction",
    // "Consumer Goods",
    "Corporate Services",
    // "Design",
    // "Education",
    // "Energy & Mining",
    // "Entertainment",
    "Finance",
    "Hardware & Networking",
    "Healthcare",
    "Legal",
    "Manufacturing",
    // "Media & Communications",
    "Nonprofit",
    // "Public Administration",
    "Property Management",
    "Real Estate",
    // "Recreation & Travel",
    // "Retail",
    "Software & IT Services",
    "Transportation & Logistics",
    "Financial Services",
    "Communications",
    "Insurance"
    // "Wellness & Fitness",
  ];

  // Filter industries
  const filteredIndustries = INDUSTRIES.filter((ind) => {
    const matchesSearch =
      !searchQuery.trim() ||
      ind.title.toLowerCase().includes(searchQuery.trim().toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      ind.title.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  // Show only 8 cards initially, then all on button click
  const industriesToShow = showAll ? filteredIndustries : filteredIndustries.slice(0, 8);

  return (
    <div className="w-full bg-[#f8f8f8] font-[var(--font-inter),Inter,sans-serif]">
     
      {/* Industry cards grid */}
      <div className="grid max-w-[1180px] grid-cols-1 gap-6 px-6 pt-12 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industriesToShow.map((industry, index) => (
          <div
            key={industry.id}
            className="flex flex-col overflow-hidden bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 group hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
          >
            <div className="relative w-full overflow-hidden aspect-[1.25/1]">
              <Image
                src={industry.image}
                alt=""
                fill
                className="object-cover transition-transform duration-300 p-[9px] rounded-[20px] group-hover:scale-[1.02]"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 280px"
                unoptimized
              />
            </div>
            <div className="flex flex-col flex-1 gap-2 px-4 pt-4 pb-5">
              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <IndustryIcon title={industry.title} color={industry.iconColor} />
                <h3 className="m-0 font-(--font-plus-jakarta) text-[17px] font-bold text-[#0d0d0d] leading-snug">
                  {industry.title}
                </h3>
              </div>
              {/* Description */}
              <p className="px-[13px] m-0 text-[12.5px] leading-relaxed text-justify text-[#666] min-h-[38px]">
                {industry.description}
              </p>
              {/* Button — alternate color every other */}
              <Link
                href={`/industries-we-serve/${industry.id}`}
                className={`relative inline-flex items-center justify-center gap-2 h-[42px] px-[18px] mt-auto text-[16px] font-medium text-white rounded-md transition-all duration-300 hover:shadow-lg ${
                  index % 2 === 0
                    ? "bg-[#6CA642] hover:bg-[#5d9338] hover:shadow-[0_4px_12px_rgba(108,166,66,0.35)]"
                    : "bg-[#19478e] hover:bg-[#15376f] hover:shadow-[0_4px_12px_rgba(25,71,142,0.35)]"
                }`}
              >
                Explore
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {!showAll && filteredIndustries.length > 8 && (
        <div className="mt-10 text-center px-6">
          <button
            onClick={() => setShowAll(true)}
            className="relative inline-flex items-center justify-center px-9 py-3.5 text-[17px] font-semibold text-white bg-[#6CA642] rounded-md shadow-sm transition-all duration-300 hover:bg-[#5d9338] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(108,166,66,0.3)]"
          >
            View All Industries
          </button>
        </div>
      )}

      {/* Departments heading + cards section */}
      <section className="w-full mt-10 mb-4 px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-16">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto">
          <h2 className="font-(--font-plus-jakarta) text-[clamp(26px,3vw,32px)] font-bold text-[#022d6d] m-0">
            Departments
          </h2>
        </div>
      </section>
      <DepartmentCards />
    </div>
  );
}