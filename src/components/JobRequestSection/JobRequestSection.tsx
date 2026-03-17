"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function JobRequestSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full flex items-center overflow-hidden min-h-[280px] py-8 px-5 md:min-h-[320px] md:py-10 md:px-6 lg:px-12 lg:h-[350px] lg:min-h-[350px] lg:py-0 2xl:min-h-[390px] bg-cover bg-center bg-no-repeat ${isVisible ? "active" : ""}`}
      style={{ backgroundImage: "url('/footer-bg.webp')", backgroundPosition: "83%" }}
    >
      <div
        className="md:hidden absolute inset-0 bg-[#19488e7a] opacity-45 pointer-events-none"
        aria-hidden
      />
      <div
        className={`relative z-10 flex flex-col px-6 opacity-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <h2 className="font-extralight! text-[clamp(22px,4vw,42px)] leading-snug text-white m-0">
          Connecting businesses with the
        </h2>
        <h2 className="font-bold text-[clamp(22px,4vw,42px)] leading-snug text-white m-0">best talent is our passion.</h2>
        <Link
          href="/job-request"
          className="mt-6 inline-flex items-center justify-center h-[50px] px-7 rounded bg-[#6AB63B] text-lg font-semibold font-[var(--font-inter)] text-white no-underline transition-opacity hover:opacity-90 w-full max-w-[280px] rounded-lg"
        >
          Place a Job Request
        </Link>
      </div>
    </section>
  );
}
