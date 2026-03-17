import Image from "next/image";
import styles from "./CompleteStaffingsAnnualBBQJuly2023.module.css";

const IMAGE_BASE = "/team";

const images = {
  full: { src: `${IMAGE_BASE}/rectangle%202.jpg`, alt: "Complete Staffing annual BBQ 2023" },
  leftMid: { src: `${IMAGE_BASE}/rectangle%204.jpg`, alt: "BBQ event" },
  rightTall: { src: `${IMAGE_BASE}/rectangle%206.jpg`, alt: "Team at BBQ" },
  leftBot: { src: `${IMAGE_BASE}/rectangle%207.jpg`, alt: "BBQ gathering" },
  rightBot: { src: `${IMAGE_BASE}/rectangle%208.jpg`, alt: "Annual BBQ July 2023" },
};

export default function CompleteStaffingsAnnualBBQJuly2023() {
  return (
    <section
      className={styles.section}
      aria-labelledby="team-bbq-title"
    >
      <h2 id="team-bbq-title" className={styles.title}>
        Complete Staffing&apos;s Annual BBQ – July 2023
      </h2>
      <div className={styles.gallery}>
        <Image
          src={images.full.src}
          alt={images.full.alt}
          width={1292}
          height={352}
          className={styles.imageFull}
          sizes="(max-width: 768px) 100vw, 1292px"
        />
        <Image
          src={images.leftMid.src}
          alt={images.leftMid.alt}
          width={749}
          height={402}
          className={styles.imageLeftMid}
          sizes="(max-width: 768px) 100vw, 749px"
        />
        <Image
          src={images.rightTall.src}
          alt={images.rightTall.alt}
          width={513}
          height={759}
          className={styles.imageRightTall}
          sizes="(max-width: 768px) 100vw, 513px"
        />
        <div className={styles.bottomRow}>
          <Image
            src={images.leftBot.src}
            alt={images.leftBot.alt}
            width={360}
            height={327}
            className={styles.imageLeftBot}
            sizes="(max-width: 480px) 100vw, 360px"
          />
          <Image
            src={images.rightBot.src}
            alt={images.rightBot.alt}
            width={359}
            height={327}
            className={styles.imageRightBot}
            sizes="(max-width: 480px) 100vw, 359px"
          />
        </div>
      </div>
    </section>
  );
}
