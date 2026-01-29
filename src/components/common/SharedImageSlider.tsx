'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { SliderNavIcon } from '../icons/SliderIcons';
import { renderToString } from 'react-dom/server';
import { SliderActiveDotIcon, SliderInactiveDotIcon } from '../icons/SliderIcons';

interface SharedImageSliderProps {
    images: string[];
    alt: string;
}

const SharedImageSlider = ({ images, alt }: SharedImageSliderProps) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="relative group w-full h-full rounded-xl overflow-hidden bg-inherit shadow-2xl">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className} custom-bullet"></span>`;
                    },
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={images.length > 1}
                className="w-full h-full rounded-xl bg-transparent"
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full overflow-hidden rounded-xl bg-inherit h-[300px] md:h-[400px]">
                            <Image
                                src={img}
                                alt={`${alt} - ${idx + 1}`}
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons - only show if more than 1 image */}
            {images.length > 1 && (
                <>
                    <button
                        ref={prevRef}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0"
                    >
                        <SliderNavIcon direction="left" />
                    </button>
                    <button
                        ref={nextRef}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0"
                    >
                        <SliderNavIcon direction="right" />
                    </button>
                </>
            )}

            <style jsx global>{`
                .custom-bullet {
                    width: 18px !important;
                    height: 18px !important;
                    background: transparent !important;
                    opacity: 1 !important;
                    display: inline-block;
                    margin: 0 4px !important;
                    position: relative;
                }
                /* Default inactive state: Circle only */
                .custom-bullet::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    border: 1px solid #AF9669;
                    background: rgba(175, 150, 105, 0.31);
                }
                /* Active state: Star (we'll use a background image or mask for the star, 
                   but since the user provided SVG, it's better to use data URI if possible, 
                   or just style it with CSS if simple enough. 
                   Actually, Swiper bullets are just spans. Let's use the SVG content via CSS masks or backgrounds.
                */
                .swiper-pagination-bullet-active.custom-bullet::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_n_333_574)'%3E%3Cpath d='M14.9872 8.95808L15 8.95394C11.4 8.61044 9.13333 4.86763 9.03469 3.00098C7.8 8.0424 4.46667 8.72537 3 8.95577C8.08235 10.0306 8.74248 13.2588 9.07059 15.001C10.141 10.5272 11.8893 9.9611 14.9872 8.95808Z' fill='white' stroke='url(%23paint0_linear_333_574)' stroke-width='0.404922'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_n_333_574' x='2.95898' y='2.95312' width='12.1035' height='12.0947' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2615.625244140625' numOctaves='3' result='noise'/%3E%3CfeColorMatrix in='noise' type='luminanceToAlpha' result='alphaNoise'/%3E%3CfeComponentTransfer in='alphaNoise' result='coloredNoise1'%3E%3CfeFuncA type='discrete' tableValues='0 0 0 0 1 1 1 1 0 0 0 0'/%3E%3C/feComponentTransfer%3E%3CfeComposite operator='in' in2='shape' in='coloredNoise1' result='noise1Clipped'/%3E%3CfeFlood flood-color='rgba(0, 0, 0, 0.25)' result='color1Flood'/%3E%3CfeComposite operator='in' in2='noise1Clipped' in='color1Flood' result='color1'/%3E%3CfeMerge result='effect1_noise_333_574'%3E%3CfeMergeNode in='shape'/%3E%3CfeMergeNode in='color1'/%3E%3C/feMerge%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_333_574' x1='8.87415' y1='13.4414' x2='8.40831' y2='1.05351' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFEECA'/%3E%3Cstop offset='1' stop-color='%23FFF4D1'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
                    background-size: contain;
                    background-repeat: no-repeat;
                }
                
                .swiper-pagination {
                    bottom: 10px !important;
                }
            `}</style>
        </div>
    );
};

export default SharedImageSlider;
