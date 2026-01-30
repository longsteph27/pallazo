import React from 'react';
import GameType from '../GameType';
import { JackpotIcon } from '@/features/home/components/JackpotSection/components/JackpotIcon';
import Button from '@/components/ui/Button';
import TransparentButton from '@/components/ui/TransparentButton';

const JackpotGame = ({ onClose, data }: { onClose?: () => void; data?: any }) => {
    const translation = data?.translations?.[0] || {};
    const jackpotData = [
        { date: '02/02/2024', jackpot: 'T12345', machineCode: '112A2D23455FT', amount: '112A2D23455FT' },
        { date: '02/02/2024', jackpot: 'T12345', machineCode: '112A2D23455FT', amount: '112A2D23455FT' },
        { date: '02/02/2024', jackpot: 'T12345', machineCode: '112A2D23455FT', amount: '112A2D23455FT' },
        { date: '02/02/2024', jackpot: 'T12345', machineCode: '112A2D23455FT', amount: '112A2D23455FT' },
        { date: '02/02/2024', jackpot: 'T12345', machineCode: '112A2D23455FT', amount: '112A2D23455FT' },
        { date: '02/02/2024', jackpot: 'T12345', machineCode: '112A2D23455FT', amount: '112A2D23455FT' },
        { date: '02/02/2024', jackpot: 'T12345', machineCode: '112A2D23455FT', amount: '112A2D23455FT' }
    ];

    return (
        <GameType
            onClose={onClose}
            title={translation.title || "JACKPOT"}
            subtitle={translation.headline || "YOUR JACKPOT COULD BE NEXT AT PALAZZO!"}
            description={translation.content || "Our progressive jackpot system is a key element of the Palazzo experience, providing guests with thrilling, real-time excitement and the chance to witness remarkable wins. View live Jackpot History and explore our full range of jackpot types here."}
        >
            <div className='px-4 lg:px-8 w-full flex-1 flex flex-col min-h-0 pb-12 lg:pb-8'>
                <div className='w-full h-full pt-[1px] px-[1px] bg-gradient-to-b from-[#B29E71] to-[#F9F7ED] relative rounded-xl overflow-hidden flex flex-col'>
                    <div className='w-full h-full bg-gradient-to-t from-[#01050F] via-[70%] to-[#1E3D58] rounded-xl flex flex-col overflow-hidden'>

                        {/* Table Header */}
                        <div className='grid grid-cols-4 bg-[#2A3F55]/20 rounded-t-xl border-b border-[#4A607A]'>
                            {['', 'Jackpot', 'Machine code', 'Amount'].map((header, index) => (
                                <div key={index} className='p-2 lg:p-4 text-[#DCCBA1] text-[10px] lg:text-sm font-medium flex items-center justify-between border-r border-[#4A607A] last:border-r-0'>
                                    <span className="truncate">{header}</span>
                                    <div className='flex flex-col gap-0.5 lg:gap-1 flex-shrink-0 ml-1'>
                                        <svg viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[6px] h-[3px] lg:w-[8px] lg:h-[4px]">
                                            <path d="M4 0L8 4H0L4 0Z" fill="#DCCBA1" />
                                        </svg>
                                        <svg viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[6px] h-[3px] lg:w-[8px] lg:h-[4px]">
                                            <path d="M4 4L0 0H8L4 4Z" fill="#DCCBA1" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Table Body */}
                        <div className='flex-1 overflow-y-auto relative border-x border-[#4A607A] bg-transparent'>
                            {jackpotData.map((row, index) => (
                                <div key={index} className='grid grid-cols-4 border-b border-[#4A607A]/30 last:border-b-0 hover:bg-[#2A3F55]/30 transition-colors relative z-10'>
                                    <div className='p-2 lg:p-4 text-[10px] lg:text-sm text-[#5A6B80] truncate'>{row.date}</div>
                                    <div className='p-2 lg:p-4 text-[10px] lg:text-sm text-[#5A6B80] truncate'>{row.jackpot}</div>
                                    <div className='p-2 lg:p-4 text-[10px] lg:text-sm text-[#5A6B80] truncate'>{row.machineCode}</div>
                                    <div className='p-2 lg:p-4 text-[10px] lg:text-sm text-[#5A6B80] truncate'>{row.amount}</div>
                                </div>
                            ))}
                            {/* Gradient Overlay for Blur Effect */}
                            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#01050F]/80 to-transparent pointer-events-none z-0" />
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Button Overlay */}
            <div className='absolute bottom-6 lg:bottom-12 left-1/2 -translate-x-1/2 z-50 lg:w-auto'>
                {/* <div className="p-[1px] rounded-lg bg-gradient-to-b from-[#B29E71] to-[#F9F7ED]"> */}
                <TransparentButton className='whitespace-nowrap'>
                    VIEW HISTORY JACKPOT
                </TransparentButton>
                {/* </div> */}
            </div>
            <div className='absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#01050F] to-transparent z-40 w-full h-32 pointer-events-none' />
        </GameType>
    );
};

export default JackpotGame;
