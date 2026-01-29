import React from 'react';
import Image from 'next/image';

interface EventCalendarCardProps {
    id: number;
    day: string;
    month: string;
    time: string;
    title: string;
    description: string;
    image: string;
}

const SeparatorSvg = () => (
    <svg width="252" height="6" viewBox="0 0 252 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 5.26074H251.179" stroke="url(#paint0_linear_342_942)" strokeWidth="1.21342" />
        <path d="M0 5.66309H81.7039V5.25861C81.7039 2.3546 79.3497 0.000439167 76.4457 0.000439167H0V5.66309Z" fill="url(#paint1_linear_342_942)" />
        <defs>
            <linearGradient id="paint0_linear_342_942" x1="0" y1="5.76074" x2="251.179" y2="5.76074" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A68C54" />
                <stop offset="1" stopColor="#EBD8AF" />
            </linearGradient>
            <linearGradient id="paint1_linear_342_942" x1="0" y1="2.83176" x2="81.7039" y2="2.83176" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A68C54" />
                <stop offset="1" stopColor="#EBD8AF" />
            </linearGradient>
        </defs>
    </svg>
);

const EventCalendarCard = ({ day, month, time, title, description, image }: EventCalendarCardProps) => {
    return (
        <div className="relative flex flex-col md:flex-row bg-[#FAF6EE] rounded-3xl overflow-hidden border border-[#D8BD96]/30 shadow-sm min-h-[280px]">
            {/* Left Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    {/* Header: Date & Time */}
                    <div className="flex items-start gap-4 mb-4">
                        <span className="text-5xl font-serif font-bold text-[#A68C54] leading-none">{day}</span>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-[#A68C54] uppercase tracking-widest">{month}</span>
                            <span className="text-xs font-medium text-gray-500">{time}</span>
                        </div>
                    </div>

                    {/* Custom SVG Separator */}
                    <div className="mb-6 max-w-[200px]">
                        <SeparatorSvg />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg md:text-xl font-serif font-extrabold uppercase text-[#1A1A1A] mb-3 leading-tight tracking-tight">
                        {title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full md:w-[45%] aspect-square md:aspect-auto">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />

                {/* Detail Button Overlay */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#A68C54]/80 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-xl group hover:bg-[#A68C54] transition-all">
                        <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">Detail</span>
                    </button>
                    <div className="absolute -inset-2 rounded-full border border-[#D8BD96]/30 animate-pulse pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default EventCalendarCard;
