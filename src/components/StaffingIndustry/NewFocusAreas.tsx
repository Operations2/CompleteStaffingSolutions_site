"use client";
import styles from "./NewFocusAreas.module.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"] });

const focusData = [
  {
    title: "Data Center",
    text: "Sourcing mission-critical talent for infrastructure management, cloud operations, and high-security data facilities.",
    icon: "🌐"
  },
  {
    title: "Executive Search",
    text: "Finding visionary leaders and high-level management professionals to drive strategic growth and organizational success.",
    icon: "📈"
  },
  {
    title: "Financial Services",
    text: "Connecting institutions with experts in wealth management, insurance, and investment banking compliance.",
    icon: "⚖️"
  }
];

export default function NewFocusAreas() {
  return (
    <section className={`${styles.section} ${jakarta.className}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {focusData.map((item, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.fTitle}>{item.title}</h3>
              <p className={styles.fText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}