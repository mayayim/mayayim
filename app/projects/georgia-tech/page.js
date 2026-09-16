import Link from "next/link";
import Footer from "@/components/Footer";

const SECTIONS = [
  { id: "current-projects", label: "[current projects]" },
  { id: "thinking-of-you", label: "thinking of you project" },
  { id: "sift", label: "sift" },
  { id: "playback", label: "PLAYBACK" },
  { id: "the-paperspace", label: "the PaperSpace" },
];

export default function GeorgiaTechProjectsPage() {
  return (
    <div id="top" className="flex flex-1 flex-col px-6 pt-16 sm:px-12 sm:pt-24">
      <div className="flex gap-10">
        <div className="hidden w-32 shrink-0 sm:block">
          <div className="sticky top-24">
            <Link
              href="/projects"
              className="block font-body text-sm text-stone hover:text-periwinkle transition-colors"
            >
              ← back to projects
            </Link>
            <ul className="mt-8 space-y-2 font-body text-sm text-stone">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-periwinkle transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-4xl flex-1">
          <Link
            href="/projects"
            className="block font-body text-sm text-stone hover:text-periwinkle transition-colors sm:hidden"
          >
            ← back to projects
          </Link>

          <section id="current-projects" className="mt-8 sm:mt-0">
            <p className="font-body text-sm font-semibold text-stone">
              current projects @ Georgia Tech
            </p>
            <p className="mt-4 font-body text-base font-semibold text-ink">
              [researching AI literacy in education ecosystems]
            </p>
            <p className="mt-2 font-body text-sm uppercase tracking-wide text-stone">
              AI COMMUNICATIONS RESEARCH &bull; CASE STUDY &bull; PRESENT
            </p>
            <p className="mt-1 font-body text-sm text-periwinkle">
              AI Literacy, Education, Communication
            </p>
          </section>

          <p className="mt-16 font-body text-sm font-semibold text-stone">
            previous projects @ Georgia Tech
          </p>

          <section id="thinking-of-you" className="mt-6">
            <img
              src="/covers/thinking-of-you.svg"
              alt="the thinking of you project"
              className="w-full rounded-sm"
            />
            <p className="mt-4 font-body text-lg font-semibold text-ink">
              the thinking of you project
            </p>
            <p className="mt-2 font-body text-sm uppercase tracking-wide text-stone">
              INTERACTIVE AI PLATFORMS &bull; CONTRA FIGMA MAKE-A-THON &bull;
              2025
            </p>
            <p className="mt-1 font-body text-sm text-periwinkle">
              Product Designer, 1 Day, Generative AI, UX/UI, Vibecoding
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-stone">
              the thinking of you project is an interactive platform to
              simplify emotional expression and digital sharing with one
              click. I created this project to explore how we might utilize
              generative AI as a tool to foster connection in simple ways.
            </p>
            <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-stone">
              This project was fully coded with generative AI in Figma Make
              in <span className="font-semibold">1 day.</span>
            </p>
            <a
              href="https://thethinkingofyouproject.figma.site"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block font-body text-sm text-periwinkle hover:underline"
            >
              the thinking of you project ↗
            </a>
          </section>

          <section id="sift" className="mt-16">
            <img
              src="/covers/sift.svg"
              alt="sift"
              className="w-full rounded-sm"
            />
            <p className="mt-4 font-body text-lg font-semibold text-ink">
              sift
            </p>
            <p className="mt-2 font-body text-sm uppercase tracking-wide text-stone">
              PRODUCT MANAGEMENT + DESIGN &bull; CASE STUDY &bull; 2026
            </p>
            <p className="mt-1 font-body text-sm text-periwinkle">
              Project Lead, 1 Week, Project Management, Product Design,
              UX/UI Research
            </p>
            <p className="mt-2 font-body text-sm text-stone">
              <span className="text-stone">COLLABORATORS</span>{" "}
              <span className="text-periwinkle">
                Kwesi Asante, Srihas Nakarikanti
              </span>
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-stone">
              Sift is an app that filters a restaurant&rsquo;s menu against a
              diner&rsquo;s dietary restrictions by pulling ingredient data
              from the supplier invoices and POS that is confirmed and
              sorted before a customer arrives. This project was created in
              response to researching how people with dietary constraints
              navigate busy dining environments and identifying design
              opportunities that better support their underlying goals
              during these constrained moments.
            </p>
            <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-stone">
              Prototype generated by feeding screens into Figma Make.
            </p>
          </section>

          <section id="playback" className="mt-16">
            <img
              src="/covers/playback.svg"
              alt="PLAYBACK"
              className="w-full rounded-sm"
            />
            <p className="mt-4 font-body text-lg font-semibold text-ink">
              PLAYBACK
            </p>
            <p className="mt-2 font-body text-sm uppercase tracking-wide text-stone">
              PRODUCT DESIGN &bull; CASE STUDY &bull; 2026
            </p>
            <p className="mt-1 font-body text-sm text-periwinkle">
              Product Designer, 1 Week, Product Design, AI Image Generation,
              Prompt Engineering
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-stone">
              PLAYBACK is a small dual CD mixer that allows users to blend
              two CDs together using a crossfader and basic EQ controls,
              without the cost or complexity of professional DJ equipment.
              For this project, I had to find a trend in consumer behavior
              and design a product in response to it. As AI grows,
              consumers have started to pull back from algorithm driven
              experiences and are instead seeking more human, intuitive, and
              in person ones. People are pushing back against convenience
              driven digital interaction, and are looking for more sensory,
              identity driven experiences to feel connected to themselves
              and others. PLAYBACK is a product that provides this
              experience while also acting as a tactile pushback against
              the algorithm driven world.
            </p>
          </section>

          <section id="the-paperspace" className="mt-16">
            <img
              src="/covers/paperspace.svg"
              alt="the PaperSpace"
              className="aspect-[16/7] w-full rounded-sm object-cover"
            />
            <p className="mt-4 font-body text-lg font-semibold text-ink">
              the PaperSpace
            </p>
            <p className="mt-2 font-body text-sm uppercase tracking-wide text-stone">
              PRODUCT MANAGEMENT + INTERACTION DESIGN &bull; PROJECT &bull;
              2025
            </p>
            <p className="mt-1 font-body text-sm text-periwinkle">
              Project Lead, 1 Month, Project Management, Interaction Design,
              Spatial Design
            </p>
            <p className="mt-2 font-body text-sm text-stone">
              <span className="text-stone">COLLABORATORS</span>{" "}
              <span className="text-periwinkle">
                Tiffany Doan, Noa Young, Joel Park, Kam Kennedy
              </span>
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-stone">
              The PaperSpace is an interactive spatial lab that examines
              paper as a viable architectural medium. This project was
              proposed as a temporary exhibition in the Robert C. Williams
              Museum of Papermaking to create an immersive experience that
              allows visitors to discover new ways paper can shape space
              through furniture and decorative pieces while expanding
              public understanding of the variety of paper, and
              demonstrating its versatility as a decorative, structural, and
              spatial material.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-stone">
              I managed a team of 5 designers, coordinating the spatial UI
              design, interactive prototype, and screen flows to create an
              intuitive visitor experience. I directed the visual design and
              layout of the final presentation deck, ensuring cohesive
              storytelling and clear communication.
            </p>
            <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-stone">
              Spatial mockups generated with Google Gemini.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
