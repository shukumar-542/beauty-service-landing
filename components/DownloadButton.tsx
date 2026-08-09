"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function DownloadButton() {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-px">
      <span
        className="absolute inset-[-300%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_55%,#f472b6_70%,#fdba74_85%,transparent_100%)]"
        style={{ animationDuration: "4s" }}
      />

      <Button
        className="relative group px-6 py-5 h-11  rounded-full"
        variant="gradient"
        size="lg"
      >
        Download app
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
      </Button>
    </div>
  );
}