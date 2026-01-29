"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { SortIcon } from '@/components/icons';
import { getJackpotHistory } from '@/lib/api-edge';

type SortConfig = {
    key: 'date' | 'jackpot' | 'machineName' | 'amount';
    direction: 'asc' | 'desc';
} | null;

interface HistoryTableProps {
    initialData?: any[];
}

export default function HistoryTable({ initialData = [] }: HistoryTableProps) {
    const [data, setData] = useState<any[]>(initialData);
    const [loading, setLoading] = useState(false);
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);

    // Update local state if initialData changes (e.g. from server)
    useEffect(() => {
        if (initialData && initialData.length > 0) {
            console.log(`>>> [HistoryTable] Received ${initialData.length} items from props.`);
            setData(initialData);
        }
    }, [initialData]);

    const handleSort = (key: 'date' | 'jackpot' | 'machineName' | 'amount') => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                // Special handling for rawDate if we want chronologic sort
                if (sortConfig.key === 'date') {
                    aValue = new Date(a.rawDate || a.date).getTime();
                    bValue = new Date(b.rawDate || b.date).getTime();
                }

                if (aValue < bValue) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(value);
    };

    return (
        <section className="py-16 bg-[#F9F7ED]">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl font-serif text-center text-[#2A2A2A] uppercase tracking-[0.15em] mb-10">
                    History Jackpot
                </h2>

                {/* Table Container */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#B29E71]">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#F9F1E1] border-b border-[#B29E71] divide-x divide-[#B29E71]">
                                    <th
                                        className="pl-8 pr-4 py-4 text-sm font-medium text-[#4A4A4A] uppercase tracking-wide cursor-pointer hover:bg-[#F2E5CC] transition-colors"
                                        onClick={() => handleSort('date')}
                                    >
                                        <div className="flex justify-between items-center">
                                            Date
                                            <SortIcon />
                                        </div>
                                    </th>
                                    <th
                                        className="pl-8 pr-4 py-4 text-sm font-medium text-[#4A4A4A] uppercase tracking-wide cursor-pointer hover:bg-[#F2E5CC] transition-colors"
                                        onClick={() => handleSort('jackpot')}
                                    >
                                        <div className="flex justify-between items-center">
                                            Jackpot
                                            <SortIcon />
                                        </div>
                                    </th>
                                    <th
                                        className="pl-8 pr-4 py-4 text-sm font-medium text-[#4A4A4A] uppercase tracking-wide cursor-pointer hover:bg-[#F2E5CC] transition-colors"
                                        onClick={() => handleSort('machineName')}
                                    >
                                        <div className="flex justify-between items-center">
                                            Machine code
                                            <SortIcon />
                                        </div>
                                    </th>
                                    <th
                                        className="pl-8 pr-4 py-4 text-sm font-medium text-[#4A4A4A] uppercase tracking-wide cursor-pointer hover:bg-[#F2E5CC] transition-colors"
                                        onClick={() => handleSort('amount')}
                                    >
                                        <div className="flex justify-between items-center">
                                            Amount
                                            <SortIcon />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-10 text-center text-[#8B7E5D]">
                                            Loading jackpot history...
                                        </td>
                                    </tr>
                                ) : sortedData.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-10 text-center text-[#8B7E5D]">
                                            No history records found.
                                        </td>
                                    </tr>
                                ) : (
                                    sortedData.map((record, index) => (
                                        <tr
                                            key={`${record.id}-${index}`}
                                            className={`border-b border-[#F5EFE0] last:border-b-0 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FDFCF8]'
                                                }`}
                                        >
                                            <td className="pl-8 pr-4 py-3 text-sm text-[#3A3A3A] text-start">{record.date}</td>
                                            <td className="pl-8 pr-4 py-3 text-sm text-[#3A3A3A] text-start">{record.jackpot}</td>
                                            <td className="pl-8 pr-4 py-3 text-sm text-[#3A3A3A] text-start font-mono">{record.machineName}</td>
                                            <td className="pl-8 pr-4 py-3 text-sm text-[#B29E71] text-start font-bold">
                                                {formatCurrency(record.amount)}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
