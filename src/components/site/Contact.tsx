import { SectionLabel } from "./SectionLabel";
import { Mail, Linkedin, Download } from "lucide-react";

const rows = [
  { label: "Name", value: "Stephanie Anne Corpuz" },
  { label: "Role", value: "Virtual Assistant" },
  {
    label: "Email",
    value: "corpuzstephanieanne.va@gmail.com",
    href: "mailto:corpuzstephanieanne.va@gmail.com",
  },
  { label: "Phone", value: "+63 920 913 2219", href: "tel:+639209132219" },
  {
    label: "LinkedIn",
    value: "CorpuzStephanieAnne",
    href: "https://www.linkedin.com/in/CorpuzStephanieAnne",
  },
  { label: "Website", value: "Coming soon" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-chocolate text-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Let's Connect</SectionLabel>

        <h2 className="font-display text-yellow-pale mt-8 max-w-4xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Looking for a VA who builds systems, not just to-do lists?
        </h2>
        <p className="font-display text-cream/90 mt-8 text-3xl italic sm:text-4xl">Let's talk.</p>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col">
            {rows.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-t border-gold/25 py-5 sm:grid-cols-[9rem_1fr]"
              >
                <div className="text-gold text-[0.7rem] tracking-[0.22em] uppercase">{r.label}</div>
                {r.href ? (
                  <a
                    href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-display text-cream hover:text-yellow-pale break-all text-lg sm:text-xl"
                  >
                    {r.value}
                  </a>
                ) : (
                  <div className="font-display text-cream text-lg sm:text-xl">{r.value}</div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:items-end lg:justify-end">
            <a
              href="mailto:corpuzstephanieanne.va@gmail.com"
              className="bg-yellow-pale text-chocolate inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/CorpuzStephanieAnne"
              target="_blank"
              rel="noopener noreferrer"
              className="border-gold/60 text-cream hover:bg-gold/10 inline-flex items-center justify-center gap-3 border px-7 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-colors"
            >
              <Linkedin className="h-4 w-4" /> View LinkedIn
            </a>
            <a
              href="/portfolio.pdf"
              download="Corpuz_StephanieAnne_VAPortfolio.pdf"
              className="border-gold/60 text-cream hover:bg-gold/10 inline-flex items-center justify-center gap-3 border px-7 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-colors"
            >
              <Download className="h-4 w-4" /> Download Portfolio
            </a>
            <p className="text-cream/50 mt-2 max-w-xs text-xs leading-relaxed lg:text-right">
              Click to download my portfolio PDF.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
