import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DownloadButton from "../DownloadButton";
import TagText from "../ui/TagText";
import HeroItem from "../ui/HeroItem";
import HeroAnimation from "../ui/HeroAnimation";

const heroImage = "/images/herobg-mobile1.png";

const AVATARS = [
    "/images/artist1.png",
    "/images/artist2.png",
    "/images/artist3.png",
];

export default function HeroSection() {


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

            <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/60 to-white/5" />

            <div className="relative flex min-h-180 md:min-h-195 container mx-auto items-center px-4  xl:px-10">
                <HeroAnimation>
                    <HeroItem>
                        <TagText text="THE EVENT PREP, REIMAGINED" />
                    </HeroItem>

                    <HeroItem>
                        <h1 className="
                        overflow-visible
                        font-serif
                        text-5xl
                        md:text-7xl
                        bg-linear-to-r
                         from-[#FFA3FF]
                         via-[#FFB172]
                        to-[#FFA3FF]
                         bg-size-[200%_100%]
                        bg-clip-text
                        text-transparent
                        animate-gradient
                        leading-[1.15]
                        ">Ready, Set, Stun</h1>
                    </HeroItem>



                    <HeroItem>
                        <p className="mt-5 text-black text-xs md:text-sm max-w-54.75 md:max-w-125">Every beauty, photography and planning service, on one effortless platform.</p>
                    </HeroItem>


                    {/* Buttons */}
                    <HeroItem>
                        <div
                            className="mt-8 flex flex-wrap gap-4 overflow-hidden"
                        >
                            <DownloadButton
                                name="Download App"
                                className="py-7 px-9"
                                icon="download"
                                rotateIcon={false}
                            />
                            <div className="relative inline-flex overflow-hidden rounded-full p-0.5">
                                <span
                                    className="absolute inset-[-300%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_55%,#71717a_70%,#a1a1aa_85%,transparent_100%)]"
                                    style={{ animationDuration: "8s" }}
                                />
                                <a
                                    href="#artists"
                                    className="relative flex items-center gap-2 rounded-full cursor-pointer hover:bg-neutral-50 bg-white px-7 py-4 font-medium text-gray-700 shadow transition hover:shadow-lg"
                                >
                                    Explore artists
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </HeroItem>

                    {/* Users */}
                    <HeroItem>
                        <div
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
                        </div>
                    </HeroItem>
                </HeroAnimation>
            </div>
        </section>
    );
}