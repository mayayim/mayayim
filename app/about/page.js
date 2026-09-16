import Footer from "@/components/Footer";
import HoverImageLink from "@/components/HoverImageLink";
import HoverVideoLink from "@/components/HoverVideoLink";

const GALLERY = [
  "/about/gallery-1.jpg",
  "/about/gallery-2.jpg",
  "/about/gallery-3.jpg",
  "/about/gallery-4.jpg",
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col px-6 pt-16 sm:px-12 sm:pt-24">
      <div className="flex flex-col justify-between gap-16 lg:flex-row">
        <div className="max-w-xl space-y-8 font-body text-[16pt] leading-relaxed text-stone">
          <p>
            hi there! my name is maya. i&rsquo;m a fourth-year design +
            intercultural studies student at{" "}
            <HoverImageLink
              href="https://www.gatech.edu"
              target="_blank"
              rel="noreferrer"
              image="/about/georgia-tech.jpg"
              alt="maya trick-or-treating in a Georgia Tech cheer outfit"
              className="font-semibold text-stone hover:text-periwinkle transition-colors"
            >
              georgia tech
            </HoverImageLink>{" "}
            working on researching AI literacy in education ecosystems.
          </p>
          <p>
            i recently finished working at{" "}
            <HoverImageLink
              href="https://www.apple.com"
              target="_blank"
              rel="noreferrer"
              image="/about/apple.jpg"
              alt="maya at Apple"
              className="font-semibold text-stone hover:text-periwinkle transition-colors"
            >
              apple
            </HoverImageLink>
            , and am finishing up my last year creating a new design
            community at georgia tech called{" "}
            <HoverImageLink
              href="/projects/impulse"
              image="/about/impulse.jpg"
              alt="maya presenting at a Georgia Tech podium"
              className="font-semibold text-stone hover:text-periwinkle transition-colors"
            >
              impulse
            </HoverImageLink>
            .
          </p>
          <p>
            i care a lot about strengthening early elementary + higher
            education for everyone, and always leaving things better than i
            found them. in my free time, i&rsquo;m{" "}
            <HoverVideoLink
              href="https://www.instagram.com/reel/DN6brkpWOzw/"
              target="_blank"
              rel="noreferrer"
              embedSrc="https://www.instagram.com/reel/DN6brkpWOzw/embed"
              className="font-semibold text-stone hover:text-periwinkle transition-colors"
            >
              dancing with tekstyles
            </HoverVideoLink>
            , going to{" "}
            <HoverImageLink
              image="/about/concerts.jpg"
              alt="maya at a concert"
              className="cursor-default"
            >
              concerts
            </HoverImageLink>
            ,{" "}
            <HoverImageLink
              image="/about/hiking.jpg"
              alt="maya hiking overlooking a valley"
              className="cursor-default"
            >
              hiking
            </HoverImageLink>
            ,{" "}
            <HoverImageLink
              image="/about/sunsets.jpg"
              alt="maya with friends at sunset"
              className="cursor-default"
            >
              chasing sunsets
            </HoverImageLink>
            , and{" "}
            <HoverImageLink
              image="/about/sidequesting.jpg"
              alt="maya with friends in white outfits"
              className="cursor-default"
            >
              sidequesting with my friends
            </HoverImageLink>
            . you can find me in{" "}
            <HoverImageLink
              image="/about/coffeeshops.jpg"
              alt="maya at a coffee shop"
              className="cursor-default"
            >
              coffee shops
            </HoverImageLink>
            ,{" "}
            <HoverImageLink
              image="/about/jazzbar.jpg"
              alt="maya at a jazz bar"
              className="cursor-default"
            >
              jazz bars
            </HoverImageLink>
            , +{" "}
            <HoverImageLink
              image="/about/afterschool.jpg"
              alt="maya with kids at an afterschool program"
              className="cursor-default"
            >
              afterschool programs
            </HoverImageLink>{" "}
            or globally discovering new{" "}
            <HoverImageLink
              image="/about/cultures.jpg"
              alt="maya traveling in the mountains"
              className="cursor-default"
            >
              countries
            </HoverImageLink>
            ,{" "}
            <HoverImageLink
              image="/about/cultures2.jpg"
              alt="maya with friends by a mountain lake"
              className="cursor-default"
            >
              cultures
            </HoverImageLink>
            ,{" "}
            <HoverImageLink
              image="/about/people.jpg"
              alt="maya with friends in the mountains"
              className="cursor-default"
            >
              + people
            </HoverImageLink>
            .
          </p>
        </div>

        <div className="shrink-0 space-y-3 text-right font-body text-sm text-stone sm:self-center">
          <p>this is me! ↓</p>
          <img
            src="/about/portrait.jpg"
            alt="maya"
            className="ml-auto aspect-[4/5] w-52 rounded-sm object-cover"
          />
          <p>resume upon request</p>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-6 sm:mt-28 sm:grid-cols-4">
        {GALLERY.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
