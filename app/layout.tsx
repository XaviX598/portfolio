import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { getSiteUrl, seoDefaults } from "@/lib/seo";

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
  metadataBase: getSiteUrl(),
  title: seoDefaults.defaultTitle,
  description: seoDefaults.defaultDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo pestaña.png",
  },
  keywords: [
    "Xpress Developer",
    "agencia desarrollo software",
    "desarrollador página web",
    "crear sitio web",
    "landing page",
    "desarrollo Android",
    "desarrollo iOS",
    "app Android",
    "app iOS",
    "inteligencia artificial",
    "chat IA",
    "integración IA",
    "desarrollo web",
    "empresa desarrollo software",
    "desarrollador React",
    "desarrollador React Native",
    "tienda online",
    "ecommerce",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
    url: "/",
    siteName: "Xpress Developer",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: seoDefaults.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Xpress Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
    images: [seoDefaults.defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} bg-black font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

