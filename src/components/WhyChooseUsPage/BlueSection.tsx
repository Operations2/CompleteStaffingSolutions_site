"use client";
import { CheckIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BlueSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      title: "Save time",
      description:
        "We source, screen, and present only qualified candidates.",
    },
    {
      title: "Reduce costs",
      description:
        "No benefits, payroll processing, or unemployment liability on temp hires.",
    },
    {
      title: "Increase flexibility",
      description:
        "Scale your workforce up or down as demand changes.",
    },
    {
      title: "Reduce risk",
      description:
        "Evaluate fit before making a permanent commitment.",
    },
    {
      title: "Boost productivity",
      description:
        "Fill gaps fast without pulling your team off their core work.",
    },
    {
      title: "Streamline hiring",
      description:
        "One call. One partner. Every discipline.",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#E5EDF8]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-[60px] py-10 sm:py-12 lg:py-14">
        <div
          className={`opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
        >
          <h2 className="font-(family-name:--font-plus-jakarta) font-extrabold leading-[1.05] text-neutral-900 text-[26px] sm:text-[32px] lg:text-[40px] tracking-tight">
            WHY USE{" "}
            <span className="text-[#1c5aa8]">A STAFFING FIRM?</span>
          </h2>
          <div className="mt-4 h-[3px] w-[46px] rounded-full bg-[#6ca642]" />
          <p className="mt-5 font-(family-name:--font-inter) text-[15px] sm:text-[16px] leading-[1.75] text-neutral-800 max-w-[980px]">
            Hiring takes time you don&apos;t have. By partnering with Complete
            Staffing Solutions, you transfer the cost and complexity of
            sourcing, screening, and onboarding directly to us — so your team
            can stay focused on the work that matters. On average, employee
            benefits add 20–25% on top of base payroll. When you hire through
            CSS, those costs stay with us — not you. And because temporary
            placements work for CSS, not your company directly, their
            unemployment claims don&apos;t affect your bottom line.
          </p>
        </div>

        <div className="">
          <div
            className={`opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
              isVisible ? "opacity-100 translate-none" : ""
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 py-7 sm:py-8">
              {items.map((item, idx) => (
                <div
                  key={item.title}
                  className={`flex items-center gap-3 opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? "opacity-100 translate-y-0" : ""
                  }`}
                  style={{ transitionDelay: `${300 + idx * 60}ms` }}
                >
                  <span className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.10)]">
                    <CheckIcon className="text-[#6ca642] h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-(family-name:--font-inter) text-[15px] sm:text-[18px] lg:text-[19px] font-semibold text-neutral-900"> 
                      {item.title}
                    </span>
                    <span className="font-(family-name:--font-inter) text-[13px] sm:text-[15px] lg:text-[15px] text-neutral-800 mt-0.5 max-w-[280px]">
                      {item.description}
                    </span >
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}