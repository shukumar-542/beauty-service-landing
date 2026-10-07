import Image from "next/image";

import DownloadButton from "../DownloadButton";
import TagText from "../ui/TagText";
import HeroItem from "../ui/HeroItem";
import HeroAnimation from "../ui/HeroAnimation";
import HeroSlideshow from "../HeroSlideshow/HeroSlideshow";
import WaitlistTrigger from "../ui/WaitlistTrigger";
import OpenWaitlistButton from "../OpenWaitlistButton";

const heroImage = "/images/herobg.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9FA] md:px-6">
      <HeroSlideshow />

      {/* Desktop: ager collage image */}
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        sizes="100vw"
        quality={90}
        priority
        className="hidden object-cover object-center md:block"
      />

      <div className="absolute inset-0 bg-linear-240 from-black/70 via-black/70 to-black/70" />

      <div className="relative flex min-h-svh md:min-h-screen container mx-auto items-center justify-center px-2 xl:px-10">
        <HeroAnimation>
          <HeroItem>
            <div className="flex flex-col items-center text-center">
              <TagText text="THE EVENT PREP, REIMAGINED" />
            </div>
          </HeroItem>

          <HeroItem>
            <h1
              className="
                overflow-visible
                text-center
                font-serif
                text-2xl
                md:text-5xl
                bg-linear-to-r
                from-[#FFA3FF]
                via-[#FFB172]
                to-[#FFA3FF]
                bg-size-[200%_100%]
                bg-clip-text
                text-transparent
                animate-gradient
                leading-[1.15]
              "
            >
              Book Makeup Artists, Hair Stylists, Photographers &amp; Event
              Organisers in Australia
            </h1>
          </HeroItem>

          <HeroItem>
            <p
              className="
                mt-5
                mx-auto
                max-w-full
                text-center
                text-xs
                text-gray-200
                md:max-w-125
                md:text-sm
              "
            >
              Find and book makeup artists, hair stylists, photographers, cake
              artists and event organisers for weddings, parties and every
              occasion in Australia
            </p>
          </HeroItem>

          <HeroItem>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 overflow-hidden">
              <WaitlistTrigger type="professional">
                <DownloadButton
                  name="Pre-Register as a Professional"
                  className="px-4 py-7"
                  icon="arrowRight"
                  rotateIcon={false}
                />
              </WaitlistTrigger>

              <OpenWaitlistButton />
            </div>
          </HeroItem>
        </HeroAnimation>
      </div>
    </section>
  );
}