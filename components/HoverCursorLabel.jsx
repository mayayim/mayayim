"use client";

import { useState } from "react";

export default function HoverCursorLabel({ text, className, children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={(e) => {
        setHovered(true);
        setPos({ x: e.clientX, y: e.clientY });
      }}
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {hovered && (
        <span
          className="pointer-events-none fixed z-50 font-body text-sm text-ink"
          style={{ left: pos.x + 16, top: pos.y - 8 }}
        >
          {text}
        </span>
      )}
    </div>
  );
}
