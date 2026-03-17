import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "✍️", title: "Insurance Underwriter", description: "Evaluating applications and determining the risk level to establish policy terms and premiums.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/insurance cards/1.jpg" },
  { icon: "🔎", title: "Claims Adjuster", description: "Investigating insurance claims to determine the extent of liability and ensuring fair settlements.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/insurance cards/2.jpg" },
  { icon: "📉", title: "Actuarial Analyst", description: "Using statistical models to assess risk and help the company maintain long-term financial stability.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/insurance-hero.jpg" },
  { icon: "🤝", title: "Risk Consultant", description: "Identifying potential hazards for clients and proposing insurance solutions to mitigate those risks.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/insurance cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
