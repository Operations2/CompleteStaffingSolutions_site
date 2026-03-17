import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  {
    icon: "💼",
    title: "Financial Managers",
    description:
      "Leaders overseeing financial planning, budgeting, and performance for organizations.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/finance cards/1.jpg",
  },
  {
    icon: "👔",
    title: "Executives",
    description:
      "CFOs and senior finance executives setting long-term financial strategy.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/finance cards/2.jpg",
  },
  {
    icon: "🗂️",
    title: "Administrators",
    description:
      "Back-office and operations staff supporting finance teams and processes.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/finance cards/3.jpg",
  },
  {
    icon: "📊",
    title: "Portfolio Managers",
    description:
      "Professionals managing investment portfolios and asset allocations.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/finance cards/4.jpg",
  },
  {
    icon: "🧮",
    title: "Financial Planners",
    description:
      "Advisors helping individuals and organizations plan for future financial goals.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/finance cards/1.jpg",
  },
  {
    icon: "📈",
    title: "Analysts",
    description:
      "Financial and business analysts turning data into insights and recommendations.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/finance cards/2.jpg",
  },
  {
    icon: "🧾",
    title: "Accountants",
    description:
      "Professionals responsible for general ledger, reporting, and compliance.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/finance cards/3.jpg",
  },
  {
    icon: "⚙️",
    title: "Operations",
    description:
      "Finance operations staff ensuring accurate settlements, reconciliations, and controls.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/finance cards/4.jpg",
  },
  {
    icon: "📑",
    title: "Tax",
    description:
      "Tax specialists managing filings, compliance, and optimization strategies.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/finance cards/1.jpg",
  },
  {
    icon: "📋",
    title: "Controllers",
    description:
      "Controllers overseeing accounting operations, close processes, and financial reporting.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/finance cards/2.jpg",
  },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
