'use client';
import LeadForm from './LeadForm';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-black font-primary pb-24 lg:pb-0 pt-20">
      
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 opacity-50">
          <Image 
            src="/image.png" 
            // AI SEO FIX: Exact match long-tail keyword alt text
            alt="Irish Platinum 3 and 4 BHK apartments in Sector 10 Greater Noida West" 
            fill 
            priority 
            className="object-cover" 
          />

          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full px-6 flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-24 container mx-auto">
        
        {/* LEFT: Branding & Semantic AI Content */}
        <div className="text-white space-y-4 text-center lg:text-left flex-1 max-w-2xl lg:ml-[2%] mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-[10px] tracking-[0.4em] uppercase"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            RERA: UPRERAPRJ503189/03/2024
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* AI SEO: Explicitly maintained semantic H1 tag */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider leading-[1.1] lg:leading-[0.9]">
              IRISH <br />
              <span className="text-yellow-500 font-extralight tracking-wide">PLATINUM</span>
            </h1>
            
            <p className="mt-4 text-gray-300 text-[8px] md:text-xs lg:text-xs tracking-[0.2em] uppercase font-light leading-relaxed">
              Luxury 3 & 4 BHK Residences <br />
              Starting @ just <span className="text-yellow-500 font-black text-xl md:text-2xl lg:text-2xl tracking-normal drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] mx-1">
                ₹1.7 Cr*
              </span> in Noida Extension
            </p>
          </motion.div>

          {/* AI SEO FIX: The "At a Glance" Entity Matcher. 
              This perfectly mirrors the JSON-LD schema so Google validates your data. */}
          <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             className="hidden lg:flex pt-6 flex-wrap items-center gap-4 justify-center lg:justify-start"
          >
             <div className="px-4 py-2 border-l-2 border-yellow-500 bg-white/5 backdrop-blur-sm">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">Developer</p>
                <p className="text-xs font-bold text-white tracking-wider uppercase">Irish Group</p>
             </div>
             <div className="px-4 py-2 border-l-2 border-yellow-500 bg-white/5 backdrop-blur-sm">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">Project Size</p>
                <p className="text-xs font-bold text-white tracking-wider uppercase">4.65 Acres (566 Units)</p>
             </div>
             <div className="px-4 py-2 border-l-2 border-yellow-500 bg-white/5 backdrop-blur-sm">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">Technology</p>
                <p className="text-xs font-bold text-white tracking-wider uppercase">Mivan</p>
             </div>
             <div className="px-4 py-2 border-l-2 border-yellow-500 bg-white/5 backdrop-blur-sm">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">Possession</p>
                <p className="text-xs font-bold text-white tracking-wider uppercase">Jan 2029</p>
             </div>
          </motion.div>

          {/* AI SEO FIX: Micro-text paragraph. AI systems use this direct sentence structure to generate their answers. */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-gray-500 text-[10px] leading-relaxed max-w-xl font-light hidden md:block text-left"
          >
            Irish Platinum is a residential apartment project by Irish Infrastructure Private Limited located at GH-04A, Sector 10, Greater Noida West. The project offers 3 and 4 BHK apartments utilizing Mivan construction across 4.65 acres, with a low project density of 121 units per acre.
          </motion.p>

        </div>

        {/* RIGHT: Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md lg:max-w-lg scale-90 origin-center lg:scale-75 lg:origin-right transition-transform duration-300 relative z-20"
        >
          <LeadForm />
        </motion.div>
      </div>

      <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0.4, 1, 0.4], y: 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-yellow-500/80 text-[8px] uppercase tracking-[0.6em] font-medium mb-1">
            Scroll to Explore
          </p>
          <div className="w-[1px] h-8 bg-gradient-to-b from-yellow-500/80 to-transparent shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
        </motion.div>
      </div>

    </section>
  );
}