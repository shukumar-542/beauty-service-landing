"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import DownloadButton from "../DownloadButton";

const heroImage = "/images/herobg.png";

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
                    <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D47B8C]">
                        ● THE BEAUTY APPOINTMENT, REIMAGINED
                    </span>

                    <h1 className="text-5xl font-black leading-[1.05] text-[#342A39] lg:text-7xl">
                        Services,{" "}
                        <span className="font-serif italic text-[#FF9CB0]">
                            seamlessly.
                        </span>
                        <br />
                        beautifully.
                    </h1>

                    <p className="mt-6 max-w-md text-lg leading-8 text-gray-500">
                        Discover brilliant beauty professionals, book instantly, and arrive feeling entirely taken care of.
                    </p>

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