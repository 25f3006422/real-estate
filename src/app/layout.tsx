import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import PromoBar from "../components/promobar";

const zalandoSans = localFont({
  src: [
    { path: './fonts/ZalandoSansSemiExpanded-ExtraLight.ttf', style: 'normal' },
    { path: './fonts/ZalandoSansSemiExpanded-Light.ttf', style: 'normal' },
    { path: './fonts/ZalandoSansSemiExpanded-Regular.ttf', style: 'normal' },
    { path: './fonts/ZalandoSansSemiExpanded-Medium.ttf', style: 'normal' },
    { path: './fonts/ZalandoSansSemiExpanded-SemiBold.ttf', style: 'normal' },
    { path: './fonts/ZalandoSansSemiExpanded-Bold.ttf', style: 'normal' },
    { path: './fonts/ZalandoSansSemiExpanded-ExtraBold.ttf', style: 'normal' },
    { path: './fonts/ZalandoSansSemiExpanded-Black.ttf', style: 'normal' },
  ],
  variable: '--font-zalando',
});

// 1. Unified Canonical Base
export const metadata: Metadata = {
  metadataBase: new URL('https://platinumirish.in'),
  alternates: {
    canonical: '/',
  },
  
  title: "Irish Platinum Sector 10 | 3 & 4 BHK in Greater Noida West",
  
  // Cleaned up the description to be more human/AI readable as advised
  description: "Explore Irish Platinum in Sector 10, Greater Noida West — 3 & 4 BHK apartments with Mivan construction. View prices, floor plans, RERA details, and location.",
  
  // Removed the 'keywords' array completely. It is dead weight for modern Google/AI.

  openGraph: {
    title: "Irish Platinum Sector 10 | 3 & 4 BHK Luxury Flats",
    description: "Explore Irish Platinum in Sector 10, Greater Noida West — 3 & 4 BHK apartments with Mivan construction. View prices, floor plans, and RERA details.",
    url: "https://platinumirish.in",
    siteName: "Irish Platinum",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Irish Platinum 3 and 4 BHK apartments in Sector 10 Greater Noida West",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Irish Platinum Sector 10 | 3 & 4 BHK in Greater Noida West",
    description: "Explore Irish Platinum in Sector 10. 3 & 4 BHK apartments with Mivan construction.",
    creator: "@heyisomer",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 2. The Expert Entity Graph Schema (WebSite -> WebPage -> Property -> Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://platinumirish.in/#website",
        "url": "https://platinumirish.in/",
        "name": "Irish Platinum",
        "inLanguage": "en-IN"
      },
      {
        "@type": "WebPage",
        "@id": "https://platinumirish.in/#webpage",
        "url": "https://platinumirish.in/",
        "name": "Irish Platinum Sector 10 | 3 & 4 BHK in Greater Noida West",
        "isPartOf": {
          "@id": "https://platinumirish.in/#website"
        },
        "about": {
          "@id": "https://platinumirish.in/#property"
        },
        "dateModified": "2026-09-15", // AI will now see your festive data is freshly updated today
        "inLanguage": "en-IN"
      },
      {
        "@type": "Organization",
        "@id": "https://platinumirish.in/#organization",
        "name": "Irish Infrastructure Private Limited"
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://platinumirish.in/#property",
        "name": "Irish Platinum",
        "url": "https://platinumirish.in/",
        "description": "Irish Platinum is a residential apartment project offering 3 and 4 BHK apartments in Sector 10, Greater Noida West.",
        "image": [
          "https://platinumirish.in/og-image.png"
        ],
        "numberOfAccommodationUnits": {
          "@type": "QuantitativeValue",
          "value": 566 // Accurately stated as units, not "offers"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "GH-04A, Sector 10",
          "addressLocality": "Greater Noida West",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201306",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.572833,
          "longitude": 77.45
        },
        "brand": {
          "@id": "https://platinumirish.in/#organization"
        },
        "identifier": {
          "@type": "PropertyValue",
          "name": "RERA Registration Number",
          "value": "UPRERAPRJ503189"
        },
        // Only actual amenities go here now
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "5 Minutes from upcoming Metro",
            "value": true
          }
        ],
        // Construction details and density go in additionalProperty
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Project Density",
            "value": "121 units per acre"
          },
          {
            "@type": "PropertyValue",
            "name": "Construction Technology",
            "value": "Mivan construction"
          },
          {
            "@type": "PropertyValue",
            "name": "Expected Possession",
            "value": "January 2029"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
          body { 
            font-family: var(--font-zalando), sans-serif !important;
          }
        `}</style>
      </head>
      <body className={`${zalandoSans.variable} antialiased`}>
        <PromoBar/>
        
        {/* SAFE INJECTION: Replaces < with unicode to prevent XSS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        
        {children}
      </body>
    </html>
  );
}