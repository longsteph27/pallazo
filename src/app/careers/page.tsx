'use client';

import React from 'react';
import CareersHero from '@/features/careers/components/CareersHero';
import JobOpenings from '@/features/careers/components/JobOpenings';
import CultureBenefits from '@/features/careers/components/CultureBenefits';
import CareerFaq from '@/features/careers/components/CareerFaq';
import JoinUsSection from '@/features/careers/components/JoinUsSection';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#F9F7ED]">
            <CareersHero />
            <JobOpenings />
            <CultureBenefits />
            <CareerFaq />
            <JoinUsSection />
        </main>
    );
}
