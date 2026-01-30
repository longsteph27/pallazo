export interface MobileAppTranslation {
    title: string;
    description: string;
}

export interface MobileAppData {
    id: string;
    img_mobile: string | { id: string } | null;
    qr_code_img: string | { id: string } | null;
    translations: MobileAppTranslation[];
}

export interface MobileAppProps {
    translation?: MobileAppTranslation;
    imgMobile?: string;
    qrCodeImg?: string;
}
