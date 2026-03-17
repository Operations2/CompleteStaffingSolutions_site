"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Client Accountability", description: "Recruiting trainers who can consistently motivate clients and drive long-term results." },
  { icon: <ChallengeIcons.Skills />, title: "Certification Standards", description: "Ensuring all wellness staff possess the latest accredited certifications and medical safety knowledge." },
  { icon: <ChallengeIcons.Safety />, title: "Motivational Consistency", description: "Finding staff who can maintain high energy and empathy levels in a client-facing environment." },
];

export default function IndustryChallenges({
  industryName = "Wellness & Fitness",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
