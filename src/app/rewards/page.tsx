import React from "react";
import RewardLayout from "../../features/rewards/component";
import { getMembershipBenefits, getMembershipCards } from "@/lib/api-directus";
import { MembershipBenefit, MembershipCard } from "@/features/membership/types";

export const dynamic = 'force-dynamic';

export default async function Membership({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const lang = (params.lang as string) || 'en';

  const [cards, benefits] = await Promise.all([
    getMembershipCards(lang) as Promise<MembershipCard[]>,
    getMembershipBenefits(lang) as Promise<MembershipBenefit[]>
  ]);

  return (
    <RewardLayout
      membershipCards={cards}
      membershipBenefits={benefits}
    />
  );
}
