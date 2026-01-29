import React from 'react';
import { MembershipBenefit, MembershipCard, MembershipFeatureValue } from '../types';

interface MembershipBenefitTableProps {
    cards: MembershipCard[];
    benefits: MembershipBenefit[];
}

const MembershipBenefitTable: React.FC<MembershipBenefitTableProps> = ({ cards, benefits }) => {
    // Sort cards just in case input isn't sorted (though data source should usually be)
    const sortedCards = [...cards].sort((a, b) => a.sort - b.sort);

    const formatValue = (featureValue: MembershipFeatureValue) => {
        if (featureValue.value_group) return featureValue.value_group;
        if (featureValue.value_text) return featureValue.value_text;
        if (featureValue.value_number !== null && featureValue.value_number !== undefined) return featureValue.value_number;
        if (featureValue.value_boolean !== null && featureValue.value_boolean !== undefined) {
            return featureValue.value_boolean ? '✅' : '❌';
        }
        return '';
    };

    const renderBenefitRow = (benefit: MembershipBenefit) => {
        // 1. Map each card to its resolved feature value (or null)
        const resolvedValues = sortedCards.map((card) => {
            // Find a feature value where this card's ID is in the tier list
            // Note: We use .find(), assuming first match is correct as per design.
            return benefit.membership_feature_value.find((fv) =>
                fv.membership_tier.some(tier => tier.membership_cards_id === card.id)
            ) || null;
        });

        const cells: React.ReactNode[] = [];
        let i = 0;

        while (i < sortedCards.length) {
            const currentValue = resolvedValues[i];
            let colSpan = 1;

            if (!currentValue) {
                // Render empty cell
                cells.push(
                    <td key={`empty-${benefit.id}-${sortedCards[i].id}`} className="border p-4 text-center text-gray-400">
                        -
                    </td>
                );
                i++;
                continue;
            }

            // Check for grouping
            // We look ahead. If the next card resolves to the EXACT SAME object reference, we merge.
            while (i + colSpan < sortedCards.length && resolvedValues[i + colSpan] === currentValue) {
                colSpan++;
            }

            cells.push(
                <td
                    key={`cell-${benefit.id}-${sortedCards[i].id}`}
                    colSpan={colSpan}
                    className={`border p-4 text-center ${colSpan > 1 ? 'bg-gray-50 font-semibold' : ''}`}
                >
                    {formatValue(currentValue)}
                </td>
            );

            // Skip the merged columns
            i += colSpan;
        }

        return (
            <tr key={benefit.id} className="hover:bg-gray-50">
                <td className="border p-4 font-medium text-gray-900">{benefit.name}</td>
                {cells}
            </tr>
        );
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 bg-white">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-4 text-left font-bold text-gray-700">Benefit</th>
                        {sortedCards.map((card) => (
                            <th key={card.id} className="border p-4 text-center font-bold text-gray-700">
                                {card.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {benefits.map((benefit) => renderBenefitRow(benefit))}
                </tbody>
            </table>
        </div>
    );
};

export default MembershipBenefitTable;
