"use client";

import React from "react";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Team collaboration and recruiting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19478e]/90 via-[#19478e]/75 to-[#19478e]/50" />
      </div>
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 text-center">
        <h1 className="font-[var(--font-plus-jakarta)] font-bold text-white text-[clamp(28px,5vw,44px)] uppercase tracking-wide mb-4 drop-shadow-sm">
          Our Recruiting Process
        </h1>
        <p className="font-[var(--font-plus-jakarta)] font-semibold text-white/95 text-[clamp(18px,2.5vw,26px)] mb-6">
          Finding the Right Talent. The Right Way.
        </p>
        <p className="font-[var(--font-inter)] text-white/90 text-[15px] sm:text-base md:text-[17px] leading-relaxed max-w-[720px] mx-auto">
          At Complete Staffing Solutions, our recruiting process is built to be fast, transparent, and human-focused. We don&apos;t just fill positions — we connect the right people with the right opportunities through a proven, step-by-step approach.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
