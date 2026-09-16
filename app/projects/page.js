import Link from "next/link";
import Footer from "@/components/Footer";

const PROJECTS = [
  {
    slug: "impulse",
    title: "impulse",
    cover: "/covers/impulse.svg",
    objectPosition: "object-bottom",
  },
  {
    slug: "apple-advanced-manufacturing-center",
    title: "Apple Advanced Manufacturing Center",
    cover: "/covers/apple-advanced-manufacturing-center.svg",
  },
  { slug: "2", title: "2", cover: "/covers/2.svg" },
  { slug: "junti", title: "JUNTÍ", cover: "/covers/junti.svg" },
  { slug: "camp-swamp", title: "CAMP SWAMP", cover: "/covers/camp-swamp.svg" },
  {
    slug: "jareds-heart-of-success",
    title: "JARED'S HEART OF SUCCESS",
    cover: "/covers/jareds-heart-of-success.svg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col px-6 pt-16 sm:px-12 sm:pt-24">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <p className="max-w-2xl font-body text-[16pt] leading-snug text-stone">
          exploring the intersection of technology, design, and culture to
          connect people to one another and themselves
        </p>
        <Link
          href="/projects/georgia-tech"
          className="whitespace-nowrap font-body text-sm text-stone hover:text-periwinkle transition-colors"
        >
          [see my projects @ Georgia Tech here]
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
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

      <Footer />
    </div>
  );
}
