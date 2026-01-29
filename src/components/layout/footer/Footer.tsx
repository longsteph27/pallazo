"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Send, ChevronUp, ChevronsUp } from "lucide-react";
import { FooterLogo } from "@/components/icons";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full bg-[#0E231E] text-white pt-16 pb-8 overflow-hidden bg-right-bottom md:bg-center bg-no-repeat" style={{ backgroundImage: "url('/footer_img.png')", backgroundSize: "auto 100%" }}>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-16">
                    {/* Column 1: Stay Connected */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-white font-serif">
                            Stay Connected
                        </h3>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-sm font-light">
                            Subscrible to our newsletter for the latest updates
                        </p>

                        <button className="bg-[#D2C29E] text-[#031510] md:bg-transparent md:border md:border-[#BCA574] md:text-[#BCA574] text-[10px] font-bold uppercase tracking-widest px-8 py-2.5 rounded hover:opacity-90 transition-all">
                            Get In Touch
                        </button>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {[
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Instagram, label: "Instagram" },
                                { Icon: Linkedin, label: "Linkedin" },
                                { Icon: MessageCircle, label: "Message" },
                                { Icon: Send, label: "Send" },
                                { Icon: Phone, label: "Phone" }
                            ].map(({ Icon, label }, i) => (
                                <a key={i} href="#" className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-[#0A2320]/80 md:bg-white flex items-center justify-center text-white md:text-[#031510] hover:bg-[#BCA574] transition-all">
                                    <Icon className="w-4 h-4 md:w-3.5 md:h-3.5" strokeWidth={2} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Essential Information */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-white font-serif">
                            Essential Information
                        </h3>
                        <ul className="space-y-4 text-[#a0a0a0] text-[13px] font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Responsive Gaming</a></li>
                            <li><a href="#" className="hover:text-[#BCA574] transition-colors">Terms $ Conditions</a></li>
                            <li><a href="#" className="hover:text-[#BCA574] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#BCA574] transition-colors">Payment Policy</a></li>
                            <li><a href="#" className="hover:text-[#BCA574] transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 3: In The Know & News */}
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold tracking-widest uppercase text-white font-serif">
                                In The Know
                            </h3>
                            <ul className="space-y-4 text-[#a0a0a0] text-[13px] font-light">
                                <li><a href="#" className="hover:text-[#BCA574] transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-[#BCA574] transition-colors">FAQs</a></li>
                                <li><a href="#" className="hover:text-[#BCA574] transition-colors">Locaiton</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-sm font-bold tracking-widest uppercase text-white font-serif">
                                News
                            </h3>
                            <ul className="space-y-4 text-[#a0a0a0] text-[13px] font-light">
                                <li><a href="#" className="hover:text-[#BCA574] transition-colors">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="pt-10 mb-16 border-t border-white/10">
                    <div className="flex flex-col space-y-4 text-[12px] text-[#a0a0a0] font-light max-w-lg">
                        <div className="flex gap-4">
                            <span className="shrink-0 w-4">A:</span>
                            <p>1st Floor, Sheraton Saigon Grand Opera Hotel, 80 Dong Du & 88 Dong Khoi Street, Sai Gon Ward, Ho Chi Minh City, Vietnam</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="shrink-0 w-4">P:</span>
                            <p>+84 28 3827 2828</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="shrink-0 w-4">E:</span>
                            <p>Info@palazzo.vn</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col items-center relative pt-4">
                    <div className="mb-6 md:mb-12">
                        <FooterLogo className="h-14 md:h-16 w-auto" />
                    </div>

                    <p className="text-[#a0a0a0]/40 text-[9px] tracking-[0.2em] uppercase text-center mb-4">
                        Copyright 2025 @ by Palazzo...
                    </p>

                    {/* Scroll to top */}
                    <button
                        onClick={scrollToTop}
                        className="absolute right-0 bottom-4 md:bottom-12 w-12 h-12 rounded-full bg-[#BCA574]/80 flex items-center justify-center text-[#031510] shadow-lg hover:bg-[#BCA574] transition-all"
                    >
                        <ChevronUp size={24} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
