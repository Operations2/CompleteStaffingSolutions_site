import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏨", title: "Hotel General Manager", description: "Overseeing all hotel operations, guest services, and financial targets.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/travel cards/1.jpg" },
  { icon: "🗓️", title: "Event Planner", description: "Coordinating large-scale corporate events, weddings, and travel tours.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/travel cards/2.jpg" },
  { icon: "🗺️", title: "Tour Operator", description: "Designing and leading travel experiences for local and international guests.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/travel cards/3.jpg" },
  { icon: "⛱️", title: "Resort Coordinator", description: "Managing guest activities and facility maintenance in vacation environments.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/travel cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
