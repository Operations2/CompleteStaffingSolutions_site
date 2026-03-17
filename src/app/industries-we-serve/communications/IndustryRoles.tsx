import IndustryRolesShared from "../_components/IndustryRoles";
import type { RoleItem } from "../_components/IndustryRoles";

const ROLES: RoleItem[] = [
  { icon: "📱", title: "Digital Content Lead", description: "Overseeing the creation and strategy of engaging content across all digital and social platforms.", buttonText: "Explore Roles", buttonColor: "blue", image: "/industries/media/content.jpg" },
  { icon: "📢", title: "PR Specialist", description: "Managing brand reputation and building strong relationships with media outlets and the public.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/media/pr.jpg" },
  { icon: "🎬", title: "Media Planner", description: "Analyzing audience data to determine the best platforms and timing for organizational messaging.", buttonText: "Explore Roles", buttonColor: "green", image: "/industries/media/planner.jpg" },
  { icon: "🎙️", title: "Communications Director", description: "Developing high-level internal and external strategies to ensure consistent organizational messaging.", buttonText: "Learn More", buttonColor: "blue", image: "/industries/media/director.jpg" },
];

export default function IndustryRoles() {
  return <IndustryRolesShared roles={ROLES} />;
}
