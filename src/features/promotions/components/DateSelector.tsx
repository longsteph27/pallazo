'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronIcon } from '@/components/icons/AppIcons';

const DateCardSvg = ({ className = '' }: { className?: string }) => (
    <svg width="69" height="76" viewBox="0 0 69 76" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M6.63965 0.5H61.4189C64.8098 0.5 67.5585 3.24879 67.5586 6.63965V62.0752C67.5586 64.8795 65.659 67.3277 62.9424 68.0234L35.5527 75.0371C34.5534 75.293 33.5052 75.293 32.5059 75.0371L5.11621 68.0234C2.39977 67.3276 0.500012 64.8794 0.5 62.0752V6.63965L0.507812 6.32422C0.672102 3.08002 3.35466 0.500127 6.63965 0.5Z" stroke="#D8BD96" />
    </svg>
);

const dates = Array(20).fill({ day: '25', month: 'SEP' });

const DateSelector = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="flex items-center gap-4 w-full px-4 md:px-0">
            {/* Left Nav Arrow */}
            <button
                ref={prevRef}
                className="flex-shrink-0 w-10 h-10 rounded-full border border-[#D8BD96] flex items-center justify-center transition-colors hover:bg-[#FAF6EE] disabled:opacity-30"
            >
                <ChevronIcon direction="right" />
            </button>

            {/* Dates Scrollable Area with Swiper */}
            <div className="flex-1 min-w-0">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={'auto'}
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
                    className="w-full"
                >
                    {dates.map((item, idx) => (
                        <SwiperSlide key={idx} style={{ width: 'auto' }}>
                            <div className="relative w-[69px] h-[76px] flex flex-col items-center justify-center group cursor-pointer">
                                <DateCardSvg className="absolute inset-0 transition-transform group-hover:scale-105" />
                                <div className="relative z-10 flex flex-col items-center pointer-events-none">
                                    <span className="text-xl font-bold text-[#1A1A1A] leading-tight">{item.day}</span>
                                    <span className="text-[10px] tracking-widest text-[#666] font-medium">{item.month}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Right Nav Arrow */}
            <button
                ref={nextRef}
                className="flex-shrink-0 w-10 h-10 rounded-full border border-[#D8BD96] flex items-center justify-center transition-colors hover:bg-[#FAF6EE] disabled:opacity-30"
            >
                <ChevronIcon direction="left" />
            </button>
        </div>
    );
};

export default DateSelector;
