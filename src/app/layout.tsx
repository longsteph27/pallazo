import type { Metadata } from 'next'
import localFont from 'next/font/local'
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

const collier = localFont({
  src: [
    {
      path: '../font/Collier-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/Collier-Regular.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/Collier-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/Collier-Regular.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-collier',
})

export const metadata: Metadata = {
  title: 'Palazzo Experience',
  description:
    'A bespoke gaming and hospitality experience with curated events, VIP services, and immersive amenities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={collier.variable}>
      <body className={`${collier.variable} font-sans font-normal bg-[#F9F7ED] w-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

