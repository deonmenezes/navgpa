import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Icon = {
  globe: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  ),
  chart: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 19h16" />
      <rect x="5" y="11" width="3.2" height="6" rx="0.6" />
      <rect x="10.4" y="7" width="3.2" height="10" rx="0.6" />
      <rect x="15.8" y="4" width="3.2" height="13" rx="0.6" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3l7 3v5c0 4.6-3 7.7-7 9-4-1.3-7-4.4-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  users: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 7.2a3 3 0 0 1 0 5.6M16.5 14.5a5.5 5.5 0 0 1 4 4.5" />
    </svg>
  ),
  ruler: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="8" width="18" height="8" rx="1.4" transform="rotate(0 12 12)" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </svg>
  ),
  calculator: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8.5 12h0M12 12h0M15.5 12h0M8.5 16h0M12 16h0M15.5 16h0" />
    </svg>
  ),
  cube: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 2.8l8 4.6v9.2L12 21.2 4 16.6V7.4l8-4.6z" />
      <path d="M4 7.4l8 4.6 8-4.6M12 12v9.2" />
    </svg>
  ),
  doc: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M14 3v4h4M9 12h6M9 16h6M9 8h2" />
    </svg>
  ),
  scroll: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M7 4h10v13a3 3 0 0 1-3 3H7" />
      <path d="M7 20a3 3 0 0 1-3-3V6M10 9h4M10 13h4" />
    </svg>
  ),
  trend: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 16l4.5-4.5 3 3L20 6" />
      <path d="M15 6h5v5" />
    </svg>
  ),
  scale: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3v18M7 21h10M5 7l14-2" />
      <path d="M5 7l-2.4 5a2.6 2.6 0 0 0 4.8 0L5 7zM19 5l-2.4 5a2.6 2.6 0 0 0 4.8 0L19 5z" />
    </svg>
  ),
  compass: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.4 8.6l-2 4.8-4.8 2 2-4.8 4.8-2z" />
    </svg>
  ),
  arrow: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M6 3h3l1.5 4.5L8 9a12 12 0 0 0 7 7l1.5-2.5L21 15v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 5.2 2 2 0 0 1 6 3z" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </svg>
  ),
  pin: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 21c4-4.5 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 3 6.5 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
} as const;

export type IconName = keyof typeof Icon;
