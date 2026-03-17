"use client";

// Industry specific icons (SVG format for professional look)
const Icons = {
    Demands: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19478e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    ),
    Skills: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ca642" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
    ),
    Safety: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19478e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
    )
};

interface Props {
    industryName?: string;
}

export default function IndustryChallenges({ industryName = "Real Estate" }: Props) {
 const CHALLENGES = [
  { icon: <Icons.Demands />, title: "Market Volatility", description: "Adapting recruitment to handle sudden shifts in commercial and residential property demands." },
  { icon: <Icons.Skills />, title: "Tenant Retention", description: "Finding property managers with the empathy and negotiation skills to keep occupancy rates high." },
  { icon: <Icons.Safety />, title: "Legal & Compliance", description: "Ensuring all staff are well-versed in tenant laws, fair housing, and safety regulations." }
];



  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto">
          <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(24px,3.8vw,35px)] font-semibold text-[#022d6d] text-left mb-12 tracking-tight">
            Addressing {industryName} Staffing{" "}
            <span className="font-medium text-[#022d6d]">Challenges</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHALLENGES.map((challenge, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-[15px] border border-[#f0f0f0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    {challenge.icon}
                  </div>
                  <h3 className="m-0 text-[18px] font-bold leading-snug text-[#1e293b]">
                    {challenge.title}
                  </h3>
                </div>
                <p className="m-0 text-[13px] leading-relaxed text-[#64748b]">
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