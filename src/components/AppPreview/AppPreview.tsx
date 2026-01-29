import React from "react";
import Image from "next/image";
import { AppPreviewHalfCircleSVG, SquareIcon } from "@/components/icons";

const AppPreview = () => {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden bg-[#F9F7ED]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-end gap-12 sm:gap-20 md:gap-28 relative z-10">
                {/* Phone Mockup Section */}
                <div className="w-full md:w-1/2 relative flex flex-col items-center md:items-end">
                    <div className="w-full flex justify-center relative pt-20 h-[450px] sm:h-[500px] md:h-[550px]">
                        {/* Gold Box behind phone */}
                        <div className="w-full max-w-[490px] h-[280px] sm:h-[320px] md:h-[342px] bg-gradient-to-b from-[#F9F7ED] to-[#B19D70] relative rounded-b-3xl opacity-80 mt-auto flex items-end justify-center">
                            {/* Phone Mockup Frame */}
                            <div className="w-[240px] sm:w-[280px] md:w-[338px] h-[400px] sm:h-[450px] md:h-[494px] bg-[#1a1a1a] rounded-t-[2.5rem] rounded-b-0 z-20 shadow-2xl border-x-[8px] border-t-[8px] border-[#2A2A2A] overflow-hidden">
                                <div className="relative w-full h-full flex flex-col items-center">
                                    <Image
                                        src="https://api-pallazo.tsx.vn/assets/49f5f9ed-d8d8-4e6c-91f9-99d524591a64?key=system-large-contain&v=2026-01-26T04%3A47%3A30.975Z"
                                        alt="Palazzo App Interface"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <SquareIcon className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none w-8 sm:w-10 md:w-12 z-50" />
                        {/* Half Circle SVG - Adjusted to match phone width on mobile */}
                        <div className="absolute bottom-0 translate-y-[100%] left-1/2 -translate-x-1/2 pointer-events-none w-[240px] sm:w-[280px] md:w-[338px]">
                            <AppPreviewHalfCircleSVG className="w-full h-full" />
                        </div>
                    </div>
                    <div className="relative w-full flex justify-center pointer-events-none lg:h-[126px] h-[72px] bg-[linear-gradient(90deg,#F9F7ED_0%,#EAE2CC_50%,#F9F7ED_100%)] block md:hidden">

                        <div className="absolute top-0 pointer-events-none w-[240px] sm:w-[280px] md:w-[338px]">
                            <AppPreviewHalfCircleSVG className="w-full h-full" />
                        </div>
                    </div>

                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-[#1a1a1a] mb-12 sm:mb-20 md:mb-28 text-center md:text-left flex flex-col items-center md:items-start">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-tight tracking-wide uppercase max-w-md">
                        THE COMPLETE PALAZZO EXPERIENCE – ALL IN ONE PLATFORM
                    </h2>

                    <p className="text-[13px] sm:text-sm leading-relaxed text-[#6d6d6d] max-w-lg font-light tracking-wide md:pr-12">
                        Explore the world of Palazzo with the official Palazzo Club Mobile Application. Stay informed with live Jackpot updates, review recent wins, reserve your preferred machine ahead of arrival, receive invitations to upcoming events, redeem points for exclusive privileges, and enjoy a suite of bespoke services effortlessly.
                    </p>

                    {/* Download & QR Section (Mobile Focused) */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 md:hidden">
                        {/* Placeholder QR Code for landing page */}
                        <div className="hidden sm:block w-20 h-20 bg-white p-2 rounded-xl shadow-sm border border-[#EAE2CC]">
                            <div className="w-full h-full bg-[#F9F7ED] flex items-center justify-center text-[10px] text-[#B19D70] font-medium text-center">QR CODE</div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">Available now on</p>
                            <div className="flex items-center gap-3">
                                {/* App Store Badge Placeholder */}
                                <div className="w-32 h-10 bg-black rounded-md flex items-center justify-center gap-2 px-3 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
                                    <div className="w-5 h-5 bg-white rounded-full opacity-20" />
                                    <div className="text-white text-left">
                                        <p className="text-[7px] leading-tight">Download on the</p>
                                        <p className="text-xs font-bold leading-tight">App Store</p>
                                    </div>
                                </div>
                                {/* Google Play Badge Placeholder */}
                                <div className="w-32 h-10 bg-black rounded-md flex items-center justify-center gap-2 px-3 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
                                    <div className="w-5 h-5 bg-white rounded-full opacity-20" />
                                    <div className="text-white text-left">
                                        <p className="text-[7px] leading-tight">GET IT ON</p>
                                        <p className="text-xs font-bold leading-tight">Google Play</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Download Button - Preserved */}
                    <div className="hidden md:block pt-4">
                        <button className="px-10 py-3 border border-[#B09860] text-[#B09860] uppercase text-[11px] font-bold tracking-[0.2em] rounded-full hover:bg-[#B09860] hover:text-white transition-all duration-500">
                            Download Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Ribbon Layer */}
            <div className="w-full flex justify-center pointer-events-none overflow-hidden lg:h-[126px] h-[72px] bg-[linear-gradient(90deg,#F9F7ED_0%,#EAE2CC_50%,#F9F7ED_100%)] hidden md:block" />
        </section>
    );
};

export default AppPreview;
