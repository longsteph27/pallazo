"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const languages = [
    { code: 'en', name: 'EN', fullName: 'English' },
    { code: 'vi', name: 'VN', fullName: 'Tiếng Việt' },
    { code: 'zh', name: '中文', fullName: 'Chinese' },
    { code: 'ko', name: '한국어', fullName: 'Korean' },
]

export function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Get current lang from URL or default to 'en'
    const currentLangCode = searchParams.get('lang') || 'en'
    const currentLang = languages.find(l => l.code === currentLangCode) || languages[0]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLanguageChange = (langCode: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('lang', langCode)
        router.push(`${pathname}?${params.toString()}`)
        setIsOpen(false)
    }

    return (
        <div className="relative z-50" ref={dropdownRef}>
            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-[6px] md:gap-0 bg-transparent md:bg-[#A68B5C] rounded-none md:rounded-full p-0 md:p-[3px] md:pr-3 transition-colors md:hover:bg-[#b09665] md:shadow-md"
            >
                {/* Mobile: Simple Text | Desktop: White Inner Pill */}
                <span className="
                    bg-transparent text-white text-[14px] font-medium uppercase tracking-wide
                    md:bg-[#F9F7ED] md:text-[#1A1A1A] md:text-[13px] md:font-bold md:px-3 md:py-1 md:rounded-full md:min-w-[42px] md:text-center md:shadow-sm
                ">
                    {currentLang.name}
                </span>

                {/* Arrow Icon */}
                <div className="text-white md:ml-2">
                    <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease'
                        }}
                    >
                        <path d="M5 8L0.669873 0.5L9.33013 0.5L5 8Z" fill="currentColor" />
                    </svg>
                </div>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 top-[calc(100%+8px)] w-[140px] bg-[#EAE5D5] rounded-[16px] shadow-xl overflow-hidden py-2 border border-[#dcd6c3]"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full flex items-center justify-between px-5 py-2.5 text-left text-[14px] font-medium transition-colors
                                    ${currentLang.code === lang.code
                                        ? 'text-[#A68B5C] bg-white/50 font-bold'
                                        : 'text-[#4A4A4A] hover:bg-[#ded8c4]'
                                    }`}
                            >
                                <span>{lang.name}</span>
                                {lang.code !== 'en' && lang.code !== 'vi' && (
                                    <span className="text-[10px] text-gray-500 uppercase ml-2">{lang.code}</span>
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
