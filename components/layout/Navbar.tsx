"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import DownloadButton from "../DownloadButton";
import { motion } from "motion/react";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Inspiration", href: "#inspiration" },
    { label: "Artists", href: "#artists" },
    { label: "Stories", href: "#stories" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("Home");

    return (
        <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border/50">
            <nav className="mx-auto flex container items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2">
                    <span className="flex size-6 text-2xl items-center font-mono justify-center rounded-md bg-linear-to-br from-pink-400 to-orange-300 font-semibold text-white">
                        S
                    </span>
                    <span className="font-serif text-xl font-medium text-[#372D38]">
                        Stunner
                    </span>
                </a>

                {/* Desktop nav links */}
                <ul className="hidden items-center gap-4 lg:gap-8 md:flex px-3 ">
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
                                        transition={{ type: "spring", stiffness: 150, bounce: 0.2 }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA button */}
                <div className="hidden md:block">

                    <DownloadButton />
                </div>

                {/* Mobile menu (shadcn Sheet) */}
                <Sheet>
                    <SheetTrigger render={
                        <button className="md:hidden" aria-label="Toggle menu">
                            <Menu className="size-6" />
                        </button>
                    }>
                        <button className="md:hidden" aria-label="Toggle menu">
                            <Menu className="size-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-72">
                        <ul className="mt-10 flex flex-col gap-6 px-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() => setActive(link.label)}
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
                            <Button variant="gradient" className="group h-10 w-full">
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