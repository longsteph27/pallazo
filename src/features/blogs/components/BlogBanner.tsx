'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronIcon } from '@/components/icons/AppIcons';

interface BlogSlide {
    id: number;
    title: string;
    description: string;
    image: string;
    ctaText: string;
}

const blogSlides: BlogSlide[] = [
    {
        id: 1,
        title: 'BLOG NAME',
        description:
            'Sshould be incapable of drawing a single stroke at the present moment, and yet I feel that I never was a greater artist than now.',
        image: 'https://api-pallazo.tsx.vn/assets/256241a0-dcbe-4f58-9b3a-3149806c60b9',
        ctaText: 'CTA BUTTON',
    },
    {
        id: 2,
        title: 'LUXURY GAMING',
        description:
            'Discover the pinnacle of elegance and thrill at Palazzo. Our curated experiences redefine what it means to be a prestige member.',
        image: 'https://api-pallazo.tsx.vn/assets/256241a0-dcbe-4f58-9b3a-3149806c60b9',
        ctaText: 'EXPLORE MORE',
    },
    {
        id: 3,
        title: 'EXCLUSIVE REWARDS',
        description:
            'Loyalty means more at Palazzo. Unlock world-class benefits and insider perks designed for the most discerning guests.',
        image: 'https://picsum.photos/seed/blog3/1200/600',
        ctaText: 'JOIN NOW',
    },
];

type Props = {
    slides?: BlogSlide[];
    autoplayMs?: number;
    gapPx?: number;
};

// Internal type for safe rendering
type SafeSlide = BlogSlide & { uniqueKey: string };

type SlotType = 'offLeft' | 'left' | 'center' | 'right' | 'offRight';

export default function BlogBanner({
    slides = blogSlides,
    autoplayMs = 5000,
}: Props) {
    // 1. Ensure we have enough slides for the 5-slot window logic
    // If length < 5, we duplicate items with unique keys to avoid React collisions
    const safeSlides: SafeSlide[] = useMemo(() => {
        if (!slides || slides.length === 0) return [];
        let result = slides.map((s) => ({ ...s, uniqueKey: s.id.toString() }));

        // Pad until we have at least 6 items for safe looping of 5 slots
        let cloneCount = 0;
        while (result.length < 6) {
            cloneCount++;
            const clone = slides.map(s => ({ ...s, uniqueKey: `${s.id}-clone-${cloneCount}` }));
            result = [...result, ...clone];
        }
        return result;
    }, [slides]);

    const len = safeSlides.length;
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Helper for circular index
    const getIndex = (i: number) => (len ? (i % len + len) % len : 0);

    // 2. Define the 5 slots with CSS-like properties (Percentages for responsiveness)
    const SLOTS = useMemo(() => ({
        offLeft: {
            left: '-10%',
            opacity: 0,
            zIndex: 0,
            x: '-50%',
            width: '18%',
            scale: 1,
        },
        left: {
            left: '10%', // Centered at 10%
            opacity: 0.6,
            zIndex: 10,
            x: '-50%',
            width: '18%', // Approx 20% of banner width
            scale: 1,
        },
        center: {
            left: '50%',
            opacity: 1,
            zIndex: 20,
            x: '-50%',
            width: '55%',
            scale: 1,
        },
        right: {
            left: '90%', // Centered at 90%
            opacity: 0.6,
            zIndex: 10,
            x: '-50%',
            width: '18%',
            scale: 1,
        },
        offRight: {
            left: '110%',
            opacity: 0,
            zIndex: 0,
            x: '-50%',
            width: '18%',
            scale: 1,
        },
    }), []);

    // 3. Determine the content for each slot
    const windowSlides = useMemo(() => {
        if (!len) return [];
        // [prev2, prev, current, next, next2]
        const indices = [
            getIndex(index - 2),
            getIndex(index - 1),
            getIndex(index),
            getIndex(index + 1),
            getIndex(index + 2)
        ];

        const slotNames: SlotType[] = ['offLeft', 'left', 'center', 'right', 'offRight'];

        return indices.map((idx, i) => ({
            data: safeSlides[idx],
            slot: slotNames[i]
        }));
    }, [index, len, safeSlides]);

    // 4. Controls
    const goNext = () => {
        if (isAnimating) return;
        setDirection(1);
        setIsAnimating(true);
        setIndex((prev) => getIndex(prev + 1));
    };

    const goPrev = () => {
        if (isAnimating) return;
        setDirection(-1);
        setIsAnimating(true);
        setIndex((prev) => getIndex(prev - 1));
    };

    // Auto-reset animation lock
    useEffect(() => {
        if (!isAnimating) return;
        const timeout = setTimeout(() => setIsAnimating(false), 800);
        return () => clearTimeout(timeout);
    }, [isAnimating]);

    // Autoplay
    useEffect(() => {
        if (!autoplayMs || autoplayMs <= 0) return;
        if (isPaused || isAnimating) return;
        const id = window.setInterval(goNext, autoplayMs);
        return () => window.clearInterval(id);
    }, [autoplayMs, isPaused, isAnimating]);

    // Keyboard
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isAnimating]);

    if (!len) return null;

    return (
        <section className="relative w-full aspect-[1440/807] max-h-[1024px] bg-[#0A0A0A] flex items-center justify-center py-12 md:py-20 overflow-hidden">
            <div
                className="relative z-10 w-[90%] h-[70%] flex flex-col justify-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="relative w-full h-full">
                    <AnimatePresence initial={false} mode="popLayout">
                        {windowSlides.map(({ data, slot }) => {
                            const vars = SLOTS[slot];
                            const isCenter = slot === 'center';

                            return (
                                <motion.div
                                    key={data.uniqueKey}
                                    className="absolute inset-0 h-full"
                                    initial={false} // Let it animate from current position if it exists
                                    animate={{
                                        left: vars.left,
                                        width: vars.width,
                                        scale: vars.scale,
                                        opacity: vars.opacity,
                                        zIndex: vars.zIndex,
                                        x: vars.x, // Centers the element on its 'left' coordinate
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1], // Smooth custom ease
                                    }}
                                >
                                    {/* Card Content */}
                                    <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black">
                                        <Image
                                            src={data.image}
                                            alt={data.title}
                                            fill
                                            className="object-cover transition-all duration-700"
                                            style={{
                                                filter: isCenter ? 'brightness(1)' : 'brightness(0.5) blur(1px)'
                                            }}
                                            priority={isCenter}
                                        />

                                        {/* Overlay Content (Only for Center) */}
                                        <AnimatePresence mode="wait">
                                            {isCenter && (
                                                <motion.div
                                                    key={`content-${data.uniqueKey}`}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 md:p-12 lg:p-16"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                                    <div className="relative z-10 max-w-2xl px-4">
                                                        <motion.h2
                                                            className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2 md:mb-4 uppercase tracking-[0.1em] drop-shadow-2xl"
                                                        >
                                                            {data.title}
                                                        </motion.h2>
                                                        <motion.p
                                                            className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-6 md:mb-8 line-clamp-3 font-medium max-w-lg mx-auto drop-shadow-lg"
                                                        >
                                                            {data.description}
                                                        </motion.p>
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="px-6 md:px-10 py-3 bg-[#A68C54]/90 backdrop-blur-md border border-white/30 text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-[#A68C54] transition-colors rounded-sm shadow-xl"
                                                        >
                                                            {data.ctaText}
                                                        </motion.button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[100] flex justify-between px-[2%] md:px-[5%] pointer-events-none">
                        <button
                            onClick={goPrev}
                            disabled={isAnimating}
                            className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all hover:bg-[#A68C54] hover:border-[#A68C54] shadow-2xl group disabled:opacity-50"
                            aria-label="Previous"
                        >
                            <ChevronIcon direction="right" className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform" />
                        </button>

                        <button
                            onClick={goNext}
                            disabled={isAnimating}
                            className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all hover:bg-[#A68C54] hover:border-[#A68C54]  shadow-2xl group disabled:opacity-50"
                            aria-label="Next"
                        >
                            <ChevronIcon direction="left" className="w-4 h-4 md:w-5 md:h-5 text-white  transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
