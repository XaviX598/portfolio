import { serviceExtras, servicesBySlug, type ServiceSlug } from "@/app/servicios/data";

// Guías para pymes (/guias/[slug]): responden búsquedas informativas y llevan a los servicios.
// Los precios salen de serviceExtras para que nunca contradigan a las páginas de servicio.
export type GuideSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  prices?: { label: string; price: number; note: string; href: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  lead: string;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  related: { href: string; label: string }[];
  published: string;
  updated: string;
};

const priceRow = (slug: ServiceSlug, note: string) => ({
  label: servicesBySlug[slug].title,
  price: serviceExtras[slug].price,
  note,
  href: `/servicios/${slug}`,
});

const money = (slug: ServiceSlug) => `$${serviceExtras[slug].price.toLocaleString("es-EC")}`;

export const guides: Guide[] = [
  {
    slug: "cuanto-cuesta-una-pagina-web-en-ecuador",
    title: "¿Cuánto cuesta una página web en Ecuador en 2026?",
    seoTitle: "¿Cuánto Cuesta una Página Web en Ecuador en 2026? Precios Reales | Xpress Developer",
    seoDescription: `Precios reales de páginas web en Ecuador en 2026: landing page desde ${money("landing-page")}, página web desde ${money("pagina-web")}, tienda online desde ${money("ecommerce")} y sistemas a medida desde ${money("sistemas-empresariales")}. Qué cambia el precio y qué preguntar.`,
    lead: "La respuesta corta: depende de lo que necesitas que haga. Aquí tienes los precios con los que trabajamos, qué los hace subir o bajar y qué preguntar antes de contratar.",
    sections: [
      {
        title: "Precios de referencia en 2026",
        paragraphs: [
          "Estos son nuestros precios de partida en dólares. Son un punto de partida honesto: el precio final se fija por escrito antes de empezar, según lo que tu proyecto necesita.",
        ],
        prices: [
          priceRow("landing-page", "Una sola página para vender un producto o captar contactos."),
          priceRow("pagina-web", "Sitio de varias páginas para presentar tu negocio y tus servicios."),
          priceRow("ecommerce", "Catálogo, carrito, pagos y pedidos."),
          priceRow("automatizacion-de-procesos", "Una tarea repetitiva que se hace sola, como pedidos por WhatsApp."),
          priceRow("sistemas-empresariales", "Inventario, ventas, facturación y reportes a medida."),
          priceRow("desarrollo-android", "App nativa publicada en Google Play."),
        ],
      },
      {
        title: "Qué hace subir o bajar el precio",
        list: [
          "La cantidad de páginas y de secciones distintas que hay que diseñar.",
          "Las funciones: un formulario simple no cuesta lo mismo que pagos en línea, reservas o un panel de clientes.",
          "El contenido: si ya tienes textos y fotos, o si hay que escribirlos y producirlos.",
          "Las integraciones con otras herramientas, como WhatsApp, tu sistema contable o la facturación electrónica.",
          "Si el diseño se hace a medida o se parte de una plantilla.",
        ],
      },
      {
        title: "Plantilla o diseño a medida",
        paragraphs: [
          "Una plantilla es más barata y sale más rápido, pero tu web se parece a otras cientos, y cada cambio que se sale de lo previsto se vuelve un parche.",
          "Una web a medida cuesta más al inicio, pero se construye sobre lo que vendes y sobre cómo te buscan tus clientes. Carga más rápido, se posiciona mejor en Google y crece contigo sin rehacerla.",
        ],
      },
      {
        title: "Costos que no son del desarrollo",
        paragraphs: [
          "Además del desarrollo, una página web tiene costos que se pagan aparte y que conviene conocer desde el principio, para que no aparezcan como sorpresa.",
        ],
        list: [
          "El dominio (por ejemplo tunegocio.com o tunegocio.ec), que se renueva cada año.",
          "El hosting o servidor. Para sitios simples puede ser gratuito; para tiendas y sistemas suele ser un pago mensual.",
          "El correo con tu dominio, si lo necesitas.",
          "El mantenimiento: actualizaciones, cambios de contenido y soporte después de la entrega.",
        ],
      },
      {
        title: "Qué preguntar antes de contratar",
        list: [
          "¿El precio es cerrado y está por escrito?",
          "¿El dominio, el código y los datos quedan a mi nombre?",
          "¿Cuánto tiempo toma y cómo veo el avance?",
          "¿Qué incluye el soporte después de la entrega?",
          "¿Puedo ver proyectos que ya estén en línea?",
        ],
      },
    ],
    faq: [
      { q: "¿Cuál es la página web más barata que se puede hacer?", a: `Una landing page, desde ${money("landing-page")}. Es ideal para validar un producto o captar contactos con una sola página bien hecha.` },
      { q: "¿Cuánto tiempo toma hacer una página web?", a: `Una landing page suele estar lista en ${serviceExtras["landing-page"].time.replace(/^Lista en /, "").toLowerCase()}, y una página web completa en ${serviceExtras["pagina-web"].time.replace(/^Lista en /, "").toLowerCase()}.` },
      { q: "¿El precio incluye el dominio y el hosting?", a: "El desarrollo y esos costos se cotizan por separado para que sepas exactamente qué pagas. Te ayudamos a contratarlos a tu nombre." },
      { q: "¿Conviene más una página web o una tienda online?", a: "Si vas a vender productos con pago en línea, una tienda. Si quieres presentar tu negocio y que te escriban, una página web o una landing." },
    ],
    related: [
      { href: "/servicios/landing-page", label: "Landing pages" },
      { href: "/servicios/pagina-web", label: "Páginas web" },
      { href: "/servicios/ecommerce", label: "Tiendas online" },
      { href: "/servicios/sistemas-empresariales", label: "Sistemas empresariales" },
    ],
    published: "2026-10-18",
    updated: "2026-10-18",
  },
  {
    slug: "como-automatizar-pedidos-por-whatsapp",
    title: "Cómo automatizar pedidos por WhatsApp en tu negocio",
    seoTitle: "Cómo Automatizar Pedidos por WhatsApp en tu Negocio (Guía 2026) | Xpress Developer",
    seoDescription:
      "Guía paso a paso para automatizar pedidos por WhatsApp: qué necesitas, cómo se conecta con tu inventario y tu facturación, cuánto cuesta y errores que conviene evitar.",
    lead: "Si cada día copias pedidos de WhatsApp a un Excel, esta guía es para ti: qué se puede automatizar, qué necesitas y cómo empezar sin cambiar todo tu negocio.",
    sections: [
      {
        title: "Qué significa automatizar los pedidos",
        paragraphs: [
          "Automatizar no es poner un bot que responde cualquier cosa. Es que el pedido que llega por WhatsApp quede registrado en tu sistema sin que nadie lo copie, que el cliente reciba la confirmación al instante y que tu equipo solo intervenga cuando hace falta.",
          "El resultado: menos errores al anotar, respuestas a cualquier hora y tiempo libre para preparar y entregar, que es lo que de verdad vende.",
        ],
      },
      {
        title: "Paso a paso",
        list: [
          "Dibuja el recorrido actual: cómo llega un pedido, quién lo anota, dónde se registra y cuándo se cobra.",
          "Elige la primera tarea a automatizar: la que más se repite o la que más errores genera.",
          "Pasa a WhatsApp Business con la API oficial de Meta, que es la que permite automatizar con tu número de negocio.",
          "Conecta WhatsApp con tu inventario o tu sistema, para que cada pedido descuente stock y quede registrado.",
          "Agrega la confirmación, el link de pago y la factura electrónica, para que el pedido se cierre solo.",
          "Define cuándo la conversación pasa a una persona: reclamos, pedidos especiales o dudas que el flujo no resuelve.",
          "Mide durante dos semanas cuántos pedidos entran solos y cuántas horas ahorras, y recién ahí automatiza la siguiente tarea.",
        ],
      },
      {
        title: "Qué necesitas",
        list: [
          "Un número de WhatsApp para tu negocio.",
          "Una cuenta de Meta Business verificada.",
          "Tu catálogo con precios, aunque hoy esté en Excel.",
          "Un lugar donde registrar los pedidos: tu sistema, una hoja de cálculo o tu tienda online.",
        ],
      },
      {
        title: "Cuánto cuesta",
        paragraphs: [
          `El desarrollo de una automatización parte desde ${money("automatizacion-de-procesos")}, según cuántas herramientas hay que conectar y cuántos pasos tiene el flujo.`,
          "Aparte está lo que cobra Meta por los mensajes de la API de WhatsApp Business, que depende del tipo de mensaje y del país. Te lo explicamos con números antes de empezar, para que sepas cuánto vas a pagar al mes.",
        ],
      },
      {
        title: "Errores que conviene evitar",
        list: [
          "Querer automatizar todo de una vez en lugar de empezar por una tarea.",
          "Un bot que no deja hablar con una persona: frustra al cliente y se pierde la venta.",
          "Enviar mensajes masivos a contactos que no pidieron recibirlos: Meta puede bloquear tu número.",
          "No conectar el pedido con el inventario y terminar vendiendo lo que ya no hay.",
        ],
      },
    ],
    faq: [
      { q: "¿Puedo automatizar con la app normal de WhatsApp Business?", a: "La app sirve para respuestas rápidas y mensajes de bienvenida. Para registrar pedidos en tu sistema y responder con datos reales necesitas la API oficial de WhatsApp Business." },
      { q: "¿Pierdo mi número actual?", a: "No. Tu número de negocio se conecta a la API y, según tu caso, puede seguir usándose también desde la app. Revisamos tu situación y te explicamos las opciones antes de migrar." },
      { q: "¿El cliente nota que le responde un sistema?", a: "Las respuestas se escriben con el tono de tu negocio y el cliente siempre puede pedir hablar con una persona." },
      { q: "¿Cuánto tiempo toma implementarlo?", a: "Una automatización de pedidos sencilla suele estar lista en pocas semanas, según las herramientas que haya que conectar." },
    ],
    related: [
      { href: "/servicios/automatizacion-de-procesos", label: "Automatización de procesos" },
      { href: "/soluciones/sistema-para-restaurantes", label: "Sistema para restaurantes" },
      { href: "/soluciones/sistema-para-tiendas", label: "Sistema para tiendas" },
    ],
    published: "2026-10-18",
    updated: "2026-10-18",
  },
];

export const guidesBySlug = Object.fromEntries(guides.map((g) => [g.slug, g])) as Record<string, Guide>;
