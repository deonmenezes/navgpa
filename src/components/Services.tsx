import { services } from "@/lib/content";
import { Icon, type IconName } from "./Icons";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-600">What we do</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy-900 sm:text-5xl">
              Our Core Services
            </h2>
            <p className="mt-5 text-ink-500">
              End-to-end commercial and BIM support for the built environment —
              accurate, dependable and technology-driven at every stage.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-navy-900/15 px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600 md:inline-flex"
          >
            Discuss your project
            <Icon.arrow className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Glyph = Icon[s.icon as IconName];
            return (
              <Reveal
                key={s.title}
                delay={(i % 4) * 70}
                as="article"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 p-7 transition-all hover:-translate-y-1 hover:border-transparent hover:bg-navy-900 hover:shadow-[0_20px_50px_rgba(11,20,48,0.18)]"
              >
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl bg-navy-900 p-3 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
                  <Glyph className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold uppercase leading-tight tracking-wide text-navy-900 transition-colors group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 transition-colors group-hover:text-white/65">
                  {s.body}
                </p>
                <span className="mt-5 h-0.5 w-8 rounded-full bg-gold-500 transition-all group-hover:w-14" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
