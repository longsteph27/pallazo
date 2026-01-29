'use client';

import React from 'react';

const ContactForm = () => {
    return (
        <div className="w-full p-[1px] bg-gradient-to-b from-[#B29E71] to-[#F9F7ED] rounded-[15px] ">
            <div className="w-full bg-[#F9F7ED] rounded-[15px] p-8 md:p-12">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="block text-[#1A1A1A] text-sm font-semibold tracking-wide">Full name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full bg-[#F2EDDE] border-none rounded-[12px] px-6 py-4 text-sm focus:ring-1 focus:ring-[#A68C54]/30 transition-shadow outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="block text-[#1A1A1A] text-sm font-semibold tracking-wide">Email</label>
                        <input
                            type="email"
                            placeholder="Enter a valid email so we can reach you"
                            className="w-full bg-[#F2EDDE] border-none rounded-[12px] px-6 py-4 text-sm focus:ring-1 focus:ring-[#A68C54]/30 transition-shadow outline-none"
                        />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                        <label className="block text-[#1A1A1A] text-sm font-semibold tracking-wide">Subject</label>
                        <input
                            type="text"
                            placeholder="Tell us how we can help you"
                            className="w-full bg-[#F2EDDE] border-none rounded-[12px] px-6 py-4 text-sm focus:ring-1 focus:ring-[#A68C54]/30 transition-shadow outline-none"
                        />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label className="block text-[#1A1A1A] text-sm font-semibold tracking-wide">Message</label>
                        <textarea
                            rows={4}
                            placeholder="Tell us how we can help you"
                            className="w-full bg-[#F2EDDE] border-none rounded-[12px] px-6 py-4 text-sm focus:ring-1 focus:ring-[#A68C54]/30 transition-shadow outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <button className="w-full md:w-auto px-12 py-3.5 outline-[1px] outline-[#D6C5A0] outline-offset-2 bg-[#B09860] text-white font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-[#A68C54] hover:text-white transition-all rounded-[10px]">
                            CTA BUTTON
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
