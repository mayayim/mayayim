import Link from "next/link";
import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";

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

      <ProjectGrid className="mt-16 sm:mt-20" />

      <Footer />
    </div>
  );
}
