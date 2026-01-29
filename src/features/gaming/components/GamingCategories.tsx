"use client";

import { PrimaryIcon } from "@/components/icons";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/style.css";
import clsx from "clsx";

export type GamingCategoryItem = {
    id?: string;
    title: string;
    imageSrc: string | StaticImageData;
    imageAlt?: string;
    highlighted?: boolean;
};

type Props = {
    items: GamingCategoryItem[];
    initialIndex?: number;

    /** hover đổi ảnh */
    changeOnHover?: boolean;

    /** auto slide */
    autoRotate?: boolean;
    autoRotateMs?: number;

    /** gap giữa các ảnh (px) */
    gap?: number;

    /** giới hạn kích thước ảnh giữa (desktop) */
    activeMaxHeight?: number; // default 508
    /** tỉ lệ nhỏ của ảnh trên/dưới so với ảnh giữa */
    sideScale?: number; // default 0.62

    onEnter?: (id: string) => void;
    className?: string;
};

function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

const ACTIVE_RATIO = 593 / 508; // ~1.167

export default function GamingCategoriesVertical({
    items,
    initialIndex = 0,
    changeOnHover = false,
    onEnter,
    autoRotate = false,
    autoRotateMs = 3000,
    gap = 18,
    activeMaxHeight = 508,
    sideScale = 0.62,
    className,
}: Props) {
    const len = items?.length ?? 0;
    const [active, setActive] = React.useState(() => (len ? mod(initialIndex, len) : 0));
    const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

    // reduced motion
    const [reduceMotion, setReduceMotion] = React.useState(false);
    React.useEffect(() => {
        const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
        if (!m) return;
        const onChange = () => setReduceMotion(!!m.matches);
        onChange();
        m.addEventListener?.("change", onChange);
        return () => m.removeEventListener?.("change", onChange);
    }, []);

    // auto rotate
    React.useEffect(() => {
        if (!autoRotate || reduceMotion || len <= 1) return;
        const t = window.setInterval(() => setActive((a) => mod(a + 1, len)), autoRotateMs);
        return () => window.clearInterval(t);
    }, [autoRotate, autoRotateMs, reduceMotion, len]);

    if (!items || items.length === 0) return null;

    // stable tripled list to prevent remounting
    const tripleItems = React.useMemo(() => {
        if (len === 0) return [];
        return [...items, ...items, ...items];
    }, [items, len]);

    const centerIdx = len + active;

    // ===== Measure strip height (full container height) =====
    const stripRef = React.useRef<HTMLDivElement | null>(null);
    const [stripH, setStripH] = React.useState(0);

    React.useEffect(() => {
        if (!stripRef.current) return;
        const el = stripRef.current;

        const update = () => setStripH(el.getBoundingClientRect().height);

        const ro = new ResizeObserver(() => update());
        ro.observe(el);
        update();

        return () => ro.disconnect();
    }, []);

    // ===== Compute card heights based on strip height =====
    // ảnh giữa: cố gắng đạt 508px nếu đủ chỗ, còn lại scale theo strip
    const activeH = React.useMemo(() => {
        if (!stripH) return Math.min(activeMaxHeight, 508);
        // lấy khoảng 58% chiều cao strip, clamp lại
        const h = Math.floor(stripH * 0.58);
        return Math.min(activeMaxHeight, Math.max(260, h));
    }, [stripH, activeMaxHeight]);

    // translateY để slotIdx=2 (active) nằm đúng giữa strip
    const centerOffset = stripH / 2 - activeH / 2;
    const translateY = stripH ? centerOffset - centerIdx * (activeH + gap) : 0;

    return (
        <section className={["relative bg-gradient-to-b from-[#01050F] via-[#193247] to-[#01050F] max-w-[1427px] mx-auto rounded-[32px]", className].filter(Boolean).join(" ")}>
            <div className="mx-auto w-full px-4">
                {/* <div className="relative overflow-hidden rounded-[28px] bg-[#000511] shadow-2xl"> */}
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_minmax(360px,520px)] lg:aspect-[1427/891] items-center px-2 lg:px-4 py-8 lg:py-0">
                    {/* LEFT MENU */}
                    <div className="space-y-2 lg:space-y-7 w-full mt-8 lg:mt-0">
                        {items.map((it, idx) => {
                            const isActive = idx === active;
                            const isHovered = (idx === hoveredIdx) || (isActive); // on mobile isActive should show icon/bg

                            return (
                                <div
                                    key={it.id ?? `${it.title}-${idx}`}
                                    className={clsx("w-full transition-all duration-300 rounded-lg", {
                                        "gaming-categories-title-active": isActive,
                                    })}
                                    style={
                                        isActive
                                            ? {
                                                background:
                                                    "linear-gradient(90deg, #193247 0%, rgba(25, 50, 71, 0) 100%)",
                                            }
                                            : undefined
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={() => setActive(idx)}
                                        onMouseEnter={() => setHoveredIdx(idx)}
                                        onMouseLeave={() => setHoveredIdx(null)}
                                        className={[
                                            "group w-full text-left sm:text-center lg:text-left",
                                            "flex items-center justify-start sm:justify-center lg:justify-start gap-4 sm:gap-5",
                                            "py-3 sm:py-4 lg:py-6 px-3 sm:px-4",
                                            "transition-all duration-300",
                                            isActive ? "opacity-100 " : "opacity-70 hover:opacity-100",
                                            "focus:outline-none",
                                        ].join(" ")}
                                    >
                                        <div className="flex items-center lg:pl-8 w-full justify-center lg:justify-start">
                                            <div className="flex items-center w-full max-w-[320px] lg:max-w-none justify-start lg:justify-start">
                                                <div className={clsx("flex-shrink-0 transition-all duration-500 overflow-hidden flex items-center justify-center", {
                                                    "w-0 opacity-0 mr-0": !isActive,
                                                    "w-8 opacity-100 mr-4": isActive
                                                })}>
                                                    <PrimaryIcon className="w-6 h-6" />
                                                </div>

                                                <span
                                                    className={[
                                                        "font-serif tracking-wider uppercase",
                                                        "text-[16px] sm:text-[20px] lg:text-[32px]",
                                                        "transition-all duration-300",
                                                        isActive
                                                            ? "text-[#E8C880] font-bold"
                                                            : "text-[#9CA3AF] group-hover:text-[#D1D5DB]",
                                                    ].join(" ")}
                                                >
                                                    {it.title}
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT STRIP (top on mobile) */}
                    <div className="relative w-full h-[300px] sm:h-[450px] lg:h-full min-h-0">
                        <div ref={stripRef} className="h-full rounded-[22px]">
                            {/* mask fade top/bottom */}
                            <div className="h-full w-full [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]">
                                <motion.div
                                    initial={false}
                                    animate={{ y: translateY }}
                                    transition={
                                        reduceMotion
                                            ? { duration: 0 }
                                            : {
                                                type: "spring",
                                                stiffness: 40,
                                                damping: 14,
                                                mass: 2,
                                                restDelta: 0.001
                                            }
                                    }
                                    className="flex flex-col items-center will-change-transform"
                                    style={{
                                        gap,
                                    }}
                                >
                                    {tripleItems.map((it, idx) => {
                                        const isCenter = idx === centerIdx;
                                        const distance = Math.abs(idx - centerIdx);

                                        // Card scale and opacity based on distance from center
                                        const opacity = isCenter ? 1 : Math.max(0.3, 1 - distance * 0.4);

                                        return (
                                            <motion.div
                                                key={`${it.id}-${idx}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (isCenter) {
                                                        if (it.id) onEnter?.(it.id);
                                                    } else {
                                                        setActive(idx % len);
                                                    }
                                                }}
                                                animate={{
                                                    opacity,
                                                    zIndex: 10 - distance
                                                }}
                                                transition={
                                                    reduceMotion
                                                        ? { duration: 0 }
                                                        : {
                                                            type: "spring",
                                                            stiffness: 45,
                                                            damping: 14,
                                                            mass: 1.8,
                                                            restDelta: 0.001
                                                        }
                                                }
                                                className={[
                                                    "relative rounded-2xl overflow-hidden w-full aspect-[593/508] cursor-pointer",
                                                    isCenter ? "gaming-categories-card-active shadow-[0_18px_42px_rgba(0,0,0,0.42)]" : "",
                                                ].join(" ")}
                                                style={{
                                                    height: activeH,
                                                }}
                                            >
                                                <Image
                                                    src={it.imageSrc}
                                                    alt={it.imageAlt ?? it.title}
                                                    fill
                                                    className="object-cover"
                                                    priority={isCenter}
                                                />
                                                {/* DETAIL BUTTON OVERLAY (only on active center card) */}
                                                {isCenter && (
                                                    <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-12">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                if (it.id) onEnter?.(it.id);
                                                            }}
                                                            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#EAD9A9]/80 backdrop-blur-sm border border-[#EAD9A9] flex items-center justify-center text-[#193247] text-[10px] lg:text-xs font-bold tracking-widest hover:scale-105 transition-transform"
                                                        >
                                                            DETAIL
                                                        </button>
                                                    </div>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* optional: dots (nếu cần thì bật) */}
                    {/* <div className="mt-5 hidden lg:flex items-center justify-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className={[
                      "h-2 w-2 rounded-full transition-all",
                      i === active ? "bg-[#E8C880] w-6" : "bg-white/25 hover:bg-white/40",
                    ].join(" ")}
                  />
                ))}
              </div> */}
                </div>
            </div>

            {/* glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E8C880]/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#D4AF76]/10 blur-3xl" />
        </section>
    );
}
