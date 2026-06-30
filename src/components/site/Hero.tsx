import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";
import { ArrowRight } from "lucide-react";
import stephanieHero from "@/assets/hero/stephanie-hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-chocolate text-cream min-h-screen pt-32 pb-16 sm:pt-36"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <SectionLabel>Virtual Assistant Portfolio</SectionLabel>
            <PageNumber index={1} total={12} />
          </div>

          <h1 className="font-display text-yellow-pale text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Hi, I'm <span className="italic">Stephanie.</span>
          </h1>

          <p className="font-display text-cream/90 max-w-xl text-2xl leading-snug sm:text-3xl">
            Content, calendars, and chaos&nbsp;— handled.
          </p>

          <p className="text-cream/70 max-w-lg text-base leading-relaxed">
            Social media, systems, and behind-the-scenes operations for small businesses that need
            more than just a poster designed.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-yellow-pale text-chocolate px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-gold/60 text-cream px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-gold/10"
            >
              Let's Talk
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Reveal className="aspect-[4/5] w-full">
            <img
              src={stephanieHero}
              alt="Stephanie — Virtual Assistant"
              className="h-full w-full object-cover object-[50%_30%] border border-gold/20 shadow-md shadow-black/60 brightness-110 image-breathe"
              loading="eager"
            />
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
        <div className="divider-thin bg-gold/30" />
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { v: "4+ yrs", l: "Freelance Experience" },
            { v: "3 Industries", l: "Beauty · Hospitality · E-commerce" },
            { v: "100%", l: "Fully Remote" },
          ].map((d) => (
            <div key={d.l} className="flex flex-col gap-1">
              <div className="font-display text-cream text-2xl">{d.v}</div>
              <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold">{d.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
