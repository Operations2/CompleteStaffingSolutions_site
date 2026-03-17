import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "🤝", title: "Fundraising Director", description: "Leading strategic initiatives to secure financial support and long-term donors.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/non profit cards/1.jpg" },
  { icon: "🌍", title: "Program Manager", description: "Overseeing specific initiatives to ensure they meet community needs and donor goals.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/non profit cards/2.jpg" },
  { icon: "📣", title: "Advocacy Coordinator", description: "Building public and political support for your organization's mission and policy goals.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/non profit cards/3.jpg" },
  { icon: "🤲", title: "Outreach Lead", description: "Engaging with the community to increase awareness and participation in programs.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/non profit cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
