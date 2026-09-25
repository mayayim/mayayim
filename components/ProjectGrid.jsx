import Link from "next/link";

export const PROJECTS = [
  {
    href: "/projects/impulse",
    title: "impulse",
    cover: "/covers/impulse.svg",
    objectPosition: "object-bottom",
  },
  {
    href: "/projects/apple-advanced-manufacturing-center",
    title: "Apple Advanced Manufacturing Center",
    cover: "/covers/apple-advanced-manufacturing-center.svg",
  },
  { href: "/projects/2", title: "2", cover: "/covers/2.svg" },
  { href: "/projects/junti", title: "JUNTÍ", cover: "/covers/junti.svg" },
  { href: "/projects/camp-swamp", title: "CAMP SWAMP", cover: "/covers/camp-swamp.svg" },
  {
    href: "/projects/jareds-heart-of-success",
    title: "JARED'S HEART OF SUCCESS",
    cover: "/covers/jareds-heart-of-success.svg",
  },
];

export const GT_PROJECTS = [
  {
    href: "/projects/georgia-tech#thinking-of-you",
    title: "the thinking of you project",
    cover: "/covers/thinking-of-you.svg",
  },
  { href: "/projects/georgia-tech#sift", title: "sift", cover: "/covers/sift.svg" },
  { href: "/projects/georgia-tech#playback", title: "PLAYBACK", cover: "/covers/playback.svg" },
  {
    href: "/projects/georgia-tech#the-paperspace",
    title: "the PaperSpace",
    cover: "/covers/paperspace.svg",
  },
];

export default function ProjectGrid({ projects = PROJECTS, className = "" }) {
  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${className}`}>
      {projects.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          className="group relative aspect-[16/7] overflow-hidden rounded-sm transition-opacity hover:opacity-90"
        >
          <img
            src={p.cover}
            alt={p.title}
            className={`h-full w-full object-cover ${p.objectPosition ?? ""}`}
          />
        </Link>
      ))}
    </div>
  );
}
