"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHospital,
  FaLandmark,
  FaCity,
  FaCog,
  FaBriefcase,
} from "react-icons/fa";

const INDUSTRY_CARDS = [
  {
    id: "our-solutions",
    title: "Our Solutions",
    description: "We offer a wide range of solutions to meet your needs.",
    href: "/our-solutions",
    image: "/industries detail pages/manufacturing-hero.jpg",
    icon: FaBriefcase,
    linkColor: "#6ca642",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Nurses, technicians, healthcare administrator roles.",
    href: "/industries-we-serve/healthcare",
    image: "/industries detail pages/healthcare-hero.jpg",
    icon: FaHospital,
    linkColor: "#4a9da8",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    description: "Banking, investment, accounting positions.",
    href: "/industries-we-serve/financial-services",
    image: "/financial_hero_section_image.jpg",
    icon: FaLandmark,
    linkColor: "#6ca642",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Property management, sales, development roles.",
    href: "/industries-we-serve/real-estate",
    image: "/industries detail pages/real-estate.jpg",
    icon: FaCity,
    linkColor: "#4a9da8",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-12 py-4 md:py-6 lg:py-8 xl:py-10">
      <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto">
        <h2 className="industries-section-title font-[var(--font-plus-jakarta)] font-bold text-neutral-900 text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] xl:text-[42px] leading-tight">
          Explore Opportunities Across Industries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-6 lg:gap-6">
          {INDUSTRY_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="industries-card group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Top: image with overlay + white circle icon */}
              <div className="industries-card-image relative aspect-[4/3] min-h-[180px] overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.65) 100%)",
                  }}
                />
                <div className="absolute inset-0 z-[2] flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                    <card.icon
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                      style={{ color: card.linkColor }}
                      aria-hidden
                    />
                  </div>
                </div>
              </div>

              {/* Bottom: white content */}
              <div className="industries-card-content flex flex-1 flex-col items-center text-center p-5 sm:p-6">
                <h3 className="font-[var(--font-plus-jakarta)] font-bold text-neutral-900 text-lg sm:text-xl leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="font-[var(--font-inter)] text-neutral-600 text-sm sm:text-[15px] leading-relaxed mb-5 flex-1">
                  {card.description}
                </p>
                <span
                  className="industries-learn-more relative inline-block font-[var(--font-inter)] font-medium text-sm sm:text-base transition-colors group-hover:opacity-90"
                  style={{ color: card.linkColor }}
                >
                  Learn More
                  <span
                    className="absolute h-0.5 rounded-full"
                    style={{
                      backgroundColor: card.linkColor,
                      bottom: -3,
                      left: -2,
                      right: -2,
                    }}
                  />
                </span>
              </div>
            </Link>
          ))}
          <Link
            href="/industries-we-serve"
            className="group flex flex-col w-full max-w-sm bg-[#243261] rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Topackground & Icon */}
            <div className="relative aspect-square w-full overflow-hidden flex items-center justify-center">
              {/* The Space/Nebula Background Image */}
              <Image
                src="/Industry-card.webp"
                alt="Space Background"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom Section: Text & Arrow */}
            <div className="flex items-center justify-between p-8 pt-6 pb-10">
              <h3 className="text-white font-bold text-3xl sm:text-4xl leading-tight max-w-[200px]">
                View All <br /> Industries
              </h3>

              {/* Chevron Icon */}
              <div className="text-white transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
