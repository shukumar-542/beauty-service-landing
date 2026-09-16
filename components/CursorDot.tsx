"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorDot() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        damping: 25,
        stiffness: 200,
    });

    const springY = useSpring(mouseY, {
        damping: 25,
        stiffness: 200,
    });

    useEffect(() => {
        const moveHandler = (e: any) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveHandler);

        return () => {
            window.removeEventListener("mousemove", moveHandler);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                position: "fixed",
                top: springY,
                left: springX,
                translateX: "-10%",
                translateY: "-10%",
                pointerEvents: "none",
                zIndex: 9999,
            }}
            animate={{
                rotate: [-2, 2, -2],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="hidden md:block"
        >
            <svg
                width="15"
                height="50"
                viewBox="0 0 20 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Handle - glossy lacquered look */}
                    <linearGradient id="handle" x1="7" y1="33" x2="13" y2="58" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFC9A8" />
                        <stop offset="0.4" stopColor="#FF9DC7" />
                        <stop offset="1" stopColor="#D9749A" />
                    </linearGradient>

                    <linearGradient id="handleShine" x1="7.5" y1="33" x2="9" y2="55" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFFFF" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>

                    {/* Metal ferrule - slim brushed chrome */}
                    <linearGradient id="metal" x1="5" y1="25" x2="15" y2="33" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8A5A66" />
                        <stop offset="0.18" stopColor="#E7B9C0" />
                        <stop offset="0.45" stopColor="#FFF6F2" />
                        <stop offset="0.55" stopColor="#FFF6F2" />
                        <stop offset="0.78" stopColor="#D89AAA" />
                        <stop offset="1" stopColor="#7A4C58" />
                    </linearGradient>

                    <linearGradient id="metalTop" x1="5" y1="24" x2="15" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6F4450" />
                        <stop offset="0.5" stopColor="#F5D9DE" />
                        <stop offset="1" stopColor="#6F4450" />
                    </linearGradient>

                    {/* Bristle tip - slim tapered cluster */}
                    <linearGradient id="bristles" x1="4" y1="24" x2="16" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#DD6FA8" />
                        <stop offset="0.4" stopColor="#F58BC0" />
                        <stop offset="0.75" stopColor="#FF8FCF" />
                        <stop offset="1" stopColor="#FFB07A" />
                    </linearGradient>

                    <linearGradient id="bristleShadowL" x1="6" y1="24" x2="8.5" y2="4" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#B5507F" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#B5507F" stopOpacity="0" />
                    </linearGradient>

                    <linearGradient id="bristleLight" x1="6.5" y1="20" x2="9" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFF3FB" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#FFA3FF" stopOpacity="0" />
                    </linearGradient>

                    <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="1" />
                    </filter>

                    <filter id="tinyBlur" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="0.3" />
                    </filter>
                </defs>

                <g transform="rotate(-15 9 29)">

                {/* ================================= */}
                {/* SLIM TAPERED BRUSH HEAD */}
                {/* ================================= */}

                {/* faint ambient glow */}
                <ellipse cx="9" cy="12" rx="6" ry="12" fill="#FF9EE8" opacity="0.15" filter="url(#softGlow)" />

                {/* Main bristle silhouette - narrow, tapering to a soft point like a real angled brush */}
                <path
                    d="
                        M6.2 25
                        C5.3 21 4.7 17 5 13
                        C5.3 8.5 6.6 4.2 9 0.6
                        C11.4 4.2 12.7 8.5 13 13
                        C13.3 17 12.7 21 11.8 25
                        Z
                    "
                    fill="url(#bristles)"
                />

                {/* shading down the left edge for roundness */}
                <path
                    d="M6.5 25C5.9 20 5.4 15 6 9C6 9 6.6 17 7.6 25Z"
                    fill="url(#bristleShadowL)"
                />

                {/* Individual fiber strands - close together, slim fan */}
                <g strokeLinecap="round" filter="url(#tinyBlur)">
                    <path d="M6.4 23.5C6 18 6.2 11 7.6 4.5" stroke="#FFDFF6" strokeWidth="0.4" opacity="0.75" />
                    <path d="M7.3 24.2C7 18.5 7.2 11.5 8.1 3.8" stroke="#FFEAFA" strokeWidth="0.38" opacity="0.7" />
                    <path d="M8.2 24.6C8.1 18.5 8.2 10.5 8.7 2.6" stroke="#FFF2FA" strokeWidth="0.42" opacity="0.8" />
                    <path d="M9 24.8C9 18.5 9 10 9 1.6" stroke="#FFFFFF" strokeWidth="0.45" opacity="0.85" />
                    <path d="M9.8 24.6C9.9 18.5 9.8 10.5 9.3 2.6" stroke="#FFF2FA" strokeWidth="0.42" opacity="0.78" />
                    <path d="M10.7 24.2C11 18.5 10.8 11.5 9.9 3.8" stroke="#FFD9EF" strokeWidth="0.38" opacity="0.7" />
                    <path d="M11.6 23.5C12 18 11.8 11 10.4 4.5" stroke="#FFCEEA" strokeWidth="0.4" opacity="0.72" />
                </g>

                {/* a couple of flyaway wisps near the tip */}
                <path d="M8.2 3.2C7.8 2.2 7.9 1.2 8.6 0.4" stroke="#FFEFFA" strokeWidth="0.35" strokeLinecap="round" opacity="0.6" />
                <path d="M9.9 3C10.3 2 10.1 1 9.4 0.3" stroke="#FFEFFA" strokeWidth="0.35" strokeLinecap="round" opacity="0.6" />

                {/* highlight sweep, light from upper-left */}
                <path
                    d="M7 17C6.7 11.5 7.6 6 9.3 2C7.7 6 7 11.5 7 17Z"
                    fill="url(#bristleLight)"
                />

                {/* ================================= */}
                {/* SLIM METAL FERRULE */}
                {/* ================================= */}

                <path
                    d="
                        M6.4 24
                        C6.4 23.4 6.9 23 7.5 23
                        H10.5
                        C11.1 23 11.6 23.4 11.6 24
                        L12.6 31.3
                        C12.7 32.2 12 33 11.1 33
                        H6.9
                        C6 33 5.3 32.2 5.4 31.3
                        L6.4 24
                        Z
                    "
                    fill="url(#metal)"
                />

                {/* crimp rings */}
                <path d="M6.1 26.4H12" stroke="#7A4C58" strokeOpacity="0.3" strokeWidth="0.4" />
                <path d="M5.9 29H12.2" stroke="#7A4C58" strokeOpacity="0.3" strokeWidth="0.4" />

                {/* top lip where bristles insert */}
                <ellipse cx="9" cy="23.4" rx="3" ry="0.7" fill="url(#metalTop)" />

                {/* ferrule shine + shadow line */}
                <path d="M7.4 24L7.8 31" stroke="white" strokeOpacity="0.7" strokeWidth="0.45" strokeLinecap="round" />
                <path d="M6.4 31.6H11.6" stroke="#7A4C58" strokeOpacity="0.4" strokeWidth="0.45" />

                {/* ================================= */}
                {/* SLIM TAPERED HANDLE */}
                {/* ================================= */}

                <path
                    d="
                        M7.3 32.6
                        H10.7
                        C10.85 39 10.9 46 10.7 52
                        C10.6 54.4 10 56 9 56.6
                        C8 56 7.4 54.4 7.3 52
                        C7.1 46 7.15 39 7.3 32.6
                        Z
                    "
                    fill="url(#handle)"
                />

                {/* rim highlight where handle meets ferrule */}
                <ellipse cx="9" cy="32.8" rx="2.1" ry="0.5" fill="#FFFFFF" opacity="0.35" />

                {/* gloss streak */}
                <path d="M8 35V53" stroke="url(#handleShine)" strokeWidth="0.75" strokeLinecap="round" />

                {/* rounded tip highlight */}
                <ellipse cx="9" cy="56" rx="1" ry="1.1" fill="#FFE8F4" opacity="0.5" />
                </g>
            </svg>
        </motion.div>
    );
}