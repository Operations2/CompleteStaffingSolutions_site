import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏋️", title: "Certified Trainer", description: "Designing and leading personalized fitness programs for individual or group clients.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/wellness cards/1.jpg" },
  { icon: "🥗", title: "Wellness Coach", description: "Guiding clients through lifestyle and nutrition changes for holistic health improvement.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/wellness cards/2.jpg" },
  { icon: "🧘", title: "Group Fitness Lead", description: "Managing high-energy classes and creating engaging workout environments.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/wellness cards/3.jpg" },
  { icon: "🍏", title: "Nutritionist", description: "Providing evidence-based dietary advice to support health and athletic goals.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/wellness cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
