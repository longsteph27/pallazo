import React from 'react';

export const PromotingLogoSvg = ({ className = '' }: { className?: string }) => (
    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="0.5" y="0.5" width="56" height="56" rx="5.83333" fill="white" stroke="url(#paint0_radial_346_1266)" />
        <path d="M19.5732 28.5003H8.17188V8H25.7625V21.5449H14.8731V14.8334H20.8762" stroke="url(#paint1_linear_346_1266)" strokeWidth="3" />
        <path d="M14.4034 28.4997H25.8047V49H8.2141V35.4551H19.1035V42.1666H13.1004" stroke="url(#paint2_linear_346_1266)" strokeWidth="3" />
        <path d="M37.919 28.5003H49.3203V8H31.7297V21.5449H42.6191V14.8334H36.616" stroke="url(#paint3_linear_346_1266)" strokeWidth="3" />
        <path d="M43.0966 28.4997H31.6953V49H49.2859V35.4551H38.3965V42.1666H44.3996" stroke="url(#paint4_linear_346_1266)" strokeWidth="3" />
        <defs>
            <radialGradient id="paint0_radial_346_1266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.5 28.5) rotate(46.023) scale(39.6043)">
                <stop stopColor="#A47E00" />
                <stop offset="1" stopColor="#E2D8AF" />
            </radialGradient>
            <linearGradient id="paint1_linear_346_1266" x1="16.9672" y1="8" x2="16.9672" y2="28.5003" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A28D59" />
                <stop offset="1" stopColor="#DFC890" />
            </linearGradient>
            <linearGradient id="paint2_linear_346_1266" x1="17.0094" y1="49" x2="17.0094" y2="28.4997" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A28D59" />
                <stop offset="1" stopColor="#DFC890" />
            </linearGradient>
            <linearGradient id="paint3_linear_346_1266" x1="40.525" y1="8" x2="40.525" y2="28.5003" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A28D59" />
                <stop offset="1" stopColor="#DFC890" />
            </linearGradient>
            <linearGradient id="paint4_linear_346_1266" x1="40.4906" y1="49" x2="40.4906" y2="28.4997" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A28D59" />
                <stop offset="1" stopColor="#DFC890" />
            </linearGradient>
        </defs>
    </svg>
);

export const ChevronIcon = ({ direction = 'left', className = '' }: { direction?: 'left' | 'right' | 'down', className?: string }) => {
    const isRight = direction === 'right';
    const isDown = direction === 'down';
    return (
        <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isRight ? 'rotate-180' : ''} ${isDown ? 'rotate-90' : ''} ${className}`}
        >
            <path d="M15.5 7.07143C8.01361 6.62245 2.24943 2.28231 0 0V3.59184C3.79592 6.5102 7.94331 7.93197 9.27891 8.30612C6.15782 9.20408 1.26531 12.0102 0 13.1327V16.7245C5.90476 11.4265 12.7937 9.65306 15.5 9.42857V7.07143Z" fill="url(#paint0_linear_342_911)" />
            <path d="M0 10.5523V6.0625L4.0068 8.37154L0 10.5523Z" fill="url(#paint1_linear_342_911)" />
            <defs>
                <linearGradient id="paint0_linear_342_911" x1="10.8731" y1="4.18657" x2="-1.42025" y2="5.92971" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#987C3F" />
                    <stop offset="1" stopColor="#E3C598" />
                </linearGradient>
                <linearGradient id="paint1_linear_342_911" x1="2.81074" y1="7.18641" x2="-0.371704" y2="7.62094" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#987C3F" />
                    <stop offset="1" stopColor="#E3C598" />
                </linearGradient>
            </defs>
        </svg>
    );
};
