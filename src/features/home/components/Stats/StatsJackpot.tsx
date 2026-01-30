import { StatsJackpotSVG } from "@/components/icons";

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
            {/* Desktop Layout */}
            <div className="hidden md:block relative w-full max-w-[827px] mx-auto">
                <div className="relative">
                    <StatsJackpotSVG className="w-full h-auto" />

                    {/* Stats Overlay */}
                    <div className="absolute inset-0 flex items-center justify-between px-12 pb-2">
                        <div className="flex-1 flex justify-center">
                            <StatCell {...left} isDesktop />
                        </div>

                        {/* Center spacer matching the SVG icon width */}
                        <div className="w-[100px]" />

                        <div className="flex-1 flex justify-center">
                            <StatCell {...right} isDesktop />
                        </div>
                    </div>
                </div>

                {/* Bottom Button attached to the section */}
                <div className="relative flex justify-center -mt-[1px]">
                    <button
                        type="button"
                        onClick={onButtonClick}
                        className={[
                            "relative bg-[#B29E71] px-12 py-3 uppercase",
                            "text-[14px] font-bold tracking-[0.1em] text-white",
                            "rounded-b-2xl shadow-[0_8px_16px_rgba(178,158,113,0.3)]",
                            "hover:bg-[#C4B183] active:scale-95 transition-all duration-300",
                            "focus:outline-none",
                        ].join(" ")}
                    >
                        {buttonLabel}
                    </button>
                    {/* Shadow/Glow effect below button */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-[#B29E71]/20 blur-xl -z-10" />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white/20 to-transparent p-[1px] shadow-2xl">
                <div className={[
                    "relative rounded-[32px] overflow-hidden transition-all duration-500",
                    "bg-[rgba(14,35,30,0.35)] backdrop-blur-[20px] backdrop-saturate-[160%] border border-white/10",
                ].join(" ")}>
                    {/* Glossy Highlighting Overlays */}
                    <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none" />

                    <div className="flex flex-col items-stretch">
                        <StatCell {...left} />

                        {/* Mobile Middle Divider with Icon */}
                        <div className="relative flex items-center justify-center w-full px-4">
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col gap-[2px] w-full px-8 pointer-events-none">
                                <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#EFE3B3] to-transparent opacity-30" />
                                <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#EFE3B3] to-transparent opacity-10" />
                            </div>
                            <div className="relative z-10 scale-90">
                                {centerIcon ?? <MobileDividerIcon />}
                            </div>
                        </div>

                        <StatCell {...right} />
                    </div>


                </div>

                {/* Mobile Button Overlay - actually placed outside but shown here for context */}
            </div>
            {/* Common Button for Mobile (moved outside absolute positioning if needed) */}
            <div className="md:hidden relative flex justify-center -mt-px">
                <button
                    type="button"
                    onClick={onButtonClick}
                    className={[
                        "relative rounded-b-[20px] bg-[#AC9666] px-10 py-3 uppercase",
                        "text-[13px] font-bold tracking-[0.08em] text-white shadow-xl shadow-[#AE9860]/40",
                        "active:scale-95 transition-all duration-300",
                    ].join(" ")}
                >
                    {buttonLabel}
                </button>
            </div>
        </div>
    );
}

function StatCell({
    title,
    value,
    subtitle,
    isDesktop
}: StatBlock & { isDesktop?: boolean }) {
    return (
        <div className={[
            "flex flex-col items-center text-center",
            isDesktop ? "gap-1 my-auto" : "gap-1.5 px-6 py-4"
        ].join(" ")}>
            <div className={[
                "uppercase font-medium text-[#DCCD9B]",
                isDesktop ? "tracking-[0.14em] text-[11px]" : "tracking-[0.2em] text-[12px]"
            ].join(" ")}>
                {title}
            </div>

            <div className={[
                "font-serif text-[#F9F7ED] leading-tight font-light",
                isDesktop ? "text-[36px]" : "text-[40px] md:text-[56px]"
            ].join(" ")}>
                <span className={[
                    "mr-[2px] opacity-90 font-sans",
                    isDesktop ? "text-[24px]" : "text-[28px] md:text-[40px]"
                ].join(" ")}>$</span>
                {value}
            </div>

            {subtitle ? (
                <div className={[
                    "uppercase tracking-[0.16em] text-[#B29E71] font-bold",
                    isDesktop ? "text-[10px]" : "text-[10px]"
                ].join(" ")}>
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
