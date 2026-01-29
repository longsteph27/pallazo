'use client';

import { useState } from 'react';
import { TabType } from '../types';

const tabs: { id: TabType; label: string }[] = [
    { id: 'yesterday', label: 'YESTERDAY' },
    { id: 'records', label: 'RECORDS' },
    { id: 'history1', label: 'HISTORY #1' },
];

export default function TabNavigation() {
    const [activeTab, setActiveTab] = useState<TabType>('yesterday');

    return (
        <div className="flex justify-center gap-4 py-6">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-8 py-2 rounded-full font-medium text-sm tracking-wider transition-all
            ${activeTab === tab.id
                            ? 'bg-gradient-to-r from-[#D4C5A6] to-[#BFA57A] text-white shadow-lg'
                            : 'bg-[#F9F7ED] text-[#8B7355] hover:bg-[#F0E8DC] border border-[#D4C5A6]'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
