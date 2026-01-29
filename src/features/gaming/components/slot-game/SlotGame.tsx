import React from 'react';
import SlotVariationCard from './SlotVariationCard';
import GameType from '../GameType';

const ASSETS_URL = 'https://api-pallazo.tsx.vn/assets';

const SlotGame = ({ onClose, data }: { onClose?: () => void; data?: any }) => {
    const translation = data?.translations?.[0] || {};
    const slotVariations = translation.slot_variations?.map((v: any) => v.value) || [];
    const imageSrc = data?.image ? `${ASSETS_URL}/${data.image}` : "https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d";

    return (
        <GameType
            onClose={onClose}
            title={translation.title || "SLOT"}
            subtitle={translation.headline || "SPIN IN STYLE, WIN WITH PURPOSE"}
            description={translation.content || "Palazzo offers more than just entertainment; we offer an experience crafted for distinction, privacy, and exhilaration."}
        >
            {/* Main Content: Image + Slot Variations */}
            <div className='w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start px-4 lg:px-8 pb-12 overflow-y-auto lg:overflow-hidden'>
                {/* Left: Slot Machine Image (Top on mobile) */}
                <div className='w-full lg:w-1/2 flex-shrink-0'>
                    <img
                        src={imageSrc}
                        alt="Slot Machines"
                        className='w-full h-auto rounded-xl lg:rounded-lg'
                    />
                </div>

                {/* Right: Slot Variations (Bottom on mobile) */}
                <div className='w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-0'>
                    <h3 className='text-xl lg:text-xl font-light mb-4 lg:mb-6 tracking-widest text-white uppercase text-center lg:text-left'>
                        SLOT VARIATIONS
                    </h3>
                    <div className='flex flex-col gap-2 lg:gap-3 lg:overflow-y-auto'>
                        {slotVariations.map((variation: string, index: number) => (
                            <SlotVariationCard key={index} title={variation} />
                        ))}
                    </div>
                </div>
            </div>
        </GameType>
    );
};

export default SlotGame;