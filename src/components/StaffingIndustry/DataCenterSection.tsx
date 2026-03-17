"use client";
import styles from "./DataCenterSection.module.css";
import Image from "next/image";

export default function DataCenterSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>Advanced Infrastructure</div>
          <h2 className={styles.title}>Data Center <span className={styles.green}>Staffing</span></h2>
          <p className={styles.text}>
            We provide mission-critical talent for the world’s most demanding data environments. From facility managers to cloud infrastructure engineers, we ensure your data centers are powered by professionals who understand uptime, security, and scalability.
          </p>
          <ul className={styles.list}>
            <li>Critical Facilities Operations</li>
            <li>Network & Security Engineers</li>
            <li>Cloud Architects & Technicians</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
           <Image src="/industries/data-center.png" alt="Data Center" fill className={styles.img} unoptimized />
        </div>
      </div>
    </section>
  );
}