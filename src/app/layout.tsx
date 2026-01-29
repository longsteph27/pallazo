import type { Metadata } from 'next'
import './globals.css'
import './view-transitions.css'
import '../components/layout/header/Header.css'
import '../components/layout/footer/Footer.css'
import '../features/home/components/JackpotSection/styles/JackpotSection.css'
import '../features/home/components/HighlightServicesSection/styles/BespokeSection.css'
import '../features/home/components/LoyalProgramSection/styles/LoyalProgramSection.css'
import 'swiper/css'
import 'swiper/css/navigation'
import Header from '../components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

export const metadata: Metadata = {
  title: 'Palazzo Experience',
  description:
    'A bespoke gaming and hospitality experience with curated events, VIP services, and immersive amenities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F9F7ED] w-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

