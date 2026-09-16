import Link from "next/link";
import Footer from "@/components/Footer";
import Placeholder from "@/components/Placeholder";

export default function TwoPage() {
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
          <div className="py-4">
          <img
            src="/covers/2.svg"
            alt="2"
            className="aspect-[16/7] w-full object-cover"
          />

          <h1 className="mt-8 font-body text-[16pt] font-semibold text-ink">2</h1>

          <p className="mt-4 font-body text-sm uppercase tracking-wide text-stone">
            PRODUCT DESIGN &bull; INTERNSHIP &bull; 2026
          </p>
          <p className="mt-1 font-body text-sm text-periwinkle">
            Product Designer, 7 Months, Product Management + Design, UX/UI,
            AI Workflow Automation
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-4 font-body text-sm leading-relaxed text-stone">
              <p>
                2 is an interactive card deck and companion app for
                bilingual K–2 families designed to strengthen language
                development and literacy through simple conversation and
                routine.
              </p>
              <p>
                I led end-to-end product development from user research to
                print-ready production and app development. I synthesized
                afterschool educator and family interviews with
                early-literacy research to define product requirements, and
                automated production by prompting Claude to build a
                card-generation pipeline (InDesign Data Merge) and asset
                export system (Illustrator ExtendScript).
              </p>
              <p>
                This{" "}
                <span className="font-semibold">
                  80-prompt, four-week bilingual conversation project
                </span>{" "}
                was completed and presented at the end of my internship to
                the VP of Supply Chain Manufacturing at Apple in August 2026.
              </p>
            </div>
            <img
              src="/2/intro.jpg"
              alt="2 bilingual bedtime card deck"
              className="h-full w-full rounded-sm object-cover"
            />
          </div>

          <div className="mt-12">
            <p className="font-body text-sm text-stone">
              In the U.S. there are approximately,
            </p>
            <p className="mt-3 font-body text-4xl text-periwinkle sm:text-5xl">
              10.8 million children
            </p>
            <p className="mt-5 whitespace-nowrap font-body text-sm text-stone">
              who live with at least one parent who speaks a non-English
              language at home.
            </p>
            <p className="mt-1 font-body text-xs text-stone/60">
              (Migration Policy Institute per the U.S. Census Bureau)
            </p>
          </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-4 font-body text-sm leading-relaxed text-stone">
              <p className="font-body text-sm font-semibold text-ink">
                LANGUAGE DEVELOPMENT FRICTION IN BILINGUAL HOMES
              </p>
              <p>
                I deeply believe in investing in the next generation because
                the way we invest in them will directly dictate what happens
                in the future.
              </p>
              <p>
                In high school, I worked with an afterschool program teaching
                K-2 graders living in a tax-credited apartment complex. In
                Atlanta, I volunteer with an elementary afterschool program
                for latino students called LaAmistad where I translate and
                assist with homework during the week between classes.
              </p>
              <p>
                While I was volunteering, I noticed that some of the kids had
                a hard time expressing what they were thinking in English,
                but when I spoke to them in Spanish, I saw how much learning
                and development was actually happening. For many of these
                kids, school builds on one language while home builds on
                another.
              </p>
              <p>
                Growing up in two languages is a strength and it builds a
                sharper ear for how language works, but it can create
                friction for language and learning development if it is not
                intentionally navigated.
              </p>
            </div>
            <img
              src="/2/afterschool.jpg"
              alt="a volunteer reading with a student at LaAmistad"
              className="ml-auto aspect-[4/5] w-full max-w-sm rounded-sm border border-stone/10 object-cover"
              style={{ objectPosition: "center 8%" }}
            />
          </div>

          <p className="mt-12 font-body text-sm font-semibold text-ink">
            RESEARCH TO FIND WHAT MATTERS
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            Most nonprofit and community-based afterschool programs
            primarily serve or heavily focus on low- and middle-income
            families. These kids tend to be in afterschool programs while
            their parents work overtime, and the problem with language and
            literacy development isn&rsquo;t that parents aren&rsquo;t
            willing to contribute. For non-English speaking parents,
            complicated systems can become overwhelming, lack of confidence
            limits interactions, and school-like activities at home feel
            like the disengaging option.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            I conducted interviews with afterschool program leaders and
            educators, read numerous research articles, and analyzed
            different educational apps to see if there was a way to
            strengthen literacy and language development for lower-income
            multilingual K–2nd graders.
          </p>

          <img
            src="/2/research-board.jpg"
            alt="research + brainstorming board"
            className="mt-6 w-full rounded-sm"
          />

          <div className="mt-6 space-y-4 font-body text-sm leading-relaxed text-stone">
            <p>
              Originally, I thought I would be making something like an app
              similar to Duolingo or some other educational reading tool,
              but after my research I realized there were a lot of pieces I
              had missed. Homes are already full of language-rich practices
              like conversation, listening, and role-playing. Consistent
              routines predict better cognitive, social-emotional, and
              academic outcomes, and interpersonal interaction predicts
              school-readiness more than resources do.
            </p>
            <p>
              This product needed to be: simple and easy to do for families
              with limited time between school and bedtime, encouraging and
              inviting for parents afraid of getting it wrong, engaging and
              reinforcing to strengthen existing language practices, and
              consistent to build routine and structure.
            </p>
          </div>

          <p className="mt-12 font-body text-sm font-semibold text-ink">
            BUILDING 2
          </p>
          <div className="mt-4 space-y-4 font-body text-sm leading-relaxed text-stone">
            <p>
              The deck works through encouraging intentional conversation
              between families and children once a night to create a
              routine and implicitly strengthen learning and development. 2
              includes a months deck of bilingual bedtime prompts to do
              together each night. When finished, they scan the back of the
              card to plant it and see progress through growing a little
              garden on the app. Here, families can store memories and view
              progress as they complete the cards.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <img
              src="/2/scan.jpg"
              alt="scanning a card to plant it in the app"
              className="aspect-square w-full rounded-sm object-cover"
            />
            <img
              src="/2/kid-card.jpg"
              alt="a kid holding up a prompt card"
              className="aspect-square w-full rounded-sm object-cover"
            />
            <img
              src="/2/progress.jpg"
              alt="a parent and child viewing their progress in the app"
              className="aspect-square w-full rounded-sm object-cover"
            />
          </div>

          <div className="mt-6 font-body text-sm leading-relaxed text-stone">
            <p>
              The set includes 48 cards in a magnetic book box. Every prompt
              card carries a theme and two tiers — a shorter prompt for when
              they don&rsquo;t have as much time and a longer additional
              prompt for when there&rsquo;s a bit more time before bed.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src="/2/card-example.jpg"
              alt="Nuestra Gente prompt card example"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <img
              src="/2/giftbox.jpg"
              alt="2 gift box packaging"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </div>

          <div className="mt-6 font-body text-sm leading-relaxed text-stone">
            <p>
              The month themes start with Things That Make Us Laugh → Things
              We Love → Places and Adventures → &lsquo;Our People. It starts
              with play and laughter (which is where we learn to trust each
              other) and ends with what connects us most (our people and our
              community).
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <img
              src="/2/theme-laugh.jpg"
              alt="Things That Make Us Laugh theme card"
              className="w-full rounded-sm"
            />
            <img
              src="/2/theme-love.jpg"
              alt="Things We Love theme card"
              className="w-full rounded-sm"
            />
            <img
              src="/2/theme-places.jpg"
              alt="Places and Adventures theme card"
              className="w-full rounded-sm"
            />
            <img
              src="/2/theme-people.jpg"
              alt="Our People theme card"
              className="w-full rounded-sm"
            />
          </div>

          <div className="mt-6 font-body text-sm leading-relaxed text-stone">
            <p>
              The backs of the cards form a puzzle when flipped. I drew a
              single illustration in Adobe Illustrator and sliced it using
              Photoshop scripts, so the assembled deck forms one image.
              Every object in it is drawn in pairs (a nod to doing things
              together) and is based off a real plant. When families want,
              this deck would double as a tactile activity.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src="/2/puzzle-1.jpg"
              alt="illustration detail, lily of the valley"
              className="w-full rounded-sm"
            />
            <img
              src="/2/puzzle-2.jpg"
              alt="illustration detail, pear and watermelon"
              className="w-full rounded-sm"
            />
          </div>

          <div className="mt-6 font-body text-sm leading-relaxed text-stone">
            <p>
              I designed a SwiftUI/WidgetKit companion app with Claude Code
              enabling camera-based card scanning, progress visualization,
              and family memory-saving.
            </p>
          </div>

          <video
            src="/videos/two-screens.mov"
            autoPlay
            loop
            muted
            playsInline
            className="mt-6 w-full rounded-sm"
          />

          <p className="mt-6 font-body text-xs text-stone/60">
            Physical deck was printed for the final presentation.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
