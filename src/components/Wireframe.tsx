/**
 * Decorative isometric BIM wireframe — evokes the digital, model-driven
 * approach shown in the NavGPA brand collateral.
 */
export function Wireframe({ className = "" }: { className?: string }) {
  const nodes: [number, number][] = [
    [300, 70], [470, 160], [470, 360], [300, 450], [130, 360], [130, 160],
    [300, 250], [300, 70], [470, 160], [300, 250], [130, 160],
  ];

  return (
    <svg
      viewBox="0 0 600 540"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="wf-line" x1="0" y1="0" x2="600" y2="540">
          <stop stopColor="#6f8fd8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#c4a24c" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="wf-node" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#d9bc73" />
          <stop offset="1" stopColor="#d9bc73" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke="url(#wf-line)" strokeWidth="1.25">
        {/* Outer prism */}
        <path d="M300 70 L470 160 L470 360 L300 450 L130 360 L130 160 Z" opacity="0.85" />
        {/* Top cap */}
        <path d="M130 160 L300 70 L470 160 L300 250 Z" opacity="0.7" />
        {/* Verticals */}
        <path d="M300 250 L300 450 M130 160 L130 360 M470 160 L470 360" opacity="0.55" />
        <path d="M300 250 L130 160 M300 250 L470 160" opacity="0.5" />

        {/* Inner structural grid */}
        <path d="M215 115 L385 205 L385 405 L215 315 Z" opacity="0.35" />
        <path d="M215 215 L385 305 M215 115 L215 315 M385 205 L385 405" opacity="0.3" />

        {/* Floor plates */}
        <path d="M130 230 L300 320 L470 230" opacity="0.32" />
        <path d="M130 300 L300 390 L470 300" opacity="0.28" />
      </g>

      {/* Glow nodes */}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="16" fill="url(#wf-node)" opacity="0.45" />
          <circle cx={x} cy={y} r="3.4" fill="#e7cd86" />
        </g>
      ))}

      {/* Data ping */}
      <circle cx="300" cy="250" r="6" fill="#E8631F" />
      <circle cx="300" cy="250" r="6" fill="none" stroke="#E8631F" strokeWidth="1.2" opacity="0.6">
        <animate attributeName="r" values="6;26;6" dur="3.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="3.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
