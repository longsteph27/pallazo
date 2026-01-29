import React from 'react';

interface SlotVariationCardProps {
    title: string;
}

const SlotVariationCard: React.FC<SlotVariationCardProps> = ({ title }) => {
    return (
        <div className="relative w-full h-[50px] mb-2">
            <svg
                width="100%"
                height="50"
                viewBox="0 0 583 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M17.1973 0.5C13.3476 0.5 9.87787 2.82314 8.41211 6.38281L0.542969 25.4941L8.88184 44.9541C10.0637 47.7117 12.7752 49.5 15.7754 49.5H582V0.5H17.1973Z"
                    fill="url(#paint0_linear_137_1838)"
                    stroke="url(#paint1_linear_137_1838)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_137_1838"
                        x1="582.5"
                        y1="25"
                        x2="10.5001"
                        y2="25"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#030813" stopOpacity="0" />
                        <stop offset="1" stopColor="#508FC2" stopOpacity="0.38" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_137_1838"
                        x1="27.5"
                        y1="55"
                        x2="270"
                        y2="60.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#81A1BF" />
                        <stop offset="1" stopColor="#3C4B59" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-0 flex items-center px-8">
                <span className="text-white text-sm font-light tracking-wide">
                    {title}
                </span>
            </div>
        </div>
    );
};

export default SlotVariationCard;
