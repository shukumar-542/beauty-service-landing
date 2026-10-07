"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/images/01.jpg",
  "/images/02.jpg",
  "/images/03.jpg",
  "/images/04.jpg",
  "/images/05.jpg",
];
export default function HeroSlideshow({
  interval = 3000,
}: {
  interval?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="absolute inset-0 md:hidden">
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hero slide ${index + 1}`}
          fill
          sizes="100vw"
          quality={85}
          priority={index === 0}
          className={`
            object-cover object-center
            transition-opacity duration-1800 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
}