import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  {
    icon: "⚖️",
    title: "Lawyers",
    description:
      "Attorneys representing clients, advising on risk, and handling complex legal matters.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/legal cards/1.jpg",
  },
  {
    icon: "🗂️",
    title: "Administrators",
    description:
      "Legal office administrators managing staff, finances, and firm operations.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/legal cards/2.jpg",
  },
  {
    icon: "📜",
    title: "Paralegals",
    description:
      "Supporting attorneys with research, drafting, discovery, and trial preparation.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/legal cards/3.jpg",
  },
  {
    icon: "⚙️",
    title: "Operations",
    description:
      "Operations leaders coordinating workflows, technology, and client service delivery.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/legal cards/4.jpg",
  },
  {
    icon: "👔",
    title: "Executives",
    description:
      "Firm and in-house legal executives setting strategy and overseeing practice groups.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/legal cards/1.jpg",
  },
  {
    icon: "💳",
    title: "Billing Specialists",
    description:
      "Billing and e-billing professionals managing time entry, invoicing, and collections.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/legal cards/2.jpg",
  },
  {
    icon: "📁",
    title: "Clerks",
    description:
      "Court and file clerks organizing case files, records, and documentation.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/legal cards/3.jpg",
  },
  {
    icon: "📊",
    title: "Analysts",
    description:
      "Legal and compliance analysts supporting research, reporting, and risk management.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/legal cards/4.jpg",
  },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
