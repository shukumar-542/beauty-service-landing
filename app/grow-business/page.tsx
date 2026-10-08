import React from "react";

export default function page() {
  return (
    <div className="container mx-auto px-6 py-20">
      <p className="text-xs uppercase tracking-wide text-[#8B7A85] mb-2 pt-5">
        Welcome to Stunner Alert!
      </p>

      <h2 className="font-serif text-3xl md:text-5xl text-[#372D38] mb-8">
        Grow Your Business With Us
      </h2>

      <div className="space-y-6 text-[15px] leading-relaxed text-[#533F4E]">
        <p>
          Calling all independent pros and creative talents—we want you! Are
          you a talented event professional looking to reach more clients? We
          are always looking for passionate creators to join our community.
          When you list your services with us, you gain access to an
          easy-to-use booking and payment-facilitation platform built to
          streamline your business. Let us handle the admin and booking
          logistics so you can focus on showcasing your craft and doing what
          you love.
        </p>

        <p className="pt-2 font-semibold text-[#372D38]">
          Let's make every event stunning.
        </p>

        <p>
          Send your enquiry directly to{" "}
          <a
            href="mailto:info@stunneralert.com.au"
            className="font-semibold text-[#372D38] underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            info@stunneralert.com.au
          </a>{" "}
          for more information.
        </p>
      </div>
    </div>
  );
}