import DownloadButton from "@/components/DownloadButton";
import FaqSection from "@/components/FaqSection/FaqSection";
import HeroText from "@/components/HeroText/HeroText";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />

      <div className="relative overflow-hidden py-28">
        {/* Soft pink glow - top left */}
        <div className="absolute top-20 -left-20 h-44 w-96 rounded-full bg-[#FFCEF0] opacity-60 blur-3xl" />

        <div className="container relative mx-auto px-6">
          {/* <HeroText /> */}
          <h1 className="font-serif text-5xl bg-[length:200%_auto] bg-gradient-to-r from-[#372D38] via-[#6b5a6d] to-[#372D38] bg-clip-text text-transparent animate-[wave_4s_ease-in-out_infinite]">
            We make good taste easy to find.
          </h1>
          <p className="font-sans">Body text (Inter)</p>
          <div>
           <FaqSection/>
          </div>
        </div>
      </div>

      

    </>
  );
}