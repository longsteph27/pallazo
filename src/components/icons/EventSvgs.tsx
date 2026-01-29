import * as React from "react";
import Image from "next/image";

// Background SVG với navigation buttons và decorative elements
export function EventBackgroundSvg({ className }: { className?: string }) {
    return (
        <svg
            width="1440"
            height="915"
            viewBox="0 0 1440 915"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="none"
        >
            <g clipPath="url(#clip0_263_607)">
                <path d="M-0.5 80L726 34L1439.5 81.5L1439 826H-1L-0.5 80Z" fill="#ECE5D1" />
                <path d="M-1 112L723.5 38L1440 111L1439 826H-1V112Z" fill="url(#paint0_linear_263_607)" />

                {/* Top search/input box */}
                <rect x="552.5" y="136.5" width="333" height="41" rx="12.5" stroke="#D6C5A0" />
                <rect x="554.93" y="139" width="328.14" height="36" rx="10" fill="#F9F7ED" />

                {/* Bottom decorative lines */}
                <path d="M0.5 834H446L728 897L1001 834H1432" stroke="url(#paint7_radial_263_607)" strokeWidth="2" />
                <path d="M0.5 838H446L728 901L1001 838H1432" stroke="url(#paint8_radial_263_607)" strokeOpacity="0.6" />
                <path d="M0.5 841H446L728 904L1001 841H1432" stroke="url(#paint9_radial_263_607)" strokeOpacity="0.3" />
            </g>

            <defs>
                <linearGradient id="paint0_linear_263_607" x1="731.5" y1="38" x2="765.5" y2="1008" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AC9666" />
                    <stop offset="1" stopColor="#F9F7ED" />
                </linearGradient>
                <radialGradient id="paint7_radial_263_607" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(716.25 865.5) scale(715.75 167.298)">
                    <stop stopColor="#AC9666" />
                    <stop offset="1" stopColor="#F9F7ED" />
                </radialGradient>
                <radialGradient id="paint8_radial_263_607" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(716.25 869.5) scale(715.75 167.298)">
                    <stop stopColor="#AC9666" />
                    <stop offset="1" stopColor="#F9F7ED" />
                </radialGradient>
                <radialGradient id="paint9_radial_263_607" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(716.25 872.5) scale(715.75 167.298)">
                    <stop stopColor="#AC9666" />
                    <stop offset="1" stopColor="#F9F7ED" />
                </radialGradient>
                <clipPath id="clip0_263_607">
                    <rect width="1440" height="915" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

// Navigation Button (Left)
export function NavButtonLeft({ onClick }: { onClick?: () => void }) {
    return (
        <button onClick={onClick} className="relative w-[38px] h-[38px]">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter1_i_left)">
                    <rect width="38" height="38" rx="19" fill="#000100" fillOpacity="0.56" />
                </g>
                <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="url(#paint10_linear_left)" strokeOpacity="0.67" />
                <path d="M11.5 18.071C18.986 17.622 24.751 13.282 27 11V14.592C23.204 17.51 19.057 18.932 17.721 19.306C20.842 20.204 25.735 23.01 27 24.133V27.724C21.095 22.427 14.206 20.653 11.5 20.429V18.071Z" fill="url(#paint11_linear_left)" />
                <path d="M27 21.552V17.062L22.993 19.372L27 21.552Z" fill="url(#paint12_linear_left)" />
                <defs>
                    <filter id="filter1_i_left" x="-2" y="0" width="40" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-2" dy="1" />
                        <feGaussianBlur stdDeviation="2.9" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.838462 0 0 0 0 0.596154 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_left" />
                    </filter>
                    <linearGradient id="paint10_linear_left" x1="18" y1="11" x2="19" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E3BA7D" />
                        <stop offset="0.4375" stopColor="white" />
                        <stop offset="1" stopColor="#B39569" />
                    </linearGradient>
                    <linearGradient id="paint11_linear_left" x1="16.127" y1="15.187" x2="28.42" y2="16.93" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#E3C598" />
                    </linearGradient>
                    <linearGradient id="paint12_linear_left" x1="24.189" y1="18.186" x2="27.372" y2="18.621" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#E3C598" />
                    </linearGradient>
                </defs>
            </svg>
        </button>
    );
}

// Navigation Button (Right)
export function NavButtonRight({ onClick }: { onClick?: () => void }) {
    return (
        <button onClick={onClick} className="relative w-[38px] h-[38px]">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_right)">
                    <rect width="38" height="38" rx="19" fill="#000100" fillOpacity="0.56" />
                </g>
                <rect x="0.5" y="0.5" width="37" height="37" rx="18.5" stroke="url(#paint1_linear_right)" strokeOpacity="0.67" />
                <path d="M26.5 18.071C19.014 17.622 13.249 13.282 11 11V14.592C14.796 17.51 18.943 18.932 20.279 19.306C17.158 20.204 12.265 23.01 11 24.133V27.724C16.905 22.427 23.794 20.653 26.5 20.429V18.071Z" fill="url(#paint2_linear_right)" />
                <path d="M11 21.552V17.062L15.007 19.372L11 21.552Z" fill="url(#paint3_linear_right)" />
                <defs>
                    <filter id="filter0_i_right" x="-2" y="0" width="40" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-2" dy="1" />
                        <feGaussianBlur stdDeviation="2.9" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.838462 0 0 0 0 0.596154 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_right" />
                    </filter>
                    <linearGradient id="paint1_linear_right" x1="18" y1="11" x2="19" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E3BA7D" />
                        <stop offset="0.4375" stopColor="white" />
                        <stop offset="1" stopColor="#B39569" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_right" x1="21.873" y1="15.187" x2="9.58" y2="16.93" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#E3C598" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_right" x1="13.811" y1="18.186" x2="10.628" y2="18.621" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#E3C598" />
                    </linearGradient>
                </defs>
            </svg>
        </button>
    );
}

// Event Card Component with image support
interface EventCardProps {
    image?: string;
    isActive?: boolean;
    className?: string;
}

export function EventCard({ image, isActive = false, className }: EventCardProps) {
    const cardPath = isActive
        ? "M444 299C444 293.477 448.477 289 454 289H986.798C992.321 289 996.798 293.477 996.798 299V825.822C996.798 830.488 993.571 834.534 989.022 835.571L730.586 894.507C729.163 894.832 727.686 894.841 726.259 894.534L451.896 835.497C447.29 834.506 444 830.433 444 825.721V299Z"
        : isActive === false && className?.includes('left')
            ? "M125 398H435V826H125V398Z" // Left placeholder
            : "M1005 408C1005 402.477 1009.48 398 1015 398H1295C1300.52 398 1305 402.477 1305 408V826H1005V408Z"; // Right placeholder

    return (
        <div className={`relative ${className || ''}`}>
            <svg
                width="1440"
                height="915"
                viewBox="0 0 1440 915"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <clipPath id={`card-clip-${isActive ? 'active' : className}`}>
                        <path d={cardPath} />
                    </clipPath>
                    <linearGradient id="paint4_linear_card" x1="740.464" y1="973.798" x2="741.969" y2="882.496" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E4BB7E" />
                        <stop offset="1" stopColor="#7E6746" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Card background with image */}
                {image && (
                    <image
                        href={image}
                        clipPath={`url(#card-clip-${isActive ? 'active' : className})`}
                        width="1440"
                        height="915"
                        preserveAspectRatio="xMidYMid slice"
                    />
                )}

                {/* Card border (only for active card) */}
                {isActive && (
                    <path
                        d={cardPath}
                        fill="black"
                        fillOpacity="0.65"
                        stroke="url(#paint4_linear_card)"
                        strokeWidth="3"
                    />
                )}

                {/* Placeholder overlay for non-active cards */}
                {!isActive && (
                    <path
                        d={cardPath}
                        fill="black"
                        fillOpacity="0.38"
                    />
                )}
            </svg>
        </div>
    );
}

// Detail Button (Updated)
type DetailButtonSvgProps = {
    onClick?: () => void;
    className?: string;
};

export function DetailButtonSvg({ onClick, className }: DetailButtonSvgProps) {
    return (
        <button
            onClick={onClick}
            className={`relative inline-flex items-center justify-center ${className || ''}`}
            style={{ width: '156px', height: '75px' }}
        >
            <svg width="156" height="75" viewBox="0 0 156 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                <path d="M0 57.214L79.5538 74L156 55.9706C150.199 36.905 124.303 -0.925589 79.5538 0.017283C32.3187 1.01254 6.83665 38.5629 0 57.214Z" fill="#FFC368" fillOpacity="0.35" />
                <path d="M13 59.9361L80.3147 74L145 58.8943C140.092 42.9204 118.179 11.2245 80.3147 12.0145C40.3466 12.8483 18.7849 44.3095 13 59.9361Z" fill="url(#paint0_linear_263_620)" stroke="url(#paint1_linear_263_620)" />
                <defs>
                    <linearGradient id="paint0_linear_263_620" x1="79" y1="-4.5" x2="79" y2="67.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DDC99E" />
                        <stop offset="1" stopColor="#967A3C" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_263_620" x1="79" y1="12" x2="79" y2="74" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <span className="relative z-10 text-white font-semibold text-sm uppercase tracking-wider">
                Details
            </span>
        </button>
    );
}
