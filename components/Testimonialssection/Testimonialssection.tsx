"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import avatar from "@/public/images/artist1.png";
import avatar2 from "@/public/images/artist2.png";
import TagText from "../ui/TagText";
import Autoplay from "embla-carousel-autoplay";
const testimonials = [
  {
    name: "Kaya Williams",
    location: "Sydney, NSW; Brisbane",
    avatar: avatar,
    rating: 5,
    review:
      "I've found artists I would never have discovered otherwise. Every appointment feels like a tiny act of self-care, not another thing on my to-do list.",
  },
  {
    name: "Priya Anand",
    location: "Brisbane, QLD",
    avatar: avatar2,
    rating: 5,
    review:
      "The reviews actually match my taste. I stopped guessing and started trusting every artist I book through Stunner.",
  },
  {
    name: "Maren Cole",
    location: "Adelaide, SA",
    avatar: avatar,
    rating: 5,
    review:
      "Secure payments and instant confirmation mean I never have to double check anything. It just works, every time.",
  },
  {
    name: "Elena Cruz",
    location: "Sydney, NSW",
    avatar: avatar2,
    rating: 5,
    review:
      "From flexible scheduling to verified professionals, it removed all the friction from finding someone I actually trust.",
  },
];

export default function TestimonialsSection() {

  const autoplay = useRef(
      Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
    );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-linear-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5]  py-16 sm:py-20">
      <div className="mx-auto grid container px-6 grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: static quote */}
        <div>
          <TagText text="AS EASY AS IT FEELS" />

          <h2 className="font-serif  text-neutral-900 text-2xl md:text-4xl xl:text-6xl">
            &ldquo;It feels like having your personal creative team in your pocket.&rdquo;
          </h2>
        </div>

        {/* Right: testimonial carousel */}
        <div>
          <Carousel  plugins={[autoplay.current]} setApi={setApi} className="w-full">
            <CarouselContent className="items-stretch">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="h-auto">
                  <div className="flex h-full min-h-75 flex-col justify-between rounded-2xl border border-black/3 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:min-h-70 sm:p-7">
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-neutral-200">
                            <Image
                              src={t.avatar}
                              alt={t.name}
                              fill
                              sizes="36px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#372D38]">
                              {t.name}
                            </p>
                            <p className="text-xs text-[#93838E]">
                              {t.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, si) => (
                            <Star
                              key={si}
                              className="h-3.5 w-3.5 fill-[#D875A9] text-[#D875A9]"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="mt-6 text-[15px] leading-relaxed text-[#513A4C]">
                        &ldquo; {t.review} &rdquo;
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                      <button
                        onClick={() => api?.scrollPrev()}
                        aria-label="Previous testimonial"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-50"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>

                      <span className="text-xs tabular-nums text-neutral-400">
                        {String(current + 1).padStart(2, "0")} /{" "}
                        {String(testimonials.length).padStart(2, "0")}
                      </span>

                      <button
                        onClick={() => api?.scrollNext()}
                        aria-label="Next testimonial"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-50"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}