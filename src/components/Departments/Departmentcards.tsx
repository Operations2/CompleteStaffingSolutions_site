"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Icons = {
  accounting: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8"/><path d="M8 17h8"/></svg>,
  administrative: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
  engineering: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  finance: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  it: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  healthcare: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  sales: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
};

const DEPARTMENTS = [
  {
    id: "accounting",
    title: "Accounting",
    icon: Icons.accounting,
    image: "/departments/acc.webp",
    industries: ["Finance", "Manufacturing", "Retail", "Nonprofit", "Legal"],
    positions: [
      "Accounting Manager",
      "Accounts Payable",
      "Accounts Receivable",
      "Accounting Systems Development",
      "Controller/Assistant Controller",
      "Corporate Accounting",
      "Cost Accounting",
      "Federal taxes",
      "Financial Policies and Procedures",
      "Financial Reporting",
      "General Accounting",
      "Internal Audit",
      "International Accounting",
      "IT Audit",
      "Tax Research and Compliance",
      "Technical Accounting",
      "Public Accounting",
      "Payroll Bookkeeper",
      "Property taxes",
      "SEC Reporting",
      "State taxes",
    ],
  },
  {
    id: "administrative",
    title: "Administrative",
    icon: Icons.administrative,
    image: "/departments/admin.webp",
    industries: ["Education", "Healthcare", "Legal", "Real Estate", "Agriculture"],
    positions: [
      "Administrative Assistants",
      "Benefits Analysts",
      "Collections Agent",
      "Contract Recruiters",
      "Customer Service",
      "Customer Service Manager",
      "Customer Service Representative",
      "Data Analysts",
      "Data Entry Clerks",
      "General Office Clerks",
      "Human Resource Directors",
      "Human Resource Generalists",
      "Human Resource Managers",
      "Inside Sales Representatives",
      "Loan Processors",
      "Mail/File Clerks",
      "Marketing Professionals",
      "Mortgage Underwriters",
      "Office Managers",
      "Post Closers",
      "Receptionist",
      "Sales Assistants",
      "Secretaries",
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: Icons.engineering,
    image: "/departments/eng.webp",
    industries: ["Construction", "Energy & Mining", "Manufacturing", "Agriculture"],
    positions: [
      "Alternative Energy Consultants",
      "Analog/Digital Design Engineers",
      "Application Engineers",
      "CAD Drafters/Designers",
      "Chemical Engineers",
      "Civil Engineers",
      "CNC Programmers",
      "Controls Engineers",
      "Electrical Engineers",
      "Embedded/Firmware Engineers",
      "Engineering Management",
      "Environmental Engineers",
      "Geotechnical Engineers",
      "HVAC Engineers",
      "Industrial Engineers",
      "Manufacturing Engineers",
      "Mechanical Engineers",
      "MEP Engineers",
      "Packaging Engineers",
      "PCB Design",
      "Plumbing Design Engineers",
      "Process Engineers",
      "Product Engineers",
      "Project Managers",
      "QA/Test Engineers",
      "Quality Engineers",
      "RF Engineers",
      "Robotics/Automation Engineers",
      "SCADA Engineers",
      "Structural Engineers",
      "Systems Engineers",
    ],
  },
  {
    id: "finance",
    title: "Finance",
    icon: Icons.finance,
    image: "/departments/finance.webp",
    industries: ["Legal"],
    positions: [
      "Budgeting & Forecasting",
      "CFO",
      "Financial Analysis",
      "Financial Planning",
      "Investor Relations",
      "Strategic Development",
      "Strategic Planning",
      "Treasury/Cash Management",
      "VP Finance",
    ],
  },
  {
    id: "it",
    title: "IT",
    icon: Icons.it,
    image: "/departments/IT.webp",
    industries: ["Hardware", "Design", "Entertainment"],
    positions: [
      ".Net / C# Developer",
      "Android / Mobile Developer",
      "Application Developers",
      "Business Analyst",
      "Business Intelligence",
      "Casino IT Staff",
      "Data Warehousing",
      "CIO/CTO",
      "Web Developers",
      "Help Desk Support",
      "IT Project Managers",
      "Systems Engineer",
      "IT Management",
      "Security Positions",
      "Java/JavaScript Developer",
      "SQL Server DBA",
      "Network Administrator",
      "NOC Engineer",
      "Oracle Positions",
      "QA Testing",
      "SAP Positions",
      "Sharepoint Developers",
      "Systems Analyst",
      "Virtualization Engineer",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Icons.healthcare,
    image: "/departments/health.webp",
    industries: ["Wellness & Fitness"],
    positions: [
      "Central Sterile Technician",
      "Dental Assistant",
      "Medical Assistant",
      "Occupational Therapist",
      "Phlebotomist",
      "Physical Therapist",
      "Respiratory Therapist",
      "Speech Pathologist",
      "X-Ray Technician",
      "Medical Biller",
      "Medical Records Clerk",
      "Medical Secretary",
      "Advanced Practice",
      "Nurse Practitioner",
      "Physician Assistant",
      "Registered Nurse",
      "Certified Nursing Assistant",
    ],
  },
  {
    id: "sales",
    title: "Sales & Marketing",
    icon: Icons.sales,
    image: "/departments/sales.webp",
    industries: ["Consumer Goods", "Media", "Arts", "Logistics", "Recreation & Travel"],
    positions: [
      "Account Executives",
      "Account Management",
      "Call Center Managers",
      "Channel Sales",
      "Director of Customer Service",
      "Director of Sales Recruiting",
      "Entry-level Sales",
      "Inside Sales",
      "Lead Generation",
      "New Business Development",
      "Outside Sales",
      "Sales Management",
      "Sales Support Specialist",
      "Sales Training Specialist",
      "VP of Sales Recruiting",
    ],
  },
];

const formatSlug = (name: string) => name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

export default function DepartmentCards() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"industries" | "positions">("positions");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    setActiveTab("positions");
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-16 bg-[#fcfdfe]">
      <div className="w-full max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept) => {
            const IconComp = dept.icon;
            const isOpen = expandedId === dept.id;
            return (
              <div
                key={dept.id}
                className={`flex flex-col overflow-hidden bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out group hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] p-2 ${
                  isOpen ? "ring-2 ring-[#19478e] ring-offset-2 ring-offset-[#fcfdfe]" : ""
                }`}
              >
                <div className="relative w-full overflow-hidden aspect-[1.25/1]">
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className="object-cover transition-transform duration-300 p-[9px] rounded-[20px] group-hover:scale-[1.02]"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 280px"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-[#6ca642] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-[1.05] group-hover:-translate-y-0.5">
                    <IconComp />
                  </div>
                </div>

                <div className="flex flex-col flex-1 gap-2 px-4 pt-4 pb-5">
                  <h3 className="text-[17px] font-extrabold text-[#0d0d0d] m-0">
                    {dept.title}
                  </h3>
                  {/* Toggle button – behavior unchanged, just styled like primary action */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(dept.id)}
                    className="relative inline-flex items-center justify-center gap-2 h-[40px] px-[16px] mt-1 text-[14px] font-semibold text-[#19478e] bg-transparent border border-[#d5e2f5] rounded-md cursor-pointer transition-all duration-300 hover:bg-[#19478e] hover:text-white hover:shadow-[0_4px_12px_rgba(25,71,142,0.35)]"
                  >
                    {isOpen ? "Close Details" : "View Details"}
                  </button>
                </div>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out px-4 pb-5 pt-0 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pt-4 border-t border-slate-200 mt-2">
                      <div className="flex gap-5 mb-3 pb-3 border-b border-slate-200">
                        <button
                          type="button"
                          onClick={() => setActiveTab("positions")}
                          className={`bg-transparent border-none py-1.5 font-bold text-sm cursor-pointer transition-colors ${
                            activeTab === "positions"
                              ? "text-[#19478e] border-b-2 border-[#19478e] -mb-[3px] pb-1.5"
                              : "text-slate-400"
                          }`}
                        >
                          Positions
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab("industries")}
                          className={`bg-transparent border-none py-1.5 font-bold text-sm cursor-pointer transition-colors ${
                            activeTab === "industries"
                              ? "text-[#19478e] border-b-2 border-[#19478e] -mb-[3px] pb-1.5"
                              : "text-slate-400"
                          }`}
                        >
                          Industries
                        </button>
                      </div>
                      <div className="max-h-[300px] overflow-y-auto pr-2.5 mb-5 [scrollbar-width:thin] [scrollbar-color:theme(colors.slate.300)_transparent]">
                        <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                          {activeTab === "industries"
                            ? dept.industries.map((item, i) => (
                                <li key={i} className="text-sm text-slate-600 flex items-center gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#6ca642] flex-shrink-0" />
                                  <Link
                                    href={`/industries-we-serve/${formatSlug(item)}`}
                                    className="text-inherit no-underline transition-colors hover:text-[#19478e] hover:font-semibold"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))
                            : dept.positions.map((item, i) => (
                                <li key={i} className="text-sm text-slate-600 flex items-center gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#6ca642] flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
