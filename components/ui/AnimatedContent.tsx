"use client";

import type { ReactNode, ElementType } from "react";
import { motion } from "framer-motion";

interface AnimatedContentProps {
    children: ReactNode;
    className?: string;

    /** Animation direction */
    direction?: "up" | "down" | "left" | "right" | "none";

    /** Animation delay in seconds */
    delay?: number;

    /** Animation duration in seconds */
    duration?: number;

    /** Animation distance in pixels */
    distance?: number;

    /** Animate only once when entering viewport */
    once?: boolean;

    /** HTML element */
    as?: "div" | "section" | "span" | "article" | "main";
}

export default function AnimatedContent({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.6,
    distance = 40,
    once = true,
    as = "div",
}: AnimatedContentProps) {
    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return {
                    x: 0,
                    y: distance,
                };

            case "down":
                return {
                    x: 0,
                    y: -distance,
                };

            case "left":
                return {
                    x: distance,
                    y: 0,
                };

            case "right":
                return {
                    x: -distance,
                    y: 0,
                };

            case "none":
                return {
                    x: 0,
                    y: 0,
                };

            default:
                return {
                    x: 0,
                    y: distance,
                };
        }
    };

    const MotionTag = motion[as as keyof typeof motion] as ElementType;

    return (
        <MotionTag
            className={className}
            initial={{
                opacity: 0,
                ...getInitialPosition(),
                scale: direction === "none" ? 0.95 : 1,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{
                once,
                margin: "-80px",
            }}
        >
            {children}
        </MotionTag>
    );
}