import { company, stats } from "@/lib/content";
import { Icon } from "./Icons";
import { Building3D } from "./Building3D";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-paper-0 text-navy-900"
    >
      {/* Drawing-sheet backdrop */}
      <div className="absolute inset-0 bg-sheet" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white"
        aria-hidden
      />
      {/* Soft brand glows on paper */}
      <div
        className="absolute -right-40 -top-32 h-[30rem] w-[30rem] rounded-full bg-gold-300/25 blur-[130px]"
        aria-hidden
      />
      <div
        className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-navy-500/10 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-navy-900/12 bg-white px-4 py-1.5 shadow-sm">
              <span className="text-base leading-none">🇺🇸</span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                {company.badge.join(" · ")}
              </span>
            </div>

            <p className="eyebrow text-ember-500">
              {company.pillars.join("  /  ")}
            </p>

            <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-navy-900 sm:text-6xl lg:text-7xl">
              Building
              <br />
              Confidence.
              <br />
              <span className="text-gradient-gold">Delivering Value.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500">
              {company.heroLede}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-navy-900/20 transition-all hover:bg-navy-800 hover:shadow-xl"
              >
                Start a Conversation
                <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/20 bg-white/70 px-7 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:border-ember-500 hover:text-ember-600"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Signature: self-constructing 3D tower */}
          <div className="sheet-corner px-2 py-4">
            <Building3D />
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900/10 shadow-[0_16px_50px_rgba(11,20,48,0.08)] sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-5 py-6">
              <dt className="font-display text-4xl font-extrabold text-navy-900">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy-900/20 to-transparent" />
    </section>
  );
}
