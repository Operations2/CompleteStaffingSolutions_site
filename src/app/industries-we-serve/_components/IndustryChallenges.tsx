"use client";

import { ReactNode } from "react";

export interface ChallengeItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Props {
  industryName: string;
  challenges: ChallengeItem[];
}

export default function IndustryChallenges({
  industryName,
  challenges,
}: Props) {
  return (
    <section className="w-full bg-[#f5f7fb] py-12 sm:py-14 md:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto">
          <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(26px,4vw,38px)] font-semibold text-[#022d6d] text-left mb-10 tracking-tight">
            Addressing {industryName} Staffing{" "}
            <span className="font-medium text-[#022d6d]">Challenges</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-[15px] border border-[#f0f0f0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    {challenge.icon}
                  </div>
                  <h3 className="m-0 text-[19px] sm:text-[20px] font-bold leading-snug text-[#1e293b]">
                    {challenge.title}
                  </h3>
                </div>
                <p className="m-0 text-[14px] leading-relaxed text-[#64748b]">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
