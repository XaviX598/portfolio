import Link from "next/link";
import { QUOTE_MESSAGE, whatsappUrl } from "@/lib/contact";

// Barra simple para las páginas internas: nombre, dos enlaces y una acción.
export default function SiteHeader() {
  return (
    <header className="page-x flex items-center justify-between bg-ground py-6 text-[15px]">
      <Link href="/" className="text-lg font-extrabold tracking-[-0.03em]" aria-label="Xpress Developer, inicio">
        Xpress
      </Link>
      <nav className="flex items-center gap-5 md:gap-7" aria-label="Principal">
        <Link href="/#projects" className="link hidden no-underline hover:underline md:inline">
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
