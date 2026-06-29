import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WhatIDo } from "@/components/site/WhatIDo";
import { Skills } from "@/components/site/Skills";
import { ProjectsOverview } from "@/components/site/ProjectsOverview";
import { ProjectLaVenne } from "@/components/site/ProjectLaVenne";
import { ProjectDeCocatris } from "@/components/site/ProjectDeCocatris";
import { ProjectTheVillage } from "@/components/site/ProjectTheVillage";
import { ProjectAuraCrystals } from "@/components/site/ProjectAuraCrystals";
import { Lumera } from "@/components/site/Lumera";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stephanie Anne Corpuz — Virtual Assistant Portfolio" },
      {
        name: "description",
        content:
          "Content, calendars, and chaos — handled. Social media, systems, and operations support for small businesses across beauty, hospitality, and e-commerce.",
      },
      {
        property: "og:title",
        content: "Stephanie Anne Corpuz — Virtual Assistant Portfolio",
      },
      {
        property: "og:description",
        content:
          "A warm editorial portfolio showcasing brand, content, CRM, and operations work by VA Stephanie Anne Corpuz.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-cream min-h-screen">
      <Nav />
      <main>
        <Hero />
        <WhatIDo />
        <Skills />
        <ProjectsOverview />
        <ProjectLaVenne />
        <ProjectDeCocatris />
        <ProjectTheVillage />
        <ProjectAuraCrystals />
        <Lumera />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
