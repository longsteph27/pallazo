'use client';

import React, { useState } from 'react';
import BlogCard from './BlogCard';

const blogData = [
    {
        id: 1,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night.',
        image: 'https://picsum.photos/seed/blog-c1/400/300'
    },
    {
        id: 2,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night.',
        image: 'https://picsum.photos/seed/blog-c2/400/300'
    },
    {
        id: 3,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night.',
        image: 'https://picsum.photos/seed/blog-c3/400/300'
    },
    {
        id: 4,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night.',
        image: 'https://picsum.photos/seed/blog-c4/400/300'
    },
    {
        id: 5,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night.',
        image: 'https://picsum.photos/seed/blog-c5/400/300'
    },
    {
        id: 6,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night.',
        image: 'https://picsum.photos/seed/blog-c6/400/300'
    },
    {
        id: 7,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night.',
        image: 'https://picsum.photos/seed/blog-c7/400/300'
    },
    {
        id: 8,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every Thursday night.',
        image: 'https://picsum.photos/seed/blog-c8/400/300'
    }
];

const filters = ['SECTION 1', 'SECTION 2', 'SECTION 3'];

const BlogGrid = () => {
    const [activeFilter, setActiveFilter] = useState('SECTION 1');

    return (
        <section className="py-20 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-4 space-y-16">
                {/* Header & Filter Toggle */}
                <div className="flex flex-col items-center space-y-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] uppercase tracking-[0.1em]">
                        ALL OUR BLOGS
                    </h2>

                    {/* Toggle Pill */}
                    <div className="inline-flex items-center p-1 rounded-full border border-[#D8BD96] w-full max-w-lg">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`flex-1 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter === filter
                                        ? 'bg-[#A68C54] text-white shadow-lg'
                                        : 'text-[#A68C54] hover:bg-[#FAF6EE]'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {blogData.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>

                {/* Show More Logic (Optional but good for UI) */}
                <div className="flex justify-center pt-8">
                    <button className="flex items-center gap-2 px-10 py-3 rounded-lg border border-[#D8BD96] text-[#A68C54] font-bold uppercase tracking-widest text-[10px] transition-all hover:bg-[#FAF6EE]">
                        Show more
                        <span className="text-[10px]">▼</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
