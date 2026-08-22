import { Play, Heart } from "lucide-react";
import logo from "@/public/images/icon.png";
import Image from "next/image";

type IconProps = { className?: string; strokeWidth?: number };

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 2H22l-7.6 8.68L23.2 22h-6.9l-5.4-6.6L4.7 22H1.6l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.34C15.9 4.24 15 4.15 14 4.15c-2.4 0-4 1.46-4 4.16v2.24H7.4v3h2.6V21h3.5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.75h3.68V21H5.1V8.75Zm6.36 0h3.53v1.68h.05c.49-.93 1.7-1.9 3.5-1.9 3.74 0 4.43 2.46 4.43 5.66V21h-3.68v-5.93c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13V21h-3.59V8.75Z" />
    </svg>
  );
}

const footerLinks = [
  {
    heading: "Company",
    links: ["About us", "Careers", "Press"],
  },
  {
    heading: "Legal",
    links: ["Privacy policy", "Terms & conditions", "Refund policy", "Cookie policy"],
  },
  {
    heading: "Support",
    links: ["Help center", "Contact", "FAQ"],
  },
  {
    heading: "Community",
    links: ["Customer stories", "Beauty inspiration"],
  },
];

const socials = [XIcon, InstagramIcon, FacebookIcon, Play, LinkedinIcon];

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5] px-6 pt-16">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              {/* <Image
                src={logo}
                alt="Stunner logo"
                fill
                priority
                className="object-contain"
              /> */}
            </div>

            <p className="mt-4 text-sm text-neutral-500">
              Beauty, booked beautifully.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:bg-white"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-neutral-900">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-neutral-200/70 py-6 sm:flex-row">
          <p className="text-xs text-neutral-400">
            © 2026 Stunner Alert. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-neutral-400">
            Made for your most luminous life.
            <Heart className="h-3 w-3 fill-rose-300 text-rose-300" />
          </p>
        </div>
      </div>
    </footer>
  );
}