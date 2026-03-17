"use client";

import Image from "next/image";
import styles from "./Openposition.module.css";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
/////font
////////font

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-jakarta",
});
//////

// Type for a featured job
interface FeaturedJob {
  id: number;
  title: string;
  location: string;
  type: string;
  image: string;
}

// Featured jobs data
const featuredJobs: FeaturedJob[] = [
  {
    id: 1,
    title: "Accounts Payable Specialist",
    location: "Boston, MA",
    type: "Accounting",
    image: "/open%20position/job1.jpg",
  },
  {
    id: 2,
    title: "Accounts Payable Specialist",
    location: "Boston, MA",
    type: "Accounting",
    image: "/open%20position/job2.jpg",
  },
  {
    id: 3,
    title: "Accounts Payable Specialist",
    location: "Boston, MA",
    type: "Accounting",
    image: "/open%20position/job3.jpg",
  },
];

export default function FeaturedJobs() {
  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>FEATURED JOBS</h2>

        <div className={styles.featuredGrid}>
          {featuredJobs.map((job) => (
            <div key={job.id} className={styles.featuredCard}>
              {/* Image */}
              <div className={styles.featuredImage}>
                <Image
                  src='/open%20position/card.jpg'
                  alt={job.title}
                  fill
                  className={styles.image}
                  unoptimized
                />
              </div>

              {/* Card Content */}
              <div className={styles.featuredContent}>
                <h3 className={styles.featuredTitle}>{job.title}</h3>
                <div className={styles.featuredInfo}><p className={styles.featuredLocation}>{job.location}</p>
                <p className={styles.featuredType}>{job.type}</p></div>
                

                <button className={styles.featuredButton}>Explore Jobs</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
