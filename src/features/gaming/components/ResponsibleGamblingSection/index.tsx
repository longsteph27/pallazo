'use client';

import React from 'react';
import ResponsibleWelcome from './ResponsibleWelcome';
import { GradientBarSvg } from '@/components/icons';
import { motion } from 'framer-motion';

const ContentItem = ({ title, content, list }: { title: string; content?: string; list?: string[] }) => (
    <div className="py-12 border-b border-[#E5E0D0] last:border-0">
        <div className="mb-6">
            <GradientBarSvg className="w-[82px] h-[6px]" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/3">
                <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-[#1a1a1a]">
                    {title}
                </h3>
            </div>
            <div className="md:w-2/3">
                {content && (
                    <p className="font-sans text-[#4a4a4a] leading-relaxed mb-4">
                        {content}
                    </p>
                )}
                {list && (
                    <ul className="space-y-2">
                        {list.map((item, idx) => (
                            <li key={idx} className="font-sans text-[#4a4a4a] flex gap-3">
                                <span className="text-[#AC9666] mt-1.5 flex-shrink-0 w-1 h-1 bg-[#AC9666] rounded-full" />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </div>
);

const ResponsibleGamblingSection = () => {
    const sections = [
        {
            title: "COMMITMENT",
            content: "We are devoted to fostering a culture of responsible gaming. Our goal is to ensure that guests enjoy their gaming experience within healthy limits and with a full understanding of the risks involved. Our staff are trained to recognize signs of problematic gambling behavior and are ready to offer support or direct individuals to professional assistance when needed."
        },
        {
            title: "IDENTIFYING GAMBLING-RELATED ISSUES",
            content: "Some warning signs may include:",
            list: [
                "Spending too much time and money on gaming.",
                "Neglecting work, studies, or personal relationships.",
                "Borrowing money or getting into debt to gamble.",
                "Feeling restless, anxious, or irritable when not gambling.",
                "Being unable to stop despite trying."
            ]
        },
        {
            title: "RESPONSIBLE GAMBLING GUIDELINES",
            content: "We encourage all guests to follow these responsible gambling practices:",
            list: [
                "Set a budget before you start playing and stick to it.",
                "Treat gambling as entertainment, not a way to make money.",
                "Be aware of how much time and money you spend.",
                "Do not gamble when feeling stressed, upset, or under the influence of alcohol.",
                "Take breaks regularly during gaming sessions."
            ]
        },
        {
            title: "CONTACT SUPPORT",
            content: "If you need more information or would like to speak privately with one of our staff members, please contact the customer support team at Palazzo Club or email us at [info@palazzo.vn]"
        }
    ];

    return (
        <section className="bg-[#F9F7ED]">
            <ResponsibleWelcome />
            <div className="max-w-[1222px] mx-auto px-4 pb-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="divide-y divide-[#E5E0D0]"
                >
                    {sections.map((section, idx) => (
                        <ContentItem key={idx} {...section} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ResponsibleGamblingSection;
