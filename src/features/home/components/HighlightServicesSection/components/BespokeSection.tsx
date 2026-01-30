'use client';

import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useMotionValue, useTransform, animate, useMotionValueEvent, AnimatePresence } from "framer-motion";
import LuxuryCTAButton from "@/components/ui/LuxuryCTAButton";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { getServices } from "@/api/services";
import { ServiceItem } from "@/types/service";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

// Geometric constants

const SLICE_PATHS = [
  "M15.208 531.062L301.708 563.562C314.108 465.163 366.541 401.562 391.208 382.062L192.208 173.562C61.208 297.562 22.208 457.562 15.208 531.062Z",
  "M205.708 160.563L398.708 375.563C463.908 312.364 555.708 298.031 592.708 299.031L588.708 11.0314C417.208 9.03134 267.208 103.064 205.708 160.563Z",
  "M987.208 160.531L794.208 375.531C729.008 312.331 636.708 298.032 599.708 299.032L603.208 11.0312C774.708 9.0312 925.708 103.032 987.208 160.531Z",
  "M1177.71 531.031L891.208 563.531C878.808 465.131 826.375 401.531 801.708 382.031L1000.71 173.531C1131.71 297.531 1170.71 457.531 1177.71 531.031Z",
  "M1177.71 661.562L891.209 629.062C878.809 727.462 826.376 791.062 801.709 810.562L1000.71 1019.06C1131.71 895.062 1170.71 735.062 1177.71 661.562Z",
  "M987.209 1032.06L794.209 817.062C729.009 880.262 636.709 894.562 599.709 893.562L603.209 1181.56C774.709 1183.56 925.709 1089.56 987.209 1032.06Z",
  "M205.709 1032.03L398.709 817.03C463.909 880.23 555.709 894.562 592.709 893.562L588.709 1181.56C417.209 1183.56 267.209 1089.53 205.709 1032.03Z",
  "M15.209 661.531L301.709 629.031C314.109 727.431 366.542 791.031 391.209 810.531L192.209 1019.03C61.209 895.031 22.209 735.031 15.209 661.531Z",
];

const WHEEL_SIZE = 1192;

interface BespokeSectionProps {
  title?: string;
  description?: string;
  initialServices?: ServiceItem[];
  totalCount?: number;
}

export default function BespokeSection({ title, description, initialServices = [], totalCount: initialTotal = 0 }: BespokeSectionProps) {
  const rotationMotion = useMotionValue(0);
  const imageRotation = useTransform(rotationMotion, (r) => -r);

  const [activeIndex, setActiveIndex] = useState(0);
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [totalCount, setTotalCount] = useState(initialTotal);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    // Only fetch if it's not the first page or if we don't have initial services
    if (page === 1 && initialServices.length > 0) return;

    const fetchServices = async () => {
      setLoading(true);
      const data = await getServices(page, ITEMS_PER_PAGE);
      setServices(data.items);
      setTotalCount(data.total);
      setLoading(false);
    };
    fetchServices();
  }, [page, initialServices.length]);

  // Ensure we always have 8 slots for the wheel
  const wheelItems = useMemo(() => {
    const filledItems = [...services];
    while (filledItems.length < ITEMS_PER_PAGE) {
      filledItems.push({
        id: `empty-${filledItems.length}`,
        title: "",
        description: "",
        image: ""
      });
    }
    return filledItems;
  }, [services]);

  useMotionValueEvent(rotationMotion, "change", (latest) => {
    // Determine current active index (normalized to 0-7)
    const normalized = ((Math.round(((latest as number) || 0) / 45) % 8) + 8) % 8;
    if (normalized !== activeIndex) {
      setActiveIndex(normalized);
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const currentWheelSize = useMemo(() => {
    if (!isMobile) return WHEEL_SIZE;
    // On mobile, scale wheel based on viewport. 
    // Example: for 390px width, wheel becomes ~820px, which fits well as a half-circle.
    return Math.min(windowWidth * 2.1, WHEEL_SIZE);
  }, [isMobile, windowWidth]);

  // Geometric calculations for 8 segments
  const generateSlicePath = (index: number) => {
    const centerX = WHEEL_SIZE / 2;
    const centerY = WHEEL_SIZE / 2;
    const anglePadding = isMobile ? 1.2 : 0; // Gap between slices on mobile
    const radialPadding = isMobile ? 22 : 0; // Padding from outer edge on mobile

    const innerRadius = 300;
    const outerRadius = 596 - radialPadding;

    const anglePerSlice = 360 / 8;
    const startAngle = index * anglePerSlice - 90 - anglePerSlice / 2 + anglePadding;
    const endAngle = index * anglePerSlice - 90 + anglePerSlice / 2 - anglePadding;

    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const x1_inner = centerX + innerRadius * Math.cos(toRad(startAngle));
    const y1_inner = centerY + innerRadius * Math.sin(toRad(startAngle));
    const x2_inner = centerX + innerRadius * Math.cos(toRad(endAngle));
    const y2_inner = centerY + innerRadius * Math.sin(toRad(endAngle));
    const x1_outer = centerX + outerRadius * Math.cos(toRad(startAngle));
    const y1_outer = centerY + outerRadius * Math.sin(toRad(startAngle));
    const x2_outer = centerX + outerRadius * Math.cos(toRad(endAngle));
    const y2_outer = centerY + outerRadius * Math.sin(toRad(endAngle));

    return `M ${x1_inner} ${y1_inner} L ${x1_outer} ${y1_outer} A ${outerRadius} ${outerRadius} 0 0 1 ${x2_outer} ${y2_outer} L ${x2_inner} ${y2_inner} A ${innerRadius} ${innerRadius} 0 0 0 ${x1_inner} ${y1_inner} Z`;
  };

  const labelPaths = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => {
      const centerX = WHEEL_SIZE / 2;
      const centerY = WHEEL_SIZE / 2;
      const anglePadding = isMobile ? 1.2 : 0;
      const labelRadius = isMobile ? 315 : 310; // Slightly adjust for mobile padding
      const anglePerSlice = 360 / 8;
      const startAngle = i * anglePerSlice - 90 - anglePerSlice / 2 + anglePadding;
      const endAngle = i * anglePerSlice - 90 + anglePerSlice / 2 - anglePadding;
      const toRad = (deg: number) => (deg * Math.PI) / 180;

      const x1 = centerX + labelRadius * Math.cos(toRad(startAngle));
      const y1 = centerY + labelRadius * Math.sin(toRad(startAngle));
      const x2 = centerX + labelRadius * Math.cos(toRad(endAngle));
      const y2 = centerY + labelRadius * Math.sin(toRad(endAngle));

      return `M ${x1} ${y1} A ${labelRadius} ${labelRadius} 0 0 1 ${x2} ${y2}`;
    });
  }, [isMobile]);

  // Dynamic state for central content
  const activeItem = wheelItems[activeIndex];
  const isAnimating = useRef(false);

  // Animation variants for entrance effects
  const wheelVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" as any }
    }
  };

  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.6
      }
    }
  };

  const getCardVariants = (index: number) => {
    // Calculate the position of each card
    const desktopAngles = [-165, -120, -60, -15, 15, 60, 120, 165];
    const mobileAngles = Array.from({ length: 8 }).map((_, idx) => (idx * 45) - 90);

    const midAngle = isMobile ? mobileAngles[index] : desktopAngles[index];
    const midRadius = isMobile ? 425 : 460;

    // Calculate the offset from center (where the card should move to)
    const offsetX = midRadius * Math.cos((midAngle * Math.PI) / 180);
    const offsetY = midRadius * Math.sin((midAngle * Math.PI) / 180);

    // Calculate position at top of circle (0 degrees = top, -90 degrees in standard coords)
    const topAngle = -90; // Top of the circle
    const topX = midRadius * Math.cos((topAngle * Math.PI) / 180);
    const topY = midRadius * Math.sin((topAngle * Math.PI) / 180);

    return {
      hidden: {
        x: topX - offsetX, // Start from top center of wheel
        y: topY - offsetY,
        scale: 0.3,
        opacity: 0
      },
      visible: {
        x: 0, // Move to final position
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1] as any
        }
      }
    };
  };

  const rotateWheel = (delta: number) => {
    if (isAnimating.current || services.length <= 4) return;
    isAnimating.current = true;

    // On mobile: rotate 45deg (1 service), on desktop: rotate 180deg (4 services)
    const rotationDegrees = isMobile ? 45 : 180;
    const targetRotation = rotationMotion.get() + (delta > 0 ? rotationDegrees : -rotationDegrees);

    animate(rotationMotion, targetRotation, {
      duration: isMobile ? 0.8 : 1.2,
      ease: [0.32, 0.72, 0, 1],
      onComplete: () => {
        isAnimating.current = false;
      }
    });
  };

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > 5) {
      rotateWheel(e.deltaY);
    }
  };

  const onPan = (_event: any, info: { delta: { x: number; y: number } }) => {
    if (isMobile) {
      // On mobile, only rotate if horizontal movement is dominant and meets threshold
      // to allow the browser to handle vertical scrolling naturally
      const horizontalThreshold = 3;
      if (Math.abs(info.delta.x) > horizontalThreshold && Math.abs(info.delta.x) > Math.abs(info.delta.y)) {
        rotateWheel(info.delta.x);
      }
    } else {
      // Desktop behavior: combine deltas for smoother mouse drag rotation
      const combinedDelta = info.delta.x + info.delta.y;
      if (Math.abs(combinedDelta) > 5) {
        rotateWheel(combinedDelta);
      }
    }
  };

  return (
    <section className="relative w-full bg-[#F9F7ED] flex flex-col " onWheel={onWheel}>
      <motion.div
        className="relative"
        onPan={onPan}
        style={{ touchAction: 'pan-y' }}
      >
        {/* 1. MASKED VIEWPORT CONTAINER - Set to a specific height that wraps the visible part of the wheel */}
        <div className="relative w-full h-[470px] md:h-[680px] flex items-end justify-center overflow-hidden">

          {/* 2. ROTATING LAYER - Contains ONLY the wheel */}
          <motion.div
            className="relative transform-gpu"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={wheelVariants}
            style={{
              width: currentWheelSize,
              height: currentWheelSize,
              rotate: rotationMotion,
              position: 'absolute',
              bottom: -(currentWheelSize / 2), // Fixed at center-bottom of parent
              left: '50%',
              marginLeft: -(currentWheelSize / 2),
              transformOrigin: '50% 50%'
            }}
          >
            <svg
              width={currentWheelSize}
              height={currentWheelSize}
              viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 1. CLIP PATHS */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <clipPath key={`clip-${i}`} id={`clip-slice-${i}`}>
                    <path d={isMobile ? generateSlicePath(i) : SLICE_PATHS[i]} />
                  </clipPath>
                ))}

                {/* 2. LABEL PATHS (for curved text) */}
                {isMobile ? (
                  labelPaths.map((d, i) => (
                    <path key={`label-path-${i}`} id={`label-path-${i}`} d={d} fill="none" />
                  ))
                ) : (
                  [
                    "M301.708 563.562C314.108 465.163 366.541 401.562 391.208 382.062",
                    "M398.708 375.563C463.908 312.364 555.708 298.031 592.708 299.031",
                    "M599.708 299.032C636.708 298.032 729.008 312.331 794.208 375.531",
                    "M801.708 382.031C826.375 401.531 878.808 465.131 891.208 563.531",
                    "M891.209 629.062C878.809 727.462 826.376 791.062 801.709 810.562",
                    "M794.209 817.062C729.009 880.262 636.709 894.562 599.709 893.562",
                    "M592.709 893.562C555.709 894.562 463.909 880.23 398.709 817.03",
                    "M391.209 810.531C366.542 791.031 314.109 727.431 301.709 629.031"
                  ].map((d, i) => (
                    <path key={`label-path-${i}`} id={`label-path-${i}`} d={d} fill="none" />
                  ))
                )}

                <radialGradient id="paint0_radial_bg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(601 583) rotate(93.6427) scale(1023.07 1919.59)">
                  <stop stopColor="#EAE2CD" stopOpacity="0" />
                  <stop offset="0.288" stopColor="#EAE2CD" />
                  <stop offset="1" stopColor="#DCD0B3" />
                </radialGradient>
                <radialGradient id="paint1_radial_border" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(596 596) rotate(90) scale(596)">
                  <stop stopColor="#EBDFC4" />
                  <stop offset="1" stopColor="#BBA880" />
                </radialGradient>
                <linearGradient id="grad_left" x1="280.709" y1="574.531" x2="-47.291" y2="581.031" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D4C9AE" /><stop offset="1" stopColor="#B8A983" />
                </linearGradient>
                <linearGradient id="grad_right" x1="857.709" y1="596.031" x2="1200.71" y2="596.031" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D4C9AE" /><stop offset="1" stopColor="#BFB18E" />
                </linearGradient>
              </defs>

              {/* BACKGROUND WHEEL */}
              <circle cx="596" cy="596" r="595.5" fill="url(#paint0_radial_bg)" stroke="url(#paint1_radial_border)" />

              <motion.g
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardContainerVariants}
              >
                {wheelItems.map((item, i) => {
                  // Desktop slice angles
                  const desktopAngles = [-165, -120, -60, -15, 15, 60, 120, 165];
                  // Mobile slice angles (Perfect 45 deg intervals)
                  const mobileAngles = Array.from({ length: 8 }).map((_, idx) => (idx * 45) - 90);

                  const midAngle = isMobile ? mobileAngles[i] : desktopAngles[i];
                  const midRadius = isMobile ? 425 : 460;
                  const cx = 635 + midRadius * Math.cos((midAngle * Math.PI) / 180);
                  const cy = 650 + midRadius * Math.sin((midAngle * Math.PI) / 180);

                  const hasData = item.title && item.image;

                  return (
                    <motion.g
                      key={item.id}
                      variants={getCardVariants(i)}
                    >
                      {/* Image fitted to slice & counter-rotated to stay upright */}
                      {hasData && (
                        <g clipPath={`url(#clip-slice-${i})`}>
                          <motion.g
                            style={{
                              transformOrigin: `${cx}px ${cy}px`,
                              rotate: imageRotation
                            }}
                          >
                            <image
                              href={item.image}
                              x={cx - 275}
                              y={cy - 275}
                              width="470"
                              height="470"
                              preserveAspectRatio="xMidYMid slice"
                              className="opacity-95"
                            />
                          </motion.g>
                        </g>
                      )}

                      <path d={isMobile ? generateSlicePath(i) : SLICE_PATHS[i]} stroke="#D4C5A6" strokeWidth="1" fill="none" />

                      {/* Curved Text extracted directly from geometry */}
                      <text
                        fill="white"
                        fontSize={isMobile ? "12" : "11"}
                        fontWeight="600"
                        dy={isMobile ? "-20" : "-14"}
                        className="uppercase tracking-[0.4em] pointer-events-none drop-shadow-xl"
                        style={{ fontFamily: 'var(--font-serif), serif' }}
                      >
                        <textPath href={`#label-path-${i}`} startOffset="50%" textAnchor="middle">
                          {item.title}
                        </textPath>
                      </text>
                    </motion.g>
                  );
                })}
              </motion.g>

              {/* SIDE CARDS (Desktop Only) */}
              {!isMobile && (
                <>
                  <path d="M300.709 622.531C298.309 601.731 299.709 579.198 300.709 570.531L14.2086 544.531C10.2086 584.531 12.5419 629.531 14.2086 647.031L300.709 622.531Z" fill="url(#grad_left)" />
                  <path d="M892.209 622.531C894.609 601.731 893.209 579.198 892.209 570.531L1178.71 544.531C1182.71 584.531 1180.38 629.531 1178.71 647.031L892.209 622.531Z" fill="url(#grad_right)" />
                </>
              )}
            </svg>
          </motion.div>

          {/* 3. STATIC OVERLAY LAYER - Brand & Content */}
          <div className="absolute inset-x-0 bottom-0 z-40 pointer-events-none flex flex-col items-center">
            {/* Dynamic Center Hub Text with Fade Transition */}
            <div className={`relative ${isMobile ? 'h-[200px]' : 'h-[240px]'} w-full flex flex-col items-center justify-start pt-14`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key="central-content" // Static key as content is constant
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center px-10 md:px-16 max-w-2xl"
                >
                  <h2 className="text-lg md:text-[26px] font-serif font-bold text-[#2A2A2A] uppercase leading-tight mb-4">
                    {title}
                  </h2>
                  <p className={`${isMobile ? 'text-[13px]' : 'text-[15px]'} font-light text-[#4A4A4A] leading-relaxed tracking-wide`}>
                    {description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination Controls */}
          {totalCount > ITEMS_PER_PAGE && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 z-50 pointer-events-none">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className={clsx(
                  "w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#BBA880] flex items-center justify-center text-[#BBA880] bg-white/50 backdrop-blur-sm pointer-events-auto transition-all hover:bg-[#BBA880] hover:text-white disabled:opacity-30 disabled:pointer-events-none",
                )}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setPage(p => p + 1)}
                disabled={page * ITEMS_PER_PAGE >= totalCount}
                className={clsx(
                  "w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#BBA880] flex items-center justify-center text-[#BBA880] bg-white/50 backdrop-blur-sm pointer-events-auto transition-all hover:bg-[#BBA880] hover:text-white disabled:opacity-30 disabled:pointer-events-none",
                )}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}


        </div>
        {/* 4. STATIC FOOTER - Horizontal line & Explore button */}
        {isMobile ? (
          <div className="flex items-center justify-center py-8">
            <LuxuryCTAButton onClick={() => console.log("Explore clicked")}>
              EXPLORE OUR PREVILEGES
            </LuxuryCTAButton>
          </div>
        ) : (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[90%] flex items-center h-[90px] z-50">
            {/* Left Line */}
            <div className="flex-grow h-px bg-[#D4C5A6]"></div>

            {/* Center Button Area */}
            <div className="flex items-center gap-2 shrink-0">

              <div className="h-4 w-px bg-[#D4C5A6]"></div>

              <LuxuryButton onClick={() => console.log("Explore clicked")}>
                EXPLORE OUR PREVILEGES
              </LuxuryButton>

              {/* Right Vertical Accents */}
              <div className="h-4 w-px bg-[#D4C5A6]"></div>

            </div>

            {/* Right Line */}
            <div className="flex-grow h-px bg-[#D4C5A6]"></div>
          </div>
        )}
      </motion.div>

      {/* Spacing for content below if needed */}
      <div className="h-[5vh] bg-[#F9F7ED]"></div>
    </section>
  );
}
