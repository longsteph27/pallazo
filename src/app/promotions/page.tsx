'use client';

import React from 'react';
import PromotionCard from '@/features/promotions/components/PromotionCard';
import DateSelector from '@/features/promotions/components/DateSelector';
import EventCalendar from '@/features/promotions/components/EventCalendar';
import { GalleryLayout } from '@/features/promotions/components/GallerySection';
import EventsCarousel from '@/components/common/EventsCarousel';

const eventSlides = [
    {
        id: 1,
        image: 'https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d',
        title: 'UNMISSABLE UPCOMING EVENTS',
        dateStart: '19/7/2021',
        dateEnd: '29/7/2021',
        desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring...',
    },
    {
        id: 2,
        image: 'https://api-pallazo.tsx.vn/assets/a7bcff57-a5f5-4c07-8e7c-71639a1731f9',
        title: 'CELEBRATING 21 YEARS OF PALAZZO',
        dateStart: '10/8/2021',
        dateEnd: '20/8/2021',
        desc: 'Join us for a grand celebration marking two decades of excellence and luxury gaming experiences...',
    },

];

const promotionsData = [
    {
        id: 1,
        title: "TIGER JACKPOT: THURSDAY NIGHT THRILLS!",
        description: "Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night. Your chance for big wins starts here!",
        image: "https://picsum.photos/seed/promo1/600/800",
        date: "Every sunday",
        time: "9:00 - 12:00"
    },
    {
        id: 2,
        title: "TIER FRENZY",
        description: "Check IN & OUT daily using the QR Code on the Palazzo Mobile App at our Self Check-In Station. Play your favorite games and get your FreePlay refund the next day!",
        image: "https://picsum.photos/seed/promo2/600/800",
        date: "Every sunday",
        time: "9:00 - 12:00"
    },
    {
        id: 3,
        title: "SUNDAY GOLDEN HOUR: CONTINUOUS $777 SURPRISES!",
        description: "Experience golden wins every Sunday afternoon with continuous $777 surprises hitting on any Slot or ETG machine.",
        image: "https://picsum.photos/seed/promo3/600/800",
        date: "Every sunday",
        time: "9:00 - 12:00"
    },
    {
        id: 4,
        title: "LOYALTY AWARD DAYS (QUARTERLY EVENT)",
        description: "Palazzo's exclusive quarterly event for eligible members. Experience a uniquely themed journey with exquisite entertainment and redeem substantial FreePlay rewards.",
        image: "https://picsum.photos/seed/promo4/600/800",
        date: "Every sunday",
        time: "9:00 - 12:00"
    },
    {
        id: 5,
        title: "THE MEMORY MARKERS: YOUR LOYALTY, REWARDED",
        description: "Earn the minimum required points in the previous month to redeem Free Play on the designated day. Check your status on the mobile app.",
        image: "https://picsum.photos/seed/promo5/600/800",
        date: "Every sunday",
        time: "9:00 - 12:00"
    },
    {
        id: 6,
        title: "TIGER JACKPOT: THURSDAY NIGHT THRILLS!",
        description: "Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night. Your chance for big wins starts here!",
        image: "https://picsum.photos/seed/promo6/600/800",
        date: "Every sunday",
        time: "9:00 - 12:00"
    }
];

const images = [
    "https://picsum.photos/seed/promo1/600/800",
    "https://picsum.photos/seed/promo2/600/800",
    "https://picsum.photos/seed/promo3/600/800",
    "https://picsum.photos/seed/promo4/600/800",
    "https://picsum.photos/seed/promo5/600/800",
    "https://picsum.photos/seed/promo6/600/800"
];

export default function PromotionsPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            {/* Banner Section */}
            <section className="relative max-h-[807px] w-full aspect-[1440/807] bg-[#1A1A1A]">
                {/* Blurred Background Image (Placeholder simulate) */}
                <div
                    className="opacity-40 bg-cover bg-center w-full h-full blur-sm"
                    style={{ backgroundImage: 'url("https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d")' }}
                />

                <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 z-10 max-w-[1440px] aspe mx-auto flex flex-col items-center">
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-center tracking-[0.2em] text-white uppercase mb-8 drop-shadow-lg">
                        SIGNATURE EVENT &<br />PROMOTION
                    </h1>

                </div>
                <div className="absolute -bottom-[9.6%] w-full z-20">
                    <EventsCarousel
                        slides={eventSlides}
                        hideBackground={true}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 py-12 px-4 md:py-20">

                {/* Date Selector Section */}
                <div className="w-full">
                    <DateSelector />
                </div>

                {/* Promotions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-0 relative">
                    {promotionsData.map((promo, index) => {
                        // Logic for staggering the middle column
                        const isMiddleColumn = index % 3 === 1;
                        return (
                            <div
                                key={promo.id}
                                className={`
                                    transition-all duration-700
                                    ${isMiddleColumn ? 'md:mt-32' : ''}
                                    ${index >= 3 ? 'md:mt-16' : ''} 
                                    ${isMiddleColumn && index >= 3 ? 'md:mt-48' : ''}
                                `}
                            >
                                <PromotionCard {...promo} />
                            </div>
                        );
                    })}
                </div>

                {/* Event Calendar Section */}
                <EventCalendar />

                {/* Gallery Section */}
                <GalleryLayout images={images} title="GALLERY" buttonText="CTA BUTTON" />
            </div>

            {/* Global no-scrollbar style if needed elsewhere */}
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
