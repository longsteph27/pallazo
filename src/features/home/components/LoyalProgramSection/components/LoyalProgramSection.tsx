'use client';

import LuxuryButton from '@/components/ui/LuxuryButton';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TransparentButton from '@/components/ui/TransparentButton';

interface LoyalProgramSectionProps {
  title?: string;
  description?: string;
  image?: {
    id: string;
    filename_disk: string;
  };
}

function LoyalProgramSection({ title, description, image }: LoyalProgramSectionProps) {
  const bgImage = image
    ? `https://api-pallazo.tsx.vn/assets/${image.id}`
    : undefined;

  return (
    <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden bg-[#3e322b]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {bgImage && (
          <Image
            src={bgImage}
            alt={title || "Background"}
            fill
            className="object-cover opacity-80 mix-blend-overlay"
            priority
          />
        )}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Animated Curtain Overlays - Reveal from sides to center */}
      {/* Left curtain - covers left half and shrinks to the middle (right origin) */}
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-1/2 bg-[#3e322b] z-[5]"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
        style={{ transformOrigin: 'right' }}
      />
      {/* Right curtain - covers right half and shrinks to the middle (left origin) */}
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-[#3e322b] z-[5]"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
        style={{ transformOrigin: 'left' }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full h-full pb-20">

        {/* Text Group */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className=" text-2xl md:text-4xl lg:text-5xl font-serif text-[#F9F7ED] tracking-wide leading-tight uppercase">
            {title && (
              <span dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }} />
            )}
          </h2>
          <p className="text-[#F9F7ED]/90 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            {description && (
              <span dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </p>
        </motion.div>

        {/* Card Interaction Visual Placeholder */}
        <div className="relative w-full h-[300px] md:h-[400px] mb-8 flex flex-col items-center">
          {/* The vertical line effect */}
          <motion.div
            className="absolute top-[-50px] bottom-[60px] w-[1px] bg-gradient-to-b from-transparent via-[#D4C5A6]/50 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ transformOrigin: 'top' }}
          />
        </div>


        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <TransparentButton>
            See Detail
          </TransparentButton>
        </motion.div>
      </div>
    </section>
  );
}

export default LoyalProgramSection;

