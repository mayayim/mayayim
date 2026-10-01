export default function HoverCard({ hover, pos }) {
  if (!hover) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 max-w-[220px] rounded-lg bg-white px-3 py-2 shadow-lg"
      style={{ left: pos.x + 16, top: pos.y + 16 }}
    >
      <p className="font-body text-sm font-semibold text-periwinkle">{hover.title}</p>
      {hover.subtitle && (
        <p className="mt-0.5 font-body text-xs text-stone">{hover.subtitle}</p>
      )}
    </div>
  );
}
