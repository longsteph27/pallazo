import React from 'react';

export const SliderNavIcon = ({ direction = 'left', className = '' }: { direction?: 'left' | 'right', className?: string }) => {
    const isRight = direction === 'right';
    return (
        <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isRight ? 'rotate-180' : ''} ${className}`}
        >
            <g filter="url(#filter0_i_333_580)">
                <rect width="38" height="38" rx="19" transform="matrix(-1 0 0 1 38 0)" fill="#000100" fillOpacity="0.56" />
            </g>
            <rect x="-0.5" y="0.5" width="37" height="37" rx="18.5" transform="matrix(-1 0 0 1 37 0)" stroke="url(#paint0_linear_333_580)" strokeOpacity="0.67" />
            <path d="M10.5 18.0714C17.9864 17.6224 23.7506 13.2823 26 11V14.5918C22.2041 17.5102 18.0567 18.932 16.7211 19.3061C19.8422 20.2041 24.7347 23.0102 26 24.1327V27.7245C20.0952 22.4265 13.2063 20.6531 10.5 20.4286V18.0714Z" fill="url(#paint1_linear_333_580)" />
            <path d="M26 21.5523V17.0625L21.9932 19.3715L26 21.5523Z" fill="url(#paint2_linear_333_580)" />
            <defs>
                <filter id="filter0_i_333_580" x="-2" y="0" width="40" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-2" dy="1" />
                    <feGaussianBlur stdDeviation="2.9" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.838462 0 0 0 0 0.596154 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_333_580" />
                </filter>
                <linearGradient id="paint0_linear_333_580" x1="18" y1="11" x2="19" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E3BA7D" />
                    <stop offset="0.4375" stopColor="white" />
                    <stop offset="1" stopColor="#B39569" />
                </linearGradient>
                <linearGradient id="paint1_linear_333_580" x1="15.1269" y1="15.1866" x2="27.4202" y2="16.9297" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9F7ED" />
                    <stop offset="1" stopColor="#E3C598" />
                </linearGradient>
                <linearGradient id="paint2_linear_333_580" x1="23.1893" y1="18.1864" x2="26.3717" y2="18.6209" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9F7ED" />
                    <stop offset="1" stopColor="#E3C598" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export const SliderActiveDotIcon = ({ className = '' }: { className?: string }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="9" cy="9" r="8.5" fill="#AF9669" fillOpacity="0.31" stroke="#AF9669" />
            <g filter="url(#filter0_n_333_574)">
                <path d="M14.9872 8.95808L15 8.95394C11.4 8.61044 9.13333 4.86763 9.03469 3.00098C7.8 8.0424 4.46667 8.72537 3 8.95577C8.08235 10.0306 8.74248 13.2588 9.07059 15.001C10.141 10.5272 11.8893 9.9611 14.9872 8.95808Z" fill="white" stroke="url(#paint0_linear_333_574)" strokeWidth="0.404922" />
            </g>
            <defs>
                <filter id="filter0_n_333_574" x="2.95898" y="2.95312" width="12.1035" height="12.0947" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="2615.625244140625 2615.625244140625" stitchTiles="stitch" numOctaves="3" result="noise" seed="1381" />
                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                    </feComponentTransfer>
                    <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                    <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                    <feMerge result="effect1_noise_333_574">
                        <feMergeNode in="shape" />
                        <feMergeNode in="color1" />
                    </feMerge>
                </filter>
                <linearGradient id="paint0_linear_333_574" x1="8.87415" y1="13.4414" x2="8.40831" y2="1.05351" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFEECA" />
                    <stop offset="1" stopColor="#FFF4D1" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export const SliderInactiveDotIcon = ({ className = '' }: { className?: string }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="9" cy="9" r="8.5" fill="#AF9669" fillOpacity="0.31" stroke="#AF9669" />
        </svg>
    );
};
