import type { Metadata } from "next";
import "./globals.css";

import SiteHeader from "@/components/site-header/site-header";
import SiteFooter from "@/components/site-footer/site-footer";

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
        className={`antialiased flex flex-col min-h-screen w-full !max-w-7xl !mx-auto !px-6`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
