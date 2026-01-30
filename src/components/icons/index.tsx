import React from 'react';

// ContentCard SVG Components - Used for card layouts
export function ContentCardOuterSvg({ className = "absolute inset-0 w-full h-full" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1230 792" fill="none" preserveAspectRatio="xMidYMid meet">
            <path
                d="M11 64.7197H1219C1224.8 64.7197 1229.5 69.4207 1229.5 75.2197V705.358C1229.5 710.653 1225.56 715.12 1220.3 715.777L616.304 791.334C615.438 791.442 614.562 791.442 613.696 791.334L9.69629 715.777C4.44242 715.12 0.5 710.653 0.5 705.358V75.2197L0.513672 74.6797C0.794734 69.1317 5.38212 64.7197 11 64.7197Z"
                fill="url(#paint0_linear_outer_new)"
                stroke="url(#paint1_linear_outer_new)"
            />
            <defs>
                <linearGradient id="paint0_linear_outer_new" x1="615" y1="64.2197" x2="615" y2="817.705" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9F7ED" />
                    <stop offset="1" stopColor="#F9EDDC" />
                </linearGradient>
                <linearGradient id="paint1_linear_outer_new" x1="615" y1="64.2197" x2="615" y2="817.705" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFDEA2" stopOpacity="0" />
                    <stop offset="1" stopColor="#D8BD95" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function ContentCardMiddleSvg({ className = "absolute inset-0 w-full h-full" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1230 792" fill="none" preserveAspectRatio="xMidYMid meet">
            <path
                d="M11 64.7197H1219C1224.8 64.7197 1229.5 69.4207 1229.5 75.2197V694.104C1229.5 699.328 1225.66 703.758 1220.49 704.498L617.484 790.764C616.5 790.905 615.5 790.904 614.516 790.764L9.51758 704.494C4.34379 703.756 0.500199 699.326 0.5 694.1V75.2197C0.500001 69.4207 5.20101 64.7197 11 64.7197Z"
                fill="url(#paint2_linear_middle_new)"
                stroke="url(#paint3_linear_middle_new)"
            />
            <defs>
                <linearGradient id="paint2_linear_middle_new" x1="615" y1="64.2197" x2="615" y2="804.477" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9F7ED" />
                    <stop offset="1" stopColor="#F9EDDC" />
                </linearGradient>
                <linearGradient id="paint3_linear_middle_new" x1="615" y1="64.2197" x2="615" y2="804.477" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFDEA2" stopOpacity="0" />
                    <stop offset="1" stopColor="#D8BD95" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function ContentCardInnerSvg({ className = "absolute inset-0 w-full h-full" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1230 792" fill="none" preserveAspectRatio="xMidYMid meet">
            <path
                d="M11 64.7197H1219C1224.8 64.7197 1229.5 69.4207 1229.5 75.2197V682.596C1229.5 687.75 1225.76 692.144 1220.67 692.963L616.669 790.187C615.564 790.364 614.436 790.364 613.331 790.187L9.33105 692.963C4.24184 692.144 0.5 687.75 0.5 682.596V75.2197C0.5 69.4207 5.20101 64.7197 11 64.7197Z"
                fill="url(#paint4_linear_inner_new)"
                stroke="url(#paint5_linear_inner_new)"
            />
            <defs>
                <linearGradient id="paint4_linear_inner_new" x1="615" y1="64.2197" x2="615" y2="790.961" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9F7ED" />
                    <stop offset="1" stopColor="#F9EFDC" />
                </linearGradient>
                <linearGradient id="paint5_linear_inner_new" x1="615" y1="64.2197" x2="615" y2="790.961" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFECA2" stopOpacity="0" />
                    <stop offset="1" stopColor="#D8BD95" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function ContentCardHeaderLogoSvg({ className = "absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto z-20" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 1230 792" fill="none" preserveAspectRatio="xMidYMid meet">
            <rect x="2.12164" width="88.5411" height="88.5411" rx="10.5" transform="matrix(0.707213 -0.707 0.707213 0.707 549.649 66.2197)" fill="#ECE4D0" stroke="url(#paint6_radial_new)" strokeWidth="3" />
            <rect x="2.12164" width="69.989" height="69.989" rx="6.5" transform="matrix(0.707213 -0.707 0.707213 0.707 562.77 66.2197)" fill="url(#paint7_linear_new)" stroke="url(#paint8_radial_new)" strokeWidth="3" />
            <rect x="2.12164" width="69.989" height="69.989" rx="6.5" transform="matrix(0.707213 -0.707 0.707213 0.707 562.77 66.2197)" fill="url(#paint9_linear_new)" stroke="url(#paint10_radial_new)" strokeWidth="3" />
            <rect width="49.1211" height="49.1211" rx="3" transform="matrix(0.707213 -0.707 0.707213 0.707 579.027 64.7197)" fill="url(#paint11_linear_new)" />
            <path d="M607.912 71.2841L600.133 79.0604L586.146 65.0781L598.148 53.0805L607.389 62.3187L599.959 69.7459L595.381 65.1683L599.476 61.0739" stroke="url(#paint12_linear_new)" strokeWidth="3" />
            <path d="M604.383 74.8028L612.162 67.0265L626.148 81.0088L614.147 93.0065L604.906 83.7682L612.335 76.3411L616.914 80.9186L612.819 85.013" stroke="url(#paint13_linear_new)" strokeWidth="3" />
            <path d="M620.432 58.7683L628.211 50.992L614.225 37.0098L602.223 49.0074L611.464 58.2457L618.894 50.8186L614.315 46.2411L610.219 50.3355" stroke="url(#paint14_linear_new)" strokeWidth="3" />
            <path d="M623.952 55.2405L616.174 63.0168L630.16 76.999L642.161 65.0014L632.92 55.7631L625.491 63.1902L630.07 67.7677L634.166 63.6733" stroke="url(#paint15_linear_new)" strokeWidth="3" />
            <path d="M662.005 65.2206H566.005C565.205 63.2212 566.671 60.7219 567.505 59.7222C579.505 47.7259 604.505 22.6334 608.505 18.2348C612.505 13.8361 617.171 16.7352 619.005 18.7346C632.005 31.5641 658.505 57.7228 660.505 59.7222C662.505 61.7216 662.338 64.2209 662.005 65.2206Z" fill="url(#paint16_linear_new)" fillOpacity="0.47" />
            <defs>
                <radialGradient id="paint6_radial_new" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.7705 45.7705) rotate(52.6404) scale(57.5844 121.712)">
                    <stop stopColor="#EAD9A9" />
                    <stop offset="1" stopColor="#9A854A" />
                </radialGradient>
                <linearGradient id="paint7_linear_new" x1="28.9956" y1="67.9898" x2="50.4924" y2="17.9973" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#162922" />
                    <stop offset="1" stopColor="#626543" />
                </linearGradient>
                <radialGradient id="paint8_radial_new" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.4945 36.4945) rotate(52.6404) scale(45.9141 97.0457)">
                    <stop stopColor="#EAD9A9" />
                    <stop offset="1" stopColor="#9A854A" />
                </radialGradient>
                <linearGradient id="paint9_linear_new" x1="28.9956" y1="67.9898" x2="50.4924" y2="17.9973" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#162829" />
                    <stop offset="1" stopColor="#435C65" />
                </linearGradient>
                <radialGradient id="paint10_radial_new" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.4945 36.4945) rotate(52.6404) scale(45.9141 97.0457)">
                    <stop stopColor="#EAD9A9" />
                    <stop offset="1" stopColor="#9A854A" />
                </radialGradient>
                <linearGradient id="paint11_linear_new" x1="42.3277" y1="44.9406" x2="2.61282" y2="0.522565" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B8A377" />
                    <stop offset="0.144231" stopColor="#948056" />
                    <stop offset="0.375" stopColor="#806B3F" />
                    <stop offset="0.855769" stopColor="#9C885F" />
                    <stop offset="1" stopColor="#FFEABF" />
                </linearGradient>
                <linearGradient id="paint12_linear_new" x1="592.147" y1="59.0793" x2="606.129" y2="73.0658" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFECC3" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint13_linear_new" x1="620.148" y1="87.0076" x2="606.166" y2="73.0212" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFECC3" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint14_linear_new" x1="608.224" y1="43.0086" x2="622.206" y2="56.9951" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFECC3" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint15_linear_new" x1="636.161" y1="71.0002" x2="622.179" y2="57.0137" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFECC3" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint16_linear_new" x1="632.505" y1="71.2188" x2="633.004" y2="30.731" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFEDBA" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

// Ornamental Coin/Medallion Icon - displayed between sections
export function OrnamentalCoinSvg({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="30" cy="30" r="28" fill="url(#coin_gradient)" stroke="url(#coin_border)" strokeWidth="2" />
            <circle cx="30" cy="30" r="20" fill="url(#coin_inner)" opacity="0.5" />
            <path d="M30 15L32.5 25H42.5L34.5 31L37 41L30 35L23 41L25.5 31L17.5 25H27.5L30 15Z" fill="white" opacity="0.8" />
            <defs>
                <radialGradient id="coin_gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 30) scale(28)">
                    <stop stopColor="#FFE9AC" />
                    <stop offset="1" stopColor="#C8A961" />
                </radialGradient>
                <linearGradient id="coin_border" x1="30" y1="0" x2="30" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFEECA" />
                    <stop offset="1" stopColor="#B09860" />
                </linearGradient>
                <radialGradient id="coin_inner" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 30) scale(20)">
                    <stop stopColor="#FFF4D1" />
                    <stop offset="1" stopColor="#DEC99C" />
                </radialGradient>
            </defs>
        </svg>
    );
}

// Decorative Top SVG - placed at the top of hero cards
export function DecorativeTopSvg({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 584 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0.484375 25.2344L12.8031 18.3859C14.4379 17.477 16.2775 17 18.148 17H252.484C258.559 17 263.484 21.9249 263.484 28V40C263.484 46.0751 268.409 51 274.484 51H309.488C315.564 51 320.488 46.0751 320.488 40V28C320.488 21.9249 325.413 17 331.488 17H566.61C568.588 17 570.53 17.5336 572.23 18.5445L583.484 25.2344" stroke="url(#paint0_radial_376_2472)" strokeWidth="2" />
            <rect x="270.484" y="1" width="43" height="43" rx="5.68924" fill="#F9F7ED" stroke="url(#paint1_radial_376_2472)" strokeWidth="2" />
            <path d="M285.108 22.8473H276.531V7.42578H289.764V17.615H281.572V12.5663H286.088" stroke="url(#paint2_linear_376_2472)" strokeWidth="2.25677" />
            <path d="M281.216 22.848H289.793V38.2695H276.56V28.0803H284.752V33.129H280.236" stroke="url(#paint3_linear_376_2472)" strokeWidth="2.25677" />
            <path d="M298.908 22.8473H307.484V7.42578H294.252V17.615H302.443V12.5663H297.927" stroke="url(#paint4_linear_376_2472)" strokeWidth="2.25677" />
            <path d="M302.807 22.848H294.23V38.2695H307.463V28.0803H299.271V33.129H303.787" stroke="url(#paint5_linear_376_2472)" strokeWidth="2.25677" />
            <defs>
                <radialGradient id="paint0_radial_376_2472" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(291.984 33.4688) scale(291.5 62.6247)">
                    <stop stopColor="#AC9666" />
                    <stop offset="1" stopColor="#F9E5B9" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint1_radial_376_2472" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(286.984 35.5) rotate(16.8387) scale(25.8908)">
                    <stop stopColor="#846E22" />
                    <stop offset="1" stopColor="#E2D8AF" />
                </radialGradient>
                <linearGradient id="paint2_linear_376_2472" x1="283.148" y1="7.42578" x2="283.148" y2="22.8473" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A28D59" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
                <linearGradient id="paint3_linear_376_2472" x1="283.177" y1="38.2695" x2="283.177" y2="22.848" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A28D59" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
                <linearGradient id="paint4_linear_376_2472" x1="300.868" y1="7.42578" x2="300.868" y2="22.8473" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A28D59" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
                <linearGradient id="paint5_linear_376_2472" x1="300.847" y1="38.2695" x2="300.847" y2="22.848" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A28D59" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
            </defs>
        </svg>

    );
}

export function PrimaryIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="41" height="50" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0H34C37.866 0 41 3.13401 41 7V43C41 46.866 37.866 50 34 50H16V0Z" fill="#FFEFBC" fillOpacity="0.27" />
            <rect x="0.566338" y="9.56634" width="31.1486" height="31.1486" rx="3.02047" fill="#F9F7ED" stroke="url(#paint0_radial_301_650)" strokeWidth="1.13268" />
            <path d="M11.0898 25.1375H4.63281V13.5273H14.595V21.1983H8.42794V17.3974H11.8277" stroke="url(#paint1_linear_301_650)" strokeWidth="1.69901" />
            <path d="M8.1602 25.1438H14.6172V36.7539H4.65497V29.0829H10.8221V32.8839H7.42225" stroke="url(#paint2_linear_301_650)" strokeWidth="1.69901" />
            <path d="M21.4727 25.1375H27.9297V13.5273H17.9675V21.1983H24.1346V17.3974H20.7348" stroke="url(#paint3_linear_301_650)" strokeWidth="1.69901" />
            <path d="M24.4023 25.1438H17.9453V36.7539H27.9075V29.0829H21.7404V32.8839H25.1402" stroke="url(#paint4_linear_301_650)" strokeWidth="1.69901" />
            <defs>
                <radialGradient id="paint0_radial_301_650" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.1406 25.1406) rotate(46.023) scale(22.4294)">
                    <stop stopColor="#A47E00" />
                    <stop offset="1" stopColor="#E2D8AF" />
                </radialGradient>
                <linearGradient id="paint1_linear_301_650" x1="9.61392" y1="13.5273" x2="9.61392" y2="25.1375" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7D6426" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
                <linearGradient id="paint2_linear_301_650" x1="9.63608" y1="36.7539" x2="9.63608" y2="25.1438" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7D6426" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
                <linearGradient id="paint3_linear_301_650" x1="22.9486" y1="13.5273" x2="22.9486" y2="25.1375" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7D6426" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
                <linearGradient id="paint4_linear_301_650" x1="22.9264" y1="36.7539" x2="22.9264" y2="25.1438" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7D6426" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function SquareIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="0.45614" y="0.45614" width="25.0877" height="25.0877" rx="2.43275" fill="white" stroke="url(#paint0_radial_398_2093)" strokeWidth="0.912281" />
            <path d="M8.92716 12.9995H3.72656V3.64844H11.7503V9.8268H6.78324V6.76545H9.52151" stroke="url(#paint1_linear_398_2093)" strokeWidth="1.36842" />
            <path d="M6.56503 13.0005H11.7656V22.3516H3.74185V16.1732H8.70895V19.2346H5.97067" stroke="url(#paint2_linear_398_2093)" strokeWidth="1.36842" />
            <path d="M17.2994 12.9995H22.5V3.64844H14.4762V9.8268H19.4433V6.76545H16.705" stroke="url(#paint3_linear_398_2093)" strokeWidth="1.36842" />
            <path d="M19.6537 13.0005H14.4531V22.3516H22.4769V16.1732H17.5098V19.2346H20.2481" stroke="url(#paint4_linear_398_2093)" strokeWidth="1.36842" />
            <defs>
                <radialGradient id="paint0_radial_398_2093" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 13) rotate(46.023) scale(18.0651)">
                    <stop stopColor="#A47E00" />
                    <stop offset="1" stopColor="#E2D8AF" />
                </radialGradient>
                <linearGradient id="paint1_linear_398_2093" x1="7.73845" y1="3.64844" x2="7.73845" y2="12.9995" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A28D59" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
                <linearGradient id="paint2_linear_398_2093" x1="7.75374" y1="22.3516" x2="7.75374" y2="13.0005" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A28D59" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
                <linearGradient id="paint3_linear_398_2093" x1="18.4881" y1="3.64844" x2="18.4881" y2="12.9995" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A28D59" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
                <linearGradient id="paint4_linear_398_2093" x1="18.465" y1="22.3516" x2="18.465" y2="13.0005" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A28D59" />
                    <stop offset="1" stopColor="#DFC890" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export function PallazzoTextLogoSvg({ className = "w-full h-auto" }: { className?: string }) {
    return (
        <svg viewBox="0 0 1218 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1117.17 0.5C1146.85 0.5 1171.92 10.0321 1189.58 27.1748C1207.23 44.3156 1217.5 69.1065 1217.5 99.709C1217.5 130.311 1207.15 155.248 1189.46 172.535C1171.77 189.824 1146.69 199.5 1117.17 199.5C1087.66 199.5 1062.65 189.68 1045.02 172.318C1027.39 154.958 1017.1 130.019 1017.1 99.709C1017.1 69.3987 1027.39 44.6062 1045.01 27.3916C1062.64 10.1755 1087.66 0.5 1117.17 0.5ZM86.4355 5.47656C102.86 5.47656 120.251 7.8051 133.521 15.6426C146.749 23.455 155.934 36.7697 155.935 58.9033C155.935 81.049 147.109 95.8467 132.823 105.166C118.689 114.386 99.1579 118.273 77.4033 118.502H76.5605C75.0396 118.502 70.4942 118.461 68.5254 118.421V107.22C83.7548 106.947 96.0283 103.43 104.52 95.6807C113.112 87.8385 117.744 75.7463 117.744 58.5801C117.744 41.3948 112.47 30.8796 104.959 24.6748C97.4664 18.4852 87.8351 16.6582 79.2559 16.6582H39.5117L39.333 17.625L39.335 17.626C39.3361 17.6264 39.3384 17.627 39.3408 17.6279C39.3464 17.6301 39.3554 17.634 39.3672 17.6387C39.3913 17.6483 39.428 17.6634 39.4766 17.6836C39.5741 17.7241 39.7195 17.7857 39.9053 17.8701C40.277 18.0391 40.8115 18.298 41.4541 18.6533C42.7403 19.3645 44.4551 20.4596 46.168 21.9961C49.591 25.0666 52.9912 29.8804 52.9912 36.9141L53.0215 153.029L53.0273 154.466C53.1565 169.167 55.2553 179.488 57.3633 186.192C58.4512 189.652 59.5413 192.148 60.3633 193.784C60.7168 194.488 61.0222 195.031 61.2549 195.425H57.4727C57.4362 195.425 57.4036 195.427 57.376 195.432C57.371 195.432 57.3659 195.434 57.3613 195.435H12.2617C12.2589 195.434 12.2558 195.433 12.2529 195.433C12.221 195.427 12.1869 195.425 12.1504 195.425H8.64941C8.88212 195.031 9.18757 194.487 9.54102 193.784C10.3629 192.149 11.4532 189.654 12.541 186.194C14.7171 179.275 16.8828 168.5 16.8828 153.029V47.876C16.8827 32.3588 12.7613 21.5467 8.62109 14.6045C6.55219 11.1354 4.48062 8.63639 2.92188 7.00098C2.31705 6.36641 1.78869 5.8622 1.36816 5.48145C1.97001 5.48141 2.7593 5.4815 3.71387 5.48145C6.07722 5.48131 9.45342 5.4807 13.5049 5.48047C21.6078 5.48 32.4117 5.47914 43.2158 5.47852C54.02 5.47789 64.8251 5.47703 72.9287 5.47656H86.4355ZM1008.23 5.48145L890.611 183.462L890.099 184.237H950.562L950.558 184.242H951.76C967.365 184.242 982.762 176.916 994.223 169.634C999.96 165.988 1004.73 162.342 1008.06 159.608C1009.73 158.241 1011.03 157.102 1011.93 156.303C1011.99 156.25 1012.04 156.196 1012.1 156.146L1002.9 195.425H704.547L819.932 17.4404L820.432 16.668H755.389C749.499 16.668 743.564 18.7829 737.998 21.9189C732.429 25.0567 727.197 29.234 722.701 33.3994C718.204 37.5663 714.433 41.7317 711.787 44.8545C710.464 46.4161 709.421 47.7176 708.708 48.6299C708.64 48.7171 708.576 48.8018 708.514 48.8818V5.48145H1008.23ZM605.477 5.47656C605.481 5.48824 605.485 5.50038 605.49 5.5127C605.582 5.74723 605.718 6.0962 605.896 6.55273C606.253 7.46617 606.778 8.81208 607.452 10.5391C608.8 13.993 610.745 18.9743 613.13 25.083C617.9 37.3007 624.433 54.0294 631.484 72.0723C645.587 108.158 661.761 149.502 670.05 170.535L670.051 170.534C673.376 178.967 678.058 185.407 681.907 189.738C683.833 191.905 685.551 193.546 686.791 194.646C687.123 194.941 687.42 195.197 687.678 195.414H627.868C628.063 195.176 628.275 194.885 628.49 194.531C629.302 193.2 630.171 191.004 630.512 187.482C631.17 180.67 629.856 168.857 622.261 148.628L621.506 146.645L615.188 129.602L615.067 129.275H547.932L547.807 129.592L547.806 129.593C547.805 129.594 547.805 129.596 547.804 129.598C547.802 129.602 547.799 129.608 547.796 129.616C547.789 129.633 547.78 129.658 547.767 129.691C547.741 129.757 547.702 129.855 547.651 129.983C547.55 130.24 547.401 130.618 547.211 131.101C546.83 132.066 546.283 133.455 545.618 135.146C544.289 138.527 542.49 143.117 540.612 147.953C537.094 157.013 533.286 166.958 531.769 171.416L531.497 172.232C529.313 178.95 530.284 184.948 531.796 189.256C532.552 191.41 533.443 193.145 534.147 194.344C534.398 194.77 534.627 195.128 534.816 195.414H494.893C495.393 194.947 496.068 194.29 496.884 193.436C498.732 191.5 501.307 188.548 504.227 184.467C507.446 179.969 513.04 168.917 519.601 154.929C526.171 140.92 533.734 123.915 540.897 107.47C548.061 91.0239 554.827 75.1347 559.802 63.3574C562.289 57.4687 564.328 52.6075 565.746 49.2188C566.455 47.5244 567.009 46.1977 567.385 45.2949C567.573 44.8437 567.717 44.4983 567.813 44.2656C567.862 44.1493 567.898 44.061 567.923 44.002L567.957 43.9189C567.958 43.9171 567.959 43.915 567.959 43.9141C577.945 20.9853 574.931 9.52499 572.981 5.47656H605.477ZM244.492 5.47656C244.497 5.48824 244.501 5.50038 244.506 5.5127C244.597 5.74724 244.734 6.09617 244.912 6.55273C245.269 7.46617 245.794 8.81208 246.468 10.5391C247.816 13.993 249.76 18.9744 252.146 25.083C256.916 37.3007 263.449 54.0294 270.5 72.0723C284.602 108.158 300.777 149.502 309.065 170.535L309.066 170.534C312.391 178.967 317.074 185.407 320.923 189.738C322.848 191.905 324.566 193.546 325.806 194.646C326.137 194.941 326.435 195.197 326.693 195.414H266.883C267.078 195.176 267.29 194.885 267.506 194.531C268.318 193.2 269.187 191.004 269.527 187.482C270.207 180.451 268.783 168.093 260.522 146.65H260.523L254.203 129.602L254.082 129.275H186.947L186.822 129.592L187.074 129.691C186.822 129.592 186.821 129.592 186.821 129.592V129.593C186.821 129.594 186.82 129.596 186.819 129.598C186.818 129.602 186.815 129.608 186.812 129.616C186.805 129.633 186.795 129.658 186.782 129.691C186.756 129.757 186.718 129.855 186.667 129.983C186.566 130.24 186.416 130.618 186.226 131.101C185.845 132.066 185.298 133.455 184.634 135.146C183.305 138.527 181.506 143.117 179.628 147.953C176.109 157.013 172.302 166.958 170.784 171.416L170.512 172.232C168.328 178.95 169.3 184.948 170.812 189.256C171.567 191.41 172.459 193.145 173.163 194.344C173.414 194.77 173.643 195.128 173.832 195.414H133.908C134.408 194.947 135.083 194.29 135.899 193.436C137.747 191.5 140.322 188.548 143.242 184.467L143.241 184.466C146.461 179.968 152.055 168.917 158.616 154.929C165.186 140.92 172.749 123.915 179.913 107.47C187.077 91.0238 193.843 75.1347 198.817 63.3574C201.305 57.4687 203.344 52.6075 204.762 49.2188C205.471 47.5244 206.024 46.1977 206.4 45.2949C206.588 44.8437 206.732 44.4982 206.829 44.2656C206.877 44.1494 206.914 44.061 206.938 44.002L206.973 43.9189C206.973 43.9171 206.974 43.915 206.975 43.9141C216.961 20.9854 213.946 9.52502 211.997 5.47656H244.492ZM1117.17 11.6816C1096.32 11.6816 1080.32 21.6144 1069.54 37.668C1058.77 53.7044 1053.23 75.8381 1053.23 100.291C1053.23 124.744 1058.78 146.732 1069.54 162.622C1080.32 178.53 1096.33 188.313 1117.17 188.313C1138.3 188.313 1154.39 178.463 1165.17 162.52C1175.95 146.595 1181.42 124.606 1181.42 100.291C1181.42 75.9732 1175.8 53.8395 1164.96 37.7695C1154.11 21.6832 1138.02 11.6816 1117.17 11.6816ZM905.814 16.8174C899.941 16.8174 893.131 17.6806 887.59 18.6104C882.751 19.4223 878.841 20.292 877.349 20.6924L876.861 20.834C855.216 27.9908 846.502 45.0774 839.509 55.5908C837.085 59.2343 815.95 91.2116 795.422 122.276C785.158 137.809 775.045 153.114 767.498 164.536C763.725 170.247 760.593 174.987 758.404 178.3C757.31 179.956 756.452 181.255 755.867 182.141C755.575 182.583 755.351 182.922 755.2 183.15C755.125 183.265 755.067 183.351 755.028 183.409C755.009 183.438 754.995 183.46 754.985 183.475C754.981 183.482 754.977 183.488 754.975 183.491C754.973 183.493 754.972 183.494 754.972 183.495C754.971 183.496 754.971 183.497 755.389 183.772L754.971 183.497L754.459 184.272H816.174C820.818 184.272 825.406 183.634 829.851 182.612L830.238 182.523V182.508C853.004 177.061 865.509 155.952 870.963 147.707C873.712 143.551 894.794 111.019 915.186 79.5312C925.382 63.7862 935.406 48.3002 942.882 36.751C946.62 30.9763 949.721 26.1858 951.887 22.8389C952.97 21.1655 953.82 19.8531 954.398 18.959C954.688 18.512 954.909 18.1692 955.059 17.9385C955.133 17.8234 955.19 17.7363 955.228 17.6777L955.281 17.5947C955.282 17.593 955.284 17.5917 955.284 17.5908C955.285 17.5899 955.285 17.5888 954.865 17.3174L955.284 17.5889L955.784 16.8174H905.814ZM221.594 45.1074L191.622 117.402L191.335 118.094H249.702L249.451 117.419L222.524 45.124L222.081 43.9326L221.594 45.1074ZM582.579 45.1074L552.606 117.402L552.319 118.094H610.687L610.436 117.419L583.509 45.124L583.065 43.9326L582.579 45.1074ZM359.101 46.5137C358.972 31.5584 356.81 21.1231 354.671 14.4141C353.602 11.0598 352.539 8.63729 351.739 7.04883C351.402 6.3785 351.11 5.85739 350.886 5.47656H403.496C403.263 5.87004 402.959 6.4136 402.605 7.11621C401.783 8.75161 400.692 11.2465 399.604 14.7061C397.426 21.6257 395.259 32.4003 395.259 47.8711L395.234 183.732L395.233 184.232H428.061C442.307 184.232 456.371 176.896 466.833 169.613C472.072 165.966 476.426 162.319 479.471 159.584C480.993 158.216 482.19 157.075 483.006 156.275C483.008 156.273 483.011 156.27 483.014 156.268L473.846 195.42H350.886C351.11 195.039 351.401 194.517 351.739 193.847C352.539 192.258 353.603 189.837 354.673 186.482C356.812 179.773 358.974 169.337 359.101 154.382V46.5137Z" fill="url(#paint0_linear_572_6970)" fillOpacity="0.14" stroke="url(#paint1_linear_572_6970)" />
            <defs>
                <linearGradient id="paint0_linear_572_6970" x1="440" y1="36" x2="440.966" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D5C091" />
                    <stop offset="1" stopColor="#F8F7F4" />
                </linearGradient>
                <linearGradient id="paint1_linear_572_6970" x1="580" y1="-6.22968e-06" x2="573.783" y2="206.509" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D4B17D" stopOpacity="0.19" />
                    <stop offset="0.903812" stopColor="#8B795D" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>

    );
}

export function SortIcon() {
    return (
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.57186 13.3077L1.75954 9.71961C1.12763 9.12487 1.54852 8.06357 2.41629 8.06357H10.0409C10.9087 8.06357 11.3296 9.12487 10.6977 9.71961L6.88535 13.3077C6.51638 13.6549 5.94083 13.6549 5.57186 13.3077Z" fill="#B29E71" />
            <path d="M5.57186 0.618116L1.75954 4.20617C1.12763 4.80092 1.54852 5.86222 2.41629 5.86222H10.0409C10.9087 5.86222 11.3296 4.80092 10.6977 4.20617L6.88535 0.618116C6.51638 0.270848 5.94083 0.270847 5.57186 0.618116Z" fill="#B29E71" />
        </svg>
    )
}

export * from './ResponsibleIcons';

export const AppPreviewHalfCircleSVG = ({ className = "" }: { className?: string }) => {
    return (
        <svg className={className} width="371" height="186" viewBox="0 0 371 186" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M370.06 0.5C369.994 24.5958 365.219 48.4482 355.997 70.7129C346.711 93.1316 333.1 113.502 315.941 130.66C298.783 147.819 278.413 161.43 255.994 170.716C233.575 180.002 209.547 184.781 185.281 184.781C161.015 184.781 136.987 180.002 114.568 170.716C92.1497 161.43 71.7796 147.819 54.6211 130.66C37.4626 113.502 23.8516 93.1316 14.5654 70.7129C5.34309 48.4482 0.568124 24.5958 0.50293 0.5H370.06Z" stroke="#BCA574" strokeOpacity="0.2" />
            <path d="M365.531 0.5C365.466 24 360.809 47.2624 351.814 68.9766C342.756 90.8446 329.479 110.714 312.742 127.451C296.005 144.188 276.135 157.465 254.267 166.523C232.399 175.581 208.961 180.244 185.291 180.244C161.621 180.244 138.183 175.582 116.314 166.523C94.4463 157.465 74.576 144.188 57.8389 127.451C41.1019 110.714 27.8256 90.8445 18.7676 68.9766C9.77327 47.2624 5.11499 24 5.0498 0.5H365.531Z" stroke="#BCA574" strokeOpacity="0.3" />
            <path d="M360.922 0.5C360.857 23.3955 356.318 46.0591 347.555 67.2148C338.728 88.5245 325.79 107.887 309.48 124.197C293.171 140.507 273.808 153.445 252.498 162.271C231.188 171.098 208.348 175.642 185.282 175.642C162.217 175.642 139.377 171.098 118.067 162.271C96.7575 153.445 77.3948 140.507 61.085 124.197C44.7752 107.887 31.8375 88.5246 23.0107 67.2148C14.2478 46.0591 9.70872 23.3955 9.64355 0.5H360.922Z" stroke="#BCA574" strokeOpacity="0.4" />
            <path d="M357.272 1.50356e-05C357.272 22.5857 352.823 44.9503 344.18 65.8168C335.537 86.6833 322.869 105.643 306.898 121.614C290.927 137.584 271.968 150.253 251.101 158.896C230.235 167.539 207.87 171.988 185.284 171.988C162.699 171.988 140.334 167.539 119.468 158.896C98.6011 150.253 79.6414 137.584 63.6709 121.614C47.7003 105.643 35.0318 86.6833 26.3886 65.8168C17.7455 44.9503 13.2969 22.5857 13.2969 0L357.272 1.50356e-05Z" fill="#F9F7ED" />
            <path d="M356.518 0.75C356.42 22.9822 351.997 44.9858 343.487 65.5303C334.882 86.3054 322.269 105.182 306.368 121.083C290.467 136.984 271.59 149.598 250.814 158.203C230.039 166.809 207.771 171.237 185.284 171.237C162.797 171.237 140.53 166.809 119.755 158.203C98.9794 149.598 80.102 136.984 64.2012 121.083C48.3004 105.182 35.6875 86.3047 27.082 65.5293C18.5723 44.9849 14.1491 22.9821 14.0518 0.75H356.518Z" stroke="#BCA574" strokeOpacity="0.6" strokeWidth="1.5" />
            <path d="M353.12 1.46724e-05C353.12 22.0402 348.779 43.8646 340.344 64.227C331.91 84.5895 319.547 103.091 303.962 118.676C288.378 134.261 269.876 146.623 249.513 155.058C229.151 163.492 207.327 167.833 185.286 167.833C163.246 167.833 141.422 163.492 121.059 155.058C100.697 146.623 82.1951 134.261 66.6103 118.676C51.0256 103.091 38.6631 84.5895 30.2287 64.227C21.7943 43.8645 17.4531 22.0402 17.4531 0L353.12 1.46724e-05Z" fill="#F9F7ED" />
            <path d="M352.114 1C351.985 22.5688 347.676 43.9116 339.42 63.8447C331.036 84.0857 318.747 102.477 303.255 117.969C287.763 133.461 269.372 145.75 249.131 154.134C228.89 162.518 207.195 166.833 185.286 166.833C163.377 166.833 141.683 162.518 121.442 154.134C101.201 145.75 82.8093 133.461 67.3174 117.969C51.8256 102.477 39.5365 84.0857 31.1523 63.8447C22.8958 43.9116 18.5883 22.5688 18.459 1H352.114Z" stroke="#BCA574" strokeOpacity="0.8" strokeWidth="2" />
            <path d="M348.967 1.43093e-05C348.967 21.4946 344.734 42.7788 336.508 62.6373C328.282 82.4957 316.226 100.54 301.027 115.739C285.828 130.938 267.784 142.994 247.926 151.22C228.067 159.445 206.783 163.679 185.288 163.679C163.794 163.679 142.51 159.445 122.651 151.22C102.793 142.994 84.7488 130.938 69.5498 115.739C54.3508 100.54 42.2943 82.4957 34.0687 62.6372C25.8431 42.7788 21.6094 21.4946 21.6094 0L348.967 1.43093e-05Z" fill="#F9F7ED" />
            <path d="M348.465 0.5C348.4 21.759 344.183 42.8025 336.046 62.4463C327.845 82.2439 315.825 100.232 300.673 115.385C285.52 130.537 267.532 142.557 247.734 150.758C227.937 158.958 206.717 163.179 185.288 163.179C163.859 163.179 142.64 158.958 122.843 150.758C103.045 142.557 85.0559 130.537 69.9033 115.385C54.7509 100.232 42.7308 82.2439 34.5303 62.4463C26.3935 42.8025 22.1774 21.759 22.1123 0.5H348.465Z" stroke="#BCA574" strokeOpacity="0.57" />
            <g filter="url(#filter0_n_698_12213)">
                <path d="M344.203 1.39002e-05C344.203 20.8802 340.09 41.5559 332.1 60.8467C324.109 80.1374 312.398 97.6655 297.633 112.43C282.869 127.195 265.341 138.906 246.05 146.897C226.759 154.887 206.083 159 185.203 159C164.323 159 143.647 154.887 124.356 146.897C105.066 138.906 87.5377 127.195 72.7731 112.43C58.0086 97.6655 46.2968 80.1374 38.3063 60.8467C30.3158 41.5559 26.2031 20.8802 26.2031 0L344.203 1.39002e-05Z" fill="#F9F7ED" />
                <path d="M342.694 1.5C342.502 21.6728 338.438 41.6258 330.714 60.2725C322.799 79.3812 311.197 96.7439 296.572 111.369C281.947 125.994 264.584 137.596 245.476 145.511C226.367 153.426 205.886 157.5 185.203 157.5C164.52 157.5 144.039 153.426 124.931 145.511C105.822 137.596 88.4592 125.994 73.834 111.369C59.2088 96.7439 47.6075 79.3812 39.6924 60.2725C31.9687 41.6258 27.904 21.6728 27.7119 1.5H342.694Z" stroke="#BCA574" strokeWidth="3" />
            </g>
            <g filter="url(#filter1_n_698_12213)">
                <path d="M292.203 9.35423e-06C292.203 14.0514 289.435 27.9653 284.058 40.9471C278.681 53.929 270.799 65.7246 260.864 75.6604C250.928 85.5963 239.132 93.4779 226.15 98.8551C213.168 104.232 199.255 107 185.203 107C171.152 107 157.238 104.232 144.256 98.8551C131.274 93.4779 119.479 85.5963 109.543 75.6604C99.6068 65.7246 91.7253 53.929 86.348 40.9471C80.9708 27.9653 78.2031 14.0514 78.2031 0L292.203 9.35423e-06Z" fill="url(#paint0_linear_698_12213)" />
                <path d="M291.7 0.5C291.635 14.3157 288.885 27.9887 283.597 40.7559C278.245 53.677 270.399 65.4172 260.51 75.3066C250.62 85.1961 238.88 93.0414 225.959 98.3936C213.038 103.746 199.189 106.5 185.203 106.5C171.217 106.5 157.368 103.746 144.447 98.3936C131.526 93.0414 119.786 85.1961 109.896 75.3066C100.007 65.4172 92.1617 53.677 86.8096 40.7559C81.5213 27.9887 78.7709 14.3157 78.7061 0.5H291.7Z" stroke="#BCA574" />
            </g>
            <path d="M278.689 1.5C278.501 13.2679 276.093 24.8995 271.586 35.7812C266.887 47.1251 260 57.432 251.317 66.1143C242.635 74.7965 232.328 81.684 220.984 86.3828C209.64 91.0816 197.482 93.5 185.203 93.5C172.925 93.5 160.766 91.0816 149.422 86.3828C138.078 81.684 127.771 74.7965 119.089 66.1143C110.407 57.432 103.519 47.1251 98.8203 35.7812C94.3129 24.8995 91.9056 13.2679 91.7168 1.5H278.689Z" fill="#EFDFB9" stroke="#BCA574" strokeWidth="3" />
            <g filter="url(#filter2_n_698_12213)">
                <path d="M251.758 5.81087e-06C251.758 8.72879 250.038 17.3721 246.698 25.4364C243.358 33.5008 238.462 40.8282 232.289 47.0004C226.117 53.1726 218.79 58.0687 210.725 61.409C202.661 64.7494 194.018 66.4686 185.289 66.4686C176.56 66.4686 167.917 64.7494 159.852 61.409C151.788 58.0686 144.461 53.1726 138.289 47.0004C132.116 40.8282 127.22 33.5008 123.88 25.4364C120.54 17.3721 118.82 8.72878 118.82 0L251.758 5.81087e-06Z" fill="url(#paint1_linear_698_12213)" />
            </g>
            <defs>
                <filter id="filter0_n_698_12213" x="26.2031" y="0" width="318" height="159" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="100 100" stitchTiles="stitch" numOctaves="3" result="noise" seed="5470" />
                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                    </feComponentTransfer>
                    <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                    <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                    <feMerge result="effect1_noise_698_12213">
                        <feMergeNode in="shape" />
                        <feMergeNode in="color1" />
                    </feMerge>
                </filter>
                <filter id="filter1_n_698_12213" x="78.2031" y="0" width="214" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="100 100" stitchTiles="stitch" numOctaves="3" result="noise" seed="5470" />
                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                    </feComponentTransfer>
                    <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                    <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                    <feMerge result="effect1_noise_698_12213">
                        <feMergeNode in="shape" />
                        <feMergeNode in="color1" />
                    </feMerge>
                </filter>
                <filter id="filter2_n_698_12213" x="118.82" y="0" width="132.938" height="66.4688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence type="fractalNoise" baseFrequency="100 100" stitchTiles="stitch" numOctaves="3" result="noise" seed="6491" />
                    <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                    <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                        <feFuncA type="discrete" tableValues="0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                    </feComponentTransfer>
                    <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                    <feFlood flood-color="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                    <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                    <feMerge result="effect1_noise_698_12213">
                        <feMergeNode in="shape" />
                        <feMergeNode in="color1" />
                    </feMerge>
                </filter>
                <linearGradient id="paint0_linear_698_12213" x1="194.203" y1="107" x2="197.203" y2="6.99997" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5F0D5" />
                    <stop offset="1" stopColor="#FFF7D0" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_698_12213" x1="185.203" y1="28" x2="185.203" y2="83" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B09860" />
                    <stop offset="1" stopColor="#F2D89C" />
                </linearGradient>
            </defs>
        </svg>

    );
}

export const FooterLogo = ({ className = "" }: { className?: string }) => {
    return (
        <svg width="92" height="73" viewBox="0 0 92 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.359 1.43475V0H70.2549V1.43475C67.9801 1.44308 66.1412 3.27918 66.1412 5.53982C66.1412 7.01798 66.9288 8.31479 68.1068 9.03663H65.9511C65.1671 8.08171 64.6983 6.86279 64.6983 5.53982C64.6983 3.91361 65.4063 2.44913 66.5323 1.43475H24.0816C25.2076 2.44913 25.9156 3.91361 25.9156 5.53982C25.9156 6.86279 25.4468 8.08171 24.6628 9.03663H22.507C23.6851 8.31479 24.4726 7.01798 24.4726 5.53982C24.4726 3.27918 22.6338 1.44308 20.359 1.43475ZM27.0662 9.03722C27.6295 7.96398 27.9321 6.76171 27.9321 5.53982C27.9321 4.81382 27.8268 4.10864 27.6331 3.44329H62.9802C62.7865 4.10804 62.6812 4.81382 62.6812 5.53982C62.6812 6.76171 62.9832 7.96339 63.5471 9.03722H27.0662ZM29.375 5.53982C29.375 6.23193 29.2937 6.92404 29.1305 7.60247H61.4828C61.3196 6.92404 61.2382 6.23193 61.2382 5.53982C61.2382 5.31685 61.2448 5.09745 61.2651 4.87804H29.3469C29.3673 5.09745 29.3738 5.31685 29.3738 5.53982H29.375ZM37.5623 27.2086C37.6197 26.7341 37.6508 26.2489 37.6508 25.7566C37.6508 21.4143 35.3544 17.6071 31.901 15.4695C31.2803 15.0824 30.6249 14.7536 29.9354 14.4819C30.2392 15.1027 30.4915 15.7573 30.6859 16.4328C30.9932 17.4947 31.1571 18.6143 31.1571 19.775C31.1571 21.312 30.87 22.7806 30.3414 24.1345C30.8192 24.2404 31.2863 24.3658 31.7509 24.5044C32.3034 23.0322 32.6072 21.4375 32.6072 19.775C32.6072 19.0525 32.5492 18.3426 32.4404 17.6511C34.7403 19.6091 36.2006 22.5166 36.2006 25.7566C36.2006 25.9641 36.194 26.1704 36.1833 26.3744C36.6545 26.6354 37.1149 26.9137 37.5623 27.2092V27.2086ZM36.096 45.1344V46.5691H54.5173V45.1344H36.096ZM45.3081 41.6911H34.1178V43.1258H56.4955V41.6911H45.3081ZM66.6842 11.0422H23.9297C20.4439 11.0422 17.6172 13.8516 17.6172 17.3187C17.6172 20.7858 19.9129 23.594 23.3986 23.594H23.7263C23.7933 23.594 23.8603 23.5917 23.9273 23.5893C26.3629 23.4846 28.4422 21.4951 28.4422 19.0484C28.4422 16.6016 26.8007 14.4819 24.2783 14.4819H24.0469C22.4197 14.4819 21.1011 15.793 21.1011 17.4109C21.1011 19.0288 22.4197 20.3398 24.0469 20.3398V18.9051C23.218 18.9051 22.5441 18.235 22.5441 17.4109C22.5441 16.5868 23.218 15.9167 24.0469 15.9167H24.2783C26.1417 15.9173 26.9914 17.5518 26.9914 19.0484C26.9914 20.6669 25.6088 22.0428 23.9273 22.1456C23.8609 22.1498 23.7939 22.1522 23.7263 22.1522H23.3986C20.7136 22.1522 19.0673 19.9878 19.0673 17.3187C19.0673 14.6496 21.2441 12.4769 23.9297 12.4769H66.6842C69.3692 12.4769 71.5465 14.649 71.5465 17.3187C71.5465 19.9884 69.9002 22.1522 67.2152 22.1522H66.8875C66.82 22.1522 66.753 22.1492 66.6866 22.1456C65.005 22.0428 63.6225 20.6669 63.6225 19.0484C63.6225 17.5518 64.4722 15.9173 66.3356 15.9173H66.567C67.3958 15.9167 68.0698 16.5868 68.0698 17.4109C68.0698 18.235 67.3958 18.9051 66.567 18.9051V20.3398C68.1942 20.3398 69.5127 19.0288 69.5127 17.4109C69.5127 15.793 68.1942 14.4819 66.567 14.4819H66.3356C63.8132 14.4819 62.1717 16.5374 62.1717 19.0484C62.1717 21.5594 64.2509 23.4846 66.6866 23.5893C66.7536 23.5917 66.8206 23.594 66.8875 23.594H67.2152C70.701 23.594 72.9967 20.7846 72.9967 17.3187C72.9967 13.8528 70.1705 11.0422 66.6842 11.0422ZM60.6779 14.4819C59.989 14.7536 59.3336 15.0824 58.7123 15.4695C55.2588 17.6071 52.9625 21.4143 52.9625 25.7566C52.9625 26.2489 52.9936 26.7341 53.051 27.2086C53.4983 26.9137 53.9588 26.6354 54.43 26.3738C54.4198 26.1704 54.4127 25.9635 54.4127 25.756C54.4127 22.5161 55.873 19.6085 58.1729 17.6505C58.0641 18.3426 58.006 19.052 58.006 19.7744C58.006 21.4369 58.3098 23.0316 58.8624 24.5038C59.327 24.3646 59.7941 24.2392 60.2719 24.1339C59.7432 22.7801 59.4562 21.3114 59.4562 19.7744C59.4562 18.6137 59.6194 17.4941 59.9274 16.4322C60.1218 15.7567 60.3741 15.1021 60.6779 14.4813V14.4819ZM63.522 31.6026C62.5431 31.6026 61.5946 31.718 60.6797 31.932C61.6897 30.2285 63.1058 28.7938 64.7915 27.752C65.6784 27.202 66.6411 26.765 67.6613 26.4558C66.8624 26.3541 66.0467 26.3036 65.2179 26.3036C64.938 26.3036 64.6582 26.3102 64.3819 26.3203C59.2086 26.5409 54.5508 28.7801 51.1924 32.2644C51.0286 25.6585 48.8758 19.5413 45.3063 14.4825C43.2403 17.4103 41.6502 20.6936 40.6443 24.2202C40.6419 24.2279 40.6402 24.235 40.6378 24.2428C39.91 26.8025 39.489 29.49 39.4202 32.2644C37.6663 30.4444 35.5572 28.965 33.2052 27.9346C33.1897 27.9268 33.1741 27.9197 33.158 27.9138C31.0207 26.9838 28.6838 26.4249 26.2314 26.3203C25.9551 26.3102 25.6752 26.3036 25.3954 26.3036C24.5659 26.3036 23.7509 26.3541 22.9519 26.4558C23.9727 26.765 24.9349 27.202 25.8217 27.752C27.5075 28.7938 28.9236 30.2285 29.9336 31.932C29.0186 31.718 28.0702 31.6026 27.0913 31.6026C25.1765 31.6026 23.3646 32.0402 21.7506 32.8174C21.1843 33.0921 20.6419 33.4078 20.13 33.761C20.7029 33.9471 21.2632 34.1647 21.8086 34.4121C25.7087 36.1804 28.8243 39.3763 30.4694 43.325C30.7116 43.9119 30.9269 44.513 31.1039 45.1272C31.1104 45.1403 31.114 45.1576 31.1176 45.1718C31.1756 45.3752 31.23 45.5821 31.2785 45.789C31.3299 45.9995 31.3736 46.21 31.4178 46.4235C31.428 46.4704 31.4381 46.5216 31.4453 46.5691H32.923C32.9128 46.5216 32.9062 46.4704 32.8955 46.4235C32.8542 46.2094 32.8135 45.9995 32.7657 45.789C32.7143 45.569 32.6628 45.3478 32.6054 45.1278C32.4446 44.5273 32.2604 43.9363 32.0421 43.3601C31.7928 42.6948 31.5063 42.0538 31.1816 41.4295C29.4791 38.1277 26.7935 35.4068 23.5111 33.6456C24.6335 33.2556 25.8379 33.0421 27.0907 33.0421C28.3435 33.0421 29.6429 33.2728 30.7995 33.6932C31.431 33.9239 32.0349 34.2093 32.6048 34.5447C32.4201 33.8662 32.1815 33.208 31.8986 32.5772C31.4053 31.4837 30.7738 30.4669 30.0245 29.5483C30.0239 29.5471 30.0227 29.5465 30.0221 29.5453C29.579 29.0025 29.0952 28.4935 28.5743 28.0232C32.9457 28.8039 36.7705 31.1585 39.4388 34.4727C40.0565 35.2397 40.6132 36.0609 41.0976 36.923C40.9744 35.9485 40.8997 34.9579 40.8722 33.9572C40.862 33.6653 40.8584 33.3703 40.8584 33.0748C40.8584 27.2526 42.4826 21.8037 45.3045 17.1487C48.1265 21.8037 49.7507 27.2526 49.7507 33.0748C49.7507 33.3698 49.7471 33.6653 49.7369 33.9572C49.7094 34.9579 49.6347 35.9485 49.5115 36.923C49.9964 36.0609 50.5526 35.2397 51.1703 34.4727C53.8386 31.1585 57.6634 28.8039 62.0348 28.0232C60.6325 29.2891 59.4963 30.8362 58.7111 32.5766C58.4282 33.2074 58.1896 33.8656 58.0048 34.5441C58.5747 34.2087 59.1787 33.9233 59.8102 33.6926C60.9667 33.2722 62.216 33.0415 63.519 33.0415C64.822 33.0415 65.9762 33.255 67.0986 33.6451C63.8162 35.4056 61.1306 38.1271 59.4281 41.4289C59.104 42.0532 58.8169 42.6942 58.5676 43.3595C58.3493 43.9363 58.1651 44.5267 58.0042 45.1272C57.9468 45.3472 57.8954 45.5684 57.844 45.7884C57.7962 45.9989 57.7555 46.2094 57.7142 46.4229C57.7041 46.4698 57.6969 46.521 57.6867 46.5685H59.1644C59.1715 46.521 59.1817 46.4698 59.1919 46.4229C59.2361 46.2088 59.2804 45.9989 59.3312 45.7884C59.3791 45.5821 59.4341 45.3746 59.4921 45.1712C59.4957 45.157 59.4986 45.1403 59.5058 45.1266C59.6834 44.5124 59.8981 43.9113 60.1403 43.3244C61.7854 39.3751 64.9004 36.1792 68.8011 34.4115C69.3471 34.1641 69.9068 33.9465 70.4797 33.7604C69.9678 33.4072 69.4254 33.0915 68.8591 32.8168C67.2451 32.0396 65.4332 31.602 63.5184 31.602L63.522 31.6026Z" fill="#D2C29E" />
            <path d="M50.5802 70.7551C49.3298 67.5786 45.6998 58.2664 45.6998 58.2664H43.1605C43.2926 58.4975 43.6126 59.3457 42.8091 61.1923C42.8091 61.1923 38.9672 70.4541 38.0055 71.7991C37.5672 72.4124 37.2334 72.6856 37.2334 72.6856H40.4161C40.4161 72.6856 39.8062 71.9036 40.1292 70.9088C40.3217 70.3155 41.3588 67.6909 41.3588 67.6909H46.3712L46.848 68.9784C48.0928 72.2129 47.2684 72.6863 47.2687 72.6856H51.982C51.982 72.6856 51.0778 72.0186 50.5802 70.7548V70.7551ZM41.7206 66.771L43.9816 61.3115L46.0127 66.771H41.7206ZM84.2738 57.8906C79.8037 57.8906 76.687 60.8248 76.687 65.4204C76.687 70.016 79.8037 72.9941 84.2738 72.9941C88.7439 72.9941 91.8796 70.0599 91.8796 65.4204C91.8796 60.7809 88.767 57.8906 84.2738 57.8906ZM84.2738 72.0738C81.1564 72.0738 79.4882 69.1475 79.4882 65.4644C79.4882 61.7812 81.156 58.8106 84.2738 58.8106C87.3917 58.8106 89.0826 61.8019 89.0826 65.4644C89.0826 69.1268 87.4345 72.0738 84.2738 72.0738ZM5.77533 66.8773C5.64961 66.8773 5.25009 66.874 5.13147 66.8706V65.9506C7.45436 65.9198 8.84429 64.8939 8.84429 62.3145C8.84429 59.735 7.26411 59.1864 5.97863 59.1864H2.98055C2.98055 59.1864 4.03512 59.5885 4.03512 60.6783L4.03736 69.447C4.03736 71.7762 4.68905 72.6863 4.68905 72.6863H4.33541C4.33317 72.6863 4.33206 72.6871 4.32982 72.6871H0.921397C0.919532 72.6871 0.918785 72.6863 0.916547 72.6863H0.584173C0.584173 72.6863 1.23586 71.7766 1.23586 69.447V61.5061C1.23586 59.1766 0 58.2668 0 58.2668C0 58.2668 6.5199 58.2664 6.52028 58.2664C9.00282 58.2664 11.8006 58.9703 11.8006 62.3389C11.8006 65.7075 9.11474 66.8578 5.77421 66.8781L5.77533 66.8773ZM71.7962 71.766H67.2146L76.1256 58.2668H53.4089V61.694C53.4089 61.694 55.2405 59.1871 56.9826 59.1871H61.8197L53.078 72.6863H75.6836L76.4121 69.5718C76.4121 69.5718 74.1288 71.7664 71.7958 71.7664L71.7962 71.766ZM62.5912 71.6443C62.258 71.7209 61.9148 71.7687 61.5679 71.7687H56.9826C56.9826 71.7687 62.994 62.6598 63.3596 62.1097C63.8897 61.3118 64.5399 60.0353 66.1578 59.4998C66.2846 59.4577 67.4499 59.1984 68.3299 59.1984H72.0301C72.0301 59.1984 66.0839 68.397 65.6695 69.0242C65.2535 69.6537 64.3097 71.2474 62.5912 71.6435V71.6443ZM36.503 69.571L35.7744 72.686H26.4008C26.4008 72.686 27.032 71.8006 27.051 69.5489V61.4035C27.0316 59.1518 26.4008 58.2664 26.4008 58.2664H30.5061C30.5061 58.2664 29.854 59.1762 29.854 61.5058L29.8521 71.7657H32.2907C34.4166 71.7657 36.5026 69.5714 36.503 69.5707V69.571ZM23.3494 70.7551C22.099 67.5786 18.469 58.2664 18.469 58.2664H15.9297C16.0618 58.4975 16.3818 59.3457 15.5783 61.1923C15.5783 61.1923 11.7364 70.4541 10.7747 71.7991C10.3364 72.4124 10.0026 72.6856 10.0026 72.6856H13.1853C13.1853 72.6856 12.5754 71.9036 12.8984 70.9088C13.0909 70.3155 14.128 67.6909 14.128 67.6909H19.1404L19.6172 68.9784C20.862 72.2129 20.0376 72.6863 20.0379 72.6856H24.7512C24.7512 72.6856 23.847 72.0186 23.3494 70.7548V70.7551ZM14.4898 66.771L16.7508 61.3115L18.7819 66.771H14.4898Z" fill="#D2C29E" />
        </svg>




    );
}

export const StatsJackpotSVG = ({ className = "" }: { className?: string }) => {
    return (
        <svg className={className} viewBox="0 0 827 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="827" height="163" rx="20" fill="url(#paint0_radial_797_14236)" />
            <rect y="5" width="827" height="158" rx="20" fill="#0E231E" />
            <path d="M412.312 165.003L412.312 5" stroke="url(#paint1_linear_797_14236)" />
            <path d="M415.312 165.003L415.312 5" stroke="url(#paint2_linear_797_14236)" />
            <rect x="379" y="48" width="71" height="71" rx="11" fill="#0E231E" stroke="url(#paint3_radial_797_14236)" strokeWidth="2" />
            <rect x="384" y="53" width="61" height="61" rx="8" fill="#0E231E" />
            <g filter="url(#filter0_d_797_14236)">
                <rect x="390" y="59" width="49" height="49" rx="3" fill="url(#paint4_linear_797_14236)" />
            </g>
            <path d="M405.906 84.0055H395.141V64.6484H411.75V77.4379H401.468V71.1008H407.136" stroke="url(#paint5_linear_797_14236)" strokeWidth="3" />
            <path d="M401.029 84.0023H411.795V103.359H395.185V90.5699H405.467V96.907H399.799" stroke="url(#paint6_linear_797_14236)" strokeWidth="3" />
            <path d="M423.235 84.0055H434V64.6484H417.39V77.4379H427.673V71.1008H422.004" stroke="url(#paint7_linear_797_14236)" strokeWidth="3" />
            <path d="M428.111 84.0023H417.346V103.359H433.955V90.5699H423.673V96.907H429.342" stroke="url(#paint8_linear_797_14236)" strokeWidth="3" />
            <defs>
                <filter id="filter0_d_797_14236" x="375.8" y="44.8" width="77.4" height="77.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7.1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_797_14236" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_797_14236" result="shape" />
                </filter>
                <radialGradient id="paint0_radial_797_14236" cx="0" cy="0" r="1" gradientTransform="matrix(433.5 121.782 -27.3519 85.442 401 -12.1782)" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E5D3AA" />
                    <stop offset="1" stopColor="#AC9666" />
                </radialGradient>
                <linearGradient id="paint1_linear_797_14236" x1="412.812" y1="5" x2="412.812" y2="165.003" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DCCBA1" />
                    <stop offset="1" stopColor="#766D56" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_797_14236" x1="415.812" y1="5" x2="415.812" y2="165.003" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DCCBA1" />
                    <stop offset="1" stopColor="#766D56" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="paint3_radial_797_14236" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(414.5 83.5) rotate(52.6404) scale(45.921 97.0603)">
                    <stop stopColor="#EAD9A9" />
                    <stop offset="1" stopColor="#9A854A" />
                </radialGradient>
                <linearGradient id="paint4_linear_797_14236" x1="432.223" y1="103.83" x2="392.606" y2="59.5213" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B8A377" />
                    <stop offset="0.144231" stopColor="#948056" />
                    <stop offset="0.375" stopColor="#806B3F" />
                    <stop offset="0.855769" stopColor="#9C885F" />
                    <stop offset="1" stopColor="#FFEABF" />
                </linearGradient>
                <linearGradient id="paint5_linear_797_14236" x1="403.445" y1="64.6484" x2="403.445" y2="84.0055" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
                <linearGradient id="paint6_linear_797_14236" x1="403.49" y1="103.359" x2="403.49" y2="84.0023" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
                <linearGradient id="paint7_linear_797_14236" x1="425.695" y1="64.6484" x2="425.695" y2="84.0055" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
                <linearGradient id="paint8_linear_797_14236" x1="425.65" y1="103.359" x2="425.65" y2="84.0023" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F8D78F" />
                    <stop offset="1" stopColor="#FFFBD4" />
                </linearGradient>
            </defs>
        </svg>

    )
}