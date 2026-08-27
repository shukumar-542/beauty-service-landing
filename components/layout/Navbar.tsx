"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { motion } from "motion/react";

import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import DownloadButton from "../DownloadButton";

import logo from "@/public/images/icon.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Stunner", href: "#stunner" },
  { label: "Inspiration", href: "#inspiration" },
  { label: "Artists", href: "#artists" },
  { label: "Sneak Peak", href: "#SneakPeak" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // =========================
  // Navbar Scroll Effect
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // Active Section
  // =========================

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter((section): section is Element => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        const visibleSection = visibleSections[0];

        if (!visibleSection) return;

        const activeLink = NAV_LINKS.find(
          (link) =>
            link.href === `#${visibleSection.target.id}`
        );

        if (activeLink) {
          setActive(activeLink.label);
        }
      },
      {
        threshold: [0.2, 0.3, 0.5, 0.7],
        rootMargin: "-90px 0px -35% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // =========================
  // Mobile Nav Click
  // =========================

  const handleMobileNavClick = (label: string) => {
    setActive(label);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 w-full
        transition-all duration-300 px-4
        ${isScrolled
          ? "border-b border-border/50 bg-background/90 py-2 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background/90 py-1 backdrop-blur-sm"
        }
      `}
    >
      <nav
        className="
          container mx-auto
          flex items-center justify-between
          px-4
          sm:px-6
          lg:px-8
          xl:px-0
        "
      >
        {/* =========================
            Logo
        ========================== */}

        <a
          href="#home"
          className="relative flex shrink-0 items-center"
          onClick={() => {
            setActive("Home");
            setIsMenuOpen(false);
          }}
        >
          <div
            className={`
              relative shrink-0
              transition-all duration-300
              ${isScrolled
                ? "h-9 w-32 sm:h-10 sm:w-40"
                : "h-12 w-36 sm:h-14 sm:w-40 lg:h-16 lg:w-44"
              }
            `}
          >
            <Image
              src={logo}
              alt="Stunner logo"
              fill
              priority
              sizes="(max-width: 640px) 144px, (max-width: 1024px) 160px, 176px"
              className="object-contain"
            />
          </div>
        </a>

        {/* =========================
            Desktop Navigation
        ========================== */}

        <ul
          className="
            hidden
            items-center
            gap-3
            lg:flex
            xl:gap-6
            2xl:gap-8
          "
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`
                  relative
                  whitespace-nowrap
                  pb-1
                  text-sm
                  font-medium
                  transition-colors
                  ${active === link.label
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {link.label}

                {active === link.label && (
                  <motion.span
                    layoutId="nav-underline"
                    className="
                      absolute
                      inset-x-0
                      -bottom-px
                      h-0.5
                      bg-linear-to-r
                      from-pink-400
                      to-orange-300
                    "
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      bounce: 0.2,
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* =========================
            Desktop CTA
        ========================== */}

        <div className="hidden shrink-0 lg:block">
          <DownloadButton name="Download App" onClick={() => {
            setIsMenuOpen(false);

            document.getElementById("SneakPeak")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }} />
        </div>

        {/* =========================
            Mobile / Tablet Menu
        ========================== */}

        <Sheet
          open={isMenuOpen}
          onOpenChange={setIsMenuOpen}
        >
          <SheetTrigger
            render={
              <button
                type="button"
                className="
                  flex
                  size-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border/50
                  transition-colors
                  hover:bg-muted
                  lg:hidden
                "
                aria-label="Toggle menu"
              >
                <Menu className="size-5" />
              </button>
            }
          />

          <SheetContent
            side="right"
            className="
              w-[85%]
              max-w-sm
              px-0
            "
          >
            {/* =========================
                Mobile Logo
            ========================== */}

            <div className="border-b border-border/50 px-6 pb-5 pt-4">
              <a
                href="#home"
                className="inline-flex"
                onClick={() => {
                  setActive("Home");
                  setIsMenuOpen(false);
                }}
              >
                <div className="relative h-12 w-36">
                  <Image
                    src={logo}
                    alt="Stunner logo"
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            {/* =========================
                Mobile Links
            ========================== */}

            <ul className="mt-6 flex flex-col gap-2 px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() =>
                      handleMobileNavClick(link.label)
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      rounded-lg
                      px-3
                      py-3
                      text-sm
                      font-medium
                      transition-colors
                      ${active === link.label
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* =========================
                Mobile CTA
            ========================== */}

            <div className="mt-5 px-6">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);

                  document.getElementById("SneakPeak")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="
                  group
                  h-11
                  w-full
                  rounded-full
                  border-0
                  bg-linear-to-r
                  from-[#FFA3FF]
                  to-[#FFB172]
                  text-white
                  shadow-none
                  transition-transform
                  hover:scale-[1.02]
                  hover:bg-linear-to-r
                  hover:from-[#FFA3FF]
                  hover:to-[#FFB172]
                "
              >
                Download App

                <ArrowUpRight
                  className="
                    size-4
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}