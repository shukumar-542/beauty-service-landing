"use client";

import { Sparkle } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Download the app",
    description: "Your personal beauty world, ready when you are.",
  },
  {
    number: "02",
    title: "Choose your artist",
    description: "Browse portfolios, specialties, reviews, and availability.",
  },
  {
    number: "03",
    title: "Book your moment",
    description: "Pick a time, secure it in seconds, and relax.",
  },
  {
    number: "04",
    title: "Love the result",
    description: "Show up, switch off, and leave feeling like yourself.",
  },
];

export default function StepsSection() {
  return (
    <section className="w-full container mx-auto  px-6 py-24 ">
     

      <div className="">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[#E0669B]" />
          <span className="steps-body text-[11px] font-semibold tracking-[0.18em] text-[#B77593]">
            AS EASY AS IT FEELS
          </span>
        </div>

        {/* Headline */}
        <h2 className="steps-display max-w-3xl text-[36px] font-medium leading-[1.15] text-[#3D2E38] sm:text-[44px]">
          Your next beauty moment,{" "}
          <span className="italic">
            made simple with{" "}
            <span className="bg-linear-to-r from-[#E0669B] to-[#F0A868] bg-clip-text text-transparent">
              STUNNER
            </span>
          </span>
        </h2>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={i} className="relative ">
              {/* Number */}
              <span className="steps-body text-[12px]  mb-5 font-semibold tracking-wide text-[#E0669B]">
                {step.number}
              </span>

              {/* Divider line with icon node */}
              <div
                className="relative mt-3 mb-6 h-0 border-t border-dotted border-[#3D2E38]/25"
              >
                <span className="absolute left-0 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#E0669B]/40 bg-[#FCF1EE]">
                  <Sparkle className="size-3.5 fill-[#E0669B] text-[#E0669B]" />
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
      </div>
    </section>
  );
}