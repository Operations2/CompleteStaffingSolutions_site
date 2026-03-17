"use client";
import Link from "next/link";

import styles from "./ExecutiveSearchSection.module.css";

export default function ExecutiveSearchSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>👑</div>
            <h2 className={styles.title}>Executive Search</h2>
            <p className={styles.desc}>
              Finding visionary leaders requires a deep understanding of organizational culture and strategic goals. We specialize in placing C-suite executives and board members who drive long-term impact.
            </p>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span>98%</span>
                <p>Retention Rate</p>
              </div>
              <div className={styles.stat}>
                <span>15+</span>
                <p>Avg. Years Exp.</p>
              </div>
            </div>
          </div>
          <div className={styles.textContent}>
             <h3 className={styles.subHeading}>Building the <span className={styles.blue}>Future</span> of Leadership</h3>
             <p className={styles.p}>Our methodology combines data-driven insights with a human-centric approach to identify candidates who are not just qualified, but transformative.</p>
             <Link href="/contact" className={styles.btn}>Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}