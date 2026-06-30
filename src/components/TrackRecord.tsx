import { trackRecord } from "@/lib/content";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";

export function TrackRecord() {
  return (
    <section id="track-record" className="relative scroll-mt-20 bg-sand-100">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold-600">Selected experience</p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy-900 sm:text-5xl">
            A track record on landmark projects
          </h2>
          <p className="mt-5 text-ink-500">
            From the redevelopment of Battersea Power Station to landmark hotels
            and government estates — commercial and BIM leadership where it counts.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trackRecord.map((p, i) => (
            <Reveal
              key={p.project}
              delay={(i % 3) * 80}
              as="article"
              className="flex flex-col rounded-2xl border border-sand-200 bg-white p-7 shadow-[0_2px_20px_rgba(11,20,48,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(11,20,48,0.12)]"
            >
              <div className="flex items-center gap-2 text-gold-600">
                <Icon.pin className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                  {p.location}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight text-navy-900">
                {p.project}
              </h3>
              <p className="mt-1 text-sm font-semibold text-ember-600">
                {p.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                {p.detail}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 flex justify-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-navy-800"
          >
            View all case studies
            <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
