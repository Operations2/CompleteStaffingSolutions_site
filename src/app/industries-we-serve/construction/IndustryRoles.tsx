import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏗️", title: "Construction Manager", description: "Overseeing project timelines, budgets, and subcontractor coordination from start to finish.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/construction cards/1.jpg" },
  { icon: "👷", title: "Site Supervisor", description: "Managing daily operations on the job site to ensure safety and quality standards are met.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/construction cards/2.jpg" },
  { icon: "🏢", title: "Civil Engineer", description: "Technical design and structural oversight for large-scale infrastructure and building projects.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/construction cards/3.jpg" },
  { icon: "📏", title: "Project Architect", description: "Developing architectural designs and technical drawings that meet client and safety codes.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/construction cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
