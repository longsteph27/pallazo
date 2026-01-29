import HeroSection from './components/HeroSection';
import { DecorativeArcSvg, OrnamentalCenterSvg } from './assets/icons';
import ContentCard from '@/components/common/ContentCard';
import CoreValuesSection from './components/CoreValuesSection';
import BannerSlider from '@/components/common/Banner';
import ResponsibleGamblingSection from '../gaming/components/ResponsibleGamblingSection';
import { getAboutUsApi } from '@/lib/api-directus';
import { getI18n } from '@/lib/i18n';

interface AboutUsPageProps {
    lang?: string;
}

export default async function AboutUsPage({ lang = 'en' }: AboutUsPageProps) {
    const data = await getAboutUsApi(lang);
    const t = getI18n(lang);

    // Directus readItems returns an array, but about_us is a singleton
    const aboutUsData = Array.isArray(data) ? data[0] : data;
    const translation = aboutUsData?.translations?.[0] || {};

    const content = {
        title: translation.title || "A LEGACY OF DISTINCTION. A FUTURE OF PRESTIGE.",
    };

    const coreValues = translation.core_value?.map((v: any) => ({
        title: v.title,
        description: v.content
    })) || [];

    const bannerImages = aboutUsData?.banners?.map((b: any) =>
        `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${b.directus_files_id.id}`
    ) || ["https://api-pallazo.tsx.vn/assets/5dfa564a-17ae-4605-9e61-65b36a032a01"];

    return (
        <main className="min-h-screen">
            <BannerSlider
                images={bannerImages}
                title="ABOUT US"
                subtitle=""
            />
            <div className="relative lg:max-w-[1230px] md:max-w-[768px] max-w-[512px] mx-auto space-y-24">

                <ContentCard
                    title={content.title}
                    htmlContent={translation.content}
                />
                <CoreValuesSection
                    values={coreValues}
                    title={t.coreValuesTitle}
                    subtitle={t.coreValuesSubtitle}
                />
            </div>
            <ResponsibleGamblingSection
                content={translation.content_responsible_gambling_section}
                title={t.responsibleGamblingTitle}
                buttonLabel={t.ctaButton}
            />
        </main>
    );
}
