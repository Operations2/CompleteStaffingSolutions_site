import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  {
    icon: "🖥️",
    title: "Data Center Technicians",
    description:
      "Maintaining servers, racks, and infrastructure within mission-critical data centers.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/hardware cards/1.jpg",
  },
  {
    icon: "⚙️",
    title: "Operations",
    description:
      "Overseeing day-to-day hardware, network, and infrastructure operations.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/hardware cards/2.jpg",
  },
  {
    icon: "👔",
    title: "Executives",
    description:
      "Technology and infrastructure executives guiding long-term architecture and investment.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/hardware cards/3.jpg",
  },
  {
    icon: "🧑‍💻",
    title: "Administrators",
    description:
      "System and network administrators managing hardware, servers, and access.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/hardware cards/4.jpg",
  },
  {
    icon: "🛠️",
    title: "Engineers",
    description:
      "Hardware and network engineers designing, installing, and optimizing environments.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/hardware cards/1.jpg",
  },
  {
    icon: "📞",
    title: "Help Desk",
    description:
      "Front-line IT support resolving user hardware and connectivity issues.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/hardware cards/2.jpg",
  },
  {
    icon: "📱",
    title: "Applications Specialists",
    description:
      "Experts supporting enterprise applications that rely on hardware and network uptime.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/hardware cards/3.jpg",
  },
  {
    icon: "📊",
    title: "Analysts",
    description:
      "Infrastructure and capacity analysts monitoring performance and utilization.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/hardware cards/4.jpg",
  },
  {
    icon: "💻",
    title: "Programmers",
    description:
      "Developers integrating hardware systems with software, tooling, and automation.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/hardware cards/1.jpg",
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    description:
      "QA specialists testing hardware, firmware, and systems for reliability and performance.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/hardware cards/2.jpg",
  },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
