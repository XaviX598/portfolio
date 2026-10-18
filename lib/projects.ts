import type { PortfolioLang } from "@/components/HomeClient";
import type { ServiceSlug } from "@/app/servicios/data";

// Proyectos en producción: una sola fuente para las cartas del inicio y las páginas /proyectos/[slug].
// Los textos del caso no inventan cifras: cuentan el problema, lo que se construyó y lo que cambia.
export type Project = {
  slug: string;
  name: string;
  url: string;
  image: string;
  mobile: string;
  gallery: string[];
  kind: Record<PortfolioLang, string>;
  discipline: Record<PortfolioLang, string>;
  summary: Record<PortfolioLang, string>;
  seoDescription: string;
  problem: string;
  solution: string[];
  outcome: string;
  service: ServiceSlug;
  solutionPage?: string;
  updated: string;
};

export const projects: Project[] = [
  {
    slug: "amz-express",
    name: "AMZ Express",
    mobile: "/proyectos/movil/amz-express.jpg",
    url: "https://amz-express.vercel.app",
    image: "/proyectos/amz-express-cotizador.png",
    gallery: ["/proyectos/amz-express-cotizador.png", "/proyectos/amz-express-panel.png", "/proyectos/amz-express-pedidos.png"],
    kind: { es: "Cotizador de importaciones", en: "Import quoting platform" },
    discipline: { es: "Plataforma web", en: "Web platform" },
    summary: {
      es: "Cotiza compras de Amazon hacia Ecuador en segundos, con paneles para clientes y administradores.",
      en: "Quotes Amazon purchases to Ecuador in seconds, with panels for clients and admins.",
    },
    seoDescription: "AMZ Express: cotizador de importaciones de Amazon a Ecuador con paneles para clientes y administradores, desarrollado por Xpress Developer.",
    problem:
      "Cotizar una compra de Amazon hacia Ecuador implica calcular peso, categoría, impuestos y envío. Hacerlo a mano por WhatsApp para cada cliente tomaba tiempo y dejaba dudas sobre el precio final.",
    solution: [
      "Un cotizador donde el cliente pega el enlace del producto y recibe el costo total al instante.",
      "Un panel para el cliente con el estado de cada compra, desde la orden hasta la entrega en Ecuador.",
      "Un panel administrativo para gestionar pedidos, clientes y estados en un solo lugar.",
    ],
    outcome: "Las cotizaciones dejaron de hacerse a mano y cada cliente puede seguir su compra sin tener que preguntar por WhatsApp.",
    service: "sistemas-empresariales",
    solutionPage: "software-para-importadoras",
    updated: "2026-10-18",
  },
  {
    slug: "xpress-ecommerce",
    name: "Xpress Ecommerce",
    mobile: "/proyectos/movil/xpress-ecommerce.jpg",
    url: "https://xpress-ecommerce.vercel.app",
    image: "/proyectos/xpress-ecommerce-inicio.png",
    gallery: ["/proyectos/xpress-ecommerce-inicio.png", "/proyectos/xpress-ecommerce-catalogo.png", "/proyectos/xpress-ecommerce-producto.png"],
    kind: { es: "Tienda online", en: "Online store" },
    discipline: { es: "Tienda online", en: "Online store" },
    summary: {
      es: "Catálogo, carrito, checkout e historial de pedidos, lista para vender.",
      en: "Catalog, cart, checkout and order history, ready to sell.",
    },
    seoDescription: "Xpress Ecommerce: tienda online con catálogo, carrito, checkout e historial de pedidos, desarrollada por Xpress Developer.",
    problem:
      "Vender por redes sociales y WhatsApp funciona hasta que los pedidos crecen: se repiten los mismos precios todo el día, el stock deja de cuadrar y cada pago hay que confirmarlo a mano.",
    solution: [
      "Un catálogo con categorías, filtros y fichas de producto claras.",
      "Carrito y checkout para que el cliente compre sin escribir a nadie.",
      "Historial de pedidos para el cliente y un panel para administrar productos y stock.",
    ],
    outcome: "Una tienda que vende a cualquier hora, con el catálogo y los pedidos ordenados en un solo lugar.",
    service: "ecommerce",
    solutionPage: "sistema-para-tiendas",
    updated: "2026-10-18",
  },
  {
    slug: "trattoria-roma",
    name: "Trattoria Roma",
    mobile: "/proyectos/movil/restaurant.jpg",
    url: "https://project-restaurante-delta.vercel.app",
    image: "/proyectos/restaurante-trattoria-inicio.png",
    gallery: ["/proyectos/restaurante-trattoria-inicio.png", "/proyectos/restaurante-trattoria-menu.png", "/proyectos/restaurante-trattoria-detalle.png"],
    kind: { es: "Web de restaurante", en: "Restaurant website" },
    discipline: { es: "Landing page", en: "Landing page" },
    summary: {
      es: "Menú visual y animaciones pensadas para atraer comensales.",
      en: "Visual menu and animations designed to attract diners.",
    },
    seoDescription: "Trattoria Roma: web de restaurante en Quito con menú visual por categorías, precios y contacto directo, desarrollada por Xpress Developer.",
    problem:
      "Quien busca dónde comer decide en segundos y desde el celular. Si no encuentra el menú, los precios y cómo llegar, se va al siguiente resultado.",
    solution: [
      "Un menú visual por categorías, con fotos, descripción y precio de cada plato.",
      "Secciones de historia, ubicación y contacto pensadas para el celular.",
      "Acceso directo a WhatsApp para reservar o hacer un pedido.",
    ],
    outcome: "Una web rápida que muestra el menú completo y lleva al cliente a escribir o a visitar el local.",
    service: "landing-page",
    solutionPage: "sistema-para-restaurantes",
    updated: "2026-10-18",
  },
  {
    slug: "universal-skills-hub",
    name: "Universal Skills Hub",
    mobile: "/proyectos/movil/universal-skills.jpg",
    url: "https://universal-skills-hub.vercel.app",
    image: "/proyectos/universal-skills-catalogo.png",
    gallery: ["/proyectos/universal-skills-catalogo.png", "/proyectos/universal-skills-busqueda.png", "/proyectos/universal-skills-detalle.png"],
    kind: { es: "Catálogo en línea", en: "Online catalog" },
    discipline: { es: "Plataforma web", en: "Web platform" },
    summary: {
      es: "Más de 85.000 skills de IA en un catálogo rápido y fácil de explorar.",
      en: "85,000+ AI skills in a fast catalog that's easy to explore.",
    },
    seoDescription: "Universal Skills Hub: catálogo en línea de más de 85.000 elementos con búsqueda y filtros rápidos, desarrollado por Xpress Developer.",
    problem: "Encontrar el elemento correcto entre miles de opciones repartidas en distintos sitios es lento y frustrante.",
    solution: [
      "Un catálogo con búsqueda instantánea y filtros por categoría.",
      "Fichas de detalle con la información necesaria para decidir.",
      "Instrucciones listas para copiar y usar.",
    ],
    outcome: "Un catálogo de más de 85.000 elementos que se explora en segundos.",
    service: "pagina-web",
    updated: "2026-10-18",
  },
  {
    slug: "xpressconvert",
    name: "XpressConvert",
    mobile: "/proyectos/movil/xpressconvert.jpg",
    url: "https://xpressconvert.vercel.app",
    image: "/proyectos/xpressconvert-inicio.png",
    gallery: ["/proyectos/xpressconvert-inicio.png", "/proyectos/xpressconvert-herramientas.png", "/proyectos/xpressconvert-detalle.png"],
    kind: { es: "Conversor de archivos", en: "File converter" },
    discipline: { es: "Herramienta web", en: "Web tool" },
    summary: {
      es: "Convierte imágenes, PDF, documentos, audio y video sin instalar nada.",
      en: "Converts images, PDFs, documents, audio and video without installing anything.",
    },
    seoDescription: "XpressConvert: herramienta web para convertir y comprimir imágenes, PDF, documentos, audio y video sin instalar nada.",
    problem: "Convertir un PDF, una imagen o un video suele obligar a instalar programas o a subir archivos a sitios poco confiables.",
    solution: [
      "Conversión de imágenes, PDF, documentos, audio y video desde el navegador.",
      "Compresión de archivos para enviarlos o subirlos más rápido.",
      "Una interfaz simple que funciona igual en computadora y celular.",
    ],
    outcome: "Una herramienta web que resuelve las conversiones de todos los días en segundos.",
    service: "pagina-web",
    updated: "2026-10-18",
  },
  {
    slug: "aname",
    name: "Athletics System",
    mobile: "/proyectos/movil/atletismo.jpg",
    url: "https://frontend-atletismo.vercel.app",
    image: "/proyectos/aname-inicio.png",
    gallery: ["/proyectos/aname-inicio.png", "/proyectos/aname-registro-atletas.png", "/proyectos/aname-contacto.png"],
    kind: { es: "Inscripción de atletas", en: "Athlete registration" },
    discipline: { es: "Web, API y Android", en: "Web, API and Android" },
    summary: {
      es: "Sistema para gestionar atletas: aplicación web, API y app Android conectadas.",
      en: "A system to manage athletes: web app, API and Android app working together.",
    },
    seoDescription: "Sistema de inscripción de atletas para la Asociación Nacional de Atletismo Máster del Ecuador: web, API y app Android, desarrollado por Xpress Developer.",
    problem:
      "Inscribir atletas a campeonatos con formularios sueltos y correos hacía difícil validar datos, documentos y categorías antes de cada competencia.",
    solution: [
      "Registro de atletas con sus datos y documentos en un solo formulario.",
      "Calendario y reportes de campeonatos.",
      "Una app Android conectada a la misma API que la web.",
    ],
    outcome: "Las inscripciones se centralizan en un solo sistema, en la web y en el celular.",
    service: "desarrollo-android",
    updated: "2026-10-18",
  },
];

export const projectsBySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<string, Project>;
