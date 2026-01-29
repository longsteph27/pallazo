'use client';

import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaCopy } from 'react-icons/fa';

const ContactDetails = () => {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(label);
        setTimeout(() => setCopiedText(null), 2000);
    };

    return (
        <div className="space-y-12 h-full flex flex-col justify-center py-12 pr-0 lg:pr-12">
            <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight uppercase tracking-tight">
                    INTRODUCE TEXT HERE <br />
                    LOREM IPOUM DOSIC <br />
                    AMET COLOR
                </h2>
            </div>

            <div className="space-y-8">
                {/* Phone */}
                <div className="space-y-2">
                    <p className="text-[#A68C54] text-xs font-bold uppercase tracking-widest">Phone number</p>
                    <p className="text-[#1A1A1A] text-lg font-medium">+ 022038039</p>
                </div>

                {/* Email */}
                <div className="space-y-2 relative group">
                    <p className="text-[#A68C54] text-xs font-bold uppercase tracking-widest">Email adr</p>
                    <div className="flex items-center gap-3">
                        <p className="text-[#1A1A1A] text-lg font-medium">Companyname@gmail.com</p>
                        <button
                            onClick={() => handleCopy('Companyname@gmail.com', 'email')}
                            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#A68C54]"
                            title="Copy Email"
                        >
                            <FaCopy size={16} />
                        </button>
                        {copiedText === 'email' && (
                            <span className="absolute left-0 -bottom-6 text-[10px] text-green-600 font-bold uppercase tracking-widest animate-fade-in">
                                Copied!
                            </span>
                        )}
                    </div>
                </div>

                {/* Location */}
                <div className="space-y-2 relative lg:max-w-md">
                    <p className="text-[#A68C54] text-xs font-bold uppercase tracking-widest">Location</p>
                    <div className="flex items-start gap-4">
                        <p className="text-[#1A1A1A] text-lg font-medium leading-relaxed">
                            Full location text, full location textFull location text, full location text
                        </p>
                        <button
                            onClick={() => handleCopy('Full location text, full location textFull location text, full location text', 'location')}
                            className="mt-1.5 p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#A68C54]"
                            title="Copy Address"
                        >
                            <FaCopy size={16} />
                        </button>
                        {copiedText === 'location' && (
                            <span className="absolute left-0 -bottom-6 text-[10px] text-green-600 font-bold uppercase tracking-widest animate-fade-in">
                                Copied!
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
                {[
                    { icon: <FaFacebookF />, label: 'Facebook' },
                    { icon: <FaInstagram />, label: 'Instagram' },
                    { icon: <FaLinkedinIn />, label: 'LinkedIn' },
                    { icon: <FaYoutube />, label: 'YouTube' }
                ].map((social, i) => (
                    <button
                        key={i}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#A68C54] hover:border-[#A68C54] transition-all"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ContactDetails;
