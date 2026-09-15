'use client';
import { motion, Variants, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Sub-component for the climbing number effect
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      // 2 seconds duration, fast 'out' easing for that premium snap
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    // AI SEO FIX: The bot reads the aria-label immediately (e.g., "15%+").
    // We wrap the animated part in aria-hidden="true" so bots ignore the "0" state.
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
    </span>
  );
}

export default function FeatureNarrative() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    // AI SEO FIX: Added an ID for semantic anchor linking
    <section id="project-overview" className="bg-black py-24 px-6 relative overflow-hidden font-primary">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-yellow-500/5 blur-[120px] rounded-full" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="space-y-3">
          {/* AI SEO FIX: Fixed "Treasue" typo */}
          <h2 className="text-yellow-500 text-xs tracking-[0.2em] uppercase font-semibold">
            The Treasure Chest of Living
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
            WHERE LEGACY MEETS <br /> 
            <span className="font-extralight text-gray-400">MODERN PRECISION</span>
          </h1>
        </motion.div>

        {/* Text Content */}
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <motion.p variants={itemVariants} className="text-gray-400 font-light leading-relaxed text-lg border-l border-white/10 pl-6">
            Irish Platinum isn't just a residence; it's a financial fortress. Situated in <span className="text-white font-medium">Sector 10, Greater Noida West</span>, this project ensures your investment appreciates as fast as the skyline grows.
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-400 font-light leading-relaxed text-lg border-l border-white/10 pl-6">
            With a focus on <span className="text-white font-medium">high-yield returns</span> and low-density design, we provide 3 & 4 BHK residences that redefine the platinum standard.
          </motion.p>
        </div>

        {/* AI SEO FIX: Added a screen-reader-only paragraph to feed exact facts to AI */}
        <p className="sr-only">
          Irish Platinum in Sector 10 offers an expected ROI of 15% per annum, featuring 75% open area and built on 100% paid-up land.
        </p>

        {/* STATS SECTION WITH ANIMATED NUMBERS */}
        <motion.div 
          variants={itemVariants}
          className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5"
        >
          <div>
            <p className="text-3xl md:text-5xl font-black text-white">
              <Counter value={15} suffix="%+" />
            </p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Expected ROI P.A.</p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-black text-white">
              <Counter value={75} suffix="%" />
            </p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Open Area</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl md:text-5xl font-black text-white">
              <Counter value={100} suffix="%" />
            </p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Paid Up Land</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}