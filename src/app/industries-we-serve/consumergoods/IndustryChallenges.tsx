"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Rapid Market Evolution", description: "Sourcing talent that can adapt to fast-changing consumer trends and omni-channel retail shifts." },
  { icon: <ChallengeIcons.Skills />, title: "Supply Chain Disruptions", description: "Finding logistics and inventory experts who can navigate global supply chain complexities efficiently." },
  { icon: <ChallengeIcons.Safety />, title: "Brand Integrity", description: "Recruiting marketing and quality professionals who prioritize and protect your brand's reputation." },
];

export default function IndustryChallenges({
  industryName = "Consumer Goods",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
