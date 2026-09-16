"use client";

import { useState } from "react";

export default function HoverImageLink({
  href,
  image,
  alt = "",
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
        <img
          src={image}
          alt={alt}
          className="pointer-events-none fixed z-50 h-44 w-36 rounded-md object-cover shadow-xl"
          style={{
            left: pos.x + 20,
            top: pos.y - 90,
          }}
        />
      )}
    </Tag>
  );
}
