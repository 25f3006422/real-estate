'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const locations = [
  { time: "05", label: "Hospital", sub: "Nearest Care" },
  { time: "05", label: "Metro/Rapid Rail", sub: "Approved Station" },
  { time: "10", label: "FNG Expressway", sub: "Connectivity Hub" },
  { time: "05", label: "Shopping Malls", sub: "Daily Needs" },
  { time: "30", label: "DLF Malls", sub: "Luxury Retail" },
  { time: "45", label: "Railway Station", sub: "Central Access" },
  { time: "30", label: "Film City", sub: "Proposed Hub" },
  { time: "30", label: "Jewar Airport", sub: "International Link" },
];

const faqs = [
  {
    q: "Why is Irish Platinum considered a high-ROI investment?",
    a: "Located in Sector 10, Greater Noida West, Irish Platinum benefits from the upcoming Metro and 30-minute proximity to Jewar Airport. With premium 3 BHK and 4 BHK configurations ranging from 1390 to 2550 sqft, the project's low-density design ensures high capital appreciation compared to overcrowded sectors."
  },
  {
    q: "What is the track record of the Irish Group?",
    a: "Irish Group has a legacy of three luxurious projects in Greater Noida West: Ratan Pearls (Completed - Sec 16), Irish Pearls (Completed - Sec 1), and Irish Platinum (Ongoing - Sec 10). Their commitment to delivery and Mivan technology construction makes them a trusted name in luxury housing."
  },
  {
    q: "What are the available luxury sizes at Irish Platinum?",
    a: "The project offers expansive layouts optimized for modern families: 3 BHK (1390, 1690, 1925 sqft) and 4 BHK (2150, 2550 sqft). Each unit features premium finishes and wide balconies, catering to those seeking 3 BHK or 4 BHK apartments in Sector 10 Noida Extension."
  },
  {
    q: "How does the connectivity impact lifestyle?",
    a: "Being 10 minutes from the FNG Expressway and 5 minutes from shopping malls and hospitals, residents enjoy a seamless urban lifestyle without sacrificing the privacy of a Platinum-tier gated community."
  }
];

export default function FinalInfoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="location" aria-labelledby="location-heading" className="bg-black py-8 px-4 font-primary">
      <div className="max-w-[1100px] mx-auto">
        
        {/* 1. LOCATION GRID */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Strategic Proximity</p>
            {/* AI SEO FIX: Proper h2 semantic hierarchy */}
            <h2 id="location-heading" className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Zero <span className="text-gray-600 font-extralight italic">Distractions</span>
            </h2>
          </div>
          
          {/* AI SEO FIX: The "Ghost" Sentence for AI Engines. 
              This turns your grid of numbers into a factual paragraph for ChatGPT/Google AI. */}
          <p className="sr-only">
            Irish Platinum in Sector 10, Greater Noida West offers unmatched connectivity: 5 minutes to the nearest hospital, Metro/Rapid Rail, and daily shopping malls; 10 minutes to the FNG Expressway; 30 minutes to DLF Malls, the proposed Film City, and the upcoming Jewar International Airport; and 45 minutes to the central Railway Station.
          </p>

          {/* Added aria-hidden so bots don't read the disconnected grid text */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" aria-hidden="true">
            {locations.map((loc, i) => (
              <div key={i} className="p-6 bg-neutral-900/20 border border-white/5 rounded-3xl group hover:border-yellow-500/20 transition-all text-center">
                <span className="block text-3xl font-black text-white tracking-tighter mb-1 group-hover:text-yellow-500 transition-colors">
                  {loc.time}<span className="text-sm font-light ml-1">Mins</span>
                </span>
                <p className="text-white text-[12px] uppercase tracking-widest font-bold mb-1">{loc.label}</p>
                <p className="text-gray-600 text-[10px] uppercase tracking-tighter">{loc.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. FAQ ACCORDION (With Schema.org Microdata) */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-[1px] w-12 bg-yellow-500/30" />
            {/* AI SEO FIX: Semantic h2 for the FAQ section */}
            <h2 className="text-[10px] tracking-[0.5em] uppercase text-white font-bold whitespace-nowrap">
              Investment Intelligence FAQ
            </h2>
            <div className="h-[1px] w-12 bg-yellow-500/30" />
          </div>

          {/* AI SEO FIX: Added itemScope and itemType for FAQPage Schema directly into HTML */}
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="border-b border-white/5" 
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                {/* AI SEO FIX: Wrapped button in an h3 for document outline */}
                <h3 className="w-full m-0 p-0">
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    {/* itemProp="name" flags this as the question */}
                    <span itemProp="name" className={`text-xs md:text-sm uppercase tracking-widest font-bold transition-colors ${openIndex === i ? 'text-yellow-500' : 'text-gray-400 group-hover:text-white'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-500 ${openIndex === i ? 'rotate-180 text-yellow-500' : 'text-gray-600'}`} />
                  </button>
                </h3>
                
                {/* AI SEO FIX: Removed AnimatePresence. The DOM node now stays alive permanently. 
                    Height drops to 0 when closed, but the HTML remains intact for crawlers. */}
                <motion.div 
                  id={`faq-answer-${i}`}
                  initial={false}
                  animate={{ 
                    height: openIndex === i ? 'auto' : 0, 
                    opacity: openIndex === i ? 1 : 0 
                  }}
                  className="overflow-hidden"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  {/* itemProp="text" flags this as the answer */}
                  <div itemProp="text" className="pb-8 text-[10px] md:text-xs text-gray-500 leading-relaxed uppercase tracking-wide">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}