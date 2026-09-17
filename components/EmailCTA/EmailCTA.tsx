"use client";

import { useState } from "react";

import { Check, Loader2, Mail, Send, X } from "lucide-react";

export default function EmailCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || isLoading) return;

    setIsLoading(true);
    setIsSuccess(false);

    // Temporary loading
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);
    setEmail("");

    // Success message কিছুক্ষণ পর আবার form দেখাবে
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div
      className="
        fixed
        right-4 bottom-4
        sm:right-5 sm:bottom-5
        lg:right-10 lg:bottom-8
        xl:right-10 xl:bottom-10
        z-50
      "
    >
      {isOpen && (
        <div
          className="
            mb-3
            w-[calc(100vw-32px)]
            max-w-[320px]
            rounded-2xl
            bg-white
            p-4
            shadow-xl
            ring-1
            ring-black/5
          "
        >
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">
                Be First to Know
              </h3>

              <p className="my-1 text-xs leading-5 text-gray-500">
                Join the exclusive waitlist and be among the first to
                experience Stunner Alert.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                rounded-full
                p-1
                text-gray-400
                transition
                hover:bg-gray-100
                hover:text-gray-700
              "
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {isSuccess ? (
            <div
              className="
                flex
                items-center
                gap-3
                rounded-xl
                bg-green-50
                px-3
                py-3
                text-sm
                text-green-700
              "
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                <Check size={17} />
              </div>

              <div>
                <p className="font-medium">You're on the list!</p>

                <p className="mt-0.5 text-xs text-green-600">
                  We&apos;ll keep you updated about the launch.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 py-2"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="
                  min-w-0
                  flex-1
                  rounded-xl
                  border
                  border-gray-200
                  px-3
                  py-2
                  text-sm
                  outline-none
                  transition
                  focus:border-[#FFA3FF]
                  disabled:cursor-not-allowed
                  disabled:bg-gray-50
                "
              />

              <button
                type="submit"
                disabled={isLoading}
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-linear-to-r
                  from-[#FFA3FF]
                  to-[#FFB172]
                  text-white
                  transition
                  hover:scale-105
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  disabled:hover:scale-100
                "
                aria-label="Join waitlist"
              >
                {isLoading ? (
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </form>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex
          h-11
          items-center
          gap-2
          rounded-full
          bg-linear-to-r
          from-[#FFA3FF]
          to-[#FFB172]
          px-4
          text-xs
          font-medium
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-105

          sm:h-12
          sm:px-5
          sm:text-sm
        "
      >
        {isOpen ? (
          <X size={17} />
        ) : (
          <Mail size={17} />
        )}

        <span>
          {isOpen ? "Close" : "Join the Waitlist"}
        </span>
      </button>
    </div>
  );
}
