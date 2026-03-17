"use client";

import React from "react";
import Image from "next/image";
import assets from "@/assets/assets";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden min-h-[200px] xs:min-h-[300px] sm:min-h-[400px]"
    >
      <div className="absolute inset-0">
        <Image
          src={assets.process_bottom}
          alt="Office meeting"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(25,71,142,0.75), rgba(25,71,142,0.75))",
          }}
        />
      </div>
      <div
        className="relative z-10 w-full text-center"
        style={{
          paddingTop: "70px",
          paddingBottom: "70px",
        }}
      >
        <h1
          className="font-bold text-white text-[40px] sm:text-[48px] md:text-[56px] leading-tight"
        >
          Our <span className="text-accent">Recruiting Process</span>
        </h1>
        <p
          className="text-[#E5ECF6] font-semibold text-[clamp(18px,3vw,24px)]"
        >
          A Clear, Proven Approach to Hiring
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
