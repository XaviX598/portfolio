import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl, seoDefaults } from "@/lib/seo";

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
    "agencia desarrollo software Ecuador",
    "desarrollo web Ecuador",
    "páginas web Guayaquil",
    "páginas web Quito",
    "crear sitio web Ecuador",
    "empresa desarrollo software Ecuador",
    "desarrollador página web",
    "landing page Ecuador",
    "desarrollo Android",
    "desarrollo iOS",
    "app Android Ecuador",
    "app iOS Ecuador",
    "inteligencia artificial para empresas",
    "chat IA",
    "integración IA",
    "desarrollador React",
    "desarrollador React Native",
    "tienda online Ecuador",
    "ecommerce Ecuador",
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,800&display=swap" rel="stylesheet" />
        {/* Marca que hay JS antes de pintar: las animaciones de entrada solo ocultan contenido si el script corre */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add(\"js\")" }} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

