import Image from "next/image";
import { Reveal } from "./Reveal";

export function Legacy() {
  return (
    <section className="relative bg-sand-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold-600">Our foundation</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy-900 sm:text-5xl">
              Built for the future on a proven legacy
            </h2>
            <p className="mt-6 text-ink-500">
              NAV Global Project Advisory is the evolution of{" "}
              <strong className="font-semibold text-navy-900">
                Nav Projects Support Ltd.
              </strong>{" "}
              — building on years of proven expertise and a legacy of excellence
              in the UK and Sri Lanka, now expanding globally to deliver greater
              value.
            </p>
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-sand-200 bg-white px-6 py-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 font-display text-lg font-extrabold text-gold-400">
                NPS
              </div>
              <div>
                <p className="font-display text-base font-bold uppercase tracking-wide text-navy-900">
                  Nav Projects Support Ltd.
                </p>
                <p className="text-sm font-semibold text-gold-600">
                  Our legacy. Your advantage.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-3xl border border-sand-200 bg-white p-6 shadow-[0_20px_60px_rgba(11,20,48,0.12)]">
              <Image
                src="/logo-navgpa.jpg"
                alt="NAV Global Project Advisory — Cost Control · BIM Excellence · Project Success · San Francisco, California"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 1024px) 90vw, 540px"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-gradient-to-r from-gold-500 to-ember-500 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-navy-900 shadow-lg sm:block"
              aria-hidden
            >
              San Francisco · Global
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
