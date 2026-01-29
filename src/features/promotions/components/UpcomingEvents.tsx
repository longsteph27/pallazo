'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronIcon } from '@/components/icons/AppIcons';

interface UpcomingEvent {
    id: number;
    month: string;
    day: string;
    time: string;
    title: string;
    subtitle: string;
    image: string;
}

const upcomingEvents: UpcomingEvent[] = [
    {
        id: 1,
        month: 'DEC',
        day: '12',
        time: '9:00 - 12:00',
        title: 'LOYALTY AWARD DAYS',
        subtitle: '(QUARTERLY EVENT)',
        image: 'https://picsum.photos/seed/up1/600/800'
    },
    {
        id: 2,
        month: 'DEC',
        day: '12',
        time: '9:00 - 12:00',
        title: 'LOYALTY AWARD DAYS',
        subtitle: '(QUARTERLY EVENT)',
        image: 'https://picsum.photos/seed/up2/600/800'
    },
    {
        id: 3,
        month: 'DEC',
        day: '12',
        time: '9:00 - 12:00',
        title: 'LOYALTY AWARD DAYS',
        subtitle: '(QUARTERLY EVENT)',
        image: 'https://picsum.photos/seed/up3/600/800'
    },
    {
        id: 4,
        month: 'DEC',
        day: '12',
        time: '9:00 - 12:00',
        title: 'LOYALTY AWARD DAYS',
        subtitle: '(QUARTERLY EVENT)',
        image: 'https://picsum.photos/seed/up4/600/800'
    },
    {
        id: 5,
        month: 'DEC',
        day: '12',
        time: '9:00 - 12:00',
        title: 'LOYALTY AWARD DAYS',
        subtitle: '(QUARTERLY EVENT)',
        image: 'https://picsum.photos/seed/up5/600/800'
    }
];

const DateBadgeSvg = ({ className = '' }: { className?: string }) => (
    <svg width="80" height="105" viewBox="0 0 80 105" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M79 1V89.1387C79 92.3787 76.7766 95.1961 73.625 95.9482L40 103.972L7.91113 96.3145C3.85923 95.3475 1.0002 91.7262 1 87.5605V1H79Z" fill="#F5F5F5" stroke="url(#paint0_linear_364_1444)" strokeWidth="2" />
        <path d="M0 0H80V28H0V0Z" fill="#A68C54" />
        <defs>
            <linearGradient id="paint0_linear_364_1444" x1="54" y1="96.5" x2="54" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EBDCB3" />
                <stop offset="1" stopColor="#A68C54" />
            </linearGradient>
        </defs>
    </svg>
);

const UpcomingEventCard = ({ event }: { event: UpcomingEvent }) => (
    <div className="flex flex-col gap-4 group cursor-pointer">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
            />

            {/* Custom Date Badge Overlay */}
            <div className="absolute top-0 left-4 z-10 w-[60px] md:w-[80px]">
                <div className="relative aspect-[80/105] w-full">
                    <DateBadgeSvg className="absolute inset-0 w-full h-full" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center">
                        {/* Month Section (Top 28/105 part) */}
                        <div className="h-[26%] w-full flex items-center justify-center">
                            <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest pt-0.5">
                                {event.month}
                            </span>
                        </div>

                        {/* Day & Time Section (Bottom part) */}
                        <div className="flex-1 w-full flex flex-col items-center justify-center pb-2">
                            <span className="text-2xl md:text-3xl font-serif font-bold text-[#A68C54] leading-none mb-1">
                                {event.day}
                            </span>
                            <span className="text-[7px] md:text-[9px] font-bold text-[#A68C54] whitespace-nowrap opacity-80 uppercase">
                                {event.time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="flex flex-col gap-1">
            <h3 className="text-sm md:text-base font-bold text-[#1A1A1A] uppercase tracking-tight">
                {event.title}
            </h3>
            <p className="text-xs md:text-sm font-medium text-[#A68C54] uppercase tracking-wide">
                {event.subtitle}
            </p>
        </div>
    </div>
);

const UpcomingEvents = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section className="py-20 bg-[#F9F7ED]">
            <div className="w-full relative">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] uppercase tracking-wider mb-12">
                    UPCOMING EVENT
                </h2>

                <div className="relative">
                    {/* Navigation Arrows - Side Positioned */}
                    <button
                        ref={prevRef}
                        className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/5 flex items-center justify-center transition-all hover:bg-black/10 disabled:opacity-0"
                    >
                        <ChevronIcon direction="right" className="w-5 h-5 opacity-60" />
                    </button>

                    <button
                        ref={nextRef}
                        className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/5 flex items-center justify-center transition-all hover:bg-black/10 disabled:opacity-0"
                    >
                        <ChevronIcon direction="left" className="w-5 h-5 opacity-60" />
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 }
                        }}
                        className="w-full"
                    >
                        {upcomingEvents.map((event) => (
                            <SwiperSlide key={event.id}>
                                <UpcomingEventCard event={event} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
