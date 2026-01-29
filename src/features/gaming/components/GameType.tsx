import React from "react";
import { HighlightIconSvg } from "../assets/highlight-icon";
import { PrimaryIcon } from "@/components/icons";

interface GameTypeProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: React.ReactNode;
    onClose?: () => void;
}

export default function GameType({
    children,
    title = "E-Table Games",
    subtitle = "Classic Games, Modern Precision",
    description = "Enjoy the refined thrill of electronic table games in an atmosphere of elegance and ease. From Roulette, Sic-bo, and Baccarat to Blackjack and our exclusive Black Pearl Roulette, each game blends tradition with innovation for a seamless, high-speed play.",
    icon = <PrimaryIcon />,
    onClose
}: GameTypeProps) {
    return (
        <div className='relative max-w-[1427px] flex mx-auto rounded-[32px] lg:aspect-[1427/891] min-h-[100dvh] lg:min-h-0 bg-gradient-to-b from-[#01050F] via-[#193247] to-[#01050F] overflow-hidden border border-[#1E293B]'>
            <div className='w-full h-full flex flex-col justify-start items-center space-y-6 lg:space-y-6 pt-16 lg:pt-0'>
                {/* Header */}
                <div className='flex flex-col items-center px-8 lg:py-4'>
                    <div className='flex items-center gap-3'>
                        {icon}
                        <h1 className='text-3xl lg:text-4xl font-bold tracking-wider text-white uppercase text-center'>{title}</h1>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className='absolute top-6 lg:top-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0 text-white/70 hover:text-white transition-colors'
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Divider */}
                <div className='bg-gradient-to-r from-transparent via-[#B9A472] to-transparent w-full h-[1px] lg:h-[2px]' />

                {/* Subtitle and Description */}
                <div className='max-w-3xl mx-auto text-center px-6 lg:px-8 mt-4'>
                    <h2 className='text-lg lg:text-xl font-bold mb-4 lg:mb-2 tracking-wide text-white uppercase'>
                        {subtitle}
                    </h2>
                    <p className='text-[13px] lg:text-sm text-gray-300 leading-relaxed max-w-[90%] mx-auto opacity-80'>
                        {description}
                    </p>
                </div>
                <div className="flex-1 w-full flex flex-col min-h-0">
                    {children}
                </div>
            </div>
        </div>
    )
}
