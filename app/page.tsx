// app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { ProductStory } from "@/components/sections/ProductStory";
import { ArchitectureFlow } from "@/components/sections/ArchitectureFlow";
import { Company } from "@/components/sections/Company";
import { Portals } from "@/components/sections/Portals";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-primary/30 selection:text-[#1A1A2E]">
      <Hero />
      <ProductStory />
      <ArchitectureFlow />
      <Company />
      <Portals />
      <Contact />
      <Footer />
    </div>
  );
}