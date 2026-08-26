import { CircleDot } from "lucide-react";
import gpay from "@/public/images/gpay.png"
import Image from "next/image";
import AnimatedContent from "../ui/AnimatedContent";
import stripe from "@/public/images/stripe.png"
export default function PaymentsHero() {
  return (
    <section className="bg-linear-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5] px-6 py-16 sm:py-24">
      <AnimatedContent
        direction="up"
        delay={0.2}
        duration={0.6}
        distance={30}
        once={false} className="mx-auto grid container grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left: copy */}
        <div>
          <Image src={stripe} alt="stripe" className=" w-26 object-contain " quality={200} />

          <h2 className=" text-3xl font-extrabold leading-tight text-[#372D38] sm:text-4xl">
            Payments
            <br />
            Infrastructure
          </h2>

          <div className="mt-4 h-0.5 w-10 bg-rose-300" />



          <p className="mt-3  text-sm leading-relaxed text-[#533F4E]">
            Stripe makes it easy to pay securely online, using your preferred payment method. Fast, simple, and secure
          </p>
        </div>

        {/* Right: payment card mockup */}
        <div className="relative mx-auto w-full max-w-sm">
          {/* Floating status pill */}
          <div className="absolute top-16  -right-6 xl:-right-16 z-10 flex items-center gap-1.5 rounded-full bg-white/30 px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-md">
            <CircleDot className="h-3 w-3 text-orange-400" />
            Live payments active
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-neutral-400">
                PAYMENT METHOD
              </span>
              <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-[#C060C0]">
                SUCCESS
              </span>
            </div>

            {/* Amount */}
            <p className="mt-4 text-3xl font-extrabold text-neutral-900">
              $89.00
            </p>
            <p className="mt-1 text-sm text-neutral-400">Payment successful</p>

            <div className="mt-5 border-t border-neutral-100" />

            {/* Credit / Debit */}
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400">Credit / Debit Cards</p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  Visa/Master •••• 4242
                </p>
              </div>
              <span className="text-xs font-bold italic text-blue-700">
                VISA
              </span>
            </div>

            <div className="mt-4 border-t border-neutral-100" />

            {/* Google Pay */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400">Google PAY</p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  james@example.com
                </p>
              </div>
              <span className="text-xs font-semibold text-neutral-600">
                <Image src={gpay} alt="gpay" className="h-10 w-10 object-contain" />
              </span>
            </div>

            {/* Gradient card visual */}
            <div className="mt-6 flex items-center justify-between rounded-xl bg-linear-to-r from-[#FFA3FF]  to-[#FFB172] px-5 py-6 text-white shadow-inner">
              <span className="text-sm font-medium ">
                •••• •••• •••• 4242
              </span>
              <span className="text-sm font-bold italic">VISA</span>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}