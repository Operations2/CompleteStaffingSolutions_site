import Link from "next/link";
import styles from "./IndustriesHero.module.css";

export default function IndustriesHero() {
  return (
    <section className={styles.hero} aria-labelledby="industries-hero-title">
      <div className={styles.heroBg} aria-hidden />
      <div className={styles.heroOverlay} aria-hidden />
      <div className={styles.heroContent}>
        <h1 id="industries-hero-title" className={styles.title}>
          Staffing by <span className="text-[var(--accent)]">Industry</span>. Specialists by <span className="text-[var(--accent)]">Discipline</span>.
        </h1>
        <p className={styles.description}>
          Our recruiters specialize in the fields they hire for—so you get
          qualified candidates faster and with better fit.
        </p>
        <div className={styles.buttonsRow}>
          <Link
            href="/job-request"
            className={`${styles.ctaButton} ${styles.ctaPlaceJob}`}
          >
            Place Job Request
          </Link>
          <Link
            href="/contact"
            className={`${styles.ctaButton} ${styles.ctaTalkRecruiter}`}
          >
            Talk To Recruiter
          </Link>
        </div>
      </div>
    </section>
  );
}
