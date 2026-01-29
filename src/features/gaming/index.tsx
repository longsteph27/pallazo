import React from "react";
import { getGamingPageApi, getGamesApi } from "@/lib/api-directus";
import GamingContent from "./GamingContent";

const ASSETS_URL = 'https://api-pallazo.tsx.vn/assets';

interface GamingProps {
    lang?: string;
}

export default async function Gaming({ lang = 'en' }: GamingProps) {
    let pageData: any = null;
    let gamesData: any = null;

    try {
        [pageData, gamesData] = await Promise.all([
            getGamingPageApi(lang),
            getGamesApi(lang)
        ]);
    } catch (error) {
        console.error("Failed to fetch gaming page data:", error);
    }

    const banners = pageData?.banners?.map((b: any) => `${ASSETS_URL}/${b.directus_files_id.id}`) || [
        `${ASSETS_URL}/e2014d83-819b-426d-b8d0-5f4b45a7724d`
    ];

    const translation = pageData?.translations?.[0] || {};
    const heroImage = pageData?.image_hero ? `${ASSETS_URL}/${pageData.image_hero.id}` : `${ASSETS_URL}/e2014d83-819b-426d-b8d0-5f4b45a7724d`;

    // Reverting to static jackpot data as requested
    const jackpotData = {
        left: {
            title: "TOTAL WINS",
            value: "546.990.123",
            subtitle: "OVER THE LAST YEAR"
        },
        right: {
            title: "TOTAL WINS",
            value: "546.990.123",
            subtitle: "OVER THE LAST YEAR"
        },
        buttonLabel: "VIEW HISTORY"
    };

    const heroData = {
        title: translation.title || "WHERE THRILL MEETS ELEGANCE",
        description: translation.description?.replace(/<[^>]*>?/gm, '') || "Step into a vibrant world where every win is elevated by design. Palazzo provides more than just entertainment; we offer an experience crafted for distinction, privacy, and exhilaration. With over 100 state-of-the-art slot and electronic table game machines featuring renowned brands such as Light & Wonder, Aristocrat, IGT, and Scientific Games, Palazzo invites you to the premier entertainment paradise, where gaming transcends the ordinary.",
        imageSrc: heroImage
    };

    return (
        <GamingContent
            banners={banners}
            jackpotData={jackpotData}
            heroData={heroData}
            gamesData={gamesData}
        />
    );
}
