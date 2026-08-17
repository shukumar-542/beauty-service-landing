"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerGridProps {
    children: ReactNode;
    className?: string;

    /** Delay between each child animation */
    staggerDelay?: number;

    /** Animation duration for each item */
    duration?: number;

    /** Animation distance in pixels */
    distance?: number;

    /** Animate only once */
    once?: boolean;
}

export default function StaggerGrid({
    children,
    className = "",
    staggerDelay = 0.1,
    once = true,
}: StaggerGridProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once,
                margin: "-50px",
            }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    distance?: number;
    duration?: number;
}

export function StaggerItem({
    children,
    className = "",
    distance = 30,
    duration = 0.6,
}: StaggerItemProps) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: {
                    opacity: 0,
                    y: distance,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}