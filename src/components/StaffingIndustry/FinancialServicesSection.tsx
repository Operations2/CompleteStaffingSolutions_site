"use client";
import styles from "./FinancialServicesSection.module.css";

export default function FinancialServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>Financial Services Solutions</h2>
            <p className={styles.subtitle}>Supporting banks, hedge funds, and insurance firms with top-tier specialized professionals.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.fCard}>
            <div className={styles.num}>01</div>
            <h4>Wealth Management</h4>
            <p>Certified advisors and portfolio managers for high-net-worth clients.</p>
          </div>
          <div className={styles.fCard}>
            <div className={styles.num}>02</div>
            <h4>Compliance & Risk</h4>
            <p>Regulatory experts to navigate the ever-changing financial landscape.</p>
          </div>
          <div className={styles.fCard}>
            <div className={styles.num}>03</div>
            <h4>Investment Banking</h4>
            <p>Analysts and associates for M&A, private equity, and venture capital.</p>
          </div>
        </div>
      </div>
    </section>
  );
}