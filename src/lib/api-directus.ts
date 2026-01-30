import { readItems } from '@directus/sdk';
import { directus } from './directus';
import { getFullLocale } from './i18n';

/**
 * Generic function to get items from a collection with translation support
 */
export async function getCollectionItems<T extends keyof any>(
    collection: T,
    query: any = {},
    lang: string | null = 'en'
) {
    try {
        const fullLocale = getFullLocale(lang);

        // Apply deep filter for translations if not already present
        const finalQuery = {
            ...query,
            deep: {
                ...query.deep,
                translations: {
                    _filter: {
                        languages_code: {
                            _eq: fullLocale,
                        },
                    },
                },
            },
        };

        // @ts-ignore - Schema might not be fully defined yet
        return await directus.request(readItems(collection, finalQuery));
    } catch (error) {
        console.error(`Error fetching items from ${String(collection)}:`, error);
        throw error;
    }
}

/**
 * Get Jackpot data from Directus
 */
export async function getJackpotApi(lang: string | null = 'en') {
    return getCollectionItems('jackpot', {
        fields: ['*', 'translations.*']
    }, lang);
}

/**
 * Get Promotions from Directus
 */
export async function getPromotionsApi(lang: string | null = 'en') {
    return getCollectionItems('promotions', {
        fields: ['*', 'translations.*']
    }, lang);
}

/**
 * Get Blog Posts from Directus
 */
export async function getBlogPostsApi(lang: string | null = 'en') {
    return getCollectionItems('blogs', {
        sort: ['-date_created'],
        fields: ['*', 'author.*', 'translations.*'],
    }, lang);
}

/**
 * Get About Us data
 */
export async function getAboutUsApi(lang: string | null = 'en') {
    return getCollectionItems('about_us', {
        fields: [
            '*',
            'translations.*',
            'img_responsible_gambling',
            { banners: [{ directus_files_id: ['id', 'title', 'filename_disk'] }] }
        ]
    }, lang);
}
/**
 * Get Gaming Page data
 */
export async function getGamingPageApi(lang: string | null = 'en') {
    return getCollectionItems('gaming_page', {
        fields: [
            '*',
            'translations.*',
            {
                banners: [
                    {
                        directus_files_id: ['id', 'title', 'filename_disk']
                    }
                ]
            },
            'image_hero.*'
        ]
    }, lang);
}

/**
 * Get Games categorization and items with deep detail content
 */
export async function getGamesApi(lang: string | null = 'en') {
    const fullLocale = getFullLocale(lang);
    try {
        // @ts-ignore
        const result = await directus.request(readItems('games', {
            fields: [
                '*',
                {
                    items: [
                        {
                            games_items_id: [
                                'id',
                                'type_game',
                                'image.*',
                                'translations.*',
                                {
                                    content: [
                                        'id',
                                        'collection',
                                        {
                                            item: {
                                                jackpot_game: ['*', 'translations.*'],
                                                slot_game: ['*', 'translations.*'],
                                                e_table_game: [
                                                    '*',
                                                    'translations.*',
                                                    {
                                                        items: [
                                                            {
                                                                e_table_games_items_id: [
                                                                    'id',
                                                                    'image.*',
                                                                    'translations.*'
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ],
                                                high_limit_salon: ['*', 'translations.*']
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            deep: {
                items: {
                    games_items_id: {
                        translations: {
                            _filter: {
                                languages_code: { _eq: fullLocale }
                            }
                        },
                        content: {
                            item: {
                                jackpot_game: {
                                    translations: {
                                        _filter: { languages_code: { _eq: fullLocale } }
                                    }
                                },
                                slot_game: {
                                    translations: {
                                        _filter: { languages_code: { _eq: fullLocale } }
                                    }
                                },
                                e_table_game: {
                                    translations: {
                                        _filter: { languages_code: { _eq: fullLocale } }
                                    },
                                    items: {
                                        e_table_games_items_id: {
                                            translations: {
                                                _filter: { languages_code: { _eq: fullLocale } }
                                            }
                                        }
                                    }
                                },
                                high_limit_salon: {
                                    translations: {
                                        _filter: { languages_code: { _eq: fullLocale } }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }));
        return result;
    } catch (error) {
        console.error('Error fetching dynamic games list:', error);
        throw error;
    }
}
/**
 * Get Membership Cards sorted by 'sort' field
 */
export async function getMembershipCards(lang: string | null = 'en') {
    return getCollectionItems('membership_cards', {
        sort: ['sort'],
        fields: ['*', 'translations.*']
    }, lang);
}

/**
 * Get Membership Benefits with nested categories and feature values
 */
export async function getMembershipBenefits(lang: string | null = 'en') {
    return getCollectionItems('membership_benefit', {
        sort: ['sort'],
        fields: [
            '*',
            'translations.*',
            'category.*',
            'category.translations.*',
            {
                membership_feature_value: [
                    '*',
                    'translations.*',
                    {
                        membership_tier: ['membership_cards_id']
                    }
                ]
            }
        ]
    }, lang);
}

/**
 * Get Events from Directus
 */
export async function getEventsApi(lang: string | null = 'en') {
    return getCollectionItems('events', {
        fields: ['*', 'translations.*', 'banner.*'],
        sort: ['-date_created']
    }, lang);
}
