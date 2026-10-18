import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl, organizationSchema, seoDefaults } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: seoDefaults.defaultTitle,
  description: seoDefaults.defaultDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-pestana.png",
  },
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
  },
  twitter: {
    card: "summary_large_image",
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-EC" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,800&display=swap" rel="stylesheet" />
        {/* Marca que hay JS antes de pintar: las animaciones de entrada solo ocultan contenido si el script corre */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add(\"js\")" }} />
      </head>
      <body suppressHydrationWarning>
        <JsonLd data={organizationSchema()} />
        {children}
      </body>
    </html>
  );
}

