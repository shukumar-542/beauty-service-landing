import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Stunner Alert",
  description:
    "Stunner Alert connects you with handpicked, verified beauty and photography professionals across Australia. Learn about our mission and platform.",
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20 ">
      <p className="text-xs uppercase tracking-wide text-[#8B7A85] mb-2">
        Stunner Alert
      </p>

      <h1 className="font-serif text-3xl md:text-5xl text-[#372D38] mb-8">
        About Us
      </h1>

      <div className="space-y-6 text-[15px] leading-relaxed text-[#533F4E]">
        <p>
          Stunner Alert makes beauty and photography booking simple,
          convenient, and beautifully organised. We're an online marketplace
          built for brides, weddings, parties, and every special moment in
          between — connecting you with trusted, independent professionals
          across Australia.
        </p>

        <p>
          Our platform helps you discover beauty services and connect with
          professionals in a simple and seamless way. Browse portfolios,
          compare specialties, read genuine reviews, and book with confidence
          — all in one place, without the endless back-and-forth messaging
          that booking used to involve.
        </p>

        <h2 className="font-serif text-xl md:text-2xl text-[#372D38] pt-4">
          Our Mission
        </h2>
        <p>
          We believe booking a beauty or photography service should feel
          effortless, personal, and enjoyable. Every professional on our
          platform is independently reviewed for quality, skill, and
          professionalism, so you can focus on how you want to look and feel
          — not on the logistics of finding someone you can trust.
        </p>

        <h2 className="font-serif text-xl md:text-2xl text-[#372D38] pt-4">
          What Makes Us Different
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold text-[#372D38]">
              Verified professionals
            </span>{" "}
            — every artist and photographer on Stunner Alert goes through a
            review process before joining the platform.
          </li>
          <li>
            <span className="font-semibold text-[#372D38]">
              Real-time booking
            </span>{" "}
            — see live availability and lock in your exact time slot
            instantly, no waiting on quotes.
          </li>
          <li>
            <span className="font-semibold text-[#372D38]">
              Secure payments
            </span>{" "}
            — all payments are processed securely through Stripe, with
            transparent pricing and no hidden surprises.
          </li>
          <li>
            <span className="font-semibold text-[#372D38]">
              Genuine reviews
            </span>{" "}
            — authentic ratings and before-and-after photos from real
            clients, so you know what to expect.
          </li>
        </ul>

        <p className="pt-4 font-semibold text-[#372D38]">
          Beauty, booked beautifully.
        </p>
      </div>

      <div className="mt-12 rounded-xl border border-[#3D2E38]/10 bg-[#fdf3f1]/50 p-5 text-sm text-[#766975]">
        <p>Stunner Alert is operated by STUNNER ALERT PTY LTD (ABN 88 701 443 129).</p>
      </div>
    </div>
  );
}