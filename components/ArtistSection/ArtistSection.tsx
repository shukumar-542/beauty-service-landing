"use client";

import { useRef } from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { Star, ArrowRight, ShieldCheck } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import artist1 from "@/public/images/artist1.png";
import artist2 from "@/public/images/artist2.png";
import artist3 from "@/public/images/artist3.png";

import GradientText from "../ui/Gradienttext";
import ExploreButton from "../ui/ExploreButton";
import TagText from "../ui/TagText";

const ARTISTS = [
  {
    name: "Amara Lewis",
    specialty: "Bridal & Soft Glam",
    rating: "4.9",
    bookings: "1.2k bookings",
    price: "$85",
    image: artist1,
  },
  {
    name: "Maya Okafor",
    specialty: "Natural Hair Specialist",
    rating: "5.0",
    bookings: "980 bookings",
    price: "$85",
    image: artist2,
  },
  {
    name: "Sofia Maren",
    specialty: "Editorial Makeup",
    rating: "4.8",
    bookings: "760 bookings",
    price: "$85",
    image: artist3,
  },
  {
    name: "Sofia Maren",
    specialty: "Editorial Makeup",
    rating: "4.8",
    bookings: "760 bookings",
    price: "$85",
    image: artist1,
  },
  {
    name: "Sofia Maren",
    specialty: "Editorial Makeup",
    rating: "4.8",
    bookings: "760 bookings",
    price: "$85",
    image: artist2,
  },
  {
    name: "Amara Lewis",
    specialty: "Bridal & Soft Glam",
    rating: "4.9",
    bookings: "1.2k bookings",
    price: "$85",
    image: artist3,
  },
];

export default function ArtistSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="w-full overflow-hidden bg-[#FFF9F8] py-24 shadow-xs sm:px-10 lg:px-16">
      <div className="container mx-auto px-6">

        {/* =========================
            Header
        ========================== */}

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <TagText text="MEET THE ARTISTS" />

            <div className="flex flex-wrap items-center gap-0">
              <h2 className="font-serif  leading-tight text-neutral-900 text-2xl md:text-4xl xl:text-6xl">
                Handpicked experts. 
              </h2>

                <h2 className="font-serif text-2xl md:text-4xl xl:text-6xl leading-tight text-neutral-900 ">
                  <GradientText
                    text=" Stunning "
                    className="text-2xl md:text-4xl xl:text-6xl"
                  />
                </h2 >
                <h2  className="font-serif text-2xl md:text-4xl xl:text-6xl leading-tight text-neutral-900 ml-2">results.</h2>
                  
            </div>
          </div>

          <ExploreButton text="Discover all artists" />
        </div>

        {/* =========================
            Carousel
        ========================== */}

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplay.current]}
          className="mt-16 w-full"
        >
          <CarouselContent className="-ml-6">
            {ARTISTS.map((artist, i) => (
              <CarouselItem
                key={i}
                className="basis-full pl-6 sm:basis-1/2 lg:basis-1/4"
              >
                {/* =========================
                    Artist Card
                ========================== */}

                <div className="rounded-2xl border border-[#3D2E38]/8 bg-white/60 p-3 shadow-[0_2px_20px_rgba(61,46,56,0.04)]">

                  {/* Image */}

                  <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />

                    {/* Verified Badge */}

                    <span className="artists-body absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#7B5370] backdrop-blur">
                      <ShieldCheck className="size-3.5 text-[#1A5A52]" />
                      Verified
                    </span>
                  </div>

                  {/* Name + Rating */}

                  <div className="mt-4 flex items-start justify-between px-1">
                    <div>
                      <h3 className="artists-body text-[15px] font-semibold text-[#3D2E38]">
                        {artist.name}
                      </h3>

                      <p className="artists-body mt-0.5 text-[13px] text-[#8B7A85]">
                        {artist.specialty}
                      </p>
                    </div>

                    <div className="artists-body flex items-center gap-1 text-[13px] font-semibold text-[#3D2E38]">
                      <Star className="size-3.5 fill-[#E0669B] text-[#E0669B]" />

                      {artist.rating}
                    </div>
                  </div>

                  {/* Footer */}

                  <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-[#3D2E38]/8 pt-4 xl:flex-row">
                    <div className="text-[12px] text-[#8B7A85]">
                      {artist.bookings}{" "}
                      <span className="font-semibold text-[#3D2E38]">
                        From {artist.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="group inline-flex w-full items-center justify-center gap-1 rounded-full bg-linear-to-r from-[#FFA3FF] to-[#FFB172] px-3 py-2 text-[12px] font-semibold text-white transition-transform hover:scale-[1.03] xl:w-auto"
                    >
                      Book now

                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* =========================
              Navigation
          ========================== */}

          <div className="mt-8 flex items-center justify-end gap-3">
            <CarouselPrevious className="static translate-y-0 border-[#3D2E38]/15 text-[#3D2E38] hover:bg-[#E0669B] hover:text-white" />

            <CarouselNext className="static translate-y-0 border-[#3D2E38]/15 text-[#3D2E38] hover:bg-[#E0669B] hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}