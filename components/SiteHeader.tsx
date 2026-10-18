import Link from "next/link";
import { QUOTE_MESSAGE, whatsappUrl } from "@/lib/contact";

// Barra simple para las páginas internas: nombre, enlaces a las secciones y una acción.
export default function SiteHeader() {
  return (
    <header className="page-x flex items-center justify-between bg-ground py-6 text-[15px]">
      <Link href="/" className="text-lg font-extrabold tracking-[-0.03em]" aria-label="Xpress Developer, inicio">
        Xpress
      </Link>
      <nav className="flex items-center gap-5 md:gap-7" aria-label="Principal">
        <Link href="/soluciones" className="link hidden no-underline hover:underline md:inline">
          Soluciones
        </Link>
        <Link href="/proyectos" className="link hidden no-underline hover:underline md:inline">
          Proyectos
        </Link>
        <Link href="/servicios" className="link no-underline hover:underline">
          Servicios
        </Link>
        <a className="link" href={whatsappUrl(QUOTE_MESSAGE.es)} target="_blank" rel="noreferrer">
          Cotizar
        </a>
      </nav>
    </header>
  );
}
