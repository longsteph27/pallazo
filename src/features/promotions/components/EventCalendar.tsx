'use client';

import React from 'react';
import EventCalendarCard from './EventCalendarCard';

const calendarEvents = [
    {
        id: 1,
        day: '12',
        month: 'DEC',
        time: '9:00 - 12:00',
        title: 'TIGER JACKPOT: THURSDAY NIGHT',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night. Your chance for big...',
        image: 'https://picsum.photos/seed/cal1/400/400'
    },
    {
        id: 2,
        day: '12',
        month: 'DEC',
        time: '9:00 - 12:00',
        title: 'TIGER JACKPOT: THURSDAY NIGHT',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night. Your chance for big...',
        image: 'https://picsum.photos/seed/cal2/400/400'
    },
    {
        id: 3,
        day: '12',
        month: 'DEC',
        time: '9:00 - 12:00',
        title: 'TIGER JACKPOT: THURSDAY NIGHT',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night. Your chance for big...',
        image: 'https://picsum.photos/seed/cal3/400/400'
    },
    {
        id: 4,
        day: '12',
        month: 'DEC',
        time: '9:00 - 12:00',
        title: 'TIGER JACKPOT: THURSDAY NIGHT',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night. Your chance for big...',
        image: 'https://picsum.photos/seed/cal4/400/400'
    }
];

const FilterDropdown = ({ label }: { label: string }) => (
    <div className="relative group">
        <button className="flex items-center gap-4 px-6 py-2 rounded-full bg-[#A68C54] text-white font-medium uppercase text-sm tracking-widest border border-[#D8BD96] transition-all hover:bg-[#8B7345]">
            {label}
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-[10px] transform group-hover:rotate-180 transition-transform">▼</span>
            </div>
        </button>
    </div>
);

const EventCalendar = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] uppercase tracking-[0.1em]">
                        EVENTS CALENDAR
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <FilterDropdown label="THIS WEEK" />
                        <FilterDropdown label="ALL STATUS" />
                    </div>
                </div>

                {/* Event Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {calendarEvents.map((event) => (
                        <EventCalendarCard key={event.id} {...event} />
                    ))}
                </div>

                {/* Show More Button */}
                <div className="flex justify-center pt-8">
                    <button className="flex items-center gap-2 px-8 py-2 rounded-lg border border-[#D8BD96] text-[#A68C54] font-medium transition-all hover:bg-[#FAF6EE]">
                        Show more
                        <span className="text-[10px]">▼</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventCalendar;
