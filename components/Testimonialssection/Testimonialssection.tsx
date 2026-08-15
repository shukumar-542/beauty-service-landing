"use client";

import { useEffect, useState } from "react";
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
const testimonials = [
  {
    name: "Kaya Williams",
    location: "Brooklyn, New York",
    avatar: avatar,
    rating: 5,
    review:
      "I've found artists I would never have discovered otherwise. Every appointment feels like a tiny act of self-care, not another thing on my to-do list.",
  },
  {
    name: "Priya Anand",
    location: "Austin, Texas",
    avatar: avatar2,
    rating: 5,
    review:
      "The reviews actually match my taste. I stopped guessing and started trusting every artist I book through Stunner.",
  },
  {
    name: "Maren Cole",
    location: "Portland, Oregon",
    avatar: avatar,
    rating: 5,
    review:
      "Secure payments and instant confirmation mean I never have to double check anything. It just works, every time.",
  },
  {
    name: "Elena Cruz",
    location: "Miami, Florida",
    avatar: avatar2,
    rating: 5,
    review:
      "From flexible scheduling to verified professionals, it removed all the friction from finding someone I actually trust.",
  },
];

export default function TestimonialsSection() {
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
    <section className="bg-gradient-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5]  py-16 sm:py-20">
      <div className="mx-auto grid container px-6 grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: static quote */}
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            <span className="text-xs font-semibold tracking-widest text-rose-400">
              THEIR WORDS, NOT OURS
            </span>
          </div>

          <h2 className="font-serif text-3xl leading-[1.25] text-neutral-900 sm:text-4xl">
            &ldquo;It feels like having a beauty <em className="italic">editor</em>{" "}
            in your pocket.&rdquo;
          </h2>
        </div>

        {/* Right: testimonial carousel */}
        <div>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="items-stretch">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="h-auto">
                  <div className="flex h-full min-h-[300px] flex-col justify-between rounded-2xl border border-black/[0.03] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:min-h-[280px] sm:p-7">
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
                            <p className="text-sm font-semibold text-neutral-900">
                              {t.name}
                            </p>
                            <p className="text-xs text-neutral-400">
                              {t.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, si) => (
                            <Star
                              key={si}
                              className="h-3.5 w-3.5 fill-rose-400 text-rose-400"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="mt-6 text-[15px] leading-relaxed text-neutral-700">
                        &ldquo;{t.review}&rdquo;
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