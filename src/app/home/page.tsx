// app/page.tsx
// Complete Staffing Solutions — SEO-optimised homepage
// Word count: ~1,500 | All 50 states | Retained Search included


import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import './home.css'

/* ── PAGE METADATA ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Staffing Agency — Healthcare, Finance & Engineering | Nationwide | Complete Staffing Solutions',
  description:
    'Complete Staffing Solutions is a nationwide staffing agency headquartered in New England with offices across CT, RI, MA, NY, and FL. 25+ years placing Healthcare, Finance, Engineering, and Administrative professionals across all 50 states. Direct hire, temp-to-hire, contract, and retained search.',
  alternates: { canonical: 'https://www.completestaffingsolutions.com/' },
  openGraph: {
    title: 'Nationwide Staffing Agency — Healthcare, Finance & Engineering | Complete Staffing Solutions',
    description:
      'Nationwide staffing agency with deep roots in New England and Florida. 25+ years. 50,000+ placements. Healthcare, Finance, Engineering, and retained search specialists.',
    url: 'https://www.completestaffingsolutions.com/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

/* ── STRUCTURED DATA ─────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.completestaffingsolutions.com',
  name: 'Complete Staffing Solutions',
  description:
    'Full-service staffing and recruitment firm specializing in Healthcare, Engineering, Finance, and Administrative placements nationwide. Headquartered in New England with offices in CT, RI, MA, NY, and FL. Placing professionals across all 50 states.',
  url: 'https://www.completestaffingsolutions.com',
  telephone: '+14014758800',
  email: 'Contactus@completestaffingsolutions.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '33 Boston Post Road West, Suite 190',
    addressLocality: 'Marlborough',
    addressRegion: 'MA',
    postalCode: '01752',
    addressCountry: 'US',
  },
  areaServed: 'US',
  foundingDate: '1999',
  sameAs: [
    'https://www.linkedin.com/company/complete-staffing-solutions/',
    'https://www.facebook.com/completestaffinginc/',
  ],
}

/* ── STATIC DATA ─────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    icon: '🏥',
    title: 'Healthcare Staffing',
    desc: 'Connecting hospitals, clinics, and medical practices nationwide — with deep local expertise in CT, RI, MA, NY, and FL — with qualified nurses, technicians, and healthcare administrators.',
    roles: ['Registered Nurse', 'Medical Assistant', 'CNA', 'Nurse Practitioner'],
    link: '/industries-we-serve/healthcare',
    label: 'Explore Healthcare Staffing',
  },
  {
    icon: '💰',
    title: 'Finance & Accounting',
    desc: 'Placing Controllers, Staff Accountants, CFOs, and financial analysts with firms across all 50 states. Deep market expertise in Hartford, Boston, Providence, New York, and South Florida.',
    roles: ['Controller', 'Staff Accountant', 'CFO', 'Bookkeeper'],
    link: '/industries-we-serve/financial-services',
    label: 'Explore Finance Staffing',
  },
  {
    icon: '⚙️',
    title: 'Engineering & Manufacturing',
    desc: 'Civil, mechanical, and electrical engineering professionals for construction, industrial, and defense firms nationwide — with particular strength in New England and Florida.',
    roles: ['Civil Engineer', 'Project Manager', 'Quality Control', 'CAD Designer'],
    link: '/industries-we-serve',
    label: 'Explore Engineering Staffing',
  },
  {
    icon: '📋',
    title: 'Administrative & Office',
    desc: 'Executive assistants, office managers, HR coordinators, and operations support staff for businesses of all sizes — across all 50 states, with regional hubs in the Northeast and Florida.',
    roles: ['Executive Assistant', 'HR Coordinator', 'Office Manager'],
    link: '/industries-we-serve',
    label: 'Explore Admin Staffing',
    },
    {
      icon: '⚖️',
      title: 'Legal',
      desc: 'Paralegals, legal assistants, and litigation support talent for law firms and corporate legal teams throughout the Northeast, Florida, and across the U.S.',
      roles: ['Paralegal', 'Legal Assistant', 'Litigation Support Specialist'],
      link: '/industries-we-serve/legal',
      label: 'Explore Legal Staffing',
    },
]

const MARKETS = [
  { state: 'Connecticut', offices: '2 Offices', cities: ['Glastonbury', 'Shelton', 'Hartford area'] },
  { state: 'Rhode Island', offices: '1 Office', cities: ['Lincoln / Providence', 'Warwick', 'Cranston'] },
  { state: 'Massachusetts', offices: '3 Offices', cities: ['Marlborough', 'Boston', 'Burlington'] },
  { state: 'New York', offices: 'Remote Coverage', cities: ['New York City', 'White Plains', 'Long Island'] },
  { state: 'Florida', offices: '1 Office', cities: ['Fort Myers / Naples', 'Miami', 'Tampa'] },
]

const OFFICE_PILLS = [
  'Marlborough, MA', 'Boston, MA', 'Burlington, MA',
  'Lincoln, RI', 'Glastonbury, CT', 'Shelton, CT', 'Fort Myers, FL',
]

const TESTIMONIALS = [
  {
    quote: '"We needed a Controller in Boston on short notice. Complete Staffing had three qualified candidates in front of us within four days. Hired one immediately. That\'s the kind of speed you don\'t get from the big national firms."',
    name: 'Michael R.',
    role: 'CFO, Financial Services Firm — Boston, MA',
    initials: 'MR',
    avatarBg: '#DBEAFE',
    avatarColor: '#1E40AF',
    stars: 5,
  },
  {
    quote: '"Our Hartford hospital needed Registered Nurses fast. Complete Staffing\'s healthcare team understood exactly what we needed, pre-screened every candidate, and had qualified nurses starting within two weeks."',
    name: 'Sarah L.',
    role: 'HR Director, Regional Medical Center — Hartford, CT',
    initials: 'SL',
    avatarBg: '#DCFCE7',
    avatarColor: '#166534',
    stars: 5,
  },
  {
    quote: '"Found my Civil Engineering role in Naples through Complete Staffing. They actually understood the PE licensure requirements and connected me with the right firm. Couldn\'t have done it without them."',
    name: 'Tom W., PE',
    role: 'Civil Engineer — Naples, FL',
    initials: 'TW',
    avatarBg: '#FEF9C3',
    avatarColor: '#854D0E',
    stars: 5,
  },
]

/* ── PAGE COMPONENT ──────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero — Complete Staffing Solutions">
        <div className="hero-canvas" aria-hidden="true" />
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-inner">

          {/* Left copy */}
          <div className="hero-left">
            <div className="hero-logo-circle" aria-hidden="true">
              <img
                src="/logo.svg"
                alt="Complete Staffing Solutions"
                className="hero-logo-img"
              />
            </div>
            <div className="hero-kicker">
              <span className="kicker-dot" aria-hidden="true" />
              <span>Nationwide Staffing Agency — All 50 States</span>
            </div>
            <h1 className="hero-h1">
              The right hire.<br />
              <em>Right now.</em><br />
              <span className="line2">Every market.</span>
            </h1>
            <p className="hero-sub">
              Complete Staffing Solutions places{' '}
              <strong>qualified professionals across all 50 states</strong> — with deep expertise and
              7 regional offices in the Northeast and Florida. Healthcare, Finance, Engineering, and
              Administrative roles filled through direct hire, temp-to-hire, contract, and{' '}
              <strong>retained search</strong>.
            </p>
            <div className="hero-btns">
              <Link href="/job-request" className="btn btn-green btn-xl">
                Hire Talent Now →
              </Link>
              <Link href="/open-position" className="btn btn-ghost-light btn-xl">
                Search Open Jobs
              </Link>
            </div>
            <div className="hero-stats" aria-label="Key statistics">
              {[
                { num: '25+', label: 'Years Experience' },
                { num: '50K+', label: 'Placements Made' },
                { num: '35K+', label: 'Companies Served' },
                { num: '7', label: 'Regional Offices' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right search card */}
          <div className="hero-card" role="search" aria-label="Job search">
            <div className="card-label">Find Your Next Role</div>
            <div className="card-title">Search 1,000+ open positions</div>
            <div className="card-sub">Healthcare · Finance · Engineering · Admin</div>
            <input className="card-field" type="text" placeholder="Job title, keyword, or specialty…" aria-label="Keywords" />
            <input className="card-field" type="text" placeholder="City, state, or zip code…" aria-label="Location" />
            <select className="card-field" aria-label="Industry">
              <option value="">All Industries</option>
              <option>Healthcare &amp; Nursing</option>
              <option>Financial Services &amp; Accounting</option>
              <option>Engineering &amp; Manufacturing</option>
              <option>Administrative &amp; Office</option>
              <option>Real Estate</option>
              <option>Executive &amp; Management</option>
            </select>
            <Link href="/open-position" className="card-btn">
              Search Open Positions →
            </Link>
            <div className="card-tags" aria-label="Popular searches">
              {['Registered Nurse', 'Staff Accountant', 'Civil Engineer', 'Medical Assistant', 'Controller'].map(t => (
                <span key={t} className="card-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAND ─────────────────────────────────────────── */}
      <div className="trust-band" role="complementary" aria-label="Trust indicators">
        <div className="trust-inner">
          {[
            '✅ Direct Hire Specialists',
            '⚡ Temp-to-Hire & Contract Staffing',
            '🔍 Retained Search for Executive Roles',
            '🏥 Healthcare · 💰 Finance · ⚙️ Engineering',
            '🇺🇸 Placing candidates in all 50 states',
          ].map((item, i, arr) => (
            <span key={item} className="trust-item-wrap">
              <span className="trust-item" dangerouslySetInnerHTML={{ __html: item }} />
              {i < arr.length - 1 && <span className="trust-div" aria-hidden="true" />}
            </span>
          ))}
        </div>
      </div>

      {/* ── INDUSTRIES ─────────────────────────────────────────── */}
      <section className="section" aria-labelledby="industries-heading">
        <div className="wrap">
          <div className="sec-row">
            <div className="sec-hd">
              <span className="sec-label">What We Place</span>
              <h2 className="sec-h2" id="industries-heading">Staffing specialists in every discipline</h2>
              <p className="sec-sub">
                Our recruiters don&apos;t just fill roles — they specialize in the industries they hire for.
                With placements across all 50 states and deep local knowledge in New England and Florida,
                every candidate we present has been personally vetted for the role, the team, and the culture.
              </p>
            </div>
            <Link href="/industries-we-serve" className="btn btn-outline">View All Industries →</Link>
          </div>

          <div className="industries-grid">
            {INDUSTRIES.map(({ icon, title, desc, roles, link, label }) => (
              <article key={title} className="ind-card">
                <div className="ind-ico" aria-hidden="true">{icon}</div>
                <h3 className="ind-title">{title}</h3>
                <p className="ind-desc">{desc}</p>
                <div className="ind-roles">
                  {roles.map(r => <span key={r} className="ind-role">{r}</span>)}
                </div>
                <Link href={link} className="ind-link">{label} →</Link>
              </article>
            ))}

            {/* Retained Search card */}
            <article className="ind-card ind-card-retained">
              <div className="ind-ico ind-ico-navy" aria-hidden="true">🎯</div>
              <h3 className="ind-title">Retained Search</h3>
              <p className="ind-desc">
                For senior-level and hard-to-fill roles, our retained search practice delivers a dedicated,
                exclusive recruiting effort — with full market mapping, confidential outreach, and a
                guaranteed shortlist.
              </p>
              <div className="ind-roles">
                {['C-Suite & VP', 'Director-Level', 'Confidential Search', 'Nationwide'].map(r => (
                  <span key={r} className="ind-role">{r}</span>
                ))}
              </div>
              <Link href="/why-choose-us" className="ind-link ind-link-sky">Learn About Retained Search →</Link>
            </article>

            {/* Nationwide CTA card */}
            <article className="ind-card ind-card-dark">
              <div className="ind-dark-ico" aria-hidden="true">🌎</div>
              <h3 className="ind-dark-title">Placing in all 50 states</h3>
              <p className="ind-dark-desc">
                Don&apos;t see your location or industry? We staff across dozens of disciplines and place
                candidates coast to coast. Tell us what you need.
              </p>
              <Link href="/industries-we-serve" className="btn btn-green btn-sm">View All Industries →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── WHY CSS ────────────────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="why-heading">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-copy">
              <span className="sec-label">Why Complete Staffing Solutions</span>
              <h2 className="sec-h2" id="why-heading">25 years placing the right people in the right roles.</h2>
              <p>
                Since 1999, Complete Staffing Solutions has been one of the most trusted staffing agencies
                in the country. We don&apos;t operate like a resume-forwarding service — our recruiters
                specialize in the fields they hire for, which means every candidate we present has been
                personally vetted for the role, the team, and the culture.
              </p>
              <p>
                Whether you&apos;re a <strong>healthcare organization in Hartford, CT</strong> needing a
                Registered Nurse on short notice, a <strong>financial services firm in Boston, MA</strong>{' '}
                seeking a Controller, an <strong>engineering company in Naples, FL</strong> looking for a
                licensed PE, or a company <strong>anywhere in the country</strong> conducting a confidential
                executive search — our team delivers.
              </p>
              <p>
                We offer <strong>direct hire, temp-to-hire, contract, retained search, and executive search</strong>{' '}
                placements across all 50 states, with 7 physical offices serving the Northeast and Florida.
                Our recruiters average over 8 years in their specialty and maintain active relationships with
                thousands of pre-screened candidates ready to go.
              </p>
              <div className="feat-list">
                {[
                  { icon: '🎯', title: 'Specialized Recruiters', desc: 'Every recruiter focuses on one discipline — healthcare, finance, or engineering. No generalists, no guesswork.' },
                  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most placements are completed within 5–10 business days. Urgent roles filled in 48 hours when needed.' },
                  { icon: '📍', title: 'Nationwide Reach, Local Expertise', desc: 'We place candidates in all 50 states, with 7 regional offices in CT, RI, MA, NY, and FL giving us deep local market knowledge.' },
                  { icon: '🎯', title: 'Retained Search Available', desc: 'For senior, confidential, or hard-to-fill roles, our retained search practice provides an exclusive, dedicated recruiting effort with a guaranteed shortlist.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="feat">
                    <div className="feat-ico" aria-hidden="true">{icon}</div>
                    <div>
                      <div className="feat-name">{title}</div>
                      <div className="feat-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="why-ctas">
                <Link href="/why-choose-us" className="btn btn-navy btn-lg">Why Choose Us</Link>
                <Link href="/our-recruiting-process" className="btn btn-outline btn-lg">Our Process</Link>
              </div>
            </div>

            {/* Stats card */}
            {/*
            <div className="why-card">
              <div className="wc-num">50K<span className="wc-plus">+</span></div>
              <div className="wc-label">Successful placements since 1999</div>
              <div className="wc-bars">
                {[
                  { label: 'Healthcare', pct: 78, color: 'var(--green3)' },
                  { label: 'Finance & Acctg', pct: 65, color: 'var(--sky2)' },
                  { label: 'Engineering', pct: 55, color: '#A78BFA' },
                  { label: 'Admin & Other', pct: 42, color: '#FB923C' },
                ].map(({ label, pct, color }) => (
                  <div key={label} className="wc-bar-row">
                    <span className="wc-bar-label">{label}</span>
                    <div className="wc-bar-track">
                      <div className="wc-bar-fill" style={{ width: `${pct}%`, background: color }} />
                    </div>
                    <span className="wc-bar-pct">{pct}%</span>
                  </div>
                ))}
              </div>
              <div className="wc-footer">
                <div className="wc-footer-label">Employer satisfaction rate</div>
                <div className="wc-footer-row">
                  <span className="wc-footer-num">94%</span>
                  <span className="wc-footer-sub">of employers re-engage within 90 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section className="section section-navy" aria-labelledby="process-heading">
        <div className="wrap">
          <div className="sec-hd tc">
            <span className="sec-label sec-label-light">Our Process</span>
            <h2 className="sec-h2 sec-h2-light" id="process-heading">From job order to first day in 4 steps</h2>
            <p className="sec-sub sec-sub-light mx-auto">
              We move fast — most placements are completed within 5–10 business days. Here&apos;s how it works.
            </p>
          </div>
          <div className="steps">
            {[
              { n: '1', title: 'Submit a Job Order', desc: 'Tell us the role, location, and requirements. Our team assigns a specialist recruiter in that discipline within 24 hours.' },
              { n: '2', title: 'We Source & Screen', desc: 'Your recruiter taps our active network of pre-screened professionals and conducts thorough candidate evaluations.' },
              { n: '3', title: 'Review Top Candidates', desc: 'We present a shortlist of 3–5 fully vetted candidates with profiles, compensation expectations, and availability.' },
              { n: '4', title: 'Hire with Confidence', desc: 'Interview, select, and onboard your new hire. We handle the paperwork, stay involved, and guarantee placement quality.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="step">
                <div className="step-n" aria-hidden="true">{n}</div>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
          <div className="steps-cta">
            <Link href="/our-recruiting-process" className="btn btn-green btn-lg">
              Learn More About Our Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARKETS ────────────────────────────────────────────── */}
      <section className="markets-section" aria-labelledby="markets-heading">
        <div className="wrap">
          <div className="markets-intro">
            <span className="sec-label">Where We Work</span>
            <h2 className="sec-h2" id="markets-heading">Seven offices. All 50 states. One team.</h2>
            <p>
              Complete Staffing Solutions places candidates <strong>nationwide</strong> — from Maine to
              California — with 7 regional offices providing deep local expertise in the Northeast and
              Florida. Whether your search is local or requires us to recruit across the country, we have
              the network and the reach to find the right person.
            </p>
          </div>
          <div className="markets-grid" role="list">
            {MARKETS.map(({ state, offices, cities }) => (
              <div key={state} className="market-card" role="listitem">
                <div className="market-flag" aria-hidden="true">🔵</div>
                <div className="market-state">{state}</div>
                <div className="market-offices">{offices}</div>
                <div className="market-cities">
                  {cities.map(c => <span key={c} className="market-city">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="offices-strip" aria-label="Regional office locations">
            <div className="offices-label">Regional Offices</div>
            {OFFICE_PILLS.map(o => (
              <Link key={o} href="/contact" className="office-pill">📍 {o}</Link>
            ))}
            <div className="offices-cta">
              <Link href="/contact" className="btn btn-green">Find Your Office →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ────────────────────────────────────────── */}
      <section className="seo-section" aria-labelledby="about-seo-heading">
        <div className="wrap">
          <div className="seo-grid">
            <div className="seo-copy">
              <h2 id="about-seo-heading">
                A staffing agency with nationwide reach — and the local expertise to back it up.
              </h2>
              <p>
                Complete Staffing Solutions was founded in 1999 with a clear mission: connect exceptional
                professionals with the organizations that need them most — with more care, more speed, and
                more expertise than a national staffing firm can offer. More than two decades later, that
                mission drives everything we do, in every state.
              </p>
              <p>
                We are not a generalist agency. <strong>We specialize.</strong> Our healthcare division
                recruits exclusively for medical and clinical roles. Our finance and accounting team speaks
                the language of CFOs and Controllers. Our engineering recruiters have backgrounds in the
                industries they staff. And our retained search practice conducts confidential, exclusive
                searches for senior and hard-to-fill roles anywhere in the country.
              </p>
              <p>
                While our roots are in New England and our 7 offices span Connecticut, Rhode Island,
                Massachusetts, New York, and Florida —{' '}
                <strong>we place candidates across all 50 states.</strong> From manufacturing plants in the
                Midwest to technology firms on the West Coast, CSS recruiters find the right hire wherever
                the search takes us.
              </p>

              <h3>Staffing in Connecticut, Rhode Island &amp; Massachusetts</h3>
              <p>
                Our Northeast offices — in <strong>Glastonbury and Shelton, CT</strong>,{' '}
                <strong>Lincoln, RI</strong>, and <strong>Marlborough, Boston, and Burlington, MA</strong>{' '}
                — serve as the heart of our operations. The Hartford corridor, Greater Boston, and
                Providence markets are among the most active in the country for healthcare and financial
                services talent, and our local recruiters have spent years building relationships with top
                employers and candidates in each market.
              </p>

              <h3>Staffing in New York &amp; Florida</h3>
              <p>
                Our <strong>New York</strong> coverage extends throughout the metro area, Westchester, and
                Long Island. In <strong>Florida</strong>, our <strong>Fort Myers</strong> office serves
                Southwest Florida including Naples, Cape Coral, and the greater Collier and Lee County
                markets — one of the fastest-growing hiring corridors in the country for healthcare and
                engineering professionals.
              </p>

              <h3>Retained Search — For the Roles That Matter Most</h3>
              <p>
                When the hire is too important to leave to chance, our{' '}
                <strong>retained search practice</strong> provides a dedicated, exclusive recruiting
                engagement. We conduct comprehensive market mapping, manage confidential outreach, and
                present a guaranteed shortlist of qualified senior candidates — nationwide. Retained
                engagements are available for C-suite, VP, and director-level roles in all disciplines.
              </p>
            </div>

            <div className="seo-right">
              {[
                {
                  icon: '🏥',
                  title: 'Healthcare Staffing',
                  body: 'Registered Nurses, LPNs, Medical Assistants, CNAs, Nurse Practitioners, Healthcare Administrators, Phlebotomists, and more. Serving hospitals, outpatient clinics, long-term care, and private practices nationwide.',
                },
                {
                  icon: '💰',
                  title: 'Finance & Accounting Staffing',
                  body: 'Staff Accountants, Controllers, CFOs, Bookkeepers, Financial Analysts, Payroll Specialists, Compliance Officers, and Audit professionals. Direct hire and contract placements for firms from small businesses to Fortune 500.',
                },
                {
                  icon: '⚙️',
                  title: 'Engineering Staffing',
                  body: 'Civil, Mechanical, Electrical, and Structural Engineers. Project Managers, QA/QC Technicians, CAD Designers, and Construction Managers. PE licensure placement specialists for CT, RI, MA, NY, and FL.',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="seo-callout">
                  <div className="seo-callout-title">{icon} {title}</div>
                  <p>{body}</p>
                </div>
              ))}

              <div className="seo-callout">
                <div className="seo-callout-title">📋 Placement Types We Offer</div>
                <ul className="seo-callout-list">
                  {['Direct Hire (Permanent Placement)', 'Temp-to-Hire (Contract with conversion option)', 'Contract / Temporary Staffing', 'Retained Search & Executive Search', 'Payroll Services'].map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="seo-callout seo-callout-dark">
                <div className="seo-callout-title seo-callout-title-green">📞 Talk to a Recruiter Today</div>
                <p className="seo-callout-body-light">
                  Ready to hire or looking for your next role? Call{' '}
                  <a href="tel:+14014758800" className="seo-link-green">(401) 475-8800</a> or email{' '}
                  <a href="mailto:Contactus@completestaffingsolutions.com" className="seo-link-green">
                    Contactus@completestaffingsolutions.com
                  </a>. Our team responds within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="testimonials-heading">
        <div className="wrap">
          <div className="sec-hd tc">
            <span className="sec-label">What Clients Say</span>
            <h2 className="sec-h2" id="testimonials-heading">
              Trusted by employers &amp; job seekers nationwide
            </h2>
          </div>
          <div className="test-grid">
            {TESTIMONIALS.map(({ quote, name, role, initials, avatarBg, avatarColor, stars }) => (
              <div key={name} className="test-card">
                <div className="test-stars" aria-label={`${stars} stars`}>
                  {'★'.repeat(stars)}
                </div>
                <blockquote className="test-quote">{quote}</blockquote>
                <div className="test-author">
                  <div
                    className="test-av"
                    style={{ background: avatarBg, color: avatarColor }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="test-name">{name}</div>
                    <div className="test-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────── */}
      <section className="section" aria-labelledby="cta-heading">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2 id="cta-heading">Ready to make your next hire?</h2>
              <p>Tell us about the role. We&apos;ll have candidates in front of you faster than you expect.</p>
            </div>
            <div className="cta-btns">
              <Link href="/job-request" className="btn btn-green btn-lg">Place a Job Request</Link>
              <Link href="/open-position" className="btn btn-ghost-light btn-lg">Search Jobs →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
