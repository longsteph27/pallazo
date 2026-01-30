import BannerSlider from '@/components/common/Banner';
import AppPreview from '@/components/AppPreview/AppPreview';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import WelcomeSection from '@/features/home/components/WelcomeSection/WelcomeSection';
import EventsSection from '@/features/home/components/EventsSection/components/EventsSection';
import HighlightServicesSection from '@/features/home/components/HighlightServicesSection';
import LoyalProgramSection from '@/features/home/components/LoyalProgramSection/components/LoyalProgramSection';
import ScrollReveal from '@/components/common/ScrollReveal';
import { getHomePageData } from '@/api/home';
import { getServices } from '@/api/services';
import MarqueeBanner from '@/features/home/components/HighlightServicesSection/components/MarqueeBanner';
import { HighlightjackpotStats } from '@/components/common/Jackpot/HighlightjackpotStats';
import { getMobileAppData } from '@/api/mobile-app';

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams?.lang as string) || 'en';
  const [homeData, servicesData] = await Promise.all([
    getHomePageData(lang),
    getServices(1, 8, lang)
  ]);

  // Construct banner URLs from Directus files
  const mappedBanners = homeData?.banners?.map(b =>
    `https://api-pallazo.tsx.vn/assets/${b.directus_files_id.id}`
  ) || [];

  return (
    <div className="min-h-screen bg-[#F9F7ED]">
      {/* <Header /> */}
      <ScrollReveal direction="none" duration={1.2}>
        <BannerSlider
          images={mappedBanners}
          title={homeData?.translation?.title_banner}
        />
      </ScrollReveal>

      <WelcomeSection
        title={homeData?.translation?.title}
        content={homeData?.translation?.content}
      />

      <section className="relative w-full h-auto pb-20 bg-[#F9F7ED] flex items-center justify-center">
        <HighlightjackpotStats
          title="HIGHLIGHT JACKPOT"
          leftLabel="TOTAL WINS - ALL CASINOS"
          leftAmount="546,990.123"
          leftSubtitle="OVER THE LAST YEAR"
          rightLabel="TOTAL WINS - ALL CASINOS"
          rightAmount="546,990.123"
          rightSubtitle="OVER THE LAST YEAR"
          buttonText="VIEW HISTORY JACKPOT"
        />
      </section>

      <ScrollReveal>
        <EventsSection lang={lang} />
      </ScrollReveal>

      <HighlightServicesSection
        title={homeData?.translation?.title_privileges}
        description={homeData?.translation?.description_privileges}
        initialServices={servicesData.items}
        totalCount={servicesData.total}
      />

      <ScrollReveal>
        <MarqueeBanner />
      </ScrollReveal>

      <ScrollReveal>
        <LoyalProgramSection
          title={homeData?.translation?.membership_title}
          description={homeData?.translation?.membership_des}
          image={homeData?.membershipImage}
        />
      </ScrollReveal>

      <ScrollReveal>
        <AppPreview lang={lang} />
      </ScrollReveal>
    </div>
  );
}
