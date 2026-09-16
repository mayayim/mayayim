export default function Footer() {
  return (
    <footer className="mt-auto flex items-end justify-between pb-10 pt-24 sm:pb-14">
      <div className="font-body text-xs text-stone">
        <p className="font-semibold">
          making space for learning + development through digital spaces
        </p>
        <p>© maya yim, 2026</p>
      </div>

      <div className="space-y-1 text-right font-body text-xs text-stone">
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
        <p>
          <a
            href="mailto:myim32@gatech.edu"
            className="hover:text-periwinkle transition-colors"
          >
            myim32 [at] gatech [dot] edu
          </a>
        </p>
      </div>
    </footer>
  );
}
