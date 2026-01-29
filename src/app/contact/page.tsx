'use client';

import React from 'react';
import ContactHero from '@/features/contact/components/ContactHero';
import ContactDetails from '@/features/contact/components/ContactDetails';
import ContactForm from '@/features/contact/components/ContactForm';

const ContactPage = () => {
    return (
        <main className="bg-[#F9F7ED] min-h-screen">
            {/* Hero Section */}
            <ContactHero />

            {/* Main Content Sections */}
            <div className="max-w-[1320px] mx-auto px-4 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    {/* Left: Contact Details */}
                    <ContactDetails />

                    {/* Right: Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
