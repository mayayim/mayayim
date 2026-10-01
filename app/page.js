import Footer from "@/components/Footer";
import ExperienceList from "@/components/ExperienceList";
import ProjectGrid, { GT_PROJECTS } from "@/components/ProjectGrid";
import ProjectSwatches from "@/components/ProjectSwatches";

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
  {
    color: "#161616",
    label: "impulse",
    href: "/projects/impulse",
    logo: "/logos/impulse.svg",
    hover: {
      title: "impulse",
      subtitle: "founding an organization for early design career education | launched 2026",
    },
  },
  {
    color: "#5b6ee8",
    label: "apple advanced manufacturing center",
    href: "/projects/apple-advanced-manufacturing-center",
    logo: "/logos/apple-advanced-manufacturing-center.svg",
    hover: {
      title: "apple advanced manufacturing center",
      subtitle: "brand strategy for apple's manufacturing training center | shipped august 2026",
    },
  },
  {
    color: "#e8590c",
    label: "jared's heart of success",
    href: "/projects/jareds-heart-of-success",
    logo: "/logos/jareds-heart-of-success.svg",
    hover: {
      title: "jared's heart of success",
      subtitle: "creating better navigation with information architecture | shipped 2024",
    },
  },
  {
    color: "#c2984f",
    label: "georgia tech projects",
    href: "/projects/georgia-tech",
    logo: "/logos/georgia-tech.svg",
    hover: { title: "georgia tech projects" },
  },
  {
    color: "#0f6156",
    label: "junti",
    href: "/projects/junti",
    logo: "/logos/junti.svg",
    hover: {
      title: "junti",
      subtitle: "helping students discover + share their culture | case study 2025",
    },
  },
  {
    color: "#5a6c94",
    label: "camp swamp",
    href: "/projects/camp-swamp",
    logo: "/logos/camp-swamp.svg",
    hover: {
      title: "camp swamp",
      subtitle: "brand redesign for better engagement + reach | shipped 2024",
    },
  },
  {
    color: "#c4525a",
    label: "2",
    href: "/projects/2",
    logo: "/logos/2.svg",
    hover: {
      title: "2",
      subtitle:
        "strengthening language development and literacy for elementary school students | passion project 2026",
    },
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col px-6 pt-20 sm:px-12 sm:pt-28">
      <div className="flex flex-1 flex-col items-center justify-center gap-16">
        <div>
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

          <p className="mt-3 text-center font-body text-xs text-stone/60">
            site in progress
          </p>
        </div>

        <ProjectSwatches items={SWATCHES} />
      </div>

      <div className="mt-16 font-body text-stone">
        <p className="text-sm">my projects</p>
        <ProjectGrid className="mt-4" />
      </div>

      <div className="mt-16 font-body text-stone">
        <p className="text-sm">georgia tech projects</p>
        <ProjectGrid projects={GT_PROJECTS} className="mt-4" />
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
