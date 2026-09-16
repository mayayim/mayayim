import Link from "next/link";
import Footer from "@/components/Footer";
import ExperienceList from "@/components/ExperienceList";

const EXPERIENCE = [
  {
    role: "apple",
    year: "2026",
    href: "https://www.apple.com",
    description:
      "design management, content strategy, + communications for supply chain manufacturing",
  },
  {
    role: "jared's heart of success",
    year: "2025",
    href: "https://www.jaredsheartofsuccess.org",
    description:
      "rebranding + digital media asset design for community outreach programs, fundraisers, and events",
  },
  {
    role: "camp swamp",
    year: "2024",
    href: "https://campswamp.com",
    description: "project management for web, branding, + social media redesign",
  },
];

const SWATCHES = [
  { color: "#161616", label: "impulse", href: "/projects/impulse", logo: "/logos/impulse.svg" },
  {
    color: "#5b6ee8",
    label: "apple advanced manufacturing center",
    href: "/projects/apple-advanced-manufacturing-center",
    logo: "/logos/apple-advanced-manufacturing-center.svg",
  },
  {
    color: "#e8590c",
    label: "jared's heart of success",
    href: "/projects/jareds-heart-of-success",
    logo: "/logos/jareds-heart-of-success.svg",
  },
  {
    color: "#c2984f",
    label: "georgia tech projects",
    href: "/projects/georgia-tech",
    logo: "/logos/georgia-tech.svg",
  },
  { color: "#0f6156", label: "junti", href: "/projects/junti", logo: "/logos/junti.svg" },
  { color: "#5a6c94", label: "camp swamp", href: "/projects/camp-swamp", logo: "/logos/camp-swamp.svg" },
  { color: "#c4525a", label: "2", href: "/projects/2", logo: "/logos/2.svg" },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col px-6 pt-20 sm:px-12 sm:pt-28">
      <div className="flex flex-1 flex-col items-center justify-center gap-16">
        <h1 className="mx-auto max-w-3xl text-center font-body text-[16pt] leading-snug text-stone">
          maya yim is an{" "}
          <span className="text-periwinkle">
            interdisciplinary designer + product manager
          </span>{" "}
          connecting people through designing for{" "}
          <span className="font-semibold text-stone">
            learning, development, and education.
          </span>
        </h1>

        <ul className="flex flex-wrap justify-center gap-10 sm:gap-16">
          {SWATCHES.map((s) => (
            <li
              key={s.label}
              className="group relative z-0 h-3.5 w-3.5 hover:z-10"
            >
              <Link href={s.href} className="absolute -inset-4" title={s.label}>
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
        </ul>
      </div>

      <div className="mt-16 font-body text-stone">
        <p className="text-sm">my experience</p>
        <div className="mt-4">
          <ExperienceList items={EXPERIENCE} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
