"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // degrees
};

/**
 * Mouse-tracking 3D tilt. Follows the pointer with a subtle rotateX/Y,
 * springs back on leave. Disabled for touch devices and users who prefer
 * reduced motion.
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 9,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const reset = () => {
    const node = ref.current;
    if (node) node.style.transform = "";
  };

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(
      px * maxTilt
    ).toFixed(2)}deg) translateZ(6px)`;
  };

  return (
    <div className="tilt-wrap h-full">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className={`tilt-card h-full ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
