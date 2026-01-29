'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaRegClock } from 'react-icons/fa';

interface RelatedPost {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    image: string;
}

const relatedPosts: RelatedPost[] = [
    {
        id: 1,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every',
        image: 'https://picsum.photos/seed/related1/400/300',
    },
    {
        id: 2,
        title: 'TIGER JACKPOT: THURSDAY NIGHT THRILLS!',
        date: 'May 07, 2024',
        time: '12:00',
        description: 'Unleash your winning roar with guaranteed Jackpots and surprise bonuses every',
        image: 'https://picsum.photos/seed/related2/400/300',
    },
];

const BlogDetail = () => {
    return (
        <main className="bg-[#F9F7ED] min-h-screen">
            {/* Banner Section */}
            <div className="relative w-full h-[400px] md:h-[600px] max-h-[1024px]">
                <Image
                    src="https://picsum.photos/seed/blogdetail/1920/1080"
                    alt="Blog Banner"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay if needed */}
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Overlapping Title Card */}
            <div className="relative w-[65%] -mt-20 pl-4 md:pl-16 lg:pl-32 md:pr-10 lg:pr-24 py-4 md:py-6 bg-[#F9F7ED] rounded-tr-[22px] z-10">
                {/* <div className="mx-auto"> */}
                {/* Hidden spacer to match social icons column width */}
                {/* <div className="hidden md:block md:col-span-1"></div> */}

                {/* <div className="md:col-span-11"> */}
                <h1 className="text-xl md:text-2xl lg:text-5xl font-serif font-bold text-[#1A1A1A] leading-9 uppercase tracking-wide">
                    INTRODUCE TEXT HERE LOREM IPOUM DOSIC AMET COLOR
                </h1>

                {/* Metadata */}
                <div className="mt-6 flex items-center gap-4 text-[#BFA57A] text-sm md:text-base font-medium">
                    <div className="flex items-center gap-2">
                        <FaRegClock className="w-4 h-4" />
                        <span>12:00</span>
                    </div>
                    <div className="w-1 h-1 bg-[#BFA57A] rounded-full" />
                    <span>May 07, 2024</span>
                </div>
                {/* </div> */}
                {/* </div> */}
            </div>
            <div className='bg-gradient-to-r from-[#C4B490] to-[#F9F7ED] h-[1px] w-full ml-4 md:ml-16 lg:ml-32' />
            {/* Content Container */}
            <div className="w-full px-4 sm:px-6 md:px-16 lg:px-32 relative">

                {/* Main Grid Content */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-24">

                    {/* Social Share - Left (Sticky) */}
                    <div className="md:col-span-1">
                        <div className="flex md:flex-col gap-4 sticky top-32">
                            <a href="#" className="w-10 h-10 bg-[#A68C54] text-white flex items-center justify-center rounded-sm hover:bg-[#8B7546] transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#A68C54] text-white flex items-center justify-center rounded-sm hover:bg-[#8B7546] transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#A68C54] text-white flex items-center justify-center rounded-sm hover:bg-[#8B7546] transition-colors">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Blog Body - Center */}
                    <article className="md:col-span-7 space-y-8 text-gray-700 leading-relaxed text-lg">
                        <p>
                            While some salons can feel alienating, especially for LGBTQ clients, Color Me Chula has created a
                            community around both its experimental cuts and diverse clientele. "I realized it was difficult to find a place
                            where we can really feel comfortable, where you walk in and you don't feel like you kind of have to put up a
                            front," Jackelyn said. "So we wanted to create an environment where that wouldn't be an issue—where
                            people could just walk in and feel at home." Monica, reflecting on the shop's origins, echoed her wife: "We
                            wanted to create a space where everybody deserves to be pampered."
                        </p>
                        <p>
                            While some salons can feel alienating, especially for LGBTQ clients, Color Me Chula has created a
                            community around both its experimental cuts and diverse clientele. "I realized it was difficult to find a place
                            where we can really feel comfortable, where you walk in and you don't feel like you kind of have to put up a
                            front," Jackelyn said. "So we wanted to create an environment where that wouldn't be an issue—where
                            people could just walk in and feel at home." Monica, reflecting on the shop's origins, echoed her wife: "We
                            wanted to create a space where everybody deserves to be pampered."
                        </p>

                        {/* Middle Image */}
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden my-12">
                            <Image
                                src="https://picsum.photos/seed/blogmid/800/600"
                                alt="Content detail"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p>
                            While some salons can feel alienating, especially for LGBTQ clients, Color Me Chula has created a
                            community around both its experimental cuts and diverse clientele. "I realized it was difficult to find a place
                            where we can really feel comfortable, where you walk in and you don't feel like you kind of have to put up a
                            front," Jackelyn said. "So we wanted to create an environment where that wouldn't be an issue—where
                            people could just walk in and feel at home." Monica, reflecting on the shop's origins, echoed her wife: "We
                            wanted to create a space where everybody deserves to be pampered."
                        </p>
                        <p>
                            While some salons can feel alienating, especially for LGBTQ clients, Color Me Chula has created a
                            community around both its experimental cuts and diverse clientele. "I realized it was difficult to find a place
                            where we can really feel comfortable, where you walk in and you don't feel like you kind of have to put up a
                            front," Jackelyn said. "So we wanted to create an environment where that wouldn't be an issue—where
                            people could just walk in and feel at home." Monica, reflecting on the shop's origins, echoed her wife: "We
                            wanted to create a space where everybody deserves to be pampered."
                        </p>
                    </article>

                    {/* Sidebar - Right */}
                    <aside className="md:col-span-4 space-y-10">
                        <section>
                            <h3 className="text-xl font-bold text-[#1A1A1A] border-b-[3px] border-[#A68C54] pb-2 mb-8 uppercase tracking-widest inline-block leading-none">
                                BÀI VIẾT LIÊN QUAN
                            </h3>

                            <div className="space-y-12">
                                {relatedPosts.map((post) => (
                                    <div key={post.id} className="group cursor-pointer">
                                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <h4 className="text-lg font-bold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#A68C54] transition-colors uppercase">
                                            {post.title}
                                        </h4>
                                        <div className="flex items-center gap-3 text-[#BFA57A] text-xs font-medium mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <FaRegClock className="w-3.5 h-3.5" />
                                                <span>{post.time}</span>
                                            </div>
                                            <div className="w-1 h-1 bg-[#BFA57A] rounded-full" />
                                            <span>{post.date}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                            {post.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <Link href="/blogs" className="inline-block mt-12 text-[#A68C54] font-bold text-sm uppercase tracking-widest hover:translate-x-2 transition-transform underline underline-offset-8">
                                See all blog
                            </Link>
                        </section>
                    </aside>

                </div>
            </div>
        </main>
    );
};

export default BlogDetail;
