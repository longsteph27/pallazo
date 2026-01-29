'use client';

import React from 'react';
import { SquareIcon } from '@/components/icons';

interface Category {
    id: string;
    label: string;
}

interface FaqSidebarProps {
    categories: Category[];
    activeCategory: string;
    onCategoryChange: (id: string) => void;
}

const FaqSidebar = ({ categories, activeCategory, onCategoryChange }: FaqSidebarProps) => {
    return (
        <aside className="w-full lg:w-64 flex-shrink-0">
            <nav className="flex flex-col gap-6">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onCategoryChange(cat.id)}
                        className={`flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 text-left ${activeCategory === cat.id ? 'text-[#A68C54]' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70'
                            }`}
                    >
                        <div className={`transition-opacity duration-300 ${activeCategory === cat.id ? 'opacity-100' : 'opacity-0'}`}>
                            <SquareIcon />
                        </div>
                        <span>{cat.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default FaqSidebar;
