"use client";
import styles from "./IndustryStats.module.css";

export default function IndustryStats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.statBox}>
          <div className={styles.stat}>
            <span className={styles.num}>25+</span>
            <span className={styles.label}>Years Experience</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.num}>28+</span>
            <span className={styles.label}>Specialized Industries</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.num}>5000+</span>
            <span className={styles.label}>Placements Yearly</span>
          </div>
        </div>
      </div>
    </section>
  );
}