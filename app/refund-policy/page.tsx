import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Stunner Alert",
  description:
    "Learn about Stunner Alert's Refund Policy and the circumstances under which refunds may be requested.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="font-serif text-3xl md:text-5xl text-[#372D38] mb-8">
        Refund Policy
      </h1>

      <div className="space-y-5 text-[15px] leading-relaxed text-[#533F4E]">
        <p>
          Our Refund Policy explains the circumstances under which refunds
          may be requested.
        </p>

        <p>
          Please contact our support team if you have any questions
          regarding a refund.
        </p>

        <p>
          Refund requests are reviewed according to our applicable refund
          terms and conditions.
        </p>
      </div>
    </div>
  );
}