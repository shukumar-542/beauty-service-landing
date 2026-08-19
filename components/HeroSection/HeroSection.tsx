"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import DownloadButton from "../DownloadButton";
import TagText from "../ui/TagText";
import GradientText from "../ui/Gradienttext";

const heroImage = "/images/herobg-mobile.webp";

const AVATARS = [
    "/images/artist1.png",
    "/images/artist2.png",
    "/images/artist3.png",
];

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#FFF9FA]">
            {/* Background Image */}
            <Image
                src={heroImage}
                alt="Hero Background"
                fill
                sizes="(max-width: 768px) 150vw, 100vw"
                quality={90}
                priority
                className="
                object-cover
                object-[78%_center]
                sm:object-[72%_center]
                md:object-[68%_center]
                lg:object-center
                "
            />

            {/* White Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/60 to-white/10" />

            <div className="relative flex min-h-180 container mx-auto items-center px-6 lg:px-8">
                {/* Left Content */}
                <div className="">
                    <div>
                        <TagText text="THE EVENT PREP, REIMAGINED" />

                        <div className="flex flex-col xl:flex-row xl:gap-4">
                            <h2 className="font-serif text-5xl  text-neutral-900 xl:text-7xl">Services</h2>
                            <GradientText text={"booked"} className="text-5xl xl:text-7xl" />
                        </div>
                        <h2 className="font-serif text-5xl  text-neutral-900 sm:text-7xl">
                            seamlessly.{" "}
                        </h2>
                    </div>





                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        {/* <button className="flex items-center gap-2 rounded-full bg-linear-to-r from-pink-400 to-orange-300 px-7 py-4 font-medium text-white shadow-lg transition hover:scale-105">
                            Download app
                            <Download size={18} />
                        </button> */}

                        <DownloadButton name="Download App" className="py-7 px-7" icon={Download} gradient="from-pink-400 to-orange-300" rotateIcon={false} />
                        {/* <DownloadButton name="Explore artists" className="py-6 " icon={ArrowRight} rotateIcon={false} /> */}



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

                    </div>

                    {/* Users */}
                    <div className="mt-10 flex items-center gap-4">
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
                            <p className="text-sm text-gray-500">
                                beauty lovers and counting
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}