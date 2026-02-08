import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Shamrock Hardscapes and Restoration — Landscape Design & Hardscaping in Elburn, IL",
    template: "%s | Shamrock Hardscapes and Restoration",
  },
  description:
    "Full-service landscaping company serving Chicago and surrounding suburbs since 1997. Landscape design, hardscaping, landscape lighting, and commercial snow removal.",
  keywords: [
    "landscaping Elburn IL",
    "hardscaping Chicago",
    "landscape design",
    "landscape lighting",
    "commercial snow removal",
    "patio installation",
    "retaining walls",
    "Shamrock Hardscapes",
  ],
  openGraph: {
    title: "Shamrock Hardscapes and Restoration",
    description:
      "Proudly serving Chicago and surrounding suburbs since 1997. Inspire. Design. Build. Maintain.",
    type: "website",
    locale: "en_US",
    siteName: "Shamrock Hardscapes and Restoration",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamrock Hardscapes and Restoration",
    description:
      "Full-service landscaping — from brick paving to yard maintenance to landscape lighting.",
    site: "@Shamrock_Land",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-shamrock-500 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <StructuredData />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
