'use client';

import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    image: string;
}

const BlogCard = ({ title, date, time, description, image }: BlogCardProps) => {
    return (
        <div className="flex flex-col gap-4 group cursor-pointer h-full">
            {/* Image Container with Rounded Corners & Hover Detail */}
            <div className="relative aspect-[4/3] rounded-t-2xl md:rounded-t-3xl overflow-hidden shadow-sm transition-all duration-300">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Detail Button Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 rounded-full border border-white/40 bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-widest text-[10px] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-[#A68C54] hover:border-[#A68C54]">
                        Detail
                    </button>
                </div>
            </div>

            {/* Metadata Section */}
            <div className="space-y-3 px-1">
                <h3 className="text-base md:text-lg font-bold text-[#1A1A1A] uppercase tracking-tight line-clamp-2 leading-tight group-hover:text-[#A68C54] transition-colors">
                    {title}
                </h3>

                <div className="flex items-center gap-4 text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                        <span className="opacity-60">🕒</span>
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="opacity-60">📅</span>
                        <span>{date}</span>
                    </div>
                </div>

                <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
