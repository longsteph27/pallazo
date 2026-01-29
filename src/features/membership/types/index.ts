export interface DirectusTranslation {
    languages_code: string;
    name?: string;
    title?: string;
    description?: string;
    value_text?: string;
    [key: string]: any;
}

export interface MembershipCard {
    id: string;
    sort: number;
    translations: DirectusTranslation[];
    // Helper property to store the resolved name after using a locale function
    name?: string;
}

export interface MembershipCategory {
    id: string;
    translations: DirectusTranslation[];
    name?: string;
}

export interface MembershipFeatureValueTier {
    membership_cards_id: string;
}

export interface MembershipFeatureValue {
    id: string;
    value_text?: string | null;
    value_number?: number | null;
    value_boolean?: boolean | null;
    value_group?: string | null;
    translations: DirectusTranslation[];
    membership_tier: MembershipFeatureValueTier[]; // M2M relation response
}

export interface MembershipBenefit {
    id: string;
    sort: number;
    category: MembershipCategory;
    translations: DirectusTranslation[];
    membership_feature_value: MembershipFeatureValue[];
    is_group: boolean;
    name?: string;
    value_type?: ('text' | 'number' | 'boolean' | 'group')[] | null;
}
