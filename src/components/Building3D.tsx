import { CountUp } from "./CountUp";

/**
 * Pure-CSS 3D isometric tower that constructs itself on a rotating
 * drawing-sheet base — the site's signature animation.
 *
 * Geometry: a `preserve-3d` world tilted into isometric view. Each floor
 * is a cuboid (4 walls + slab) that drops in on a staggered loop. An
 * ember tower crane slews above, and billboarded QS callouts float
 * around the scene tying geometry to cost (5D).
 *
 * No WebGL, no dependencies — just transforms, so it is light, crisp at
 * any resolution and respects prefers-reduced-motion (renders as a
 * finished static tower).
 */

const FLOORS = 6;
const SIZE = 190; // footprint (px)
const FLOOR_H = 46; // storey height (px)
const CYCLE = 16; // seconds per construction loop
const STAGGER = 0.9; // seconds between floors

function Floor({ index }: { index: number }) {
  const z = index * FLOOR_H;
  const wall = {
    width: SIZE,
    height: FLOOR_H,
  } as const;

  return (
    <div
      className="b3d-floor"
      style={
        {
          "--b3d-delay": `${index * STAGGER}s`,
          "--b3d-cycle": `${CYCLE}s`,
        } as React.CSSProperties
      }
    >
      {/* Slab (top of this storey) */}
      <div
        className="b3d-face b3d-slab"
        style={{
          width: SIZE,
          height: SIZE,
          transform: `translateZ(${z + FLOOR_H}px)`,
        }}
      />
      {/* Four walls */}
      <div
        className="b3d-face b3d-wall"
        style={{
          ...wall,
          transform: `rotateX(-90deg) translateZ(${-z - FLOOR_H}px)`,
          transformOrigin: "top",
        }}
      />
      <div
        className="b3d-face b3d-wall"
        style={{
          ...wall,
          transform: `translateY(${SIZE}px) rotateX(-90deg) translateZ(${-z - FLOOR_H}px)`,
          transformOrigin: "top",
        }}
      />
      <div
        className="b3d-face b3d-wall"
        style={{
          ...wall,
          transform: `rotateZ(90deg) rotateX(-90deg) translateZ(${-z - FLOOR_H}px)`,
          transformOrigin: "top",
        }}
      />
      <div
        className="b3d-face b3d-wall"
        style={{
          ...wall,
          transform: `translateX(${SIZE}px) rotateZ(90deg) rotateX(-90deg) translateZ(${-z - FLOOR_H}px)`,
          transformOrigin: "top",
        }}
      />
    </div>
  );
}

function Crane() {
  const mastH = FLOORS * FLOOR_H + 96;
  const jibLen = 210;
  return (
    <div
      className="b3d-crane"
      style={{ left: SIZE + 46, top: -34, width: 0, height: 0 }}
    >
      {/* Mast — two crossed planes so it reads from every angle */}
      <div
        className="b3d-face b3d-beam"
        style={{
          width: 10,
          height: mastH,
          transform: `rotateX(-90deg) translateY(${-mastH}px)`,
          transformOrigin: "top",
        }}
      />
      <div
        className="b3d-face b3d-beam"
        style={{
          width: 10,
          height: mastH,
          transform: `rotateZ(90deg) rotateX(-90deg) translateY(${-mastH}px)`,
          transformOrigin: "top",
        }}
      />
      {/* Slewing jib group at the mast head */}
      <div
        className="b3d-crane-jib"
        style={{ transform: "rotateZ(0deg)", left: 0, top: 0 }}
      >
        <div
          className="b3d-face b3d-beam"
          style={{
            width: jibLen,
            height: 8,
            transform: `translateZ(${mastH}px)`,
          }}
        />
        {/* Counter-jib */}
        <div
          className="b3d-face b3d-beam"
          style={{
            width: 64,
            height: 8,
            transform: `translateX(-64px) translateZ(${mastH}px)`,
            opacity: 0.85,
          }}
        />
        {/* Hoist cable, raising and lowering */}
        <div
          className="b3d-face b3d-hook"
          style={{
            width: 2,
            height: mastH - FLOORS * FLOOR_H - 12,
            background: "rgba(11,20,48,0.55)",
            left: jibLen - 26,
            transform: "rotateX(-90deg)",
            transformOrigin: "top",
          }}
        />
      </div>
    </div>
  );
}

export function Building3D() {
  const groundSize = SIZE * 2.4;
  return (
    <div
      className="relative mx-auto h-[26rem] w-full max-w-md select-none sm:h-[30rem]"
      role="img"
      aria-label="Animated 3D model of a building under construction, annotated with quantity-surveying measurements"
    >
      {/* 3D scene */}
      <div className="b3d-scene absolute inset-0" aria-hidden>
        <div
          className="b3d-world left-1/2 top-[58%]"
          style={{ width: 0, height: 0 }}
        >
          {/* Ground sheet */}
          <div
            className="b3d-ground"
            style={{
              width: groundSize,
              height: groundSize,
              left: -groundSize / 2 + SIZE / 2,
              top: -groundSize / 2 + SIZE / 2,
              transform: "translateZ(0px)",
            }}
          />
          {/* Tower footprint origin */}
          <div
            className="absolute"
            style={{
              width: SIZE,
              height: SIZE,
              left: -SIZE / 2,
              top: -SIZE / 2,
              transformStyle: "preserve-3d",
            }}
          >
            {Array.from({ length: FLOORS }, (_, i) => (
              <Floor key={i} index={i} />
            ))}
            <Crane />
          </div>
        </div>
      </div>

      {/* Drawn dimension line under the scene */}
      <svg
        className="pointer-events-none absolute inset-x-4 bottom-1 h-10"
        viewBox="0 0 400 40"
        fill="none"
        aria-hidden
        preserveAspectRatio="none"
      >
        <path
          className="draw-line"
          d="M20 20 H380 M20 12 V28 M380 12 V28"
          stroke="rgba(11,20,48,0.45)"
          strokeWidth="1.5"
        />
      </svg>
      <p
        className="b3d-callout absolute inset-x-0 bottom-0 text-center font-display text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-ink-500"
        style={{ "--callout-delay": "1.6s" } as React.CSSProperties}
        aria-hidden
      >
        Measured · Modelled · Costed
      </p>

      {/* Billboarded QS / 5D callouts */}
      <div
        className="b3d-callout absolute -left-2 top-8 sm:left-0"
        style={{ "--callout-delay": "0.5s" } as React.CSSProperties}
      >
        <div className="rounded-xl border border-navy-900/15 bg-white/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(11,20,48,0.10)] backdrop-blur">
          <p className="font-display text-xl font-extrabold text-navy-900">
            <CountUp to={12480} duration={2200} />
            <span className="text-sm font-bold text-ink-500"> m²</span>
          </p>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink-500">
            GIA measured
          </p>
        </div>
      </div>

      <div
        className="b3d-callout absolute right-0 top-24 sm:-right-2"
        style={{ "--callout-delay": "0.9s" } as React.CSSProperties}
      >
        <div className="rounded-xl border border-navy-900/15 bg-white/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(11,20,48,0.10)] backdrop-blur">
          <p className="font-display text-xl font-extrabold text-navy-900">
            $<CountUp to={48.2} decimals={1} duration={2400} />
            <span className="text-sm font-bold text-ink-500">m</span>
          </p>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink-500">
            Cost plan linked
          </p>
        </div>
      </div>

      <div
        className="b3d-callout absolute bottom-16 right-2 sm:right-6"
        style={{ "--callout-delay": "1.3s" } as React.CSSProperties}
      >
        <div className="b3d-pulse flex items-center gap-2 rounded-full border border-ember-500/40 bg-white px-3.5 py-1.5">
          <span className="h-2 w-2 rounded-full bg-ember-500" />
          <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-navy-900">
            5D BIM live
          </span>
        </div>
      </div>
    </div>
  );
}
