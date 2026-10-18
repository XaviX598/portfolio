import Link from "next/link";
import type { PortfolioLang } from "./HomeClient";

const services = [
  { slug: "sistemas-empresariales", label: "Sistemas empresariales" },
  { slug: "automatizacion-de-procesos", label: "Automatización de procesos" },
  { slug: "pagina-web", label: "Páginas web" },
  { slug: "landing-page", label: "Landing pages" },
  { slug: "ecommerce", label: "Tiendas online" },
  { slug: "desarrollo-android", label: "Apps móviles" },
];

const solutions = [
  { href: "/soluciones/sistema-para-restaurantes", label: "Restaurantes" },
  { href: "/soluciones/software-para-importadoras", label: "Importadoras" },
  { href: "/soluciones/sistema-para-clinicas", label: "Clínicas" },
  { href: "/soluciones/sistema-para-tiendas", label: "Tiendas" },
];

const resources = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/guias", label: "Guías" },
  { href: "/guias/cuanto-cuesta-una-pagina-web-en-ecuador", label: "Precios de páginas web" },
];

// Cierre de la página: tinta y fondo invertidos, el nombre vuelve a todo el ancho.
export default function Footer({ lang }: { lang: PortfolioLang }) {
  const es = lang === "es";

  return (
    <footer className="page-x grid min-h-svh grid-rows-[auto_1fr_auto] bg-ink pt-10 text-ground">
      <div className="grid grid-cols-2 gap-8 text-[15px] md:grid-cols-3 lg:grid-cols-6">
        <div>
          <p className="font-medium">Xpress Developer</p>
          <p className="opacity-75">{es ? "Sistemas y automatización" : "Systems & automation"}</p>
          <p className="opacity-75">Quito, Ecuador</p>
        </div>
        <div>
          <p className="font-medium">{es ? "Servicios" : "Services"}</p>
          <ul className="opacity-75">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className="link inline-block py-1.5 no-underline hover:underline" href={`/servicios/${s.slug}`}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium">{es ? "Por rubro" : "By industry"}</p>
          <ul className="opacity-75">
            {solutions.map((s) => (
              <li key={s.href}>
                <Link className="link inline-block py-1.5 no-underline hover:underline" href={s.href}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium">{es ? "Recursos" : "Resources"}</p>
          <ul className="opacity-75">
            {resources.map((r) => (
              <li key={r.href}>
                <Link className="link inline-block py-1.5 no-underline hover:underline" href={r.href}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium">{es ? "Contacto" : "Contact"}</p>
          <ul className="opacity-75">
            <li><a className="link inline-block py-1.5 no-underline hover:underline" href="mailto:contacto@xpressdeveloper.com">contacto@<wbr />xpressdeveloper.com</a></li>
            <li><a className="link inline-block py-1.5 no-underline hover:underline" href="https://wa.me/593985295277">WhatsApp</a></li>
            <li><a className="link inline-block py-1.5 no-underline hover:underline" href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium">{es ? "Atención" : "Hours"}</p>
          <p className="opacity-75">{es ? "Respondemos en menos de 24 horas" : "We reply in under 24 hours"}</p>
        </div>
      </div>

      <div />

      <div>
        <svg viewBox="0 0 1000 205" className="block w-full" role="img" aria-label="Xpress">
          <text x="-6" y="178" fill="currentColor" style={{ fontFamily: "var(--font-cabinet), sans-serif" }} fontWeight="800" fontSize="238" letterSpacing="-9" textLength="1006" lengthAdjust="spacingAndGlyphs">
            XPRESS
          </text>
        </svg>
        <p className="pb-5 pt-2 text-[13px] opacity-75">
          © {new Date().getFullYear()} Xpress Developer. {es ? "Todos los derechos reservados." : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
