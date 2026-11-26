import { AiEditing } from "@/components/sections/ai-editing";
import { DownloadCta } from "@/components/sections/download-cta";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { ContactBand } from "@/components/sections/contact-band";
import { Hero } from "@/components/sections/hero";
import { RecordAndLive } from "@/components/sections/record-and-live";
import { StatsStrip } from "@/components/sections/stats-strip";
import { UseCases } from "@/components/sections/use-cases";
import { SupportProject } from "@/components/sections/support-project";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AiEditing />
      <FeatureShowcase />
      <RecordAndLive />
      <UseCases />
      <DownloadCta />
      <ContactBand />
      <SupportProject />
    </>
  );
}
