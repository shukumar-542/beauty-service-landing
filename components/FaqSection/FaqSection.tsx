"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import TagText from "../ui/TagText";

const FAQS = [
  {
    question: "How do I book an appointment?",
    answer:
      "You may request or make a Booking via the app by selecting a Professional, the relevant Professional Services and the other booking details requested through the Platform. Before submitting a Booking, you must review the Professional Services selected, the scheduled date, time and location, the Total Booking Price and any other material Booking information displayed through the Platform. A Booking is confirmed when confirmation is displayed or otherwise communicated to you through the Platform and any payment required at the time of confirmation has been successfully processed",
  },
  {
    question: "When am I charged?",
    answer:
      "An Initial Payment equal to 20% of the Total Booking Price will be charged when the Booking is confirmed. The Balance Payment, being the remaining 80% of the Total Booking Price, will be charged approximately 24 hours before the scheduled commencement time of the Professional Services and will be held or processed through the applicable Stripe Connect payment arrangements pending payout or release in accordance with those arrangements.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "You may request to reschedule a Booking through the app. Any rescheduling of the Professional Services is subject to the availability and agreement of the relevant Professional and is not effective until the rescheduled Booking is confirmed.",
  },
  {
    question: "How are professionals verified?",
    answer:
      "Every professional is verified by their identity, business, qualifications or continuing eligibility to use the Platform, which may include government-issued photographic identification, a photograph or selfie showing them with that identification, qualifications, licences, registrations, hygiene certificates, insurance documents, business details and any relevant business website or professional social media account.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full container mx-auto px-6 py-24  xl:mt-20">
      

      <div className="mx-auto grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,500px)_1fr] lg:gap-24">
        {/* Left column */}
        <div>
          <TagText text="GOOD TO KNOW" />

          <h2 className="font-serif  text-3xl md:text-4xl xl:text-6xl text-[#3D2E38] ">
            Your questions,
            <br />
            <span >answered.</span>
          </h2>

          <p className=" mt-6 max-w-75 text-[15px] leading-relaxed text-[#8B7A85]">
            Still curious? Our friendly support team is only a message away.
          </p>

          <a
            href="#"
            className=" group mt-8 inline-flex items-center gap-1.5 border-b border-[#3D2E38]/70 pb-1 text-[13px] font-semibold text-[#3D2E38] transition-colors hover:border-[#E0669B] hover:text-[#E0669B]"
          >
            Contact Us
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Right column: accordion */}
        <div className="faq-body border-t border-[#3D2E38]/10">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[#3D2E38]/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-[#3D2E38]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#E0669B]">
                    {isOpen ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>

                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="min-h-0">
                    <p className="max-w-150 pb-6 text-[14px] leading-relaxed text-[#8B7A85]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}