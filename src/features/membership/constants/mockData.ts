import { MembershipBenefit, MembershipCard, MembershipFeatureValue } from '../types';

export const mockMembershipCards: MembershipCard[] = [
    { id: 'card_Silver', name: 'Silver', sort: 1, translations: [] },
    { id: 'card_Gold', name: 'Gold', sort: 2, translations: [] },
    { id: 'card_Platinum', name: 'Platinum', sort: 3, translations: [] },
    { id: 'card_Diamond', name: 'Diamond', sort: 4, translations: [] },
];

// Helper to create tier objects
const tier = (id: string) => ({ membership_cards_id: id });

// Re-usable feature values to ensure object reference identity is preserved for grouping
const fvGroupGoldPlatinum: MembershipFeatureValue = {
    id: 'fv_2',
    value_group: 'Gold & Platinum Special',
    membership_tier: [tier('card_Gold'), tier('card_Platinum')],
    translations: []
};

const fvGroupAll: MembershipFeatureValue = {
    id: 'fv_all',
    value_boolean: true,
    membership_tier: [tier('card_Silver'), tier('card_Gold'), tier('card_Platinum'), tier('card_Diamond')],
    translations: []
};

const fvSilver: MembershipFeatureValue = {
    id: 'fv_1',
    value_text: 'Basic Access',
    membership_tier: [tier('card_Silver')],
    translations: []
};

const fvDiamond: MembershipFeatureValue = {
    id: 'fv_3',
    value_text: 'VIP Access',
    membership_tier: [tier('card_Diamond')],
    translations: []
};

const mockCategory = { id: 'cat_1', translations: [], name: 'General' };

export const mockMembershipBenefits: MembershipBenefit[] = [
    {
        id: 'benefit_1',
        name: 'Lounge Access',
        sort: 1,
        category: mockCategory,
        translations: [],
        membership_feature_value: [
            fvSilver,
            fvGroupGoldPlatinum, // Shared object for Gold & Platinum -> Should Group
            fvDiamond
        ],
        is_group: false
    },
    {
        id: 'benefit_2',
        name: 'Free Parking',
        sort: 2,
        category: mockCategory,
        translations: [],
        membership_feature_value: [
            fvGroupAll // ALL merged into one big cell
        ],
        is_group: false
    },
    {
        id: 'benefit_3',
        name: 'Welcome Drink',
        sort: 3,
        category: mockCategory,
        translations: [],
        membership_feature_value: [
            { id: 'fv_drink_1', value_number: 1, membership_tier: [tier('card_Silver')], translations: [] },
            { id: 'fv_drink_2', value_number: 2, membership_tier: [tier('card_Gold')], translations: [] },
            { id: 'fv_drink_3', value_number: 3, membership_tier: [tier('card_Platinum')], translations: [] },
            { id: 'fv_drink_4', value_number: 5, membership_tier: [tier('card_Diamond')], translations: [] },
        ],
        is_group: false
    }
];
