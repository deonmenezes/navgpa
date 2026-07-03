"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

/**
 * "One model, five dimensions" — a CSS-3D stack of BIM layers that
 * explodes apart as it scrolls into view. Hovering a layer lifts and
 * highlights it. Pure transforms, no libraries.
 */

const LAYERS = [
  {
    key: "cost",
    label: "5D · Cost",
    note: "Live cost plan tied to every element",
    z: 260,
    accent: "#e8631f",
    pattern: "cost" as const,
  },
  {
    key: "qs",
    label: "Quantities",
    note: "Automated, auditable take-offs",
    z: 195,
    accent: "#c4a24c",
    pattern: "grid" as const,
  },
  {
    key: "mep",
    label: "MEP",
    note: "Services coordinated, clashes resolved",
    z: 130,
    accent: "#2c4488",
    pattern: "routes" as const,
  },
  {
    key: "structure",
    label: "Structure",
    note: "Frame, cores and load paths",
    z: 65,
    accent: "#17285c",
    pattern: "frame" as const,
  },
  {
    key: "arch",
    label: "Architecture",
    note: "Design intent, spaces and fabric",
    z: 0,
    accent: "#0b1430",
    pattern: "plan" as const,
  },
];

function LayerPattern({ kind, accent }: { kind: string; accent: string }) {
  const stroke = accent;
  switch (kind) {
    case "cost":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
          <g stroke={stroke} strokeWidth="2" fill="none" opacity="0.75">
            <path d="M18 104 L58 72 L96 86 L138 46 L182 58" />
            <circle cx="58" cy="72" r="3.5" fill={stroke} />
            <circle cx="138" cy="46" r="3.5" fill={stroke} />
          </g>
          <g fill={stroke} opacity="0.35">
            <rect x="18" y="112" width="30" height="5" rx="2.5" />
            <rect x="56" y="112" width="46" height="5" rx="2.5" />
            <rect x="110" y="112" width="24" height="5" rx="2.5" />
          </g>
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
          <g stroke={stroke} strokeWidth="1" opacity="0.45">
            {[30, 60, 90, 120, 150, 180].map((x) => (
              <line key={x} x1={x} y1="14" x2={x} y2="116" />
            ))}
            {[34, 62, 90].map((y) => (
              <line key={y} x1="16" y1={y} x2="184" y2={y} />
            ))}
          </g>
          <g fill={stroke} opacity="0.6">
            <rect x="36" y="40" width="18" height="16" rx="2" />
            <rect x="96" y="68" width="18" height="16" rx="2" />
            <rect x="126" y="40" width="18" height="16" rx="2" />
          </g>
        </svg>
      );
    case "routes":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
          <g stroke={stroke} strokeWidth="2.5" fill="none" opacity="0.6">
            <path d="M14 34 H96 V78 H186" />
            <path d="M14 96 H60 V56 H150" />
          </g>
          <g fill={stroke} opacity="0.85">
            <circle cx="96" cy="34" r="4" />
            <circle cx="60" cy="96" r="4" />
            <circle cx="150" cy="56" r="4" />
          </g>
        </svg>
      );
    case "frame":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
          <g stroke={stroke} strokeWidth="2" fill="none" opacity="0.55">
            {[28, 76, 124, 172].map((x) => (
              <line key={x} x1={x} y1="18" x2={x} y2="112" />
            ))}
            <line x1="20" y1="40" x2="180" y2="40" />
            <line x1="20" y1="76" x2="180" y2="76" />
            <path d="M28 112 L76 76 M76 112 L124 76" opacity="0.5" />
          </g>
        </svg>
      );
    default: // plan
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
          <g stroke={stroke} strokeWidth="2" fill="none" opacity="0.55">
            <rect x="22" y="20" width="156" height="90" rx="3" />
            <line x1="98" y1="20" x2="98" y2="110" />
            <line x1="98" y1="62" x2="178" y2="62" />
            <path d="M60 110 a18 18 0 0 1 18 -18" opacity="0.8" />
          </g>
        </svg>
      );
  }
}

export function BimShowcase() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    const node = sceneRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setExploded(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setExploded(true);
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
    <section
      id="bim"
      className="relative scroll-mt-20 overflow-hidden bg-paper-50"
    >
      <div className="absolute inset-0 bg-sheet opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <Reveal>
            <p className="eyebrow text-ember-500">BIM &amp; 5D intelligence</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-navy-900 sm:text-5xl">
              One model.
              <br />
              Five dimensions of certainty.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
              Every drawing, quantity and dollar lives in a single connected
              model. We build from architecture up through structure and
              services to automated take-offs — and connect it all to a live
              cost plan, so a design change shows its commercial impact
              immediately.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Model-based quantity take-offs you can audit line by line",
                "Cost plans that update with the design, not weeks behind it",
                "Clash-free coordination before it becomes a site problem",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-white px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:border-ember-500 hover:text-ember-600"
            >
              Bring 5D to your project
            </a>
          </Reveal>

          {/* Exploded 3D layer stack */}
          <div
            ref={sceneRef}
            className="bim-scene relative mx-auto h-[26rem] w-full max-w-md sm:h-[30rem]"
            role="img"
            aria-label="Exploded 3D diagram of a BIM model: architecture, structure, MEP, quantities and cost layers"
          >
            <div
              className={`bim-stack left-1/2 top-[62%] h-56 w-72 -translate-x-1/2 sm:h-64 sm:w-80 ${
                exploded ? "bim-exploded" : ""
              }`}
            >
              {LAYERS.map((layer, i) => (
                <div
                  key={layer.key}
                  className="bim-layer"
                  style={
                    {
                      "--bim-z": `${layer.z}px`,
                      "--bim-delay": `${(LAYERS.length - i) * 90}ms`,
                    } as React.CSSProperties
                  }
                >
                  <LayerPattern kind={layer.pattern} accent={layer.accent} />
                  <span
                    className="bim-label absolute -right-2 top-1/2 flex items-center gap-2 whitespace-nowrap"
                    style={{ left: "100%" }}
                  >
                    <span
                      className="h-px w-7"
                      style={{ background: layer.accent }}
                    />
                    <span className="rounded-md border border-navy-900/10 bg-white/95 px-2.5 py-1 shadow-sm">
                      <span
                        className="block font-display text-[0.72rem] font-extrabold uppercase tracking-[0.14em]"
                        style={{ color: layer.accent }}
                      >
                        {layer.label}
                      </span>
                      <span className="block text-[0.6rem] text-ink-500">
                        {layer.note}
                      </span>
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
