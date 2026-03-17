import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  {
    icon: "👔",
    title: "Executives",
    description:
      "C-suite and senior leadership roles driving strategy, culture, and performance.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/corporate services cards/1.jpg",
  },
  {
    icon: "🧑‍💼",
    title: "Human Resources",
    description:
      "HR leaders and specialists managing talent acquisition, employee relations, and benefits.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/corporate services cards/2.jpg",
  },
  {
    icon: "💰",
    title: "Finance",
    description:
      "Controllers, analysts, and finance managers supporting budgeting and forecasting.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/corporate services cards/3.jpg",
  },
  {
    icon: "⚙️",
    title: "Operations",
    description:
      "Operations leaders optimizing processes, productivity, and cross-functional coordination.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/corporate services cards/4.jpg",
  },
  {
    icon: "🏢",
    title: "Facilities Management",
    description:
      "Professionals overseeing building maintenance, safety, and workplace services.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/corporate services cards/1.jpg",
  },
  {
    icon: "📄",
    title: "Administrative",
    description:
      "Executive assistants, coordinators, and office managers keeping teams organized.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/corporate services cards/2.jpg",
  },
  {
    icon: "✅",
    title: "Compliance",
    description:
      "Compliance officers and specialists ensuring adherence to internal and external standards.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/corporate services cards/3.jpg",
  },
  {
    icon: "⚖️",
    title: "Legal",
    description:
      "In-house counsel and legal support staff protecting the organization’s interests.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/corporate services cards/4.jpg",
  },
  {
    icon: "📑",
    title: "Regulatory",
    description:
      "Specialists managing regulatory filings, audits, and industry-specific requirements.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/corporate services cards/1.jpg",
  },
  {
    icon: "💻",
    title: "Information Technology",
    description:
      "IT leaders and support staff delivering secure, reliable technology solutions.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/corporate services cards/2.jpg",
  },
  {
    icon: "🧾",
    title: "Tax",
    description:
      "Professionals overseeing corporate tax strategy, compliance, and reporting.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/corporate services cards/3.jpg",
  },
  {
    icon: "📣",
    title: "Marketing",
    description:
      "Brand, digital, and demand-generation talent building market awareness and growth.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/corporate services cards/4.jpg",
  },
  {
    icon: "🏙️",
    title: "Real Estate",
    description:
      "Real estate managers and analysts supporting site selection and portfolio strategy.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/corporate services cards/1.jpg",
  },
  {
    icon: "🤝",
    title: "Recruiting",
    description:
      "Talent acquisition partners sourcing, screening, and hiring top candidates.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/corporate services cards/2.jpg",
  },
  {
    icon: "📚",
    title: "Accounting",
    description:
      "Accountants and AP/AR specialists managing books, reporting, and reconciliation.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/corporate services cards/3.jpg",
  },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
