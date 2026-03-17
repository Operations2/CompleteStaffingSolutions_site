"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80";

const CHECK_ICON = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const stats = [
  "25+ Years of Expertise",
  "95% Client Satisfaction Rate",
  "Over 35,000 Companies Served",
  "200,000+ Placements",
];

export default function OurSolutionsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-[280px] xs:min-h-[320px] sm:min-h-[360px] md:min-h-[400px] flex items-center overflow-hidden ${isVisible ? "active" : ""}`}
    >
      <div className="absolute inset-0 z-[1]">
        <Image
          src={HERO_IMAGE}
          alt="Our Solutions - Recruitment"
          fill
          className="object-cover blur-[1px] scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#19478e]/80" />
      </div>
      <div className="relative z-10 w-full flex items-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 2xl:px-16">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col">
          <h1
            className={`font-[var(--font-plus-jakarta)] font-bold text-white m-0 mb-4 text-[clamp(32px,4.4vw,50px)] leading-tight max-w-[600px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] reveal revealUp ${isVisible ? "active" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Our Solutions
          </h1>
          <p
            className={`text-white text-[clamp(16px,2vw,20px)] leading-relaxed m-0 mb-8 max-w-[550px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] reveal revealUp ${isVisible ? "active" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            Flexible Hiring Solutions{" "}
            <span className="text-[#aadd22] font-medium italic">
              Tailored to Your Needs
            </span>
          </p>
          <ul className="list-none p-0 m-0 flex flex-wrap gap-x-8 gap-y-3">
            {stats.map((stat, i) => (
              <li
                key={stat}
                className={`flex items-center gap-2 text-white font-[var(--font-inter)] text-[14px] sm:text-base reveal revealUp transition-transform duration-300 hover:translate-x-0.5 ${isVisible ? "active" : ""}`}
                style={{ transitionDelay: `${0.3 + i * 0.08}s` }}
              >
                <span className="text-[#6ca642] shrink-0">{CHECK_ICON}</span>
                {stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
