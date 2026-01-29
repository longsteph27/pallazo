'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const jobs = [
    { id: 1, title: 'ROOM SERVICE', category: 'SECTION 1', image: 'https://picsum.photos/seed/job1/400/600' },
    { id: 2, title: 'JOB NAME', category: 'SECTION 1', image: 'https://picsum.photos/seed/job2/400/600' },
    { id: 3, title: 'VALET PARKING', category: 'SECTION 1', image: 'https://picsum.photos/seed/job3/400/600' },
    { id: 4, title: 'SECURITY GUARD', category: 'SECTION 1', image: 'https://picsum.photos/seed/job4/400/600' },
    { id: 5, title: 'RECEPTIONIST', category: 'SECTION 2', image: 'https://picsum.photos/seed/job5/400/600' },
    { id: 6, title: 'CHEF DE PARTIE', category: 'SECTION 2', image: 'https://picsum.photos/seed/job6/400/600' },
    { id: 7, title: 'BARTENDER', category: 'SECTION 2', image: 'https://picsum.photos/seed/job7/400/600' },
];

const JobOpenings = () => {
    const [activeTab, setActiveTab] = useState('SECTION 1');

    return (
        <section className="bg-[#F9F7ED] py-24 pb-32">
            <div className="max-w-[1320px] mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#1A1A1A] mb-6 uppercase tracking-widest leading-tight">
                        YOUR NEXT CHAPTER <br /> STARTS HERE
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed text-sm">
                        We are always on the lookout for passionate, talented individuals ready to make their mark in the luxury
                        entertainment industry. Explore current vacancies and apply to join the Palazzo team.
                    </p>

                    {/* Filter Tabs */}
                    <div className="inline-flex p-1.5 bg-[#F9F7ED] border border-[#A68C54]/30 rounded-full shadow-sm mb-12">
                        {['SECTION 1', 'SECTION 2', 'SECTION 3'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-10 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === tab
                                        ? 'bg-[#B29E71] text-white shadow-lg'
                                        : 'text-[#A68C54] hover:bg-[#B29E71]/10'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {jobs.filter(j => j.category === activeTab).map((job) => (
                        <div
                            key={job.id}
                            className="relative aspect-[334/496] group rounded-[10px] overflow-hidden shadow-2xl cursor-pointer bg-white"
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={job.image}
                                    alt={job.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Gradient Overlay: Always visible, darkens on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95"></div>
                            </div>

                            {/* Card Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h4 className="text-white text-xl font-bold uppercase tracking-[0.2em] mb-4 group-hover:mb-6 transition-all duration-700">
                                    {job.title}
                                </h4>

                                {/* Detail shown on hover with smooth slide & fade */}
                                <div className="max-h-0 overflow-hidden group-hover:max-h-52 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                                    <p className="text-white/80 text-xs leading-relaxed mb-6 font-medium tracking-wide">
                                        This is title of the travel package that is being featured here.
                                    </p>
                                    <button className="w-full py-3.5 bg-gradient-to-r from-[#B29E71] to-[#927F45] text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:shadow-[0_0_20px_rgba(178,158,113,0.4)] transition-all rounded-[1px] border border-white/10">
                                        APPLY
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default JobOpenings;
