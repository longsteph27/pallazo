export const DEFAULT_LOCALE = 'en';

export const LOCALE_MAP = {
    'en': 'en-US',
    'vi': 'vi-VN',
} as const;

export type LocaleCode = keyof typeof LOCALE_MAP;

/**
 * Maps short locale (en, vi) to Directus full locale (en-US, vi-VN)
 */
export function getFullLocale(lang: string | null): string {
    if (!lang) return LOCALE_MAP[DEFAULT_LOCALE];
    return LOCALE_MAP[lang as LocaleCode] || LOCALE_MAP[DEFAULT_LOCALE];
}

/**
 * Generates the deep query filter for Directus translations
 */
export function getTranslationFilter(lang: string | null) {
    const fullLocale = getFullLocale(lang);
    return {
        translations: {
            _filter: {
                languages_code: {
                    _eq: fullLocale,
                },
            },
        },
    };
}
export const UI_STRINGS = {
    en: {
        coreValuesTitle: "Core Values",
        coreValuesSubtitle: "Our foundation is built on principles that guide everything we do.",
        responsibleGamblingTitle: "RESPONSIBLE GAMBLING",
        ctaButton: "CTA BUTTON",
    },
    vi: {
        coreValuesTitle: "Giá Trị Cốt Lõi",
        coreValuesSubtitle: "Nền tảng của chúng tôi được xây dựng trên những nguyên tắc định hướng mọi việc chúng tôi làm.",
        responsibleGamblingTitle: "CHƠI CÓ TRÁCH NHIỆM",
        ctaButton: "NÚT HÀNH ĐỘNG",
    }
} as const;

/**
 * Returns UI strings for the given language
 */
export function getI18n(lang: string | null) {
    const code = (lang && UI_STRINGS[lang as keyof typeof UI_STRINGS] ? lang : DEFAULT_LOCALE) as keyof typeof UI_STRINGS;
    return UI_STRINGS[code];
}
