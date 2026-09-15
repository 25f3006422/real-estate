'use client';
import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="w-full max-w-6xl backdrop-blur-xl bg-black/60 border border-yellow-500/30 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-500 relative z-50">
          
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image 
                src="/irish.png" 
                // AI SEO FIX: Explicitly name the Corporate Entity in the alt text
                alt="Irish Infrastructure Private Limited Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="text-lg font-primary font-medium text-white tracking-[0.15em] hidden sm:block uppercase">
              Irish <span className="text-yellow-500 font-black">Platinum</span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-gray-300 font-light font-primary">
            {['amenities', 'layout', 'paymentplan'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="hover:text-yellow-500 transition-all hover:tracking-[0.4em]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:+918920840946"
              // AI SEO FIX: Added aria-label for accessibility/crawlers
              aria-label="Call Irish Platinum Sales"
              className="flex items-center gap-2 px-6 py-2.5 bg-yellow-500 text-black font-black font-primary uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all active:scale-95 shadow-lg"
            >
              <Phone size={12} fill="currentColor" /> <span className="hidden sm:inline">Call Now</span><span className="sm:hidden">Call</span>
            </a>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-yellow-500 transition-colors z-50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-menu" 
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-3xl border border-yellow-500/20 rounded-[2rem] p-8 shadow-2xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 font-primary">
                {['amenities', 'layout', 'paymentplan'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    onClick={handleLinkClick}
                    className="text-white text-xs uppercase tracking-[0.3em] hover:text-yellow-500 transition-colors py-2"
                  >
                    {item}
                  </a>
                ))}
                <div className="w-12 h-[1px] bg-white/10 my-2" />
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">
                  Sector 10 • Greater Noida West
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}