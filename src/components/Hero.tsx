import { company, stats } from "@/lib/content";
import { Icon } from "./Icons";
import { Wireframe } from "./Wireframe";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      {/* Backdrop layers */}
      <div className="absolute inset-0 bg-blueprint opacity-90" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-950/70 to-navy-950"
        aria-hidden
      />
      <div
        className="animate-float-glow absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-navy-600/40 blur-[120px]"
        aria-hidden
      />
      <div
        className="animate-float-glow absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-gold-600/15 blur-[110px]"
        aria-hidden
      />

      {/* Wireframe */}
      <Wireframe className="pointer-events-none absolute -right-16 top-24 hidden h-[40rem] w-auto opacity-90 lg:block xl:right-6" />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:pb-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-base leading-none">🇺🇸</span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              {company.badge.join(" · ")}
            </span>
          </div>

          <p className="eyebrow text-gold-400">
            {company.pillars.join("  /  ")}
          </p>

          <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
            Building
            <br />
            Confidence.
            <br />
            <span className="text-gradient-gold">Delivering Value.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            {company.heroLede}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-bold text-navy-900 shadow-lg shadow-gold-600/20 transition-all hover:bg-gold-400 hover:shadow-xl"
            >
              Start a Conversation
              <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy-900/40 px-5 py-6">
              <dt className="font-display text-4xl font-extrabold text-gold-400">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-white/55">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
    </section>
  );
}
