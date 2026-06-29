import { SectionLabel } from "./SectionLabel";
import { PageNumber } from "./PageNumber";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { StatBlock } from "./StatBlock";
import { ExternalLink } from "./ExternalLink";
import moodboard from "@/assets/projects/lumera/moodboard.png";
import lumeraLogo from "@/assets/projects/lumera/logo.png";
import productMockup from "@/assets/projects/lumera/product-mockup.png";
import productPhotography from "@/assets/projects/lumera/product-photography.png";

const lumeraWhatIDid = [
  {
    t: "Logo Design",
    d: "Designed the Lumera logo, color palette, typography, and overall visual direction in Canva.",
  },
  {
    t: "AI Image Generation",
    d: "Generated all product and lifestyle imagery using AI tools with detailed prompts to capture the exact feel I envisioned — soft, clean, and skincare-editorial.",
  },
  {
    t: "Instagram Layout & Content Curation",
    d: "Built a mock Instagram layout, moodboards, product routine graphics, and a visual content system for a consistent brand presence.",
  },
  {
    t: "Mood Boards & Product Routines",
    d: "Developed moodboards and product routine graphics to guide Lumera's visual direction and customer presentation.",
  },
  {
    t: "From Concept to System",
    d: "After building the brand identity, Lumera became the foundation for a complete VA operations case study — live website, GHL CRM, Zapier automation, Google Sheets tracker, Trello board, Asana project, and full SOP documentation.",
  },
];

const workflowSteps = [
  {
    n: "01",
    t: "Build the Foundation",
    d: "Designed and deployed a live branded website using Lovable.dev with open code edits on Vercel. Built the GHL system: consultation form, booking calendar, 8-stage customer journey pipeline, and 10 published automation workflows.",
  },
  {
    n: "02",
    t: "Capture & Automate",
    d: "Leads submit the skin consultation form on the live website. GHL captures the contact, creates an opportunity, and moves it to Consultation Booked. A webhook triggers Zapier to sync all lead data automatically to Google Sheets.",
  },
  {
    n: "03",
    t: "Manage & Track",
    d: "Daily VA operations run through the Trello Client Operations Board — reviewing leads, monitoring bookings, checking no-shows, and flagging workflow issues in the Google Sheets Issue Log. Weekly tasks are tracked in Asana.",
  },
  {
    n: "04",
    t: "Report & Document",
    d: "Weekly operations simulations were completed and recorded in Asana. The full system was documented with SOPs and a client handover guide — ready to be handed to a real client.",
  },
];

const opsCards = [
  {
    t: "Zapier + Google Sheets",
    d: "GHL sends lead data via webhook when a consultation is booked. Zapier catches it and creates a new row automatically — feeding into a multi-tab tracker covering Leads, Appointments, Customers, VIP, Inactive, Follow-ups, and Weekly Reports.",
  },
  {
    t: "Trello Operations Board",
    d: "An 8-column board manages all recurring VA tasks — Inbox, To Do, In Progress, Waiting for Client, QA, Completed, Issues, and Templates. Each card has labels, due dates, and step-by-step process checklists.",
  },
  {
    t: "Workflow Issue Log + Weekly Reporting",
    d: "Every workflow was tested and documented with expected vs. actual results logged. A Weekly Report tab tracks new leads, bookings, attended, no-shows, follow-ups, and open issues week by week.",
  },
  {
    t: "Asana Weekly Project",
    d: "A weekly operations project tracks all tasks with assignee, priority, due date, and status. A full operations simulation was completed and documented with subtasks and activity comments in Asana.",
  },
];

const results = [
  {
    t: "10 Workflows Published",
    d: "All 10 GHL automation workflows are live and published — covering intake, appointments, follow-ups, conversions, VIP tracking, inactive customers, and Zapier data sync.",
  },
  {
    t: "8-Tab Google Sheets Tracker",
    d: "A fully structured tracker with dedicated tabs for Leads, Appointments, Customers, VIP, Inactive, Follow-ups, Workflow Issue Log, and Weekly Reports — all populated with real test data.",
  },
  {
    t: "Full Operations Simulation Run",
    d: "A complete weekly VA operations simulation was run and documented in Asana — covering lead review, booking checks, no-show review, issue log audit, Zapier sync monitoring, follow-up review, and report prep.",
  },
  {
    t: "100% Documented & Client-Ready",
    d: "GHL, Zapier, Google Sheets, Trello, Asana, SOPs, and weekly reporting are all fully documented and ready for client handover — including a VA Portfolio Case Study Summary and a Documentation + SOP guide.",
  },
];

export function Lumera() {
  return (
    <section id="lumera" className="bg-chocolate text-cream">
      {/* Band intro */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center justify-between">
            <SectionLabel>Concept Projects / Lumera</SectionLabel>
            <PageNumber index={9} total={12} />
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="font-display text-yellow-pale text-6xl leading-[0.95] sm:text-8xl">
                Lumera.
              </h2>
              <p className="text-gold mt-6 text-sm tracking-[0.18em] uppercase">
                Concept Project — Brand Design · Social Media · Operations System
              </p>
              <p className="text-cream/85 mt-8 max-w-xl leading-relaxed">
                Lumera started as a creative brand concept I built from scratch
                to show how I approach content, design, and brand identity
                today — less noise, more intention. What began as a mock
                skincare brand eventually evolved into a fully working VA
                operations system.
              </p>
            </div>
            <img
              src={moodboard}
              alt="Lumera moodboard grid"
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="mt-16">
            <div className="font-display text-gold mb-8 text-sm tracking-[0.2em] uppercase">
              What I Did
            </div>
            <div className="grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
              {lumeraWhatIDid.map((m) => (
                <div key={m.t} className="bg-chocolate p-8">
                  <h3 className="font-display text-cream text-xl">{m.t}</h3>
                  <p className="text-cream/75 mt-3 text-sm leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <img src={lumeraLogo} alt="Lumera logo" className="aspect-square w-full object-cover" />
            <img
              src={productMockup}
              alt="Product mockup"
              className="aspect-[4/5] w-full object-cover"
            />
            <img
              src={productPhotography}
              alt="Product photography"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className="bg-soft-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center justify-between">
            <SectionLabel>Lumera Skincare / Workflow</SectionLabel>
            <PageNumber index={10} total={12} />
          </div>
          <h3 className="font-display text-yellow-pale mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
            The end-to-end workflow.
          </h3>
          <p className="text-cream/75 mt-6 max-w-2xl leading-relaxed">
            Lumera is a mock skincare consultation brand built as a complete VA
            portfolio case study. This is the end-to-end workflow I designed,
            built, and documented — from a live branded website to a fully
            operational client-ready system.
          </p>

          <div className="mt-14 grid gap-px bg-gold/20 md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((s) => (
              <div key={s.n} className="bg-soft-black flex flex-col gap-4 p-8">
                <div className="font-display text-gold text-4xl">{s.n}</div>
                <h4 className="font-display text-cream text-xl">{s.t}</h4>
                <p className="text-cream/70 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GHL */}
      <div className="bg-cream text-chocolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center justify-between">
            <SectionLabel>Concept Projects / Lumera</SectionLabel>
            <PageNumber index={11} total={12} />
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="font-display text-6xl leading-[0.95] sm:text-7xl">
                GoHighLevel.
              </h3>
              <p className="text-brown-deep/85 mt-8 max-w-xl leading-relaxed">
                The GoHighLevel system was built from the ground up — a live
                branded website, a working skin consultation form, and a real
                booking calendar, all connected and tested. When a lead
                submits the form, GHL automatically creates a contact, opens
                an opportunity in the pipeline, and triggers the automation
                workflows. Every part of this system is live, functional, and
                proven with real data.
              </p>
              <div className="mt-8">
                <div className="text-gold text-[0.7rem] tracking-[0.22em] uppercase">
                  View Live
                </div>
                <ExternalLink
                  href="https://lumera-website-nine.vercel.app"
                  className="font-display text-chocolate hover:text-gold mt-2 text-2xl"
                >
                  lumera-website-nine.vercel.app
                </ExternalLink>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <ImagePlaceholder label="Website screenshot (4:5)" aspect="portrait" />
              <ImagePlaceholder label="Form screenshot (4:5)" aspect="portrait" />
              <ImagePlaceholder label="Booking calendar (4:5)" aspect="portrait" />
              <ImagePlaceholder label="Product page (4:5)" aspect="portrait" />
            </div>
          </div>

          <div className="mt-16">
            <div className="divider-thin bg-gold/40" />
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-3">
                <StatBlock value="1" label="Live Website" />
                <p className="text-brown-deep/75 text-xs leading-relaxed">
                  Built with Lovable.dev, customized using OpenCode, and
                  deployed live on Vercel.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <StatBlock value="8" label="Pipeline Stages" />
                <p className="text-brown-deep/75 text-xs leading-relaxed">
                  Booked → Confirmed → Attended → Routine → Customer → VIP →
                  Inactive → No Show.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <StatBlock value="10" label="Workflows Published" />
                <p className="text-brown-deep/75 text-xs leading-relaxed">
                  All live and tested with real contacts — intake, follow-ups,
                  conversions, and Zapier data sync.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <StatBlock value="15" label="Contacts Created" />
                <p className="text-brown-deep/75 text-xs leading-relaxed">
                  Real form submissions processed through the full consultation
                  and booking flow from the live Lumera website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operations Layer */}
      <div className="bg-chocolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Concept Projects / Lumera</SectionLabel>
          <h3 className="font-display text-yellow-pale mt-6 max-w-3xl text-5xl leading-tight sm:text-7xl">
            Operations Layer.
          </h3>
          <p className="text-cream/80 mt-8 max-w-2xl leading-relaxed">
            Once the GHL foundation was live, the operations layer was built to
            connect data, manage tasks, and simulate real weekly VA work. Every
            tool is connected, every task is documented, and every workflow
            was tested with real data before being marked complete.
          </p>

          <div className="mt-14 grid gap-px bg-gold/20 sm:grid-cols-2">
            {opsCards.map((c) => (
              <div key={c.t} className="bg-chocolate p-8">
                <h4 className="font-display text-yellow-pale text-2xl">{c.t}</h4>
                <p className="text-cream/75 mt-3 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            <ImagePlaceholder label="Google Sheets tracker (4:5)" aspect="portrait" />
            <ImagePlaceholder label="Zapier success (4:5)" aspect="portrait" />
            <ImagePlaceholder label="Trello board (4:5)" aspect="portrait" />
            <ImagePlaceholder label="Asana project (4:5)" aspect="portrait" />
            <ImagePlaceholder label="Weekly report (4:5)" aspect="portrait" />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-soft-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center justify-between">
            <SectionLabel>Lumera / Results</SectionLabel>
            <PageNumber index={12} total={12} />
          </div>
          <h3 className="font-display text-yellow-pale mt-6 max-w-3xl text-5xl leading-tight sm:text-7xl">
            Results.
          </h3>
          <p className="text-cream/80 mt-8 max-w-2xl leading-relaxed">
            This project was built independently to show hiring clients what a
            VA can build, manage, and hand over — without being told what to do
            at every step. What started as a practice brand became a fully
            operational system — proof that the right VA doesn't just complete
            tasks, but builds the structure that makes everything run smoothly.
          </p>

          <div className="mt-14 flex flex-col">
            {results.map((r, i) => (
              <div
                key={r.t}
                className="grid gap-6 border-t border-gold/25 py-10 md:grid-cols-[auto_1fr_2fr] md:items-baseline md:gap-12"
              >
                <div className="font-display text-gold text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="font-display text-cream text-2xl sm:text-3xl">{r.t}</h4>
                <p className="text-cream/75 leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
