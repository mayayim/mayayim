import Link from "next/link";
import Footer from "@/components/Footer";

export default function ImpulsePage() {
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
            src="/covers/impulse.svg"
            alt="impulse"
            className="aspect-[16/7] w-full object-cover object-bottom"
          />

          <h1 className="mt-8 font-body text-[16pt] font-semibold text-ink">
            impulse @ Georgia Tech
          </h1>

          <p className="mt-4 font-body text-sm uppercase tracking-wide text-stone">
            COMMUNITY + SYSTEMS DESIGN &bull; CLUB FOUNDING &bull; 2026
          </p>
          <p className="mt-1 font-body text-sm text-periwinkle">
            Co-Founder, 6 Months, Program Management, Systems Design,
            Stakeholder Communication
          </p>

          <p className="mt-4 font-body text-sm text-stone">
            <span className="text-stone">COLLABORATORS</span>{" "}
            <span className="text-periwinkle">
              Patrick Guo (Co-Founder), Rebecca Kim (Creative Director), Addie
              Hayes (Ops), Stephen Tanner (Finance), Tiffany Doan (Marketing),
              Noa Young (Physical Media), Preston Jhun (External Relations),
              Ryan Yin (Digital Media)
            </span>
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-4 font-body text-sm leading-relaxed text-stone">
              <p>
                impulse @ Georgia Tech is a collaborative, project-based
                community of digital designers at Georgia Tech built for
                students who want to develop their visual craft.
              </p>
              <p>
                Inspired by communities like Design Meetup and DesignCo @
                UCSD, impulse @ Georgia Tech was created to help bridge the
                gap between Georgia Tech students, what they learn in
                university, and the design industry.
              </p>
              <p>
                We launched this club September 2026, with an initial
                interest of{" "}
                <span className="font-semibold">
                  80+ members for our first meetup.
                </span>
              </p>
            </div>
            <video
              src="/videos/impulse-intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-sm bg-black object-contain"
            />
          </div>

          <p className="mt-12 font-body text-sm leading-relaxed text-stone">
            Georgia Tech is a top 10 public university committed to
            developing exceptional leaders who advance technology and improve
            the human condition. As designers at Georgia Tech, we have a
            unique opportunity to take part in this by becoming leaders who
            sit at the intersection of art, technology, engineering,
            psychology, and communications.
          </p>

          <img
            src="/impulse/georgia-tech-section.svg"
            alt="impulse @ Georgia Tech"
            className="mt-8 w-full rounded-sm object-cover"
          />

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <img
              src="/impulse/get-started.svg"
              alt="get started / get inspired / get exposure"
              className="w-full rounded-sm object-cover"
            />
            <img
              src="/impulse/mission-values.svg"
              alt="what is impulse: mission statement + values"
              className="w-full rounded-sm object-cover"
            />
          </div>

          <p className="mt-12 font-body text-sm leading-relaxed text-stone">
            Since February 2026, we&rsquo;ve been working to build this club
            from the ground up. From RSO trainings, brand design, marketing
            strategy, program planning, speaker recruitment, exec
            recruitment, and much more, we&rsquo;re excited to continue
            shaping impulse into something we wish we always had.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            Over the next couple of months, we will be working on shaping our
            events, projects, speaker series, and overall presence as the
            bridge between Georgia Tech and the design industry.
          </p>

          <div className="mt-6 flex gap-6 font-body text-sm text-periwinkle">
            <a
              href="https://www.instagram.com/impulsegatech/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              instagram ↗
            </a>
            <a
              href="https://linkedin.com/company/impulsegt"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              linkedin ↗
            </a>
            <a
              href="https://gatech.campuslabs.com/engage/organization/impulse"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              engage ↗
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
