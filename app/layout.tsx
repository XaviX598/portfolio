import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xpress Developer | Software Development Agency",
  description:
    "Xpress Developer - Software development agency specializing in professional digital products, AI integration, and team training for enterprise.",
  keywords: [
    "Xpress Developer",
    "Software Development",
    "AI Integration",
    "TypeScript",
    "React",
    "Vue",
    "Agency",
  ],
  openGraph: {
    title: "Xpress Developer | Software Development Agency",
    description:
      "Professional software development agency with AI integration and team training.",
    type: "website",
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
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
