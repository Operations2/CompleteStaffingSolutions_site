"use client";

import { useState } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const sections = [
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "cookie-policy", label: "Cookie Policy" },
];

export default function PoliciesSidebar() {
  const [activeSection, setActiveSection] = useState("privacy-policy");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      className={`${jakarta.variable} ${inter.variable} hidden lg:block max-w-[250px] whitespace-nowrap rounded-lg bg-white shadow-md sticky top-24 border border-gray-300 rounded-md`}
    >
      <h3 className="text-[19px] font-bold px-4 py-3 border-b-2 border-gray-200 bg-[#B9C6DC] text-[#19478E] font-[var(--font-jakarta)]">
        Table of Contents
      </h3>
      <ul className="list-none m-0 p-0">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`px-3 py-2.5 text-[16px] text-gray-500 cursor-pointer transition-all border-l-[3px] border-transparent font-[var(--font-inter)] hover:bg-gray-50 hover:text-neutral-900 hover:border-gray-200 ${
              activeSection === section.id
                ? "border-[#19478E] text-[#19478E] font-semibold"
                : ""
            }`}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
