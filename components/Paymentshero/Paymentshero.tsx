"use client";

import { CircleDot } from "lucide-react";

export default function PaymentsHero() {
  return (
    <section className="bg-gradient-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5] px-6 py-16 sm:py-24">
      <div className="mx-auto grid container grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left: copy */}
        <div>
          <h1 className="bg-gradient-to-r from-fuchsia-500 via-pink-400 to-orange-300 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
            Stripe
          </h1>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-neutral-900 sm:text-4xl">
            Payments
            <br />
            Infrastructure
          </h2>

          <div className="mt-4 h-0.5 w-10 bg-rose-300" />

          <p className="mt-5 text-lg font-medium text-neutral-700">
            for the internet
          </p>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-500">
            Stripe makes it easy to pay securely online, using your preferred
            payment method. Fast, simple, and secure
          </p>
        </div>

        {/* Right: payment card mockup */}
        <div className="relative mx-auto w-full max-w-sm">
          {/* Floating status pill */}
          <div className="absolute -top-5 right-2 z-10 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-md">
            <CircleDot className="h-3 w-3 text-orange-400" />
            Live payments active
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-neutral-400">
                PAYMENT METHOD
              </span>
              <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-500">
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
                G Pay
              </span>
            </div>

            {/* Gradient card visual */}
            <div className="mt-6 flex items-center justify-between rounded-xl bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300 px-5 py-6 text-white shadow-inner">
              <span className="text-sm font-medium tracking-widest">
                •••• •••• •••• 4242
              </span>
              <span className="text-sm font-bold italic">VISA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}