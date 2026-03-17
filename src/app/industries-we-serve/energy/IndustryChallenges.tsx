"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Technical Talent Gap", description: "Finding specialized engineers for both traditional resource extraction and renewable energy." },
  { icon: <ChallengeIcons.Skills />, title: "Sustainability Standards", description: "Recruiting experts who can implement eco-friendly initiatives and carbon-reduction technologies." },
  { icon: <ChallengeIcons.Safety />, title: "Remote Site Logistics", description: "Sourcing reliable workforces for projects in geographically isolated or high-risk areas." },
];

export default function IndustryChallenges({
  industryName = "Energy",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
