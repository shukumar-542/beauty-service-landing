"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import beauty1 from "../../public/images/makeup/makeup01.jpg";
import beauty2 from "../../public/images/makeup/makeup02.jpg";
import beauty3 from "../../public/images/makeup/makeup03.jpg";
import beauty4 from "../../public/images/makeup/makeup04.jpg";
import beauty5 from "../../public/images/makeup/makup05.jpg";
import beauty6 from "../../public/images/makeup/makeup06.jpg";
import event1 from "../../public/images/events/event01.jpg";
import event2 from "../../public/images/events/event02.jpg";
import event3 from "../../public/images/events/event03.jpg";
import event4 from "../../public/images/events/event04.jpg";
import event5 from "../../public/images/events/event05.jpg";
import event6 from "../../public/images/events/event06.jpg";
import photography01 from "../../public/images/photography/photography01.jpg";
import photography02 from "../../public/images/photography/photography02.jpg";
import photography03 from "../../public/images/photography/photography03.jpg";
import photography04 from "../../public/images/photography/photography04.jpg";
import photography05 from "../../public/images/photography/photography05.jpg";
import photography06 from "../../public/images/photography/photography06.jpg";
import cake01 from "../../public/images/cake/cake01.jpg";
import cake02 from "../../public/images/cake/cake02.jpg";
import cake03 from "../../public/images/cake/cake03.jpg";
import cake04 from "../../public/images/cake/cake04.jpg";
import cake05 from "../../public/images/cake/cake05.jpg";
import cake06 from "../../public/images/cake/cake06.jpg";
import TagText from "../ui/TagText";
import GradientText from "../ui/Gradienttext";
import AnimatedContent from "../ui/AnimatedContent";
import StaggerGrid, { StaggerItem } from "../ui/StaggerGrid";

const filters = ["All", "Makeup", "Events", "Photography", "Cake"] as const;
type Filter = (typeof filters)[number];

type GalleryImage = {
  src: any;
  category: Exclude<Filter, "All">;
  alt: string;
};

const images: GalleryImage[] = [
  { src: beauty5, category: "Makeup", alt: "Makeup palette and beauty products flat lay" },
  { src: beauty2, category: "Makeup", alt: "Makeup look 2" },
  { src: beauty3, category: "Makeup", alt: "Makeup look 3" },
  { src: beauty6, category: "Makeup", alt: "Makeup look 4" },
  { src: beauty4, category: "Makeup", alt: "Makeup look 5" },
  { src: beauty1, category: "Makeup", alt: "Makeup look 6" },

  { src: event1, category: "Events", alt: "Event 1" },
  { src: event2, category: "Events", alt: "Event 2" },
  { src: event3, category: "Events", alt: "Event 3" },
  { src: event4, category: "Events", alt: "Event 4" },
  { src: event5, category: "Events", alt: "Event 5" },
  { src: event6, category: "Events", alt: "Event 6" },

  { src: photography01, category: "Photography", alt: "Photography 1" },
  { src: photography02, category: "Photography", alt: "Photography 2" },
  { src: photography03, category: "Photography", alt: "Photography 3" },
  { src: photography04, category: "Photography", alt: "Photography 4" },
  { src: photography05, category: "Photography", alt: "Photography 5" },
  { src: photography06, category: "Photography", alt: "Photography 6" },

  { src: cake01, category: "Cake", alt: "Cake 1" },
  { src: cake02, category: "Cake", alt: "Cake 2" },
  { src: cake03, category: "Cake", alt: "Cake 3" },
  { src: cake04, category: "Cake", alt: "Cake 4" },
  { src: cake05, category: "Cake", alt: "Cake 5" },
  { src: cake06, category: "Cake", alt: "Cake 6" },
];

// 6 ta item-er jonno fixed layout (sm te 4 column, 2 row)
const layoutClasses = [
  "col-span-1 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-2",
  "col-span-1 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-1",
  "col-span-1 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-1",
  "col-span-1 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-2",
  "col-span-1 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-1",
  "col-span-1 aspect-square sm:aspect-auto sm:col-span-1 sm:row-span-1",
];

const categoryOrder: Exclude<Filter, "All">[] = [
  "Makeup",
  "Events",
  "Photography",
  "Cake",
];

export default function BeautyInspiration() {
  const [active, setActive] = useState<Filter>("All");

  const visibleImages = useMemo(() => {
    if (active === "All") {
      // Prottek category theke 1 ta kore
      const onePerCategory = categoryOrder.map(
        (cat) => images.find((img) => img.category === cat)!
      );
      // Makeup theke aro 2 ta (prothom ta bad diye)
      const extraMakeup = images
        .filter((img) => img.category === "Makeup")
        .slice(1, 3);

      return [...onePerCategory, ...extraMakeup]; // total 6
    }

    return images.filter((img) => img.category === active).slice(0, 6);
  }, [active]);

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
          <div className="mb-5 flex flex-col gap-6 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <TagText text="Inspiration Board" />
              <div className="flex flex-row xl:flex-row xl:items-center gap-2 xl:gap-4">
                <h2 className="font-serif text-2xl md:text-4xl xl:text-6xl leading-tight text-neutral-900 flex flex-row xl:items-center gap-2 xl:gap-4">
                  What's your
                  <GradientText
                    text={"Vibe"}
                    className="text-2xl md:text-4xl xl:text-6xl"
                  />
                  today?
                </h2>
              </div>
              <p className="text-gray-600 mt-2 text-xs md:text-sm">
                Get ideas for your next look, celebration, or photoshoot. Filter
                by makeup, events, photography, or cake, then find a specialist
                to bring it to life.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {filters.map((filter) => {
                const isActive = filter === active;
                return (
                  <button
                    key={filter}
                    onClick={() => setActive(filter)}
                    className={`rounded-full cursor-pointer px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
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
        {/* key={active} dile filter change hole animation abar run korbe */}
        <StaggerGrid
          key={active}
          staggerDelay={0.2}
          once={false}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4 sm:h-130"
        >
          {visibleImages.map((img, i) => (
            <StaggerItem
              key={`${active}-${img.alt}`}
              distance={30}
              duration={0.6}
              className={`relative overflow-hidden rounded-2xl bg-neutral-200 group ${layoutClasses[i]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}