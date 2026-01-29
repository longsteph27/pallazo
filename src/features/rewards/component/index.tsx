"use client";
import React from "react";
import BannerSlider from "@/components/common/Banner";
import Image from "next/image";
import MemberCards from "./membership-cards";
import MembershipTierTable from "./tier/Tier";
import PointBase from "./point-base/PointBase";
import AppPreview from "@/components/AppPreview/AppPreview";
import ThrillEleganceHeroFO from "@/components/common/Hero";
import { MembershipBenefit, MembershipCard } from "@/features/membership/types";

interface RewardLayoutProps {
  membershipCards?: MembershipCard[];
  membershipBenefits?: MembershipBenefit[];
}

export default function RewardLayout({ membershipCards = [], membershipBenefits = [] }: RewardLayoutProps) {
  const banners = [
    "https://api-pallazo.tsx.vn/assets/81729b5c-4340-4df2-a39c-85153245f8f5"
  ];

  const jackpotData = {
    left: { title: "TOTAL WINS", value: "546.990.123", subtitle: "OVER THE LAST YEAR" },
    right: { title: "TOTAL WINS", value: "546.990.123", subtitle: "OVER THE LAST YEAR" },
    buttonLabel: "VIEW HISTORY"
  };

  return (
    <div className="w-full h-full flex flex-col space-y-10 bg-[#F9F7ED] text-[#2d2d2d] font-sans">
      <BannerSlider images={banners} title="REWARDS" showJackpotStats={true} jackpotData={jackpotData} />
      {/* SECTION 1 - HERO */}
      <ThrillEleganceHeroFO title="Where Thrill Meets Elegance" description="Step into a vibrant world where every win is elevated by design. Palazzo provides more than just entertainment; we offer an experience crafted for distinction, privacy, and exhilaration. With over 100 state-of-the-art slot and electronic table game machines featuring renowned brands such as Light & Wonder, Aristocrat, IGT, and Scientific Games, Palazzo invites you to the premier entertainment paradise, where gaming transcends the ordinary. " imageSrc="https://api-pallazo.tsx.vn/assets/6656b828-6d40-4feb-871a-5bbfbb9ad38b" />

      {/* MEMBERSHIP CARDS */}
      {/* <section className="text-center py-16">
        <h3 className="uppercase text-sm tracking-wider mb-6">Membership Cards</h3>
        <div className="flex justify-center gap-6">
          {[
            "#8a8a8a",
            "#8b1d1d",
            "#d8c89e",
            "#4aaec0",
            "#1f3b70",
          ].map((c, idx) => (
            <div
              key={idx}
              className="w-[120px] h-[180px] rounded-xl shadow-lg rotate-[-8deg] relative"
              style={{ background: c }}
            ></div>
          ))}
        </div>
      </section> */}
      <MemberCards />

      {/* MEMBERSHIP TIER TABLE */}
      {/* <section className="max-w-[1100px] mx-auto py-14">
        <h3 className="uppercase text-center text-sm tracking-wider mb-10">
          Membership Tier
        </h3>
        <div className="bg-white rounded-xl shadow-md p-6 border border-[#e6decf]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[#6d6d6d] text-sm">
                <th className="py-3">BENEFITS</th>
                {[
                  "#8a8a8a",
                  "#c2b8ab",
                  "#d8c89e",
                  "#8a1d1d",
                  "#1f3b70",
                ].map((c, i) => (
                  <th key={i} className="py-3 text-center">
                    <div
                      className="mx-auto w-[22px] h-[22px] rounded"
                      style={{ background: c }}
                    ></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, idx) => (
                <tr key={idx} className="border-t border-[#e7dfd4] h-[46px]">
                  <td className="pl-2 text-sm">Sample tier benefit text</td>
                  {[...Array(5)].map((__, i) => (
                    <td key={i} className="text-center">
                      <div className="w-3 h-3 rounded-full bg-[#bfa57a]"></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}
      <MembershipTierTable cards={membershipCards} benefits={membershipBenefits} />

      {/* POINT BASE */}
      <PointBase />

      {/* APP PREVIEW */}
      <AppPreview />

    </div>
  );
}
