"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const LINKS = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="flex items-start justify-between px-6 pt-10 sm:px-12 sm:pt-14">
      <Logo />
      <nav className="flex gap-6 pt-4 text-[0.95rem] text-ink sm:gap-10 sm:pt-5">
        {LINKS.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={active ? "underline underline-offset-4" : "hover:opacity-60 transition-opacity"}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
