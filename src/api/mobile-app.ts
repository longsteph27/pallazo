import { directus } from '@/lib/directus';
import { readSingleton } from '@directus/sdk';
import { getTranslationFilter } from '@/lib/i18n';
import { MobileAppData, MobileAppProps } from '@/types/mobile-app';

export async function getMobileAppData(lang: string = 'en'): Promise<MobileAppProps | null> {
    const filter = getTranslationFilter(lang);

    try {
        const result = await directus.request(
            readSingleton('mobile_app' as any, {
                fields: [
                    '*',
                    'translations.*',
                    'img_mobile.*',
                    'qr_code_img.*'
                ],
                deep: {
                    ...filter,
                } as any
            })
        ) as unknown as MobileAppData;

        if (!result) return null;

        return mapMobileAppData(result);
    } catch (error) {
        console.error('Error fetching Mobile App data:', error);
        return null;
    }
}

function mapMobileAppData(data: MobileAppData): MobileAppProps {
    const translation = data.translations?.[0];

    // Safely extract image IDs
    const imgMobileId = typeof data.img_mobile === 'object' ? data.img_mobile?.id : data.img_mobile;
    const qrCodeImgId = typeof data.qr_code_img === 'object' ? data.qr_code_img?.id : data.qr_code_img;

    return {
        translation,
        imgMobile: imgMobileId ? `https://api-pallazo.tsx.vn/assets/${imgMobileId}` : undefined,
        qrCodeImg: qrCodeImgId ? `https://api-pallazo.tsx.vn/assets/${qrCodeImgId}` : undefined,
    };
}
