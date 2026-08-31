"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroAnimationProps {
  children: ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};


export default function HeroAnimation({
  children,
}: HeroAnimationProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}