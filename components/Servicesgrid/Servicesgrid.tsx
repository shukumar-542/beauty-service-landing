"use client";

import Image from "next/image";
import { ArrowUpRight, Palette, Sparkles, Paintbrush, Droplet, Heart, Eye } from "lucide-react";
import img1 from "@/public/images/img1.jpg";
import img2 from "@/public/images/img2.jpg";
import img3 from "@/public/images/img3.jpg";
import img4 from "@/public/images/img4.webp";
import img5 from "@/public/images/img5.jpg";
import img6 from "@/public/images/img6.png";
const services = [
  {
    title: "Makeup",
    subtitle: "For every version of you",
    icon: Palette,
    image: img1,
  },
  {
    title: "Hair Styling",
    subtitle: "Effortless, perfected",
    icon: Sparkles,
    image: img2,
  },
  {
    title: "Nail Art",
    subtitle: "Tiny works of art",
    icon: Paintbrush,
    image: img3,
  },
  {
    title: "Skincare",
    subtitle: "Your glow, considered",
    icon: Droplet,
    image: img4,
  },
  {
    title: "Bridal Makeup",
    subtitle: "The moment is yours",
    icon: Heart,
    image: img5,
  },
  {
    title: "Lash Extensions",
    subtitle: "A softer kind of drama",
    icon: Eye,
    image: img6,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-gradient-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5] px-6 py-16 sm:py-20">
      <div className="mx-auto container">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="text-xs font-semibold tracking-widest text-rose-400">
                FIND YOUR MOMENT
              </span>
            </div>
            <h2 className="font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl">
              A service for <em className="italic">every</em>
              <br className="hidden sm:block" /> kind of glow with{" "}
              <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text font-sans font-extrabold text-transparent">
                STUNNER
              </span>{" "}
              <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text font-sans font-extrabold text-transparent">
                Alert
              </span>
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex w-fit items-center gap-1.5 border-b border-neutral-400 pb-1 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-800"
          >
            Explore all services
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-orange-300">
                      <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {service.title}
                      </p>
                      <p className="text-xs text-white/70">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    aria-label={`Explore ${service.title}`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}