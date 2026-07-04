import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import Image from "next/image";
import { caseStudies, projectPartners, company, bimBenefits, personnel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Selected NavGPA case studies — Battersea Power Station, the Ministry of Justice Soapworks, Taj Samudra Hotel and more across quantity surveying, BIM, commercial and project management.",
  alternates: { canonical: "https://navgpa.com/projects" },
};

const regions = ["United Kingdom", "International"] as const;

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-paper-0 text-navy-900">
          <div className="absolute inset-0 bg-sheet" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white" aria-hidden />
          <div
            className="absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-gold-300/25 blur-[130px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44">
            <Reveal>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 transition-colors hover:text-ember-600"
              >
                <Icon.arrow className="h-4 w-4 rotate-180" />
                Back to home
              </a>
              <p className="eyebrow mt-7 text-ember-500">Selected experience</p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
                Projects &amp; Case Studies
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-ink-500">
                A selection of commissions delivered across the UK and
                internationally — spanning quantity surveying, BIM, commercial
                and project management on landmark and specialist projects.
              </p>
            </Reveal>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy-900/20 to-transparent" />
        </section>

        {/* Case studies by region */}
        <section className="bg-sand-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            {regions.map((region) => {
              const items = caseStudies.filter((c) => c.region === region);
              if (items.length === 0) return null;
              return (
                <div key={region} className="mb-20 last:mb-0">
                  <Reveal className="mb-10 flex items-center gap-4">
                    <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-navy-900 sm:text-3xl">
                      {region}
                    </h2>
                    <span className="h-px flex-1 bg-sand-200" />
                    <span className="font-display text-sm font-bold text-gold-600">
                      {String(items.length).padStart(2, "0")}
                    </span>
                  </Reveal>

                  <div className="grid gap-6 lg:grid-cols-2">
                    {items.map((c, i) => (
                      <Reveal
                        key={c.project}
                        delay={(i % 2) * 90}
                        as="article"
                        className="group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-[0_2px_22px_rgba(11,20,48,0.05)] transition-all hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[0_18px_48px_rgba(11,20,48,0.12)]"
                      >
                        {/* Project image from the company profile */}
                        <div className="relative h-52 w-full overflow-hidden border-b border-sand-200 bg-paper-100 sm:h-56">
                          <Image
                            src={c.image}
                            alt={`${c.project} — ${c.sector}`}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                          <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy-900 shadow-sm backdrop-blur">
                            {c.sector}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col p-7 sm:p-9">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gold-600">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em]">
                            <Icon.pin className="h-4 w-4" />
                            {c.location}
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-navy-900">
                          {c.project}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-ember-600">
                          {c.role}
                        </p>
                        <p className="mt-1 text-xs font-medium text-ink-500">
                          {c.client}
                        </p>

                        <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-500">
                          {c.detail}
                        </p>

                        <ul className="mt-6 flex flex-wrap gap-2">
                          {c.highlights.map((h) => (
                            <li
                              key={h}
                              className="rounded-full border border-sand-200 bg-sand-50 px-3 py-1 text-xs font-semibold text-navy-700"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Partners */}
            <Reveal className="mt-4 rounded-3xl border border-sand-200 bg-white p-8 sm:p-10">
              <p className="eyebrow text-gold-600">Selected partners &amp; clients</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                {projectPartners.map((p) => (
                  <span
                    key={p}
                    className="font-display text-lg font-bold uppercase tracking-wide text-navy-900/70"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* The BIM advantage — full benefits list from the company profile */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-sheet opacity-50" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-ember-500">The BIM advantage</p>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy-900 sm:text-5xl">
                What our BIM approach delivers
              </h2>
              <p className="mt-5 text-ink-500">
                Twelve concrete benefits our clients get from BIM-aligned
                delivery — from the golden thread of design intent through to
                measured post-occupancy performance.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bimBenefits.map((b, i) => (
                <Reveal
                  key={b.title}
                  delay={(i % 3) * 70}
                  as="article"
                  className="flex gap-4 rounded-2xl border border-sand-200 bg-paper-50 p-6 transition-colors hover:border-gold-400/60 hover:bg-white"
                >
                  <span className="font-display text-2xl font-extrabold text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-navy-900">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Resource personnel */}
        <section className="bg-paper-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-ember-500">Resource personnel</p>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy-900 sm:text-5xl">
                The network behind our projects
              </h2>
              <p className="mt-5 text-ink-500">
                Our strength is our knowledge, experience and ability to deliver
                project goals successfully — a multidisciplinary team of
                chartered architects, engineers, services engineers and
                BIM-qualified quantity surveyors.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {personnel.map((person, i) => (
                <Reveal
                  key={person.name}
                  delay={(i % 2) * 90}
                  as="article"
                  className="rounded-2xl border border-sand-200 bg-white p-7 shadow-[0_2px_22px_rgba(11,20,48,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,20,48,0.1)] sm:p-8"
                >
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy-900">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ember-600">
                    {person.role}
                  </p>
                  <p className="mt-1 text-xs font-medium text-gold-600">
                    {person.credentials}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500">
                    {person.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-900 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 max-w-xl text-white/65">
                Tell us about your scheme and we&rsquo;ll bring the same rigour and
                clarity to your numbers.
              </p>
            </div>
            <a
              href="/#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-gold-400"
            >
              Start a Conversation
              <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <span className="sr-only">{company.name} project portfolio</span>
    </>
  );
}
