import data from "@data/data.json";

import HomeBanner from "@/components/HomeBanner";
import StatsSection from "@/components/StatsSection";
import QuoteBanner from "@/components/QuoteBanner";
import BusinessSections from "@/components/BusinessSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import { ResearchSection } from "@/components/ResearchSection";
import { WhyUsSection } from "@/components/WhyUsSection";

export default function Home() {
  return (
    <main>
      <HomeBanner data={data.homeBanner} />
      <StatsSection data={data.StatsSection} />
      <QuoteBanner data={data.indexBanner} />
      <BusinessSections data={data.businessSection} />
      <ExpertiseSection data={data.ExpertiseSection} />
      <ResearchSection data={data.ResearchData} />
      <WhyUsSection data={data.whyUsData} />
    </main>
  );
}
