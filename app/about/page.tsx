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
        Welcome to Stunner Alert!
      </p>

      <h1 className="font-serif text-3xl md:text-5xl text-[#372D38] mb-8">
        About Us
      </h1>

      <div className="space-y-6 text-[15px] leading-relaxed text-[#533F4E]">
        <p>
          At Stunner Alert, we believe that planning your next big moment should be just as exciting as the event itself. Whether you are walking down the aisle, hosting a milestone celebration, or capturing memories to last a lifetime, we are here to bring your vision to life.
        </p>

        <p>
          We have built a vibrant online marketplace that connects you directly with a handpicked community of talented, independent Professionals. From flawless hair and makeup artists and visionary photographers and videographers to creative cake artists and seamless event organisers, the perfect team for your event is just a click away. 
        </p>

       
        <p>
          Think of us as your ultimate event co-pilot. Through our platform, you can effortlessly browse professional portfolios, chat directly with creators, and securely manage your bookings and payments all in one place. We handle the logistics so you can focus on what truly matters—celebrating in style. 
        </p>

        <h2 className="font-serif text-xl md:text-2xl text-[#372D38] pt-4">
          Grow Your Business With Us  
        </h2>
        <p>
          Calling all independent pros and creative talents—we want you! Are you a talented event professional looking to reach more clients? We are always looking for passionate creators to join our community. When you list your services with us, you gain access to an easy-to-use booking and payment-facilitation platform built to streamline your business. Let us handle the admin and booking logistics so you can focus on showcasing your craft and doing what you love. 
        </p>

        <p className="pt-4 font-semibold text-[#372D38]">
          Let's make every event stunning. 
        </p>
      </div>

      <div className="mt-12 rounded-xl border border-[#3D2E38]/10 bg-[#fdf3f1]/50 p-5 text-sm text-[#766975]">
        <p>Stunner Alert is operated by STUNNER ALERT PTY LTD (ABN 88 701 443 129).</p>
      </div>
    </div>
  );
}