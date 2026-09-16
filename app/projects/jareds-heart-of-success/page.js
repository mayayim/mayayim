import Link from "next/link";
import Footer from "@/components/Footer";
import HoverCursorLabel from "@/components/HoverCursorLabel";

export default function JaredsHeartOfSuccessPage() {
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
            src="/covers/jareds-heart-of-success.svg"
            alt="Jared's Heart of Success"
            className="aspect-[16/7] w-full object-cover"
          />

          <h1 className="mt-8 font-body text-[16pt] font-semibold text-ink">
            Jared&rsquo;s Heart of Success
          </h1>

          <p className="mt-4 font-body text-sm uppercase tracking-wide text-stone">
            BRAND DESIGN &bull; PRO BONO PROJECT &bull; 2024
          </p>
          <p className="mt-1 font-body text-sm text-[#e8590c]">
            Lead Brand Designer, 6 Weeks, Brand Design, Content Management,
            Stakeholder Communication
          </p>

          <p className="mt-4 font-body text-sm text-stone">
            <span className="text-stone">COLLABORATORS</span>{" "}
            <span className="text-[#e8590c]">
              Emmaly Nguyen, Jocelyn Le, Christie Lin
            </span>
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-4 font-body text-sm leading-relaxed text-stone">
              <p>
                Jared&rsquo;s Heart of Success is a non-profit organization
                dedicated to community violence intervention, youth
                empowerment, and trauma-informed support.
              </p>
              <p>
                I led the design of the brand identity and guidelines to
                improve readability and digital communication between the
                organization and their stakeholders.
              </p>
              <p>
                I passed off the brand guidelines to a team of 3 other
                designers to audit, design, and reconstruct the website.
                These efforts have contributed to helping the organization{" "}
                <span className="font-semibold">
                  serve 2.7K+ families and survivors
                </span>{" "}
                and provide{" "}
                <span className="font-semibold">
                  9K+ survivor and support legacy scholarships
                </span>
                .
              </p>
            </div>
            <img
              src="/jareds-heart-of-success/logo-versions.jpg"
              alt="Jared's Heart of Success logo versions"
              className="h-full w-full rounded-sm object-cover"
            />
          </div>

          <HoverCursorLabel text="[previous]" className="group relative mt-8 w-full">
            <img
              src="/jareds-heart-of-success/nav-current.svg"
              alt="Jared's Heart of Success website navigation"
              className="w-full rounded-sm opacity-100 transition-opacity duration-200 group-hover:opacity-0"
            />
            <img
              src="/jareds-heart-of-success/nav-previous.svg"
              alt="previous version of the website navigation"
              className="absolute inset-0 h-full w-full rounded-sm object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
          </HoverCursorLabel>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
            <img
              src="/jareds-heart-of-success/get-in-touch.svg"
              alt="get in touch"
              className="w-full rounded-sm sm:col-span-2"
            />
            <HoverCursorLabel
              text="[previous]"
              className="group relative sm:col-span-2"
            >
              <img
                src="/jareds-heart-of-success/donate.svg"
                alt="donate"
                className="w-full rounded-sm opacity-100 transition-opacity duration-200 group-hover:opacity-0"
              />
              <img
                src="/jareds-heart-of-success/donate-previous.svg"
                alt="previous version of the donate page"
                className="absolute inset-0 h-full w-full rounded-sm object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </HoverCursorLabel>
            <img
              src="/jareds-heart-of-success/about-jared.jpg"
              alt="about Jared"
              className="w-full rounded-sm sm:col-span-2"
            />
            <div className="grid grid-cols-2 gap-4 sm:col-span-2">
              <img
                src="/jareds-heart-of-success/anniversary-1.jpg"
                alt="celebrating 9 years anniversary"
                className="aspect-square w-full rounded-sm object-cover"
              />
              <img
                src="/jareds-heart-of-success/anniversary-2.jpg"
                alt="celebrating 9 years anniversary"
                className="aspect-square w-full rounded-sm object-cover"
              />
              <img
                src="/jareds-heart-of-success/end-violence-1.jpg"
                alt="end gun violence"
                className="aspect-square w-full rounded-sm object-cover"
              />
              <img
                src="/jareds-heart-of-success/end-violence-2.jpg"
                alt="end gun violence"
                className="aspect-square w-full rounded-sm object-cover"
              />
            </div>
          </div>

          <p className="mt-12 font-body text-sm leading-relaxed text-stone">
            Organizing content with a clear structure helps audiences quickly
            understand and trust a brand. This project gave me the
            opportunity to practice translating verbal branding into visual
            communication by synthesizing information across platforms and
            print media to balance an organization&rsquo;s history with
            updates that can strengthen its future presence.
          </p>

          <a
            href="https://www.jaredsheartofsuccess.org"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block font-body text-sm text-[#e8590c] hover:underline"
          >
            Jared&rsquo;s Heart of Success ↗
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
