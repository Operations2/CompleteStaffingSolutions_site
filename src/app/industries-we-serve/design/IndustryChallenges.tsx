"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Technical Mastery", description: "Finding creative talent that is also proficient in the latest design software and collaborative tools." },
  { icon: <ChallengeIcons.Skills />, title: "Creative Burnout", description: "Recruiting resilient designers who can maintain high-quality output under tight creative deadlines." },
  { icon: <ChallengeIcons.Safety />, title: "Portfolio Vetting", description: "Ensuring candidates have a proven track record that aligns with your specific brand aesthetics." },
];

export default function IndustryChallenges({
  industryName = "Design",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
