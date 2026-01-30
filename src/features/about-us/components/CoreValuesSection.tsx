'use client';

import { motion } from 'framer-motion';
import { CoreValuesSvg, OrnamentalCenterSvg, PallazzoTextSvg } from '../assets/icons';

interface Value {
    title: string;
    description: string;
}

interface CoreValuesSectionProps {
    values?: Value[];
    title: string;
    subtitle: string;
}

export default function CoreValuesSection({ values = [], title, subtitle }: CoreValuesSectionProps) {
    if (!values || values.length === 0) return null;

    return (
        <section className="relative bg-transparent pt-12 pb-16 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Title */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1A365D] mb-4 tracking-wider">{title}</h2>
                </div>

                {/* Main Content Container */}
                <div className="relative mx-auto w-[90%] md:w-full md:max-w-[601px] mb-8 md:mb-36">
                    {/* Central Decorative SVG - Always visible */}
                    <div className="relative w-full h-auto md:-mt-8">
                        <CoreValuesSvg className="w-full h-auto" />

                        {/* Desktop: Values positioned around SVG */}
                        {values.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="hidden md:block absolute top-0 -left-[50%] max-w-[280px] text-right"
                            >
                                <h3 className="text-2xl font-serif text-[#1A365D] mb-2">{values[0].title}</h3>
                                <p className="text-[#5A6B7C] text-sm leading-relaxed">{values[0].description}</p>
                            </motion.div>
                        )}

                        {values.length > 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                                className="hidden md:block absolute top-[57%] -left-[40%] max-w-[280px] text-right"
                            >
                                <h3 className="text-2xl font-serif text-[#1A365D] mb-2">{values[1].title}</h3>
                                <p className="text-[#5A6B7C] text-sm leading-relaxed">{values[1].description}</p>
                            </motion.div>
                        )}

                        {values.length > 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="hidden md:block absolute top-0 -right-[50%] max-w-[280px] text-left"
                            >
                                <h3 className="text-2xl font-serif text-[#1A365D] mb-2">{values[2].title}</h3>
                                <p className="text-[#5A6B7C] text-sm leading-relaxed">{values[2].description}</p>
                            </motion.div>
                        )}

                        {values.length > 3 && (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                                className="hidden md:block absolute top-[57%] -right-[40%] max-w-[280px] text-left"
                            >
                                <h3 className="text-2xl font-serif text-[#1A365D] mb-2">{values[3].title}</h3>
                                <p className="text-[#5A6B7C] text-sm leading-relaxed">{values[3].description}</p>
                            </motion.div>
                        )}

                        {values.length > 4 && (
                            <motion.div
                                initial={{ opacity: 0, y: 50, x: "-50%" }}
                                whileInView={{ opacity: 1, y: 0, x: "-50%" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="hidden md:block absolute top-full left-1/2 max-w-[280px] text-center"
                            >
                                <h3 className="text-2xl font-serif text-[#1A365D] mb-2">{values[4].title}</h3>
                                <p className="text-[#5A6B7C] text-sm leading-relaxed">{values[4].description}</p>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Mobile: Values stacked vertically below SVG */}
                <div className="block md:hidden space-y-8 max-w-md mx-auto">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            className="text-left"
                        >
                            <h3 className="text-xl font-serif text-[#1A365D] mb-3 tracking-wide uppercase">
                                {value.title}
                            </h3>
                            <p className="text-[#5A6B7C] text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
