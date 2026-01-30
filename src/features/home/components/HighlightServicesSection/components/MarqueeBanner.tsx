'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SquareIcon from './SquareIcon';
import clsx from 'clsx';

interface MarqueeBannerProps {
    className?: string;
}

const MarqueeBanner: React.FC<MarqueeBannerProps> = ({ className }) => {
    const text = "HIGHLIGHT SERVICES";

    // Create an array of items to repeat for the infinite scroll effect
    const items = Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 shrink-0">
            <span className={clsx("text-[20px] md:text-[28px] lg:text-[32px] font-serif font-bold text-[#1A1A1A] uppercase", i % 2 == 0 ? "text-[#AF9669]" : "")}>
                {text}
            </span>
            <SquareIcon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
    ));

    return (
        <div className={`w-full overflow-hidden bg-gradient-to-r from-[#E5DBC3] via-[#FBF9F1] to-[#E5DBC3] py-1 border-y border-[#D4C5A6]/40 ${className}`}>
            <motion.div
                className="flex gap-2 whitespace-nowrap"
                animate={{
                    x: [0, "-50%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                <div className="flex gap-3 shrink-0">
                    {items}
                </div>
                <div className="flex gap-3 shrink-0">
                    {items}
                </div>
            </motion.div>
        </div>
    );
};

export default MarqueeBanner;
