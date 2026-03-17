"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Labor Shortage", description: "The industry faces a critical lack of skilled tradespeople like electricians and plumbers." },
  { icon: <ChallengeIcons.Skills />, title: "Tight Project Deadlines", description: "Scaling a workforce quickly to meet strict completion dates without sacrificing quality." },
  { icon: <ChallengeIcons.Safety />, title: "Safety & OSHA Compliance", description: "Ensuring all workers are trained and compliant with strict safety regulations on-site." },
];

export default function IndustryChallenges({
  industryName = "Construction",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
