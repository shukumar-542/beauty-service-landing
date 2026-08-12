import ArtistSection from "@/components/ArtistSection/ArtistSection";
import DownloadAppSection from "@/components/DownloadApp/DownloadApp";
import DownloadButton from "@/components/DownloadButton";
import FaqSection from "@/components/FaqSection/FaqSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import HeroText from "@/components/HeroText/HeroText";
import Navbar from "@/components/layout/Navbar";
import StepSection from "@/components/StepSection/StepSection";


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
            <ArtistSection/>
            <StepSection/>
           <DownloadAppSection/>
           <FaqSection/>
          </div>
        </div>
      </div>

      

    </>
  );
}