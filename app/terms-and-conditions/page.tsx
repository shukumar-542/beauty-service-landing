import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Stunner Alert",
  description:
    "Read the Terms & Conditions for using Stunner Alert's beauty and photography booking platform.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto  py-20 ">
      <h1 className="font-serif text-3xl md:text-5xl text-[#372D38] mb-8">
        Terms & Conditions
      </h1>

      <div className="space-y-5 text-[15px] leading-relaxed text-[#533F4E]">
        <p>
          By using our services, you agree to follow these Terms &
          Conditions.
        </p>

        <p>
          Please read these terms carefully before using our platform.
        </p>

        <p>
          You agree not to misuse our services or use them for any unlawful
          purpose.
        </p>

        <p>We reserve the right to update these terms when necessary.</p>
      </div>
    </div>
  );
}