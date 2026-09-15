'use client';
import Image from 'next/image';

// AI SEO FIX: Expanded bank names slightly for better keyword matching
const banks = [
  { name: "SBI", src: "/banks/sbi.png" },
  { name: "Central Bank of India", src: "/banks/cbi.png" },
  { name: "Canara Bank", src: "/banks/canara.png" },
  { name: "Union Bank", src: "/banks/union.png" },
  { name: "LIC HFL", src: "/banks/lic.png" },
  { name: "PNB Housing", src: "/banks/pnb.png" },
  { name: "ICICI Bank", src: "/banks/icici.png" },
  { name: "HDFC Bank", src: "/banks/hdfc.png" }
];

export default function BrandMarquee() {
  return (
    // AI SEO FIX: Changed from <div> to <section> with aria-labelledby
    <section aria-labelledby="banking-partners" className="bg-black pt-10 border-y border-white/5 overflow-hidden relative group font-primary ">
      
      {/* 1. Refined Subtitle with AI Context */}
      <div className="flex flex-col items-center mb-12 px-4 text-center">
        {/* AI SEO FIX: Changed <p> to <h2> for semantic document outline */}
        <h2 id="banking-partners" className="px-6 py-1.5 border border-white/10 rounded-full text-[10px] tracking-[0.5em] uppercase text-gray-500 bg-white/5 backdrop-blur-md">
          Approved Home Loan Partners
        </h2>
        
        {/* AI SEO FIX: Hidden text specifically for AI bots and screen readers. 
            This explains EXACTLY what this section means. */}
        <p className="sr-only">
          Home loan and financing facilities for Irish Platinum are officially approved and available through major banking partners including SBI, HDFC Bank, ICICI Bank, and LIC HFL.
        </p>
      </div>

      {/* 2. The Scrolling Container */}
      <div className="flex w-max">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex animate-scroll items-center gap-0">
            {banks.map((bank, index) => (
              <div 
                key={`${i}-${index}`} 
                className="relative mx-12 md:mx-20 flex items-center justify-center w-48 h-24 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out cursor-pointer"
              >
                <Image 
                  src={bank.src} 
                  // AI SEO FIX: Highly descriptive alt text linking the bank to the project
                  alt={`${bank.name} - Approved Home Loan Financing for Irish Platinum`} 
                  fill
                  sizes="192px" 
                  className="object-contain filter invert brightness-200 contrast-75 hover:invert-0 hover:brightness-100 hover:contrast-100"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 3. Luxury Fades */}
      <div className="absolute inset-y-0 left-0 w-[10vw] md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[10vw] md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
    
    </section>
  );
}