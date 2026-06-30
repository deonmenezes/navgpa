import { Logo } from "./Logo";
import { company, nav, services } from "@/lib/content";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              {company.intro}
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
              {company.pillars.join("  ·  ")}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/55 transition-colors hover:text-gold-400"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-white/55 transition-colors hover:text-gold-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
            <a href={company.phoneHref} className="hover:text-gold-400">
              {company.phone}
            </a>
            <a href={company.emailHref} className="hover:text-gold-400">
              {company.email}
            </a>
            <span>{company.location}</span>
          </div>
          <p className="text-xs text-white/40">
            © {year} {company.name}. The evolution of {company.legalLegacy}
          </p>
        </div>
      </div>
    </footer>
  );
}
