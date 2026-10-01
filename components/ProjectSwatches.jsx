"use client";

import { useState } from "react";
import Link from "next/link";
import HoverCard from "@/components/HoverCard";

export default function ProjectSwatches({ items }) {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const active = hovered != null ? items[hovered] : null;

  return (
    <ul className="flex flex-wrap justify-center gap-10 sm:gap-16">
      {items.map((s, i) => (
        <li key={s.label} className="group relative z-0 h-3.5 w-3.5 hover:z-10">
          <Link
            href={s.href}
            className="absolute -inset-4"
            title={s.label}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
          >
            <span className="sr-only">{s.label}</span>
          </Link>
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-sm transition-[width,height] duration-300 ease-out group-hover:h-[70px] group-hover:w-[70px]"
            style={{ backgroundColor: s.color }}
            aria-hidden="true"
          />
          {s.logo && (
            <img
              src={s.logo}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-3.5 max-w-none -translate-x-1/2 -translate-y-1/2 rounded-sm object-cover opacity-0 shadow-lg transition-[width,height,opacity] duration-300 ease-out group-hover:h-[70px] group-hover:w-[70px] group-hover:opacity-100"
            />
          )}
        </li>
      ))}

      <HoverCard hover={active?.hover} pos={pos} />
    </ul>
  );
}
