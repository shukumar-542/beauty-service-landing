"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorDot() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 25, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 200 });

    useEffect(() => {
        const moveHandler = (e : any) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveHandler);
        return () => window.removeEventListener("mousemove", moveHandler);
    }, []);

    return (
        <motion.div
            style={{
                position: "fixed",
                top: springY,
                left: springX,
                translateX: "-50%",
                translateY: "-50%",
                background: "linear-gradient(135deg, #FFA3FF, #FFB172)",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="pointer-events-none w-8 h-8 rounded-full z-50 hidden md:block"
        />
    );
}