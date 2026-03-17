import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "💼", title: "Wealth Manager", description: "Managing investment portfolios and providing strategic financial advice to high-net-worth clients.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries/finance/wealth.jpg" },
  { icon: "🛡️", title: "Compliance Officer", description: "Ensuring all banking and investment activities strictly adhere to legal standards and internal policies.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/finance/compliance.jpg" },
  { icon: "📊", title: "Investment Analyst", description: "Researching financial trends and evaluating investment opportunities to drive organizational growth.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/finance/analyst.jpg" },
  { icon: "🏦", title: "Portfolio Coordinator", description: "Supporting the management of diverse asset classes and ensuring smooth daily operational reporting.", buttonText: "Learn More", buttonColor: "blue", image: "/industries/finance/portfolio.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
