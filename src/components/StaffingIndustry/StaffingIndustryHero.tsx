import Link from "next/link";
import styles from "./StaffingIndustryHero.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700"], variable: "--font-jakarta" });

export default function StaaffingIndustryHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
Staffing by Industry. Specialists by Discipline.        </h1>
        <p className={styles.subtitle}>
Our recruiters specialize in the fields they hire for—so you get qualified candidates faster and with better fit.        </p>
        <Link href="/job-request" className={styles.ctaButton}>
          Place Job Request
        </Link>
      </div>
    </section>
  );
}