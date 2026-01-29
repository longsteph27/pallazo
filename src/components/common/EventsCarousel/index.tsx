import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EventCardData } from "@/features/home/components/EventsSection/components/EventsSection";
import LuxuryCTAButton from "@/components/ui/LuxuryCTAButton";

interface CarouselProps {
    slides: EventCardData[];
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
    hideBackground?: boolean;
}

type Slot = "offLeft" | "left" | "center" | "right" | "offRight";

/**
 * IMPORTANT LAYERING:
 * - BG SVG: nền + search bar + bottom lines (không có side panels)
 * - Cards (HTML/motion): ảnh chạy carousel
 * - FG SVG: side panels (2 mảng đen), frame center, nav buttons, detail button
 * => side panels luôn nằm trên ảnh => ảnh không đè lên overlay 2 bên
 */
export default function Carousel({
    slides,
    title,
    subtitle,
    ctaText,
    ctaHref,
    hideBackground = false,
}: CarouselProps) {
    const len = slides.length;
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const getIndex = (i: number) => (len ? (i + len) % len : 0);

    const prev2Index = getIndex(index - 2);
    const prevIndex = getIndex(index - 1);
    const nextIndex = getIndex(index + 1);
    const next2Index = getIndex(index + 2);

    const prev2 = slides[prev2Index];
    const prev = slides[prevIndex];
    const curr = slides[index];
    const next = slides[nextIndex];
    const next2 = slides[next2Index];

    const handlePrev = () => {
        if (!len) return;
        setDirection(1);
        setIndex(nextIndex);
    };

    const handleNext = () => {
        if (!len) return;
        setDirection(-1);
        setIndex(prevIndex);
    };

    // Layout chuẩn theo SVG chuẩn bạn đưa (base 1440x871)
    // Mobile scaling factor k: giúp nở rộng card tỉ lệ với việc SVG nền nở ra (slice)
    const SLOT = useMemo(() => {
        const k = isMobile ? (1443 / 867) / (390 / 500) : 1; // ~2.13 on mobile

        const getLeft = (oldLeft: number, oldWidth: number) => {
            if (!isMobile) return `${oldLeft}%`;
            const oldCenter = oldLeft + oldWidth / 2;
            const newWidth = oldWidth * k;
            const newCenter = 50 + (oldCenter - 50.02) * k; // 50.02 là tâm chuẩn trên desktop
            return `${newCenter - newWidth / 2}%`;
        };

        const getWidth = (oldWidth: number) => `${oldWidth * k}%`;

        return {
            offLeft: {
                left: getLeft(-18, 21.5),
                top: "41.79%", // ~364/871
                width: getWidth(21.5), // ~310/1440
                height: "49.1%", // ~428/871
                opacity: 0,
                scale: 0.92,
                zIndex: 0,
                borderRadius: "14px 14px 0 0",
                clipPath: "none",
            },
            left: {
                left: getLeft(8.68, 21.5), // 125/1440
                top: "41.2%",
                width: getWidth(21.5),
                height: "49.1%",
                opacity: 1,
                scale: 1,
                zIndex: 1,
                borderRadius: "10px 10px 10px 10px",
                clipPath: "none",
            },
            center: {
                left: getLeft(30.83, 38.38), // ~444/1440
                top: "29.4%", // 249/871 (chuẩn svg mới)
                width: getWidth(38.38),
                height: "69.30%", // (855.426-249)/871 ~= 606.426/871
                opacity: 1,
                scale: 1,
                zIndex: 2,
                borderRadius: "0px",
                clipPath: "url(#centerClip)",
            },
            right: {
                left: getLeft(69.79, 20.83), // 1005/1440
                top: "41.2%",
                width: getWidth(20.83), // 300/1440
                height: "49.1%",
                opacity: 1,
                scale: 1,
                zIndex: 1,
                borderRadius: "10px 10px 10px 10px",
                clipPath: "none",
            },
            offRight: {
                left: getLeft(108, 20.83),
                top: "41.79%",
                width: getWidth(20.83),
                height: "49.1%",
                opacity: 0,
                scale: 0.92,
                zIndex: 0,
                borderRadius: "14px 14px 0 0",
                clipPath: "none",
            },
        } as const;
    }, [isMobile]);

    // Motion config: di chuyển slot giống carousel (không ẩn/hiện)
    const spring = useMemo(
        () => ({
            type: "spring" as const,
            stiffness: 240,
            damping: 28,
            mass: 0.9,
        }),
        []
    );

    const windowSlides = useMemo(() => {
        if (!len) return [];

        // Define all possible slots and their corresponding indices
        const allSlots = [
            { idx: prev2Index, slot: "offLeft" as Slot },
            { idx: prevIndex, slot: "left" as Slot },
            { idx: index, slot: "center" as Slot },
            { idx: nextIndex, slot: "right" as Slot },
            { idx: next2Index, slot: "offRight" as Slot },
        ];

        // Priority order: center (2) > left (1) / right (3) > off-screens (0, 4)
        const priorityIndices = [2, 1, 3, 0, 4];
        const result: { data: EventCardData; slot: Slot }[] = [];
        const seenIndices = new Set<number>();

        priorityIndices.forEach(pIdx => {
            const { idx, slot } = allSlots[pIdx];
            if (!seenIndices.has(idx) && slides[idx]?.id) {
                result.push({ data: slides[idx], slot });
                seenIndices.add(idx);
            }
        });

        return result;
    }, [len, prev2Index, prevIndex, index, nextIndex, next2Index, slides]);

    if (!len) return null;

    return (
        <div className="w-full flex flex-col items-center justify-center relative overflow-hidden">
            <div className="relative w-full max-w-[1440px] aspect-[390/500] md:aspect-[1443/867]">
                {/* =========================
            BG SVG (Static)
            ========================= */}
                <svg
                    viewBox="0 0 1443 867"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 w-full h-full block pointer-events-none select-none"
                >
                    <defs>
                        {/* Gradients from new SVG */}
                        <linearGradient id="paint0_linear_692_12206" x1="733.492" y1="4" x2="766.829" y2="964.174" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#AC9666" />
                            <stop offset="1" stopColor="#F9F7ED" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_692_12206" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(719.75 830.5) scale(715.75 167.298)">
                            <stop stopColor="#AC9666" />
                            <stop offset="1" stopColor="#F9F7ED" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_692_12206" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(719.75 834.5) scale(715.75 167.298)">
                            <stop stopColor="#AC9666" />
                            <stop offset="1" stopColor="#F9F7ED" />
                        </radialGradient>
                        <radialGradient id="paint3_radial_692_12206" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(719.75 837.5) scale(715.75 167.298)">
                            <stop stopColor="#AC9666" />
                            <stop offset="1" stopColor="#F9F7ED" />
                        </radialGradient>

                        {/* Center clipPath normalized (objectBoundingBox) theo CENTER SHAPE "chuẩn" bạn đưa */}
                        <clipPath id="centerClip" clipPathUnits="objectBoundingBox">
                            <path d="M0 0.0209 C0 0.0094 0.0149 0 0.0333 0 H0.9667 C0.9851 0 1 0.0094 1 0.0209 V0.8825 L0.5009 1 L0 0.8833 V0.0209 Z" />
                        </clipPath>
                    </defs>

                    {/* Background Paths from new SVG */}
                    {!hideBackground && (
                        <>
                            <path d="M1.00017 45.5354L727.752 0L1441.5 47.0202V784H0.5L1.00017 45.5354Z" fill="#ECE5D1" />
                            <path d="M1.5 77.2487L725.497 4L1441.5 76.2589L1440.5 784H1.5V77.2487Z" fill="url(#paint0_linear_692_12206)" />

                            {/* Search Bar Decoration (Keep from previous logic if needed, or remove if the new SVG replaces it. 
                                The user's SVG doesn't have the search bar rects, but they might still want them or they might be baked into the path.
                                Looking at the paths provided, they don't seem to include the search bar or the footer lines as separate rects.
                                Actually, Path 3, 4, 5 are the bottom lines.) */}

                            {/* Re-adding Search Bar Decoration manually if it's still needed, 
                                but adjusting y to fit the new aspect ratio if necessary. 
                                For now, I'll stick to the user's provided paths for the "background". */}
                        </>
                    )}

                    {/* Bottom Decoration from new SVG */}
                    <path d="M0 787H436.5L720 859L1002.5 786.5H1442.5" stroke="url(#paint1_radial_692_12206)" strokeWidth="2" />
                    <path d="M0 790.5H436L720 862.5L1001.5 790.5H1440" stroke="url(#paint2_radial_692_12206)" strokeOpacity="0.6" />
                    <path d="M0 794.5H435.5L720 866L1001.5 794.5H1441" stroke="url(#paint3_radial_692_12206)" strokeOpacity="0.3" />
                </svg>

                {/* =========================
            Cards Layer (HTML / motion)
            ========================= */}
                <div className=" w-full h-full pointer-events-none z-20">
                    {windowSlides.map(({ data, slot }) => {
                        const s = SLOT[slot];
                        const isCenter = slot === "center";

                        return (
                            <motion.div
                                key={data.id}
                                className="absolute pointer-events-auto"
                                initial={false}
                                animate={{
                                    left: s.left,
                                    top: s.top,
                                    width: s.width,
                                    height: s.height,
                                    zIndex: s.zIndex,
                                }}
                                transition={spring}
                                style={{
                                    willChange: "left, top, width, height, transform",
                                }}
                            >
                                {/* Image */}
                                <motion.div
                                    className="w-full h-full overflow-hidden"
                                    initial={false}
                                    animate={{
                                        opacity: s.opacity,
                                        scale: s.scale,
                                        borderRadius: s.borderRadius,
                                    }}
                                    transition={spring}
                                    style={{
                                        clipPath: s.clipPath as any,
                                        willChange: "transform, opacity",
                                        backgroundImage: `url(${data.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        transformOrigin: "center",
                                    }}
                                />

                                {/* Center slide: content inside card (đúng vị trí theo SVG chuẩn) */}
                                {isCenter && (
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.div
                                            key={data.id + "_content"}
                                            className="absolute bottom-[30%] right-0 left-0 text-center text-white pointer-events-none"
                                            initial={{ opacity: 0, y: direction === 1 ? 10 : -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: direction === 1 ? -10 : 10 }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}

                                        >
                                            <div className="flex flex-col items-center justify-center">
                                                <h2 className="text-xl font-bold uppercase tracking-wider">
                                                    {curr.title}
                                                </h2>
                                                <div className="text-sm tracking-wide opacity-90">
                                                    {curr.dateStart} — {curr.dateEnd}
                                                </div>
                                                <p className="text-xs max-w-xs mx-auto opacity-80 line-clamp-2">
                                                    {curr.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                        {/* DETAIL Button relative to card bottom */}
                                        <div
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer"
                                            onClick={() => console.log("Detail clicked", curr.id)}
                                        >
                                            <svg width="127" height="66" viewBox="0 0 127 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M63.3564 0.5C77.7422 0.491909 91.7247 5.25633 103.112 14.0469C114.368 22.7355 122.456 34.8733 126.152 48.5938L63.3945 64.9824L0.614258 48.665C4.2947 34.94 12.3704 22.7932 23.6162 14.0918C34.9938 5.28839 48.9707 0.50819 63.3564 0.5Z" fill="url(#paint0_linear_695_12212)" stroke="url(#paint1_linear_695_12212)" />
                                                {/* Text center relative to new 127x66 button */}
                                                <text
                                                    x="63.5"
                                                    y="42"
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    fill="white"
                                                    fontSize="13"
                                                    fontWeight="bold"
                                                    letterSpacing="0.1em"
                                                    style={{ textTransform: "uppercase" }}
                                                >
                                                    DETAIL
                                                </text>
                                            </svg>
                                        </div>
                                    </AnimatePresence>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* =========================
            Foreground: Title, Subtitle, CTA
            ========================= */}
                <div className="absolute top-[8%] md:top-[8%] w-full flex flex-col items-center z-40 space-y-2 pointer-events-none">
                    {title && (
                        <motion.h2
                            key={curr.id + "_title"}
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-xl md:text-3xl font-serif text-white uppercase tracking-[0.1em] text-center mx-auto px-4"
                            style={{ fontFamily: 'var(--font-serif), serif' }}
                        >
                            {title}
                        </motion.h2>
                    )}
                    {subtitle && (
                        <motion.p
                            key={curr.id + "_sub"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-md text-white/80 text-center mx-auto max-w-2xl tracking-wider"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>

                {ctaText && (
                    <LuxuryCTAButton
                        href={ctaHref || "#"}
                        className="absolute top-[18%] left-1/2 -translate-x-1/2 z-40"
                    >
                        {ctaText}
                    </LuxuryCTAButton>
                )}

                {/* =========================
            FG SVG (side panels + frame + nav + detail)
            ========================= */}
                <svg
                    viewBox="0 0 1443 867"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 w-full h-full pointer-events-none z-50 select-none"
                >
                    <defs>
                        {/* Filters */}
                        <filter
                            id="filter0_i_263_608"
                            x="1019"
                            y="558"
                            width="40"
                            height="39"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-2" dy="1" />
                            <feGaussianBlur stdDeviation="2.9" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.838462 0 0 0 0 0.596154 0 0 0 1 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_263_608" />
                        </filter>

                        <filter
                            id="filter1_i_263_608"
                            x="377"
                            y="558"
                            width="40"
                            height="39"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-2" dy="1" />
                            <feGaussianBlur stdDeviation="2.9" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.838462 0 0 0 0 0.596154 0 0 0 1 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_263_608" />
                        </filter>

                        {/* Paints (chuẩn SVG mới) */}
                        <linearGradient id="paint1_linear_263_608" x1="1039" y1="569" x2="1040" y2="596" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E3BA7D" />
                            <stop offset="0.4375" stopColor="white" />
                            <stop offset="1" stopColor="#B39569" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_263_608" x1="1043.87" y1="573.187" x2="1031.58" y2="574.93" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F9F7ED" />
                            <stop offset="1" stopColor="#E3C598" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_263_608" x1="1035.81" y1="576.186" x2="1032.63" y2="576.621" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F9F7ED" />
                            <stop offset="1" stopColor="#E3C598" />
                        </linearGradient>

                        <linearGradient id="paint10_linear_263_608" x1="18" y1="11" x2="19" y2="38" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E3BA7D" />
                            <stop offset="0.4375" stopColor="white" />
                            <stop offset="1" stopColor="#B39569" />
                        </linearGradient>
                        <linearGradient id="paint11_linear_263_608" x1="394.127" y1="573.187" x2="406.42" y2="574.93" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F9F7ED" />
                            <stop offset="1" stopColor="#E3C598" />
                        </linearGradient>
                        <linearGradient id="paint12_linear_263_608" x1="402.189" y1="576.186" x2="405.372" y2="576.621" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F9F7ED" />
                            <stop offset="1" stopColor="#E3C598" />
                        </linearGradient>

                        <linearGradient id="paint4_linear_263_608" x1="739.291" y1="934.451" x2="740.997" y2="843.153" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E4BB7E" />
                            <stop offset="1" stopColor="#7E6746" stopOpacity="0" />
                        </linearGradient>

                        {/* New Detail Button filter and gradients */}
                        <filter id="filter0_d_695_12212" x="0" y="0" width="134.769" height="73.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_695_12212" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_695_12212" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_695_12212" x1="63.8936" y1="65" x2="66.8936" y2="2" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#95793C" />
                            <stop offset="1" stopColor="#C9B383" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_695_12212" x1="63.3936" y1="2.01184e-07" x2="66.3936" y2="46.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* SIDE PANELS (FG – đè lên ảnh đúng như thiết kế) */}
                    {/* <path
                        d="M1005 374C1005 368.477 1009.48 364 1015 364H1295C1300.52 364 1305 368.477 1305 374V792H1005V374Z"
                        fill="black"
                        fillOpacity="0.38"
                    />
                    <path
                        d="M125 374C125 368.477 129.477 364 135 364H425C430.523 364 435 368.477 435 374V792H125V374Z"
                        fill="black"
                        fillOpacity="0.38"
                    /> */}

                    {/* CENTER FRAME Updated to match new card clipPath */}
                    <path
                        d="M444.317 261.8897C444.317 254.7709 452.55496 249 462.717 249H977.917C988.079 249 996.317 254.7709 996.317 261.8897V793.5L720.817 865.5L444.317 794V261.8897Z"
                        fill="none"
                        stroke="url(#paint4_linear_263_608)"
                        strokeWidth="3"
                    />


                    {/* NAV BUTTONS */}
                    {/* Right (Next) */}
                    <g style={{ cursor: "pointer", pointerEvents: "auto" }} onClick={handleNext}>
                        <g filter="url(#filter0_i_263_608)">
                            <rect x="1021" y="558" width="38" height="38" rx="19" fill="#000100" fillOpacity="0.56" />
                        </g>
                        <rect x="1021.5" y="558.5" width="37" height="37" rx="18.5" stroke="url(#paint1_linear_263_608)" strokeOpacity="0.67" />
                        <path
                            d="M1048.5 576.071C1041.01 575.622 1035.25 571.282 1033 569V572.592C1036.8 575.51 1040.94 576.932 1042.28 577.306C1039.16 578.204 1034.27 581.01 1033 582.133V585.724C1038.9 580.427 1045.79 578.653 1048.5 578.429V576.071Z"
                            fill="url(#paint2_linear_263_608)"
                        />
                        <path d="M1033 579.552V575.062L1037.01 577.372L1033 579.552Z" fill="url(#paint3_linear_263_608)" />
                    </g>

                    {/* Left (Prev) */}
                    <g style={{ cursor: "pointer", pointerEvents: "auto" }} onClick={handlePrev}>
                        <g filter="url(#filter1_i_263_608)">
                            <rect width="38" height="38" rx="19" transform="matrix(-1 0 0 1 417 558)" fill="#000100" fillOpacity="0.56" />
                        </g>
                        <rect x="-0.5" y="0.5" width="37" height="37" rx="18.5" transform="matrix(-1 0 0 1 416 558)" stroke="url(#paint10_linear_263_608)" strokeOpacity="0.67" />
                        <path
                            d="M389.5 576.071C396.986 575.622 402.751 571.282 405 569V572.592C401.204 575.51 397.057 576.932 395.721 577.306C398.842 578.204 403.735 581.01 405 582.133V585.724C399.095 580.427 392.206 578.653 389.5 578.429V576.071Z"
                            fill="url(#paint11_linear_263_608)"
                        />
                        <path d="M405 579.552V575.062L400.993 577.372L405 579.552Z" fill="url(#paint12_linear_263_608)" />
                    </g>
                </svg>
            </div>
        </div>
    );
}
