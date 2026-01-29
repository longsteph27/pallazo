'use client';

import { SquareIcon } from '@/components/icons';
import React from 'react';

const benefits = [
    {
        title: 'A CULTURE OF PRESTIGE & RESPECT',
        desc: 'We uphold a high-performance, high-recognition environment where every voice matters.'
    },
    {
        title: 'CONTINUOUS TRAINING & DEVELOPMENT',
        desc: 'We offer workshops, skills training, and leadership pathways tailored to your role.'
    },
    {
        title: 'ATTRACTIVE COMPENSATION & INCENTIVES',
        desc: 'Competitive salary packages, performance bonuses, and recognition programs.'
    },
    {
        title: 'STAFF MEALS & UNIFORM PROVIDED',
        desc: 'Enjoy quality staff meals daily and provided uniforms with laundry service.'
    },
    {
        title: 'HEALTH & WELLNESS',
        desc: 'Comprehensive health coverage and wellness initiatives for our entire team.'
    },
    {
        title: 'TEAM EVENTS & CELEBRATIONS',
        desc: 'From team outings to festive events, we celebrate achievements together.'
    }
];

const CultureBenefits = () => {
    return (
        <section className="bg-[#F9F7ED] py-24 pb-32 overflow-hidden border-t border-[#E6DECF]/50">
            <div className="max-w-[1320px] mx-auto px-4">

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] text-center mb-24 uppercase tracking-[0.2em] leading-tight">
                    CULTURE & EMPLOYEE BENEFITS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="relative flex items-center group max-w-[420px] mx-auto w-full h-[180px]">
                            {/* SVG Container: Positioned middle-left */}
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-[100%] flex items-center justify-center z-10">
                                {/* Custom SVG Background Circle */}
                                <div className="relative opacity-80 group-hover:scale-110 transition-all duration-700">
                                    <svg width="49" height="99" viewBox="0 0 49 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M49 0C42.5652 0 36.1935 1.28035 30.2485 3.76796C24.3036 6.25557 18.9018 9.90172 14.3518 14.4982C9.80169 19.0947 6.19238 24.5516 3.7299 30.5572C1.26742 36.5628 -2.81273e-07 42.9996 0 49.5C2.81273e-07 56.0004 1.26742 62.4372 3.7299 68.4428C6.19238 74.4484 9.8017 79.9053 14.3518 84.5018C18.9018 89.0983 24.3036 92.7444 30.2485 95.232C36.1935 97.7196 42.5652 99 49 99L49 49.5L49 0Z" fill="#F5EFD4" fill-opacity="0.62" />
                                        <path d="M49 13C44.2724 13 39.5911 13.9441 35.2234 15.7784C30.8557 17.6127 26.8871 20.3013 23.5442 23.6906C20.2012 27.0799 17.5495 31.1037 15.7403 35.5321C13.9312 39.9604 13 44.7068 13 49.5C13 54.2932 13.9312 59.0396 15.7403 63.4679C17.5495 67.8963 20.2012 71.9201 23.5442 75.3094C26.8871 78.6987 30.8557 81.3873 35.2234 83.2216C39.5911 85.0559 44.2724 86 49 86L49 49.5L49 13Z" fill="#F2E8C4" />
                                        <path d="M49 19C45.0603 19 41.1593 19.7889 37.5195 21.3217C33.8797 22.8544 30.5725 25.1011 27.7868 27.9332C25.001 30.7654 22.7913 34.1277 21.2836 37.8282C19.776 41.5286 19 45.4947 19 49.5C19 53.5053 19.776 57.4714 21.2836 61.1718C22.7913 64.8723 25.001 68.2346 27.7868 71.0668C30.5726 73.8989 33.8797 76.1456 37.5195 77.6783C41.1593 79.2111 45.0603 80 49 80L49 49.5L49 19Z" fill="#E5C683" fill-opacity="0.63" />
                                        <path d="M49 23C45.5856 23 42.2047 23.6854 39.0502 25.0172C35.8958 26.3489 33.0295 28.3009 30.6152 30.7617C28.2009 33.2224 26.2858 36.1438 24.9791 39.3589C23.6725 42.574 23 46.02 23 49.5C23 52.98 23.6725 56.426 24.9791 59.6411C26.2858 62.8562 28.2009 65.7776 30.6152 68.2383C33.0295 70.6991 35.8958 72.6511 39.0502 73.9828C42.2047 75.3146 45.5856 76 49 76L49 49.5V23Z" fill="url(#paint0_linear_385_1896)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_385_1896" x1="49" y1="49" x2="29.5" y2="36.5" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#927F45" />
                                                <stop offset="1" stop-color="#DCC17B" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Square Logo Icon: On top of circles */}
                                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-1/2 z-20 group-hover:scale-110 transition-transform duration-500">
                                        <SquareIcon />
                                    </div>
                                </div>

                            </div>

                            {/* Text Content in Premium Box */}
                            <div className="pl-20 pr-8 py-10 bg-[#F9F7ED] border border-[#E6DECF] rounded-[15px] shadow-sm flex flex-col justify-center flex-grow group-hover:shadow-xl group-hover:border-[#B29E71]/30 transition-all duration-500 relative z-0 h-full">
                                <h4 className="text-[#1A1A1A] font-bold text-[14px] md:text-[15px] mb-4 uppercase tracking-[0.1em] leading-tight">
                                    {benefit.title}
                                </h4>
                                <p className="text-[#5A6B7C] text-xs md:text-sm leading-relaxed font-medium">
                                    {benefit.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CultureBenefits;
