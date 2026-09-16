import Link from "next/link";
import Footer from "@/components/Footer";

export default function CampSwampPage() {
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
            src="/covers/camp-swamp.svg"
            alt="Camp Swamp"
            className="aspect-[16/7] w-full object-cover"
          />

          <h1 className="mt-8 font-body text-[16pt] font-semibold text-ink">
            Camp Swamp
          </h1>

          <p className="mt-4 font-body text-sm uppercase tracking-wide text-stone">
            BRAND DESIGN + CONTENT STRATEGY MANAGEMENT &bull; INTERNSHIP
            &bull; 2024
          </p>
          <p className="mt-1 font-body text-sm text-[#3a5a8c]">
            Lead Brand Designer + Media Relations Manager, 7 Weeks, Brand
            Design, Project Management, Design Communication
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-4 font-body text-sm leading-relaxed text-stone">
              <p>
                Camp Swamp is a non-profit organization that provides camp
                and retreat services in Georgia for kids ages 9-18. The
                organization runs 7 weeks of overnight camp during the
                summer and rents out their facilities during the year.
              </p>
              <p>
                I redesigned the brand&rsquo;s visual identity, created brand
                guidelines, produced multimedia content and social
                campaigns, created website mockups, and{" "}
                <span className="font-semibold">
                  managed a rotational team of 5
                </span>{" "}
                coordinating daily responsibilities including photography,
                videography, social media, documenting, and content creation
                for 7 weeks.
              </p>
              <p>
                This redesign led to a{" "}
                <span className="font-semibold">
                  43% increase in online website and social media
                  engagement.
                </span>{" "}
                Short form videos collectively racked in a total of{" "}
                <span className="font-semibold">119.5K views.</span> Over the
                course of 7 weeks, I captured{" "}
                <span className="font-semibold">22.4K+ photos</span> and{" "}
                <span className="font-semibold">2.8K+ videos</span> with my
                team to document each week of camp.
              </p>
            </div>
            <img
              src="/camp-swamp/intro.jpg"
              alt="Camp Swamp"
              className="h-full w-full rounded-sm object-cover"
            />
          </div>

          <p className="mt-12 font-body text-sm font-semibold text-ink">
            BRAND DESIGN + STRATEGY
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            I conducted 4 interviews and a competitor analysis to narrow down
            the purpose, target audience, mission, and goals of what Camp
            Swamp wanted to represent. I built a color, typography, and
            graphic system to reflect this established brand identity.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            I chose typefaces that felt playful yet approachable, a color
            palette that drew inspiration from the earthy tones of the
            campgrounds, and refreshed the logo by modernizing the original
            gecko and positioning it as a recognizable seal of the camp
            experience.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <img
                src="/camp-swamp/colors-1.svg"
                alt="Camp Swamp brand colors"
                className="w-full rounded-sm"
              />
              <img
                src="/camp-swamp/colors-2.svg"
                alt="Camp Swamp brand colors"
                className="w-full rounded-sm"
              />
            </div>
            <img
              src="/camp-swamp/welcome-home.svg"
              alt="Welcome Home. brand tagline card"
              className="w-full rounded-sm"
            />
            <img
              src="/camp-swamp/logo-versions.svg"
              alt="Camp Swamp logo versions"
              className="w-full rounded-sm"
            />
            <img
              src="/camp-swamp/audience-focus.svg"
              alt="Camp Swamp audience & main focus"
              className="w-full rounded-sm"
            />
          </div>

          <p className="mt-12 font-body text-sm font-semibold text-ink">
            WEBSITE MOCKUPS + WIREFRAMING
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            I redesigned the website to quickly guide parents to what they
            were looking for and changed the information architecture to
            build trust and make new families feel confident and connected.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src="/camp-swamp/website-new-1.svg"
              alt="Camp Swamp website mockup"
              className="w-full rounded-sm"
            />
            <img
              src="/camp-swamp/website-new-2.svg"
              alt="Camp Swamp website mockup"
              className="w-full rounded-sm"
            />
          </div>

          <p className="mt-12 font-body text-sm font-semibold text-ink">
            SOCIAL MEDIA ENGAGEMENT
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            I updated the colors, templates, and type to reflect the visual
            identity. As part of the social refresh, we introduced more
            short form videos and posted on YouTube more frequently to tell
            Camp Swamp&rsquo;s story in a more dynamic way.
          </p>
          <div className="mt-2 flex gap-6 font-body text-sm text-[#3a5a8c]">
            <a href="#" className="hover:underline">
              Instagram ↗
            </a>
            <a href="#" className="hover:underline">
              YouTube ↗
            </a>
          </div>

          <img
            src="/camp-swamp/social-hero.jpg"
            alt="Camp Swamp Instagram on a phone"
            className="mt-6 aspect-[16/7] w-full rounded-sm object-cover"
          />

          <p className="mt-12 font-body text-sm font-semibold text-ink">
            PHOTOGRAPHY + VIDEOGRAPHY
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            Over the course of 7 weeks, I captured{" "}
            <span className="font-semibold">22.4K+ photos</span> with my
            team, filmed <span className="font-semibold">2.8K+ video clips</span>,
            and turned them into a total of{" "}
            <span className="font-semibold">9 recap videos</span> to
            document each week of camp. Here are some of my favorite shots:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src="/camp-swamp/gallery/piggyback.jpg"
              alt="two campers piggyback at sunset"
              className="w-full rounded-sm sm:col-span-2"
            />
            <img
              src="/camp-swamp/gallery/foam.jpg"
              alt="campers at a foam party"
              className="aspect-square w-full rounded-sm object-cover"
            />
            <img
              src="/camp-swamp/gallery/kitchen.jpg"
              alt="camp kitchen staff baking"
              className="aspect-square w-full rounded-sm object-cover"
            />
            <img
              src="/camp-swamp/gallery/splash.jpg"
              alt="camper splashing water on his face"
              className="aspect-square w-full rounded-sm object-cover"
            />
            <img
              src="/camp-swamp/gallery/peace.jpg"
              alt="counselor and camper making a peace sign"
              className="aspect-square w-full rounded-sm object-cover"
            />
            <img
              src="/camp-swamp/gallery/hug1.jpg"
              alt="counselor and camper laughing together"
              className="aspect-square w-full rounded-sm object-cover"
            />
            <img
              src="/camp-swamp/gallery/fish.jpg"
              alt="camper holding a fish he caught"
              className="aspect-square w-full rounded-sm object-cover"
            />
          </div>

          <a
            href="https://campswamp.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block font-body text-sm text-[#3a5a8c] hover:underline"
          >
            Camp Swamp ↗
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
