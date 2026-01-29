'use client';

import React from 'react';
import InteractiveGallery from '@/features/promotions/components/InteractiveGallery';

const galleryImages = [
    'https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d',
    'https://api-pallazo.tsx.vn/assets/a7bcff57-a5f5-4c07-8e7c-71639a1731f9',
    'https://api-pallazo.tsx.vn/assets/b8e65526-6d03-4b93-9318-7516425cd255',
    'https://picsum.photos/seed/promo1/600/800',
    'https://picsum.photos/seed/promo2/600/800',
    'https://picsum.photos/seed/promo3/600/800',
    'https://picsum.photos/seed/promo4/600/800',
    'https://picsum.photos/seed/promo5/600/800',
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7]">
            <InteractiveGallery images={galleryImages} autoExpand={true} />
        </main>
    );
}
