'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import StatsJackpotCard from '@/features/home/components/Stats/StatsJackpot';

interface BannerProps {
    images: string[];
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    showJackpotStats?: boolean;
    jackpotData?: {
        left: { title: string; value: string; subtitle?: string };
        right: { title: string; value: string; subtitle?: string };
        buttonLabel?: string;
        onButtonClick?: () => void;
    };
    className?: string;
}

const Banner = ({
    images,
    title,
    subtitle,
    showJackpotStats = false,
    jackpotData,
    className = ""
}: BannerProps) => {
    return (
        <section className={`relative w-full aspect-[390/853] md:aspect-[1440/1024] md:max-h-[1024px] overflow-hidden ${className}`}>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={images.length > 1 ? {
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `
                          <span class="${className} custom-bullet flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="9" cy="9" r="8.5" fill="#AF9669" fillOpacity="0.31" stroke="#AF9669"/>
                              <g class="active-star" filter="url(#filter0_n_237_1792)">
                                <path d="M14.9878 8.95789L15.0006 8.95376C11.4006 8.61026 9.13394 4.86744 9.0353 3.00079C7.80061 8.04221 4.46728 8.72519 3.00061 8.95559C8.08296 10.0304 8.74309 13.2586 9.0712 15.0008C10.1416 10.527 11.8899 9.96092 14.9878 8.95789Z" fill="white" stroke="url(#paint0_linear_237_1792)" strokeWidth="0.404922"/>
                              </g>
                            </svg>
                          </span>`;
                    },
                } : false}
                loop={images.length > 1}
                className="w-full h-full"
            >
                {images.map((image, idx) => (
                    <SwiperSlide key={idx} className="relative w-full h-full">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={image}
                                alt={`Banner ${idx + 1}`}
                                fill
                                priority={idx === 0}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 z-10"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Content Overlay */}
            {(title || subtitle) && (
                <div className="absolute inset-x-0 w-[60%] top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center text-center px-8 pointer-events-none">
                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.5] font-bold uppercase drop-shadow-2xl">
                        {title}
                        {subtitle && (
                            <>
                                <br />
                                {subtitle}
                            </>
                        )}
                    </h2>
                </div>
            )}

            {/* Jackpot Stats Card */}
            {showJackpotStats && jackpotData && (
                <div className="absolute bottom-[20%] md:bottom-[30%] left-1/2 -translate-x-1/2 z-40 w-full max-w-[1222px] px-4">
                    <StatsJackpotCard
                        left={jackpotData.left}
                        right={jackpotData.right}
                        buttonLabel={jackpotData.buttonLabel}
                        onButtonClick={jackpotData.onButtonClick}
                    />
                </div>
            )}

            {/* Hidden SVG Defs for Global Use */}
            <svg width="0" height="0" className="absolute pointer-events-none opacity-0">
                <defs>
                    <filter id="filter0_n_237_1792" x="2.95874" y="2.95264" width="12.1042" height="12.0953" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="2615.625244140625 2615.625244140625" stitchTiles="stitch" numOctaves="3" result="noise" seed="1381" />
                        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                            <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                        </feComponentTransfer>
                        <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                        <feMerge result="effect1_noise_237_1792">
                            <feMergeNode in="shape" />
                            <feMergeNode in="color1" />
                        </feMerge>
                    </filter>
                    <linearGradient id="paint0_linear_237_1792" x1="8.87476" y1="13.4412" x2="8.40892" y2="1.05333" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFEECA" />
                        <stop offset="1" stopColor="#FFF4D1" />
                    </linearGradient>
                </defs>
            </svg>

            <style jsx global>{`
                .swiper-pagination-bullet {
                    width: auto !important;
                    height: auto !important;
                    background: transparent !important;
                    opacity: 1 !important;
                    margin: 0 5px !important;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet .active-star {
                    display: none;
                }
                .swiper-pagination-bullet-active .active-star {
                    display: block;
                }
                .swiper-pagination {
                    z-index: 50 !important;
                    bottom: 20px !important;
                }
                @media (min-width: 768px) {
                    .swiper-pagination {
                        bottom: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Banner;
