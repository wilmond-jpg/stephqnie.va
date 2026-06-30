import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const linkClass =
  "text-[0.78rem] tracking-[0.14em] uppercase text-cream/75 transition-colors hover:text-yellow-pale";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  {
    label: "Projects",
    children: [
      { href: "#la-venne", label: "La Venné" },
      { href: "#aura", label: "Aura Energy Crystals" },
      { href: "#lumera", label: "Lumera" },
      { href: "#de-cocatris", label: "De Cocatris Gamefarm" },
      { href: "#the-village", label: "The Village" },
    ],
  },
  {
    label: "Lumera Case Study",
    children: [
      { href: "#lumera-workflow", label: "Workflow" },
      { href: "#lumera-ghl", label: "GoHighLevel" },
      { href: "#lumera-operations", label: "Operations Layer" },
      { href: "#lumera-results", label: "Results" },
    ],
  },
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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
            {links.map((l) =>
              l.children ? (
                <div key={l.label} className="relative group">
                  <button className="inline-flex items-center gap-1 text-[0.78rem] tracking-[0.14em] uppercase text-cream/75 transition-colors hover:text-yellow-pale group-hover:text-yellow-pale cursor-pointer">
                    {l.label}
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block z-30">
                    <div className="mt-1 bg-chocolate border border-gold/15 rounded-md p-2 min-w-[200px]">
                      <ul>
                        {l.children.map((c) => (
                          <li key={c.href}>
                            <a
                              href={c.href}
                              className="block text-[0.78rem] tracking-[0.14em] uppercase text-cream/75 transition-colors hover:text-yellow-pale hover:bg-gold/10 px-3 py-2 rounded"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <a key={l.href} href={l.href!} className={linkClass}>
                  {l.label}
                </a>
              ),
            )}
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden text-cream transition-transform duration-200 active:scale-90 hover:scale-110"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-chocolate md:hidden overflow-y-auto transition-[opacity,transform] duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-cream">Stephanie Anne Corpuz</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-8">
            {links.map((l) => (
              <div key={l.label}>
                {l.children ? (
                  <>
                    <div className="font-display border-b border-gold/15 py-4 text-2xl text-cream/60">
                      {l.label}
                    </div>
                    <div className="pl-5">
                      {l.children.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="font-display block border-b border-gold/10 py-3.5 text-lg text-cream/70 hover:text-yellow-pale"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={l.href!}
                    onClick={() => setOpen(false)}
                    className="font-display border-b border-gold/15 py-4 text-2xl text-cream hover:text-yellow-pale"
                  >
                    {l.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
    </>
  );
}
