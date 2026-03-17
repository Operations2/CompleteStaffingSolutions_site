import { notFound } from "next/navigation";
import {
  isSolutionId,
  SOLUTION_DETAIL_CONTENT,
  type SolutionId,
} from "../solutionDetailContent";
import SolutionDetailView from "./SolutionDetailView";

export type { SolutionId };

interface PageProps {
  params: Promise<{ solutionId: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { solutionId } = await params;
  if (!isSolutionId(solutionId)) return {};
  const content = SOLUTION_DETAIL_CONTENT[solutionId];
  return {
    title: `${content.title} | Complete Staffing Solutions`,
    description: content.subtitle + " " + content.ourFocus.slice(0, 120) + "...",
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { solutionId } = await params;
  if (!isSolutionId(solutionId)) notFound();
  const content = SOLUTION_DETAIL_CONTENT[solutionId];
  return <SolutionDetailView content={content} />;
}
