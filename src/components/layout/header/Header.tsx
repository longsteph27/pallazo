"use client"

import { useState, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "./LanguageSwitcher"

const leftLinks = [
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'GAMING', href: '/gaming' },
  { label: 'REWARDS', href: '/rewards' },
]

const rightLinks = [
  { label: 'PROMOTIONS', href: '/promotions' },
  { label: 'PRIVILEGES', href: '/privileges' },
  { label: 'GALLERY', href: '/gallery' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header group">
      {/* Primary Glass Background */}
      <div className="header-glass-layer" />

      {/* Glossy Overlays (Liquid Glass Effect) */}
      <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-white/15 via-white/5 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none z-0" />

      {/* Desktop Layout (hidden on mobile) */}
      <div className="hidden lg:grid grid-cols-7 items-center h-[58px] relative z-20">
        <div className="nav-group nav-group--left col-span-3 col-start-1">
          <ul>
            {leftLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[116px] h-[92px]" aria-label="Palazzo">
          <Link href="/" className="logo-badge w-full h-full block">
            <Image src="/logo.svg" alt="logo vector" className="object-contain" width={44} height={37} />
            <Image src="/logo_name.svg" alt="logo wordmark" width={73} height={12} />
          </Link>
        </div>

        <div className="nav-group nav-group--right col-span-3 col-start-5">
          <ul>
            {rightLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Language Switcher */}
        <div className="hidden lg:block relative z-30">
          <Suspense fallback={<div className="w-10 h-6" />}>
            <LanguageSwitcher />
          </Suspense>
        </div>
      </div>

      {/* Mobile Layout (hidden on desktop) */}
      <div className="lg:hidden flex items-center justify-between h-[58px] px-4 relative z-20">
        {/* Hamburger Menu Icon */}
        <button
          className="text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Centered Logo Badge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[95px] h-[75px]" aria-label="Palazzo">
          <Link href="/" className="logo-badge w-full h-full block scale-90 origin-top">
            <Image src="/logo.svg" alt="logo vector" className="object-contain" width={32} height={27} />
            <Image src="/logo_name.svg" alt="logo wordmark" width={55} height={9} />
          </Link>
        </div>

        {/* Language Switcher */}
        <Suspense fallback={<div className="w-10 h-6" />}>
          <LanguageSwitcher />
        </Suspense>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[58px] bg-black/95 z-50 overflow-y-auto animate-in fade-in slide-in-from-top duration-300">
          <nav className="flex flex-col items-center py-10 space-y-6">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white text-xl font-serif tracking-widest uppercase hover:text-[#B09860] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
