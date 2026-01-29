import { TierCard } from "./TierCard"
import { SparkleIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import { MembershipBenefit, MembershipCard, MembershipFeatureValue } from "@/features/membership/types";
import React, { useMemo } from "react";
import { Check, Edit, X } from "lucide-react";
import { SquareIcon } from "@/components/icons";

interface MembershipTierTableProps {
  cards: MembershipCard[];
  benefits: MembershipBenefit[];
}

// Helper to get translated content
const getTrans = (item: any, field: string = 'name') => {
  if (!item?.translations || item.translations.length === 0) return item?.[field] || '';
  return item.translations[0]?.[field] || item?.[field] || '';
}

export default function MembershipTierTable({ cards = [], benefits = [] }: MembershipTierTableProps) {

  // Group benefits by Category
  const groupedBenefits = useMemo(() => {
    const groups: Record<string, { categoryName: string, items: MembershipBenefit[] }> = {};

    benefits.forEach(b => {
      const catId = b.category?.id || 'uncategorized';
      const catName = b.category ? getTrans(b.category, 'name') : 'Other Benefits';

      if (!groups[catId]) {
        groups[catId] = { categoryName: catName, items: [] };
      }
      groups[catId].items.push(b);
    });

    return Object.values(groups);
  }, [benefits]);

  // Find value for a specific card in a benefit
  const getBenefitValue = (benefit: MembershipBenefit, cardId: string): MembershipFeatureValue | null => {
    if (!benefit.membership_feature_value) return null;
    return benefit.membership_feature_value.find(val =>
      val.membership_tier?.some(t => t.membership_cards_id === cardId)
    ) || null;
  };

  // Render cell content based on value type
  const renderValueContent = (benefit: MembershipBenefit, val: MembershipFeatureValue | null) => {
    if (!val || !benefit.value_type || benefit.value_type.length === 0) return <span className="text-[#564536]/20">-</span>;

    const allowedTypes = benefit.value_type;
    const content: React.ReactNode[] = [];

    // Check strict types
    if (allowedTypes.includes('boolean')) {
      if (val.value_boolean === true) {
        content.push(<div key="bool" className="w-5 h-5 rounded-full bg-[#d8c093] mx-auto shadow-sm" />);
      }
    }

    if (allowedTypes.includes('text')) {
      const text = getTrans(val, 'value_text');
      if (text) {
        content.push(<span key="text" className="text-[#564536] font-medium text-sm">{text}</span>);
      }
    }

    if (allowedTypes.includes('number')) {
      if (val.value_number !== null && val.value_number !== undefined) {
        content.push(<span key="num" className="text-[#564536] font-bold text-sm">{val.value_number}</span>);
      }
    }

    if (allowedTypes.includes('group')) {
      if (val.value_group) {
        content.push(<span key="group" className="text-[#564536] font-medium text-sm" dangerouslySetInnerHTML={{ __html: val.value_group }} />);
      }
    }

    if (content.length === 0) return <span className="text-[#564536]/20">-</span>;

    // Render all valid content types (e.g., could have both text and boolean if config allows)
    // For now, flex-col to stack them if multiple exist
    return (
      <div className="flex flex-col items-center gap-1">
        {content}
      </div>
    );
  };


  return (
    <div className="w-full bg-[#FAF7EC] py-20 flex flex-col justify-center space-y-3">
      <div className="max-w-[1200px] w-full mx-auto border border-[#d8ccaa] bg-white/50 rounded-xl shadow-sm">

        {/* Header */}
        <div className="flex w-full items-end border-b border-[#e6decf]">
          {/* LEFT TITLE */}
          <div className="w-1/3 text-[#564536] text-3xl font-medium uppercase p-6 flex flex-col justify-end">
            Membership Tier
          </div>

          {/* RIGHT GRID */}
          <div className="grid justify-center h-full w-2/3" style={{ gridTemplateColumns: `repeat(${cards.length}, minmax(0, 1fr))` }}>
            {cards.map((card, index) => {
              // Determine style based on card sort or name (fallback since we don't have color data in API yet)
              // Using cycling mock colors for now until API sends colors
              const colors = [
                { color: "from-[#777] to-[#BBB]", bg: "from-[#D9D9D9] to-[#737373]" }, // Silver
                { color: "from-[#F0D68E] to-[#AC9666]", bg: "from-[#F9F4E7] to-[#E8DCB8]" }, // Gold
                { color: "from-[#4AAEC0] to-[#2B7A8A]", bg: "from-[#E0F7FA] to-[#B2EBF2]" }, // Platinum
                { color: "from-[#B82E2E] to-[#7A1E1E]", bg: "from-[#FADCDC] to-[#F5BDBD]" }, // Diamond
                { color: "from-[#1F3B70] to-[#132445]", bg: "from-[#DCE6FA] to-[#B8CCF5]" }, // Black
              ];
              const style = colors[index % colors.length];

              return (
                // <div className="absolute top-0 left-0 -translate-y-1/2">
                <TierCard name={getTrans(card, 'name')} color={style.color} bg={style.bg} key={card.id} />
                // </div>
              )
            })}
          </div>
        </div>

        {/* BODY */}
        {groupedBenefits.map((group, groupIdx) => (
          <div key={groupIdx} className="w-full flex flex-col">
            {/* Category Header */}
            {group.categoryName && group.categoryName !== 'Other Benefits' && (
              <div className="w-full pl-3 bg-gradient-to-r from-[#AC9666]/40 to-transparent mt-4">
                <div className="pl-6 py-4 bg-gradient-to-r from-[#AC9666] to-[#F9F7ED00] flex items-center gap-2 rounded-full w-full h-full">
                  {/* <div className="rounded-full bg-[#F0D68E78] p-1"> */}
                  <SquareIcon className="w-5 h-5" />
                  {/* </div> */}
                  <p className="text-lg text-white font-medium uppercase tracking-wide">
                    {group.categoryName}
                  </p>
                </div>
              </div>
            )}

            {/* Benefit Rows */}
            <div className={`divide-y divide-[#B29E7178] ${groupIdx === groupedBenefits.length - 1 ? '' : 'border-b border-[#B29E7178]'}`}>
              {group.items.map((benefit) => {
                // Calculate cells with spans
                const rowCells: { val: MembershipFeatureValue | null, span: number }[] = [];
                let i = 0;
                while (i < cards.length) {
                  const currentCard = cards[i];
                  const currentVal = getBenefitValue(benefit, currentCard.id);
                  let span = 1;

                  // Check next cards for merging
                  while (i + span < cards.length) {
                    const nextCard = cards[i + span];
                    const nextVal = getBenefitValue(benefit, nextCard.id);

                    // Merge if both refer to the exact same Value Object ID (Grouped in DB)
                    // OR if both are null (empty cells commonly merged? maybe not, let's span them only if explicit group)
                    // User requirement: "share the exact same object reference". In API, they share the same Feature Value ID.
                    if (currentVal && nextVal && currentVal.id === nextVal.id) {
                      span++;
                    } else {
                      break;
                    }
                  }
                  rowCells.push({ val: currentVal, span });
                  i += span;
                }


                return (
                  <div key={benefit.id} className="w-full py-4 flex justify-start items-center hover:bg-[#FAF7EC]/50 transition-colors">
                    {/* Benefit Name */}
                    <div className="w-1/3 pl-9 pr-4 flex justify-start items-center text-[#564536] font-medium text-sm">
                      {getTrans(benefit, 'name')}
                    </div>

                    {/* Values Grid */}
                    <div className="w-2/3 grid items-center" style={{ gridTemplateColumns: `repeat(${cards.length}, minmax(0, 1fr))` }}>
                      {rowCells.map((cell, idx) => (
                        <div
                          key={idx}
                          className="flex justify-center items-center h-full px-2 text-center"
                          style={{ gridColumn: `span ${cell.span}` }}
                        >
                          {renderValueContent(benefit, cell.val)}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="flex justify-center pt-8">
        <Button className="rounded-lg px-8 py-3 bg-[#AC9666] text-white hover:bg-[#968256] transition-colors shadow-lg">
          View All Privileges
        </Button>
      </div>
    </div>
  )
}
