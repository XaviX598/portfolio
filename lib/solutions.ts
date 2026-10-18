import type { ServiceSlug } from "@/app/servicios/data";

// Páginas por rubro (/soluciones/[slug]): búsquedas con intención de compra y menos competencia
// que los términos genéricos. Cada una enlaza al proyecto real más cercano cuando existe.
export type Solution = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  lead: string;
  price: number;
  problemTitle: string;
  problem: string[];
  featuresTitle: string;
  features: string[];
  example?: { label: string; project: string; text: string };
  faq: { q: string; a: string }[];
  services: ServiceSlug[];
  updated: string;
};

export const solutions: Solution[] = [
  {
    slug: "sistema-para-restaurantes",
    title: "Sistema para restaurantes en Quito",
    seoTitle: "Sistema para Restaurantes en Quito y Ecuador | Xpress Developer",
    seoDescription:
      "Sistema y automatización para restaurantes en Quito y Ecuador: reservas y pedidos por WhatsApp, inventario de insumos, cierre de caja y facturación electrónica. Desde $500.",
    lead: "Reservas y pedidos por WhatsApp que se registran solos, insumos bajo control y las ventas del día en tu celular.",
    price: 500,
    problemTitle: "Lo que se pierde en la hora pico",
    problem: [
      "En un restaurante, los mensajes llegan justo cuando la cocina está llena. Una reserva que nadie contestó o un pedido que se anotó mal es un cliente que se va a otro lado, y casi nunca vuelve a escribir.",
      "Al mismo tiempo, el inventario de insumos se lleva en un cuaderno o en la memoria de alguien. Te enteras de que se acabó un ingrediente cuando el plato ya está pedido, y al cierre del día cuadrar la caja toma más de lo que debería.",
      "Un sistema a medida junta todo: el WhatsApp responde y toma reservas a cualquier hora, los pedidos llegan directo a cocina, los insumos se descuentan solos y el cierre de caja se arma sin calculadora.",
    ],
    featuresTitle: "Qué automatizamos en tu restaurante",
    features: [
      "Reservas por WhatsApp las 24 horas, con confirmación automática",
      "Pedidos a domicilio que llegan directo a cocina",
      "Menú del día y promociones enviadas a tus clientes",
      "Inventario de insumos con alertas antes de que se acaben",
      "Ventas, propinas y cierre de caja diario",
      "Facturación electrónica con un proveedor autorizado por el SRI",
    ],
    example: {
      label: "Proyecto relacionado",
      project: "trattoria-roma",
      text: "Para Trattoria Roma hicimos una web con el menú completo por categorías, precios y acceso directo a WhatsApp. Es la puerta de entrada: sobre ella se conectan las reservas y los pedidos automáticos.",
    },
    faq: [
      { q: "¿Cuánto cuesta un sistema para restaurante?", a: "Una automatización de WhatsApp para reservas o pedidos parte desde $500. Un sistema con inventario, ventas y cierre de caja parte desde $1.500. Te damos el precio cerrado después de conocer tu operación." },
      { q: "¿Funciona con mi número de WhatsApp actual?", a: "Sí, se puede usar tu número de negocio con WhatsApp Business. Te explicamos los pasos con Meta y los costos por mensaje antes de empezar." },
      { q: "¿Sirve para cafeterías y locales de comida rápida?", a: "Sí. El sistema se arma según cómo trabajas: mesas, mostrador, delivery o todo junto." },
      { q: "¿Qué pasa si el cliente pide algo que el bot no entiende?", a: "La conversación pasa a una persona de tu equipo con todo el historial, para que nadie tenga que volver a preguntar." },
    ],
    services: ["automatizacion-de-procesos", "sistemas-empresariales", "landing-page"],
    updated: "2026-10-18",
  },
  {
    slug: "software-para-importadoras",
    title: "Software para importadoras en Ecuador",
    seoTitle: "Software para Importadoras en Ecuador | Xpress Developer",
    seoDescription:
      "Software a medida para importadoras en Ecuador: cotizaciones automáticas, seguimiento de pedidos, inventario por bodega y facturación electrónica. Caso real: AMZ Express. Desde $1.500.",
    lead: "Cotizaciones en segundos, cada pedido con su estado a la vista y el inventario de tus bodegas en tiempo real.",
    price: 1500,
    problemTitle: "Por qué una importadora se satura",
    problem: [
      "Cada cotización de importación lleva peso, categoría, aranceles, flete y tiempos. Cuando se calcula a mano y se responde por WhatsApp, el equipo pasa el día repitiendo las mismas cuentas y los mismos mensajes.",
      "Después viene el seguimiento: el cliente pregunta dónde está su pedido, alguien revisa la guía, otro responde. Y cuando la mercadería llega, hay que pasarla al inventario y facturar, otra vez a mano.",
      "Un software a medida convierte ese recorrido en un solo flujo: la cotización sale sola, el pedido avanza por etapas que el cliente puede ver, el inventario se actualiza al recibir y la factura se emite al despachar.",
    ],
    featuresTitle: "Qué incluye un sistema para importadoras",
    features: [
      "Cotizador automático con tus reglas de peso, categoría y aranceles",
      "Panel para que el cliente vea el estado de su pedido",
      "Panel administrativo de pedidos, clientes y estados",
      "Inventario por bodega en tiempo real",
      "Avisos automáticos en cada etapa del envío",
      "Facturación electrónica al despachar",
    ],
    example: {
      label: "Caso real",
      project: "amz-express",
      text: "AMZ Express cotiza compras de Amazon hacia Ecuador en segundos: el cliente pega el enlace del producto, recibe el costo total y sigue su compra en un panel propio, mientras el equipo administra todo desde otro.",
    },
    faq: [
      { q: "¿Cuánto cuesta un software para importadora?", a: "Desde $1.500 por una primera etapa, por ejemplo el cotizador y el panel de pedidos. El precio final depende de los módulos e integraciones; te damos una propuesta con precio cerrado." },
      { q: "¿Se puede conectar con mi courier o mi proveedor?", a: "Si tu courier o proveedor ofrece una API o envía reportes, los conectamos para que los estados se actualicen solos." },
      { q: "¿Mis clientes pueden ver sus pedidos?", a: "Sí. Cada cliente tiene su propio panel con el estado de sus compras, sin tener que escribirte." },
      { q: "¿Sirve para importación por consolidado o carga grande?", a: "Sí. Las reglas de cotización y las etapas se configuran según tu tipo de operación." },
    ],
    services: ["sistemas-empresariales", "automatizacion-de-procesos"],
    updated: "2026-10-18",
  },
  {
    slug: "sistema-para-clinicas",
    title: "Sistema para clínicas y consultorios en Quito",
    seoTitle: "Sistema para Clínicas y Consultorios en Quito y Ecuador | Xpress Developer",
    seoDescription:
      "Sistema para clínicas y consultorios en Quito y Ecuador: citas y recordatorios por WhatsApp, historial de pacientes, cobros y facturación electrónica. Desde $500.",
    lead: "Citas que se agendan y se confirman solas, el historial de cada paciente en un solo lugar y cobros sin digitar.",
    price: 500,
    problemTitle: "Donde se va el tiempo de la recepción",
    problem: [
      "En una clínica o consultorio, buena parte del día de la recepción se va en agendar, confirmar y reprogramar citas por teléfono y WhatsApp. Cada paciente que no llega es un espacio vacío en la agenda.",
      "La información del paciente suele estar repartida entre una hoja, un sistema viejo y los mensajes del celular. Cuando vuelve, hay que buscar su historial, y al cobrar hay que digitar la factura desde cero.",
      "Con un sistema y unas cuantas automatizaciones, el paciente agenda desde WhatsApp, recibe recordatorios, confirma o reprograma sin llamar, y su historial y sus pagos quedan juntos.",
    ],
    featuresTitle: "Qué automatizamos en tu clínica",
    features: [
      "Agenda de citas por WhatsApp las 24 horas",
      "Recordatorios automáticos para reducir inasistencias",
      "Confirmar o reprogramar sin llamar a la recepción",
      "Historial del paciente en un solo lugar",
      "Cobros y facturación electrónica sin digitar",
      "Reportes de citas y atenciones por profesional",
    ],
    faq: [
      { q: "¿Cuánto cuesta?", a: "La agenda y los recordatorios por WhatsApp parten desde $500. Un sistema con historial, cobros y reportes parte desde $1.500." },
      { q: "¿Los datos de mis pacientes están protegidos?", a: "Sí. El acceso es por usuario y rol, los datos viajan cifrados y quedan a nombre de tu clínica. Te ayudamos a cumplir con la Ley de Protección de Datos Personales." },
      { q: "¿Sirve para varios profesionales o sucursales?", a: "Sí. Cada profesional tiene su agenda y puedes ver todo junto o por sucursal." },
      { q: "¿El paciente necesita instalar algo?", a: "No. Agenda y recibe recordatorios en el WhatsApp que ya usa." },
    ],
    services: ["automatizacion-de-procesos", "sistemas-empresariales"],
    updated: "2026-10-18",
  },
  {
    slug: "sistema-para-tiendas",
    title: "Sistema de inventario y ventas para tiendas",
    seoTitle: "Sistema de Inventario y Ventas para Tiendas en Ecuador | Xpress Developer",
    seoDescription:
      "Sistema de inventario y ventas para tiendas en Quito y Ecuador: stock en tiempo real entre local y tienda online, punto de venta, pedidos por WhatsApp y facturación electrónica. Desde $500.",
    lead: "El stock de tu local y de tu tienda online sincronizados, ventas en un solo lugar y clientes atendidos al instante.",
    price: 500,
    problemTitle: "Cuando el stock deja de cuadrar",
    problem: [
      "Una tienda que vende en el local, por WhatsApp y por redes termina con tres versiones de su inventario. Se vende algo que ya no hay, o se deja de vender algo que sí había.",
      "Las mismas preguntas llegan todo el día: precio, tallas, disponibilidad, envío. Responderlas a mano quita tiempo de vender, y los pedidos que llegan de noche se enfrían hasta el día siguiente.",
      "Un sistema de inventario y ventas une el local, la tienda online y WhatsApp: el stock baja solo con cada venta, los clientes reciben respuesta al instante y tú ves qué se vende y qué hay que reponer.",
    ],
    featuresTitle: "Qué incluye",
    features: [
      "Inventario sincronizado entre local y tienda online",
      "Punto de venta para el local",
      "Catálogo y precios respondidos por WhatsApp",
      "Link de pago y confirmación automática",
      "Alertas de stock bajo y reportes de lo más vendido",
      "Facturación electrónica con un proveedor autorizado por el SRI",
    ],
    example: {
      label: "Proyecto relacionado",
      project: "xpress-ecommerce",
      text: "Xpress Ecommerce es una tienda online con catálogo, carrito, checkout e historial de pedidos. Es la base sobre la que se conecta el inventario del local.",
    },
    faq: [
      { q: "¿Cuánto cuesta?", a: "La automatización de WhatsApp para catálogo y pedidos parte desde $500, una tienda online desde $900 y un sistema completo de inventario y ventas desde $1.500." },
      { q: "¿Puedo seguir usando mi tienda actual?", a: "Sí. Si ya vendes en Shopify o WooCommerce, conectamos el inventario sin que tengas que cambiar de plataforma." },
      { q: "¿Funciona con varias sucursales?", a: "Sí. El stock se lleva por local y puedes ver todo junto." },
      { q: "¿Puedo cargar mis productos desde Excel?", a: "Sí. Importamos tu catálogo, precios y stock desde Excel." },
    ],
    services: ["ecommerce", "automatizacion-de-procesos", "sistemas-empresariales"],
    updated: "2026-10-18",
  },
];

export const solutionsBySlug = Object.fromEntries(solutions.map((s) => [s.slug, s])) as Record<string, Solution>;
