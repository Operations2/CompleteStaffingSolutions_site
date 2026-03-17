import Image from "next/image";
import styles from "./Welcomesection.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700"], variable: "--font-jakarta" });

export default function Welcomesection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Welcome to Industry Staffing</h2>
          <p className={styles.description}>
            We provide complete staffing solutions tailored to meet the diverse hiring needs across multiple industries. Our expert recruitment services help you find reliable, skilled, and job-ready professionals to support your business growth and operational success.          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>Experienced and industry-ready professionals 
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>Flexible and scalable staffing solutions 
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.checkIcon}>✓</div>
              <span>Strong commitment to quality, safety, and efficiency </span>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/industries/welcome image.png"
            alt=" workers"
            fill
            className={styles.image}
            // sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}