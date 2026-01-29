"use client"

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const languages = [
    { code: 'en', name: 'English', directusCode: 'en-US' },
    { code: 'vi', name: 'Tiếng Việt', directusCode: 'vi-VN' },
]

export function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    // Get current lang from URL or default to 'en'
    const currentLangCode = searchParams.get('lang') || 'en'
    const currentLang = languages.find(l => l.code === currentLangCode) || languages[0]

    const dropdownRef = useRef<HTMLDivElement>(null)

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
        <div className="lang-switcher-container" ref={dropdownRef}>
            <div
                className={`lang-switcher-pill ${isOpen ? 'is-open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="lang-current">
                    {currentLang.code.toUpperCase()}
                </div>
                <ChevronDown
                    size={14}
                    className="lang-icon"
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="lang-dropdown"
                    >
                        {languages.map((lang) => (
                            <div
                                key={lang.code}
                                className={`lang-option ${currentLang.code === lang.code ? 'is-active' : ''}`}
                                onClick={() => handleLanguageChange(lang.code)}
                            >
                                <span className="lang-option-code">{lang.code.toUpperCase()}</span>
                                <span className="lang-option-name">{lang.name}</span>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
