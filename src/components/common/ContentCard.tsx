'use client';

import { motion } from 'framer-motion';
import { AboutUsLogo } from '@/components/icons/AboutUsLogo';
import { AboutUsCardBg } from '@/components/icons/AboutUsCardBg';
import { PallazzoTextSvg } from '@/features/about-us/assets/icons';

interface ContentCardProps {
    title: string;
    paragraphs?: string[];
    htmlContent?: string;
}

export default function ContentCard({ title, paragraphs = [], htmlContent }: ContentCardProps) {
    return (
        <section className="relative w-full">
            {/* Background "PALLAZZO" text - Rises from below */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="absolute top-[100%] left-1/2 -translate-x-1/2 w-full flex justify-center overflow-hidden"
            >
                <PallazzoTextSvg className="w-full" />
            </motion.div>

            {/* SVG Background Layer */}
            <div className="absolute inset-0 z-0">
                <AboutUsCardBg className="" />
            </div>

            {/* Curtain Overlays - Opening from center to 2 sides */}
            <motion.div
                className="absolute top-0 left-0 bottom-0 w-1/2 bg-[#F9F7ED] z-20 pointer-events-none"
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
                style={{ transformOrigin: 'left' }}
            />
            <motion.div
                className="absolute top-0 right-0 bottom-0 w-1/2 bg-[#F9F7ED] z-20 pointer-events-none"
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
                style={{ transformOrigin: 'right' }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center px-8 md:px-24 pt-16 md:pt-24 pb-28 md:pb-40">
                {/* Title */}
                <h2 className="text-3xl md:text-[52px] font-serif text-center text-[#1A1A1A] mb-12 leading-[1.15] max-w-4xl tracking-tight">
                    {title.split('.').map((line, i) => (
                        line.trim() && (
                            <div key={i} className="mb-2">
                                {line.trim()}
                                {i < title.split('.').length - 1 && '.'}
                            </div>
                        )
                    ))}
                </h2>

                {/* Content */}
                <div className="max-w-3xl w-full">
                    {htmlContent ? (
                        <div
                            className="text-base md:text-xl text-[#333333] leading-relaxed text-center font-light opacity-90 space-y-6 content-rich-text"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    ) : (
                        <div className="space-y-8">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-base md:text-xl text-[#333333] leading-relaxed text-center font-light opacity-90"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Logo overlapping the bottom edge */}
            <motion.div
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
                className="absolute top-0 left-1/2 z-30"
            >
                <div className="relative">
                    {/* Subtle glow behind logo */}
                    <div className="absolute inset-0 bg-[#D8BD95] blur-3xl opacity-20 scale-150 rounded-full group-hover:opacity-40 transition-opacity"></div>
                    <AboutUsLogo className="w-[55px] h-[55px] md:w-[90px] md:h-[90px] relative z-10" />
                </div>
            </motion.div>
        </section>
    );
}

