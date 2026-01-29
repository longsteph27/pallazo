import LuxuryButton from '@/components/ui/LuxuryButton';
import Image from 'next/image';

function LoyalProgramSection() {
  return (
    <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden bg-[#3e322b]">
      {/* Background Image Placeholder - Replace with actual image when available */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg-lifestyle.jpg" // Placeholder path (user needs to provide asset)
          alt="Lifestyle Background"
          fill
          className="object-cover opacity-80 mix-blend-overlay"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full h-full pb-20">

        {/* Text Group */}
        <div className="mb-12 md:mb-20 space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif text-[#F9F7ED] tracking-wide leading-tight">
            MORE THAN POINTS, IT’S A LIFESTYLE
          </h2>
          <p className="text-[#F9F7ED]/90 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Palazzo Club’s membership tiers offer tailored rewards, insider experiences, and prestige that lasts.<br className="hidden md:block" />
            Earn points while you play and unlock real-world perks, from flight credits to fine dining.
          </p>
        </div>

        {/* Card Interaction Visual Placeholder (Mimicking the hand holding card) */}
        {/* Ideally this whole section is a background image, but we can structure the layout for the button placement */}
        <div className="relative w-full h-[300px] md:h-[400px] mb-8 flex flex-col items-center">
          {/* The vertical line effect */}
          <div className="absolute top-[-50px] bottom-[60px] w-[1px] bg-gradient-to-b from-transparent via-[#D4C5A6]/50 to-transparent"></div>
        </div>


        {/* CTA Button */}
        <button className="outline-double outline-2 outline-[#D2C29E] outline-offset-2 rounded-[6px] px-4 py-2 text-white">
          See Detail
        </button>
      </div>
    </section>
  );
}

export default LoyalProgramSection;

