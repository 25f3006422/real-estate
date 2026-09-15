import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import LeadForm from "../components/LeadForm";
import BrandMarquee from "../components/bankScroll";
import FeatureNarrative from "../components/featureNarrative";
import AmenitiesMarquee from "../components/AmenitiesMarquee";
import FloorPlanSection from "../components/Layout";
import PaymentSection from "../components/pp";
import FinalInfoSection from "../components/faqs";
import Footer from "../components/footer";
// import PromoBar from "../components/promobar";

export default function Home() {
  return(
    // AI SEO: Changed <div> to <main> so crawlers know this is the primary entity content
    <main>
      <Navbar/>
      <Hero/>
      <BrandMarquee/>
      <FeatureNarrative/>
      <AmenitiesMarquee/>
      <FloorPlanSection/>
      <PaymentSection/>
      <FinalInfoSection/>
      <Footer/>
    </main>
  )
}