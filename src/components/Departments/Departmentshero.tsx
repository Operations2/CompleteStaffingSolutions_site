"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function DepartmentsHero() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    const el = revealRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={revealRef}
      className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center text-center overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-[100px]"
      style={{
        backgroundImage: 'url("/departments/hero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(10, 25, 80, 0.196)",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(10, 25, 80, 0.6)" }}
      />
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 50%)",
        }}
      />
      {/* Content */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto flex flex-col items-center">
        <h1 className="reveal revealUp font-[var(--font-plus-jakarta)] font-bold text-white m-0 mb-5 text-[clamp(22px,4vw,36px)] tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          POSITIONS WE RECRUIT ACROSS INDUSTRIES
        </h1>
        <p className="reveal revealUp delay-1 text-white/95 m-0 mb-9 text-[clamp(14px,1.6vw,18px)] leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
          From entry-level to executive roles — connect with top talent to fill
          your goals fast and efficiently.
        </p>
        <div className="reveal revealUp delay-2 flex flex-wrap justify-center items-center gap-4 md:flex-row flex-col w-full md:w-auto">
          <Link
            href="/job-request"
            className="inline-flex items-center justify-center px-6 py-3 text-[19px] font-semibold rounded bg-white text-[#1e3a8a] no-underline transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg w-full md:w-auto max-w-[300px] md:max-w-none"
          >
            Place Job Request
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-[19px] font-semibold rounded bg-[#6ca642] text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full md:w-auto max-w-[300px] md:max-w-none"
          >
            Talk To Recruiter
          </Link>
        </div>
      </div>
    </section>
  );
}
