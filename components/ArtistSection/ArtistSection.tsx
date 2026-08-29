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
    <section className="w-full overflow-hidden bg-[#FFF9F8] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================
            Header
        ========================== */}

        <TagText text="MEET THE ARTISTS" />

        <div className="mt-4 flex flex-col gap-6 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          {/* Heading */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0">
              <h2 className="font-serif text-3xl leading-[1.1] text-neutral-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                Handpicked experts.
              </h2>

              <h2 className="font-serif text-3xl leading-[1.1] text-neutral-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                <GradientText
                  text="Stunning"
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
                />
              </h2>

              <h2 className="font-serif text-3xl leading-[1.1] text-neutral-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                results.
              </h2>
            </div>
          </div>

          {/* Button */}
          <div className="shrink-0">
            <ExploreButton text="Discover all artists" />
          </div>
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
          className="mt-10 w-full sm:mt-14 lg:mt-16"
        >
          <CarouselContent className="-ml-3 sm:-ml-4 lg:-ml-6">
            {ARTISTS.map((artist, i) => (
              <CarouselItem
                key={i}
                className="basis-[88%] pl-3 sm:basis-1/2 sm:pl-4 lg:basis-1/4 lg:pl-6"
              >
                {/* =========================
                    Artist Card
                ========================== */}

                <div className="h-full rounded-2xl border border-[#3D2E38]/8 bg-white/60 p-2.5 shadow-[0_2px_20px_rgba(61,46,56,0.04)] sm:p-3">
                  {/* Image */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />

                    {/* Verified Badge */}
                    <span className="artists-body absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-[#7B5370] backdrop-blur sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[11px]">
                      <ShieldCheck className="size-3 sm:size-3.5 text-[#1A5A52]" />
                      Verified
                    </span>
                  </div>

                  {/* Name + Rating */}
                  <div className="mt-3 flex items-start justify-between gap-3 px-1 sm:mt-4">
                    <div className="min-w-0">
                      <h3 className="artists-body truncate text-[14px] font-semibold text-[#3D2E38] sm:text-[15px]">
                        {artist.name}
                      </h3>

                      <p className="artists-body mt-0.5 line-clamp-1 text-[12px] text-[#8B7A85] sm:text-[13px]">
                        {artist.specialty}
                      </p>
                    </div>

                    <div className="artists-body flex shrink-0 items-center gap-1 text-[12px] font-semibold text-[#3D2E38] sm:text-[13px]">
                      <Star className="size-3 fill-[#E0669B] text-[#E0669B] sm:size-3.5" />
                      {artist.rating}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-3 flex flex-col gap-3 border-t border-[#3D2E38]/8 px-1 pt-3 sm:mt-4 sm:pt-4 lg:flex-row lg:items-center lg:justify-between lg:gap-2">
                    <div className="text-[11px] text-[#8B7A85] sm:text-[12px]">
                      {artist.bookings}{" "}
                      <span className="font-semibold text-[#3D2E38]">
                        From {artist.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="group inline-flex w-full items-center justify-center gap-1 rounded-full bg-linear-to-r from-[#FFA3FF] to-[#FFB172] px-3 py-2 text-[11px] font-semibold text-white transition-transform hover:scale-[1.03] sm:text-[12px] lg:w-auto"
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

          <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:justify-end">
            <CarouselPrevious className="static size-9 translate-y-0 border-[#3D2E38]/15 text-[#3D2E38] hover:bg-[#E0669B] hover:text-white sm:size-10" />

            <CarouselNext className="static size-9 translate-y-0 border-[#3D2E38]/15 text-[#3D2E38] hover:bg-[#E0669B] hover:text-white sm:size-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}