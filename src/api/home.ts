import { directus } from '@/lib/directus';
import { readSingleton } from '@directus/sdk';
import { getTranslationFilter } from '@/lib/i18n';
import { HomeData, HomePageProps } from '@/types/home';

export async function getHomePageData(lang: string = 'en'): Promise<HomePageProps | null> {
    const filter = getTranslationFilter(lang);

    try {
        const result = await directus.request(
            readSingleton('home' as any, {
                fields: [
                    '*',
                    'translations.*',
                    'banners.directus_files_id.*',
                    'membership_section_img.*'
                ],
                deep: {
                    ...filter,
                    // Sort banners if needed, e.g. based on ID or a sort field if added later
                } as any
            })
        ) as unknown as HomeData;

        if (!result) return null;

        return mapHomeData(result);
    } catch (error) {
        console.error('Error fetching Home Page data:', error);
        return null;
    }
}

function mapHomeData(data: HomeData): HomePageProps {
    // Directus returns translations as an array. 
    // Since we filtered by specific language, we take the first item.
    // Fallback to empty object if no translation found.
    const translation = data.translations?.[0];

    return {
        translation,
        banners: data.banners || [],
        membershipImage: data.membership_section_img,
    };
}
