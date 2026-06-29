import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import laVenneImg from "@/assets/projects/la-venne.jpg";
import deCocatrisImg from "@/assets/projects/de-cocatris.jpg";
import theVillageImg from "@/assets/projects/the-village.png";
import auraCrystalsImg from "@/assets/projects/aura-crystals.png";
import lumeraImg from "@/assets/projects/lumera.png";

const projects = [
  {
    n: "01",
    name: "La Venné",
    cat: "Influencer Outreach & Brand Ambassador Coordination",
    s: "An Instagram ambassador program built from cold outreach to 908 onboarded creators.",
    href: "#la-venne",
    img: laVenneImg,
  },
  {
    n: "02",
    name: "De Cocatris Gamefarm",
    cat: "Social Media Management & Brand Content",
    s: "Two brands, one client — gamefowl breeding and a resto-events venue run in parallel.",
    href: "#de-cocatris",
    img: deCocatrisImg,
  },
  {
    n: "03",
    name: "The Village",
    cat: "Brand Identity, Menus & Event Content",
    s: "A full resto-bar identity built from blank slate — logo, menus, and weekly events.",
    href: "#the-village",
    img: theVillageImg,
  },
  {
    n: "04",
    name: "Aura Energy Crystals",
    cat: "Small Business Branding, Social Media & Customer Experience",
    s: "A product-based brand managed end-to-end from visual identity to post-purchase materials.",
    href: "#aura",
    img: auraCrystalsImg,
  },
  {
    n: "05",
    name: "Lumera",
    cat: "Concept Project — Brand Design, Social Media & Operations System",
    s: "A skincare brand concept that grew into a fully working VA operations system.",
    href: "#lumera",
    img: lumeraImg,
  },
];

export function ProjectsOverview() {
  return (
    <section id="projects" className="bg-chocolate text-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <SectionLabel>Projects</SectionLabel>
          <PageNumber index={4} total={12} />
        </div>
        <h2 className="font-display text-yellow-pale mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
          Selected projects.
        </h2>
        <p className="text-cream/70 mt-6 max-w-xl text-base sm:text-lg">
          A mix of real client work, small business experience, and concept systems built to show
          both creative and operational support.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              href={p.href}
              key={p.name}
              className="group flex flex-col gap-5 border border-gold/15 bg-soft-black/40 p-6 transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <Reveal className="aspect-[4/5] w-full">
                <img
                  src={p.img}
                  alt={`${p.name} cover`}
                  className="h-full w-full object-cover border border-gold/20 shadow-md shadow-black/60 brightness-110 transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </Reveal>
              <div className="text-gold text-[0.7rem] tracking-[0.22em] uppercase">
                {p.n} · {p.cat}
              </div>
              <h3 className="font-display text-cream text-2xl leading-tight">{p.name}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{p.s}</p>
              <div className="text-yellow-pale mt-auto inline-flex items-center gap-2 text-[0.75rem] tracking-[0.18em] uppercase">
                View Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
