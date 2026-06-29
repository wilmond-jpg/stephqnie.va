import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#lumera", label: "Lumera Case Study" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-chocolate/85 backdrop-blur-md border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display min-w-0 truncate text-sm tracking-tight text-cream sm:text-base"
        >
          Stephanie Anne Corpuz
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] tracking-[0.14em] uppercase text-cream/75 transition-colors hover:text-yellow-pale"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden text-cream"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-chocolate md:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-cream">Stephanie Anne Corpuz</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display border-b border-gold/15 py-5 text-2xl text-cream hover:text-yellow-pale"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
