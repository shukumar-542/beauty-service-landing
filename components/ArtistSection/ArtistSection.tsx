"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Heart, Star, ArrowUpRight, ArrowRight, BadgeCheck } from "lucide-react";
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
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full bg-[#FFF9F8]  py-24 sm:px-10 lg:px-16 mt-20 shadow-xs">
      <div className="container mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#E0669B]" />
              <span className="artists-body text-[11px] font-semibold tracking-[0.18em] text-[#B77593]">
                MEET THE ARTISTS
              </span>
            </div>
            <h2 className="artists-display max-w-xl text-[36px] font-medium leading-[1.15] text-[#3D2E38] sm:text-[42px]">
              People with a gift for making you{" "}
              <span className="italic">shine</span>
            </h2>
          </div>

          <a
            href="#"
            className="artists-body group inline-flex shrink-0 items-center gap-1.5 border-b border-[#E0669B]/60 pb-1 text-[13px] font-semibold text-[#E0669B] transition-colors hover:border-[#3D2E38] hover:text-[#3D2E38]"
          >
            Discover all artists
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="mt-16 w-full"
        >
          <CarouselContent className="-ml-6 ">
            {ARTISTS.map((artist, i) => (
              <CarouselItem
                key={i}
                className="basis-full pl-6 sm:basis-1/2 lg:basis-1/4"
              >
                <div className="rounded-2xl border border-[#3D2E38]/8 bg-white/60 p-3 shadow-[0_2px_20px_rgba(61,46,56,0.04)]">
                  {/* Image */}
                  <div className="relative aspect-2/2 w-full overflow-hidden rounded-xl">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />

                    {/* Verified badge */}
                    <span className="artists-body absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#3D2E38] backdrop-blur">
                      <BadgeCheck className="size-3.5 fill-[#3D2E38] text-white" />
                      Verified
                    </span>

                    {/* Favorite */}
                    <button
                      type="button"
                      aria-label="Save artist"
                      className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#3D2E38] backdrop-blur transition-colors hover:text-[#E0669B]"
                    >
                      <Heart className="size-4" />
                    </button>
                  </div>

                  {/* Name + rating */}
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
                  <div className="mt-4 flex items-center justify-between border-t border-[#3D2E38]/8 px-1 pt-4">
                    <div className="artists-body text-[12px] text-[#8B7A85]">
                      {artist.bookings}{" "}
                      <span className="font-semibold text-[#3D2E38]">
                        From {artist.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="artists-body group inline-flex items-center gap-1 rounded-full bg-linear-to-r from-[#E0669B] to-[#F0A868] px-4 py-2 text-[12px] font-semibold text-white transition-transform hover:scale-[1.03]"
                    >
                      Book now
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-end gap-3">
            <CarouselPrevious className="static translate-y-0 border-[#3D2E38]/15 text-[#3D2E38] hover:bg-[#E0669B] hover:text-white" />
            <CarouselNext className="static translate-y-0 border-[#3D2E38]/15 text-[#3D2E38] hover:bg-[#E0669B] hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}