import type { Metadata } from "next";
import Script from "next/script";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EmailCTA from "@/components/EmailCTA/EmailCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const GA_MEASUREMENT_ID = "G-LGEZZ1DX43";

export const metadata: Metadata = {
  metadataBase: new URL("https://stunneralert.com.au"),

  title: "Stunner Alert | Makeup, Cake & Photography in Australia",
  description:
    "Book trusted beauty and photography professionals across Australia for weddings, parties, and events with Stunner Alert.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Stunner Alert | Makeup, Cake & Photography in Australia",
    description:
      "Discover and book makeup artists, cake artists, and photographers across Australia for weddings, parties, and events.",
    type: "website",
    locale: "en_AU",
    siteName: "Stunner Alert",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stunner Alert - Beauty and Photography Services Australia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stunner Alert | Makeup, Cake & Photography in Australia",
    description:
      "Discover and book makeup artists, cake artists, and photographers across Australia for weddings, parties, and events.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Stunner Alert",
    image: "https://stunneralert.com.au/images/og-image.png",
    "@id": "https://stunneralert.com.au",
    url: "https://stunneralert.com.au",
    description:
      "Beauty and photography services across Australia for brides, weddings, parties, and events.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
    },
    areaServed: "AU",
    priceRange: "$$",
  };

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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Navbar />

        {/* <CursorDot /> */}

        <main className="flex-1">{children}</main>

        <Footer />
        <EmailCTA />
      </body>
    </html>
  );
}