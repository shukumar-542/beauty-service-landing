import Image from "next/image";
import { ArrowRight } from "lucide-react";

import DownloadButton from "../DownloadButton";
import TagText from "../ui/TagText";
import HeroItem from "../ui/HeroItem";
import HeroAnimation from "../ui/HeroAnimation";
import HeroSlideshow from "../HeroSlideshow/HeroSlideshow";

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

      <div className="relative flex min-h-180 md:min-h-screen container mx-auto items-center justify-center px-4 xl:px-10">
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
              Book Makeup Artists,
              Hair Stylists, Photographers
              <br /> & Event Organisers in Australia
            </h1>
          </HeroItem>

          <HeroItem>
            <p
              className="
          mt-5
          mx-auto
          max-w-54.75
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
              <DownloadButton
                name="Pre-Register as a Professional"
                className="px-4 py-7"
                icon="arrowRight"
                rotateIcon={false}
              />

              <div className="relative inline-flex overflow-hidden rounded-full p-0.5">
                <span
                  className="
              absolute inset-[-300%]
              animate-spin
              bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_55%,#71717a_70%,#a1a1aa_85%,transparent_100%)]
            "
                  style={{ animationDuration: "8s" }}
                />

                <a
                  className="
              relative flex items-center gap-2
              cursor-pointer
              rounded-full
              bg-white
              px-7 py-4
              font-medium
              text-gray-700
              shadow
              transition
              hover:bg-neutral-50
              hover:shadow-lg
            "
                >
                  <span className="text-sm font-semibold">
                    Pre-Register as a Customer
                  </span>

                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </HeroItem>
        </HeroAnimation>
      </div>
    </section>
  );
}