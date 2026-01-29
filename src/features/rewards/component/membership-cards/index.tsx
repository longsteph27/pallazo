import React from "react";
import '../style/index.css'
import Image from "next/image";

export default function MemberCards() {
    return (
        <div className="flex flex-col gap-32 relative">
            <div className="w-full absolute bottom-0 right-0 flex justify-center">
                <Image src={'/bg-member-card.svg'} alt="background membership" width={1000} height={1000} className="object-cover" />
            </div>
            <div className="flex w-full items-center justify-center relative">
                <div className="">
                    <Image src={'/title-member.svg'} alt="" width={1000} height={300} />
                </div>
                <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl font-semibold leading-10 uppercase">Membership Cards</h1>
            </div>
            <div className="w-full flex justify-center">
                <div className="card-wrap max-w-[1200px] w-full py-10 uppercase">
                    <div className="card bg-gradient-to-bl w-[200px] h-[280px] from-black to-[#9D9D9D] rotate-[-22deg] -translate-y-[20px] translate-x-10 left-[50px]">Sliver</div>
                    <div className="card bg-gradient-to-tl w-[200px] h-[280px] from-[#511108] to-[#B72612] rotate-[13deg] -translate-x-5 -translate-y-24"></div>
                    <div className="card bg-gradient-to-b w-[200px] h-[280px] from-[#AC9666] to-[#D8CAAB] rotate-[-14deg] -translate-x-6 -translate-y-7"></div>
                    <div className="card bg-gradient-to-bl w-[220px] h-[330px] from-[#E4FFEE] to-[#94D5E0] rotate-[9.4deg] -translate-x-4 -translate-y-24 z-50"></div>
                    <div className="card bg-gradient-to-tl w-[200px] h-[280px] from-black to-[#9D9D9D] rotate-[24deg] -translate-x-7 -translate-y-2"></div>
                </div>
            </div>
        </div>
    )
}