"use client";

import React from "react";
import Link from "next/link";
import assets from "../../assets/assets";
import { StaticImageData } from "next/image";

interface Office {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  fax?: string;
  image: StaticImageData;
}

const OFFICES: Office[] = [
  {
    name: "Marlborough Office",
    address: "33 Boston Post Road West, Suite 190",
    city: "Marlborough",
    state: "MA 01752",
    phone: "(508) 460-6600",
    fax: "(508) 460-6631",
    image: assets.marlborough_ma,
  },
  {
    name: "Boston Office",
    address: "260 Franklin St, Suite 710",
    city: "Boston",
    state: "MA 02110",
    phone: "(857) 265-3500",
    image: assets.boston_ma,
  },
  {
    name: "Lincoln Office",
    address: "1 Albion Rd, Suite 105",
    city: "Lincoln",
    state: "RI 02865",
    phone: "(401) 475-8800",
    image: assets.rhode_island_office,
  },
  {
    name: "Glastonbury Office",
    address: "45 Glastonbury Boulevard",
    city: "Glastonbury",
    state: "CT 06033",
    phone: "(860) 554-3015",
    image: assets.glastonbury_ct,
  },
  {
    name: "Burlington Office",
    address: "25 Burlington Mall Road, Suite 406",
    city: "Burlington",
    state: "MA 01803",
    phone: "(781) 270-0004",
    image: assets.burlington_ma,
  },
  {
    name: "Shelton Office",
    address: "2 Corporate Drive, Suite 943",
    city: "Shelton",
    state: "CT 06484",
    phone: "(203) 533-2110",
    image: assets.shelton_ct,
  },
  {
    name: "Fort Myers Office",
    address: "4575 Via Royale Suite 218",
    city: "Fort Myers",
    state: "FL 33907",
    phone: "(239) 519-9990",
    image: assets.fort_myers_fl,
  },
  {
    name: "Remote & National",
    address: "Serving clients across the U.S.",
    city: "",
    state: "",
    phone: "(401) 475-8800",
    image: assets.boston_ma,
  },
];

const ACCENT_COLORS = [
  { border: "border-t-blue-500", bg: "bg-[#19478e]", hover: "hover:bg-[#143474]", shadow: "shadow-[#19478e]/20" },
  { border: "border-t-blue-500", bg: "bg-[#19478e]", hover: "hover:bg-[#143474]", shadow: "shadow-[#19478e]/20" },
  { border: "border-t-blue-500", bg: "bg-[#19478e]", hover: "hover:bg-[#143474]", shadow: "shadow-[#19478e]/20" },
  { border: "border-t-blue-500", bg: "bg-[#19478e]", hover: "hover:bg-[#143474]", shadow: "shadow-[#19478e]/20" },
  { border: "border-t-blue-500", bg: "bg-[#19478e]", hover: "hover:bg-[#143474]", shadow: "shadow-[#19478e]/20" },
];

const OfficeLocations: React.FC = () => {
  return (
    <section className="w-full bg-sky-100/70 pb-5 md:p-7 ">
      <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 lg:gap-10 items-stretch">
          {/* Left: Contact form */}
          <div className="order-2 lg:order-1 flex h-full flex-col gap-4">
            {/* Green info box above the card */}
            <div className="w-full rounded-md border border-[#8dcf9b] bg-[#e3f9e7] px-4 py-3 text-[13px] min-h-[80px] md:min-h-[90px] sm:text-sm leading-relaxed text-[#295634] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              No office near you? No problem — we place candidates across all 50 states. Tell us your location and we&apos;ll
              connect you with the right team.
            </div>

            <div className="flex w-full flex-1 min-h-[220px] sm:min-h-[280px] flex-col gap-6 rounded-2xl bg-[#19478e] px-5 py-7 sm:px-7 sm:py-8 md:px-8 md:py-9 shadow-[3px_4px_20.5px_3px_rgba(0,0,0,0.25)] font-[var(--font-inter)]">
              <div>
                <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(22px,3.2vw,30px)] font-bold uppercase leading-tight text-white">
                  Contact Us
                </h2>
                <p className="mt-2 text-[15px] sm:text-[16px] text-[#e8e8e8]">
                  We&apos;re ready to answer your questions about staffing, hiring, or career opportunities.
                </p>
              </div>

              <form
                className="flex w-full flex-col gap-4 sm:gap-5"
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="text-[15px] sm:text-[16px] font-normal text-[#e8e8e8]"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="h-11 sm:h-12 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[15px] sm:text-[16px] text-white outline-none placeholder:text-[#e8e8e880]"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-company"
                      className="text-[15px] sm:text-[16px] font-normal text-[#e8e8e8]"
                    >
                      Company (optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      className="h-11 sm:h-12 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[15px] sm:text-[16px] text-white outline-none placeholder:text-[#e8e8e880]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-[15px] sm:text-[16px] font-normal text-[#e8e8e8]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="h-11 sm:h-12 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[15px] sm:text-[16px] text-white outline-none placeholder:text-[#e8e8e880]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-phone"
                    className="text-[15px] sm:text-[16px] font-normal text-[#e8e8e8]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    className="h-11 sm:h-12 w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 text-[15px] sm:text-[16px] text-white outline-none placeholder:text-[#e8e8e880]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    className="text-[15px] sm:text-[16px] font-normal text-[#e8e8e8]"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="min-h-[95px] md:min-h-[115px] w-full rounded border border-[#e8e8e8] bg-transparent px-3.5 py-3 text-[15px] sm:text-[16px] text-white outline-none placeholder:text-[#e8e8e880]"
                    placeholder="Tell us about your hiring needs or career goals."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 h-[46px] sm:h-[50px] w-full max-w-[200px] rounded bg-[#6ca642] text-[16px] sm:text-[18px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right: Offices list */}
          <div className="order-1 lg:order-2 flex h-full flex-col gap-4">
            {/* Blue info box above the card */}
            <div className="rounded-md border border-[#c2d8f5] bg-[#f3f7ff] px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] min-h-[80px] md:min-h-[90px]">
              <h3 className="mb-1 text-[13px] sm:text-[14px] font-semibold text-[#19478e]">
                We go where your business goes
              </h3>
              <p className="text-[11px] sm:text-xs leading-relaxed text-neutral-700">
                Expanding into a new market? Hiring remote talent? Placements across multiple states? Our recruiters have the
                network to deliver — across every industry, for over 25 years.
              </p>
            </div>

            <div className="flex h-full flex-col rounded-2xl bg-white shadow-lg border border-neutral-100 px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8 font-[var(--font-inter)] max-h-[860px]">
              <span className="inline-block text-[#19478e] font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] mb-2">
                Our offices
              </span>
              <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(22px,2.6vw,28px)] font-bold text-neutral-900 mb-2">
                Connect with a local team
              </h2>
              <p className="text-sm sm:text-[15px] text-neutral-600 mb-4 sm:mb-5">
                Reach the Complete Staffing Solutions office closest to you, or work with our remote and national teams
                for searches across the U.S.
              </p>

              <div className="mt-1 flex-1 min-h-0 overflow-y-auto pr-1 space-y-3">
                {OFFICES.map((office) => (
                  <div
                    key={office.name}
                    className="rounded-md border border-[#d5e2f2] bg-[#f7fbff] px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#19478e]">
                        {office.name.replace(" Office", "")}
                      </h3>
                      <a
                        href={`tel:${office.phone.replace(/[^\d]/g, "")}`}
                        className="text-[11px] sm:text-[12px] font-semibold text-[#19478e] hover:underline whitespace-nowrap"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-700 leading-relaxed">
                      {office.address}
                      {office.city && office.state && (
                        <>
                          <br />
                          {office.city}, {office.state}
                        </>
                      )}
                      {!office.city && office.state && (
                        <>
                          <br />
                          {office.state}
                        </>
                      )}
                    </p>
                    <div className="mt-1.5">
                      <Link
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          office.address + (office.city ? ` ${office.city} ${office.state}` : ""),
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] sm:text-xs font-semibold text-[#19478e] hover:text-[#143474] hover:underline"
                      >
                        View on map
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
