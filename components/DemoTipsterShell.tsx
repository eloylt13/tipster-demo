import Link from "next/link";
import { Fraunces } from "next/font/google";
import { demoContent } from "@/lib/demo-content";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-demo-display",
});

const primaryCtaClassName =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-[#b89157]/40 bg-[linear-gradient(180deg,_#d6bc8a,_#b88d51)] px-4 py-2.5 text-sm font-semibold text-stone-950 shadow-[0_14px_34px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:border-[#c5a06a]/48 hover:bg-[linear-gradient(180deg,_#ddc697,_#c19458)]";

const subtleCtaClassName =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-stone-100 transition hover:border-amber-200/18 hover:bg-white/[0.08] hover:text-white";

function SocialIcon({ name }: { name: string }) {
  if (name === "Telegram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M21.4 4.6c.3-.9-.3-1.7-1.2-1.4L3.7 9.6c-.9.3-.9 1.6 0 1.9l4.2 1.3 1.6 5.1c.2.7 1.1.9 1.6.4l2.3-2.2 4.5 3.3c.7.5 1.6.1 1.8-.8L21.4 4.6Zm-11.6 8 8.1-5.3-6.4 6.6-.3 3.2-1.4-4.5Z" />
      </svg>
    );
  }

  if (name === "X") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M18.9 3H21l-4.6 5.3L22 21h-4.4l-3.5-4.8L9.9 21H7.8l5-5.8L2 3h4.5l3.2 4.4L13.5 3h2.1L11 8.3 18.9 21h-1.4L8.2 6h1.4l8.3 15h1.4L11 8.3 18.9 3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function DemoTipsterShell() {
  return (
    <main
      className={`${display.variable} min-h-screen bg-[radial-gradient(circle_at_top,_rgba(215,190,140,0.22),_transparent_28%),radial-gradient(circle_at_80%_16%,_rgba(127,91,42,0.2),_transparent_20%),linear-gradient(180deg,_#17120d_0%,_#11100e_42%,_#0c0d10_100%)] text-stone-50`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <header className="sticky top-0 z-20 -mx-4 border-b border-white/8 bg-[rgba(12,13,16,0.72)] px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 sm:py-4 lg:-mx-8 lg:px-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 sm:gap-4">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-amber-200/80 sm:text-[0.68rem] sm:tracking-[0.34em]">
                {demoContent.brand.name}
              </p>
              <p className="mt-0.5 max-w-[12rem] text-[0.78rem] leading-5 text-stone-300 sm:mt-1 sm:max-w-none sm:text-sm">
                {demoContent.brand.tagline}
              </p>
            </div>
            <div className="flex items-center gap-2.5 text-sm sm:gap-3">
              <Link
                href="#accesos"
                className="text-[0.82rem] font-medium text-stone-300 transition hover:text-white sm:text-sm"
              >
                Accesos
              </Link>
              <Link
                href="#cta-final"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#b89157]/28 bg-amber-50/[0.04] px-3.5 py-2 text-[0.82rem] font-semibold text-amber-100 shadow-[0_10px_26px_rgba(0,0,0,0.16)] transition hover:border-[#c5a06a]/42 hover:bg-amber-50/[0.08] hover:text-white sm:min-h-11 sm:px-4 sm:text-sm"
              >
                Unirse
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-7 pt-8 sm:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-amber-200/15 bg-amber-50/5 px-2.5 py-1 text-[0.61rem] font-semibold uppercase tracking-[0.28em] text-amber-100/85 sm:px-3 sm:text-[0.68rem] sm:tracking-[0.34em]">
              {demoContent.hero.eyebrow}
            </span>
            <h1 className="mt-4 max-w-[10.5ch] font-[var(--font-demo-display)] text-[2.45rem] leading-[0.92] tracking-[-0.045em] text-stone-50 sm:mt-5 sm:max-w-3xl sm:text-[4.5rem] sm:leading-[0.95] sm:tracking-[-0.04em]">
              {demoContent.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-6 text-stone-300 sm:mt-5 sm:max-w-2xl sm:text-[1.08rem] sm:leading-7">
              {demoContent.hero.description}
            </p>
            <div className="mt-6 flex flex-col items-start gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3">
              <Link
                href="#accesos"
                className={`${primaryCtaClassName} min-h-12 px-5 py-3`}
              >
                Ver opciones de acceso
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex min-h-11 items-center justify-center px-1 text-sm font-semibold text-stone-300 transition hover:text-white"
              >
                Cómo funciona
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {demoContent.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.72rem] text-stone-200"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="mt-3 max-w-md text-[0.68rem] leading-5 text-stone-500">
              {demoContent.brand.note}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-6">
            <div className="border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-amber-100/75">
                  Enfoque del servicio
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Menos volumen, más criterio y seguimiento real
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {[
                [
                  "Picks seleccionados",
                  "No se trata de publicar mucho, sino de filtrar entradas con sentido y explicar por qué se juegan.",
                ],
                [
                  "Gestión de bank",
                  "Stake, control de riesgo y disciplina para que el seguimiento tenga una base seria también fuera de las rachas buenas.",
                ],
                [
                  "Telegram y accesos privados",
                  "La web presenta el servicio; la operativa y el seguimiento pasan por el canal y las áreas de acceso.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3.5 sm:py-4"
                >
                  <p className="text-sm font-medium text-stone-100">{title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-stone-300">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1rem] border border-amber-200/10 bg-amber-50/[0.03] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-100/70">
                Qué puedes esperar del seguimiento
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                Una presentación clara del servicio, del tipo de picks que se trabajan y de cómo se accede al canal de Telegram y a las modalidades de pago, sin convertir la portada en un listado diario de pronósticos.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-amber-200/75">
              Propuesta de valor
            </p>
            <h2 className="mt-3 max-w-xl font-[var(--font-demo-display)] text-3xl leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              Lo que vas a encontrar dentro del canal y los accesos privados desde el primer vistazo.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {demoContent.valuePillars.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-4.5 sm:p-5"
              >
                <h3 className="text-lg font-semibold text-stone-50">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-stone-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.02))] p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-amber-200/75">
              Beneficios y diferenciadores
            </p>
            <h2 className="mt-3 font-[var(--font-demo-display)] text-3xl tracking-[-0.03em] text-white sm:text-4xl">
              Un servicio centrado en picks analizados, gestión de bank y seguimiento real en Telegram.
            </h2>
          </div>
          <div className="grid gap-3">
            {demoContent.differentiators.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-black/15 px-4 py-4"
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-200" />
                <p className="text-sm leading-6 text-stone-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="mt-16">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-amber-200/75">
              Cómo funciona
            </p>
            <h2 className="mt-3 font-[var(--font-demo-display)] text-3xl tracking-[-0.03em] text-white sm:text-4xl">
              Un flujo sencillo para que el seguimiento sea claro desde el primer día.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {demoContent.flow.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 sm:p-6"
              >
                <p className="text-sm font-semibold text-amber-200/85">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-stone-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="accesos" className="mt-16">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-amber-200/75">
              Opciones de acceso
            </p>
            <h2 className="mt-3 font-[var(--font-demo-display)] text-3xl tracking-[-0.03em] text-white sm:text-4xl">
              Free, premium o seguimiento ampliado según el nivel de implicación.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {demoContent.accessOptions.map((option) => (
              <article
                key={option.name}
                className={`rounded-[1.8rem] border p-6 ${
                  option.featured
                    ? "border-amber-200/30 bg-[linear-gradient(180deg,_rgba(217,191,140,0.18),_rgba(255,255,255,0.04))] shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
                    : "border-white/10 bg-white/[0.045]"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.28em] text-amber-100/75">{option.label}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{option.name}</h3>
                <p className="mt-2 text-sm text-stone-400">{option.price}</p>
                <p className="mt-4 text-sm leading-6 text-stone-300">{option.description}</p>
                <ul className="mt-5 grid gap-3 text-sm text-stone-200">
                  {option.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-full border border-white/10 px-3 py-2">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${
                    option.featured
                      ? "bg-stone-950 text-amber-100 hover:bg-black"
                      : "border border-white/12 bg-white/[0.04] text-stone-100 hover:border-amber-200/18 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {option.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-amber-200/75">
              Presencia social
            </p>
            <h2 className="mt-3 font-[var(--font-demo-display)] text-3xl tracking-[-0.03em] text-white sm:text-4xl">
              Telegram como canal principal y redes pensadas para reforzar la marca.
            </h2>
            <p className="mt-4 text-sm leading-6 text-stone-300">
              Los picks, avisos y el seguimiento real pasan por Telegram. Instagram, X y el resto
              de perfiles ayudan a dar visibilidad al proyecto, atraer nuevos usuarios al canal y
              mantener una presencia de marca coherente sin convertir la web en un feed diario.
            </p>
          </div>
          <div className="grid gap-4">
            {demoContent.socialChannels.map((channel) => (
              <Link
                key={channel.name}
                href="#"
                className="group rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.055),_rgba(255,255,255,0.03))] p-5 transition hover:border-amber-200/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-200/10 bg-amber-50/[0.04] text-amber-100/85">
                      <SocialIcon name={channel.name} />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{channel.name}</p>
                      <p className="mt-1 text-sm text-amber-100/75">{channel.handle}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300 transition group-hover:border-amber-200/20 group-hover:text-white">
                    Ver canal
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-300">{channel.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-amber-200/75">
              Prueba social
            </p>
            <h2 className="mt-3 font-[var(--font-demo-display)] text-3xl tracking-[-0.03em] text-white sm:text-4xl">
              Lo que valoran quienes ya siguen el servicio.
            </h2>
            <p className="mt-4 text-xs leading-6 text-stone-400">{demoContent.testimonialsNote}</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {demoContent.testimonials.map((item) => (
              <article
                key={item.author}
                className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.03))] p-6"
              >
                <p className="text-sm leading-7 text-stone-200">{item.quote}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="mt-1 text-sm text-stone-400">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-amber-200/75">
              FAQ
            </p>
            <h2 className="mt-3 font-[var(--font-demo-display)] text-3xl tracking-[-0.03em] text-white sm:text-4xl">
              Dudas habituales antes de entrar al servicio.
            </h2>
          </div>
          <div className="grid gap-3">
            {demoContent.faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.4rem] border border-white/10 bg-white/[0.045] px-5 py-4"
              >
                <summary className="cursor-pointer list-none pr-8 text-sm font-semibold text-white marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-stone-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="cta-final"
          className="mt-16 rounded-[2rem] border border-amber-200/15 bg-[linear-gradient(180deg,_rgba(217,191,140,0.14),_rgba(255,255,255,0.04))] px-6 py-8 sm:px-8 sm:py-10"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-amber-100/80">
            Acceso final
          </p>
          <h2 className="mt-3 max-w-2xl font-[var(--font-demo-display)] text-3xl tracking-[-0.03em] text-white sm:text-4xl">
            Elige tu acceso y recibe los picks con el formato y la constancia de Atlas Picks.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-300">
            Puedes empezar por el canal free para conocer el ritmo del servicio o pasar
            directamente a premium si quieres el seguimiento completo.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="#"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-black"
            >
              Entrar a Premium
            </Link>
            <Link
              href="#"
              className={subtleCtaClassName}
            >
              Ver acceso free
            </Link>
          </div>
        </section>

        <section className="mt-5">
          <div className="flex flex-col gap-4 rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,_rgba(255,255,255,0.045),_rgba(255,255,255,0.02))] px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-stone-100">
                ¿Te interesaría una web así? Escríbeme sin compromiso.
              </p>
              <p className="mt-1 text-xs leading-5 text-stone-400">
                Si quieres una versión adaptada a tu marca, te la enseño.
              </p>
            </div>
            <Link
              href="https://t.me/Elte13"
              target="_blank"
              rel="noreferrer"
              aria-label="Contactar por Telegram con @Elte13"
              className="inline-flex min-h-11 items-center gap-3 self-start rounded-full border border-[#229ED9]/30 bg-[#229ED9]/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#229ED9]/45 hover:bg-[#229ED9]/16"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_10px_24px_rgba(34,158,217,0.3)]">
                <SocialIcon name="Telegram" />
              </span>
              <span>@Elte13</span>
            </Link>
          </div>
        </section>

        <section className="flex justify-between items-center border-t border-gray-200 pt-6 pb-6 px-6 flex-wrap gap-4">
          <div className="flex flex-col">
            <img src="/logo-iamagica.png" alt="IAMagica" className="h-7" />
            <p className="text-xs text-gray-400 mt-1">© 2026 IAMagica</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs font-semibold text-green-800 tracking-wider">DIGITALIZA TU NEGOCIO</p>
            <a href="mailto:info@iamagica.es" className="text-gray-500 no-underline flex items-center gap-1 mt-1">
              <span className="text-xl">✉</span>
              <span>info@iamagica.es</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
