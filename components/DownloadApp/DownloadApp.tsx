import mobile from "@/public/images/app.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TagText from "../ui/TagText";
import appStore from "@/public/images/apple.png"
import googleplay from "@/public/images/google.png"
import InspiratinText from "../ui/InspiratinText";

export default function DownloadAppSection() {
    return (
        <section className="mt-10 container mx-auto px-3 xl:px-6">
            <div className="relative overflow-hidden rounded-md  bg-linear-to-br from-[#FFD9EE] via-[#FFDCE8] to-[#FFE3C7] py-6 lg:py-2 shadow-xl ">
                <div className="grid grid-cols-1 items-center gap-10 px-4  sm:px-12 lg:grid-cols-2">
                    {/* Left: copy */}
                    <div className="relative z-10  ">
                        <TagText text="THE STUNNER ALERT APP" />

                        <h2 className="font-serif  leading-[1.15] text-[#372D38] text-2xl md:text-4xl xl:text-6xl">
                            Ready to stun the world?
                        </h2>

                        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#7a6b76]">
                            Find your squad. Save your favorites. Book Securely. Exprience it yourself.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="relative inline-flex w-full lg:w-auto overflow-hidden rounded-md p-1">
                                <span
                                    className="absolute inset-[-300%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_55%,#FFA3FF_70%,#FFB172_85%,transparent_100%)]"
                                    style={{ animationDuration: "8s" }}
                                />
                                <Button
                                    render={<a href="#" />}
                                    nativeButton={false}
                                    className="relative h-auto w-full items-center gap-2.5 bg-[#000000] rounded-md px-5 py-3 text-white hover:bg-[#372D38]/90 lg:w-auto"
                                >
                                    <Image src={appStore} alt="google" className="h-6 w-6 object-contain" />

                                    <span className="text-left leading-tight">
                                        <span className="block text-[10px] text-white">
                                            Download on the
                                        </span>
                                        <span className="block text-xl font-semibold">
                                            App Store
                                        </span>
                                    </span>
                                </Button>
                            </div>

                            <div className="relative inline-flex w-full lg:w-auto overflow-hidden rounded-md p-1">
                                <span
                                    className="absolute inset-[-300%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_55%,#FFA3FF_70%,#FFB172_85%,transparent_100%)]"
                                    style={{ animationDuration: "8s" }}
                                />
                                <Button
                                    render={<a href="#" />}
                                    nativeButton={false}
                                    className="relative h-auto w-full items-center gap-2.5 rounded-md bg-[#000000] px-5 py-3 text-white hover:bg-[#372D38]/90 lg:w-auto"
                                >
                                    <Image src={googleplay} alt="google" className="h-6 w-6 object-contain" />
                                    <span className="text-left leading-tight">
                                        <span className="block text-[10px] text-white">
                                            Get it on
                                        </span>
                                        <span className="block text-xl font-semibold">
                                            Google Play
                                        </span>
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>



                    <div className="relative mx-auto w-full max-w-125">
                        <Image
                            src={mobile}
                            alt="Mobile App"
                            className="h-auto w-full"
                        />

                        <div className="absolute left-[-12] xl:left-[-10%] top-[5%]">
                            <InspiratinText
                                text="At home"
                                delay={0}
                            />
                        </div>

                        <div className="absolute left-[-4%] top-[40%]">
                            <InspiratinText
                                text="In salon"
                                delay={1}
                            />
                        </div>
                        <div className="absolute left-[-4%] xl:left-[-2%] top-[90%] xl:top-[80%]">
                            <InspiratinText
                                text="At hotel"
                                delay={1}
                            />
                        </div>
                        <div className="absolute right-[-5%]  xl:right-[-5%] top-[90%] xl:top-[80%]">
                            <InspiratinText
                                text="In office"
                                delay={1}
                            />
                        </div>
                        <div className="absolute right-[-5%]  xl:right-[-10%] top-[-5%] xl:top-[10%]">
                            <InspiratinText
                                text="Available today"
                                delay={0}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}