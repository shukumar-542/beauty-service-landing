"use client"
import { Apple, PlayCircle } from "lucide-react";
import mobile from "@/public/images/app.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DownloadAppSection() {
    return (
        <section className="mt-10 container mx-auto px-6">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#FFD9EE] via-[#FFDCE8] to-[#FFE3C7] py-6 lg:py-2 shadow-xl ">
                <div className="grid grid-cols-1 items-center gap-10 px-4  sm:px-12 lg:grid-cols-2">
                    {/* Left: copy */}
                    <div className="relative z-10  ">
                        <div className="mb-5 flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-pink-500" />
                            <span className="text-xs font-semibold tracking-wider text-[#7a5a68] uppercase">
                                The Stunner App
                            </span>
                        </div>

                        <h2 className="font-serif text-4xl leading-[1.15] text-[#372D38] sm:text-5xl">
                            Your next glow-up,
                            <br />
                            
                        </h2>

                        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#7a6b76]">
                            Find your people. Keep your appointments. Save the looks that
                            make you feel most like you.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button
                                render={<a href="#" />}
                                nativeButton={false}
                                className="h-auto w-full items-center gap-2.5 rounded-full bg-[#372D38] px-5 py-3 text-white hover:bg-[#372D38]/90 lg:w-auto"
                            >
                                <Apple className="size-6 shrink-0" />
                                <span className="text-left leading-tight">
                                    <span className="block text-[10px] text-white/70">
                                        Download on the
                                    </span>
                                    <span className="block text-sm font-semibold">
                                        App Store
                                    </span>
                                </span>
                            </Button>

                            <Button
                                render={<a href="#" />}
                                nativeButton={false}
                                className="h-auto w-full items-center gap-2.5 rounded-full bg-[#372D38] px-5 py-3 text-white hover:bg-[#372D38]/90 lg:w-auto"
                            >
                                <PlayCircle className="size-6 shrink-0" />
                                <span className="text-left leading-tight">
                                    <span className="block text-[10px] text-white/70">
                                        Get it on
                                    </span>
                                    <span className="block text-sm font-semibold">
                                        Google Play
                                    </span>
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Right: mobile mockup image */}
                    <div className=" w-full lg:max-w-120 ">
                        <Image src={mobile} alt="Mobile App" className="h-auto w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}