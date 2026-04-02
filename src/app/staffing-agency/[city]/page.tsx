import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, stateCityIndex, type City, type CityFaq } from "@/data/cities";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.completestaffingsolutions.com";

const phoneLabel = "(401) 475-8800";
const phoneHref = "tel:+14014758800";
const jobRequestHref = "/job-request";

function getCityTitle(city: City) {
  return (
    city.title ??
    `Staffing Agency in ${city.name}, ${city.state} | Healthcare, Engineering & Finance Recruiting | Complete Staffing Solutions`
  );
}

function getCityDescription(city: City) {
  return (
    city.description ??
    `Complete Staffing Solutions is ${city.name}'s trusted staffing agency specializing in Healthcare, Engineering, and Accounting & Finance placements. 25+ years experience. Call ${phoneLabel}.`
  );
}

function getCityCanonicalPath(slug: string) {
  return `/staffing-agency/${slug}`;
}

function getCityCanonicalUrl(slug: string) {
  return new URL(getCityCanonicalPath(slug), SITE_URL).toString();
}

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities[slug];
  if (!city) return {};

  const title = getCityTitle(city);
  const description = getCityDescription(city);
  const canonical = getCityCanonicalPath(slug);
  const canonicalUrl = getCityCanonicalUrl(slug);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
  type: "website",
  title,
  description,
  url: canonicalUrl,
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
    },
  ],
},
  };
}

function SchemaJsonLd({ slug, city }: { slug: string; city: City }) {
  const title = getCityTitle(city);
  const description = getCityDescription(city);
  const url = getCityCanonicalUrl(slug);

  const faq: CityFaq[] = city.faq ?? [];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": `${url}#employmentagency`,
        name: `Complete Staffing Solutions - ${city.name}, ${city.state}`,
        description,
        url,
        telephone: "+14014758800",
        email: "contactus@completestaffingsolutions.com",
        foundingDate: "1999",
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "State",
            name: city.state,
          },
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: city.state,
          addressCountry: "US",
        },
        sameAs: ["https://www.linkedin.com/company/complete-staffing-solutions/"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Staffing Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare Staffing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engineering Staffing" } },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Accounting & Finance Staffing" },
            },
          ],
        },
      },
      {
        "@type": "WebPage",
        "@id": url,
        name: title,
        description,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Staffing Agency", item: `${SITE_URL}/staffing-agency` },
            { "@type": "ListItem", position: 3, name: `${city.name}, ${city.state}`, item: url },
          ],
        },
      },
      ...(faq.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faq.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a raw string in the HTML response.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function IndustryCards({ city }: { city: City }) {
  const cardClass = [
    "bg-white rounded-2xl overflow-hidden",
    "shadow-[0_4px_24px_rgba(10,22,40,0.10)] border border-transparent",
    "transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(10,22,40,0.15)] hover:border-[#4D8BFF]",
  ].join(" ");
  const headerBase = "px-7 pt-7 pb-5";
  const bodyBase = "px-7 pb-7";
  const roleClass = "text-[0.82rem] text-[#0A1628] flex items-center gap-2";

  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-12 sm:py-14">
      <div className="text-center mb-10">
        <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#1A6BFF]">
          Specialized Recruiting Divisions
        </p>
        <h2 className="mt-2 font-bold text-[clamp(1.6rem,3vw,2.4rem)] leading-tight text-[#0A1628]">
          Three Verticals. One Trusted Partner.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className={cardClass}>
          <div
            className={[
              headerBase,
              "bg-[linear-gradient(135deg,#E6F7F5_0%,#CCF2ED_100%)]",
            ].join(" ")}
          >
            <div className="w-12 h-12 rounded-[12px] bg-[#00C4B4] text-white grid place-items-center text-[1.5rem] mb-4">
              🏥
            </div>
            <h3 className="font-bold text-[1.35rem] text-[#0A1628]">
              Healthcare Staffing in {city.name}, {city.state}
            </h3>
            <p className="mt-1 text-[0.85rem] text-[#64748B]">
              Clinical & administrative healthcare talent for hospitals, clinics, and care facilities
            </p>
          </div>
          <div className={bodyBase}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-6">
              {[
                "Registered Nurse (RN)",
                "Physical Therapist",
                "Medical Assistant",
                "Nurse Practitioner",
                "Medical Biller/Coder",
                "Phlebotomist",
                "Dental Assistant",
                "Surgical Scheduler",
                "Pharmacy Technician",
                "Patient Care Tech",
              ].map((r) => (
                <li key={r} className={roleClass}>
                  <span className="text-[#00C4B4] text-[0.7rem]">→</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[#EEF0F5] flex items-center justify-between gap-4">
              <span className="text-[0.8rem] text-[#64748B]">Direct hire · Temp · Contract</span>
              <a
                href="/industries-we-serve/healthcare"
                className="text-[0.82rem] font-semibold text-[#1A6BFF] no-underline hover:text-[#0A1628] transition-colors"
              >
                View All Healthcare Roles →
              </a>
            </div>
          </div>
        </article>

        <article className={cardClass}>
          <div
            className={[
              headerBase,
              "bg-[linear-gradient(135deg,#EEF2FF_0%,#DDE5FF_100%)]",
            ].join(" ")}
          >
            <div className="w-12 h-12 rounded-[12px] bg-[#1A6BFF] text-white grid place-items-center text-[1.5rem] mb-4">
              ⚙️
            </div>
            <h3 className="font-bold text-[1.35rem] text-[#0A1628]">
              Engineering Staffing in {city.name}, {city.state}
            </h3>
            <p className="mt-1 text-[0.85rem] text-[#64748B]">
              Skilled engineers across mechanical, civil, electrical, software, and more
            </p>
          </div>
          <div className={bodyBase}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-6">
              {[
                "Mechanical Engineer",
                "Civil Engineer",
                "Electrical Engineer",
                "Software Developer",
                "Systems Engineer",
                "Manufacturing Engineer",
                "QA/Test Engineer",
                "Project Manager",
                "CAD Designer",
                "Environmental Engineer",
              ].map((r) => (
                <li key={r} className={roleClass}>
                  <span className="text-[#1A6BFF] text-[0.7rem]">→</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[#EEF0F5] flex items-center justify-between gap-4">
              <span className="text-[0.8rem] text-[#64748B]">Direct hire · Temp · Contract</span>
              <a
                href="/industries-we-serve/engineering"
                className="text-[0.82rem] font-semibold text-[#1A6BFF] no-underline hover:text-[#0A1628] transition-colors"
              >
                View All Engineering Roles →
              </a>
            </div>
          </div>
        </article>

        <article className={cardClass}>
          <div
            className={[
              headerBase,
              "bg-[linear-gradient(135deg,#FFF8E6_0%,#FFE9B0_100%)]",
            ].join(" ")}
          >
            <div className="w-12 h-12 rounded-[12px] bg-[#E8A020] text-white grid place-items-center text-[1.5rem] mb-4">
              📊
            </div>
            <h3 className="font-bold text-[1.35rem] text-[#0A1628]">
              Accounting & Finance Staffing in {city.name}, {city.state}
            </h3>
            <p className="mt-1 text-[0.85rem] text-[#64748B]">
              Finance professionals for banking, investment, accounting, and corporate roles
            </p>
          </div>
          <div className={bodyBase}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-6">
              {[
                "Controller",
                "Financial Analyst",
                "Staff Accountant",
                "Accounting Manager",
                "CFO",
                "Credit Analyst",
                "Payroll Specialist",
                "AP/AR Specialist",
                "Tax Specialist",
                "Bookkeeper",
              ].map((r) => (
                <li key={r} className={roleClass}>
                  <span className="text-[#E8A020] text-[0.7rem]">→</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[#EEF0F5] flex items-center justify-between gap-4">
              <span className="text-[0.8rem] text-[#64748B]">Direct hire · Temp · Contract</span>
              <a
                href="/industries-we-serve/finance"
                className="text-[0.82rem] font-semibold text-[#1A6BFF] no-underline hover:text-[#0A1628] transition-colors"
              >
                View All Finance Roles →
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default async function StaffingAgencyCityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = cities[slug];
  if (!city) notFound();

  return (
    <main className="min-h-screen bg-[#F7F6F3] text-[#0A1628]">
      <SchemaJsonLd slug={slug} city={city} />

      {/* City selector bar (reference style) */}
      <div className="w-full bg-white border-b border-[#EEF0F5] shadow-[0_2px_8px_rgba(10,22,40,0.06)]">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max">
            {Object.entries(stateCityIndex).map(([stateCode, group]) => (
              <div key={stateCode} className="flex items-stretch">
                <div className="bg-[#EEF0F5] border-r border-[#EEF0F5] px-3 h-[44px] flex items-center text-[0.7rem] font-semibold tracking-widest uppercase text-[#64748B]">
                  {stateCode}
                </div>
                {group.cities.map((c) => {
                  const isActive = c.slug === slug;
                  return (
                    <Link
                      key={c.slug}
                      href={getCityCanonicalPath(c.slug)}
                      className={[
                        "h-[44px] px-4 flex items-center",
                        "text-[0.8rem] font-medium whitespace-nowrap",
                        "border-b-2 transition-all duration-150",
                        isActive
                          ? "text-[#1A6BFF] border-b-[#1A6BFF] font-semibold bg-[#F0F5FF]"
                          : "text-[#64748B] border-b-transparent hover:text-[#1A6BFF] hover:bg-[#F0F5FF]",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {c.name}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breadcrumb (reference style) */}
      <div className="w-full bg-[#EEF0F5] border-b border-[#CBD5E1] px-4 sm:px-8 py-2.5 text-[0.8rem] text-[#64748B]">
        <div className="w-full max-w-[1100px] mx-auto">
          <Link href="/" className="text-[#1A6BFF] hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href="/staffing-agency" className="text-[#1A6BFF] hover:underline">
            Locations
          </Link>
          <span className="mx-2">›</span>
          <span className="text-[#64748B]">Staffing Agency — {city.name}, {city.state}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0A1628_0%,#112240_45%,#1E3A5F_100%)] px-4 sm:px-8 py-20 sm:py-24">
        {/* radial highlight */}
        <div className="pointer-events-none absolute -top-[40%] -right-[15%] w-[60%] h-[200%] bg-[radial-gradient(ellipse,rgba(0,196,180,0.12)_0%,transparent_65%)]" />
        {/* bottom accent line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,#00C4B4,#1A6BFF,#E8A020)]" />

        <div className="relative w-full max-w-[900px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,196,180,0.30)] bg-[rgba(0,196,180,0.15)] px-4 py-1.5 text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-[#00C4B4]">
            <span aria-hidden>📍</span>
            <span>{city.tag ?? `Serving ${city.name}, ${city.state}`}</span>
          </div>

          <h1 className="mt-5 font-extrabold leading-[1.2] text-white text-[clamp(2rem,5vw,3.25rem)]">
            {city.name}'s Trusted Staffing Agency for
            <br />
            <span className="text-[#00C4B4]">Healthcare, Engineering & Finance</span>
          </h1>

          <p className="mt-5 max-w-[620px] text-[1.1rem] leading-[1.7] text-[rgba(255,255,255,0.75)]">
            For over 25 years, Complete Staffing Solutions has connected{" "}
            <span className="font-bold text-white">{city.name}</span> employers with exceptional
            healthcare professionals, engineers, and finance experts. Direct hire, temp-to-hire, and
            contract placements — qualified candidates in 48 hours.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={jobRequestHref}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#00C4B4] px-7 py-3.5 text-[0.9rem] font-semibold text-[#0A1628] transition-all duration-200 hover:-translate-y-px hover:bg-[#00D6C4] hover:shadow-[0_6px_20px_rgba(0,196,180,0.35)]"
            >
              <span aria-hidden>⚡</span>
              Request Talent Now
            </Link>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-[8px] border border-[rgba(255,255,255,0.3)] bg-transparent px-7 py-3.5 text-[0.9rem] font-medium text-white transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.5)]"
            >
              <span aria-hidden>📞</span>
              Call {phoneLabel}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-10">
            {[
              ["25", "+", "Years Experience"],
              ["200", "K+", "Placements Made"],
              ["35", "K+", "Companies Served"],
              ["48", "hr", "Avg. Time to Candidates"],
            ].map(([num, suffix, label]) => (
              <div key={label}>
                <div className="text-[2rem] leading-none font-extrabold text-white">
                  {num}
                  <span className="text-[#00C4B4]">{suffix}</span>
                </div>
                <div className="mt-1 text-[0.78rem] uppercase tracking-[0.05em] text-[rgba(255,255,255,0.5)]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-10 sm:py-12">
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,22,40,0.10)] border-l-4 border-l-[#1A6BFF]">
          <h2 className="font-extrabold text-[1.6rem] text-[#0A1628]">
            {city.intro_h2 ?? `Staffing Solutions Built for ${city.name}'s Economy`}
          </h2>
          <p className="mt-3 text-[#64748B] text-[1rem] leading-[1.75]">
            {city.intro_p ??
              `Complete Staffing Solutions provides industry-focused staffing in ${city.name}, ${city.state}. We deliver qualified candidates quickly across Healthcare, Engineering, and Accounting & Finance.`}
          </p>
        </div>
      </section>

      <IndustryCards city={city} />

      {/* Market section */}
      <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 pb-10">
        <div className="bg-white rounded-2xl p-10 shadow-[0_4px_24px_rgba(10,22,40,0.10)]">
          <h2 className="font-extrabold text-[1.75rem] text-[#0A1628]">
            Why {city.name} Companies Choose Complete Staffing Solutions
          </h2>
          <p className="mt-4 text-[#64748B] leading-[1.75]">{city.market_p1}</p>
          <p className="mt-4 text-[#64748B] leading-[1.75]">{city.market_p2}</p>

          {!!city.employers?.length && (
            <div className="mt-5 flex flex-wrap gap-2">
              {city.employers.map((e) => (
                <span
                  key={e}
                  className="inline-flex items-center rounded-full border border-[#CBD5E1] bg-[#EEF0F5] px-3.5 py-1.5 text-[0.78rem] font-medium text-[#1E3A5F]"
                >
                  {e}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Nearby cities */}
      {!!city.nearby?.length && (
        <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 pb-10">
          <div className="bg-[#0A1628] rounded-2xl p-8 sm:p-10">
            <h3 className="font-extrabold text-[1.35rem] text-white">
              {city.nearby_h3 ?? "Nearby Markets"}
            </h3>
            <p className="mt-3 text-[0.85rem] text-[rgba(255,255,255,0.6)]">
              We place candidates across the entire region — not just the city center. Click a market
              to learn more.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {city.nearby.map(([nearSlug, _state, label]) => (
                <Link
                  key={nearSlug}
                  href={getCityCanonicalPath(nearSlug)}
                  className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.08)] px-4 py-2 text-[0.8rem] font-medium text-[rgba(255,255,255,0.85)] transition-all duration-150 hover:bg-[#00C4B4] hover:text-[#0A1628] hover:border-[#00C4B4]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {!!city.faq?.length && (
        <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 pb-10">
          <h2 className="font-extrabold text-[1.75rem] text-[#0A1628]">
            Frequently Asked Questions — {city.name} Staffing
          </h2>
          <div className="mt-5 space-y-3">
            {city.faq.map(([q, a]) => (
              <details
                key={q}
                className="group bg-white rounded-lg border border-[#EEF0F5] overflow-hidden"
              >
                <summary className="cursor-pointer list-none select-none px-6 py-4 flex items-center justify-between gap-4 font-semibold text-[0.95rem] text-[#0A1628] hover:bg-[#F8F9FF]">
                  <span>{q}</span>
                  <span className="text-[#1A6BFF] transition-transform duration-200 group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-[0.9rem] text-[#64748B] leading-[1.75]">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* CTA banner */}
      <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 pb-10">
        <div className="bg-[linear-gradient(135deg,#1A6BFF_0%,#1E3A5F_100%)] rounded-2xl px-8 py-12 sm:px-10 sm:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-extrabold text-[1.75rem] text-white">
              Ready to hire in {city.name}?
            </h2>
            <p className="mt-2 text-[0.95rem] text-[rgba(255,255,255,0.75)]">
              Tell us your staffing need and we'll have qualified candidates to you in 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href={jobRequestHref}
              className="inline-flex items-center justify-center rounded-[8px] bg-white px-6 py-3 text-[0.88rem] font-semibold text-[#1A6BFF] transition-all duration-150 hover:bg-[#F7F6F3]"
            >
              Submit a Job Request
            </Link>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center rounded-[8px] border border-[rgba(255,255,255,0.4)] bg-transparent px-6 py-3 text-[0.88rem] font-medium text-white transition-all duration-150 hover:bg-[rgba(255,255,255,0.1)]"
            >
              Call {phoneLabel}
            </a>
          </div>
        </div>
      </section>

      {/* State grid */}
      <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 pb-14">
        <h2 className="font-extrabold text-[2rem] text-[#0A1628] text-center">
          We Staff Across 5 States
        </h2>
        <p className="mt-3 text-center text-[0.95rem] text-[#64748B]">
          Click any city to view market-specific information for healthcare, engineering, and finance
          staffing.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                  "bg-white rounded-2xl px-6 py-6 shadow-[0_4px_24px_rgba(10,22,40,0.10)]",
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
                        href={getCityCanonicalPath(c.slug)}
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

