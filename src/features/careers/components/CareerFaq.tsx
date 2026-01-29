'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronIcon } from '@/components/icons/AppIcons';

const faqs = [
    { id: 1, question: 'HOW DO I APPLY FOR A POSITION AT PALAZZO CLUB?' },
    { id: 2, question: 'WHAT DOCUMENTS DO I NEED TO SUBMIT?' },
    { id: 3, question: 'HOW LONG DOES THE HIRING PROCESS TAKE?' },
    { id: 4, question: 'WILL I RECEIVE TRAINING?' },
    { id: 5, question: 'IS PRIOR EXPERIENCE IN THE GAMING INDUSTRY REQUIRED?' },
    { id: 6, question: 'WHAT ARE THE WORKING HOURS LIKE?' },
    { id: 7, question: 'DO I NEED TO SPEAK ENGLISH?' },
];

const CareerFaq = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section className="bg-[#F9F7ED] py-24 border-t border-[#E6DECF]/50">
            <div className="max-w-[1024px] mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-4 uppercase tracking-[0.2em]">
                        FAQS: <br /> RECRUITMENT PROCESS
                    </h2>
                </div>

                <div className="space-y-1">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className="border-b border-[#E6DECF]">
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full flex items-center justify-between py-6 px-4 hover:bg-[#B29E71]/5 transition-colors group text-left"
                            >
                                <div className="flex items-center gap-8">
                                    <span className="text-[#B29E71]/40 font-bold text-sm tracking-widest">
                                        {faq.id}
                                    </span>
                                    <h4 className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${openId === faq.id ? 'text-[#B29E71]' : 'text-[#1A1A1A]'}`}>
                                        {faq.question}
                                    </h4>
                                </div>
                                <div className={`transition-transform duration-300 transform`}>
                                    <ChevronIcon direction={openId === faq.id ? 'down' : 'left'} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-24 pb-8 text-gray-600 leading-relaxed text-sm">
                                            You can apply directly through our online application form below or by sending your resume to our official recruitment email. We look forward to hearing from you!
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CareerFaq;
