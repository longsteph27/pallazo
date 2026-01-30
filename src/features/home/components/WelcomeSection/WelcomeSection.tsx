'use client';

import { useState, useRef, useEffect } from 'react';
import { PallazzoTextLogoSvg } from '@/components/icons';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeSectionProps {
  title?: string;
  content?: string;
}

function WelcomeSection({ title, content }: WelcomeSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsShowMore, setNeedsShowMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const checkTruncation = () => {
      if (contentRef.current) {
        // Compare scrollHeight against our collapsed height (11.5rem = 184px)
        const { scrollHeight } = contentRef.current;
        setNeedsShowMore(scrollHeight > 185);
      }
    };

    const observer = new ResizeObserver(() => {
      checkTruncation();
    });

    observer.observe(contentRef.current);

    // Initial check
    checkTruncation();

    return () => {
      observer.disconnect();
    };
  }, []);


  const revealVariants = {
    hidden: {
      clipPath: 'inset(0% 50% 0% 50%)',
      opacity: 0,
      scaleX: 0.8
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 1.4,
        ease: [0.25, 1, 0.5, 1] as any,
        staggerChildren: 0.3,
        delayChildren: 0.4
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as any,
      },
    },
  };

  return (
    <section className="bg-[#F9F7ED] pt-20 relative overflow-hidden">
      {/* PALAZZO Background Logo */}
      <div className="mx-auto max-w-[1222px] px-4">
        {/* Card Container with SVG-based styling */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={revealVariants}
          className="relative custom-card rounded-[10px] py-12 md:py-16 overflow-hidden bg-card-gradient"
        >
          {/* Content - Single Column Centered */}
          <motion.div
            className="relative z-10 max-w-[800px] mx-auto text-center px-4"
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-[20px] md:text-[40px] font-bold uppercase leading-tight tracking-normal md:tracking-[2px] text-[#1a1a1a] mb-6"
            >
              {title && (
                <span dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }} />
              )}
            </motion.h2>

            <div className="relative">
              <motion.div
                ref={contentRef}
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : '11.5rem',
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                style={{
                  maskImage: !isExpanded && needsShowMore
                    ? 'linear-gradient(to bottom, black 60%, transparent 100%)'
                    : 'none',
                  WebkitMaskImage: !isExpanded && needsShowMore
                    ? 'linear-gradient(to bottom, black 60%, transparent 100%)'
                    : 'none',
                }}
                className="overflow-hidden font-sans text-sm leading-[1.8] text-[#4a4a4a] md:text-base text-center"
              >
                <div className="pb-4">
                  {content && (
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  )}
                </div>
              </motion.div>
            </div>

            {/* Show More / Show Less Button */}
            {needsShowMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 inline-flex items-center gap-2 rounded-[10px] border border-[#AC9666] px-4 md:px-8 py-2 md:py-3 font-sans text-sm font-medium uppercase text-[#AC9666] transition-all duration-300 hover:bg-[#AC9666]/10"
              >
                {isExpanded ? 'Show less' : 'Show more'}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1769 0L0.200007 0C0.0179445 0 -0.0694298 0.223471 0.0643501 0.34696L6.05282 5.87478C6.12943 5.9455 6.24752 5.9455 6.32413 5.87478L12.3126 0.346961C12.4464 0.223472 12.359 0 12.1769 0Z" fill="#AC9666" />
                  </svg>
                </motion.div>
              </button>
            )}
          </motion.div>
        </motion.div>
        <div className=" w-full flex justify-center">
          <PallazzoTextLogoSvg className="w-[90%] md:w-full " />
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection

