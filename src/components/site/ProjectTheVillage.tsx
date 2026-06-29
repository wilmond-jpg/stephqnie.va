import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";
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

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-6xl leading-[0.95] sm:text-7xl">
              The Village.
            </h2>
            <p className="text-brown-deep/85 mt-8 max-w-xl leading-relaxed">
              I built The Village's entire resto-bar identity from a blank
              slate — including the logo, neon signage style, menus, and event
              promos — then carried that same system across every piece of
              weekly content.
            </p>
            <ul className="mt-8 flex max-w-xl flex-col">
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

          <div className="grid grid-cols-2 gap-6">
            <img src={logo} alt="Neon logo" className="aspect-square w-full object-cover" />
            <img src={openHours} alt="Open hours graphic" className="aspect-square w-full object-cover" />
            <img src={menu} alt="Menu design" className="aspect-[3/4] w-full object-cover" />
            <img src={eventPoster} alt="Event poster" className="aspect-[3/4] w-full object-cover" />
            <img
              src={testimonial}
              alt="Testimonial graphic"
              className="col-span-2 aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
