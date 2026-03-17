import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🎬", title: "Production Coordinator", description: "Managing the logistics and schedules for film, television, or theater productions.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/entertainment cards/1.jpg" },
  { icon: "🎭", title: "Talent Manager", description: "Representing and guiding the careers of artists, actors, and performers.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/entertainment cards/2.jpg" },
  { icon: "🎟️", title: "Event Specialist", description: "Planning and executing large-scale live events, concerts, and festivals.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/entertainment cards/3.jpg" },
  { icon: "🎮", title: "Game Developer", description: "Designing and coding interactive experiences for the global gaming audience.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/entertainment cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
