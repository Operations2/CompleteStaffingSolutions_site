"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-[60px] py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div
            className={`opacity-0 -translate-x-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : ""
            }`}
          >
            <h1 className="font-(family-name:--font-plus-jakarta) font-extrabold leading-[1.05] text-neutral-900 text-[28px] sm:text-[34px] lg:text-[44px] tracking-tight">
              WHY USE{" "}
              <span className="text-[#1c5aa8]">COMPLETE</span>
              <br className="hidden sm:block" />
              STAFFING SOLUTIONS?
            </h1>
            <div className="mt-4 h-[3px] w-[46px] rounded-full bg-[#6ca642]" />
            <p className="mt-6 font-(family-name:--font-inter) text-[15px] sm:text-[16px] leading-[1.75] text-neutral-700 max-w-[560px]">
              For over 25 years, Complete Staffing Solutions has done one thing
              exceptionally well: put the right people in the right roles.
              Whether you need one critical hire or an entire team, our
              recruiters work across every industry and discipline — with the
              speed, precision, and personal attention that national firms
              simply can&apos;t match.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 max-w-[520px]">
              <div className="flex flex-col items-center text-center">
                <div className="h-10 w-10 flex items-center justify-center">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#1c5aa8]"
                    aria-hidden
                  >
                    <path
                      d="M12 7v5l3 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="mt-2 font-(family-name:--font-plus-jakarta) font-extrabold text-[20px] sm:text-[22px] text-neutral-900">
                  25+
                </div>
                <div className="mt-0.5 font-(family-name:--font-inter) text-[12px] sm:text-[13px] text-neutral-600 text-center">
                  Years of proven placement
                  <br />
                  expertise
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-10 w-10 flex items-center justify-center">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#1c5aa8]"
                    aria-hidden
                  >
                    <path
                      d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 21V9h4v12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 21V12h4v9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-2 font-(family-name:--font-plus-jakarta) font-extrabold text-[20px] sm:text-[22px] text-neutral-900">
                  35,000+
                </div>
                <div className="mt-0.5 font-(family-name:--font-inter) text-[12px] sm:text-[13px] text-neutral-600 text-center">
                  Companies we&apos;ve
                  <br />
                  partnered with
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-10 w-10 flex items-center justify-center">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#1c5aa8]"
                    aria-hidden
                  >
                    <path
                      d="M16 11a4 4 0 1 0-8 0"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 21v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 12h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-2 font-(family-name:--font-plus-jakarta) font-extrabold text-[20px] sm:text-[22px] text-neutral-900">
                  200,000+
                </div>
                <div className="mt-0.5 font-(family-name:--font-inter) text-[12px] sm:text-[13px] text-neutral-600 text-center">
                  Successful
                  <br />
                  placements made
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative h-[280px] sm:h-[340px] lg:h-[400px] rounded-2xl overflow-hidden shadow-[0_14px_32px_rgba(0,0,0,0.18)] opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : ""
            }`}
          >
            <Image
              src="/why%20choose%20us/whychooseus-hero.jpg"
              alt="Business professionals"
              fill
              className="object-cover"
              // unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}