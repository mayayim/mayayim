export default function ExperienceList({ items }) {
  return (
    <ul className="space-y-3 text-base md:space-y-1">
      {items.map((e) => (
        <li key={e.role}>
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
          <span className="block text-stone/60 md:ml-6 md:inline">
            {e.description}
          </span>
        </li>
      ))}
    </ul>
  );
}
