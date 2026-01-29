'use client';

import React from 'react';
import Image from 'next/image';
import { PromotingLogoSvg } from '@/components/icons/AppIcons';
import UpcomingEvents from '@/features/promotions/components/UpcomingEvents';

const PromotionDetailPage = () => {
    return (
        <main className="min-h-screen bg-[#F9F7ED]">
            {/* Hero Banner Section */}
            <div className="relative w-full h-[300px] md:h-[500px] max-h-[1024px]">
                <Image
                    src="https://picsum.photos/seed/promo-detail/1920/1080"
                    alt="Promotion Banner"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay gradient for header transition */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
            </div>

            <div className="relative w-3/4 bg-[#F9F7ED] px-4 lg:px-52 lg:pt-16 pt-8 -mt-16 md:-mt-32 rounded-tr-xl">
                {/* Title Section */}
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1A1A1A] uppercase leading-tight mb-12 max-w-4xl tracking-tight">
                    INTRODUCE TEXT HERE LOREM IPOUM DOSIC AMET COLOR
                </h1>

                {/* Date/Time Section with Gradients */}
                <div className="inline-flex flex-col md:flex-row items-center bg-gradient-to-r from-[#B9A472] to-[#F9F7ED] gap-6 p-[1px] w-full rounded-xl mb-12 relative overflow-hidden group">
                    {/* Gradient Border Hack */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-[#B9A472] to-[#F9F7ED] p-[1px] rounded-xl">
                        <div className="w-full h-full bg-gradient-to-r from-[#EAE2CC] to-[#F9F7ED] rounded-xl"></div>
                    </div> */}

                    <div className="relative bg-gradient-to-r from-[#EAE2CC] to-[#F9F7ED] z-10 flex items-center gap-8 py-2 px-4 w-full rounded-xl">
                        <PromotingLogoSvg className="flex-shrink-0" />

                        <div className="flex flex-col w-full md:flex-row gap-8 md:gap-12">
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-widest text-[#B9A472] font-semibold mb-1">Date</span>
                                <span className="text-lg font-bold text-[#1A1A1A] whitespace-nowrap">Every sunday</span>
                            </div>
                            <div className="flex flex-col w-full">
                                <span className="text-xs uppercase tracking-widest text-[#B9A472] font-semibold mb-1">Time</span>
                                <span className="text-lg font-bold text-[#1A1A1A] whitespace-nowrap">9:00 - 12:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Overlapping Content Container */}
            <div className="max-w-7xl px-4 lg:px-52 flex flex-col gap-6 relative">

                {/* Body Text Section */}
                <div className="rounded-[40px] md:rounded-[60px] relative">
                    <div className="space-y-8 text-gray-700 leading-relaxed text-base md:text-lg max-w-5xl">
                        <p>
                            While some salons can feel alienating, especially for LGBTQ clients, Color Me Chula has created a community around both its experimental cuts and diverse clientele. “I realized it was difficult to find a place where we can really feel comfortable, where you walk in and you don’t feel like you kind of have to put up a front,” Jackelyn said. “So we wanted to go create an environment where that wouldn’t be an issue—where people could just walk in and feel at home.” Monica, reflecting on the shop’s origins, echoed her wife: “We wanted to create a space where everybody deserves to be pampered.”
                        </p>
                        <p>
                            While some salons can feel alienating, especially for LGBTQ clients, Color Me Chula has created a community around both its experimental cuts and diverse clientele. “I realized it was difficult to find a place where we can really feel comfortable, where you walk in and you don’t feel like you kind of have to put up a front,” Jackelyn said. “So we wanted to go create an environment where that wouldn’t be an issue—where people could just walk in and feel at home.” Monica, reflecting on the shop’s origins, echoed her wife: “We wanted to create a space where everybody deserves to be pampered.”
                        </p>
                        <p>
                            While some salons can feel alienating, especially for LGBTQ clients, Color Me Chula has created a community around both its experimental cuts and diverse clientele. “I realized it was difficult to find a place where we can really feel comfortable, where you walk in and you don’t feel like you kind of have to put up a front,” Jackelyn said. “So we wanted to go create an environment where that wouldn’t be an issue—where people could just walk in and feel at home.” Monica, reflecting on the shop’s origins, echoed her wife: “We wanted to create a space where everybody deserves to be pampered.”
                        </p>
                    </div>

                    {/* Large Content Image */}
                    <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-xl mt-12 mb-12">
                        <Image
                            src="https://picsum.photos/seed/promo-detail-large/1600/800"
                            alt="Promotion Content"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-8 text-gray-700 leading-relaxed text-base md:text-lg max-w-5xl">
                        <p>
                            While some salons can feel alienating, especially for LGBTQ clients, Color Me Chula has created a community around both its experimental cuts and diverse clientele. “I realized it was difficult to find a place where we can really feel comfortable, where you walk in and you don’t feel like you kind of have to put up a front,” Jackelyn said. “So we wanted to go create an environment where that wouldn’t be an issue—where people could just walk in and feel at home.” Monica, reflecting on the shop’s origins, echoed her wife: “We wanted to create a space where everybody deserves to be pampered.”
                        </p>
                    </div>
                </div>
            </div>

            {/* Upcoming Events Section - Now at Root Level */}
            <div className="max-w-7xl px-4 lg:px-52 flex flex-col gap-6 relative">
                <UpcomingEvents />
            </div>
        </main>
    );
};

export default PromotionDetailPage;
