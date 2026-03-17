import Image from "next/image";

export default function IndustryWelcome() {
  return (
    <section className="w-full bg-[#f8f9fa] py-16 sm:py-20 md:py-24">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1280px] 2xl:max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(28px,4vw,36px)] font-bold text-[#022d6d] m-0 leading-tight">
              Welcome to Real Estate Staffing
            </h2>
            <p className="text-base leading-relaxed text-[#666] m-0">
              Providing residential and commercial firms with professionals who
              excel in market knowledge and negotiation.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {[
                "Negotiation skills",
                "Market knowledge",
                "Professional leasing",
              ].map((label) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#4A7BAD] text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-base text-[#333] font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full aspect-[1.2/1] max-w-[600px] md:max-w-none mx-auto md:mx-0 order-1 md:order-2 overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/industries/cards/real estate.webp"
              alt="Real estate professionals"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
