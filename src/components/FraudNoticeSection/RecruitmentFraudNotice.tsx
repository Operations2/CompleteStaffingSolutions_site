"use client";
import styles from "./RecruitmentFraudNotice.module.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"] });

const FORBIDDEN_LIST = [
  "Ask you for money or to pay for your own background screening.",
  "Send you a check or any money prior to doing any work, for advance pay or to buy equipment.",
  "Require sensitive personal information (Driver's license, SSN) in the initial stages.",
  "Use executives to solicit and contact you directly if they don't know you.",
  "Send emails from free accounts like Yahoo, Gmail, or Hotmail (We only use @completestaffingsolutions.com)."
];

export default function RecruitmentFraudNotice() {
  return (
    <section className={`${styles.section} ${jakarta.className}`}>
      <div className={styles.container}>
        {/* Header with Alert Icon */}
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h1 className={styles.mainTitle}>Recruitment Fraud Notice</h1>
        </div>

        <div className={styles.contentGrid}>
          {/* Left: Description */}
          <div className={styles.textSide}>
            <p className={styles.intro}>
              We’ve recently been made aware of some attempts by scammers using domain names such as <span className={styles.danger}>CompleteStaffingSolution.com</span> (missing the "S").
            </p>
            <p className={styles.desc}>
              These scammers fictitiously set up job interviews and offers or pose as our executives to recruit candidates. Protecting your safety and information is our absolute priority.
            </p>
            
            <div className={styles.reportBox}>
              <h3>Verify Legitimacy</h3>
              <p>If you feel you’ve experienced any of these scenarios, report it immediately:</p>
              <div className={styles.contactRow}>
                <a href="mailto:Hr@completestaffingsolutions.com">Hr@completestaffingsolutions.com</a>
                <span className={styles.divider}>|</span>
                <a href="tel:4014758800">401-475-8800</a>
              </div>
            </div>
          </div>

          {/* Right: What we don't do (Red List) */}
          <div className={styles.listSide}>
            <div className={styles.listCard}>
              <h2 className={styles.listTitle}>CSS Will <span className={styles.never}>Never</span>:</h2>
              <ul className={styles.list}>
                {FORBIDDEN_LIST.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.cross}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}