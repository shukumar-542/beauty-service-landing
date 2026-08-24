"use client";

import { Sparkle } from "lucide-react";
import TagText from "../ui/TagText";
import GradientText from "../ui/Gradienttext";

const STEPS = [
  {
    number: "01",
    title: "Download the app",
    description: "Your personal style and studio team, ready whenever you are.",
  },
  {
    number: "02",
    title: "Choose your Pro",
    description: "Browse portfolios, specialties, reviews, and availability. ",
  },
  {
    number: "03",
    title: "Book your moment",
    description: "Pick a time, secure it in seconds, and relax.",
  },
  {
    number: "04",
    title: "Love the result",
    description: "Feel confident and ready to stun the world",
  },
];

export default function StepsSection() {

  
  return (
    <section className="w-full container mx-auto  px-6 py-20 ">
        {/* Headline */}
        <div>
          <TagText text="MEET THE ARTISTS" />
          <h2 className="font-serif text-2xl md:text-4xl xl:text-6xl text-neutral-900 ">
            Your next glow-up,{" "}
          </h2>
          <div className="flex flex-col xl:flex-row items-center gap-2">
            <h2 className="font-serif  leading-tight text-neutral-900 text-2xl md:text-4xl xl:text-6xl ">booked in seconds with</h2>
            <GradientText text={"Stunner Alert"} className="text-2xl md:text-4xl xl:text-6xl" />
          </div>
        </div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={i} className="relative ">
              {/* Number */}
              <span className=" text-[12px]  font-semibold tracking-wide text-[#CF94B0] ml-2 ">
                {"0" + (i + 1)}
              </span>

              {/* Divider line with icon node */}
              <div
                className="relative mt-6 mb-6 h-0 border-t  border-dotted border-[#3D2E38]/25"
              >
                <span className="absolute left-0 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#E0669B]/40 bg-[#FCF1EE]">
                  <Sparkle className="size-3.5 fill-[#DC86B2] text-[#DC86B2]" />
                </span>
              </div>

              {/* Text */}
              <h3 className="steps-body text-[15px] font-semibold text-[#3D2E38]">
                {step.title}
              </h3>
              <p className="steps-body mt-2 max-w-55 text-[13px] leading-relaxed text-[#8B7A85]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
}