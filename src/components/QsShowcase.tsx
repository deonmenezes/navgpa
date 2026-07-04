"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { Icon } from "./Icons";

/**
 * Quantity Surveying spotlight — a Bill of Quantities that measures
 * itself. Element bars draw in, amounts count up into a tallying total,
 * and a measuring scan-line sweeps the sheet. Pure CSS + CountUp.
 */

const ELEMENTS = [
  { code: "1.0", name: "Substructure", amount: 4.6 },
  { code: "2.0", name: "Superstructure & Frame", amount: 9.8 },
  { code: "3.0", name: "External Envelope", amount: 7.4 },
  { code: "4.0", name: "MEP Services", amount: 12.6 },
  { code: "5.0", name: "Finishes & FF&E", amount: 6.2 },
] as const;

const TOTAL = ELEMENTS.reduce((t, e) => t + e.amount, 0);
const MAX = Math.max(...ELEMENTS.map((e) => e.amount));

const DELIVERABLES = [
  "Bills of Quantities (BOQ)",
  "Cost planning & estimating",
  "Model-based take-offs",
  "Tender & procurement support",
  "Contract administration",
  "Valuations, variations & claims",
] as const;

export function QsShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setLive(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section id="quantity-surveying" className="relative scroll-mt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-sheet opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Live cost plan */}
          <div ref={ref} className={live ? "qs-live" : ""}>
            <div className="sheet-corner relative mx-auto max-w-lg rounded-2xl border border-navy-900/12 bg-white/95 p-6 shadow-[0_24px_70px_rgba(11,20,48,0.12)] backdrop-blur sm:p-8">
              {/* Measuring scan-line */}
              <span
                className="qs-scan pointer-events-none absolute inset-x-3 h-px bg-gradient-to-r from-transparent via-ember-500 to-transparent"
                aria-hidden
              />

              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-sm font-extrabold uppercase tracking-[0.22em] text-navy-900">
                  Elemental Cost Plan
                </p>
                <span className="flex items-center gap-1.5 rounded-full border border-ember-500/40 bg-white px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-navy-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
                  Measuring live
                </span>
              </div>

              <ul className="mt-6 space-y-4">
                {ELEMENTS.map((e, i) => (
                  <li key={e.code}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-semibold text-navy-900">
                        <span className="mr-2 font-display text-xs font-bold text-gold-600">
                          {e.code}
                        </span>
                        {e.name}
                      </span>
                      <span className="font-display text-base font-extrabold tabular-nums text-navy-900">
                        $
                        {live ? (
                          <CountUp to={e.amount} decimals={1} duration={1500 + i * 200} />
                        ) : (
                          "0.0"
                        )}
                        m
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-paper-100">
                      <div
                        className="qs-bar h-full rounded-full bg-gradient-to-r from-navy-900 via-navy-700 to-gold-500"
                        style={
                          {
                            width: `${(e.amount / MAX) * 100}%`,
                            "--qs-delay": `${i * 140}ms`,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-baseline justify-between border-t-2 border-navy-900/70 pt-4">
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-navy-900">
                  Construction total
                </span>
                <span className="font-display text-3xl font-extrabold tabular-nums text-navy-900">
                  ${live ? <CountUp to={TOTAL} decimals={1} duration={2300} /> : "0.0"}
                  <span className="text-lg text-ink-500">m</span>
                </span>
              </div>
              <p className="mt-2 text-right text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ember-600">
                Auditable line by line · linked to the model
              </p>
            </div>
          </div>

          {/* Copy */}
          <Reveal>
            <p className="eyebrow text-ember-500">Quantity surveying at our core</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy-900 sm:text-5xl">
              Commercial certainty,
              <br />
              measured to the last line
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
              Quantity surveying is where NavGPA started and where we go
              deepest. As your construction and commercial advisors, we put a
              defensible number on every element of your project — then defend
              it through tender, contract and final account.
            </p>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span className="text-sm font-medium">{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-navy-900/20 transition-all hover:bg-navy-800 hover:shadow-xl"
              >
                Get a cost plan
                <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/20 bg-white/70 px-7 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:border-ember-500 hover:text-ember-600"
              >
                See it on real projects
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
