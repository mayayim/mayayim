import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-signature text-[2.75rem] leading-[0.75] text-ink inline-block -rotate-2 select-none"
      aria-label="maya yim, home"
    >
      <span className="block">maya</span>
      <span className="block pl-8 -mt-2">yim</span>
    </Link>
  );
}
