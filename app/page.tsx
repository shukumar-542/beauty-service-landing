import ArtistSection from "@/components/ArtistSection/ArtistSection";
import BeautyInspiration from "@/components/Beautyinspiration/Beautyinspiration";
import DownloadAppSection from "@/components/DownloadApp/DownloadApp";
import FaqSection from "@/components/FaqSection/FaqSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import PaymentsHero from "@/components/Paymentshero/Paymentshero";
import ServicesGrid from "@/components/Servicesgrid/Servicesgrid";
import StepSection from "@/components/StepSection/StepSection";
import StunnerStandard from "@/components/Stunnerstandard/Stunnerstandard";
import TestimonialsSection from "@/components/Testimonialssection/Testimonialssection";
import TrustedBy from "@/components/Trustedby/Trustedby";


export default function Home() {
  return (
    <>

      <div className="relative overflow-hidden ">
        <div className="relative">
          <section id="home">
            <HeroSection />
          </section>
          <div>
            <TrustedBy />
            <section id="services">
              <ServicesGrid />
            </section>
            <section id="inspiration" className="scroll-mt-24">
              <BeautyInspiration />
            </section>
            <section id="stunner">
              <StunnerStandard />
            </section>
            <section id="artists">
              <ArtistSection />
            </section>
            <StepSection />
            <section id="customer" className="scroll-mt-24">
              <TestimonialsSection />
            </section>
            <DownloadAppSection />
            <section id="faq" className="scroll-mt-24">
              <FaqSection />
            </section>

            <PaymentsHero />
          </div>
        </div>
      </div>


    </>
  );
}