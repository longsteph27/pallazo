import React from 'react';
import { MembershipBenefitTable, mockMembershipBenefits, mockMembershipCards } from '@/features/membership';

export default function MembershipPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900">Membership Tiers & Benefits</h1>
                <p className="mt-2 text-gray-600">Compare our membership levels and exclusive rewards.</p>
            </div>

            <div className="rounded-xl border bg-white shadow-sm">
                <MembershipBenefitTable
                    cards={mockMembershipCards}
                    benefits={mockMembershipBenefits}
                />
            </div>
        </div>
    );
}
