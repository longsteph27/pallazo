'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveGalleryProps {
    images?: string[];
    autoExpand?: boolean;
}

export const InteractiveGallery: React.FC<InteractiveGalleryProps> = ({ images = [], autoExpand = false }) => {
    // Ensure we have at least some images to work with
    const galleryImages = images.length > 0 ? images : Array(6).fill('https://via.placeholder.com/400');
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto expand effect
    React.useEffect(() => {
        if (autoExpand) {
            const timer = setTimeout(() => {
                setIsExpanded(true);
                setActiveIndex(Math.floor(galleryImages.length / 2));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [autoExpand, galleryImages.length]);

    // Toggle between stack and carousel
    const handleToggle = () => {
        if (!isExpanded) {
            setIsExpanded(true);
            // Start with the middle image or the first one
            setActiveIndex(Math.floor(galleryImages.length / 2));
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <div className="relative w-full h-[700px] flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF8F5] to-[#F2EFE8] overflow-hidden">
            {/* Background Text "EXPLORE" - Left (Fades out on expand) */}
            <motion.div
                className="absolute left-[5%] md:left-[8%] top-[40%] -translate-y-1/2 z-10 pointer-events-none"
                initial={{ opacity: 1, x: 0 }}
                animate={{
                    opacity: isExpanded ? 0 : 1,
                    x: isExpanded ? -50 : 0
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="font-serif text-4xl md:text-8xl font-normal uppercase tracking-widest text-[#1A1A1A]">
                    EXPLORE
                </span>
            </motion.div>

            {/* Background Text "GALLERY" - Right (Fades out on expand) */}
            <motion.div
                className="absolute right-[5%] md:right-[8%] top-[40%] -translate-y-1/2 z-10 pointer-events-none"
                initial={{ opacity: 1, x: 0 }}
                animate={{
                    opacity: isExpanded ? 0 : 1,
                    x: isExpanded ? 50 : 0
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="font-serif text-4xl md:text-8xl font-normal uppercase tracking-widest text-[#1A1A1A]">
                    GALLERY
                </span>
            </motion.div>

            {/* Headline "EXPLORE GALLERY" - Top Center (Fades in on expand) */}
            <motion.div
                className="absolute top-[8%] z-10 center-x pointer-events-none"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: isExpanded ? 1 : 0,
                    y: isExpanded ? 0 : -20
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span className="font-serif text-2xl md:text-3xl font-medium uppercase tracking-[0.2em] text-[#1A1A1A]">
                    EXPLORE GALLERY
                </span>
            </motion.div>

            {/* Image Stack / Carousel Container */}
            <div
                className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center perspective-1000 mt-10 md:mt-0"
                onClick={handleToggle}
            >
                {galleryImages.map((src, index) => {
                    // --- STATIC STACK LOGIC ---
                    // "Gộp chung tất cả thẻ vào một điểm chỉ khác nhau rotate"
                    const stackOffset = index - Math.floor(galleryImages.length / 2);
                    // Just rotate them randomly or in a sequence, but keep them at center (x=0)
                    const stackRotation = stackOffset * 5;
                    const stackZIndex = galleryImages.length - Math.abs(stackOffset);

                    // --- CAROUSEL LOGIC ---
                    let carouselProps = {};
                    if (isExpanded) {
                        const count = galleryImages.length;
                        // Calculate shortest distance in a circular buffer
                        let offset = (index - activeIndex);

                        // Normalize offset to -len/2 to +len/2 for correct wrapping interactions
                        if (offset > count / 2) offset -= count;
                        if (offset < -count / 2) offset += count;

                        const absOffset = Math.abs(offset);
                        const isCenter = absOffset === 0;

                        // Only show adjacent items for the tight spread look
                        // Logic: Center (0), Left(-1), Right(+1) are main. 
                        // Others (+-2) faded more.
                        const direction = offset >= 0 ? 1 : -1;

                        if (isCenter) {
                            carouselProps = {
                                x: 0,
                                scale: 1.15,
                                zIndex: 50,
                                opacity: 1,
                                filter: 'brightness(1)',
                            };
                        } else if (absOffset <= 1) {
                            // Immediate neighbors (Left/Right)
                            carouselProps = {
                                x: direction * 280, // Overlap amount
                                scale: 0.9,
                                zIndex: 40,
                                opacity: 0.85,
                                filter: 'brightness(0.7)',
                            };
                        } else if (absOffset <= 2) {
                            // Next neighbors - background faded
                            carouselProps = {
                                x: direction * 480,
                                scale: 0.8,
                                zIndex: 30,
                                opacity: 0.5,
                                filter: 'brightness(0.5) blur(1px)',
                            };
                        } else {
                            // Far away items - hidden
                            carouselProps = {
                                x: direction * 600,
                                scale: 0.7,
                                opacity: 0,
                                zIndex: 10,
                            };
                        }
                    } else {
                        // Stack Props - All centered, only rotate
                        carouselProps = {
                            x: 0,
                            scale: 1,
                            zIndex: stackZIndex,
                            opacity: 1,
                            filter: 'brightness(1)',
                        };
                    }

                    return (
                        <motion.div
                            key={index}
                            className={`absolute w-[220px] h-[320px] md:w-[300px] md:h-[440px] rounded-[4px] shadow-2xl overflow-hidden bg-[#e0ded8] cursor-pointer origin-center transition-shadow duration-500
                                ${isExpanded ? 'shadow-xl' : 'shadow-2xl'}
                            `}
                            initial={false}
                            animate={carouselProps}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            style={{
                                transformStyle: 'preserve-3d',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.2)', // Custom shadow
                            }}
                        >
                            <img src={src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                            {/* White border effect for photo-look */}
                            <div className="absolute inset-0 border-[6px] border-white/90 pointer-events-none" />
                        </motion.div>
                    );
                })}

                {/* Navigation Arrows - Only visible when Expanded */}
                <AnimatePresence>
                    {isExpanded && (
                        <>
                            {/* Left Arrow */}
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: 0.3 }}
                                onClick={handlePrev}
                                className="absolute left-[5%] md:left-[15%] z-50 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#8C8C8C] text-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-[#fff] hover:border-transparent transition-all duration-300"
                            >
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1L2 10L11 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.button>

                            {/* Right Arrow */}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ delay: 0.3 }}
                                onClick={handleNext}
                                className="absolute right-[5%] md:right-[15%] z-50 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#8C8C8C] text-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-[#fff] hover:border-transparent transition-all duration-300"
                            >
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L10 10L1 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.button>
                        </>
                    )}
                </AnimatePresence>
            </div>

            {/* Album Info - Bottom Center */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="mt-8 text-center px-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl md:text-2xl font-serif font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">
                            ALBUM NAME
                        </h3>
                        <div className="w-12 h-[1px] bg-[#1A1A1A] mx-auto mb-4 opacity-30" />
                        <p className="text-sm text-[#555] max-w-lg mx-auto leading-relaxed font-sans tracking-wide">
                            Explore the world of Palazzo wherever you are with the official Palazzo Club Mobile Application. Stay informed with live Jackpot values.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InteractiveGallery;
