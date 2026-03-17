import Image from "next/image";
import styles from "./BBQJuly2021.module.css";

const IMAGE_BASE = "/team";

const imageFiles = [
  "3rd section  (1).jpg",
  "3rd section  (2).jpg",
  "3rd section  (3).jpg",
  "3rd section  (4).jpg",
  "3rd section  (5).jpg",
  "3rd section  (6).jpg",
  "3rd section  (7).jpg",
  "3rd section  (8).jpg",
];

export default function BBQJuly2021() {
  return (
    <section className={styles.section} aria-labelledby="bbq-2021-title">
      <h2 id="bbq-2021-title" className={styles.title}>
        Complete Staffing&apos;s Annual BBQ – July 2021
      </h2>
      <div className={styles.gallery}>
        {/* Row 1: 2 small, 1 large */}
        <div className={styles.row1}>
          <Image
            src={`${IMAGE_BASE}/${encodeURIComponent(imageFiles[0])}`}
            alt="BBQ July 2021"
            width={302}
            height={352}
            className={`${styles.image} ${styles.imgSmall}`}
            sizes="(max-width: 768px) 50vw, 302px"
          />
          <Image
            src={`${IMAGE_BASE}/${encodeURIComponent(imageFiles[1])}`}
            alt="BBQ July 2021"
            width={302}
            height={352}
            className={`${styles.image} ${styles.imgSmall}`}
            sizes="(max-width: 768px) 50vw, 302px"
          />
          <Image
            src={`${IMAGE_BASE}/${encodeURIComponent(imageFiles[2])}`}
            alt="BBQ July 2021"
            width={628}
            height={352}
            className={`${styles.image} ${styles.imgLarge}`}
            sizes="(max-width: 768px) 100vw, 628px"
          />
        </div>
        {/* Row 2: 1 large, 2 small */}
        <div className={styles.row2}>
          <Image
            src={`${IMAGE_BASE}/${encodeURIComponent(imageFiles[3])}`}
            alt="BBQ July 2021"
            width={634}
            height={354}
            className={`${styles.image} ${styles.imgLarge}`}
            sizes="(max-width: 768px) 100vw, 634px"
          />
          <Image
            src={`${IMAGE_BASE}/${encodeURIComponent(imageFiles[4])}`}
            alt="BBQ July 2021"
            width={299}
            height={354}
            className={`${styles.image} ${styles.imgSmall}`}
            sizes="(max-width: 768px) 100vw, 299px"
          />
          <Image
            src={`${IMAGE_BASE}/${encodeURIComponent(imageFiles[5])}`}
            alt="BBQ July 2021"
            width={299}
            height={354}
            className={`${styles.image} ${styles.imgSmall}`}
            sizes="(max-width: 768px) 100vw, 299px"
          />
        </div>
        {/* Row 3: 2 large */}
        <div className={styles.row3}>
          <Image
            src={`${IMAGE_BASE}/${encodeURIComponent(imageFiles[6])}`}
            alt="BBQ July 2021"
            width={634}
            height={352}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 634px"
          />
          <Image
            src={`${IMAGE_BASE}/${encodeURIComponent(imageFiles[7])}`}
            alt="BBQ July 2021"
            width={628}
            height={352}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 628px"
          />
        </div>
      </div>
    </section>
  );
}
