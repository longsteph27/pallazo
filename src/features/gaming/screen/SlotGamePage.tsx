import BannerSlider from "@/components/common/Banner";
import React from "react";
import SlotGame from "../components/slot-game/SlotGame";
import ETableGames from "../components/e-table/ETableGames";
import ThrillEleganceHeroFO from "@/components/common/Hero";

export default function SlotGamePage() {
    const banners = [
        "https://api-pallazo.tsx.vn/assets/81729b5c-4340-4df2-a39c-85153245f8f5"
    ];

    return (
        <div className="space-y-10">
            <BannerSlider images={banners} title="SLOT GAMES" />
            <ThrillEleganceHeroFO title="Slot Games" description="" imageSrc="https://api-pallazo.tsx.vn/assets/6ad57c78-2225-4968-b697-1908a18657c8" />
            <SlotGame />
        </div>
    )
}