import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getSiteUrl, organizationSchema, seoDefaults, websiteSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

// Cabinet Grotesk (Fontshare, licencia ITF Free Font) servida desde el propio dominio: se precarga
// y no bloquea el primer pintado como la hoja de estilos externa.
const cabinet = localFont({
  src: [
    { path: "./fonts/cabinet-grotesk-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cabinet-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cabinet-grotesk-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-cabinet",
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
    <html lang="es-EC" className={cabinet.variable} suppressHydrationWarning>
      <head>
        {/* Marca que hay JS antes de pintar: las animaciones de entrada solo ocultan contenido si el script corre */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add(\"js\")" }} />
      </head>
      <body suppressHydrationWarning>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        {children}
      </body>
    </html>
  );
}

