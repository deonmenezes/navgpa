import { valueProps, company } from "@/lib/content";
import { Icon, type IconName } from "./Icons";
import { Reveal } from "./Reveal";

export function ValueProps() {
  return (
    <section className="relative bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-gold-400">Why NavGPA</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              The advisory partner for the modern built environment
            </h2>
            <p className="mt-6 max-w-md text-white/70">{company.intro}</p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2">
            {valueProps.map((v, i) => {
              const Glyph = Icon[v.icon as IconName];
              return (
                <Reveal
                  key={v.key}
                  delay={i * 80}
                  className="group bg-navy-800/40 p-7 transition-colors hover:bg-navy-800"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400 ring-1 ring-gold-500/25 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
                    <Glyph className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {v.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
