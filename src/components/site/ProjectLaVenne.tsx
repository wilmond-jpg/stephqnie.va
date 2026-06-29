import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";
import { StatBlock } from "./StatBlock";
import { Reveal } from "./Reveal";
import instagramPost from "@/assets/projects/la-venne/instagram-post.jpg";
import curatedFeed from "@/assets/projects/la-venne/curated-feed.jpg";
import topPost from "@/assets/projects/la-venne/top-post.jpg";

export function ProjectLaVenne() {
  return (
    <section id="la-venne" className="bg-cream text-chocolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <SectionLabel>Projects / La Venné</SectionLabel>
          <PageNumber index={5} total={12} />
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-6xl leading-[0.95] sm:text-7xl">La Venné.</h2>
            <p className="text-gold mt-6 text-sm tracking-[0.18em] uppercase">
              Influencer Outreach & Brand Ambassador Coordinator · Sep 2018 – Nov 2019
            </p>
            <p className="text-brown-deep/85 mt-8 max-w-xl leading-relaxed">
              I ran the Instagram ambassador program for La Venné, an e-commerce jewelry brand, from
              cold outreach through onboarding to ongoing content. I personally recruited 908
              ambassadors and curated and edited their content to keep the feed visually cohesive.
            </p>
            <ul className="mt-8 flex max-w-xl flex-col">
              {[
                "Recruited and onboarded 908 ambassadors through direct outreach.",
                "Wrote recruitment-driven captions that converted followers into applicants.",
                "Hand-picked and edited ambassador content in Lightroom for visual consistency.",
                "Managed ambassador inquiries and onboarding through DMs.",
              ].map((b) => (
                <li key={b} className="border-t border-gold/30 py-4 text-sm sm:text-base">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Reveal className="bg-card-warm">
              <img
                src={instagramPost}
                alt="Instagram jewelry post screenshot"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </Reveal>
            <div className="flex flex-col gap-6">
              <Reveal className="bg-card-warm">
                <img
                  src={curatedFeed}
                  alt="Curated feed"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </Reveal>
              <Reveal className="bg-card-warm">
                <img
                  src={topPost}
                  alt="Top post"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="divider-thin bg-gold/40" />
          <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-4">
            <StatBlock value="908" label="Ambassadors Recruited" />
            <StatBlock value="1,119" label="Page Followers" />
            <StatBlock value="634" label="Likes on Top Post" />
            <StatBlock value="24" label="Curated Feed Posts" />
          </div>
        </div>
      </div>
    </section>
  );
}
