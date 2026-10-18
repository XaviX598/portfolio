import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Sin 3840: ninguna pantalla real necesita más de 2048 px de ancho y en celular se ahorra mucho peso.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  // La dirección automática de Vercel servía una copia exacta del sitio: se redirige al dominio
  // para que solo exista una versión y los enlaces viejos sumen al dominio principal.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "portfolio-xavier-aguilar.vercel.app" }],
        destination: "https://www.xpressdeveloper.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
