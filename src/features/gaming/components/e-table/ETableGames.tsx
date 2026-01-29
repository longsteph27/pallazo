"use client";

import React from "react";
import GameType from "../GameType";
import { SquareIcon } from "@/components/icons";

interface GameCardProps {
    image: string;
    title: string;
    description: string;
}

const GameCard: React.FC<GameCardProps> = ({ image, title, description }) => {
    return (
        <div className="relative group cursor-pointer border border-[#F1D1A1]/70 h-full rounded-[24px] overflow-hidden">
            <div className="relative h-full">
                <img
                    src={image}
                    alt={title}
                    draggable={false}
                    className="w-full h-full aspect-[300/437] lg:aspect-[300/437] object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06121a]/95 via-[#06121a]/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end items-center p-6 sm:p-6 text-white text-center">
                    <div className="mb-2 lg:mb-4 w-full flex flex-col items-center">
                        <h3 className="text-[20px] lg:text-[24px] font-bold tracking-widest uppercase mb-2">
                            {title}
                        </h3>
                        <div className="w-12 h-12 flex items-center justify-center opacity-80">
                            <SquareIcon className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-[12px] lg:text-sm text-gray-300 leading-relaxed max-w-[90%] mx-auto font-light">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

/* Hook: drag / swipe scroll */
function useDragScroll() {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const isDown = React.useRef(false);
    const startX = React.useRef(0);
    const startScrollLeft = React.useRef(0);

    React.useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onPointerDown = (e: PointerEvent) => {
            isDown.current = true;
            el.setPointerCapture?.(e.pointerId);
            startX.current = e.clientX;
            startScrollLeft.current = el.scrollLeft;
            el.classList.add("is-dragging");
        };

        const onPointerMove = (e: PointerEvent) => {
            if (!isDown.current) return;
            const dx = e.clientX - startX.current;
            el.scrollLeft = startScrollLeft.current - dx;
        };

        const end = (e: PointerEvent) => {
            if (!isDown.current) return;
            isDown.current = false;
            el.releasePointerCapture?.(e.pointerId);
            el.classList.remove("is-dragging");
        };

        el.addEventListener("pointerdown", onPointerDown, { passive: true });
        el.addEventListener("pointermove", onPointerMove, { passive: true });
        el.addEventListener("pointerup", end, { passive: true });
        el.addEventListener("pointerleave", end, { passive: true });
        el.addEventListener("pointercancel", end, { passive: true });

        return () => {
            el.removeEventListener("pointerdown", onPointerDown);
            el.removeEventListener("pointermove", onPointerMove);
            el.removeEventListener("pointerup", end);
            el.removeEventListener("pointerleave", end);
            el.removeEventListener("pointercancel", end);
        };
    }, []);

    return ref;
}

const ASSETS_URL = 'https://api-pallazo.tsx.vn/assets';

const ETableGames = ({ onClose, data }: { onClose?: () => void; data?: any }) => {
    const translation = data?.translations?.[0] || {};
    const items = data?.items?.map((item: any) => {
        const gameItem = item.e_table_games_items_id;
        const itemTranslation = gameItem?.translations?.[0] || {};
        return {
            image: gameItem?.image ? `${ASSETS_URL}/${gameItem.image.id}` : "https://api-pallazo.tsx.vn/assets/b8e65526-6d03-4b93-9318-7516425cd255",
            title: itemTranslation.title || "GAME",
            description: itemTranslation.description || "Luxury lies in how we make people feel: seen, understood, and valued."
        };
    }) || [];

    const scrollerRef = useDragScroll();

    const GUTTER = 24; // padding trái/phải
    const FADE_W = 96; // vùng mờ bên phải

    return (
        <GameType
            onClose={onClose}
            title={translation.title || "E-TABLE GAMES"}
            subtitle={translation.headline || "CLASSIC GAMES, MODERN PRECISION"}
            description={translation.description || "Enjoy the refined thrill of electronic table games in an elegant and easy atmosphere. From Roulette, Sic-bo, to Baccarat, Blackjack, each game blends tradition with innovation for a seamless, high-speed play."}
        >
            <div className="relative w-full flex-1 min-h-0 px-4 lg:px-7 mt-8 lg:mt-0">
                {/* Fade mép phải */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 lg:w-24 z-20 bg-gradient-to-l from-[#06121a] to-transparent opacity-90" />

                <div
                    ref={scrollerRef}
                    className={[
                        "relative w-full h-full",
                        "overflow-x-auto overflow-y-hidden",
                        "snap-x snap-mandatory",
                        "scrollbar-hide",
                        "select-none",
                        "cursor-grab active:cursor-grabbing",
                        "overscroll-x-contain",
                    ].join(" ")}
                    style={{
                        scrollPaddingLeft: `${GUTTER}px`,
                        scrollPaddingRight: `${Math.max(GUTTER, FADE_W)}px`,
                    }}
                >
                    <div className="flex flex-nowrap gap-4 lg:gap-6 h-full items-start py-4">
                        {/* Spacer trái */}
                        <div className="flex-shrink-0" style={{ width: 8 }} aria-hidden />

                        {items.map((game: any, index: number) => (
                            <div
                                key={index}
                                className={[
                                    "flex flex-col h-[85%] lg:h-5/6 items-center snap-start aspect-[280/440] lg:aspect-[300/437] flex-shrink-0",
                                    index % 2 === 0 ? "lg:mt-0" : "lg:mt-20",
                                ].join(" ")}
                            >
                                <GameCard {...game} />
                            </div>
                        ))}

                        {/* Spacer phải (để không bị fade che) */}
                        <div className="flex-shrink-0" style={{ width: 24 }} aria-hidden />
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .is-dragging {
          scroll-snap-type: none !important;
        }
        /* Tailwind không có sẵn xs mặc định -> fallback nếu bạn không có breakpoint xs */
        @media (max-width: 360px) {
          .xs\\:w-\\[260px\\] {
            width: 240px;
          }
        }
      `}</style>
        </GameType>
    );
};

export default ETableGames;
