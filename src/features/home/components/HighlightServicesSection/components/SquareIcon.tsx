import React from 'react';

interface SquareIconProps {
    className?: string;
}

const SquareIcon: React.FC<SquareIconProps> = ({ className }) => {
    return (
        <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect x="0.5" y="0.5" width="18" height="18" rx="1.72222" stroke="url(#paint0_radial_572_7083)" />
            <path d="M12.4879 9.4977H16.1016V3H10.5261V7.29312H13.9776V5.1659H12.0749" stroke="url(#paint1_linear_572_7083)" strokeWidth="1.05263" />
            <path d="M14.1284 9.5023H10.5146V16H16.0901V11.7069H12.6386V13.8341H14.5414" stroke="url(#paint2_linear_572_7083)" strokeWidth="1.05263" />
            <path d="M6.67719 9.4977H3.06348V3H8.63891V7.29312H5.18745V5.1659H7.09018" stroke="url(#paint3_linear_572_7083)" strokeWidth="1.05263" />
            <path d="M5.03863 9.5023H8.65234V16H3.07691V11.7069H6.52837V13.8341H4.62564" stroke="url(#paint4_linear_572_7083)" strokeWidth="1.05263" />
            <defs>
                <radialGradient id="paint0_radial_572_7083" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.5 9.5) rotate(46.023) scale(13.2014)">
                    <stop stopColor="#A47E00" />
                    <stop offset="1" stopColor="#E2D8AF" />
                </radialGradient>
                <linearGradient id="paint1_linear_572_7083" x1="13.3138" y1="3" x2="13.3138" y2="9.4977" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AE904E" />
                    <stop offset="1" stopColor="#685516" />
                </linearGradient>
                <linearGradient id="paint2_linear_572_7083" x1="13.3024" y1="16" x2="13.3024" y2="9.5023" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AE904E" />
                    <stop offset="1" stopColor="#685516" />
                </linearGradient>
                <linearGradient id="paint3_linear_572_7083" x1="5.8512" y1="3" x2="5.8512" y2="9.4977" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AE904E" />
                    <stop offset="1" stopColor="#685516" />
                </linearGradient>
                <linearGradient id="paint4_linear_572_7083" x1="5.86462" y1="16" x2="5.86462" y2="9.5023" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AE904E" />
                    <stop offset="1" stopColor="#685516" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SquareIcon;
