'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ResponsibleHeaderSvg } from '@/components/icons';

const ResponsibleWelcome = () => {
    return (
        <section className="bg-[#F9F7ED] py-20 px-4">
            <div className="max-w-[1222px] mx-auto relative">
                {/* SVG Header on top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full flex justify-center px-4">
                    <ResponsibleHeaderSvg className="w-full max-w-[584px]" />
                </div>

                {/* Overlapping Card with 1px padding for responsive border effect */}
                <div className="bg-gradient-to-b from-[#D8BD95] to-transparent pt-[1px] px-[1px] rounded-t-[10px]">
                    <div className="bg-gradient-to-b from-[#F9F0DF] to-[#F9F7ED] rounded-t-[10px] py-16 md:py-24 px-6 md:px-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-[800px] mx-auto flex flex-col gap-3 flex-wrap"
                        >
                            <h2 className="font-serif text-[28px] md:text-[40px] font-bold uppercase leading-tight tracking-[2px] text-[#1a1a1a] mb-8">
                                WHERE THRILL MEETS
                                <br />
                                SOPHISTICATION
                            </h2>
                            <p className="font-sans text-sm md:text-base leading-[1.8] text-[#4a4a4a]">
                                At Palazzo Club, we are committed to promoting responsible gambling as part of our dedication to
                                providing a safe and enjoyable gaming environment. We believe that gambling should be a form of
                                entertainment and are proactive in supporting our guests to play responsibly.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsibleWelcome;
