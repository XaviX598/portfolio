import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xavier Aguilar | Portfolio",
  description: "Portfolio of Xavier Aguilar",
  other: {
    "google-adsense-account": "ca-pub-6114688431846739",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6114688431846739"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Ads network script */}
        <Script
          src="https://pl28610658.effectivegatecpm.com/04/e0/be/04e0be2b9e50b49d5410a2fe2a75c0aa.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
