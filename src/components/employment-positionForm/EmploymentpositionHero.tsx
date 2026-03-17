"use client";

export default function EmploymentpositionHero() {
  return (
    <section className="relative w-full min-h-[380px] xs:min-h-[420px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#19478e] via-[#225eb9] to-[#6CA642]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -left-10 top-10 w-40 h-40 rounded-full border border-white/40" />
        <div className="absolute right-6 top-12 w-24 h-24 rounded-full border border-white/30" />
        <div className="absolute left-1/3 bottom-8 w-32 h-32 rounded-full border border-white/20" />
      </div>
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 text-center">
        <h1 className="font-[var(--font-plus-jakarta)] font-bold text-white text-[clamp(26px,4vw,40px)] mb-4">
          Online <span className="text-[var(--accent)]">Application</span>
        </h1>
        <p className="font-[var(--font-inter)] text-white/95 text-[clamp(14px,1.5vw,17px)] leading-relaxed max-w-[900px] mx-auto">
          Review our current openings on the job board and apply directly for roles that interest you. If you do not see
          a perfect match today, share your information below and our recruiters will connect with you about
          opportunities that fit your goals.
        </p>
      </div>
    </section>
  );
}