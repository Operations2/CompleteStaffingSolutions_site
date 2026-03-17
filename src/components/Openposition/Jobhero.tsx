"use client";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1600&q=80";

export default function JobHero() {
  return (
    <section className="relative w-full bg-[#19478e] py-10 sm:py-12 lg:py-16">
      {/* Background image on the right, softly blended into left side */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[60%]">
        <img
          src={HERO_IMAGE}
          alt="Professional smiling in modern office"
          className="h-full w-full object-cover object-center opacity-80 sm:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0b2547] via-[#19478e]/80 to-[#19478e]/95" />
      </div>
 
      <div className="relative w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Content */}
        <div className="relative z-10 max-w-2xl space-y-5 text-white">
          {/* Jobboard presented by */}
          <div className="flex items-center gap-3">
            <p className="text-xs sm:text-sm font-[var(--font-inter)] tracking-[0.3em] uppercase text-[#ffeb99]">
              Jobboard presented by
            </p>
            <div className="inline-flex items-center justify-center rounded-xl bg-white/95 px-3 py-1 shadow-md">
              <img
                src="/open position/top-one-hire.jpg"
                alt="TopOneHire logo"
                className="h-10 w-auto object-contain sm:h-11"
              />
            </div>
          </div>

          {/* Headline + subheadline */}
          <div className="space-y-2">
            <h1 className="font-[var(--font-plus-jakarta)] font-bold text-[clamp(22px,3.2vw,32px)] leading-snug">
              Browse Top <span className="text-[var(--accent)]">Job Opportunities</span>
            </h1>
            <p className="font-[var(--font-inter)] text-sm sm:text-[15px] text-white/90">
              Helping Employers &amp; Job Seekers Succeed
            </p>
          </div>

          {/* Description */}
          <p className="font-[var(--font-inter)] text-xs sm:text-[13px] text-white/85 max-w-[520px] leading-relaxed">
            We are a systematic staffing partner that works with energy, care, and insight to connect employers across
            healthcare, finance, and real estate with the talent they need. Explore current openings and apply in
            minutes.
          </p>

          {/* Search row */}
          <div className="mt-5 bg-white/95 rounded-full px-3 sm:px-4 py-2 flex flex-col gap-2 sm:flex-row sm:items-center shadow-xl w-full">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="min-w-0 flex-[1_1_0] rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#19478e]/60 focus:border-[#19478e]"
            />
            <input
              type="text"
              placeholder="Location"
              className="min-w-0 flex-[1_1_0] rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#19478e]/60 focus:border-[#19478e]"
            />
            <select
              className="flex-[0_0_180px] rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#19478e]/60 focus:border-[#19478e]"
            >
              <option>Category</option>
              <option>Accounting</option>
              <option>Accounts Payable</option>
              <option>Accounts Receivable</option>
              <option>Administrative</option>
              <option>Aerospace</option>
              <option>Banking</option>
              <option>Biotechnology</option>
              <option>Communications</option>
              <option>Construction Management</option>
              <option>Consulting</option>
              <option>Consumer Products</option>
              <option>Corporate Finance</option>
              <option>Corporate Legal</option>
              <option>Corporate Tax</option>
              <option>Customer Service</option>
              <option>Customer Success</option>
              <option>Distribution</option>
              <option>Education</option>
              <option>Engineering</option>
              <option>Executive Search</option>
              <option>Facility Management 1</option>
              <option>Facility Services</option>
              <option>Financial Services</option>
              <option>Grants/Research Admin</option>
              <option>Healthcare</option>
              <option>Human Resources</option>
              <option>Information Technology</option>
              <option>Inside Sales</option>
              <option>Insurance</option>
              <option>Internal Audit</option>
              <option>Lawyer (Legal)</option>
              <option>Legal (law firm)</option>
              <option>Manufacturing</option>
              <option>Marketing</option>
              <option>Medical Devices &amp; Supplies</option>
              <option>Operations</option>
              <option>Other Area(s)</option>
              <option>Outside Sales</option>
              <option>Payroll</option>
              <option>Pharmaceutical</option>
              <option>Property Management</option>
              <option>Public Accounting</option>
              <option>Purchasing</option>
              <option>Real Estate</option>
              <option>Recruiting</option>
              <option>Retail</option>
              <option>Retail Banking</option>
              <option>SAAS</option>
              <option>Sales</option>
              <option>Warehouse</option>
            </select>
            <button className="w-full sm:w-auto sm:flex-none whitespace-nowrap rounded-full bg-[#6CA642] px-6 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-[#5a9238] transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}