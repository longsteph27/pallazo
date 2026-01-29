import React from "react";
import Image from "next/image";

type Props = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    className?: string;
};

export default function Hero({
    title,
    description,
    imageSrc,
    imageAlt = "Hero Image",
    className = "",
}: Props) {
    return (
        <section className={`flex flex-col-reverse md:flex-row md:items-stretch w-full max-w-[1311px] mx-auto overflow-hidden bg-transparent ${className}`}>
            {/* Left Content Side */}
            <div className="w-full md:w-[55%] py-[1px] md:bg-gradient-to-l from-[#D8BD95] to-transparent">
                <div className="w-full h-full md:bg-gradient-to-r from-[#F9F7ED] to-[#F9F1E0] flex justify-end items-center">
                    <div className="relative w-full aspect-[606/430] md:aspect-auto md:h-[80%] md:w-[85%] flex">
                        {/* SVG Shapes Layer 1 */}
                        <div className="w-full h-full">
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 606 430"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M605.412 419V11C605.412 5.20101 600.711 0.5 594.912 0.5L36.8652 0.5C31.5971 0.5 27.1441 4.40406 26.4551 9.62695L0.59082 205.679C0.474887 206.558 0.470351 207.448 0.578125 208.328L26.5342 420.276C27.1791 425.542 31.6507 429.5 36.9561 429.5L594.912 429.5C600.53 429.5 605.117 425.088 605.398 419.54L605.412 419Z"
                                    fill="url(#paint0_linear_495_5124)"
                                    stroke="url(#paint1_linear_495_5124)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_495_5124"
                                        x1="662.698"
                                        y1="222.5"
                                        x2="-7.90607"
                                        y2="216.863"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#F9F7ED" />
                                        <stop offset="1" stopColor="#F9F1E0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_495_5124"
                                        x1="930.586"
                                        y1="206"
                                        x2="-0.104177"
                                        y2="212.765"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFECA2" stopOpacity="0" />
                                        <stop offset="1" stopColor="#D8BD95" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* SVG Shapes Layer 2 */}
                            <div className="absolute inset-0 z-0">
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 606 430"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M605.371 419V11C605.371 5.20101 600.67 0.5 594.871 0.5L42.2031 0.5C37.0413 0.5 32.6454 4.25193 31.834 9.34961L0.629883 205.412C0.462112 206.467 0.456268 207.54 0.612305 208.597L31.9229 420.534C32.6837 425.685 37.1033 429.5 42.3096 429.5L594.871 429.5C600.489 429.5 605.076 425.088 605.357 419.54L605.371 419Z"
                                        fill="url(#paint0_linear_495_5125)"
                                        stroke="url(#paint1_linear_495_5125)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_495_5125"
                                            x1="662.657"
                                            y1="222.5"
                                            x2="-7.94708"
                                            y2="216.863"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#F9F7ED" />
                                            <stop offset="1" stopColor="#F9F1E0" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_495_5125"
                                            x1="930.545"
                                            y1="206"
                                            x2="-0.145192"
                                            y2="212.765"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#FFECA2" stopOpacity="0" />
                                            <stop offset="1" stopColor="#D8BD95" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-x-0 inset-y-5 md:inset-5 flex items-center justify-center p-2 md:p-4 overflow-hidden overflow-y-auto overflow-x-hidden scrollbar-hide">
                                    <div className="w-full max-w-[500px] h-full flex flex-col justify-start text-left pl-8 pr-4 md:px-8">
                                        <h1 className="text-base sm:text-lg md:text-2xl lg:text-[40px] font-serif font-bold text-[#1a1a1a] mb-2 md:mb-6 leading-[1.1] uppercase tracking-wide">
                                            {title}
                                        </h1>
                                        <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#333333] leading-relaxed opacity-90">
                                            {description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Image Side */}
            <div className="relative w-full md:w-[45%] aspect-[589/612] p-4 pb-0 md:p-0">
                <div className="relative w-full h-full rounded-[15px] md:rounded-none overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 45vw"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
