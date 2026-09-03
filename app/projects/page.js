import Placeholder from "@/components/Placeholder";

const PROJECTS = [
  "bilingual bedtime deck",
  "product ops website overhaul",
  "apple lifeguard",
  "davidai brand analysis",
];

export default function ProjectsPage() {
  return (
    <div className="px-6 pb-24 pt-16 sm:px-12 sm:pt-24">
      <p className="max-w-2xl font-body text-2xl leading-snug text-stone sm:text-3xl">
        exploring the intersection of technology, design, and culture to
        connect people to one another and themselves
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <Placeholder key={p} className="aspect-[4/3]" label={p} />
        ))}
      </div>
    </div>
  );
}
