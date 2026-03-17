"use client";

import React, { useEffect, useRef, useState } from "react";

export type SolutionTabId = "retained" | "executive" | "contract" | "direct";

const TABS: { id: SolutionTabId; label: string; icon: "at" | "briefcase" | "handshake" | "search" }[] = [
  { id: "retained", label: "Retained Search", icon: "at" },
  { id: "executive", label: "Executive Search", icon: "briefcase" },
  { id: "contract", label: "Contract Search", icon: "handshake" },
  { id: "direct", label: "Direct-Hire Search", icon: "search" },
];

const IconAt = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
  </svg>
);
const IconBriefcase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
  </svg>
);
const IconHandshake = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M11.562 2.05a1 1 0 0 1 .876 0l.094.047 2.81 1.496 2.81-1.496a1 1 0 0 1 .97-.047l.105.047 4.5 2.25a1 1 0 0 1 .553.894V20a1 1 0 0 1-1 1h-2v-8H4v8H2a1 1 0 0 1-1-1V5.241a1 1 0 0 1 .553-.894l4.5-2.25.094-.047zm-.97 2.446L4.5 6.653v11.694h2v-6h11v6h2V6.653l-6.062-3.157-1.53.814-1.53-.814z" />
  </svg>
);
const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

function TabIcon({ icon }: { icon: string }) {
  if (icon === "at") return <IconAt />;
  if (icon === "briefcase") return <IconBriefcase />;
  if (icon === "handshake") return <IconHandshake />;
  return <IconSearch />;
}

interface OurSolutionsWelcomeProps {
  activeTab?: SolutionTabId;
  onTabChange?: (id: SolutionTabId) => void;
}

export default function OurSolutionsWelcome({ activeTab = "retained", onTabChange }: OurSolutionsWelcomeProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full relative overflow-hidden bg-[#f5f6f8] py-12 sm:py-16 md:py-20 ${isVisible ? "active" : ""}`}
    >
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1100px] mx-auto text-center">
          <h2
            className={`font-[var(--font-plus-jakarta)] font-bold text-[#1f2933] m-0 mb-4 text-[clamp(26px,3.5vw,36px)] leading-tight reveal revealUp ${isVisible ? "active" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Explore Our Recruitment Solutions
          </h2>
          <p
            className={`text-[#4b5563] text-base sm:text-lg max-w-[640px] mx-auto m-0 mb-10 sm:mb-12 leading-relaxed reveal revealUp ${isVisible ? "active" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            We offer a variety of staffing solutions to fit your hiring needs. Select the option that best aligns with your business goals.
          </p>
          <div
            className={`flex flex-wrap justify-center gap-2 sm:gap-3 reveal revealUp ${isVisible ? "active" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange?.(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3 rounded-lg font-medium text-sm sm:text-base
                    transition-all duration-300 ease-out
                    ${isActive
                      ? "bg-[#19478e] text-white shadow-md hover:bg-[#153a6e] hover:shadow-lg"
                      : "bg-white text-[#374151] border border-[#e5e7eb] hover:border-[#d1d5db] hover:bg-[#f9fafb] hover:shadow-sm"
                    }
                  `}
                >
                  <span className={isActive ? "text-white" : "text-[#6b7280]"}>
                    <TabIcon icon={tab.icon} />
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
