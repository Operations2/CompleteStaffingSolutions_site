"use client";

import { useEffect, useState } from "react";

export default function PoliciesHero() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const baseReveal =
    "opacity-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]";

  return (
    <section className="relative min-h-[380px] xs:min-h-[420px] flex items-center justify-center overflow-hidden py-[60px] pb-10 text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#19478e] via-[#225eb9] to-[#6CA642]" />
      <div className="relative max-w-[1280px] mx-auto px-[60px] max-md:px-6">
        <h1
          className={`${baseReveal} ${
            isActive ? "opacity-100 translate-y-0" : "translate-y-[-30px]"
          } text-[40px] font-bold mt-[17px] mb-3 text-white font-[var(--font-jakarta)]`}
        >
          POLICIES AND{" "}
          <span className="text-[var(--accent)]">DISCLOSURES</span>
        </h1>

        <p
          className={`${baseReveal} ${
            isActive ? "opacity-100 translate-y-0" : "translate-y-[-30px]"
          } delay-[150ms] text-[14px] text-white my-6 font-[var(--font-inter)]`}
        >
          Last updated: Oct 17, 2025 10:47 AM
        </p>

        <div className="mt-4 space-y-4 max-w-[1100px] mx-auto">
          <p
            className={`${baseReveal} ${
              isActive ? "opacity-100 translate-y-0" : "translate-x-[-50px]"
            } delay-[300ms] text-[15px] leading-[1.7] text-white font-[var(--font-inter)]`}
          >
            We value your privacy very highly. Please read this Privacy Policy
            carefully before using the completestaffingsolutions.com website
            (the “Website”) operated by Complete Staffing Solutions, a(n)
            Corporation formed in Massachusetts, United States (“us, we, our”)
            as this Privacy Policy contains important information regarding your
            privacy and how we may use the information we collect about you.
          </p>

          <p
            className={`${baseReveal} ${
              isActive ? "opacity-100 translate-y-0" : "translate-x-[50px]"
            } delay-[450ms] text-[15px] leading-[1.7] text-white font-[var(--font-inter)]`}
          >
            Your access to or use of the Website is conditional upon your
            acceptance of and compliance with this Privacy Policy. This Privacy
            Policy applies to everyone, including but not limited to visitors,
            users and others, who wish to access or use the Website.
          </p>

          <p
            className={`${baseReveal} ${
              isActive ? "opacity-100 translate-y-0" : "translate-y-[30px]"
            } delay-[600ms] text-[15px] leading-[1.7] text-white font-[var(--font-inter)] mb-6`}
          >
            By accessing or using the Website, you agree to be bound by this
            Privacy Policy. If you disagree with any part of this Privacy
            Policy, you do not have our permission to access or use the Website.
          </p>
        </div>
      </div>
    </section>
  );
}