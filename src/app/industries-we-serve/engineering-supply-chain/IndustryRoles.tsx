import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  {
    icon: "🛠️",
    title: "Engineering Operations Specialist",
    description: "Supporting day-to-day engineering workflows and coordinating cross-functional execution.",
    buttonText: "Explore Roles",
    buttonColor: "blue",
    image: "/industries detail pages/cards/transportation cards/1.jpg",
  },
  {
    icon: "🧾",
    title: "Procurement & Sourcing Coordinator",
    description: "Driving vendor sourcing, purchase planning, and supplier coordination for continuity.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/transportation cards/2.jpg",
  },
  {
    icon: "📦",
    title: "Logistics & Warehouse Manager",
    description: "Managing fulfillment, warehousing operations, and inventory availability for delivery readiness.",
    buttonText: "Explore Roles",
    buttonColor: "green",
    image: "/industries detail pages/cards/transportation cards/3.jpg",
  },
  {
    icon: "🧠",
    title: "Supply Continuity Analyst",
    description: "Analyzing lead-time risk and supporting strategies that minimize disruptions across the supply chain.",
    buttonText: "Learn More",
    buttonColor: "blue",
    image: "/industries detail pages/cards/transportation cards/4.jpg",
  },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}

