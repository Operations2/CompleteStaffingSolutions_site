"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Automation Gaps", description: "Transitioning to smart manufacturing requires workers with both manual and tech skills." },
  { icon: <ChallengeIcons.Skills />, title: "Quality Consistency", description: "Maintaining zero-defect standards while scaling production during peak demand." },
  { icon: <ChallengeIcons.Safety />, title: "Workplace Hazards", description: "Ensuring all personnel are rigorously trained on heavy machinery safety and protocols." },
];

export default function IndustryChallenges({
  industryName = "Manufacturing",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
