const categories = [
  {
    title: "Finance & Accounting",
    roles: [
      "Controller",
      "Finance Manager",
      "Financial Analyst",
      "Credit Analyst",
      "Staff Accountant",
      "Senior Accountant",
      "Accounting Manager",
      "Payroll Specialist",
      "Bookkeeper",
      "AP Specialist",
      "AR Specialist",
      "Collections Specialist",
      "Credit & Collections Specialist",
    ],
  },
  {
    title: "Administrative & Office Support",
    roles: [
      "Office Manager",
      "Executive Assistant",
      "Administrative Assistant",
      "Receptionist",
      "Data Entry Specialist",
      "Human Resources Assistant",
      "Marketing Assistant",
      "Customer Service Representative",
    ],
  },
  {
    title: "Mortgage & Lending",
    roles: ["Mortgage Professional", "Loan Officer"],
  },
  {
    title: "Information Technology",
    roles: [
      "Software Developer",
      "Systems Administrator",
      "Network Engineer",
      "IT Support Specialist",
      "Data Analyst",
      "Business Analyst",
      "Cybersecurity Analyst",
      "Cloud Engineer",
      "Help Desk Technician",
      "QA Analyst",
      "Project Manager",
      "IT Manager",
    ],
  },
  {
    title: "Engineering",
    roles: [
      "Mechanical Engineer",
      "Civil Engineer",
      "Electrical Engineer",
      "Structural Engineer",
      "Chemical Engineer",
      "Industrial Engineer",
      "Project Engineer",
      "CAD Designer",
      "Quality Control Engineer",
      "Manufacturing Engineer",
      "Environmental Engineer",
      "Engineering Manager",
    ],
  },
  {
    title: "Legal",
    roles: [
      "Paralegal",
      "Legal Assistant",
      "Legal Secretary",
      "Contract Administrator",
      "Compliance Officer",
      "Litigation Support Specialist",
      "Corporate Counsel Support",
      "Legal Billing Specialist",
    ],
  },
  {
    title: "Manufacturing & Light Industrial",
    roles: [
      "Production Supervisor",
      "Quality Control Inspector",
      "Warehouse Associate",
      "Forklift Operator",
      "Machine Operator",
      "Assembly Technician",
      "Shipping & Receiving Clerk",
      "Maintenance Technician",
      "Supply Chain Coordinator",
      "Inventory Control Specialist",
    ],
  },
  {
    title: "Construction & Trades",
    roles: [
      "Project Manager",
      "Site Superintendent",
      "Estimator",
      "Construction Manager",
      "Skilled Tradesperson",
      "Safety Officer",
      "Field Engineer",
      "Scheduler",
    ],
  },
  {
    title: "Healthcare — Clinical",
    roles: [
      "Registered Nurse",
      "Physical Therapist",
      "Medical Assistant",
      "Phlebotomist",
      "Dental Assistant",
      "Patient Care Technician",
    ],
  },
  {
    title: "Healthcare — Administrative",
    roles: [
      "Medical Billing Professional",
      "Medical Coder",
      "Medical Receptionist",
      "Medical Secretary",
      "Surgical Scheduler",
      "Pharmacy Technician",
    ],
  },
];

// Group categories into four columns to display as boxes across the page
const columns = [
  [categories[0], categories[1], categories[2]],
  [categories[3], categories[4]],
  [categories[5], categories[6]],
  [categories[7], categories[8], categories[9]],
];

export default function SpecializeSection() {
  return (
    <section
      className="w-full bg-gradient-to-b from-[#b9c6dc]/40 via-white to-[#e5edf8] py-12 sm:py-16 lg:py-20"
      aria-labelledby="specialize-positions-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 md:gap-10 text-center font-[var(--font-plus-jakarta)] text-neutral-900">
        <div className="space-y-3 max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-[#19478e] uppercase shadow-sm ring-1 ring-[#19478e]/10">
            Roles we specialize in
          </p>
          <h2
            id="specialize-positions-title"
            className="w-full font-bold text-[clamp(26px,3vw,36px)] leading-tight text-center capitalize"
          >
            We specialize in filling the following positions
          </h2>
          <p className="font-[var(--font-inter)] text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed">
            We place skilled professionals across every discipline that keeps
            your organization running.
          </p>
        </div>

        <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 text-left font-[var(--font-inter)] text-neutral-700 text-[15px] sm:text-base">
          {columns.map((sections, index) => (
            <div
              key={index}
              className="relative flex-1 min-w-[200px] max-w-xs rounded-2xl bg-white/80 p-4 sm:p-5 shadow-[0_14px_30px_rgba(15,23,42,0.10)] ring-1 ring-[#b9c6dc]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.15)]"
            >
              <div className="pointer-events-none absolute inset-x-4 top-0 h-[2px] rounded-b-full bg-gradient-to-r from-[#19478e] via-[#6ca642] to-[#19478e]" />
              <div className="mt-3 m-0 space-y-4">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-[var(--font-plus-jakarta)] font-semibold text-[15px] sm:text-[16px] text-neutral-900 mb-1">
                      {section.title}
                    </h3>
                    <ul className="pl-5 list-disc leading-relaxed space-y-1.5">
                      {section.roles.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
