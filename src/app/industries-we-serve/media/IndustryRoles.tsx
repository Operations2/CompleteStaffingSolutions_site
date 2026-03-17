import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "📱", title: "Digital Content Lead", description: "Overseeing the creation and strategy of engaging content across all digital and social platforms.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries detail pages/cards/media cards/1.jpg" },
  { icon: "📢", title: "PR Specialist", description: "Managing brand reputation and building strong relationships with media outlets and the public.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/media cards/2.jpg" },
  { icon: "🎬", title: "Media Planner", description: "Analyzing audience data to determine the best platforms and timing for organizational messaging.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries detail pages/cards/media cards/3.jpg" },
  { icon: "🎙️", title: "Communications Director", description: "Developing high-level internal and external strategies to ensure consistent organizational messaging.", buttonText: "Learn More", buttonColor: "blue", image: "/industries detail pages/cards/media cards/4.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
