import Link from "next/link";
import Image from "next/image";

const ROLES = [
  { icon: "🏢", title: "Property Manager", description: "Directing the daily operations and maintenance of residential or commercial sites.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/property cards/1.jpg" },
  { icon: "🏠", title: "Real Estate Broker", description: "Facilitating property transactions and building high-value client relationships.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/property cards/2.jpg" },
  { icon: "🔑", title: "Leasing Consultant", description: "Managing property showings and coordinating new lease agreements with tenants.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/property cards/3.jpg" },
  { icon: "🛠️", title: "Maintenance Lead", description: "Overseeing repairs and facility upgrades to ensure property value and safety.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/property cards/4.jpg" },
];

export default function IndustryRoles() {
  return (
    <section className="w-full bg-[#f8f9fa] py-12 sm:py-14 md:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto">
          <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(28px,4vw,36px)] font-bold text-[#1a1a1a] m-0 mb-12 leading-tight">
            Roles We Fill
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {ROLES.map((role, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
              >
                <div className="relative w-full aspect-[1.8/1] overflow-hidden">
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  />
                </div>

                <div className="flex flex-col gap-3 p-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[20px] ${
                        role.buttonColor === "blue"
                          ? "bg-[#4A7BAD]"
                          : "bg-[#6CA642]"
                      }`}
                    >
                      <span>{role.icon}</span>
                    </div>
                    <h3 className="m-0 font-[var(--font-plus-jakarta)] text-[18px] font-bold text-[#1a1a1a] leading-snug">
                      {role.title}
                    </h3>
                  </div>

                  <p className="m-0 flex-1 text-[14px] leading-relaxed text-[#666]">
                    {role.description}
                  </p>

                  <Link
                    href="/job-request"
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] font-semibold text-white no-underline transition-all duration-300 ${
                      role.buttonColor === "blue"
                        ? "bg-[#4A7BAD] hover:bg-[#3d6a9a] hover:shadow-[0_4px_12px_rgba(74,123,173,0.3)]"
                        : "bg-[#6CA642] hover:bg-[#5d9338] hover:shadow-[0_4px_12px_rgba(108,166,66,0.3)]"
                    }`}
                  >
                    {role.buttonText}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
