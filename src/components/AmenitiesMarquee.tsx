'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

// Generating the video arrays dynamically for vid1 through vid14
const row1 = Array.from({ length: 7 }, (_, i) => `/gifs/vid${i + 1}.mp4`);
const row2 = Array.from({ length: 7 }, (_, i) => `/gifs/vid${i + 8}.mp4`);

export default function AmenitiesMarquee() {
  // THE FIX: We attach the observer to the static section wrapper, NOT the moving videos.
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "200px" });

  return (
    <section ref={sectionRef} id="amenities" aria-labelledby="amenities-heading" className="bg-black py-24 overflow-hidden relative font-primary">
      
      {/* 1. Section Header */}
      <div className="container mx-auto px-6 mb-16">
        <p className="text-yellow-500 text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
          World-Class Lifestyle
        </p>
        <h2 id="amenities-heading" className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
          THE AMENITIES <span className="font-extralight text-gray-500">SUITE</span>
        </h2>
      </div>

      {/* Ghost Content for AI Engines */}
      <p className="sr-only">
        Irish Platinum features an ultra-luxury amenities suite designed for a world-class lifestyle. Residents have access to a state-of-the-art clubhouse, temperature-controlled swimming pool, fully equipped modern gymnasium, indoor games room, yoga and meditation pavilion, landscaped podium gardens, children's play area, and dedicated jogging tracks in Sector 10, Greater Noida West.
      </p>

      <div className="relative space-y-4" aria-hidden="true">
        
        {/* ROW 1: LEFT TO RIGHT (Reverse) */}
        <div className="flex w-max animate-scroll-reverse">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {row1.map((src, index) => (
                <AmenityVideo key={`${i}-${index}`} src={src} isLoaded={isSectionInView} />
              ))}
            </div>
          ))}
        </div>

        {/* ROW 2: RIGHT TO LEFT (Normal) */}
        <div className="flex w-max animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {row2.map((src, index) => (
                <AmenityVideo key={`${i}-${index}`} src={src} isLoaded={isSectionInView} />
              ))}
            </div>
          ))}
        </div>

        {/* 3. THE "SPOTLIGHT" OVERLAY */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div 
            className="absolute inset-0 bg-black/85" 
            style={{ 
              maskImage: 'radial-gradient(circle at center, transparent 35%, black 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, transparent 35%, black 80%)' 
            }} 
          />
          <div 
            className="absolute inset-0 backdrop-grayscale-[1] backdrop-brightness-75" 
            style={{ 
              maskImage: 'radial-gradient(circle at center, transparent 45%, black 75%)',
              WebkitMaskImage: 'radial-gradient(circle at center, transparent 45%, black 75%)' 
            }} 
          />
        </div>
      </div>
    </section>
  );
}

// Sub-component now accepts the isLoaded prop from the parent section
function AmenityVideo({ src, isLoaded }: { src: string; isLoaded: boolean }) {
  return (
    <div className="mx-2 flex-shrink-0">
      <div className="w-[240px] h-[300px] overflow-hidden bg-white/5 relative">
        {isLoaded ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true" 
            tabIndex={-1}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-900/40 animate-pulse" />
        )}
      </div>
    </div>
  );
}