export type DemoSectionItem = {
  title: string;
  description: string;
};

export type AccessOption = {
  name: string;
  label: string;
  price: string;
  description: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const demoContent = {
  brand: {
    name: "Atlas Picks",
    tagline: "Picks analizados en futbol europeo con stake definido y seguimiento serio",
    note: "Contenido presentado con fines editoriales.",
  },
  hero: {
    eyebrow: "Futbol europeo | picks y seguimiento",
    title: "Pronosticos de futbol europeo con valor, argumentados y gestion de banco",
    description:
      "Servicio de pronosticos centrado en futbol europeo, con picks analizados, seleccion cuidada y una gestion de stake pensada para seguir el trabajo con criterio y constancia.",
    badges: ["Picks de valor analizados", "Gestion de stake", "Seguimiento en Telegram"],
  },
  valuePillars: [
    {
      title: "Analisis de cada pick",
      description:
        "Cada entrada se publica con argumento, mercado, cuota y stake para que se entienda por que se toma y como encaja en la jornada.",
    },
    {
      title: "Experiencia contrastada",
      description:
        "Trabajo continuado en futbol europeo con criterio estable para seleccionar ligas, filtrar entradas y mantener una linea reconocible en el tiempo.",
    },
    {
      title: "Seguimiento transparente",
      description:
        "Historial visible, cierres y control del rendimiento para valorar el servicio con contexto real y no solo con mensajes comerciales.",
    },
  ] satisfies DemoSectionItem[],
  differentiators: [
    "Picks analizados con mercado, cuota, stake y argumento antes de cada entrada",
    "Experiencia en futbol europeo con foco en Champions, Premier League, LaLiga y Serie A",
    "Gestion de bank orientada a largo plazo, sin forzar volumen ni stakes irreales",
    "Seguimiento de resultados y cierres para revisar el rendimiento con mas transparencia",
    "Acceso directo al canal de Telegram y a las zonas privadas donde se mueve el servicio",
  ],
  flow: [
    {
      title: "Eliges el acceso que encaja contigo",
      description:
        "Puedes empezar por el canal free o entrar al Premium si ya buscas seguimiento diario y avisos prioritarios.",
    },
    {
      title: "Recibes picks previamente analizados",
      description:
        "Cada pronostico llega con mercado, cuota, stake y una lectura clara del partido antes de entrar.",
    },
    {
      title: "Ves resultados y cierres de forma clara",
      description:
        "Revisas resultados, cierres y seguimiento del servicio para saber como se trabaja y como rinde en el tiempo.",
    },
  ] satisfies DemoSectionItem[],
  accessOptions: [
    {
      name: "Acceso Free",
      label: "Entrada abierta",
      price: "0 EUR",
      description:
        "Pensado para ver como se comunica el servicio, el ritmo de publicacion y el tipo de picks que se comparten.",
      bullets: ["Picks seleccionados", "Resumen semanal", "Avisos y novedades"],
      cta: "Entrar gratis",
    },
    {
      name: "Premium",
      label: "Mas elegido",
      price: "29 EUR / mes",
      description:
        "Para quien quiere seguimiento diario, una lectura mas completa de cada entrada y prioridad en los avisos clave.",
      bullets: ["Picks diarios", "Analisis privado", "Alertas prioritarias"],
      cta: "Entrar a Premium",
      featured: true,
    },
    {
      name: "VIP",
      label: "Seguimiento VIP",
      price: "79 EUR / mes",
      description:
        "Un formato mas cercano para usuarios que quieren revisar gestion, proceso y toma de decisiones con mas detalle.",
      bullets: ["Revision mensual", "Q&A privado", "Seguimiento extendido"],
      cta: "Solicitar acceso VIP",
    },
  ] satisfies AccessOption[],
  socialChannels: [
    {
      name: "Telegram",
      handle: "@atlaspickslive",
      description:
        "Canal principal del servicio: aqui se publican los picks, los avisos importantes y el seguimiento de cada jornada.",
    },
    {
      name: "X",
      handle: "@atlaspickses",
      description:
        "Perfil de apoyo para dar visibilidad al proyecto, compartir contexto puntual y derivar trafico hacia Telegram y los accesos.",
    },
    {
      name: "Instagram",
      handle: "@atlas.picks",
      description:
        "Escaparate de marca con piezas breves, recordatorios y contenido visual pensado para captar nuevos usuarios sin mover la operativa fuera de Telegram.",
    },
  ],
  testimonials: [
    {
      quote:
        "Me gusto encontrarlo todo claro desde el principio: acceso, formato de los picks y seguimiento de la jornada sin tener que preguntar nada.",
      author: "Carlos M.",
      role: "Usuario premium",
    },
    {
      quote:
        "El canal free ya deja ver el enfoque. Cuando pase al premium, el salto tuvo sentido porque el servicio seguia exactamente la misma linea.",
      author: "Laura T.",
      role: "Miembro del canal free",
    },
    {
      quote:
        "Se nota un proyecto mas serio que una pagina llena de enlaces. Sabes que ligas toca, como comunica y que puedes esperar cada semana.",
      author: "Javier R.",
      role: "Usuario VIP",
    },
  ] satisfies Testimonial[],
  testimonialsNote: "Referencias mostradas a modo de ejemplo editorial.",
  faqItems: [
    {
      question: "Que recibo en el acceso free?",
      answer:
        "Una seleccion de contenido abierto, contexto de la metodologia y avisos para conocer el ritmo del proyecto antes de entrar a un plan superior.",
    },
    {
      question: "El premium es mensual o hay permanencia?",
      answer:
        "Se presenta como acceso mensual simple, sin permanencia y con renovacion clara desde el panel del usuario.",
    },
    {
      question: "Donde se publican los picks?",
      answer:
        "Los picks y los avisos se publican en Telegram y, segun el acceso, tambien en la zona privada. La web sirve para presentar el servicio y facilitar la entrada.",
    },
    {
      question: "Puedo ver resultados anteriores?",
      answer:
        "Si. La propuesta contempla historial, cierres por periodo y notas de seguimiento para que el usuario tenga contexto continuo.",
    },
    {
      question: "Esto es una promesa de beneficios?",
      answer:
        "No. El servicio se presenta de forma sobria, sin mensajes enganosos ni expectativas irreales.",
    },
  ] satisfies FAQItem[],
};
