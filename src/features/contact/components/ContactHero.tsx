'use client';

import React from 'react';
import Image from 'next/image';

const ContactHero = () => {
    return (
        <section className="relative w-full aspect-[1440/807] max-h-[1024px] overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://picsum.photos/seed/contacthero/1440/807"
                alt="Contact Palazzo"
                fill
                className="object-cover brightness-75"
                priority
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>

            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-6xl md:text-8xl lg:text-[120px] font-serif font-bold text-[#EAE2CC] uppercase tracking-[0.2em] drop-shadow-2xl">
                    CONTACT
                </h1>
            </div>
        </section>
    );
};

export default ContactHero;
