import { directus } from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { getTranslationFilter } from '@/lib/i18n';
import { Service, ServiceItem } from '@/types/service';

const ASSETS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://api-pallazo.tsx.vn';

export async function getServices(page: number = 1, limit: number = 8, lang: string = 'en'): Promise<{ items: ServiceItem[], total: number }> {
    const filter = getTranslationFilter(lang);

    try {
        const result = await directus.request(
            readItems('services' as any, {
                fields: [
                    '*',
                    'translations.*',
                    'feature_image'
                ],
                limit,
                page,
                deep: {
                    ...filter,
                } as any,
                meta: 'total_count'
            })
        ) as any;
        console.log(result);

        const items = result.map((item: Service) => {
            const translation = item.translations?.[0] || {};
            const imageUrl = item.feature_image
                ? `${ASSETS_URL}/assets/${item.feature_image}?key=system-large-contain`
                : '';

            return {
                id: item.id,
                title: translation.title || '',
                description: translation.content || '',
                image: imageUrl
            };
        });

        return {
            items,
            total: result.meta?.total_count || 0
        };
    } catch (error) {
        console.error('Error fetching Services data:', error);
        return { items: [], total: 0 };
    }
}
