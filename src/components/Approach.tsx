import { approach } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="approach" className="relative bg-sand-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-600">How we work</p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy-900 sm:text-5xl">
            Advise. Manage. Deliver Value.
          </h2>
          <p className="mt-5 text-ink-500">
            A single, disciplined thread of commercial control that runs from the
            first feasibility study to final account.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {approach.map((a, i) => (
            <Reveal
              key={a.step}
              delay={i * 100}
              as="article"
              className="relative flex flex-col rounded-2xl border border-sand-200 bg-white p-8 shadow-[0_2px_24px_rgba(11,20,48,0.05)] transition-all hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[0_18px_50px_rgba(11,20,48,0.12)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-6xl font-extrabold leading-none text-sand-200">
                  {a.step}
                </span>
                <span className="rounded-full bg-navy-900 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
                  {a.title}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold text-navy-900">
                {a.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {a.body}
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-gold-500 to-ember-500" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
