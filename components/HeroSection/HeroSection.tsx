"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import DownloadButton from "../DownloadButton";
import TagText from "../ui/TagText";
import GradientText from "../ui/Gradienttext";
import { useEffect, useState } from "react";

const heroImage = "/images/herobg-mobile1.png";

const AVATARS = [
    "/images/artist1.png",
    "/images/artist2.png",
    "/images/artist3.png",
];

// Parent container — children stagger
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

// Drop Evey line from top
const dropVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            damping: 5,
            stiffness: 100,
        },
    },
};

export default function HeroSection() {
    const rotatingWords = ["Beautifully.", "Elegantly.", "Seamlessly." ];

    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#FFF9FA] md:px-6">
            <Image
                src={heroImage}
                alt="Hero Background"
                fill
                sizes="(max-width: 768px) 200vw, 100vw"
                quality={90}
                priority
                className="
                object-cover
                object-[78%_center]
                sm:object-[72%_center]
                md:object-[68%_center]
                lg:object-bottom
                "
            />

            <div className="absolute inset-0 bg-linear-to-r from-white/55 via-white/60 to-white/5" />

            <div className="relative flex min-h-180 md:min-h-195 container mx-auto items-center px-4 xl:px-0">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Heading block */}
                    <motion.div variants={dropVariants} className="overflow-hidden">
                        <TagText text="THE EVENT PREP, REIMAGINED" />
                    </motion.div>

                    <div className="flex flex-col xl:flex-row xl:gap-4 overflow-hidden">
                        <motion.h2
                            variants={dropVariants}
                            className="font-serif text-5xl text-neutral-900 md:text-7xl"
                        >
                            Services
                        </motion.h2>
                        <motion.div variants={dropVariants}>
                            <GradientText text={"Booked"} className="text-5xl md:text-7xl" />
                        </motion.div>
                    </div>

                    <div className="">
                        <motion.div
                            variants={dropVariants}
                            className="flex  font-serif text-5xl text-neutral-900 sm:text-7xl"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={rotatingWords[currentWord]}
                                    className="flex"
                                >
                                    {rotatingWords[currentWord].split("").map((char, index) => (
                                        <motion.span
                                            key={`${char}-${index}`}
                                            initial={{
                                                opacity: 0,
                                                y: -40,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 40,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                                delay: index * 0.05,
                                                ease: "easeOut",
                                            }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                        <p className="mt-5 text-[#746873] text-xs md:text-sm max-w-54.75 md:max-w-125">Every beauty, photography and planning service, on one effortless platform.</p>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        variants={dropVariants}
                        className="mt-8 flex flex-wrap gap-4 overflow-hidden"
                    >
                        <DownloadButton
                            name="Download App"
                            className="py-7 px-9"
                            icon={Download}
                            rotateIcon={false}
                        />
                        <div className="relative inline-flex overflow-hidden rounded-full p-0.5">
                            <span
                                className="absolute inset-[-300%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_55%,#71717a_70%,#a1a1aa_85%,transparent_100%)]"
                                style={{ animationDuration: "8s" }}
                            />
                            <button className="relative flex items-center gap-2 rounded-full cursor-pointer hover:bg-neutral-50 bg-white px-7 py-4 font-medium text-gray-700 shadow transition hover:shadow-lg">
                                Explore artists
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Users */}
                    <motion.div
                        variants={dropVariants}
                        className="mt-10 flex items-center gap-4 overflow-hidden"
                    >
                        <div className="flex -space-x-3">
                            {AVATARS.map((avatar, index) => (
                                <div
                                    key={index}
                                    className="h-11 w-11 overflow-hidden rounded-full border-2 border-white"
                                >
                                    <Image
                                        src={avatar}
                                        alt=""
                                        width={44}
                                        height={44}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <h4 className="font-bold text-[#342A39]">20,000+</h4>
                            <p className="text-sm text-gray-500">beauty lovers and counting</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}