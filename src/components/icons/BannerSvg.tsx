import * as React from "react";

type BannerSvgProps = {
    title?: string;
    leftLabel?: string;
    leftAmount?: string;
    leftSubtitle?: string;
    rightLabel?: string;
    rightAmount?: string;
    rightSubtitle?: string;
    buttonText?: string;
    className?: string;
};

export function BannerSvg({
    title = "HIGHLIGHT JACKPOT",
    leftLabel = "TOTAL WINS - ALL CASINOS",
    leftAmount = "546,990.123",
    leftSubtitle = "OVER THE LAST YEAR",
    rightLabel = "TOTAL WINS - ALL CASINOS",
    rightAmount = "546,990.123",
    rightSubtitle = "OVER THE LAST YEAR",
    buttonText = "VIEW HISTORY JACKPOT",
    className,
}: BannerSvgProps) {
    const JackpotAmount = ({ amount, className }: { amount: string; className?: string }) => {
        const parts = amount.split(".");
        const main = parts[0];
        const decimal = parts.length > 1 ? "." + parts.slice(1).join(".") : "";
        return (
            <div className={className}>
                <span className="text-[#1A1A1A]">$ </span>
                <span className="text-[#1A1A1A]">{main}</span>
                {decimal && <span className="text-[#B09860]">{decimal}</span>}
            </div>
        );
    };

    return (
        <div className={className}>
            {/* Desktop Version */}
            <div className="hidden md:block">
                <svg
                    width="1252"
                    height="309"
                    viewBox="0 0 1252 309"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ===== SVG gốc ===== */}
                    <rect x="-0.5" y="0.5" width="1227" height="183" transform="matrix(-1 0 0 1 1227 84)" fill="url(#paint0_radial_253_389)" stroke="url(#paint1_radial_253_389)" />
                    <rect x="-1.5" y="1.5" width="1231" height="175" transform="matrix(-1 0 0 1 1248 87)" fill="url(#paint2_radial_253_389)" stroke="url(#paint3_radial_253_389)" strokeWidth="3" />
                    <path d="M626 263V90" stroke="#C1AE81" strokeWidth="3" />
                    <rect x="582.5" y="132.5" width="86" height="86" rx="10.5" fill="#ECE4D0" stroke="url(#paint4_radial_253_389)" strokeWidth="3" />
                    <rect x="591.5" y="141.5" width="68" height="68" rx="6.5" fill="url(#paint5_linear_253_389)" stroke="url(#paint6_radial_253_389)" strokeWidth="3" />
                    <rect x="601" y="151" width="49" height="49" rx="3" fill="url(#paint7_linear_253_389)" />
                    <path d="M616.907 176.003H606.141V156.646H622.751V169.436H612.469V163.099H618.137" stroke="url(#paint8_linear_253_389)" strokeWidth="3" />
                    <path d="M612.029 175.997H622.795V195.354H606.185V182.565H616.467V188.902H610.799" stroke="url(#paint9_linear_253_389)" strokeWidth="3" />
                    <path d="M634.235 176.003H645V156.646H628.39V169.436H638.673V163.099H633.004" stroke="url(#paint10_linear_253_389)" strokeWidth="3" />
                    <path d="M639.112 175.997H628.346V195.354H644.956V182.565H634.674V188.902H640.342" stroke="url(#paint11_linear_253_389)" strokeWidth="3" />
                    <rect x="1" y="85" width="1240" height="182" stroke="url(#paint12_radial_253_389)" strokeWidth="2" />
                    <path d="M27 74.5727H335.058C355.5 74.5727 375.604 68.2004 379.5 52.5C384.37 32.8745 394 1.51731 434.896 1.17338C472.234 0.859372 703.109 1.04254 813.5 1.17338C840 1.1735 865.535 25.4999 867.124 47.8821C869.49 81.2271 916.231 74.5727 916.231 74.5727H1251.5" stroke="url(#paint13_radial_253_389)" strokeWidth="2" />
                    <path d="M509 268H742V285.5C742 298.479 731.479 309 718.5 309H529C517.954 309 509 300.046 509 289V268Z" fill="url(#paint14_radial_253_389)" />

                    {/* ===== Title at top (centered) ===== */}
                    {title && (
                        <text
                            x="626"
                            y="45"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#1A1A1A"
                            fontSize="36"
                            fontWeight="700"
                            letterSpacing="1"
                            style={{ fontFamily: 'var(--font-serif), serif' }}
                        >
                            {title}
                        </text>
                    )}

                    {/* ===== Left Column ===== */}
                    <text x="320" y="135" textAnchor="middle" dominantBaseline="middle" fill="#5A5A5A" fontSize="14" fontWeight="500" letterSpacing="0.5">
                        {leftLabel}
                    </text>
                    <text x="320" y="175" textAnchor="middle" dominantBaseline="middle" fill="#2A2A2A" fontSize="42" fontWeight="700" letterSpacing="0">
                        {leftAmount}
                    </text>
                    <text x="320" y="205" textAnchor="middle" dominantBaseline="middle" fill="#8A8A8A" fontSize="12" fontWeight="400" letterSpacing="0.5">
                        {leftSubtitle}
                    </text>

                    {/* ===== Right Column ===== */}
                    <text x="930" y="135" textAnchor="middle" dominantBaseline="middle" fill="#5A5A5A" fontSize="14" fontWeight="500" letterSpacing="0.5">
                        {rightLabel}
                    </text>
                    <text x="930" y="175" textAnchor="middle" dominantBaseline="middle" fill="#2A2A2A" fontSize="42" fontWeight="700" letterSpacing="0">
                        {rightAmount}
                    </text>
                    <text x="930" y="205" textAnchor="middle" dominantBaseline="middle" fill="#8A8A8A" fontSize="12" fontWeight="400" letterSpacing="0.5">
                        {rightSubtitle}
                    </text>

                    {/* ===== Button Text ===== */}
                    <text x="626" y="288" textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontSize="16" fontWeight="600" letterSpacing="1">
                        {buttonText}
                    </text>

                    <defs>
                        <radialGradient id="paint0_radial_253_389" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(614 92) scale(614 274.745)">
                            <stop stopColor="#EAE2CC" />
                            <stop offset="1" stopColor="#F9F7ED" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_253_389" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(606 69.5) rotate(2.76132) scale(622.723 544.714)">
                            <stop stopColor="#B09860" />
                            <stop offset="1" stopColor="#F9F7ED" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_253_389" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(617 89) scale(617 265.786)">
                            <stop stopColor="#EAE2CC" />
                            <stop offset="1" stopColor="#F9F7ED" />
                        </radialGradient>
                        <radialGradient id="paint3_radial_253_389" cx="0" cy="0" r="1" gradientTransform="matrix(625.039 29.0217 -26.3701 526.34 608.961 67.2337)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B9A472" />
                            <stop offset="1" stopColor="#F9F7ED" />
                        </radialGradient>
                        <radialGradient id="paint4_radial_253_389" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(625.5 175.5) rotate(52.6404) scale(55.9859 118.334)">
                            <stop stopColor="#EAD9A9" />
                            <stop offset="1" stopColor="#9A854A" />
                        </radialGradient>
                        <linearGradient id="paint5_linear_253_389" x1="618.205" y1="206.137" x2="639.116" y2="157.507" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#162922" />
                            <stop offset="1" stopColor="#626543" />
                        </linearGradient>
                        <radialGradient id="paint6_radial_253_389" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(625.5 175.5) rotate(52.6404) scale(44.6629 94.4011)">
                            <stop stopColor="#EAD9A9" />
                            <stop offset="1" stopColor="#9A854A" />
                        </radialGradient>
                        <linearGradient id="paint7_linear_253_389" x1="643.223" y1="195.83" x2="603.606" y2="151.521" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B8A377" />
                            <stop offset="0.144231" stopColor="#948056" />
                            <stop offset="0.375" stopColor="#806B3F" />
                            <stop offset="0.855769" stopColor="#9C885F" />
                            <stop offset="1" stopColor="#FFEABF" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_253_389" x1="614.446" y1="156.646" x2="614.446" y2="176.003" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8D78F" />
                            <stop offset="1" stopColor="#FFFBD4" />
                        </linearGradient>
                        <linearGradient id="paint9_linear_253_389" x1="614.49" y1="195.354" x2="614.49" y2="175.997" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8D78F" />
                            <stop offset="1" stopColor="#FFFBD4" />
                        </linearGradient>
                        <linearGradient id="paint10_linear_253_389" x1="636.695" y1="156.646" x2="636.695" y2="176.003" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8D78F" />
                            <stop offset="1" stopColor="#FFFBD4" />
                        </linearGradient>
                        <linearGradient id="paint11_linear_253_389" x1="636.651" y1="195.354" x2="636.651" y2="175.997" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8D78F" />
                            <stop offset="1" stopColor="#FFFBD4" />
                        </linearGradient>
                        <radialGradient id="paint12_radial_253_389" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(621 176) scale(621 683.79)">
                            <stop stopColor="#FFECC3" />
                            <stop offset="1" stopColor="#6E4C00" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint13_radial_253_389" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(628.5 12.5) rotate(2.58153) scale(623.524 170.867)">
                            <stop stopColor="#DABF98" />
                            <stop offset="1" stopColor="#F9F7ED" />
                        </radialGradient>
                        <radialGradient id="paint14_radial_253_389" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(625.5 288.5) rotate(2.64431) scale(249.265 341.495)">
                            <stop stopColor="#AC925A" />
                            <stop offset="1" stopColor="#D3C19A" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden w-full flex flex-col items-center py-6 min-[400px]:py-8 space-y-0 min-[400px]:space-y-5">
                {/* Title above background */}
                <h2 className="text-[20px] md:text-[24px] font-serif font-bold text-[#1A1A1A] uppercase tracking-[0.1em] md:tracking-[0.2em] text-center px-4">
                    {title}
                </h2>

                {/* Background Area with Borders */}
                <div
                    className="w-full relative py-8 min-[400px]:py-10 border-y-[0.5px] border-[#B9A472]/40"
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, #EAE2CC 0%, #F9F7ED 100%)',
                    }}
                >
                    {/* Mobile Content (Jackpot Info) */}
                    <div className="relative z-10 flex flex-col items-center space-y-6 min-[400px]:space-y-8">
                        {/* Jackpot 1 */}
                        <div className="flex flex-col items-center">
                            <p className="text-[12px] min-[400px]:text-[14px] text-[#1A1A1A] font-bold tracking-[0.05em] min-[400px]:tracking-[0.1em] mb-1 min-[400px]:mb-2 uppercase">{leftLabel}</p>
                            <JackpotAmount amount={leftAmount} className="text-[32px] min-[400px]:text-[40px] sm:text-[44px] font-bold leading-tight" />
                            <p className="text-[10px] min-[400px]:text-[12px] text-[#86754D] font-bold tracking-[0.1em] min-[400px]:tracking-[0.15em] uppercase mt-1 min-[400px]:mt-2">{leftSubtitle}</p>
                        </div>

                        {/* Divider with Logo */}
                        <div className="w-full flex justify-center px-6 min-[400px]:px-4">
                            <svg width="100%" height="38" viewBox="0 0 357 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] min-[400px]:max-w-[320px] sm:max-w-[357px]">
                                <path d="M0 18H357" stroke="url(#paint0_logo_div_mob)" strokeWidth="0.5" />
                                <path d="M0 20H357" stroke="url(#paint1_logo_div_mob)" strokeWidth="0.5" />
                                <rect x="159.155" y="0.606401" width="36.7868" height="36.7868" rx="4.51713" fill="#ECE4D0" stroke="url(#paint2_logo_box_mob)" strokeWidth="1.2128" />
                                <rect x="163.032" y="4.48029" width="29.0334" height="29.0334" rx="2.77525" fill="url(#paint3_logo_inner_mob)" stroke="url(#paint4_logo_inner_border_mob)" strokeWidth="1.28088" />
                                <rect x="167.088" y="8.53906" width="20.9211" height="20.9211" rx="1.28088" fill="url(#paint5_logo_icon_bg_mob)" />
                                <path d="M173.88 19.2143H169.283V10.9492H176.375V16.4101H171.985V13.7042H174.405" stroke="url(#paint6_logo_inner_icon_mob)" strokeWidth="1.28088" />
                                <path d="M171.798 19.2115H176.395V27.4766H169.303V22.0157H173.693V24.7215H171.273" stroke="url(#paint7_logo_inner_icon_mob)" strokeWidth="1.28088" />
                                <path d="M181.278 19.2143H185.875V10.9492H178.783V16.4101H183.173V13.7042H180.753" stroke="url(#paint8_logo_inner_icon_mob)" strokeWidth="1.28088" />
                                <path d="M183.36 19.2115H178.764V27.4766H185.856V22.0157H181.465V24.7215H183.886" stroke="url(#paint9_logo_inner_icon_mob)" strokeWidth="1.28088" />
                                <defs>
                                    <radialGradient id="paint0_logo_div_mob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(178.5 18.5) scale(178.5 39.8887)">
                                        <stop stopColor="#C3B185" />
                                        <stop offset="1" stopColor="#D8C38F" stopOpacity="0" />
                                    </radialGradient>
                                    <radialGradient id="paint1_logo_div_mob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(178.5 20.5) scale(178.5 39.8887)">
                                        <stop stopColor="#C3B185" />
                                        <stop offset="1" stopColor="#D8C38F" stopOpacity="0" />
                                    </radialGradient>
                                    <radialGradient id="paint2_logo_box_mob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(177.549 18.9998) rotate(52.6404) scale(23.9038 50.5239)">
                                        <stop stopColor="#EAD9A9" />
                                        <stop offset="1" stopColor="#9A854A" />
                                    </radialGradient>
                                    <linearGradient id="paint3_logo_inner_mob" x1="174.434" y1="32.0778" x2="183.362" y2="11.3146" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#162922" />
                                        <stop offset="1" stopColor="#626543" />
                                    </linearGradient>
                                    <radialGradient id="paint4_logo_inner_border_mob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(177.549 18.997) rotate(52.6404) scale(19.0693 40.3056)">
                                        <stop stopColor="#EAD9A9" />
                                        <stop offset="1" stopColor="#9A854A" />
                                    </radialGradient>
                                    <linearGradient id="paint5_logo_icon_bg_mob" x1="185.116" y1="27.6796" x2="168.201" y2="8.76163" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B8A377" />
                                        <stop offset="0.144231" stopColor="#948056" />
                                        <stop offset="0.375" stopColor="#806B3F" />
                                        <stop offset="0.855769" stopColor="#9C885F" />
                                        <stop offset="1" stopColor="#FFEABF" />
                                    </linearGradient>
                                    <linearGradient id="paint6_logo_inner_icon_mob" x1="172.829" y1="10.9492" x2="172.829" y2="19.2143" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#F8D78F" />
                                        <stop offset="1" stopColor="#FFFBD4" />
                                    </linearGradient>
                                    <linearGradient id="paint7_logo_inner_icon_mob" x1="172.849" y1="27.4766" x2="172.849" y2="19.2115" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#F8D78F" />
                                        <stop offset="1" stopColor="#FFFBD4" />
                                    </linearGradient>
                                    <linearGradient id="paint8_logo_inner_icon_mob" x1="182.329" y1="10.9492" x2="182.329" y2="19.2143" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#F8D78F" />
                                        <stop offset="1" stopColor="#FFFBD4" />
                                    </linearGradient>
                                    <linearGradient id="paint9_logo_inner_icon_mob" x1="182.31" y1="27.4766" x2="182.31" y2="19.2115" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#F8D78F" />
                                        <stop offset="1" stopColor="#FFFBD4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Jackpot 2 */}
                        <div className="flex flex-col items-center">
                            <p className="text-[12px] min-[400px]:text-[14px] text-[#1A1A1A] font-bold tracking-[0.05em] min-[400px]:tracking-[0.1em] mb-1 min-[400px]:mb-2 uppercase">{rightLabel}</p>
                            <JackpotAmount amount={rightAmount} className="text-[32px] min-[400px]:text-[40px] sm:text-[44px] font-bold leading-tight" />
                            <p className="text-[10px] min-[400px]:text-[12px] text-[#86754D] font-bold tracking-[0.1em] min-[400px]:tracking-[0.15em] uppercase mt-1 min-[400px]:mt-2">{rightSubtitle}</p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="w-full flex justify-center z-20">
                    <button className="bg-[#B09860] text-[#FFFFFF] text-[13px] min-[400px]:text-[15px] font-bold uppercase tracking-[0.05em] min-[400px]:tracking-[0.1em] px-8 min-[400px]:px-12 p-2.5 min-[400px]:py-3.5 rounded-b-[20px] min-[400px]:rounded-[12px] shadow-lg">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BannerSvg;
