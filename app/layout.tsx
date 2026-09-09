import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import CursorDot from "@/components/CursorDot";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
   title: {
    default: "Stunner Alert | Beauty, Booked Beautifully",
    template: "%s | Stunner Alert",
  },
  description: "Discover s and book beauty services with Stunner Alert. Find talented beauty artists and book your next beauty experience with ease.",
   keywords: [
    "beauty services",
    "beauty booking",
    "beauty artists",
    "beauty salon",
    "makeup artist",
    "hair styling",
    "nail art",
    "lash extensions",
    "Stunner Alert",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        dmSerifDisplay.variable,
        "font-sans"
      )}
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <Navbar />

        <CursorDot />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}