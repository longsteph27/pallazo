'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppPreviewHalfCircleSVG, SquareIcon } from "@/components/icons";
import { MobileAppProps } from "@/types/mobile-app";

interface AppPreviewClientProps {
    data: MobileAppProps;
}

const AppleLogo = () => (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5042 5.43408C13.4281 5.47846 11.6173 6.41497 11.6173 8.49144C11.7026 10.8595 13.9025 11.69 13.9402 11.69C13.9025 11.7344 13.6081 12.8213 12.7361 13.9607C12.044 14.9421 11.2759 15.9317 10.1094 15.9317C8.9999 15.9317 8.60161 15.2776 7.32138 15.2776C5.94653 15.2776 5.55751 15.9317 4.50488 15.9317C3.33845 15.9317 2.51342 14.8891 1.78362 13.9169C0.835513 12.6444 0.0296507 10.6474 0.00120119 8.73003C-0.0179713 7.71399 0.19107 6.71523 0.721715 5.8669C1.47068 4.68257 2.80781 3.87861 4.26801 3.8521C5.38681 3.81694 6.38255 4.56788 7.06534 4.56788C7.71967 4.56788 8.943 3.8521 10.3271 3.8521C10.9246 3.85267 12.5177 4.02038 13.5042 5.43408ZM6.97071 3.64923C6.77156 2.72136 7.32138 1.79349 7.83347 1.20162C8.48781 0.485834 9.52127 0 10.4125 0C10.4694 0.927869 10.1088 1.83787 9.46437 2.50063C8.8861 3.21642 7.89037 3.75527 6.97071 3.64923Z" fill="white" />
    </svg>
);

const GooglePlayLogo = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_572_7862" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="4" y="1" width="17" height="19">
            <path d="M19.9465 9.56001C20.7887 10.0235 20.7887 11.2202 19.9465 11.6837L6.47615 19.0961C5.65584 19.5475 4.64648 18.9617 4.64648 18.0342L4.64649 3.20946C4.64649 2.28199 5.65584 1.69622 6.47615 2.14762L19.9465 9.56001Z" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_572_7862)">
            <path d="M5.06783 18.9553L13.4702 10.5057L5.20621 2.19531C4.87652 2.40666 4.64648 2.77156 4.64648 3.21432V18.0391C4.64648 18.4168 4.81392 18.7379 5.06783 18.9553Z" fill="white" stroke="#01050F" strokeWidth="0.590062" />
            <path d="M19.945 9.55793C20.7873 10.0214 20.7873 11.2181 19.945 11.6816L16.5467 13.5516L13.4688 10.4987L16.3897 7.60156L19.945 9.55793Z" fill="white" stroke="#01050F" strokeWidth="0.590062" />
            <path d="M16.5487 13.5529L13.4707 10.5L5.06836 18.9496C5.43786 19.266 5.99049 19.3628 6.47671 19.0953L16.5487 13.5529Z" fill="white" stroke="#01050F" strokeWidth="0.590062" />
            <path d="M5.20703 2.19044L13.471 10.5008L16.392 7.60364L6.47695 2.14762C6.04826 1.91172 5.56794 1.95908 5.20703 2.19044Z" fill="white" stroke="#01050F" strokeWidth="0.590062" />
        </g>
    </svg>
);

const AppPreviewClient = ({ data }: AppPreviewClientProps) => {
    const title = data.translation?.title;
    const description = data.translation?.description;
    const imgMobile = data.imgMobile;
    const qrCodeImg = data.qrCodeImg;

    return (
        <section className="pb-10 md:pb-16 relative overflow-hidden bg-[#F9F7ED]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-end gap-12 sm:gap-20 md:gap-28 relative z-10">
                {/* Phone Mockup Section */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 relative flex flex-col items-center md:items-end"
                >
                    <div className="w-5/6 flex justify-center relative h-[450px] sm:h-[500px] md:h-[550px]">
                        {/* Gold Box behind phone */}
                        <div className="w-full max-w-[490px] h-[280px] sm:h-[320px] md:h-[342px] bg-gradient-to-b from-[#F9F7ED] to-[#B19D70] relative rounded-b-3xl mt-auto flex items-end justify-center">
                            {/* Phone Mockup Frame */}
                            <div className="w-[240px] sm:w-[280px] md:w-[338px] overflow-hidden">
                                <div className="relative w-full h-full flex flex-col items-center">
                                    {imgMobile && (
                                        <Image
                                            src={imgMobile}
                                            alt="Palazzo App Interface"
                                            width={490}
                                            height={342}
                                            className="object-contain w-full h-full"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <SquareIcon className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none w-8 sm:w-10 md:w-12 z-50" />
                        {/* Half Circle SVG - Adjusted to match phone width on mobile */}
                        <div className="absolute bottom-0 translate-y-[100%] left-1/2 -translate-x-1/2 pointer-events-none w-[240px] sm:w-[280px] md:w-[338px]">
                            <AppPreviewHalfCircleSVG className="w-full h-full" />
                        </div>
                    </div>
                    {/* Mobile Background Ribbon - Restored with Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full flex justify-center pointer-events-none lg:h-[126px] h-[72px] bg-[linear-gradient(90deg,#F9F7ED_0%,#EAE2CC_50%,#F9F7ED_100%)] block md:hidden"
                    >
                        <div className="absolute top-0 pointer-events-none w-[240px] sm:w-[280px] md:w-[338px]">
                            <AppPreviewHalfCircleSVG className="w-full h-full" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-[#1a1a1a] mb-12 sm:mb-20 md:mb-28 text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-tight tracking-wide uppercase max-w-md">
                        {title}
                    </h2>

                    <p className="text-[13px] sm:text-sm leading-relaxed text-[#6d6d6d] max-w-lg font-light tracking-wide md:pr-12">
                        {description}
                    </p>

                    {/* QR Code & Store Section - Mobile Vertical View */}
                    <div className="flex flex-row items-start gap-4 pt-4 md:hidden w-full text-left">
                        {qrCodeImg && (
                            <div className="w-16 h-16 relative mb-2">
                                <Image src={qrCodeImg} alt="QR Code" fill className="object-contain" />
                            </div>
                        )}
                        <div className="flex flex-col items-start gap-2">
                            <p className="text-[13px] font-bold uppercase tracking-widest text-[#1a1a1a]">Available now on</p>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-[10px] hover:bg-[#333] transition-colors">
                                    <AppleLogo />
                                    <div className="text-left">
                                        <p className="text-xs font-bold leading-tight">App Store</p>
                                    </div>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-1 bg-black text-white rounded-[10px] hover:bg-[#333] transition-colors">
                                    <GooglePlayLogo />
                                    <div className="text-left">
                                        <p className="text-xs font-bold leading-tight">Google Play</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Ribbon Layer - Desktop View (QR & Stores) */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-full flex justify-center pointer-events-none overflow-hidden lg:h-[126px] h-[72px] bg-[linear-gradient(90deg,#F9F7ED_0%,#EAE2CC_50%,#F9F7ED_100%)] hidden md:block"
            >
                <div className="max-w-7xl mx-auto w-full h-full px-4 sm:px-6 flex items-center justify-end">
                    <div className="flex items-center gap-8 pointer-events-auto pr-16 lg:pr-32">
                        {qrCodeImg && (
                            <div className="w-20 h-20 md:w-24 md:h-24 relative">
                                <Image src={qrCodeImg} alt="QR Code" fill className="object-contain" />
                            </div>
                        )}
                        <div className="space-y-3">
                            <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#1a1a1a]">Available now on</p>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2.5 px-6 py-2.5 bg-black text-white rounded-[10px] hover:bg-[#333] transition-all">
                                    <AppleLogo />
                                    <div className="text-left">
                                        <p className="text-[9px] leading-tight">Download on the</p>
                                        <p className="text-sm font-bold leading-tight">App Store</p>
                                    </div>
                                </button>
                                <button className="flex items-center gap-2.5 px-6 py-2.5 bg-black text-white rounded-[10px] hover:bg-[#333] transition-all">
                                    <GooglePlayLogo />
                                    <div className="text-left">
                                        <p className="text-[9px] leading-tight">GET IT ON</p>
                                        <p className="text-sm font-bold leading-tight">Google Play</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AppPreviewClient;
