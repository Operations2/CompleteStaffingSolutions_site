"use client";

import styles from "./ChallengeSection.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700"], variable: "--font-jakarta" });

// Industry specific icons (SVG format for professional look)
const Icons = {
  Demands: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19478e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
  ),
  Skills: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ca642" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
  ),
  Safety: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19478e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
  )
};

interface Props {
  industryName?: string;
}

export default function IndustryChallengeSection({ industryName = "Industry" }: Props) {
  const CHALLENGES = [
    {
      icon: <Icons.Demands />,
      title: "Seasonal Labor Demands",
      description: "Addressing the fluctuations in labor needs during peak seasons with flexible and reliable staffing solutions."
    },
    {
      icon: <Icons.Skills />,
      title: "Specialized Skills Required",
      description: "Connecting you with candidates who possess the niche technical expertise and certifications your industry demands."
    },
    {
      icon: <Icons.Safety />,
      title: "Safety & Compliance",
      description: "Ensuring all placements meet strict regulatory standards and workplace safety protocols for peace of mind."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Title matches the image style exactly */}
        <h2 className={styles.title}>
          Addressing {industryName} Staffing <span className={styles.highlight}>Challenges</span>
        </h2>

        <div className={styles.challengesGrid}>
          {CHALLENGES.map((challenge, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {challenge.icon}
                </div>
                <h3 className={styles.cardTitle}>{challenge.title}</h3>
              </div>
              <p className={styles.cardDescription}>{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}