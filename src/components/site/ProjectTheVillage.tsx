import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";
import { Reveal } from "./Reveal";
import logo from "@/assets/projects/the-village/logo.png";
import openHours from "@/assets/projects/the-village/open-hours.jpg";
import menu from "@/assets/projects/the-village/menu.jpg";
import eventPoster from "@/assets/projects/the-village/event-poster.jpg";
import testimonial from "@/assets/projects/the-village/testimonial.png";

export function ProjectTheVillage() {
  return (
    <section id="the-village" className="bg-cream text-chocolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <SectionLabel>Projects / The Village</SectionLabel>
          <PageNumber index={7} total={12} />
        </div>

        <div className="mt-10">
          <h2 className="font-display text-6xl leading-[0.95] sm:text-7xl">The Village.</h2>
          <p className="text-brown-deep/85 mt-8 leading-relaxed">
            I built The Village's entire resto-bar identity from a blank slate — including the logo,
            neon signage style, menus, and event promos — then carried that same system across every
            piece of weekly content.
          </p>
          <ul className="mt-8 flex flex-col">
            {[
              "Designed the neon logo and tropical skyline brand mark.",
              "Built the happy hour and silog breakfast menus.",
              "Created weekly event posters for TGIF, Saturday Night Live, and Solid Sundays.",
              "Turned customer reviews into branded testimonial graphics.",
            ].map((b) => (
              <li key={b} className="border-t border-gold/30 py-4 text-sm sm:text-base">
                {b}
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="mt-12 overflow-hidden marquee-mask" aria-hidden="true">
          <div className="flex gap-8" style={{ animation: "marquee 35s linear infinite" }}>
            {[logo, menu, openHours, eventPoster, testimonial].flatMap((src, i) =>
              Array.from({ length: 2 }).map((_, j) => (
                <img
                  key={`${i}-${j}`}
                  src={src}
                  alt=""
                  className="h-[250px] sm:h-[400px] w-auto object-scale-down flex-shrink-0 pointer-events-none select-none"
                  loading="lazy"
                />
              )),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
