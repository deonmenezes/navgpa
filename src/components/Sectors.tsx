import { sectors } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Sectors() {
  const loop = [...sectors, ...sectors];

  return (
    <section id="sectors" className="scroll-mt-20 bg-navy-900 py-16 text-white">
      <Reveal className="mx-auto mb-10 max-w-7xl px-5 text-center sm:px-8">
        <p className="eyebrow text-gold-400">Sectors we serve</p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
          Expertise across the built environment
        </h2>
      </Reveal>

      <div className="marquee-mask relative flex overflow-hidden">
        <ul className="animate-marquee flex shrink-0 items-center gap-4 pr-4">
          {loop.map((s, i) => (
            <li
              key={`${s}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/12 bg-white/[0.04] px-7 py-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-white/85">
                {s}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
