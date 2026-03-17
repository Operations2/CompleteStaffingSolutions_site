"use client";

import { ChallengeIcons } from "../_components/challengeIcons";
import IndustryChallengesShared from "../_components/IndustryChallenges";
import type { ChallengeItem } from "../_components/IndustryChallenges";

const CHALLENGES: ChallengeItem[] = [
  { icon: <ChallengeIcons.Demands />, title: "Regulatory Complexity", description: "Finding professionals who are expert in navigating the ever-changing global financial regulations and tax laws." },
  { icon: <ChallengeIcons.Skills />, title: "Data Integrity & Security", description: "Recruiting individuals with high ethical standards capable of managing sensitive financial data securely." },
  { icon: <ChallengeIcons.Safety />, title: "Market Volatility Adaptability", description: "Ensuring your team is staffed with agile experts who can make data-driven decisions during rapid market shifts." },
];

export default function IndustryChallenges({
  industryName = "Financial Services",
}: {
  industryName?: string;
}) {
  return (
    <IndustryChallengesShared industryName={industryName} challenges={CHALLENGES} />
  );
}
