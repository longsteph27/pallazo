import React from "react";
import GameType from "../GameType";
import { motion } from "framer-motion";
import Image from "next/image";

const ASSETS_URL = 'https://api-pallazo.tsx.vn/assets';

interface HighLimitSalonProps {
    onClose?: () => void;
    data?: any;
    imageSrc?: string;
}

export default function HighLimitSalon({ onClose, data, imageSrc: parentImageSrc }: HighLimitSalonProps) {
    const translation = data?.translations?.[0] || {};
    const imageSrc = parentImageSrc || (data?.image ? `${ASSETS_URL}/${data.image}` : "https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d");

    return (
        <GameType
            onClose={onClose}
            title={translation.title || "HIGH LIMIT SALON (VIP AREA)"}
            subtitle={translation.headline || "PLAY WHERE PRESTIGE RESIDES"}
            description={translation.description || "With our cutting-edge machines, you are invited to experience the thrill of various games, captivating visuals, and jackpots that can change everything in a single moment. At Palazzo, the excitement never stops!"}
        >
            <div className="w-full h-full flex flex-col items-center px-4 lg:px-8 pb-8 overflow-y-auto">
                <div className="max-w-[1230px] w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center space-y-6 lg:space-y-8"
                    >
                        <div className="w-full relative aspect-[4/5] lg:aspect-[1230/700] rounded-2xl overflow-hidden border border-[#B9A472]/30 shadow-2xl group">
                            <Image
                                src={imageSrc}
                                alt="High Limit Salon"
                                fill
                                className="object-cover transform transition-transform ease-out"
                                style={{ transitionDuration: '2000ms' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </GameType>
    );
}
