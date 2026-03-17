import Image from "next/image";

interface Props {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function IndustryWelcome({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <section className="w-full bg-[#f8f9fa] py-10 sm:py-14 md:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-14">
        <div className="w-full max-w-[1200px] 2xl:max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <h2 className="font-[var(--font-plus-jakarta)] text-[clamp(30px,4vw,40px)] font-bold text-[#022d6d] m-0 leading-tight">
              {title}
            </h2>
            <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-[#666] m-0">
              {description}
            </p>
            <div className="flex flex-col gap-3 mt-1.5">
              {features.map((label) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#4A7BAD] text-white flex items-center justify-center text-base font-bold flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333] font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full aspect-[1.15/1] max-w-[460px] md:max-w-[520px] mx-auto md:mx-0 order-1 md:order-2 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
