import React from 'react';
import EventsCarousel from '@/components/common/EventsCarousel';
import { getEventsApi } from '@/lib/api-directus';

export interface EventCardData {
  id: string | number;
  image: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  desc: string;
}

interface EventsSectionProps {
  lang?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

const EventsSection = async ({
  lang = 'en',
  title = "WHAT'S ON AT PALAZZO",
  ctaText = "EXPLORE OUR FULL EVENT CALENDAR",
  ctaHref = "#"
}: EventsSectionProps) => {
  const data = await getEventsApi(lang);

  const events: EventCardData[] = (data || []).map((item: any) => {
    const translation = item.translations?.[0] || {};
    return {
      id: item.id,
      image: item.banner ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://api-pallazo.tsx.vn'}/assets/${item.banner.id}` : '/path-to-default-event.jpg',
      title: translation.title || '',
      dateStart: item.start_date || '',
      dateEnd: item.end_date || '',
      desc: translation.description || translation.content || ''
    };
  });

  if (events.length === 0) return null;

  return (
    <section className="relative w-full mx-auto bg-[#F9F7ED]">
      <EventsCarousel
        slides={events}
        title={title}
        ctaText={ctaText}
        ctaHref={ctaHref}
      />
    </section>
  );
};

export default EventsSection;
