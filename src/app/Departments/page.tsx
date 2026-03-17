import React from 'react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import DepartmentsHero from '@/components/Departments/Departmentshero';
// import IndustryTabs from '@/components/Departments/Industrytabs';
import DepartmentCards from '@/components/Departments/Departmentcards';
import JobRequestSection from '@/components/JobRequestSection';
export default function Departments() {
  return (
    <main className="min-h-screen bg-white">
      <DepartmentsHero />
      {/* <IndustryTabs /> */}
      <DepartmentCards />
      <JobRequestSection />
    </main>
  );
}