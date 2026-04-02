import Link from "next/link";
import { stateCityIndex } from "@/data/cities";

export const metadata = {
  title: "Staffing Agency Locations | Complete Staffing Solutions",
  description:
    "Browse staffing markets served by Complete Staffing Solutions across MA, CT, RI, NY, and FL.",
  alternates: {
    canonical: "/staffing-agency",
  },
};

export default function StaffingAgencyIndexPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F3] text-[#0A1628] mt-[100px]">
      {/* Breadcrumb (matches reference page) */}
      <div className="w-full bg-[#EEF0F5] border-b border-[#CBD5E1] px-4 sm:px-8 py-2.5 text-[0.8rem] text-[#64748B]">
        <div className="w-full max-w-[1100px] mx-auto">
          <Link href="/" className="text-[#1A6BFF] hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span>Staffing Agency</span>
        </div>
      </div>

      {/* Header */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14">
        <div className="text-center">
          <h1 className="font-extrabold tracking-tight text-[#0A1628] text-[clamp(1.8rem,4vw,2.4rem)]">
            We Staff Across 5 States
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-[0.95rem] text-[#64748B]">
            Click any city to view market-specific information for healthcare, engineering, and finance
            staffing.
          </p>
        </div>
      </section>

      {/* State grid */}
      <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {Object.entries(stateCityIndex).map(([stateCode, group]) => {
            const stateTopBorder =
              stateCode === "CT"
                ? "border-t-[#2563EB]"
                : stateCode === "RI"
                  ? "border-t-[#00C4B4]"
                  : stateCode === "MA"
                    ? "border-t-[#DC2626]"
                    : stateCode === "NY"
                      ? "border-t-[#E8A020]"
                      : stateCode === "FL"
                        ? "border-t-[#F97316]"
                        : "border-t-transparent";

            return (
              <div
                key={stateCode}
                className={[
                  "bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,22,40,0.10)]",
                  "border border-transparent border-t-[3px]",
                  stateTopBorder,
                  "transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_48px_rgba(10,22,40,0.15)]",
                ].join(" ")}
              >
                <div className="font-semibold text-[1.1rem] text-[#0A1628]">{group.stateName}</div>
                <ul className="mt-3">
                  {group.cities.map((c, idx) => (
                    <li
                      key={c.slug}
                      className={[
                        "text-[0.8rem] text-[#64748B] py-1.5",
                        idx === group.cities.length - 1 ? "" : "border-b border-[#EEF0F5]",
                      ].join(" ")}
                    >
                      <Link
                        href={`/staffing-agency/${c.slug}`}
                        className="group flex items-center justify-between gap-3 text-inherit no-underline hover:text-[#1A6BFF] transition-colors"
                      >
                        <span>{c.name}</span>
                        <span className="text-[0.7rem] opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

