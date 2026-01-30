
export interface HomeTranslation {
    title: string;
    content: string;
    membership_title: string;
    membership_des: string;
    title_privileges: string;
    description_privileges: string;
    title_banner: string;
}

export interface HomeBannerFile {
    directus_files_id: {
        id: string;
        filename_disk: string;
        width?: number;
        height?: number;
        title?: string; // Sometimes file objects have title/description
    };
}

export interface HomeData {
    id: string;
    // The 'translations' array from Directus. 
    // We usually map this to a single flat object for the frontend, 
    // but the raw response is an array.
    translations: HomeTranslation[];

    banners: HomeBannerFile[];
    membership_section_img?: {
        id: string;
        filename_disk: string;
    };
}

// Flat structure for easier usage in components
export interface HomePageProps {
    translation?: HomeTranslation;
    banners: HomeBannerFile[];
    membershipImage?: {
        id: string;
        filename_disk: string;
    };
}
