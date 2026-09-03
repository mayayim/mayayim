"use client";

import { useState } from "react";
import Placeholder from "@/components/Placeholder";

const CATEGORIES = [
  "photography",
  "videography",
  "graphic design",
  "branding",
  "event planning",
];

export default function PlaygroundPage() {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <div className="px-6 pb-24 pt-16 sm:px-12 sm:pt-24">
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="max-w-xs shrink-0 font-body text-2xl leading-relaxed text-stone sm:text-3xl">
          <p className="mb-1">exercising my creative boundaries through</p>
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c}>
                <button
                  onClick={() => setActive(c)}
                  className={
                    c === active
                      ? "text-periwinkle"
                      : "text-stone hover:text-ink transition-colors"
                  }
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 space-y-6">
          <Placeholder className="aspect-[16/10]" label={active} />
          <Placeholder className="aspect-[16/10]" />
        </div>
      </div>
    </div>
  );
}
