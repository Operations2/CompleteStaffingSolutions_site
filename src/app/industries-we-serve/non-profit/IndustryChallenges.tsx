"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Mission Alignment", description: "Ensuring candidates are not just skilled but deeply committed to your organization's social goals." },
  { icon: <ChallengeIcons.Skills />, title: "Fundraising Gaps", description: "Finding development professionals who can navigate competitive grant and donation landscapes." },
  { icon: <ChallengeIcons.Safety />, title: "Impact Measurement", description: "Recruiting program managers who can effectively demonstrate social return on investment." },
];

export default function IndustryChallenges({
  industryName = "Non-profit",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
