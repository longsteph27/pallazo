import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Disable unstable Cache Components potentially causing build loops
  cacheComponents: false,

  images: {
    // Use remotePatterns instead of domains (recommended in Next.js 16)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'api-pallazo.tsx.vn',
      },
    ],
    // v16 optimization: use modern formats for better performance
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
