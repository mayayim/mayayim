import Placeholder from "@/components/Placeholder";

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-16 sm:px-12 sm:pt-24">
      <div className="flex flex-col justify-between gap-16 lg:flex-row">
        <div className="max-w-xl space-y-8 font-body text-xl leading-relaxed text-stone sm:text-2xl">
          <p>
            hi there! my name is maya. i&rsquo;m a fourth-year design +
            intercultural studies student at{" "}
            <span className="font-semibold text-ink">georgia tech</span>.
          </p>
          <p>
            i recently finished working at{" "}
            <span className="font-semibold text-ink">apple</span>, and am
            finishing up my last year creating a new design community at
            georgia tech called{" "}
            <span className="font-semibold text-ink">impulse</span>.
          </p>
          <p>
            i am passionate about early elementary + higher education. in my
            free time, you can find me locally in coffee shops, jazz bars, +
            afterschool programs or globally discovering new countries,
            cultures, + people.
          </p>
        </div>

        <div className="shrink-0 space-y-1 text-right font-body text-sm text-stone sm:self-end">
          <p>
            <a
              href="https://linkedin.com/in/mayayim"
              target="_blank"
              rel="noreferrer"
              className="hover:text-periwinkle transition-colors"
            >
              linkedin
            </a>
          </p>
          <p>myim32 [at] gatech [dot] edu</p>
          <p>resume upon request</p>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 sm:mt-28 sm:grid-cols-2">
        <Placeholder className="aspect-[4/3]" />
        <Placeholder className="aspect-[4/3]" />
      </div>
    </div>
  );
}
