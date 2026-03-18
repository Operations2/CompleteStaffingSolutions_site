"use client";

import React from "react";

const TIMELINE_STEPS = [
  { letter: "I", title: "Identify", subtitle: "Talent" },
  { letter: "S", title: "Shortlist", subtitle: "Top Candidates" },
  { letter: "O", title: "Onsite", subtitle: "Support" },
  { letter: "R", title: "Referrals", subtitle: "& Network" },
  { letter: "T", title: "Team", subtitle: "Approach" },
];

const ProcessSummarySection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F9FC] py-12">
      <div className="mx-auto px-4 sm:px-6 max-w-[1200px]">
        
        {/* --- DESKTOP VIEW (Hidden on Mobile) --- */}
        <div className="hidden md:block">
          {/* Row 1: Circles and connectors */}
          <div className="flex justify-center items-center">
            {TIMELINE_STEPS.map((step, index) => (
              <React.Fragment key={`desktop-circle-${step.letter}`}>
                <div className="flex items-center justify-center rounded-full text-white font-bold shrink-0 shadow-[0_4px_14px_rgba(45,127,193,0.4)] bg-[linear-gradient(135deg,#2D7FC1,#3455A5)] w-20 h-20 text-3xl">
                  {step.letter}
                </div>
                {index < TIMELINE_STEPS.length - 1 && (
                  <div className="flex items-center justify-center shrink-0 relative w-[100px] h-[4px] bg-[#BFD0EA]">
                    <div className="rounded-full w-2.5 h-2.5 bg-[#3A63A9] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Row 2: Labels */}
          <div className="flex justify-center items-start mt-4">
            {TIMELINE_STEPS.map((step, index) => (
              <React.Fragment key={`desktop-label-${step.letter}`}>
                <div className="flex flex-col items-center text-center w-30 text-[#2B3A4B]">
                  <div className="text-lg font-bold">{step.title}</div>
                  <div className="text-sm font-normal mt-1">{step.subtitle}</div>
                </div>
                {index < TIMELINE_STEPS.length - 1 && <div className="w-[60px]" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* --- MOBILE VIEW (Hidden on Desktop) --- */}
        <div className="md:hidden flex flex-col items-center">
          {/* Using a grid to get the 3-over-2 look from your image */}
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-7 ">
            {TIMELINE_STEPS.map((step, index) => (
              <div 
                key={`mobile-${step.letter}`}
                className={`flex flex-col items-center text-center ${
                  index < 3 ? "col-span-2" : "gap-x-8"
                }`}
              >
                {/* Circle */}
                <div className="flex items-center justify-center rounded-full text-white font-bold shadow-[0_4px_14px_rgba(45,127,193,0.4)] bg-[linear-gradient(135deg,#2D7FC1,#3455A5)] w-14 h-14 text-xl mb-3">
                  {step.letter}
                </div>
                {/* Text Content */}
                <div className="text-[#2B3A4B]">
                  <div className="text-base font-bold leading-tight -mt-0.5">
                    {step.title}
                  </div>
                  <div className="text-xs font-normal text-gray-500 mt-1.5">
                    {step.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSummarySection;