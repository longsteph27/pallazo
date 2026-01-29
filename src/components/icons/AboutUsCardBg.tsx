import React from 'react';

export function AboutUsCardBg({ className = "" }: { className?: string }) {
    return (
        <>
            {/* Mobile SVG (visible on screens < md) */}
            <svg
                className={`w-full h-full md:hidden ${className}`}
                viewBox="0 0 359 837"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path d="M11.5 0.5H347.5C353.299 0.5 358 5.20101 358 11V796.598C358 801.7 354.332 806.064 349.306 806.941L181.8 836.179C180.609 836.387 179.391 836.386 178.199 836.18L9.7041 806.935C4.67324 806.061 1 801.695 1 796.589V11C1.00001 5.38214 5.41195 0.794751 10.96 0.513672L11.5 0.5Z" fill="url(#paint0_linear_mobile)" stroke="url(#paint1_linear_mobile)" />
                <path d="M11.5 0.5H347.5C353.299 0.5 358 5.20101 358 11V791.591C358 796.599 354.463 800.91 349.551 801.889L182.044 835.241C180.694 835.51 179.305 835.51 177.955 835.243L9.46094 801.881C4.54366 800.907 1 796.594 1 791.581V11C1 5.38213 5.41194 0.79475 10.96 0.513672L11.5 0.5Z" fill="url(#paint2_linear_mobile)" stroke="url(#paint3_linear_mobile)" />
                <path d="M11.4932 0.5H347.5C353.299 0.5 358 5.20101 358 11V786.911C358 791.834 354.579 796.096 349.772 797.162L182.25 834.305C180.767 834.633 179.23 834.636 177.746 834.313L8.77344 797.558C3.94516 796.507 0.50292 792.232 0.505859 787.291L0.993164 10.9932C0.996944 5.19687 5.69684 0.5 11.4932 0.5Z" fill="url(#paint4_linear_mobile)" stroke="url(#paint5_linear_mobile)" />
                <defs>
                    <linearGradient id="paint0_linear_mobile" x1="179.5" y1="0" x2="179.5" y2="944.066" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#F9EDDC" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_mobile" x1="179.5" y1="0" x2="179.5" y2="944.066" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFDEA2" stopOpacity="0" />
                        <stop offset="1" stopColor="#D8BD95" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_mobile" x1="178.5" y1="0.191657" x2="178.5" y2="927.064" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#F9EDDC" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_mobile" x1="178.5" y1="0.191657" x2="178.5" y2="927.064" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFDEA2" stopOpacity="0" />
                        <stop offset="1" stopColor="#D8BD95" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_mobile" x1="179.5" y1="0" x2="179.5" y2="910.159" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#F9EFDC" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_mobile" x1="179.5" y1="0" x2="179.5" y2="910.159" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFECA2" stopOpacity="0" />
                        <stop offset="1" stopColor="#D8BD95" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Desktop SVG (visible on screens >= md) */}
            <svg
                className={`w-full h-full hidden md:block ${className}`}
                viewBox="0 0 1230 728"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path d="M11 0.5H1219C1224.8 0.5 1229.5 5.20101 1229.5 11V641.139C1229.5 646.434 1225.56 650.9 1220.3 651.558L616.304 727.114C615.438 727.223 614.562 727.223 613.696 727.114L9.69629 651.558C4.44242 650.9 0.5 646.434 0.5 641.139V11C0.5 5.20101 5.20101 0.5 11 0.5Z" fill="url(#paint0_linear_desktop)" stroke="url(#paint1_linear_desktop)" />
                <path d="M11 0.5H1219C1224.8 0.5 1229.5 5.20101 1229.5 11V629.884C1229.5 635.108 1225.66 639.538 1220.49 640.278L617.484 726.544C616.5 726.685 615.5 726.684 614.516 726.544L9.51758 640.274C4.34379 639.537 0.500209 635.106 0.5 629.88V11C0.500001 5.20101 5.20101 0.5 11 0.5Z" fill="url(#paint2_linear_desktop)" stroke="url(#paint3_linear_desktop)" />
                <path d="M11 0.5H1219C1224.8 0.5 1229.5 5.20101 1229.5 11V618.377C1229.5 623.532 1225.76 627.924 1220.67 628.743L616.669 725.967C615.564 726.145 614.436 726.145 613.331 725.967L9.33105 628.743C4.24199 627.924 0.500236 623.532 0.5 618.377V11L0.513672 10.46C0.794738 4.91193 5.38212 0.5 11 0.5Z" fill="url(#paint4_linear_desktop)" stroke="url(#paint5_linear_desktop)" />
                <defs>
                    <linearGradient id="paint0_linear_desktop" x1="615" y1="0" x2="615" y2="753.486" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#F9EDDC" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_desktop" x1="615" y1="0" x2="615" y2="753.486" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFDEA2" stopOpacity="0" />
                        <stop offset="1" stopColor="#D8BD95" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_desktop" x1="615" y1="0" x2="615" y2="740.257" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#F9EDDC" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_desktop" x1="615" y1="0" x2="615" y2="740.257" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFDEA2" stopOpacity="0" />
                        <stop offset="1" stopColor="#D8BD95" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_desktop" x1="615" y1="0" x2="615" y2="726.741" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F9F7ED" />
                        <stop offset="1" stopColor="#F9EFDC" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_desktop" x1="615" y1="0" x2="615" y2="726.741" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFECA2" stopOpacity="0" />
                        <stop offset="1" stopColor="#D8BD95" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
}
