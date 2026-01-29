import React from 'react';
import Image from 'next/image';

interface PromotionCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    className?: string;
}

const PromotionCard = ({ title, description, image, date, time, className = '' }: PromotionCardProps) => {
    return (
        <div className={`flex flex-col overflow-hidden ${className}`}>
            {/* Image Section */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg group">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content Section */}
            <div className="mt-6 flex flex-col space-y-4">
                <h3 className="text-xl md:text-2xl font-serif font-bold uppercase tracking-tight text-[#1A1A1A]">
                    {title}
                </h3>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-2 border-y border-[#D8BD96] py-4">
                    <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Date</span>
                        <span className="text-base font-bold text-[#1A1A1A]">{date}</span>
                    </div>
                    <div className="flex flex-col pl-4">
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Time</span>
                        <span className="text-base font-bold text-[#1A1A1A]">{time}</span>
                    </div>
                </div>

                <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default PromotionCard;
