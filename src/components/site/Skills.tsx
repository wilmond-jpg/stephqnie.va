import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";

const skills = [
  {
    t: "Social Media Management",
    d: "Ran weekly content calendars, grew page followings, and managed customer messages directly across Instagram and Facebook.",
  },
  {
    t: "Brand & Content Design",
    d: "Built brand identities, menus, and promo graphics from scratch, keeping every post visually consistent.",
  },
  {
    t: "CRM & Automation",
    d: "Built full CRM systems in GoHighLevel — pipelines, workflows, forms, calendars, and Zapier integrations tested with real data end to end.",
  },
  {
    t: "Email & Calendar Management",
    d: "Managed inboxes end-to-end, replying to every applicant and inquiry, and scheduled interviews via Zoom and Calendar.",
  },
];

const tools = [
  {
    t: "Design & Social Tools",
    d: "Canva, CapCut, Meta Business Suite, Instagram, and content scheduling tools.",
  },
  {
    t: "Email & Communication Tools",
    d: "Gmail, Google Calendar, Zoom, Slack, and direct messaging across platforms.",
  },
  {
    t: "CRM & Automation Tools",
    d: "GoHighLevel, Zapier, Lovable.dev, OpenCode, Vercel, and Google Sheets for lead tracking, automation, and data sync.",
  },
  {
    t: "Project Management Tools",
    d: "Trello, Asana, Google Docs, and Notion for task tracking, SOPs, and operations documentation.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-cream text-chocolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <SectionLabel>Skills & Tools</SectionLabel>
          <PageNumber index={3} total={12} />
        </div>
        <h2 className="font-display mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
          My skills & tools.
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="font-display text-gold mb-8 text-sm tracking-[0.2em] uppercase">
              Skills
            </div>
            <div className="flex flex-col">
              {skills.map((s) => (
                <div key={s.t} className="border-t border-gold/30 py-7">
                  <h3 className="font-display text-2xl">{s.t}</h3>
                  <p className="text-brown-deep/85 mt-3 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display text-gold mb-8 text-sm tracking-[0.2em] uppercase">
              Tools
            </div>
            <div className="flex flex-col">
              {tools.map((s) => (
                <div key={s.t} className="border-t border-gold/30 py-7">
                  <h3 className="font-display text-2xl">{s.t}</h3>
                  <p className="text-brown-deep/85 mt-3 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
