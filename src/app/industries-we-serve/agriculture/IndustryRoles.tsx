import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "👨‍🌾", title: "Farm Workers", description: "General laborers in the organic farms, nurseries, and farms.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/agriculture cards/1.jpg" },
  { icon: "🚜", title: "Equipment Operators", description: "Expertise agriculture farm tools and machinery, farm machinery and trucks.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/agriculture cards/2.jpg" },
  { icon: "🌾", title: "Crop Managers", description: "Job oversight, plantation yields, pest, sustainable, and cost control.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/agriculture cards/3.jpg" },
  { icon: "💧", title: "Irrigation Technicians", description: "Maintain irrigation and specialist techniques on all installation requirements.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/agriculture cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
