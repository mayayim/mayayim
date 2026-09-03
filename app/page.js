import Placeholder from "@/components/Placeholder";

const SWATCHES = [
  { color: "#0f6156", label: "bilingual bedtime deck" },
  { color: "#161616", label: "product ops overhaul" },
  { color: "#5b6ee8", label: "apple lifeguard" },
  { color: "#e8590c", label: "davidai brand analysis" },
  { color: "#5a6c94", label: "hoka x hello82" },
  { color: "#c4525a", label: "critical reflection" },
];

export default function HomePage() {
  return (
    <div className="px-6 pb-24 pt-16 sm:px-12 sm:pt-24">
      <h1 className="max-w-2xl font-body text-2xl leading-snug text-stone sm:text-3xl">
        maya yim is an{" "}
        <span className="text-periwinkle">
          interdisciplinary designer + product manager
        </span>{" "}
        connecting people to one another and themselves through designing
        for <span className="font-semibold text-ink">learning, development, and education.</span>
      </h1>

      <ul className="mt-24 flex flex-wrap gap-10 sm:mt-32 sm:gap-16">
        {SWATCHES.map((s) => (
          <li key={s.label} className="group">
            <span
              className="block h-3.5 w-3.5 rounded-sm transition-transform group-hover:scale-125"
              style={{ backgroundColor: s.color }}
              aria-label={s.label}
              title={s.label}
            />
          </li>
        ))}
      </ul>

      <div className="mt-24 grid grid-cols-1 gap-6 sm:mt-32 sm:grid-cols-2">
        <Placeholder className="aspect-[4/3]" />
        <Placeholder className="aspect-[4/3]" />
      </div>
    </div>
  );
}
