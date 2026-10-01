"use client";

import { useState } from "react";
import Link from "next/link";
import HoverCard from "@/components/HoverCard";

export const PROJECTS = [
  {
    href: "/projects/impulse",
    title: "impulse",
    cover: "/covers/impulse.svg",
    objectPosition: "object-bottom",
    hover: {
      title: "impulse",
      subtitle: "founding an organization for early design career education | launched 2026",
    },
  },
  {
    href: "/projects/apple-advanced-manufacturing-center",
    title: "Apple Advanced Manufacturing Center",
    cover: "/covers/apple-advanced-manufacturing-center.svg",
    hover: {
      title: "apple advanced manufacturing center",
      subtitle: "brand strategy for apple's manufacturing training center | shipped august 2026",
    },
  },
  {
    href: "/projects/2",
    title: "2",
    cover: "/covers/2.svg",
    hover: {
      title: "2",
      subtitle:
        "strengthening language development and literacy for elementary school students | passion project 2026",
    },
  },
  {
    href: "/projects/junti",
    title: "JUNTÍ",
    cover: "/covers/junti.svg",
    hover: {
      title: "junti",
      subtitle: "helping students discover + share their culture | case study 2025",
    },
  },
  {
    href: "/projects/camp-swamp",
    title: "CAMP SWAMP",
    cover: "/covers/camp-swamp.svg",
    hover: {
      title: "camp swamp",
      subtitle: "brand redesign for better engagement + reach | shipped 2024",
    },
  },
  {
    href: "/projects/jareds-heart-of-success",
    title: "JARED'S HEART OF SUCCESS",
    cover: "/covers/jareds-heart-of-success.svg",
    hover: {
      title: "jared's heart of success",
      subtitle: "creating better navigation with information architecture | shipped 2024",
    },
  },
];

export const GT_PROJECTS = [
  {
    href: "/projects/georgia-tech#thinking-of-you",
    title: "the thinking of you project",
    cover: "/covers/thinking-of-you.svg",
    hover: {
      title: "the thinking of you project",
      subtitle:
        "exploring emotional expression and digital sharing with figma make | contra figma make-a-thon 2025",
    },
  },
  {
    href: "/projects/georgia-tech#sift",
    title: "sift",
    cover: "/covers/sift.svg",
    hover: {
      title: "sift",
      subtitle: "a menu filtering app for diners with dietary restrictions | concept 2026",
    },
  },
  {
    href: "/projects/georgia-tech#playback",
    title: "PLAYBACK",
    cover: "/covers/playback.svg",
    hover: {
      title: "PLAYBACK",
      subtitle: "tactile pushback trends in consumer behavior | concept 2026",
    },
  },
  {
    href: "/projects/georgia-tech#the-paperspace",
    title: "the PaperSpace",
    cover: "/covers/paperspace.svg",
    hover: {
      title: "the PaperSpace",
      subtitle:
        "an interactive spatial lab that examines paper as a viable architectural medium | concept 2025",
    },
  },
];

export default function ProjectGrid({ projects = PROJECTS, className = "" }) {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const active = hovered != null ? projects[hovered] : null;

  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${className}`}>
      {projects.map((p, i) => (
        <Link
          key={p.href}
          href={p.href}
          className="relative aspect-[16/7] overflow-hidden rounded-sm transition-opacity hover:opacity-95"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        >
          <img
            src={p.cover}
            alt={p.title}
            className={`h-full w-full object-cover ${p.objectPosition ?? ""}`}
          />
        </Link>
      ))}

      <HoverCard hover={active?.hover} pos={pos} />
    </div>
  );
}
