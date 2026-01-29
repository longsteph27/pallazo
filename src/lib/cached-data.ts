/**
 * Cached data fetching functions using Next.js 16 'use cache' directive
 * These functions are automatically cached and can be reused across components
 */

'use cache'

export async function getJackpotData() {
    // This entire function is cached with Cache Components
    // No need for manual fetch cache configuration
    const response = await fetch('https://api-pallazo.tsx.vn/jackpot', {
        next: { tags: ['jackpot'] },
    })

    if (!response.ok) {
        throw new Error('Failed to fetch jackpot data')
    }

    return response.json()
}

export async function getPromotions() {
    'use cache' // Can also be used inline

    const response = await fetch('https://api-pallazo.tsx.vn/promotions', {
        next: { tags: ['promotions'] },
    })

    if (!response.ok) {
        throw new Error('Failed to fetch promotions')
    }

    return response.json()
}

export async function getBlogPosts() {
    'use cache'

    const response = await fetch('https://api-pallazo.tsx.vn/blogs', {
        next: { tags: ['blogs'] },
    })

    if (!response.ok) {
        throw new Error('Failed to fetch blog posts')
    }

    return response.json()
}

export async function getGamingData() {
    'use cache'

    // Simulated data - replace with actual API call
    return {
        title: 'Premium Gaming Experience',
        slotGames: [],
        tableGames: [],
    }
}

// Server Actions with cache invalidation
'use server'

import { revalidateTag, updateTag } from 'next/cache'

export async function refreshJackpotData() {
    // Use 'max' profile for stale-while-revalidate behavior
    revalidateTag('jackpot', 'max')
}

export async function updatePromotionAction(promotionId: string, data: any) {
    // Update promotion in database
    // ... database update logic

    // Use updateTag for read-your-writes semantics
    updateTag('promotions')

    return { success: true }
}
