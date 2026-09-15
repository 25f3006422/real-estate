'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeadForm from './LeadForm';
import Image from 'next/image';

const plans = [
  { id: "site", category: "Site Plan", title: "Site Layout", size: "Master Plan", img: "/plans/site-plan.png" },
  { id: "3BHK-1390", category: "3 BHK", title: "3 BHK + 2T", size: "1390 sqft", img: "/plans/3bhk-1390.jpg" },
  { id: "3BHK-1690", category: "3 BHK", title: "3 BHK + 3T", size: "1690 sqft", img: "/plans/3bhk-1690.jpg" },
  { id: "3BHK-1925", category: "3 BHK", title: "3 BHK + 4T + Servant", size: "1925 sqft", img: "/plans/3bhk-1925.jpg" },
  { id: "4BHK-2150", category: "4 BHK", title: "4 BHK + 4T", size: "2150 sqft", img: "/plans/4bhk-2150.jpg" },
  { id: "4BHK-2550", category: "4 BHK", title: "4 BHK + 5T + Servant + Pooja", size: "2550 sqft", img: "/plans/4bhk-2550.jpg" },
];

export default function FloorPlanSection() {
  const [activeTab, setActiveTab] = useState('3 BHK');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const filteredPlans = plans.filter(p => p.category === activeTab);
  const isSingleCard = filteredPlans.length === 1;

  return (
    <section id="layout" aria-labelledby="layout-heading" className="bg-black py-5 md:py-5 px-4 font-primary overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 id="layout-heading" className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-10 whitespace-nowrap">
            Layout <span className="text-gray-600 font-extralight italic">Plans</span>
          </h2>
          
          {/* Tabs Navigation */}
          <div className="flex bg-neutral-900/50 p-1.5 rounded-full border border-white/5 backdrop-blur-xl z-10" role="tablist">
            {['Site Plan', '3 BHK', '4 BHK'].map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 md:px-10 py-3 rounded-full text-sm md:text-m tracking-[0.2em] uppercase transition-all duration-500 whitespace-nowrap font-bold ${
                  activeTab === tab ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* AI SEO FIX: The "Ghost" Table. 
            This ensures that even if the 4BHK tab isn't active, the crawler still indexes your 4BHK data. */}
        <div className="sr-only">
          <table>
            <caption>Irish Platinum Apartment Configurations and Super Area</caption>
            <thead>
              <tr>
                <th>Configuration</th>
                <th>Super Area (sqft)</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={`sr-${plan.id}`}>
                  <td>{plan.title}</td>
                  <td>{plan.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* The Grid / Track */}
        <div className={`flex gap-8 md:gap-10 pb-10 no-scrollbar snap-x snap-mandatory overflow-x-auto ${isSingleCard ? 'justify-center' : 'justify-start lg:justify-center'}`}>
          <AnimatePresence mode='wait'>
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className={`flex-shrink-0 snap-center bg-neutral-900/20 border border-white/5 rounded-[32px] overflow-hidden ${isSingleCard ? 'w-[90vw] md:w-[450px]' : 'w-[85vw] md:w-[360px]'}`}
              >
                {/* IMAGE CONTAINER */}
                <div className="aspect-square bg-neutral-800/50 relative border-b border-white/5">
                  <Image 
                    src={plan.img} 
                    // AI SEO FIX: Upgraded Alt Text to act as long-tail keywords
                    alt={`Irish Platinum ${plan.title} Floor Plan - ${plan.size} in Sector 10`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-6 md:p-8 hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                {/* Content Area */}
                <div className="p-8 text-center">
                  {/* AI SEO FIX: Maintained semantic hierarchy by using h3 since the section header is h2 */}
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    {plan.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-8 font-medium">
                    {plan.size}
                  </p>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setModalOpen(true)} 
                      aria-label={`View details for ${plan.title}`}
                      className="flex-1 py-4 border border-white/10 text-white text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase rounded-xl hover:bg-white/10 transition-all"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => { setSelectedPlan(`${plan.category} - ${plan.size.split(' ')[0]}`); setModalOpen(true); }} 
                      aria-label={`Enquire about ${plan.title}`}
                      className="flex-1 py-4 bg-yellow-500 text-black font-black text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-xl hover:bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all"
                    >
                      Interested
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            key="lead-modal"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          >
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} className="relative w-full max-w-sm">
              <button 
                onClick={() => setModalOpen(false)} 
                aria-label="Close form"
                className="absolute -top-12 right-0 text-white/60 text-sm uppercase tracking-widest hover:text-white transition-colors"
              >
                Close ×
              </button>
              <LeadForm preSelect={selectedPlan} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}