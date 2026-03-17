"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CardData {
  title: string;
  text: string;
  icon: string;
}

interface FlexibleSectionProps {
  title?: string;
  image?: string;
  cards?: CardData[];
  backgroundColor?: string;
}

const defaultCards: CardData[] = [
  {
    title: "Direct/Permanent Placement",
    text: "Gain access to our extensive network of candidates for permanent full or part-time openings.",
    icon: "/why%20choose%20us/svg1.png",
  },
  {
    title: "Temporary Placement",
    text: "Hire skilled professionals on an interim basis to support your team when you need it most.",
    icon: "/why%20choose%20us/svg2.png",
  },
  {
    title: "Temporary to Hire",
    text: "Evaluate a candidate’s fit before making a full-time commitment.",
    icon: "/why%20choose%20us/svg3.png",
  },
];

export default function FlexibleSection({
  title = "FLEXIBLE SOLUTIONS",
  image = "/why%20choose%20us/flexiblesolutions.jpg",
  cards = defaultCards,
  backgroundColor = "#0f3b7a",
}: FlexibleSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const iconBg = ["#0f3b7a", "#6ca642", "#0b2f63"];

  return (
    <section ref={sectionRef} className="w-full bg-[#FAFAFC]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-[60px] pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16">
        <div
          className={`opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <h2 className="font-(family-name:--font-plus-jakarta) font-extrabold text-neutral-900 text-[26px] sm:text-[30px] lg:text-[36px] tracking-tight">
            {title}
          </h2>
          <div className="mt-3 h-[3px] w-[46px] rounded-full bg-[#6ca642]" />
        </div>

        <div
          className={`mt-8 rounded-[28px] overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <div className="relative min-h-[320px] lg:min-h-[380px]">
            {/* Photo as full background (desktop-style) */}
            <div className="absolute inset-0 z-0">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 100vw, 1280px"
              />
            </div>

            {/* Cards on top, shifted further right and slightly smaller */}
            <div className="relative z-10 flex justify-end px-5 py-6 sm:px-6 lg:pl-10 lg:pr-20 lg:py-8">
              <div className="w-full max-w-[360px] lg:max-w-[320px] flex flex-col gap-3">
                {cards.map((card, i) => (
                  <div
                    key={card.title}
                    className={`rounded-xl bg-white px-4 sm:px-5 py-3.5 sm:py-4 flex gap-3 items-start opacity-0 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm ${
                      isVisible ? "opacity-100 translate-y-0" : ""
                    }`}
                    style={{ transitionDelay: `${320 + i * 120}ms` }}
                  >
                    <div
                      className="h-9 w-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: iconBg[i] ?? backgroundColor }}
                    >
                      <Image
                        src={card.icon}
                        alt=""
                        width={18}
                        height={18}
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-(family-name:--font-plus-jakarta) font-bold text-[15px] sm:text-[16px] text-neutral-900 leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-0.5 font-(family-name:--font-inter) text-[13px] sm:text-[14px] leading-[1.55] text-neutral-700">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}