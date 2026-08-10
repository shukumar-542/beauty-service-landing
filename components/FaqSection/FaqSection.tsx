"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "How do I book an appointment?",
    answer:
      "Choose a service, find an artist whose work you love, then select a time that fits. You will receive confirmation instantly in the app.",
  },
  {
    question: "When am I charged?",
    answer:
      "You are charged after your appointment is confirmed by the artist, not before.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "You can reschedule anytime up to 24 hours before your appointment directly from the app.",
  },
  {
    question: "How are artists verified?",
    answer:
      "Every artist goes through a manual review of their portfolio, credentials, and client reviews before joining the platform.",
  },
];

export default function FaqSection() {
  return (
  <Accordion multiple={false} defaultValue={["item-0"]} className="w-full font-sans">
  {FAQS.map((faq, i) => (
    <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
      <AccordionTrigger className="group py-5 text-[14px] text-left font-semibold text-[#533F4E] hover:no-underline ">
        {faq.question}
        <Plus className="ml-auto size-4 shrink-0 text-pink-400 transition-transform duration-200 block! group-data-panel-open:hidden!" />
        <Minus className="ml-auto hidden size-4 shrink-0 text-pink-400 transition-transform duration-200 group-data-panel-open:block!" />
      </AccordionTrigger>
      <AccordionContent className="pb-5 text-sm leading-relaxed text-[#887986]">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
  );
}