"use client";

import { openEmailCTA } from "@/app/lib/events";
import { ArrowRight } from "lucide-react";

export default function OpenWaitlistButton() {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-0.5">
      <span
        className="
          absolute inset-[-300%]
          animate-spin
          bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_55%,#71717a_70%,#a1a1aa_85%,transparent_100%)]
        "
        style={{ animationDuration: "8s" }}
      />

      <button
        type="button"
        onClick={() => openEmailCTA("customer")}
        className="
          relative flex items-center gap-2
          cursor-pointer
          rounded-full
          bg-white
          px-7 py-4
          font-medium
          text-gray-700
          shadow
          transition
          hover:bg-neutral-50
          hover:shadow-lg
        "
      >
        <span className="text-sm font-semibold">
          Pre-Register as a Customer
        </span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}