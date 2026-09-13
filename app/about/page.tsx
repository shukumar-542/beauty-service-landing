import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Stunner Alert",
  description:
    "Stunner Alert makes beauty booking simple, convenient, and beautifully organized across Australia. Learn about our mission.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-20 ">
      <h1 className="font-serif text-3xl md:text-5xl text-[#372D38] mb-8">
        About Us
      </h1>

      <div className="space-y-5 text-[15px] leading-relaxed text-[#533F4E]">
        <p>
          Stunner Alert makes beauty booking simple, convenient, and
          beautifully organized.
        </p>

        <p>
          Our platform helps you discover beauty services and connect with
          professionals in a simple and seamless way.
        </p>

        <p>
          We believe booking a beauty service should feel effortless,
          personal, and enjoyable.
        </p>

        <p className="font-semibold text-[#372D38]">
          Beauty, booked beautifully.
        </p>
      </div>
    </div>
  );
}