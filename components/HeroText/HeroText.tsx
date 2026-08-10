"use client";

import { motion } from "motion/react";

const text = "Beauty, easy to find.";
const words = text.split(" ");

export default function HeroText() {
  return (
    <h1 className="font-serif text-5xl">
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ color: "#372D38" }}
          animate={{
            color: ["#372D38", "#FFA3FF", "#372D38"],
          }}
          transition={{
            duration: 6,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: words.length * 0.3,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        >
          {w}
        </motion.span>
      ))}
    </h1>
  );
}