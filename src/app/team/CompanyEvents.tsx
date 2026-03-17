import Image from "next/image";
import styles from "./CompanyEvents.module.css";

const IMAGE_BASE = "/team";

const imageFiles = [
  "company event (1).jpg",
  "company event (2).jpg",
  "company event (3).jpg",
  "company event (4).jpg",
  "company event (5).jpg",
];

const images = {
  leftTop: { src: `${IMAGE_BASE}/${encodeURIComponent(imageFiles[0])}`, alt: "Company event" },
  leftBottom: { src: `${IMAGE_BASE}/${encodeURIComponent(imageFiles[1])}`, alt: "Company event" },
  center: { src: `${IMAGE_BASE}/${encodeURIComponent(imageFiles[2])}`, alt: "Complete Staffing Annual BBQ" },
  rightTop: { src: `${IMAGE_BASE}/${encodeURIComponent(imageFiles[3])}`, alt: "Company event" },
  rightBottom: { src: `${IMAGE_BASE}/${encodeURIComponent(imageFiles[4])}`, alt: "Company event" },
};

export default function CompanyEvents() {
  return (
    <section className={styles.section} aria-labelledby="company-events-title">
      <div className={styles.header}>
        <h2 id="company-events-title" className={styles.title}>
          Company Events
        </h2>
        <p className={styles.subtitle}>
          Complete Staffing&apos;s Annual BBQ – July 2022
        </p>
      </div>
      <div className={styles.gallery}>
        <div className={styles.column}>
          <Image
            src={images.leftTop.src}
            alt={images.leftTop.alt}
            width={352}
            height={234}
            className={styles.imageSmall}
            sizes="(max-width: 992px) 280px, (max-width: 768px) 100vw, 352px"
          />
          <Image
            src={images.leftBottom.src}
            alt={images.leftBottom.alt}
            width={352}
            height={234}
            className={styles.imageSmall}
            sizes="(max-width: 992px) 280px, (max-width: 768px) 100vw, 352px"
          />
        </div>
        <div className={styles.centerWrapper}>
          <Image
            src={images.center.src}
            alt={images.center.alt}
            width={528}
            height={500}
            className={styles.imageLarge}
            sizes="(max-width: 992px) 420px, (max-width: 768px) 100vw, 528px"
          />
        </div>
        <div className={styles.column}>
          <Image
            src={images.rightTop.src}
            alt={images.rightTop.alt}
            width={352}
            height={234}
            className={styles.imageSmall}
            sizes="(max-width: 992px) 280px, (max-width: 768px) 100vw, 352px"
          />
          <Image
            src={images.rightBottom.src}
            alt={images.rightBottom.alt}
            width={352}
            height={234}
            className={styles.imageSmall}
            sizes="(max-width: 992px) 280px, (max-width: 768px) 100vw, 352px"
          />
        </div>
      </div>
    </section>
  );
}
