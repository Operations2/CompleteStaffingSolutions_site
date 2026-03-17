import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "⚡", title: "Renewable Energy Engineer", description: "Designing and maintaining wind, solar, and hydro energy systems.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/energy cards/1.jpg" },
  { icon: "🌍", title: "Environmental Scientist", description: "Ensuring projects comply with environmental laws and sustainable practices.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/energy cards/2.jpg" },
  { icon: "⛏️", title: "Mining Project Manager", description: "Overseeing large-scale extraction operations and site safety protocols.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/energy cards/3.jpg" },
  { icon: "🛡️", title: "Safety Inspector", description: "Monitoring high-risk environments to ensure zero workplace accidents.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/energy cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
