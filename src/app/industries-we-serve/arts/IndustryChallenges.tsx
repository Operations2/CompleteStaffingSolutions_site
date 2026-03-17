"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Highly Specialized Skillsets", description: "Finding talent with niche or advanced skills required for specific creative projects can be difficult." },
  { icon: <ChallengeIcons.Skills />, title: "Project-based Hiring", description: "Short-term or freelance projects make recruitment and retention of top artists more challenging." },
  { icon: <ChallengeIcons.Safety />, title: "Artistic Vision Alignment", description: "Ensuring that hired talent shares the same creative direction or style as the artistic project." },
];

export default function IndustryChallenges({
  industryName = "Arts",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
