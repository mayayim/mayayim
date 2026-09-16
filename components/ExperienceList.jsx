"use client";

import { useState } from "react";

export default function ExperienceList({ items }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <ul className="space-y-1 text-[16pt]">
        {items.map((e) => (
          <li
            key={e.role}
            onMouseEnter={() => setHovered(e.role)}
            onMouseLeave={() => setHovered(null)}
          >
            {e.href ? (
              <a
                href={e.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-periwinkle transition-colors"
              >
                {e.role}
              </a>
            ) : (
              e.role
            )}{" "}
            <span className="text-stone/60">[{e.year}]</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 min-h-10 max-w-md font-body text-sm text-stone/60">
        {items.find((e) => e.role === hovered)?.description ?? ""}
      </p>
    </div>
  );
}
