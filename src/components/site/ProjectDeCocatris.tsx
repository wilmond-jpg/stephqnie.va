import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";
import { StatBlock } from "./StatBlock";
import banner from "@/assets/projects/de-cocatris/banner.jpg";
import logo from "@/assets/projects/de-cocatris/logo.jpg";
import bloodlines from "@/assets/projects/de-cocatris/bloodlines.png";
import facebookResults from "@/assets/projects/de-cocatris/facebook-results.jpg";

export function ProjectDeCocatris() {
  return (
    <section id="de-cocatris" className="bg-chocolate text-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <SectionLabel>Projects / De Cocatris</SectionLabel>
          <PageNumber index={6} total={12} />
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            <img
              src={banner}
              alt="De Cocatris banner"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="grid grid-cols-2 gap-6">
              <img src={logo} alt="Gamefarm logo" className="aspect-square w-full object-cover" />
              <img
                src={bloodlines}
                alt="Bloodlines reference"
                className="aspect-square w-full object-cover"
              />
            </div>
            <img
              src={facebookResults}
              alt="Facebook results screenshot"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-yellow-pale text-5xl leading-[0.95] sm:text-7xl">
              De Cocatris Gamefarm.
            </h2>
            <p className="text-cream/85 mt-8 max-w-xl leading-relaxed">
              I managed two completely different brands for the same client at
              the same time — a gamefowl breeding business and a restaurant and
              events venue. Same owner, two audiences, two visual identities,
              run in parallel without either one slipping.
            </p>
            <ul className="mt-8 flex max-w-xl flex-col">
              {[
                "Designed The Village's full visual identity from scratch, including logo, menus, and event flyers.",
                "Created and scheduled branded content across both Facebook pages weekly.",
                "Handled customer inquiries and bookings across both accounts.",
                "Produced bloodlines reference graphics and breeding documentation for De Cocatris.",
              ].map((b) => (
                <li key={b} className="border-t border-gold/25 py-4 text-sm sm:text-base">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="divider-thin bg-gold/40" />
          <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-4">
            <StatBlock tone="light" value="25" label="Posts Published" />
            <StatBlock tone="light" value="1.6K" label="Page Followers" />
            <StatBlock tone="light" value="10,239" label="3-Second Views" />
            <StatBlock tone="light" value="530" label="Interactions on Top Post" />
          </div>
        </div>
      </div>
    </section>
  );
}
