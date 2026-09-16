import Link from "next/link";
import Footer from "@/components/Footer";
import Placeholder from "@/components/Placeholder";

export default function AMCPage() {
  return (
    <div id="top" className="flex flex-1 flex-col px-6 pt-16 sm:px-12 sm:pt-24">
      <div className="flex gap-10">
        <Link
          href="/projects"
          className="w-32 shrink-0 font-body text-sm text-stone hover:text-periwinkle transition-colors"
        >
          ← back to projects
        </Link>

        <div className="mx-auto max-w-4xl flex-1">
          <img
            src="/covers/apple-advanced-manufacturing-center.svg"
            alt="Apple Advanced Manufacturing Center"
            className="aspect-[16/7] w-full object-cover"
          />

          <h1 className="mt-8 font-body text-[16pt] font-semibold text-ink">
            Apple Advanced Manufacturing Center
          </h1>

          <p className="mt-4 font-body text-sm uppercase tracking-wide text-stone">
            BRAND STRATEGY + DESIGN &bull; INTERNSHIP &bull; 2026
          </p>
          <p className="mt-1 font-body text-sm text-[#e8590c]">
            Brand Designer, 4 Months, Brand Management, Systems Design,
            Stakeholder Communication
          </p>

          <p className="mt-4 font-body text-sm text-stone">
            <span className="text-stone">COLLABORATORS</span>{" "}
            <span className="text-[#e8590c]">Ahana Guin, Owen Martin</span>
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-4 font-body text-sm leading-relaxed text-stone">
              <p>
                The Apple Advanced Manufacturing Center is a new training
                space on Apple&rsquo;s Houston manufacturing campus that
                provides free, hands-on training on the same methodologies,
                processes, and tools Apple uses, giving participants the
                skills needed to build the kind of operations that strengthen
                American manufacturing and take the next step in their
                careers.
              </p>
              <p>
                I developed a brand strategy and guidelines surrounding the
                Apple Advanced Manufacturing Center and its ecosystem along
                with brand assets and copy{" "}
                <span className="font-semibold">
                  for the August 2026 launch.
                </span>
              </p>
              <p>
                The majority of this work is confidential and cannot be
                publicly shared. Please send me an email if you&rsquo;d like
                to talk and learn more!
              </p>
            </div>
            <div className="h-full">
              <img
                src="/covers/apple-advanced-manufacturing-center-hero.jpg"
                alt="Apple Advanced Manufacturing Center"
                className="h-full w-full rounded-sm object-cover object-bottom"
              />
              <p className="mt-1 font-body text-xs text-stone/60">
                Photo courtesy of Apple
              </p>
            </div>
          </div>

          <p className="mt-12 font-body text-sm font-semibold text-ink">
            BRAND ASSETS + PACKAGING
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            I designed social media posts, marketing media, and gift
            packaging for the initial launch of the Apple Advanced
            Manufacturing Center adapting graphics and type to fit
            Apple&rsquo;s brand standards and presence.
          </p>

          <p className="mt-12 font-body text-sm font-semibold text-ink">
            PRESS HIGHLIGHTS
          </p>
          <ul className="mt-2 space-y-1 font-body text-sm text-periwinkle">
            <li>
              <a
                href="https://www.apple.com/newsroom/2026/08/apple-opens-advanced-manufacturing-center-in-houston/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Apple Opens Advanced Manufacturing Center in Houston ↗
              </a>
            </li>
            <li>
              <a
                href="https://events.apple.com/ms/_6_7V32S3XFGg-IS7qTcT9L_gkcTIkZ8KI9xXjnGMK68hTAsXvdataM3VoWvAF_q8ywhJWcL8BDKjRvAIwxDTkgSioId26-6Ck0f-WuA_HaIcYKUNG8R5SGJ3ehLTo14sL7jAfG5Z0nbEoT0bw/overview?a=1&Locale=en_US&l=e"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Apple Events: Apple Advanced Manufacturing Center ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
