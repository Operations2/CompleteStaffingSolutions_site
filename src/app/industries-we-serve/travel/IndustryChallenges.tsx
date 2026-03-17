"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Seasonal Fluctuations", description: "Managing rapid staff scaling for peak holiday seasons and tourism surges." },
  { icon: <ChallengeIcons.Skills />, title: "Service Consistency", description: "Ensuring high-quality guest experiences by finding talent with exceptional soft skills." },
  { icon: <ChallengeIcons.Safety />, title: "Safety Protocols", description: "Maintaining guest and staff safety in diverse environments like resorts and tour sites." },
];

export default function IndustryChallenges({
  industryName = "Recreation & Travel",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
