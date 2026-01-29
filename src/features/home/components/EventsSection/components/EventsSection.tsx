import React from 'react';
import Image from 'next/image';
import EventsCarousel from '@/components/common/EventsCarousel';

export interface EventCardData {
  id: number;
  image: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  desc: string;
}

interface EventsSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  events?: EventCardData[];
}

const defaultEvents: EventCardData[] = [
  {
    id: 1,
    image: 'https://api-pallazo.tsx.vn/assets/e2014d83-819b-426d-b8d0-5f4b45a7724d',
    title: 'UNMISSABLE UPCOMING EVENTS',
    dateStart: '19/7/2021',
    dateEnd: '29/7/2021',
    desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring...',
  },
  {
    id: 2,
    image: 'https://api-pallazo.tsx.vn/assets/a7bcff57-a5f5-4c07-8e7c-71639a1731f9',
    title: 'CELEBRATING 21 YEARS OF PALAZZO',
    dateStart: '10/8/2021',
    dateEnd: '20/8/2021',
    desc: 'Join us for a grand celebration marking two decades of excellence and luxury gaming experiences...',
  },
  {
    id: 3,
    image: 'https://api-pallazo.tsx.vn/assets/b8e65526-6d03-4b93-9318-7516425cd255',
    title: 'GRAND TOURNAMENT 2025',
    dateStart: '01/9/2025',
    dateEnd: '15/9/2025',
    desc: 'The biggest poker tournament of the year is here. Compete with the best for the ultimate prize...',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/event4/500/600',
    title: 'LUXURY GALA NIGHT',
    dateStart: '05/10/2025',
    dateEnd: '05/10/2025',
    desc: 'An evening of elegance, fine dining, and exclusive entertainment for our VIP guests...',
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/event5/500/600',
    title: 'LIVE MUSIC FESTIVAL',
    dateStart: '12/11/2025',
    dateEnd: '14/11/2025',
    desc: 'Experience live performances from top artists around the world right here at Palazzo...',
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/event6/500/600',
    title: 'EXCLUSIVE MEMBER REWARDS',
    dateStart: '01/12/2025',
    dateEnd: '31/12/2025',
    desc: 'Special rewards and bonuses for our loyal members throughout the holiday season...',
  },
];

const EventsSection = ({
  title = "WHAT'S ON AT PALAZZO",
  ctaText = "EXPLORE OUR FULL EVENT CALENDAR",
  ctaHref = "#",
  events = defaultEvents
}: EventsSectionProps) => {
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
