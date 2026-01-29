'use client';

import BannerSlider from '@/components/common/Banner';
import ThrillEleganceHeroFO from '@/components/common/Hero';
import SharedImageSlider from '@/components/common/SharedImageSlider';
import WelcomeLogo from '@/features/home/components/WelcomeSection/WelcomeLogo';

interface ServiceSection {
    id: number;
    category: string;
    title: string;
    description: string;
    images: string[];
    imagePosition: 'left' | 'right';
}

const servicesData: ServiceSection[] = [
    {
        id: 1,
        category: 'WHERE MEMBERSHIP MEANS MORE',
        title: '',
        description: 'Palazzo Club\'s membership tiers offer tailored rewards, insider experiences, and prestige that lasts. Earn points while you play and unlock real-world perks, from flight credits to fine dining. Whether you\'re a casual visitor or a high roller, our tiered system ensures that your loyalty translates into unforgettable benefits.',
        images: [
            'https://picsum.photos/seed/service1a/600/400',
            'https://picsum.photos/seed/service1b/600/400',
            'https://picsum.photos/seed/service1c/600/400',
        ],
        imagePosition: 'right',
    },
    {
        id: 2,
        category: 'STAY',
        title: 'ENJOY YOUR BEST AWAITS',
        description: 'Every moment at Palazzo is designed to exceed your expectations. Immerse yourself in a world of luxury where state of the art gaming meets world class hospitality. From exclusive VIP suites to personalized concierge services, your comfort and satisfaction are our top priorities. Relax, unwind, and let us take care of the rest.',
        images: [
            'https://picsum.photos/seed/service2a/600/400',
            'https://picsum.photos/seed/service2b/600/400',
        ],
        imagePosition: 'left',
    },
    {
        id: 3,
        category: 'DINING',
        title: 'CULINARY EXPERIENCES SAVOR BESPOKE EVENTS',
        description: 'Indulge in a gastronomic journey like no other. Our dining venues feature world-renowned chefs, curated menus, and exceptional wine pairings. Whether it\'s an intimate dinner or a lavish banquet, every meal becomes a masterpiece. Taste the difference that passion and precision make.',
        images: [
            'https://picsum.photos/seed/service3a/600/400',
            'https://picsum.photos/seed/service3b/600/400',
            'https://picsum.photos/seed/service3c/600/400',
        ],
        imagePosition: 'right',
    },
    {
        id: 4,
        category: 'SPA',
        title: 'ENJOY YOUR SUITE AWAITS',
        description: 'Escape into a sanctuary of tranquility and rejuvenation. Our spa offers bespoke treatments designed to soothe, refresh, and revitalize. From aromatherapy massages to cutting-edge wellness therapies, every session is a journey to total relaxation. Surrender to serenity and emerge renewed.',
        images: [
            'https://picsum.photos/seed/service4a/600/400',
            'https://picsum.photos/seed/service4b/600/400',
        ],
        imagePosition: 'left',
    },
];

const banners = [
    "https://api-pallazo.tsx.vn/assets/81729b5c-4340-4df2-a39c-85153245f8f5",
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            {/* Banner Section */}
            <BannerSlider images={banners} title="SERVICES" />

            {/* Welcome Section */}
            <WelcomeLogo hasLogoText={false} imageSrc="https://picsum.photos/seed/service1a/600/400" title="WHERE MEMBERSHIP MEANS MORE" description="Palazzo Club's membership tiers offer tailored rewards, insider experiences, and prestige that lasts. Earn points while you play and unlock real-world perks, from flight credits to fine dining. Whether you're a casual visitor or a high roller, our tiered system ensures that your loyalty translates into unforgettable benefits." />

            {/* Services Sections */}
            <div className="max-w-[1440px] mx-auto px-4 py-16 md:py-24 overflow-hidden">
                {servicesData.map((service) => (
                    <section
                        key={service.id}
                        className={`flex flex-col relative ${service.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                            } gap-8 md:gap-16 mb-24 md:mb-32 items-center`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            {/* Decorative Star */}
                            <div className="text-[#D4C5A6] text-2xl">✦</div>

                            {/* Category */}
                            <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-wide text-[#2A2A2A]">
                                {service.category}
                            </h2>

                            {/* Title (if exists) */}
                            {service.title && (
                                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-[#BFA57A]">
                                    {service.title}
                                </h3>
                            )}

                            {/* Description */}
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                {service.description}
                            </p>
                        </div>

                        {/* Image Slider */}
                        <div className="flex-1 overflow-hidden flex relative w-full">
                            <SharedImageSlider images={service.images} alt={service.category} />
                        </div>
                        <div className="absolute top-[100%] flex flex-col left-0 w-full space-y-[1px]">
                            <div className="w-full h-[1px] bg-[#D8BD96]" />
                            <div className="w-full h-[1px] bg-[#D8BD96]" />
                            <div className="w-full h-[1px] bg-[#D8BD96]" />
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}

