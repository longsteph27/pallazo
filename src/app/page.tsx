'use client';

import BannerSlider from '@/components/common/Banner';
import AppPreview from '@/components/AppPreview/AppPreview';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import WelcomeSection from '@/features/home/components/WelcomeSection/WelcomeSection';
import { BannerSvg } from '@/components/icons/BannerSvg';
import EventsSection from '@/features/home/components/EventsSection/components/EventsSection';
import HighlightServicesSection from '@/features/home/components/HighlightServicesSection';
import LoyalProgramSection from '@/features/home/components/LoyalProgramSection/components/LoyalProgramSection';
import ScrollReveal from '@/components/common/ScrollReveal';


export default function Home() {
  const banners = [
    "https://api-pallazo.tsx.vn/assets/81729b5c-4340-4df2-a39c-85153245f8f5",
    "https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d"
  ];

  const jackpotData = {
    left: {
      title: "TOTAL WINS - ALL CASINOS",
      value: "546.990.123",
      subtitle: "OVER THE LAST YEAR",
    },
    right: {
      title: "TOTAL WINS - ALL CASINOS",
      value: "546.990.123",
      subtitle: "OVER THE LAST YEAR",
    },
    buttonLabel: "VIEW HISTORY JACKPOT"
  };

  return (
    <div className="min-h-screen bg-[#F9F7ED]">
      {/* <Header /> */}
      <ScrollReveal direction="none" duration={1.2}>
        <BannerSlider
          images={banners}
          title="BEYOND PLAY."
          subtitle="INTO PRESTIGE."
        />
      </ScrollReveal>

      <ScrollReveal>
        <WelcomeSection />
      </ScrollReveal>

      <ScrollReveal>
        <section className="pb-20 bg-[#F9F7ED] flex items-center justify-center">
          <BannerSvg
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
      </ScrollReveal>

      <ScrollReveal>
        <EventsSection />
      </ScrollReveal>

      <ScrollReveal>
        <HighlightServicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <LoyalProgramSection />
      </ScrollReveal>

      <ScrollReveal>
        <AppPreview />
      </ScrollReveal>
    </div>
  );
}
