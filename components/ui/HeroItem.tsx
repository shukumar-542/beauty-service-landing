"use client";

import { motion } from "framer-motion";

const dropVariants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 6,
      stiffness: 100,
    },
  },
};

export default function HeroItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={dropVariants}>
      {children}
    </motion.div>
  );
}