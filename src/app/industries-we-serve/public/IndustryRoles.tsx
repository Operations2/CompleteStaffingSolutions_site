import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🏛️", title: "Public Policy Analyst", description: "Evaluating government policies and proposing data-driven improvements.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/public cards/1.jpg" },
  { icon: "🏙️", title: "Municipal Administrator", description: "Managing the daily operations and services of local government bodies.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/public cards/2.jpg" },
  { icon: "📜", title: "Govt. Affairs Lead", description: "Managing relationships between the organization and various legislative bodies.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/public cards/3.jpg" },
  { icon: "⚡", title: "Utility Manager", description: "Directing the public services related to water, power, or waste management.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/public cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
