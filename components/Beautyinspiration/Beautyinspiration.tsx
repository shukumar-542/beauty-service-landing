"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import beauty1 from "../../public/images/Beauty1.png";
import beauty2 from "../../public/images/Beauty2.png";
import Beauty3 from "../../public/images/Beauty3.png";
import beauty4 from "../../public/images/Beauty4.png";
import beauty5 from "../../public/images/Beauty5.png";
import TagText from "../ui/TagText";
import GradientText from "../ui/Gradienttext";
import AnimatedContent from "../ui/AnimatedContent";
import StaggerGrid, { StaggerItem } from "../ui/StaggerGrid";

const filters = ["All", "Wedding", "Natural", "Luxury glam", "Party", "Editorial"];

const images = [
  {
    src: beauty1,
    alt: "Makeup palette and beauty products flat lay",
    className:
      "col-span-2 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-2",
  },
  {
    src: beauty2,
    alt: "Denim and casual outfit flat lay",
    className:
      "col-span-1 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-1",
  },
  {
    src: Beauty3,
    alt: "Woman in sunglasses holding shopping bags",
    className:
      "col-span-1 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-1",
  },
  {
    src: beauty5,
    alt: "Woman in a dark coat walking on a city street",
    className:
      "col-span-1 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-2",
  },
  {
    src: beauty4,
    alt: "Woman in a flowing white dress",
    className:
      "col-span-1 aspect-square sm:aspect-auto sm:col-span-2 sm:row-span-1",
  },
];

export default function BeautyInspiration() {
  const [active, setActive] = useState("All");

  return (
    <section className="bg-linear-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5] px-6 py-16 sm:py-20">
      <div className="mx-auto container">
        {/* Header Section*/}
        <AnimatedContent
          direction="up"
          delay={0.2}
          duration={0.6}
          distance={20}
          once={false}
        >
          <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <TagText text="BEAUTY INSPIRATION" />
              <div className="flex flex-row xl:flex-row xl:items-center gap-2 xl:gap-4">
                <h2 className="font-serif text-2xl md:text-4xl xl:text-6xl leading-tight text-neutral-900 ">What's your</h2>
                <GradientText text={"Vibe"} className="text-2xl md:text-4xl xl:text-6xl" />
                <h2 className="font-serif  leading-tight text-neutral-900 text-2xl md:text-4xl xl:text-6xl">today ?</h2>
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {filters.map((filter) => {
                const isActive = filter === active;
                return (
                  <button
                    key={filter}
                    onClick={() => setActive(filter)}
                    className={`rounded-full cursor-pointer px-4 py-2 text-sm font-medium transition-colors ${isActive
                      ? "bg-linear-to-r from-[#FFA3FF] to-[#FFB172] text-white shadow-sm"
                      : "bg-white/80 text-neutral-600 hover:bg-white"
                      }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </AnimatedContent>

        {/* Image grid */}
        <StaggerGrid
          staggerDelay={0.2}
          once={false} className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4 sm:h-105 ">
          {images.map((img, i) => (
            <StaggerItem
              key={i}
              distance={30}
              duration={0.6}
               className={`relative overflow-hidden rounded-2xl bg-neutral-200 group ${img.className}`}
            >
             
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 "
                />
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          
          <button className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:bg-neutral-50">
            View all inspiration
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section >
  );
}