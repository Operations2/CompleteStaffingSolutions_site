import Image from "next/image";

const ASSETS = "/about%20us";

const items = [
  {
    title: "Mission Statement",
    description:
      "Complete Staffing Solutions connects exceptional talent with organizations that demand results. We believe great companies are built by great people. We deliver staffing solutions that fuel growth, productivity and long-term success.",
    icon: `${ASSETS}/mission statement icon.svg`,
    image: `${ASSETS}/mission statement placeholder.jpeg`,
  },
  {
    title: "Our Service Commitment",
    description:
      "Complete Staffing Solutions builds long-term workforce partnerships, not one-time placements. Our recruitment process includes detailed interviews, skills assessments, and reference checks to ensure every candidate aligns with the role, company values, and culture.",
    icon: `${ASSETS}/our services commitmnet to you icon.svg`,
    image: `${ASSETS}/our service placeholder.jpg`,
  },
  {
    title: "Overview",
    description:
      "For over 25 years, Complete Staffing Solutions has connected exceptional talent with forward-thinking organizations across the country. From finance and accounting to healthcare, IT, engineering, legal, and administrative — we place professionals at every level through retained, direct hire, and temporary staffing solutions, with the hands-on service of a boutique firm.",
    icon: `${ASSETS}/overview icon.svg`,
    image: `${ASSETS}/overview placeholder.jpg`,
  },
];

export default function MissionServicesSection() {
  return (
    <section
      className="w-full bg-linear-to-b from-neutral-50 via-white to-neutral-100 py-12 sm:py-16 lg:py-20"
      aria-labelledby="mission-services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 md:gap-12 font-[var(--font-plus-jakarta)] text-neutral-900">
        <header className="max-w-3xl space-y-3">
          <p className="inline-flex items-center rounded-full bg-[#19478e]/5 px-3 py-1 text-xs font-semibold tracking-wide text-[#19478e] uppercase">
            Our mission & services
          </p>
          <h2
            id="mission-services-heading"
            className="text-[clamp(26px,3vw,34px)] font-bold tracking-wide text-neutral-900"
          >
            Built on commitment, driven by people.
          </h2>
          <p className="font-[var(--font-inter)] text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed">
            We combine deep industry expertise with a people-first approach to
            deliver staffing solutions that move organizations forward.
          </p>
        </header>

        {items.map((item, index) => (
          <article
            key={item.title}
            className={`${index === 1 ? "md:flex-row-reverse" : "md:flex-row"} w-full rounded-[26px] bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.10)] ring-1 ring-neutral-100/80 flex flex-col items-stretch md:items-center p-4 sm:p-5 md:p-6 lg:p-7 gap-6 md:gap-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]`}
          >
            {/* Mobile: order 1 — title + icon (small). Desktop: first column with title + description + icon */}
            <div className="order-1 flex flex-col flex-1 min-w-0 gap-4 md:gap-8">
              <div className="lg:border-b border-[#19478e]/30 pb-4 md:pb-5 flex flex-col gap-4">
                <div className="flex sm:flex-row items-center justify-between md:justify-start sm:gap-4 gap-3">
                  <h3 className="font-bold text-[clamp(22px,2.4vw,30px)] leading-tight tracking-wide uppercase">
                    {item.title}
                  </h3>
                  {/* Icon: right after title on mobile only, smaller */}
                  <div className="flex justify-start md:hidden">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#19478e] to-[#6ca642] flex items-center justify-center shrink-0 shadow-lg shadow-[#19478e]/25">
                      <Image
                        src={item.icon.replace(/ /g, "%20")}
                        alt=""
                        width={40}
                        height={40}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-0 invert"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <p className="hidden md:block font-[var(--font-inter)] text-[15px] sm:text-base text-neutral-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Desktop: icon below description (spacer when description is present) */}
              <div className="hidden md:flex justify-start">
                <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-tr from-[#19478e] to-[#6ca642] flex items-center justify-center shrink-0 shadow-lg shadow-[#19478e]/25">
                  <Image
                    src={item.icon.replace(/ /g, "%20")}
                    alt=""
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain brightness-0 invert"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            {/* Mobile: order 2 — image */}
            <div className="order-2 w-full md:w-[520px] md:min-w-[520px] h-40 sm:h-48 md:h-[360px] lg:h-[380px] relative rounded-2xl overflow-hidden shrink-0 group">
              <Image
                src={item.image.replace(/ /g, "%20")}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
            {/* Mobile only: order 3 — description under image */}
            <p className="order-3 md:hidden font-[var(--font-inter)] text-[15px] text-neutral-700 leading-relaxed pt-1">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
