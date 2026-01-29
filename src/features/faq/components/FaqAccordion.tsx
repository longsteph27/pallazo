'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronIcon } from '@/components/icons/AppIcons';

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    title: string;
    items: FaqItem[];
}

const FaqAccordion = ({ title, items }: FaqAccordionProps) => {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] uppercase tracking-wider mb-8">
                {title}
            </h2>

            <div className="border-t border-[#E6DECF]">
                {items.map((item, index) => (
                    <div key={item.id} className="border-b border-[#E6DECF] bg-white/30">
                        <button
                            onClick={() => setOpenId(openId === item.id ? null : item.id)}
                            className="w-full flex items-center justify-between py-8 px-6 hover:bg-[#B29E71]/5 transition-colors group text-left"
                        >
                            <div className="flex items-center gap-8">
                                <span className="text-[#B29E71]/40 font-bold text-sm tracking-widest min-w-[20px]">
                                    {index + 1}
                                </span>
                                <h4 className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${openId === item.id ? 'text-[#B29E71]' : 'text-[#1A1A1A]'}`}>
                                    {item.question}
                                </h4>
                            </div>
                            <div className="transition-transform duration-300">
                                <ChevronIcon direction={openId === item.id ? 'down' : 'left'} />
                            </div>
                        </button>

                        <AnimatePresence>
                            {openId === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    className="overflow-hidden bg-[#F5EFD4]/30"
                                >
                                    <div className="px-24 pb-12 pt-4 text-[#5A6B7C] leading-relaxed text-sm md:text-base max-w-4xl">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqAccordion;
