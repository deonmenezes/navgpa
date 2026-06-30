import { founder, publication } from "@/lib/content";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-navy-950 text-white"
    >
      <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden />
      <div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-navy-600/30 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Founder card */}
          <Reveal>
            <p className="eyebrow text-gold-400">Senior QS / BIM Professional</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Meet the Founder
            </h2>

            <div className="mt-9 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
              <div className="flex items-center gap-5">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 font-display text-2xl font-extrabold tracking-tight text-gold-400 ring-1 ring-gold-500/30">
                  NNV
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">
                    {founder.role}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs font-medium leading-relaxed tracking-wide text-white/55">
                {founder.credentials}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {founder.titles.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-medium text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 space-y-4 text-sm leading-relaxed text-white/70">
                {founder.bio.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>

              <blockquote className="mt-7 border-l-2 border-gold-500 pl-5">
                <p className="text-sm italic leading-relaxed text-white/80">
                  &ldquo;{founder.mission}&rdquo;
                </p>
                <footer className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                  Our Mission
                </footer>
              </blockquote>
            </div>
          </Reveal>

          {/* Right column: stat + publication + legacy hook */}
          <div className="flex flex-col gap-6">
            <Reveal
              delay={80}
              className="flex items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800/60 to-navy-900/60 p-8"
            >
              <span className="font-display text-7xl font-extrabold leading-none text-gold-400 sm:text-8xl">
                17<span className="text-ember-500">+</span>
              </span>
              <div>
                <p className="font-display text-xl font-bold uppercase tracking-wide">
                  Years of experience
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Across QS, cost management, BIM, project controls and
                  construction education — in diverse sectors and international
                  markets.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={140}
              as="article"
              className="group rounded-3xl border border-gold-500/25 bg-gold-500/[0.06] p-8"
            >
              <div className="flex items-center gap-2 text-gold-400">
                <Icon.doc className="h-5 w-5" />
                <span className="eyebrow">{publication.label}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug text-white">
                {publication.title}
              </h3>
              <p className="mt-3 text-sm text-white/65">{publication.blurb}</p>
              <p className="mt-4 text-xs font-medium text-white/45">
                {publication.authors} · {publication.venue}
              </p>
              <a
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition-colors hover:text-gold-300"
              >
                Read the research (PDF)
                <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal
              delay={200}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
                Knowledge · Experience · Results
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                A blend of deep academic grounding and front-line site delivery —
                bringing rigour, transparency and a digital-first mindset to every
                commission.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
