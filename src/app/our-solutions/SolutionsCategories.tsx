"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SolutionTabId } from "./OurSolutionsWelcome";

const CHECK_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CARDS: {
  id: SolutionTabId;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  icon: "at" | "briefcase" | "handshake" | "search";
  href: string;
}[] = [
  {
    id: "executive",
    title: "Executive Search",
    description: "We partner with organizations to identify and secure C-suite and senior executives who are culturally aligned and results-driven.",
    bullets: [
      "C-suite and senior leadership placement",
      "Global talent network reach",
      "Agile, consultative approach",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    icon: "briefcase",
    href: "/our-solutions/executive",
  },
  {
    id: "direct",
    title: "Direct-Hire Search",
    description: "Our direct-hire search services help organizations secure full-time professionals who bring both technical expertise and cultural alignment.",
    bullets: [
      "Comprehensive candidate evaluation",
      "Streamlined recruitment lifecycle",
      "Long-term organizational fit",
    ],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
    icon: "search",
    href: "/our-solutions/direct",
  },
  {
    id: "contract",
    title: "Contract Search",
    description: "We help organizations quickly access highly skilled professionals for project-based work, interim leadership, and specialized skill requirements.",
    bullets: [
      "Rapid talent deployment",
      "Short-term and long-term assignments",
      "Specialized expertise on demand",
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    icon: "handshake",
    href: "/our-solutions/contract",
  },
  {
    id: "retained",
    title: "Retained Search",
    description: "Our retained search model is designed for critical leadership and highly specialized roles that require a dedicated, strategic recruitment approach.",
    bullets: [
      "Dedicated resources for pivotal positions",
      "Confidential, methodical search process",
      "Market intelligence and talent benchmarking",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    icon: "at",
    href: "/our-solutions/retained",
  },
];

function CardIcon({ icon }: { icon: string }) {
  const cls = "w-9 h-9 flex items-center justify-center rounded-full bg-[#19478e] text-white shrink-0";
  if (icon === "at")
    return (
      <span className={cls}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
      </span>
    );
  if (icon === "briefcase")
    return (
      <span className={cls}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>
      </span>
    );
  if (icon === "handshake")
    return (
      <span className={cls}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.562 2.05a1 1 0 0 1 .876 0l.094.047 2.81 1.496 2.81-1.496a1 1 0 0 1 .97-.047l.105.047 4.5 2.25a1 1 0 0 1 .553.894V20a1 1 0 0 1-1 1h-2v-8H4v8H2a1 1 0 0 1-1-1V5.241a1 1 0 0 1 .553-.894l4.5-2.25.094-.047zm-.97 2.446L4.5 6.653v11.694h2v-6h11v6h2V6.653l-6.062-3.157-1.53.814-1.53-.814z" /></svg>
      </span>
    );
  return (
    <span className={cls}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
    </span>
  );
}

interface SolutionsCategoriesProps {
  activeTab?: SolutionTabId;
  onTabChange?: (id: SolutionTabId) => void;
}

export default function SolutionsCategories({ activeTab, onTabChange }: SolutionsCategoriesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f5f6f8] py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {CARDS.map((card, index) => (
            <article
              key={card.id}
              id={card.id}
              className={`group rounded-xl transition-all duration-300 reveal revealUp ${isVisible ? "active" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            > 
              <div className="relative w-full aspect-4/3">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform rounded-xl duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative px-5 sm:px-6 py-5 sm:py-6 -mt-6 mx-3 sm:mx-4 rounded-t-xl bg-white shadow-gray-300 border border-neutral-200/60  flex flex-col justify-between">
                <div className="absolute -top-5 left-5 sm:left-6">
                  <CardIcon icon={card.icon} />
                </div>
                <h3 className="font-[var(--font-plus-jakarta)] font-bold text-[#1f2933] text-lg sm:text-xl mt-2 mb-3">
                  {card.title}
                </h3>
                <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-4">
                  {card.description}
                </p>
                <ul className="list-none p-0 m-0 space-y-2 mb-5">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[#374151] text-sm sm:text-base">
                      <span className="text-[#6ca642] mt-0.5">{CHECK_ICON}</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 bg-[#6ca642] text-white text-sm font-medium rounded-lg no-underline transition-all duration-300 hover:bg-[#5d9338] hover:shadow-md"
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
