"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import DownloadButton from "../DownloadButton";
import { motion } from "motion/react";
import logo from "@/public/images/icon.png";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Inspiration", href: "#inspiration" },
    { label: "Why Stunner", href: "#stunner" },
    { label: "Artists", href: "#artists" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);

    // Navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
  const sections = NAV_LINKS.map((link) =>
    document.querySelector(link.href)
  ).filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) {
        const activeLink = NAV_LINKS.find(
          (link) => link.href === `#${visibleSection.target.id}`
        );

        if (activeLink) {
          setActive(activeLink.label);
        }
      }
    },
    {
      threshold: 0.3,
      rootMargin: "-80px 0px -40% 0px",
    }
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm py-2"
                : "bg-transparent border-b border-transparent py-4"
                }`}
        >
            <nav className="mx-auto flex container items-center justify-between px-2 xl:px-0 transition-all duration-300">

                {/* Logo */}
                <a href="#home" className="relative flex items-center">
                    <div
                        className={`relative shrink-0 transition-all duration-300 ${isScrolled ? "h-10 w-40" : "h-16 w-44"
                            }`}
                    >
                        <Image
                            src={logo}
                            alt="Stunner logo"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>
                </a>

                {/* Desktop nav links */}
                <ul className="hidden items-center gap-4 px-3 md:flex lg:gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={() => setActive(link.label)}
                                className={`relative pb-1 text-sm font-medium transition-colors ${active === link.label
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {link.label}

                                {active === link.label && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute inset-x-0 -bottom-px h-0.5 bg-linear-to-r from-pink-400 to-orange-300"
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

                {/* CTA button */}
                <div className="hidden md:block">
                    <DownloadButton name="Download App" />
                </div>

                {/* Mobile menu */}
                <Sheet>
                    <SheetTrigger
                        render={
                            <button
                                className="md:hidden"
                                aria-label="Toggle menu"
                            >
                                <Menu className="size-6" />
                            </button>
                        }
                    >
                        <button
                            className="md:hidden"
                            aria-label="Toggle menu"
                        >
                            <Menu className="size-6" />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-72">
                        <ul className="mt-10 flex flex-col gap-6 px-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() =>
                                            setActive(link.label)
                                        }
                                        className={`text-sm font-medium ${active === link.label
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 px-4">
                            <Button
                                variant="gradient"
                                className="group h-10 w-full"
                            >
                                Download app
                                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}