"use client";

import React, { useState } from "react";
import GamingCategories from "./components/GamingCategories";
import BannerSlider from "@/components/common/Banner/Banner";
import SlotGame from "./components/slot-game/SlotGame";
import ETableGames from "./components/e-table/ETableGames";
import JackpotGame from "./components/jackpot/Jackpot";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/common/Hero";
import HighLimitSalon from "./components/high-limit/HighLimitSalon";

const ASSETS_URL = 'https://api-pallazo.tsx.vn/assets';

interface GamingContentProps {
    banners: string[];
    jackpotData: any;
    heroData: {
        title: string;
        description: string;
        imageSrc: string;
    };
    gamesData?: any;
}

export default function GamingContent({ banners, jackpotData, heroData, gamesData }: GamingContentProps) {
    const [view, setView] = useState<string>("categories");
    const [activeGame, setActiveGame] = useState<any>(null);

    const categories = gamesData?.items?.map((item: any) => {
        const game = item.games_items_id;
        const translation = game?.translations?.[0] || {};
        return {
            id: game?.id,
            type: game?.type_game,
            title: translation.title || game?.type_game?.toUpperCase(),
            imageSrc: game?.image ? `${ASSETS_URL}/${game.image.id}` : "https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d",
            imageAlt: translation.title || "",
            content: game?.content?.[0]
        };
    }) || [];

    const renderGameView = () => {
        const onClose = () => {
            setView("categories");
            setActiveGame(null);
        };
        const detailData = activeGame?.content?.item;

        switch (view) {
            case "slot": return <SlotGame onClose={onClose} data={detailData} />;
            case "e_table": return <ETableGames onClose={onClose} data={detailData} />;
            case "jackpots": return <JackpotGame onClose={onClose} data={detailData} />;
            case "high_limit": return <HighLimitSalon onClose={onClose} data={detailData} imageSrc={activeGame?.imageSrc} />;
            default: return null;
        }
    };

    return (
        <div className="space-y-20 bg-[#F9F7ED] mb-20">
            <BannerSlider images={banners} title="GAMING" showJackpotStats={true} jackpotData={jackpotData} />
            <div className="max-w-[1427px] mx-auto space-y-20">
                <Hero
                    title={heroData.title}
                    description={heroData.description}
                    imageSrc={heroData.imageSrc}
                />
                <motion.div
                    layout
                    initial={false}
                    className="relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {view === "categories" ? (
                            <motion.div
                                key="categories"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <GamingCategories
                                    items={categories}
                                    onEnter={(id) => {
                                        const category = categories.find((c: any) => c.id === id);
                                        if (category) {
                                            setActiveGame(category);
                                            setView(category.type);
                                        }
                                    }}
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key={view}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {renderGameView()}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
