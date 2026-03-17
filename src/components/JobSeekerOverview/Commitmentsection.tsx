"use client";
import React, { useState } from 'react';
import styles from './Commitmentsection.module.css';
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-jakarta",
});

const CommitmentSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  const paragraphs = [
`For over 25 years, Complete Staffing Solutions has partnered with organizations to deliver specialized staffing solutions in finance, accounting, healthcare, and administrative fields. Our experience spans multiple industries, enabling us to align top-tier professionals with companies ranging from emerging businesses to established enterprises.
`    
    
    ,
` We maintain dedicated teams for permanent placement and temporary staffing, ensuring focused expertise in both strategic hiring and flexible workforce solutions. Our recruiters combine industry knowledge, rigorous screening processes, and an in-depth understanding of client culture to facilitate placements that are both technically sound and organizationally aligned.
`
,
`Through a balance of precision, responsiveness, and genuine partnership, we help our clients build teams that perform today and adapt for tomorrow.
`  
  
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ✅ New Heading */}
        <h2 className={styles.poweredByTitle}>JobBoard Powered By</h2>

        {/* ✅ Center Logo */}
        <div className={styles.poweredByLogoWrapper}>
          <Image
            src="/open position/top-one-hire.jpg"   
            alt="JobBoard Logo"
            width={180}
            height={80}
            className={styles.poweredByLogo}
          />
        </div>

        {/* 🔽 Neeche tumhara existing content bilkul same */}
        <div className={styles.content}>
          <h1 className={styles.title} onClick={toggleOpen}>
            OUR COMMITMENT TO YOU
          </h1>
          <h2 className={styles.subtitle} onClick={toggleOpen}>
            WE GO THE EXTRA MILE TO CONNECT YOU WITH THE PERFECT JOB.
          </h2>

          <div className={styles.text}>
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className={`${styles.paragraph} ${isOpen ? styles.open : ''}`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommitmentSection;
