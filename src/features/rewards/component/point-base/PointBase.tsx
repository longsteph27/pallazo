"use client";
import Image from "next/image";
import React from "react";

const PointBase = () => {
    return (
        <section className="py-10 relative">
            {/* Title Section */}
            <div className="flex justify-center items-end mb-8 relative z-20">
                <div className="flex items-end w-full max-w-[1200px] px-10">
                    <div className="h-[1px] bg-[#d4c5a6] flex-1 opacity-60 mb-[1px]"></div>
                    <div className="relative mx-[-1px]">
                        {/* SVG Curve for the title tab */}
                        <Image src="/point-base.svg" alt="Point Base" width={1194} height={77} />

                        <div className="absolute inset-0 flex items-center justify-center pt-4">
                            <h3 className="text-3xl font-serif tracking-widest text-[#1a1a1a] uppercase text-center whitespace-nowrap">
                                Point Base
                            </h3>
                        </div>
                    </div>
                    <div className="h-[1px] bg-[#d4c5a6] flex-1 opacity-60 mb-[1px]"></div>
                </div>
            </div>

            {/* Dark Content Container */}
            <div className="max-w-[1300px] mx-auto bg-gradient-to-b from-[#03050d] to-[#182235] text-white rounded-[3rem] px-6 py-16 relative overflow-hidden shadow-2xl border-t border-[#d4c5a6]/20">

                <div className="max-w-[1200px] mx-auto relative z-10">
                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[1, 2, 3].map((num) => (
                            <div
                                key={num}
                                className="relative group rounded-2xl bg-gradient-to-b from-[#1e2532] to-[#0f131c] border border-[#2a3245] shadow-2xl overflow-hidden flex flex-col"
                            >
                                {/* Spotlight Effect */}

                                {/* Card Top Highlight */}
                                <div className="absolute top-0 left-1/2 translate-x-[-50%] right-0 w-2/5 h-1 bg-[#EFDCAE]"></div>

                                {/* Number Badge */}
                                <div className="flex flex-col justify-center items-center -mt-[1px] bg-[radial-gradient(30%_150%_at_50%_100%,#D5C08E85_0%,#DBC69500_100%)] pointer-events-none">
                                    <div className="relative">
                                        {/* <div className="absolute top-0 left-0 right-0 h-40 bg-[radial-gradient(50%_100%_at_50%_0%,#D5C08E85_0%,#DBC69500_100%)] pointer-events-none"></div> */}
                                        <div className="w-14 h-12 bg-gradient-to-b from-[#d4c5a6] to-[#8c7e60] flex items-center justify-center clip-path-badge shadow-lg">
                                            <span className="text-[#1a1a1a] font-bold text-lg">{num}</span>
                                        </div>
                                        {/* Triangle shadow effect */}
                                        {/* <div className="absolute top-0 -left-2 w-2 h-4 bg-[#5e5238] skew-y-[40deg] -z-10"></div>
                                        <div className="absolute top-0 -right-2 w-2 h-4 bg-[#5e5238] skew-y-[-40deg] -z-10"></div> */}
                                    </div>
                                    <h4 className="text-[#F9F7ED] text-lg font-bold mt-4 mb-5 tracking-wide">
                                        PALAZZO TIER POINT (PZT)
                                    </h4>
                                </div>

                                <div className="p-8 pt-6 flex-1 flex flex-col items-center text-center">
                                    <div className="space-y-6 text-sm text-[#cfcfcf] font-light leading-relaxed">
                                        <p>
                                            PZT determines your tier within the Palazzo Loyalty Program and helps you gain increased recognition.
                                        </p>

                                        <div className="flex items-center justify-center gap-2 opacity-60">
                                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4c5a6]"></div>
                                            <span className="text-[#d4c5a6] text-xs">✦</span>
                                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4c5a6]"></div>
                                        </div>

                                        <p>
                                            PZT expires at the end of the year (7:00 AM, January 1st, the next year).
                                        </p>

                                        <div className="flex items-center justify-center gap-2 opacity-60">
                                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4c5a6]"></div>
                                            <span className="text-[#d4c5a6] text-xs">✦</span>
                                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4c5a6]"></div>
                                        </div>

                                        <p>
                                            PZT can be redeemed for promotions and Point Play (minimum redemption: $10).
                                        </p>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="mt-auto bg-[radial-gradient(50%_100%_at_50%_0%,#D5C08E85_0%,#DBC69500_100%)] pointer-events-none] py-4 text-center border-t border-[#3d3d3d]">
                                    <span className="text-[#d4c5a6] font-semibold text-sm tracking-wider">
                                        1 PZT = $0.01 (1 CENT)
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Info */}
                    <div className="mt-16 relative rounded-3xl bg-gradient-to-b from-[#1e2532] to-[#0f131c] border border-[#2a3245] p-10 text-center shadow-2xl">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[#1a1a1a] font-bold text-6xl opacity-10 select-none">
                            1
                        </div>

                        <div className="space-y-4 text-xs text-[#a0a0a0] max-w-4xl mx-auto leading-loose">
                            <p className="text-[#cfcfcf] text-sm mb-6">
                                Privileges may vary and are subject to applicable Terms & Conditions.
                            </p>
                            <p>
                                _Tier benefits are prorated for Palazzo Membership cardholders who achieve Tier Status within a membership year.
                            </p>
                            <p>
                                _Upgrades to the next tier are automatic once the required Tier Points are earned, as determined by the Patron Management System.
                            </p>
                            <p>
                                _Membership tier reviews, which determine whether a member remains at their current level or is downgraded, take place 180 days after the last upgrade.
                            </p>
                            <p>
                                _Balance Points remain valid for 12 months and will expire on January 1st.
                            </p>
                            <p>
                                _"Actual Value" refers to the equivalent monetary value of services provided by our partners.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .clip-path-badge {
          clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
        }
      `}</style>
        </section>
    );
};

export default PointBase;
