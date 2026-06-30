import { company } from "@/lib/content";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

const channels = [
  {
    icon: "phone" as const,
    label: "Call us (USA)",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: "mail" as const,
    label: "Email us",
    value: company.email,
    href: company.emailHref,
  },
  {
    icon: "pin" as const,
    label: "Based in",
    value: company.location,
    href: undefined,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-navy-950 text-white"
    >
      <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden />
      <div
        className="animate-float-glow absolute -right-20 top-0 h-96 w-96 rounded-full bg-navy-600/30 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold-400">Let&rsquo;s build success together</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] sm:text-6xl">
              Your project.
              <br />
              <span className="text-gradient-gold">Our support.</span>
              <br />
              Shared success.
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              Whether you&rsquo;re planning, mid-delivery or resolving a commercial
              challenge, we&rsquo;ll bring clarity and confidence to your numbers.
              Tell us about your project.
            </p>

            <div className="mt-10 space-y-3">
              {channels.map((c) => {
                const Glyph = Icon[c.icon];
                const inner = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400 ring-1 ring-gold-500/25">
                      <Glyph className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                        {c.label}
                      </span>
                      <span className="block text-lg font-bold text-white">
                        {c.value}
                      </span>
                    </span>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-gold-500/40 hover:bg-white/[0.06]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9"
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
              Start a conversation
            </h3>
            <p className="mt-2 text-sm text-white/55">
              We typically respond within one business day.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
