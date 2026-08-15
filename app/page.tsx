import ArtistSection from "@/components/ArtistSection/ArtistSection";
import BeautyInspiration from "@/components/Beautyinspiration/Beautyinspiration";
import DownloadAppSection from "@/components/DownloadApp/DownloadApp";
import DownloadButton from "@/components/DownloadButton";
import FaqSection from "@/components/FaqSection/FaqSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import HeroText from "@/components/HeroText/HeroText";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PaymentsHero from "@/components/Paymentshero/Paymentshero";
import ServicesGrid from "@/components/Servicesgrid/Servicesgrid";
import StepSection from "@/components/StepSection/StepSection";
import StunnerStandard from "@/components/Stunnerstandard/Stunnerstandard";
import TestimonialsSection from "@/components/Testimonialssection/Testimonialssection";
import TrustedBy from "@/components/Trustedby/Trustedby";


export default function Home() {
  return (
    <>
      <Navbar />

      <div className="relative overflow-hidden ">
        {/* Soft pink glow - top left */}

        <div className="relative">
          {/* <HeroText /> */}
         <HeroSection/>
          <div>
            <TrustedBy/>
            <ServicesGrid/>
            <BeautyInspiration/>
            <StunnerStandard/>
            <ArtistSection/>
            <StepSection/>
            <TestimonialsSection/>
           <DownloadAppSection/>
           <FaqSection/>
           <PaymentsHero/>
          </div>
        </div>
      </div>

      <Footer/>

    </>
  );
}