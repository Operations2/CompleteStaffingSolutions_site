"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./IndustryExplorer.module.css";

// Industry Data (Total 28)
const ALL_INDUSTRIES = [
  { title: "Agriculture", slug: "agriculture", routeSlug: "agriculture", color: "green", icon: "farm" },
  { title: "Arts", slug: "arts", routeSlug: "arts", color: "blue", icon: "art" },
  { title: "Construction", slug: "construction", routeSlug: "construction", color: "green", icon: "build" },
  { title: "Consumer Goods", slug: "consumer-goods", routeSlug: "consumergoods", color: "blue", icon: "box" },
  { title: "Corporate Services", slug: "corporate-services", routeSlug: "corporateservices", color: "green", icon: "office" },
  { title: "Design", slug: "design", routeSlug: "design", color: "blue", icon: "pen" },
  { title: "Education", slug: "education", routeSlug: "education", color: "green", icon: "book" },
  { title: "Energy & Mining", slug: "energy-mining", routeSlug: "energy", color: "blue", icon: "flash" },
  { title: "Entertainment", slug: "entertainment", routeSlug: "entertainment", color: "green", icon: "video" },
  { title: "Finance", slug: "finance", routeSlug: "finance", color: "blue", icon: "bank" },
  { title: "Hardware & Networking", slug: "hardware-networking", routeSlug: "hardware", color: "green", icon: "server" },
  { title: "Healthcare", slug: "healthcare", routeSlug: "healthcare", color: "blue", icon: "health" },
  { title: "Property Management", slug: "property-management", routeSlug: "property", color: "green", icon: "home" },
  { title: "Legal", slug: "legal", routeSlug: "legal", color: "blue", icon: "legal" },
  { title: "Manufacturing", slug: "manufacturing", routeSlug: "manufacturing", color: "green", icon: "factory" },
  { title: "Media & Communications", slug: "media-communications", routeSlug: "media", color: "blue", icon: "mic" },
  { title: "Nonprofit", slug: "nonprofit", routeSlug: "non-profit", color: "green", icon: "heart" },
  { title: "Public Administration", slug: "public-administration", routeSlug: "public", color: "blue", icon: "gov" },
  { title: "Public Safety", slug: "public-safety", routeSlug: "public", color: "green", icon: "shield" },
  { title: "Real Estate", slug: "real-estate", routeSlug: "real-estate", color: "blue", icon: "map" },
  { title: "Recreation & Travel", slug: "recreation-travel", routeSlug: "travel", color: "green", icon: "plane" },
  { title: "Retail", slug: "retail", routeSlug: "retail", color: "blue", icon: "cart" },
  { title: "Software & IT Services", slug: "software-it-services", routeSlug: "it", color: "green", icon: "code" },
  { title: "Transportation & Logistics", slug: "transportation-logistics", routeSlug: "transportation", color: "blue", icon: "truck" },
  { title: "Wellness & Fitness", slug: "wellness-fitness", routeSlug: "wellness", color: "green", icon: "gym" },
  { title: "Data Center", slug: "data-center", routeSlug: "hardware", color: "blue", icon: "data" },
  { title: "Executive Search", slug: "executive-search", routeSlug: "corporateservices", color: "green", icon: "king" },
  { title: "Financial Services", slug: "financial-services", routeSlug: "financial-services", color: "blue", icon: "money" },
];

const Icon = ({ type }: { type: string }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {type === "farm" && <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />}
      {type === "bank" && <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />}
      {type === "health" && <path d="M22 12h-4l-3 9L9 3l-3 9H2" />}
{type === "office" && (
  <g>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </g>
)}
      {/* Default placeholder icons for others */}
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export default function IndustryExplorer() {
  const [showAll, setShowAll] = useState(false);
  const displayedIndustries = showAll ? ALL_INDUSTRIES : ALL_INDUSTRIES.slice(0, 8);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Industries We Serve</h2>

        <div className={styles.grid}>
          {displayedIndustries.map((item, index) => (
            <div key={item.slug} className={styles.card}>
              {/* TOP IMAGE */}
              <div className={styles.imageArea}>
                <Image
                  src={`/industries/${item.slug}.jpg`}
                  alt={item.title}
                  fill
                  className={styles.cardImg}
                  unoptimized
                />
              </div>

              {/* OVERLAPPING ICON */}
              <div className={`${styles.iconWrapper} ${styles[item.color]}`}>
                <Icon type={item.icon} />
              </div>

              {/* CONTENT */}
              <div className={styles.contentArea}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>
                  Highly skilled and industry-ready professionals for the {item.title} sector.
                </p>
              </div>

              {/* FULL WIDTH BUTTON */}
              <Link href={`/industries-we-serve/${(item as any).routeSlug ?? item.slug}`} className={`${styles.actionBtn} ${styles[`btn-${item.color}`]}`}>
                <span>Explore Roles</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.viewMoreRow}>
          <button className={styles.mainToggleBtn} onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All Industries"}
          </button>
        </div>
      </div>
    </section>
  );
}