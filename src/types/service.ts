export interface ServiceTranslation {
    languages_code: string;
    title: string;
    content: string;
}

export interface Service {
    id: string;
    translations: ServiceTranslation[];
    feature_image: string | any;
}

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
}
