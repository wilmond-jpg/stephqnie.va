import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";

const services = [
  "Social Media Management & Content Creation",
  "Brand Identity & Visual Design",
  "CRM Setup & Automation",
  "Email & Inbox Management",
  "Calendar & Inbox Management",
  "Operations Support & Task Management",
];

export function WhatIDo() {
  return (
    <section id="about" className="grid lg:grid-cols-[0.9fr_1.1fr]">
      <div className="bg-brown-deep text-cream px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="flex items-center justify-between">
          <SectionLabel>What I Do</SectionLabel>
          <PageNumber index={2} total={12} />
        </div>
        <h2 className="font-display mt-8 text-4xl leading-tight sm:text-5xl">Services I offer.</h2>
        <ul className="mt-10 flex flex-col">
          {services.map((s, i) => (
            <li key={s} className="border-t border-gold/25 py-5 text-lg sm:text-xl">
              <span className="text-gold mr-4 text-xs tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-cream text-chocolate px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <h3 className="font-display max-w-xl text-3xl leading-tight sm:text-4xl">
          Psychology graduate turned virtual assistant.
        </h3>
        <p className="text-brown-deep/85 mt-8 max-w-xl text-base leading-relaxed sm:text-lg">
          I've spent the last four years running social pages, building brand identities, and
          managing inboxes and calendars for businesses across beauty, hospitality, and e-commerce —
          and I've recently expanded into CRM setup, workflow automation, and operations system
          building using tools like GoHighLevel, Zapier, Trello, and Asana.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            { v: "4+", l: "Years Experience" },
            { v: "3", l: "Industries Served" },
            { v: "100%", l: "Remote Workflow" },
          ].map((m) => (
            <div key={m.l} className="border-l border-gold/40 pl-4">
              <div className="font-display text-chocolate text-4xl">{m.v}</div>
              <div className="text-brown-deep/70 mt-2 text-[0.7rem] tracking-[0.2em] uppercase">
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
