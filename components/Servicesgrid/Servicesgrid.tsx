"use client";

import Image from "next/image";
import {
    ArrowUpRight,
    Palette,
    Sparkles,
    Paintbrush,
    Droplet,
    Heart,
    Eye,
} from "lucide-react";

import img1 from "@/public/images/img1.jpg";
import img2 from "@/public/images/img2.jpg";
import img3 from "@/public/images/img3.jpg";
import img4 from "@/public/images/img4.webp";
import img5 from "@/public/images/img5.jpg";
import img6 from "@/public/images/img6.png";

import AnimatedContent from "../ui/AnimatedContent";
import StaggerGrid, { StaggerItem } from "../ui/StaggerGrid";
import GradientText from "../ui/Gradienttext";
import ExploreButton from "../ui/ExploreButton";

const services = [
    {
        title: "Makeup",
        subtitle: "For every version of you",
        icon: Palette,
        image: img1,
    },
    {
        title: "Hair Styling",
        subtitle: "Effortless, perfected",
        icon: Sparkles,
        image: img2,
    },
    {
        title: "Nail Art",
        subtitle: "Tiny works of art",
        icon: Paintbrush,
        image: img3,
    },
    {
        title: "Skincare",
        subtitle: "Your glow, considered",
        icon: Droplet,
        image: img4,
    },
    {
        title: "Bridal Makeup",
        subtitle: "The moment is yours",
        icon: Heart,
        image: img5,
    },
    {
        title: "Lash Extensions",
        subtitle: "A softer kind of drama",
        icon: Eye,
        image: img6,
    },
];

export default function ServicesGrid() {
    return (
        <section className="bg-linear-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5] px-6 py-16 sm:py-20">
            <div className="container mx-auto">

                {/* Header */}
                <AnimatedContent
                    direction="up"
                    delay={0.2}
                    duration={0.6}
                    distance={30}
                    once={false}
                >
                    <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">

                        {/* Heading */}
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#FFA3FF]" />

                                <span className="text-xs font-semibold tracking-widest text-[#9A768E]">
                                    FIND YOUR MOMENT
                                </span>
                            </div>

                            {/* Heading Title */}
                                <h2 className="font-serif text-4xl xl:text-6xl text-[#372D38]">
                                    Your ultimate glow-up
                                </h2>
                            <div className="flex flex-col xl:flex-row gap-4 mt-2">
                                <h2 className="font-serif text-4xl xl:text-6xl text-[#372D38]">
                                    booked in seconds  on
                                </h2>
                                <GradientText className="text-6xl" />
                            </div>
                        </div>

                        {/* Explore link */}
                        <ExploreButton text={"Explore all services"} />
                    </div>
                </AnimatedContent>

                {/* Services Grid */}
                <StaggerGrid
                    staggerDelay={0.2}
                    once={false}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
                >
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <StaggerItem
                                key={service.title}
                                distance={30}
                                duration={0.6}
                            >
                                <div className="group relative aspect-4/3 overflow-hidden rounded-2xl">

                                    {/* Image */}
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                                    {/* Card Content */}
                                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">

                                        {/* Left Content */}
                                        <div className="flex items-center gap-3">

                                            {/* Icon */}
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#FFA3FF] to-[#FFB172]">
                                                <Icon
                                                    className="h-4 w-4 text-white"
                                                    strokeWidth={2}
                                                />
                                            </div>

                                            {/* Text */}
                                            <div>
                                                <p className="text-sm  text-white">
                                                    {service.title}
                                                </p>

                                                <p className="text-xs text-white/70">
                                                    {service.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Arrow Button */}
                                        <button
                                            type="button"
                                            aria-label={`Explore ${service.title}`}
                                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border cursor-pointer text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105"
                                        >
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerGrid>
            </div>
        </section>
    );
}