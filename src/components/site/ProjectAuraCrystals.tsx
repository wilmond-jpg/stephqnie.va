import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";
import { Reveal } from "./Reveal";
import logo from "@/assets/projects/aura-crystals/logo.png";
import careGuide from "@/assets/projects/aura-crystals/care-guide.jpg";
import instagramProfile from "@/assets/projects/aura-crystals/instagram-profile.png";
import img0117 from "@/assets/projects/aura-crystals/img-0117.png";

const managed = [
  {
    t: "Brand Identity",
    d: "Designed the Aura Energy Crystals logo and visual direction with a bold, colorful, and mystical brand style.",
  },
  {
    t: "Social Media Content",
    d: "Created and posted product-focused content, reels, and visual updates across TikTok, Instagram, and Facebook to showcase crystals and support product sales.",
  },
  {
    t: "Customer Experience Materials",
    d: "Designed thank-you cards, purchase inserts, and branded contact details to make each order feel personal and encourage reviews, tags, and repeat engagement.",
  },
  {
    t: "E-commerce Support",
    d: "Handled product presentation, customer communication, social selling, and post-purchase materials for a small online crystal business.",
  },
];

export function ProjectAuraCrystals() {
  return (
    <section id="aura" className="bg-chocolate text-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <SectionLabel>Projects / Aura Energy Crystals</SectionLabel>
          <PageNumber index={8} total={12} />
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-yellow-pale text-5xl leading-[0.95] sm:text-7xl">
              Aura Energy Crystals.
            </h2>
            <p className="text-gold mt-6 text-sm tracking-[0.18em] uppercase">
              Small Business Branding · Social Media · Customer Experience
            </p>
            <p className="text-cream/85 mt-8 max-w-xl leading-relaxed">
              Aura Energy Crystals is my small product-based business where I managed the brand's
              visual identity, social media content, and customer-facing materials. I used TikTok,
              Instagram, and Facebook to showcase crystal pieces, post reels, engage with potential
              buyers, and support online sales.
            </p>
          </div>

          <Reveal className="w-full bg-card-warm">
            <img
              src={logo}
              alt="Aura logo"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>

        <div className="mt-16">
          <div className="font-display text-gold mb-8 text-sm tracking-[0.2em] uppercase">
            What I Managed
          </div>
          <div className="grid gap-px bg-gold/20 sm:grid-cols-2">
            {managed.map((m) => (
              <div key={m.t} className="bg-chocolate p-8">
                <h3 className="font-display text-cream text-2xl">{m.t}</h3>
                <p className="text-cream/75 mt-3 leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Reveal className="w-full">
            <img
              src={careGuide}
              alt="Care guide"
              className="w-full h-[350px] object-scale-down"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="w-full">
            <img
              src={instagramProfile}
              alt="Instagram profile"
              className="w-full h-[350px] object-scale-down"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="w-full">
            <img
              src={img0117}
              alt="Aura crystal"
              className="w-full h-[350px] object-scale-down"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
