'use client';

import React, { useState } from 'react';
import FaqSidebar from '@/features/faq/components/FaqSidebar';
import FaqAccordion from '@/features/faq/components/FaqAccordion';

const categories = [
    { id: 'membership', label: 'Membership' },
    { id: 'services', label: 'Services' },
    { id: 'booking', label: 'Booking' },
    { id: 'careers', label: 'Careers' },
    { id: 'legal', label: 'Legal' },
];

const faqData = {
    membership: [
        { id: 1, question: 'How do I apply for a position at Palazzo Club?', answer: 'While some salons can feel alienating, especially for LGBTQ clients, Color Me Chula has created a community around both its experimental cuts and diverse clientele. I realized it was difficult to find a place where we can really feel comfortable, where you walk in and you don’t feel like you kind of have to put up a front, Jackelyn said.' },
        { id: 2, question: 'What documents do I need to submit?', answer: 'You will need to provide a current resume, identification documents, and any relevant certifications or licenses required for the specific role you are applying for.' },
        { id: 3, question: 'How long does the hiring process take?', answer: 'The hiring process typically takes between 2 to 4 weeks, depending on the position and the number of candidates.' },
    ],
    services: [
        { id: 4, question: 'How do I apply for a position at Palazzo Club?', answer: 'Information about our services and application process can be found on our website or by contacting our support team directly.' },
        { id: 5, question: 'What documents do I need to submit?', answer: 'Service-related documents vary by department. Generally, proof of identity and professional credentials are required.' },
    ],
    booking: [
        { id: 6, question: 'How do I apply for a position at Palazzo Club?', answer: 'Booking-related questions can be addressed through our dedicated booking portal or by visiting our reception desk.' },
    ]
};

const FaqPage = () => {
    const [activeCategory, setActiveCategory] = useState('membership');

    const handleCategoryChange = (id: string) => {
        setActiveCategory(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="bg-[#F9F7ED] min-h-screen pt-32 pb-40">
            <div className="max-w-[1320px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Sidebar */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <FaqSidebar
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={handleCategoryChange}
                        />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 space-y-32">
                        <div id="membership">
                            <FaqAccordion title="MEMBERSHIP" items={faqData.membership} />
                        </div>
                        <div id="services">
                            <FaqAccordion title="SERVICES" items={faqData.services} />
                        </div>
                        <div id="booking">
                            <FaqAccordion title="BOOKING" items={faqData.booking} />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default FaqPage;
