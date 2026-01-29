import React from "react";
import ETableGames from "../components/e-table/ETableGames";
import BannerSlider from "@/components/common/Banner";
import ThrillEleganceHeroFO from "@/components/common/Hero";

export default function ETableGamePage() {
    const banners = [
        "https://api-pallazo.tsx.vn/assets/81729b5c-4340-4df2-a39c-85153245f8f5"
    ];

    return (
        <div>
            <BannerSlider images={banners} title="E-TABLE GAMES" />
            <ThrillEleganceHeroFO
                title="WHERE THRILL MEETS ELEGANCE"
                description="Step into a vibrant world where every win is elevated by design. Palazzo provides more than just entertainment; we offer an experience crafted for distinction, privacy, and exhilaration. With over 100 state-of-the-art slot and electronic table game machines featuring renowned brands such as Light & Wonder, Aristocrat, IGT, and Scientific Games, Palazzo invites you to the premier entertainment paradise, where gaming transcends the ordinary."
                imageSrc="https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d"
                imageAlt=""
            />
            <ETableGames />
        </div>
    );
}
