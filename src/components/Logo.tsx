type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

/**
 * NAV Global Project Advisory wordmark.
 * `light` = for dark backgrounds (white text), `dark` = for light backgrounds.
 */
export function Logo({
  variant = "light",
  className = "",
  showTagline = true,
}: LogoProps) {
  const word = variant === "light" ? "text-white" : "text-navy-900";
  const sub = variant === "light" ? "text-white/65" : "text-ink-500";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem */}
      <span aria-hidden className="shrink-0">
        <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="9" fill="url(#navg-grad)" />
          <rect
            x="0.6"
            y="0.6"
            width="38.8"
            height="38.8"
            rx="8.4"
            stroke="#C4A24C"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          />
          {/* skyline bars */}
          <rect x="9" y="20" width="4" height="12" rx="1" fill="#ffffff" fillOpacity="0.85" />
          <rect x="15" y="15" width="4" height="17" rx="1" fill="#ffffff" fillOpacity="0.92" />
          <rect x="21" y="22" width="4" height="10" rx="1" fill="#C4A24C" />
          {/* peak on tallest */}
          <path d="M17 15l-2.4 3.2h4.8L17 15z" fill="#E8631F" />
          <rect x="27" y="18" width="4" height="14" rx="1" fill="#ffffff" fillOpacity="0.7" />
          <defs>
            <linearGradient id="navg-grad" x1="0" y1="0" x2="40" y2="40">
              <stop stopColor="#17285c" />
              <stop offset="1" stopColor="#0b1430" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight text-[1.35rem] ${word}`}
        >
          NAV<span className="text-gold-500"> GLOBAL</span>
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
