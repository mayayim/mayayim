import Link from "next/link";
import Footer from "@/components/Footer";

export default function JuntiPage() {
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
            src="/covers/junti.svg"
            alt="JUNTÍ"
            className="aspect-[16/7] w-full object-cover"
          />

          <h1 className="mt-8 font-body text-[16pt] font-semibold text-ink">
            JUNTÍ
          </h1>

          <p className="mt-4 font-body text-sm uppercase tracking-wide text-stone">
            PRODUCT MANAGEMENT &bull; CASE STUDY &bull; 2025
          </p>
          <p className="mt-1 font-body text-sm text-[#06725B]">
            Líder De Proyecto, 1 Mes, Diseño De UX, Investigación De UX,
            Español Y Cultura
          </p>

          <p className="mt-4 font-body text-sm text-stone">
            <span className="text-stone">COLABORADORES</span>{" "}
            <span className="text-[#06725B]">
              Jazmin Yernazian, Micaela Giner, Delfina Barousse
            </span>
          </p>

          <p className="mt-6 font-body text-sm leading-relaxed text-stone">
            JUNTÍ es una app social para descubrir, compartir y reseñar
            experiencias culturales en la Ciudad de Buenos Aires. Es creada
            para jóvenes de 18 a 25 años que buscan conectarse con su ciudad y
            con otros.
          </p>

          <p className="mt-4 font-body text-sm leading-relaxed text-stone">
            I led a team of 4 through the end-to-end design process from
            research and development to design and presentation fully in
            Spanish. I conducted user research through interviews and
            surveys, analyzed and synthesized data to uncover pain points
            and unmet needs in social and cultural event participation, and
            independently designed the wireframe and presentation using
            Figma to visualize key features.
          </p>

          <a
            href="https://drive.google.com/file/d/1sjeGkAs_IbR5dRPKXHUHoemShkHLvzjl/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block font-body text-sm text-[#06725B] hover:underline"
          >
            Presentation Deck ↗
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
