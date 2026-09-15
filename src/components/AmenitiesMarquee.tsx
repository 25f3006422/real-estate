'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

// Generating the video arrays dynamically for vid1 through vid14
const row1 = Array.from({ length: 7 }, (_, i) => `/gifs/vid${i + 1}.mp4`);
const row2 = Array.from({ length: 7 }, (_, i) => `/gifs/vid${i + 8}.mp4`);

export default function AmenitiesMarquee() {
  return (
    // AI SEO FIX: Added aria-labelledby to link the section to its heading
    <section id="amenities" aria-labelledby="amenities-heading" className="bg-black py-24 overflow-hidden relative font-primary">
      
      {/* 1. Section Header */}
      <div className="container mx-auto px-6 mb-16">
        {/* AI SEO FIX: Changed from <h2> to <p> to maintain a strict document outline */}
        <p className="text-yellow-500 text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
          World-Class Lifestyle
        </p>
        {/* AI SEO FIX: Upgraded to <h2> for semantic structure */}
        <h2 id="amenities-heading" className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
          THE AMENITIES <span className="font-extralight text-gray-500">SUITE</span>
        </h2>
      </div>

      {/* AI SEO FIX: The "Ghost" Content for AI Engines.
          Update this list with the EXACT amenities your videos represent. */}
      <p className="sr-only">
        Irish Platinum features an ultra-luxury amenities suite designed for a world-class lifestyle. Residents have access to a state-of-the-art clubhouse, temperature-controlled swimming pool, fully equipped modern gymnasium, indoor games room, yoga and meditation pavilion, landscaped podium gardens, children's play area, and dedicated jogging tracks in Sector 10, Greater Noida West.
      </p>

      {/* 2. The Focus Track Wrapper 
          AI SEO FIX: Added aria-hidden="true". This tells bots "These videos are just decorative background, ignore them." 
          This forces the AI to read your dense 'sr-only' text above instead of getting confused by 14 raw video tags. 
      */}
      <div className="relative space-y-4" aria-hidden="true">
        
        {/* ROW 1: LEFT TO RIGHT (Reverse) */}
        <div className="flex w-max animate-scroll-reverse">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {row1.map((src, index) => (
                <AmenityVideo key={`${i}-${index}`} src={src} />
              ))}
            </div>
          ))}
        </div>

        {/* ROW 2: RIGHT TO LEFT (Normal) */}
        <div className="flex w-max animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {row2.map((src, index) => (
                <AmenityVideo key={`${i}-${index}`} src={src} />
              ))}
            </div>
          ))}
        </div>

        {/* 3. THE "SPOTLIGHT" OVERLAY 
            We use two large side-panels to force grayscale and darkness
            leaving only a 300px window in the center for color.
        */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Layer 1: The Darkening Vignette (Now with a wider clear core) */}
          <div 
            className="absolute inset-0 bg-black/85" 
            style={{ 
              maskImage: 'radial-gradient(circle at center, transparent 35%, black 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, transparent 35%, black 80%)' 
            }} 
          />

          {/* Layer 2: The Grayscale Focus (Wider color window) */}
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

function AmenityVideo({ src }: { src: string }) {
  const ref = useRef(null);
  
  // PERFORMANCE FIX: This hook tells React: "Only trigger the video load when this element is 200px away from the viewport"
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className="mx-2 flex-shrink-0">
      {/* 4:5 Aspect Ratio Container (e.g., 240px wide by 300px high) */}
      <div className="w-[240px] h-[300px] overflow-hidden bg-white/5 relative">
        {isInView ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            // AI SEO FIX: Added aria-hidden and tabindex to ensure screen readers skip the raw video controls entirely
            aria-hidden="true" 
            tabIndex={-1}
            className="w-full h-full object-cover"
          />
        ) : (
          // PERFORMANCE FIX: A tiny placeholder gradient that shows instantly while waiting to scroll
          <div className="absolute inset-0 bg-neutral-900/40 animate-pulse" />
        )}
      </div>
    </div>
  );
}