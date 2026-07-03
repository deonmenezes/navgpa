type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

/**
 * NAV Global Project Advisory brand lockup — emblem from the official logo
 * (public/brand-emblem.png) plus wordmark.
 * `light` = for dark backgrounds (white text), `dark` = for light backgrounds.
 */
export function Logo({
  variant = "light",
  className = "",
  showTagline = true,
}: LogoProps) {
  const word = variant === "light" ? "text-white" : "text-navy-900";
  const accent = variant === "light" ? "text-ember-400" : "text-ember-500";
  const sub = variant === "light" ? "text-white/65" : "text-ink-500";
  const ring = variant === "light" ? "ring-white/25" : "ring-navy-900/15";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem */}
      <span
        aria-hidden
        className={`grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ${ring}`}
      >
        <img
          src="/brand-emblem.png"
          alt=""
          width={44}
          height={44}
          className="h-full w-full scale-[1.08] object-contain"
        />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight text-[1.35rem] ${word}`}
        >
          Nav<span className={accent}>Global</span>
        </span>
        {showTagline && (
          <span
            className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.34em] ${sub}`}
          >
            Project Advisory
          </span>
        )}
      </span>
    </span>
  );
}
