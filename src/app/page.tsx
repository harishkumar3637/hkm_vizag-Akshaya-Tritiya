import { BenefitsSection } from "@/components/sections/benefits-section";
import { DonorList } from "@/components/sections/donor-list";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { SevaGrid } from "@/components/sections/seva-grid";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fffaf2_0%,#fff3df_42%,#fff8ef_100%)]">
      <HeroSection />
      <BenefitsSection />
      <SevaGrid />
      <ImpactSection />
      <DonorList />
      <Footer />
    </main>
  );
}
