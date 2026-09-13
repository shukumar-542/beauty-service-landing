import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Stunner Alert",
  description:
    "Read Stunner Alert's Privacy Policy to learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="font-serif text-3xl md:text-5xl text-[#372D38] mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-5 text-[15px] leading-relaxed text-[#533F4E]">
        <p>
          Your privacy is important to us. This Privacy Policy explains how
          we collect, use, and protect your information.
        </p>

        <p>
          We only collect information that is necessary to provide and
          improve our services.
        </p>

        <p>We do not sell your personal information to third parties.</p>

        <p>
          By using our services, you agree to the collection and use of
          information in accordance with this Privacy Policy.
        </p>
      </div>
    </div>
  );
}