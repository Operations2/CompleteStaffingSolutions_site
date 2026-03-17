"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets/assets";

const RecruitingProcessCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex items-center justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[360px] bg-[#F7F9FC]"
      style={{ marginTop: "40px" }}
    >
      {/* Background image + overlay: fade in from main content background */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Image
          src={assets.process_bottom}
          alt="Office team"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(32,70,130,0.55), rgba(32,70,130,0.6))",
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
          }}
        />
      </div>

      {/* Content: headline + button — fade in after background */}
      <div
        className="relative z-10 text-center px-4 sm:px-6 py-12 sm:py-16 transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(16px)",
          transitionDelay: isVisible ? "300ms" : "0ms",
        }}
      >
        <h2 className="font-[var(--font-plus-jakarta)] font-bold text-white text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 max-w-xl mx-auto">
          Ready to Find the Right Talent?
        </h2>
        <p className="text-white/90 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
          Start your hiring process with us today—fast, transparent, and focused on the right fit.
        </p>
        <Link
          href="/job-request"
          className="inline-flex items-center justify-center font-[var(--font-inter)] font-semibold text-white no-underline rounded-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent min-h-[48px] px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg shadow-lg"
          style={{
            background: "linear-gradient(90deg, #4CAF50, #7CB342)",
            boxShadow: "0 4px 14px rgba(76, 175, 80, 0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(76, 175, 80, 0.4)";
          }}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default RecruitingProcessCTA;
