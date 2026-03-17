import React from 'react';
import { Header } from '@/components/Header';
import {Footer} from '@/components/Footer';
import JobRequestSection from '@/components/JobRequestSection';
import CommitmentSection from '@/components/JobSeekerOverview/Commitmentsection';
export default function JobSeekerOverview() {
  return (
    <main>
      <CommitmentSection />
      <JobRequestSection />
    </main>
  );
}