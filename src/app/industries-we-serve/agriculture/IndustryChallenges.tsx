"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Seasonal Labor Demands", description: "We address fluctuating labor needs during peak seasons with flexible staffing solutions." },
  { icon: <ChallengeIcons.Skills />, title: "Specialized Skills Required", description: "Connecting you with experts in crop science and machinery operation." },
  { icon: <ChallengeIcons.Safety />, title: "Safety & Compliance", description: "Ensuring all placements meet strict regulatory and workplace safety standards." },
];

export default function IndustryChallenges({
  industryName = "Agriculture",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
