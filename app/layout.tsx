import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/site-header/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fairview Woodcrafts",
  description:
    "Fairview Woodcrafts offers handcrafted, personalized wooden gifts made in Texas. Thoughtfully designed and laser-engraved greeting cards, ornaments, and cutting boards for weddings, holidays, and every meaningful occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full !max-w-7xl !mx-auto !px-6`}
      >
        <SiteHeader />
        {children}
        <footer className="flex w-full max-h-[100px] justify-center mt-auto">
          footer placeholder
        </footer>
      </body>
    </html>
  );
}
