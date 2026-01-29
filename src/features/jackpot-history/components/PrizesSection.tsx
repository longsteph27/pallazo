"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { RankCard } from './RankBadge';
import { ChevronIcon } from '@/components/icons/AppIcons';
import { getCurrentJackpotValues } from '@/lib/api-edge';
import { PrizeData } from '../types';

interface PrizesSectionProps {
    initialPrizes?: PrizeData[];
}

export default function PrizesSection({ initialPrizes = [] }: PrizesSectionProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [prizes, setPrizes] = useState<PrizeData[]>(initialPrizes);
    const [isLoading, setIsLoading] = useState(initialPrizes.length === 0);

    useEffect(() => {
        if (initialPrizes && initialPrizes.length > 0) {
            setPrizes(initialPrizes);
        }
    }, [initialPrizes]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (isLoading && prizes.length === 0) {
        return (
            <div className="py-20 flex justify-center items-center">
                <div className="animate-pulse text-[#B29E71] font-serif uppercase tracking-widest">
                    Loading Prizes...
                </div>
            </div>
        );
    }

    if (prizes.length === 0) return null;

    return (
        <section className="relative py-16 space-y-12 overflow-hidden">
            {/* Decorative Header */}
            <div className="relative flex justify-center">
                <Image src={'/prizes-title.svg'} alt="Prizes" width={757} height={66} />
                <h2 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif text-[#2A2A2A] uppercase tracking-[0.3em] text-center">
                    Prizes
                </h2>
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 group">
                {/* Navigation Buttons */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full border border-[#B29E71]/50 bg-white/50 backdrop-blur-sm text-[#B29E71] hover:bg-[#B29E71] hover:text-white transition-all shadow-md group-hover:opacity-100 md:opacity-0"
                    aria-label="Previous"
                >
                    <ChevronIcon direction="right" />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full border border-[#B29E71]/50 bg-white/50 backdrop-blur-sm text-[#B29E71] hover:bg-[#B29E71] hover:text-white transition-all shadow-md group-hover:opacity-100 md:opacity-0"
                    aria-label="Next"
                >
                    <ChevronIcon direction="left" />
                </button>

                {/* Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9F7ED] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F7ED] to-transparent z-10 pointer-events-none" />

                {/* Prize Cards Scrollable Area */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 md:gap-12 py-8 px-12"
                >
                    {prizes.map((prize) => (
                        <div key={prize.id} className="flex-shrink-0 w-full sm:w-[320px] snap-center">
                            <RankCard
                                name={prize.name}
                                currentValue={Number(prize.currentValue).toLocaleString()}
                                secondaryValue={typeof prize.secondaryValue === 'number' ? prize.secondaryValue.toLocaleString() : prize.secondaryValue}
                                labelTop="CURRENT"
                                labelBottom="MAX"
                                topBgColor={prize.topBgColor}
                                numberColor={prize.numberColor}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
