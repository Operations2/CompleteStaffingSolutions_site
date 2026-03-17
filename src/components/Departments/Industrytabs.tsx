"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

export default function IndustryTabs() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const industries = [
    "Accounting",
    "Administrative",
    "Engineering",
    "Finance",
    "Healthcare",
    "Information Technology",
    "Sales",
  ];

  const positions = {
    column1: ["Accounting Manager", "Finance Manager", "Credit Analyst", "Financial Analyst", "Staff and Senior Accountants", "Payroll Specialists", "Collections Specialist", "Accounting Managers", "Administrative Assistant"],
    column2: ["Bookkeepers", "AP & AR Specialist", "Credit & Collections", "Office Manager", "Executive Assistant", "Administrative Assistant", "Receptionist", "Human Resource Assistant", "Coder"],
    column3: ["Marketing Assistant", "Customer Service Representative", "Data Entry Specialist", "Medical Billing Professionals", "Medical Receptionist", "Medical Secretary", "Mortgage Professionals", "Loan Officers", "Receptionist"],
    column4: ["Registered Nurse", "Physical Therapist", "Medical Assistant", "Phlebotomist", "Dental Assistant", "Patient Care Technician", "Medical Biller", "Medical Secretary"],
  };

  return (
    <section ref={sectionRef} className="w-full font-[var(--font-inter)]">
      <div className="w-full bg-[#B9C6DC] py-10 px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="reveal revealUp bg-white max-w-[900px] mx-auto rounded-lg mb-4 relative">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type="text"
                placeholder="Search industries (e.g Healthcare, Legal...)"
                className="w-full py-3 px-4 pl-9 border border-gray-300 rounded outline-none text-sm text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="reveal revealUp delay-1 flex flex-wrap justify-center gap-2">
            {industries.map((industry, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndustry(index)}
                className={`px-5 py-2 rounded border cursor-pointer transition-all duration-300 ${
                  index === activeIndustry
                    ? "bg-[#19478E] text-white border-[#19478E]"
                    : "bg-white text-black border-[#19478E] hover:bg-[#19478E] hover:text-white"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-8 px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 -mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[positions.column1, positions.column2, positions.column3, positions.column4].map((col, i) => (
            <div key={i}>
              <ul className="list-none p-0 m-0">
                {col.map((position, idx) => (
                  <li
                    key={idx}
                    className="relative pl-3 mb-2 text-gray-700 before:content-['•'] before:absolute before:left-0 before:font-bold before:text-black"
                  >
                    {position}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
