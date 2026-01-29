import React from 'react';

const ResponsibleGamblingSection = ({
    content,
    title = "RESPONSIBLE GAMBLING",
    buttonLabel = "CTA BUTTON"
}: {
    content?: string;
    title?: string;
    buttonLabel?: string;
}) => {
    const defaultContent = "Palazzo Club is dedicated to promoting responsible gaming in a safe and supportive environment. We believe gaming should always remain a form of leisure and are committed to protecting our guests from the risks of problematic play.";

    return (
        <section className="relative w-full text-white overflow-hidden bg-[#0E231E] mb-12 md:mb-16 lg:mb-24">
            {/* Mobile Layout - Stacked */}
            <div className="block md:hidden">
                {/* Image Section */}
                <div
                    className="w-full h-[300px] bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/path-to-slot-machine.jpg')",
                        backgroundColor: '#1a1a1a'
                    }}
                />

                {/* Content Section with padding and rounded corners */}
                <div className="p-4">
                    <div className="bg-gradient-to-b from-[#313F35] to-[#A8C4B0] p-6 rounded-2xl">
                        <h2 className="text-2xl font-serif font-bold mb-4 tracking-wide">
                            {title}
                        </h2>

                        <div
                            className="space-y-3 text-gray-200 text-sm leading-relaxed mb-6"
                            dangerouslySetInnerHTML={{ __html: content || defaultContent }}
                        />

                        <div>
                            <button className="bg-[#A68A56] hover:bg-[#8c7345] text-white font-bold py-3 px-6 rounded-lg transition-colors uppercase tracking-wider text-sm">
                                {buttonLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden md:flex justify-end min-h-[642px]">
                <div
                    className="absolute w-[55%] left-0 min-h-full bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/path-to-slot-machine.jpg')",
                        backgroundColor: '#1a1a1a'
                    }}
                />
                <div
                    className="w-1/2 min-h-full bg-[#0E231E] flex justify-start items-center"
                    style={{
                        clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 10% 100%, 0% 50%)',
                    }}
                >
                    <div className="flex flex-col justify-center items-start bg-gradient-to-l from-[#A8C4B0] to-[#313F35] p-8 lg:p-16 w-5/6 h-4/5 rounded-r-lg">
                        <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6 tracking-wide">
                            {title}
                        </h2>

                        <div
                            className="space-y-4 line-clamp-6 lg:line-clamp-8 text-gray-300 text-base leading-relaxed mb-8 max-w-xl"
                            dangerouslySetInnerHTML={{ __html: content || defaultContent }}
                        />

                        <div>
                            <button className="bg-[#A68A56] hover:bg-[#8c7345] text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wider text-sm">
                                {buttonLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsibleGamblingSection;
