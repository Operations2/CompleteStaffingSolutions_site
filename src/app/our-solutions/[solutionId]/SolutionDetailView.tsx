"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, CheckCircle2, Shield, Star } from "lucide-react";
import type { SolutionDetailContent } from "../solutionDetailContent";

interface SolutionDetailViewProps {
  content: SolutionDetailContent;
}

export default function SolutionDetailView({
  content,
}: SolutionDetailViewProps) {
  const heroRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [bodyVisible, setBodyVisible] = useState(false);

  const showSearchModels =
    content.title === "Retained Search" || content.title === "Executive Search";

  useEffect(() => {
    const heroObs = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setHeroVisible(true),
      { threshold: 0.1 },
    );
    if (heroRef.current) heroObs.observe(heroRef.current);

    const bodyObs = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setBodyVisible(true),
      { threshold: 0.05 },
    );
    if (bodyRef.current) bodyObs.observe(bodyRef.current);

    return () => {
      heroObs.disconnect();
      bodyObs.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f6f8] scroll-smooth">
      {/* Hero header: same image as card, title + subtitle */}
      <section
        ref={heroRef}
        className={`relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] flex items-end overflow-hidden transition-all duration-1000 ${heroVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-0">
          <Image
            src={content.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[rgba(25,71,142,0.92)] via-[rgba(25,71,142,0.6)] to-[rgba(25,71,142,0.4)]"
            aria-hidden
          />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 pb-10 sm:pb-12 pt-16">
          <div className="w-full max-w-[1200px] mx-auto">
            <Link
              href="/our-solutions"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-medium mb-4 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Our Solutions
            </Link>
            <h1
              className={`font-[var(--font-plus-jakarta)] font-bold text-white text-3xl sm:text-4xl md:text-[42px] leading-tight m-0 mb-2 reveal revealUp ${heroVisible ? "active" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              {content.title}
            </h1>
            <p
              className={`font-[var(--font-plus-jakarta)] text-[#E5ECF6] text-lg sm:text-xl m-0 reveal revealUp ${heroVisible ? "active" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main card: body details with smooth reveal */}
      <div
        ref={bodyRef}
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 -mt-6 sm:-mt-8 pb-16"
      >
        <div className="w-full max-w-[900px] mx-auto">
          <article
            className={`rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-neutral-200/60 overflow-hidden transition-all duration-700 ${bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="font-[var(--font-plus-jakarta)] font-bold text-[#1f2933] text-xl sm:text-2xl mb-4">
                Our Focus
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-8 sm:mb-10">
                {content.ourFocus}
              </p>

              {content.sections.map((section, index) => (
                <div
                  key={section.title}
                  className="mb-8 sm:mb-10 last:mb-0"
                  style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
                >
                  <h3 className="font-[var(--font-plus-jakarta)] font-bold text-[#1f2933] text-lg sm:text-xl mb-3">
                    {section.title}
                  </h3>
                  <p className="text-[#4b5563] leading-relaxed m-0">
                    {section.body}
                  </p>
                </div>
              ))}

              <div className="pt-6 border-t border-neutral-200">
                <h3 className="font-[var(--font-plus-jakarta)] font-bold text-[#1f2933] text-lg sm:text-xl mb-3">
                  Our Edge
                </h3>
                <p className="text-[#4b5563] leading-relaxed m-0">
                  {content.ourEdge}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/job-request"
                  className="inline-flex items-center gap-2 py-3 px-5 bg-[#6ca642] text-white text-sm font-semibold rounded-lg no-underline transition-all hover:bg-[#5d9338] hover:shadow-md"
                >
                  Place a Job Request
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </Link>
                <Link
                  href="/our-solutions"
                  className="inline-flex items-center gap-2 py-3 px-5 bg-[#19478e] text-white text-sm font-medium rounded-lg no-underline transition-all hover:bg-[#153a6e] hover:shadow-md"
                >
                  View All Solutions
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 py-3 px-5 border-2 border-[#19478e] text-[#19478e] text-sm font-medium rounded-lg no-underline transition-all hover:bg-[#19478e] hover:text-white hover:shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </article>
        </div>
        {showSearchModels && (
          <section className="mt-12 sm:mt-14 md:mt-16">
            <div className=" px-4 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12 max-w-[1040px] mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <p className="font-[var(--font-plus-jakarta)] text-[11px] sm:text-xs tracking-[0.18em] font-semibold text-[#1f3c6b] uppercase mb-2">
                  Our Solutions
                </p>
                <h2 className="font-[var(--font-plus-jakarta)] text-xl sm:text-2xl md:text-[26px] font-bold text-[#163765] mb-3">
                  Our Search Models: Understanding the Difference
                </h2>
                <p className="text-[13px] sm:text-sm md:text-[15px] text-[#4b5f7b] max-w-[720px] mx-auto">
                  Not all searches are created equal. CSS aligns the right level
                  of rigor, process, and commitment to the stakes of every hire.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mb-8 md:mb-10 max-w-6xl mx-auto">
                {/* Retained Search card */}
                <div className="relative rounded-xl overflow-hidden border border-[#0F254E] bg-white shadow-xl flex flex-col">
                  {/* Header */}
                  <div className="px-5 sm:px-6 py-5 bg-[#0F254E] text-white">
                    <div className="flex items-center gap-3">
                      <div className="">
                        <Image
                          src="/retained-badge.webp"
                          alt="Retained Search"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div>
                        <h3 className="font-[var(--font-plus-jakarta)] text-[18px] font-bold leading-tight">
                          Retained Search
                        </h3>
                        <p className="text-[12px] text-white/80 mt-0.5">
                          Ideal for C-Suite, VP, and Direct-leaders
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-6 flex-grow">
                    <p className="text-[13px] font-bold tracking-wider uppercase text-[#0F254E] mb-4 border-b-3 border-[#0F254E] pb-1">
                      Who It's For
                    </p>
                    <ul className="space-y-4 mb-8 text-[14px] text-gray-800 font-medium">
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#c5a059] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>C-Suite, VP, and Director-level leaders</span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#c5a059] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>
                          Comprehensive, assessable, or mission-critical hires
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#c5a059] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>
                          A transformation, P&L, board, or organizational role
                          impact
                        </span>
                      </li>
                    </ul>

                    <p className="text-[13px] font-bold tracking-wider uppercase text-[#0F254E] mb-4 border-b-3 border-[#0F254E] pb-1">
                      Our Process
                    </p>
                    <ul className="space-y-4 text-[14px] text-gray-800 font-medium">
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#c5a059] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>
                          Fully dedicated team ensures your search is top
                          priority.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#c5a059] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>Deep market analysis and targeted outreach.</span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#c5a059] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>
                          Thorough evaluation to include leadership assessments
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#c5a059] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>
                          Advanced recruitment strategies to reach the best
                          talent
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-4 bg-[#0F254E] flex items-center justify-center gap-2">
                    <Shield
                      className="h-4 w-4 text-white/90"
                      fill="currentColor"
                    />
                    <p className="text-[13px] font-bold text-white">
                      12-Month Placement Guarantee ★
                    </p>
                  </div>
                </div>

                {/* Contained Search card */}
                <div className="relative rounded-xl overflow-hidden border border-[#14688A] bg-white shadow-xl flex flex-col">
                  {/* Header */}
                  <div className="px-5 sm:px-6 py-5 bg-linear-to-br from-[#14688A]/80 to-[#14688A] text-white">
                    <div className="flex items-center gap-3">
                      <div className="">
                        <Image
                          src="/contained-badge.webp"
                          alt="Contained Search"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div>
                        <h3 className="font-[var(--font-plus-jakarta)] text-[18px] font-bold leading-tight">
                          Contained Search
                        </h3>
                        <p className="text-[12px] text-white/80 mt-0.5">
                          Ideal for Sr. Managers, Managers • Mid-Level
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-6 flex-grow">
                    <p className="text-[13px] font-bold tracking-wider uppercase text-[#14688A] mb-4 border-b-3 border-[#14688A] pb-1">
                      Who It's For
                    </p>
                    <ul className="space-y-4 mb-8 text-[14px] text-gray-800 font-medium">
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#14688A] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>Sr. Manager + Managers and Mid-Level</span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#14688A] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>Key department, expanding, or growth roles</span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#14688A] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>
                          Routine hiring requiring vetted candidates without
                          executive-level investment
                        </span>
                      </li>
                    </ul>

                    <p className="text-[13px] font-bold tracking-wider uppercase text-[#14688A] mb-4 border-b-3 border-[#14688A] pb-1">
                      Our Process
                    </p>
                    <ul className="space-y-4 text-[14px] text-gray-800 font-medium">
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#14688A] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>
                          Dedicated team supports you through the recruiting
                          process
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#14688A] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>Efficient multi-channel sourcing strategies</span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#14688A] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>
                          Thorough screening, interviewing, and vetting
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Check
                          className="mt-[2px] h-5 w-5 text-[#14688A] flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span>Quick and seamless placement support</span>
                      </li>
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-4 bg-[#14688A] flex items-center justify-center gap-2">
                    <Shield
                      className="h-4 w-4 text-white/90"
                      fill="currentColor"
                    />
                    <p className="text-[13px] font-bold text-white">
                      6-Month Placement Guarantee ★
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-center text-[12px] sm:text-[13px] text-[#4b5f7b] mb-6 max-w-[720px] mx-auto">
                For high-level or mission-critical searches, every engagement is
                backed by structure, assessment, and a dedicated team.
              </p>

              <div className="max-w-4xl mx-auto border border-[#d6dde8] bg-[#f2f4f8]">
                {/* Title */}
                <div className="text-center flex flex-col items-center justify-center max-w-[400px] mx-auto pt-4 pb-3 bg-[#f2f4f8]">
                  <h2 className="text-[14px] sm:text-base md:text-lg max-w-[300px] font-semibold tracking-[0.15em] text-[#2b3c55] whitespace-nowrap uppercase">
                    SIDE-BY-SIDE COMPARISON
                  </h2>
                  <div className="w-full h-[5px] mx-auto bg-[#d8a23a]" />
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-[12.5px] text-left">
                    {/* Headers */}
                    <thead>
                      <tr className="text-white text-[12px] uppercase tracking-[0.05em]">
                        <th className="bg-[#203a63] px-5 py-2.5 font-semibold w-[26%]">
                          Role
                        </th>

                        <th className="bg-[#2c4f85] px-5 py-2.5 font-semibold w-[24%]">
                          Retained
                        </th>

                        <th className="bg-[#1f7f86] px-5 py-2.5 font-semibold w-[24%]">
                          Contained
                        </th>

                        <th className="bg-[#2e8a95] px-5 py-2.5 font-semibold w-[26%]">
                          Contingent
                        </th>
                      </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="text-[#44546a]">
                      <tr className="border-t border-[#d6dde8] bg-[#f7f9fc]">
                        <td className="px-5 py-2.5 font-semibold text-[#5a6b82]">
                          Search Type
                        </td>
                        <td className="px-5 py-2.5">C-Suite / VP / Director</td>
                        <td className="px-5 py-2.5">Sr. Manager / Manager</td>
                        <td className="px-5 py-2.5">Individual Contributors</td>
                      </tr>

                      <tr className="border-t border-[#d6dde8] bg-white">
                        <td className="px-5 py-2.5 font-semibold text-[#5a6b82]">
                          Upfront Fee
                        </td>
                        <td className="px-5 py-2.5">Exclusive Retainer</td>
                        <td className="px-5 py-2.5">Structured Agreement</td>
                        <td className="px-5 py-2.5">Resume-based screening</td>
                      </tr>

                      <tr className="border-t border-[#d6dde8] bg-[#f7f9fc]">
                        <td className="px-5 py-2.5 font-semibold text-[#5a6b82]">
                          Topgrading & McQuaig
                        </td>

                        <td className="px-5 py-2.5 gap-2">
                          <span className="text-[#d8a23a] text-[14px] mr-2">
                            ✓
                          </span>
                          Exclusive
                        </td>

                        <td className="px-5 py-2.5 gap-2">
                          <span className="text-[#d8a23a] text-[14px] mr-2">
                            ✓
                          </span>
                          Shared
                        </td>
                        <td className="px-5 py-2.5 text-[#9aa6b2]">N/A</td>
                      </tr>

                      <tr className="border-t border-[#d6dde8] bg-white">
                        <td className="px-5 py-2.5 font-semibold text-[#5a6b82]">
                          Guarantee
                        </td>
                        <td className="px-5 py-2.5">12 months</td>
                        <td className="px-5 py-2.5">6 months</td>
                        <td className="px-5 py-2.5">90 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-5 text-center text-[12px] sm:text-[13px] text-[#4b5f7b]">
                Every CSS search — at every level — is backed by structure,
                assessment, and a dedicated team.
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
