"use client";

import { useState } from "react";

export default function HoverVideoLink({
  href,
  embedSrc,
  className,
  children,
  ...props
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const Tag = href ? "a" : "span";

  return (
    <Tag
      href={href}
      className={className}
      onMouseEnter={(e) => {
        setHovered(true);
        setPos({ x: e.clientX, y: e.clientY });
      }}
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
      {hovered && (
        <span
          className="fixed z-50 block h-[480px] w-[326px] overflow-hidden rounded-md shadow-xl"
          style={{
            left: pos.x + 20,
            top: pos.y - 240,
          }}
        >
          <iframe
            src={embedSrc}
            title="instagram video"
            className="h-full w-full border-0"
            allow="autoplay; encrypted-media"
            scrolling="no"
          />
        </span>
      )}
    </Tag>
  );
}
