import React from "react";
import "./style.css";

type StatBlock = {
    title: string;      // "TOTAL WINS - ALL CASINOS"
    value: string;      // "546.990.123"
    subtitle?: string;  // "OVER THE LAST YEAR"
};

type Props = {
    left: StatBlock;
    right: StatBlock;

    buttonLabel?: string;
    onButtonClick?: () => void;

    /** SVG icon ở giữa (nếu không truyền sẽ dùng icon mặc định giống mẫu) */
    centerIcon?: React.ReactNode;

    /** Optional: className thêm cho wrapper */
    className?: string;
};

export default function StatsJackpotCard({
    left,
    right,
    buttonLabel = "VIEW JACKPOT HISTORY",
    onButtonClick,
    centerIcon,
    className,
}: Props) {
    return (
        <div className={["w-full", className].filter(Boolean).join(" ")}>
            {/* Background layer for glass effect (Mobile) / Solid border (Desktop) */}
            <div className="relative overflow-hidden rounded-[32px] md:rounded-2xl bg-gradient-to-br from-white/20 to-transparent md:bg-transparent p-[1px] md:p-0 shadow-2xl">
                {/* Nền chính: Liquid Glass trên Mobile, Solid trên Desktop */}
                <div className={[
                    "relative rounded-[32px] md:rounded-2xl overflow-hidden transition-all duration-500",
                    // Mobile: Liquid Glass
                    "bg-[rgba(14,35,30,0.35)] backdrop-blur-[20px] backdrop-saturate-[160%] border border-white/10",
                    // Desktop: Revert to Solid Dark Green with Gold border top
                    "md:bg-[#0E231E] md:backdrop-blur-0 md:backdrop-saturate-100 md:border-0",
                    "md:border-t-4 md:border-t-transparent",
                    // Gold gradient border equivalent for desktop
                    "md:before:absolute md:before:inset-x-0 md:before:top-0 md:before:h-[4px] md:before:bg-gradient-to-r md:before:from-[#AC9666] md:before:via-[#E5D3AA] md:before:to-[#AC9666] md:before:pointer-events-none",
                ].join(" ")}>
                    {/* Glossy Highlighting Overlays (Mobile Only) */}
                    <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none md:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none md:hidden" />

                    {/* Divider with radial gradient (DESKTOP ONLY) */}
                    <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block z-10">
                        <div className="h-full w-[1px] bg-[radial-gradient(ellipse_at_center,#EFE3B3_0%,rgba(73,69,55,0)_100%)] opacity-60" />
                        <div className="absolute -left-[0.5px] top-0 h-full w-[1.5px] bg-[radial-gradient(ellipse_at_center,#EFE3B3_0%,rgba(73,69,55,0)_100%)] opacity-40 blur-[0.5px]" />
                    </div>

                    {/* Horizontal Divider (Top) - Double Line */}
                    <div className="w-full pt-8 md:pt-10">
                        <div className="flex flex-col gap-[3px]">
                            <div className="w-full h-[1px] bg-[radial-gradient(ellipse_at_center,#EFE3B3_0%,rgba(73,69,55,0)_100%)] opacity-40" />
                            <div className="w-full h-[1px] bg-[radial-gradient(ellipse_at_center,#EFE3B3_0%,rgba(73,69,55,0)_100%)] opacity-60" />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-stretch">
                        {/* TOP (MOBILE) / LEFT (DESKTOP) */}
                        <StatCell {...left} />

                        {/* DIVIDER (MOBILE) / ICON (DESKTOP) */}
                        <div className="flex flex-col items-center justify-center">
                            {/* Mobile Divider SVG */}
                            <div className="md:hidden w-full flex justify-center px-6">
                                <MobileDividerIcon />
                            </div>

                            {/* Center Icon (Desktop) */}
                            <div className="hidden md:flex relative items-center justify-center h-full">
                                <div className="h-[72px] w-[72px]">
                                    {centerIcon ?? <DefaultCenterIcon />}
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM (MOBILE) / RIGHT (DESKTOP) */}
                        <StatCell {...right} />
                    </div>

                    {/* Horizontal Divider (Bottom) - Double Line */}
                    <div className="w-full">
                        <div className="flex flex-col gap-[3px]">
                            <div className="w-full h-[1px] bg-[radial-gradient(ellipse_at_center,#EFE3B3_0%,rgba(73,69,55,0)_100%)] opacity-60" />
                            <div className="w-full h-[1px] bg-[radial-gradient(ellipse_at_center,#EFE3B3_0%,rgba(73,69,55,0)_100%)] opacity-40" />
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="relative flex justify-center pb-8 md:pb-6 pt-6 md:pt-8">
                        <button
                            type="button"
                            onClick={onButtonClick}
                            className={[
                                "relative rounded-full bg-[#B29E71] px-10 py-3 uppercase",
                                "text-[14px] font-bold tracking-[0.08em] text-white",
                                "shadow-[0_12px_24px_rgba(178,158,113,0.3)]",
                                "hover:brightness-110 active:scale-95 transition-all duration-300",
                                "focus:outline-none",
                            ].join(" ")}
                        >
                            {buttonLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCell({
    title,
    value,
    subtitle,
}: StatBlock) {
    return (
        <div className="flex flex-col items-center text-center gap-1.5 px-6 py-8 md:px-8 md:py-12">
            <div className="uppercase tracking-[0.2em] text-[#DCCD9B] text-[12px] md:text-[14px] font-medium">
                {title}
            </div>

            <div className="font-serif text-[#F9F7ED] text-[40px] md:text-[56px] leading-tight font-light">
                <span className="text-[28px] md:text-[40px] mr-1 opacity-90">$</span>
                {value}
            </div>

            {subtitle ? (
                <div className="uppercase tracking-[0.16em] text-[#B29E71] text-[10px] md:text-[12px] font-bold">
                    {subtitle}
                </div>
            ) : null}
        </div>
    );
}

/** Provided Mobile Divider SVG with Logo */
function MobileDividerIcon() {
    return (
        <svg width="100%" height="37" viewBox="0 0 303 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[400px]">
            <path d="M0 19.0312H302.5" stroke="url(#paint0_radial_divider)" />
            <path d="M0 17.0312H302.5" stroke="url(#paint1_radial_divider)" />
            <rect x="134.466" y="1.49703" width="33.0704" height="33.0704" rx="5.12358" fill="#D2C29E" stroke="url(#paint2_radial_divider)" strokeWidth="0.93156" />
            <rect x="136.795" y="3.82812" width="28.4126" height="28.4126" rx="3.72624" fill="#46513D" />
            <g filter="url(#filter0_d_divider)">
                <rect x="139.59" y="6.61719" width="22.8232" height="22.8232" rx="1.39734" fill="url(#paint3_linear_divider)" />
            </g>
            <path d="M146.998 18.2661H141.984V9.25H149.72V15.2071H144.931V12.2554H147.571" stroke="url(#paint4_linear_divider)" strokeWidth="1.39734" />
            <path d="M144.727 18.2651H149.741V27.2812H142.005V21.3242H146.794V24.2759H144.154" stroke="url(#paint5_linear_divider)" strokeWidth="1.39734" />
            <path d="M155.07 18.2661H160.084V9.25H152.348V15.2071H157.137V12.2554H154.497" stroke="url(#paint6_linear_divider)" strokeWidth="1.39734" />
            <path d="M157.341 18.2651H152.327V27.2812H160.063V21.3242H155.274V24.2759H157.914" stroke="url(#paint7_linear_divider)" strokeWidth="1.39734" />
            <defs>
                <filter id="filter0_d_divider" x="132.975" y="0.00310898" width="36.0514" height="36.0485" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3.30704" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_divider" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_divider" result="shape" />
                </filter>
                <radialGradient id="paint0_radial_divider" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(151.25 19.5313) scale(151.25 39.5738)">
                    <stop stopColor="#EFE3B3" />
                    <stop offset="1" stopColor="#494537" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint1_radial_divider" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(151.25 17.5313) scale(151.25 39.5738)">
                    <stop stopColor="#EFE3B3" />
                    <stop offset="1" stopColor="#494537" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint2_radial_divider" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(151.001 18.0322) rotate(52.6404) scale(21.3891 45.2087)">
                    <stop stopColor="#EAD9A9" />
                    <stop offset="1" stopColor="#9A854A" />
                </radialGradient>
                <linearGradient id="paint3_linear_divider" x1="159.256" y1="27.498" x2="140.804" y2="6.85999" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B8A377" />
                    <stop offset="0.144231" stopColor="#948056" />
                    <stop offset="0.375" stopColor="#806B3F" />
                    <stop offset="0.855769" stopColor="#9C885F" />
                    <stop offset="1" stopColor="#FFEABF" />
                </linearGradient>
                <linearGradient id="paint4_linear_divider" x1="145.852" y1="9.25" x2="145.852" y2="18.2661" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
                <linearGradient id="paint5_linear_divider" x1="145.873" y1="27.2812" x2="145.873" y2="18.2651" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
                <linearGradient id="paint6_linear_divider" x1="156.216" y1="9.25" x2="156.216" y2="18.2661" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
                <linearGradient id="paint7_linear_divider" x1="156.195" y1="27.2812" x2="156.195" y2="18.2651" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
            </defs>
        </svg>
    );
}

/** Icon SVG mặc định gần giống mẫu bạn gửi (co giãn theo container) */
function DefaultCenterIcon() {
    return (
        <svg viewBox="0 0 71 71" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="69" height="69" rx="11" fill="#0E231E" stroke="url(#paint3)" strokeWidth="2" />
            <rect x="6" y="6" width="59" height="59" rx="8" fill="#46513D" />
            <g filter="url(#filter0_d)">
                <rect x="12" y="12" width="47" height="47" rx="3" fill="url(#paint4)" />
            </g>

            {/* Diagonal lines crossing through the icon */}
            <line
                x1="12"
                y1="12"
                x2="59"
                y2="59"
                stroke="url(#paint_diagonal1)"
                strokeWidth="1.5"
                opacity="0.3"
            />
            <line
                x1="59"
                y1="12"
                x2="12"
                y2="59"
                stroke="url(#paint_diagonal2)"
                strokeWidth="1.5"
                opacity="0.3"
            />

            {/* 4 path biểu tượng */}
            <path
                d="M27.2 35H17V16.6H32.7V28.8H23V22.8H28.4"
                stroke="url(#paint5)"
                strokeWidth="3"
            />
            <path
                d="M22.6 35H32.8V53.4H17.1V41.2H26.8V47.2H21.4"
                stroke="url(#paint6)"
                strokeWidth="3"
            />
            <path
                d="M43.8 35H54V16.6H38.3V28.8H48V22.8H42.6"
                stroke="url(#paint7)"
                strokeWidth="3"
            />
            <path
                d="M48.4 35H38.2V53.4H53.9V41.2H44.2V47.2H49.6"
                stroke="url(#paint8)"
                strokeWidth="3"
            />

            <defs>
                <filter
                    id="filter0_d"
                    x="-2.2"
                    y="-2.2"
                    width="75.4"
                    height="75.4"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7.1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>

                <radialGradient
                    id="paint3"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(35.5 35.5) rotate(52.64) scale(45.9 97.06)"
                >
                    <stop stopColor="#EAD9A9" />
                    <stop offset="1" stopColor="#9A854A" />
                </radialGradient>

                <linearGradient id="paint4" x1="54" y1="58" x2="14" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B8A377" />
                    <stop offset="0.144231" stopColor="#948056" />
                    <stop offset="0.375" stopColor="#806B3F" />
                    <stop offset="0.855769" stopColor="#9C885F" />
                    <stop offset="1" stopColor="#FFEABF" />
                </linearGradient>

                <linearGradient id="paint5" x1="24.85" y1="16.6" x2="24.85" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
                <linearGradient id="paint6" x1="24.95" y1="53.4" x2="24.95" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
                <linearGradient id="paint7" x1="46.15" y1="16.6" x2="46.15" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
                <linearGradient id="paint8" x1="46.05" y1="53.4" x2="46.05" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>

                <linearGradient id="paint_diagonal1" x1="12" y1="12" x2="59" y2="59" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EAD9A9" />
                    <stop offset="1" stopColor="#9A854A" />
                </linearGradient>
                <linearGradient id="paint_diagonal2" x1="59" y1="12" x2="12" y2="59" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EAD9A9" />
                    <stop offset="1" stopColor="#9A854A" />
                </linearGradient>
            </defs>
        </svg>
    );
}
