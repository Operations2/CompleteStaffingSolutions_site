"use client";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import TermageddonPolicyEmbed from "./TermageddonPolicyEmbed";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function PoliciesContent() {
  return (
    <div
      className={`${jakarta.variable} ${inter.variable} w-full space-y-10 text-black`}
    >
      <section
        id="privacy-policy"
        className="mb-12 scroll-mt-[120px] rounded-[25px] bg-white p-10 shadow-md border border-gray-300 box-border sm:p-8 xs:p-6"
      >
        <h2 className="text-[24px] font-extrabold text-[#1a1a1a] mb-4 font-[var(--font-jakarta)]">
          Privacy Policy
        </h2>
        <p className="text-[15px] leading-[1.7] text-[#383838] mb-4 font-[var(--font-inter)]">
          Our Privacy Policy is generated and kept up to date by Termageddon.
        </p>
        <TermageddonPolicyEmbed policyId="VldKS1pGaHpObmMyWVdkaWVFRTlQUT09" />
      </section>

      <section
        id="cookie-policy"
        className="mb-0 scroll-mt-[120px] rounded-[25px] bg-white p-10 shadow-md border border-gray-300 box-border sm:p-8 xs:p-6"
      >
        <h2 className="text-[24px] font-extrabold text-[#1a1a1a] mb-4 font-[var(--font-jakarta)]">
          Cookie Policy
        </h2>
        <p className="text-[15px] leading-[1.7] text-[#383838] mb-4 font-[var(--font-inter)]">
          Our Cookie Policy is also managed by Termageddon and details how we
          use cookies and similar technologies.
        </p>
        <TermageddonPolicyEmbed policyId="VEhoS1RVUlFhVGhKYWt4M2FtYzlQUT09" />
      </section>
    </div>
  );
}
