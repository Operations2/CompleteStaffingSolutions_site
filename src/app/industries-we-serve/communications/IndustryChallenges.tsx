"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Real-time Deadline Pressure", description: "Managing high-volume recruitment for fast-moving newsrooms and digital agencies with 24/7 cycles." },
  { icon: <ChallengeIcons.Skills />, title: "Platform Fragmentation", description: "Finding specialists who can produce content that resonates across TV, Print, Social, and Podcasts simultaneously." },
  { icon: <ChallengeIcons.Safety />, title: "Digital Evolution Gap", description: "Recruiting traditional media professionals who have successfully transitioned to data-driven digital strategies." },
];

export default function IndustryChallenges({
  industryName = "Communications",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
