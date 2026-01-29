import { PallazzoTextLogoSvg } from '@/components/icons';
import { motion } from 'framer-motion';

function WelcomeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        <div
          className="relative custom-card rounded-[10px] py-12 md:py-16 overflow-hidden bg-card-gradient"
        >
          {/* Content - Single Column Centered */}
          <motion.div
            className="relative z-10 max-w-[800px] mx-auto text-center px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-[20px] md:text-[40px] font-bold uppercase leading-tight tracking-normal md:tracking-[2px] text-[#1a1a1a] mb-6"
            >
              WELCOME TO THE
              <br />
              GAMING WONDERLAND!
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-sans text-sm leading-[1.8] text-[#4a4a4a] md:text-base mb-6"
            >
              Tucked within the iconic Sheraton Saigon Grand Opera Hotel, Palazzo Club is Ho Chi Minh City's boutique gaming sanctuary where every visit is not just a game, but a moment of belonging.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sans text-sm leading-[1.8] text-[#4a4a4a] md:text-base mb-8"
            >
              Built upon over 20 years of legacy, Palazzo Club enters a bold new chapter. We have been renovated, reimagined, and transformed from a place to play to a place to belong. Here, the thrill of winning is just the beginning. The true jackpot lies in how we make you feel: seen, celebrated, and unforgettable.
            </motion.p>

            <motion.button
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#AC9666] px-4 md:px-8 py-2 md:py-3 font-sans text-sm font-medium uppercase text-[#AC9666] transition-all duration-300 hover:bg-black/10"
            >
              Show more
              <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1769 0L0.200007 0C0.0179445 0 -0.0694298 0.223471 0.0643501 0.34696L6.05282 5.87478C6.12943 5.9455 6.24752 5.9455 6.32413 5.87478L12.3126 0.346961C12.4464 0.223472 12.359 0 12.1769 0Z" fill="#AC9666" />
              </svg>

            </motion.button>
          </motion.div>
        </div>
        <div className=" w-full flex justify-center">
          <PallazzoTextLogoSvg className="w-[90%] md:w-full " />
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection

