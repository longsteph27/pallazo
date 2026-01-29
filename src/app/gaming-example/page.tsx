/**
 * EXAMPLE: Perfectly Smooth Page Template
 * Demonstrates Next.js 16 features:
 * - Streaming SSR with Suspense
 * - Parallel data fetching
 * - Cache Components
 * - Loading states
 */

import { Suspense } from 'react'
import BannerSlider from '@/components/common/Banner'

// Skeleton components for loading states
function HeroSkeleton() {
    return (
        <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg animate-pulse mx-4 my-8"></div>
    )
}

function CardSkeleton() {
    return (
        <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
    )
}

// Example cached server component
async function GamingHero() {
    // Simulated data fetch - replace with real API
    await new Promise(resolve => setTimeout(resolve, 500))

    const data = {
        title: 'Premium Gaming Experience',
        description: 'Experience the finest in electronic gaming entertainment',
    }

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-serif text-[#1A1A1A] mb-6">{data.title}</h1>
                <p className="text-xl text-[#333333] font-light">{data.description}</p>
            </div>
        </section>
    )
}

// Example section component
async function SlotGamesSection() {
    // Simulated data fetch
    await new Promise(resolve => setTimeout(resolve, 300))

    return (
        <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Slot Games</h2>
            <p className="text-[#666666]">Discover our premium selection of slot games</p>
        </div>
    )
}

async function TableGamesSection() {
    // Simulated data fetch
    await new Promise(resolve => setTimeout(resolve, 300))

    return (
        <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Table Games</h2>
            <p className="text-[#666666]">Experience classic table games with modern features</p>
        </div>
    )
}

/**
 * Main page component - Server Component by default
 * Demonstrates streaming and parallel data fetching
 */
export default async function GamingExamplePage() {
    return (
        <main className="min-h-screen bg-[#F9F7ED]">
            {/* Instant: Static content renders immediately */}
            <BannerSlider
                images={["https://api-pallazo.tsx.vn/assets/81729b5c-4340-4df2-a39c-85153245f8f5"]}
                title="GAMING"
                subtitle="PREMIUM EXPERIENCE"
            />

            {/* Streamed: Data-dependent content with fallback */}
            <Suspense fallback={<HeroSkeleton />}>
                <GamingHero />
            </Suspense>

            {/* Parallel: Independent sections fetch concurrently */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Suspense fallback={<CardSkeleton />}>
                        <SlotGamesSection />
                    </Suspense>
                    <Suspense fallback={<CardSkeleton />}>
                        <TableGamesSection />
                    </Suspense>
                </div>
            </div>
        </main>
    )
}
