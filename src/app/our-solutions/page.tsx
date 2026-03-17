"use client";

import { useState, useCallback } from "react";
import JobRequestSection from "@/components/JobRequestSection";
import OurSolutionsHero from "./OurSolutionsHero";
import OurSolutionsWelcome from "./OurSolutionsWelcome";
import SolutionsCategories from "./SolutionsCategories";
import type { SolutionTabId } from "./OurSolutionsWelcome";

export default function OurSolutionsPage() {
  const [activeTab, setActiveTab] = useState<SolutionTabId>("retained");
  const handleTabChange = useCallback((id: SolutionTabId) => {
    setActiveTab(id);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);
  return (
    <main className="min-h-screen bg-white">
      <OurSolutionsHero />
      <OurSolutionsWelcome activeTab={activeTab} onTabChange={handleTabChange} />
      <SolutionsCategories activeTab={activeTab} onTabChange={handleTabChange} />
      <JobRequestSection />
    </main>
  );
}
