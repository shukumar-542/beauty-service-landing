import Image, { type StaticImageData } from "next/image";
import img1 from "@/public/images/partner1.png";
import img2 from "@/public/images/partner2.png";
import img3 from "@/public/images/partner3.png";
import img4 from "@/public/images/partner4.png";
import img5 from "@/public/images/partner5.png";

const partners: { src: StaticImageData; alt: string }[] = [
  { src: img1, alt: "Lumière" },
  { src: img2, alt: "Véla" },
  { src: img3, alt: "Atelier M" },
  { src: img4, alt: "The Skin Edit" },
  { src: img5, alt: "Nova" },
];

export default function TrustedBy() {
  return (
    <section className="bg-linear-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5] px-6 py-12 sm:py-14">
      <div className="mx-auto container border-t border-neutral-200/70 pt-10">
        <p className="text-center text-xs font-semibold tracking-widest text-neutral-400">
          LOVED BY BEAUTY INSIDERS AT
        </p>

        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-between lg:gap-10">
          {partners.map((p) => (
            <div
              key={p.alt}
              className="relative h-6 w-24 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-7 sm:w-28"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="140px"
                className="object-contain object-center sm:object-left"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 container border-t border-neutral-200/70" />
    </section>
  );
}