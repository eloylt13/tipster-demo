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
    tagline: "Picks analizados en fútbol europeo con stake definido y seguimiento serio",
    note: "Contenido presentado con fines editoriales.",
  },
  hero: {
    eyebrow: "Fútbol europeo | picks y seguimiento",
    title: "Pronósticos de fútbol europeo con valor, argumentados y gestión de banco",
    description:
      "Servicio de pronósticos centrado en fútbol europeo, con picks analizados, selección cuidada y una gestión de stake pensada para seguir el trabajo con criterio y constancia.",
    badges: ["Picks de valor analizados", "Gestión de stake", "Seguimiento en Telegram"],
  },
  valuePillars: [
    {
      title: "Análisis de cada pick",
      description:
        "Cada entrada se publica con argumento, mercado, cuota y stake para que se entienda por qué se toma y cómo encaja en la jornada.",
    },
    {
      title: "Experiencia contrastada",
      description:
        "Trabajo continuado en fútbol europeo con criterio estable para seleccionar ligas, filtrar entradas y mantener una línea reconocible en el tiempo.",
    },
    {
      title: "Seguimiento transparente",
      description:
        "Historial visible, cierres y control del rendimiento para valorar el servicio con contexto real y no solo con mensajes comerciales.",
    },
  ] satisfies DemoSectionItem[],
  differentiators: [
    "Picks analizados con mercado, cuota, stake y argumento antes de cada entrada",
    "Experiencia en fútbol europeo con foco en Champions, Premier League, LaLiga y Serie A",
    "Gestión de bank orientada a largo plazo, sin forzar volumen ni stakes irreales",
    "Seguimiento de resultados y cierres para revisar el rendimiento con más transparencia",
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
        "Cada pronóstico llega con mercado, cuota, stake y una lectura clara del partido antes de entrar.",
    },
    {
      title: "Ves resultados y cierres de forma clara",
      description:
        "Revisas resultados, cierres y seguimiento del servicio para saber cómo se trabaja y cómo rinde en el tiempo.",
    },
  ] satisfies DemoSectionItem[],
  accessOptions: [
    {
      name: "Acceso Free",
      label: "Entrada abierta",
      price: "0 EUR",
      description:
        "Pensado para ver cómo se comunica el servicio, el ritmo de publicación y el tipo de picks que se comparten.",
      bullets: ["Picks seleccionados", "Resumen semanal", "Avisos y novedades"],
      cta: "Entrar gratis",
    },
    {
      name: "Premium",
      label: "Más elegido",
      price: "29 EUR / mes",
      description:
        "Para quien quiere seguimiento diario, una lectura más completa de cada entrada y prioridad en los avisos clave.",
      bullets: ["Picks diarios", "Análisis privado", "Alertas prioritarias"],
      cta: "Entrar a Premium",
      featured: true,
    },
    {
      name: "VIP",
      label: "Seguimiento VIP",
      price: "79 EUR / mes",
      description:
        "Un formato más cercano para usuarios que quieren revisar gestión, proceso y toma de decisiones con más detalle.",
      bullets: ["Revisión mensual", "Q&A privado", "Seguimiento extendido"],
      cta: "Solicitar acceso VIP",
    },
  ] satisfies AccessOption[],
  socialChannels: [
    {
      name: "Telegram",
      handle: "@atlaspickslive",
      description:
        "Canal principal del servicio: aquí se publican los picks, los avisos importantes y el seguimiento de cada jornada.",
    },
    {
      name: "X",
      handle: "@atlaspickses",
      description:
        "Perfil de apoyo para dar visibilidad al proyecto, compartir contexto puntual y derivar tráfico hacia Telegram y los accesos.",
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
        "Me gustó encontrarlo todo claro desde el principio: acceso, formato de los picks y seguimiento de la jornada sin tener que preguntar nada.",
      author: "Carlos M.",
      role: "Usuario premium",
    },
    {
      quote:
        "El canal free ya deja ver el enfoque. Cuando pasé al premium, el salto tuvo sentido porque el servicio seguía exactamente la misma línea.",
      author: "Laura T.",
      role: "Miembro del canal free",
    },
    {
      quote:
        "Se nota un proyecto más serio que una página llena de enlaces. Sabes qué ligas toca, cómo comunica y qué puedes esperar cada semana.",
      author: "Javier R.",
      role: "Usuario VIP",
    },
  ] satisfies Testimonial[],
  testimonialsNote: "Referencias mostradas a modo de ejemplo editorial.",
  faqItems: [
    {
      question: "¿Qué recibo en el acceso free?",
      answer:
        "Una selección de contenido abierto, contexto de la metodología y avisos para conocer el ritmo del proyecto antes de entrar a un plan superior.",
    },
    {
      question: "¿El premium es mensual o hay permanencia?",
      answer:
        "Se presenta como acceso mensual simple, sin permanencia y con renovación clara desde el panel del usuario.",
    },
    {
      question: "¿Dónde se publican los picks?",
      answer:
        "Los picks y los avisos se publican en Telegram y, según el acceso, también en la zona privada. La web sirve para presentar el servicio y facilitar la entrada.",
    },
    {
      question: "¿Puedo ver resultados anteriores?",
      answer:
        "Sí. La propuesta contempla historial, cierres por periodo y notas de seguimiento para que el usuario tenga contexto continuo.",
    },
    {
      question: "¿Esto es una promesa de beneficios?",
      answer:
        "No. El servicio se presenta de forma sobria, sin mensajes engañosos ni expectativas irreales.",
    },
  ] satisfies FAQItem[],
};
