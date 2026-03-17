"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "High Precision Work", description: "The legal field allows zero room for error in documentation and case preparation." },
  { icon: <ChallengeIcons.Skills />, title: "Ethics & Integrity", description: "Finding candidates with a proven track record of upholding high ethical and professional standards." },
  { icon: <ChallengeIcons.Safety />, title: "Complex Case Loads", description: "Scaling staff to handle sudden spikes in litigation or complex corporate mergers." },
];

export default function IndustryChallenges({
  industryName = "Legal",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
