"use client";
import styles from "./IndustriesGridSection.module.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"] });

const industries = [
  "Agriculture", "Arts", "Construction", "Consumer Goods", "Corporate Services", 
  "Design", "Education", "Energy & Mining", "Entertainment", "Finance", 
  "Hardware & Networking", "Healthcare", "Property Management", "Legal", 
  "Manufacturing", "Media & Communications", "Nonprofit", "Public Administration", 
  "Public Safety", "Real Estate", "Recreation & Travel", "Retail", 
  "Software & IT Services", "Transportation & Logistics", "Wellness & Fitness",
  "Data Center", "Executive Search", "Financial Services" // New additions
];

export default function IndustryGrid() {
  return (
    <section className={`${styles.section} ${jakarta.className}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Explore the <span className={styles.blue}>Sectors</span> We Support</h2>
          <p className={styles.desc}>We bridge the gap between top talent and industry-leading organizations across diverse specialized fields.</p>
        </div>
        <div className={styles.grid}>
          {industries.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.dot} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}