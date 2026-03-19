"use client";

import React, { useEffect, useRef, useState } from "react";

const PROCESS_CARDS = [
  {
    letter: "I",
    title: "Identify",
    subtitle2: "Talent",
    subtitle: "Find the right talent through data-driven sourcing",
    description:
      "We use targeted strategies and market insights to identify and attract qualified candidates who match your requirements and company culture.",
    image: "/our-recruiting-process/identify-talent.webp",
  },
  {
    letter: "S",
    title: "Shortlist",
    subtitle2: "Top Candidates",
    subtitle: "Rigorous screening to deliver the best fits",
    description:
      "Our recruiters screen, evaluate, and shortlist only the most suitable candidates so you spend time on interviews that matter.",
    image: "/our-recruiting-process/top-candidates.webp",
  },
  {
    letter: "O",
    title: "Onsite",
    subtitle2: "Support",
    subtitle: "Hands-on coordination for interviews and assessments",
    description:
      "We coordinate interviews, assessments, and onsite logistics to ensure a smooth process for both your team and the candidates.",
    image: "/our-recruiting-process/onsite.webp",
  },
  {
    letter: "R",
    title: "Referrals",
    subtitle2: "Network",
    subtitle: "Leverage proven talent from our extended network",
    description:
      "We tap into referrals and our professional network to surface high-quality candidates who come pre-vetted and often faster to hire.",
    image: "/our-recruiting-process/referal.webp",
  },
  {
    letter: "T",
    title: "Team",
    subtitle2: "Approach",
    subtitle: "Collaborative partnership from start to placement",
    description:
      "We work as an extension of your team, aligning on goals and timelines to deliver a seamless hiring experience and successful placement.",
    image: "/our-recruiting-process/team.webp",
  },
];

const ProcessSteps: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#F7F9FC] pb-10 sm:pt-0 ${isVisible ? "active" : ""}`}
    >
      <div
        className="mx-auto text-center px-4 sm:px-6 reveal revealUp"
        style={{
          maxWidth: "1200px",
          marginTop: "40px",
          marginBottom: "24px",
        }}
        data-visible={isVisible}
      >
        <h2
          className="font-[var(--font-plus-jakarta)] font-bold text-[28px] sm:text-[34px]"
          style={{ fontWeight: 700, color: "#2D3E50" }}
        >
          How Our Process Works
        </h2>
        <p className="text-base sm:text-lg mt-2" style={{ color: "#6B7C93" }}>
          A Clear, Proven Approach to Hiring
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6">
        {PROCESS_CARDS.map((card, index) => (
          <div
            key={card.letter}
            className={`reveal revealUp rounded-xl bg-white font-[var(--font-plus-jakarta)] flex flex-col py-5 sm:py-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:border-[#BFD0EA]/60 ${
              isVisible ? "active" : ""
            }`}
            style={{
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              border: "1px solid #EEF2F7",
              minHeight: "clamp(300px, 50vw, 340px)",
              transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
            }}
          >
            <div className="">
              {/* Connector line: only on lg when 5 columns */}
              <div className="flex md:flex-col justify-around items-center">
                <div className="relative">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-[#4DAED8] to-[#2F60AA] z-10 hidden lg:block transition-opacity duration-500 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: isVisible
                        ? `${index * 80 + 250}ms`
                        : "0ms",
                    }}
                  />
                  <div
                    className="flex items-center justify-center rounded-full text-white font-bold mx-auto relative z-10 transition-transform duration-300 hover:scale-105 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                    style={{
                      marginBottom: "12px",
                      background: "linear-gradient(135deg, #4DAED8, #2F60AA)",
                      fontSize: "clamp(24px, 6vw, 32px)",
                      fontWeight: 700,
                      boxShadow: "0 4px 14px rgba(45, 127, 193, 0.35)",
                    }}
                  >
                    {card.letter}
                  </div>
                </div>

                {card.image && (
                  <div className="px-3 sm:px-6 mb-3 sm:mb-4">
                    <div className="overflow-hidden rounded-lg shadow-sm">
                      <img
                        src={card.image}
                        alt={`${card.title} step`}
                        className="h-32 sm:h-32 w-52 lg:w-full object-cover transform transition-transform duration-500 ease-out hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="px-3 sm:px-6 flex-1 flex flex-col">
              <h3
                className="font-semibold text-center text-lg sm:text-xl"
                style={{
                  fontWeight: 600,
                  color: "#2F3B4C",
                }}
              >
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 text-center mt-0.5">
                {card.subtitle2}
              </p>
              <p
                className="font-medium mt-2 sm:mt-3 text-center text-sm sm:text-[15px]"
                style={{
                  fontWeight: 500,
                  color: "#3F4C5C",
                }}
              >
                {card.subtitle}
              </p>
              <p
                className="mt-2 sm:mt-2.5 font-normal leading-relaxed text-[13px] sm:text-[14px]"
                style={{
                  lineHeight: 1.6,
                  color: "#6C7A8A",
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
