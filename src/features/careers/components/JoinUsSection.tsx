'use client';

import React from 'react';

const JoinUsSection = () => {
    return (
        <section className="bg-[#F9F7ED] py-24 pb-40">
            <div className="max-w-[1320px] mx-auto px-4">

                <div className="relative w-full max-w-[1100px] mx-auto bg-[#E4DCC7]/40 rounded-[30px] px-6 md:px-12 pt-6 md:pt-12 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">

                    {/* Left Content */}
                    <div className="flex-1 space-y-8 z-10">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] uppercase tracking-wider leading-tight">
                            JOIN OUR WORLD OF PRESTIGE
                        </h2>

                        <div className="space-y-4">
                            <p className="text-gray-600 text-base">
                                Fill out our online application form or email your resume to
                            </p>
                            <div className="space-y-2 font-bold text-[#1A1A1A] text-sm">
                                <p>• careers@palazzoclub.vn</p>
                                <p>• mailto:careers@palazzoclub.vn</p>
                            </div>
                            <p className="text-gray-600 text-sm italic max-w-sm">
                                We look forward to welcoming you to the Palazzo family. Submit your CV to us now!
                            </p>
                        </div>

                        <button className="px-12 py-4 bg-[#B29E71] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#927F45] transition-all rounded-[1px] shadow-xl">
                            CTA BUTTON
                        </button>
                    </div>

                    {/* Right CV Upload SVG Section */}
                    <div className="w-full lg:w-[500px] relative">
                        <svg
                            className="w-full h-auto drop-shadow-2xl"
                            viewBox="0 0 543 461"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M7 53C7 23.7289 30.7289 0 60 0H480C510.928 0 536 25.0721 536 56V460H7V53Z" fill="#F9F7ED" />

                            {/* foreignObject for centered text "info upload cv" */}
                            <foreignObject x="60" y="100" width="420" height="200">
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-[#A68C54]/40 font-bold text-2xl md:text-4xl uppercase tracking-[0.2em] text-center select-none">
                                        info upload cv
                                    </span>
                                </div>
                            </foreignObject>

                            <path d="M270.472 393.698L0 273V461H543V273L270.472 393.698Z" fill="url(#paint0_linear_373_2452)" />
                            <path d="M270 323L7 460L535 460L270 323Z" fill="#F9F7ED" fillOpacity="0.59" />

                            <ellipse cx="269.5" cy="367" rx="50.5" ry="50" fill="#CFAC77" fillOpacity="0.35" />
                            <path d="M269.5 325.5C292.702 325.5 311.5 344.086 311.5 367C311.5 389.914 292.702 408.5 269.5 408.5C246.298 408.5 227.5 389.914 227.5 367C227.5 344.086 246.298 325.5 269.5 325.5Z" fill="url(#paint1_linear_373_2452)" stroke="url(#paint2_linear_373_2452)" />

                            {/* foreignObject for Upload Button & Text */}
                            <foreignObject x="219" y="325" width="100" height="120">
                                <div className="w-full h-full flex flex-col items-center justify-center group cursor-pointer">
                                    {/* <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#B29E71] to-[#927F45] flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500 border border-white/20">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="17 8 12 3 7 8" />
                                            <line x1="12" y1="3" x2="12" y2="15" />
                                        </svg>
                                    </div> */}
                                    <span className="text-[#1A1A1A] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] mt-2 group-hover:text-[#B29E71] transition-colors text-center">
                                        UPLOAD
                                    </span>
                                </div>
                            </foreignObject>

                            <defs>
                                <linearGradient id="paint0_linear_373_2452" x1="271.5" y1="273" x2="271.5" y2="461" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E4DCC7" />
                                    <stop offset="1" stopColor="#C3B38E" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_373_2452" x1="267" y1="409" x2="315" y2="334.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#95793C" />
                                    <stop offset="1" stopColor="#C8B281" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_373_2452" x1="265.302" y1="325" x2="269.505" y2="409" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#999999" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default JoinUsSection;
