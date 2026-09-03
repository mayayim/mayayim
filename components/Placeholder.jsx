export default function Placeholder({ className = "", label }) {
  return (
    <div
      className={`bg-haze/70 flex items-end p-3 ${className}`}
      role="img"
      aria-label={label || "project image placeholder"}
    >
      {label && (
        <span className="font-body text-xs text-stone/70">{label}</span>
      )}
    </div>
  );
}
