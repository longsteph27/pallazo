'use client';

import React from 'react';
import Image from 'next/image';

const CareersHero = () => {
    return (
        <section className="relative bg-[#F9F7ED] pt-20 pb-16 md:pt-40 md:pb-24 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 relative z-10">

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">

                    {/* Part 1: Main Title */}
                    <div className="w-full lg:w-[25%]">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight uppercase tracking-wider">
                            WHY WORK <br /> WITH US
                        </h2>
                    </div>

                    {/* Part 2: Description Text */}
                    <div className="w-full lg:w-[40%] space-y-6">
                        <h3 className="text-[#A68C54] font-bold text-sm md:text-base uppercase tracking-[0.2em]">
                            STEP INTO A WORLD OF EXCELLENCE
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            At Palazzo Club, we don't just offer jobs, we build careers in an environment that celebrates ambition, elegance, and service excellence.
                            Our team thrives on shared values: professionalism, creativity, and a relentless drive for improvement.
                            Whether you're front-of-house or behind the scenes, your contribution helps craft an extraordinary guest experience.
                            We invest in your growth through continuous training, mentorship, and leadership development—because when you succeed, so do we.
                        </p>
                    </div>

                    {/* Part 3: Image Section */}
                    <div className="w-full lg:w-[35%] flex justify-center lg:justify-end relative">
                        <div className="relative w-full max-w-[419px] aspect-[410/572]">
                            {/* Decorative Gradient Band: Ends at image center, bottom aligned with image bottom */}
                            <div className="absolute bottom-0 -left-[200%] right-[50%] z-0 hidden lg:block pointer-events-none  py-[1px] bg-gradient-to-l from-[#B9A472] to-[#F9F7ED] h-[140px]">
                                <div
                                    className="bg-gradient-to-l from-[#EAE2CC] to-[#F9F7ED] h-full w-full"
                                />
                            </div>

                            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[1.5px] border-[#A68C54]/20 shadow-2xl bg-white">
                                <Image
                                    src="https://picsum.photos/seed/careershero/500/700"
                                    alt="Careers at Palazzo"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareersHero;
