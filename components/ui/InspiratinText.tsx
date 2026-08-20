"use client";

import { Astroid, Star, Sparkles, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type IconName = "astroid" | "star" | "sparkles";

interface InspirationTextProps {
  text: string;
  icon?: IconName;
  delay?: number;
}

const iconMap: Record<IconName, LucideIcon> = {
  astroid: Astroid,
  star: Star,
  sparkles: Sparkles,
};

export default function InspirationText({
  text,
  icon,
  delay = 0
}: InspirationTextProps) {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <motion.div
      className="inline-block will-change-transform"
      animate={{ y: [-7, 7, -7] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div className="flex items-center justify-center gap-2 rounded-full bg-white px-2 xl:px-6 py-1 xl:py-3 shadow-2xl">
        <h1 className="text-xs">{text}</h1>

        {Icon && (
          <Icon
            size={16}
            fill="#231919"
            aria-hidden="true"
          />
        )}
      </div>
    </motion.div>
  );
}