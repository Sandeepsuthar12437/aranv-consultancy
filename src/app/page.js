import BusinessSections from "@/components/BusinessSection";
import { ContactSection } from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import QuoteBanner from "@/components/QuoteBanner";
import { ResearchSection } from "@/components/ResearchSection";
import StatsSection from "@/components/StatsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import data from "@data/data.json";

export default function Home() {
  return (
    <div>
      <Header data={data.Header} />
      <HomeBanner data={data.homeBanner} />
      <StatsSection data={data.StatsSection} />
      <QuoteBanner data={data.indexBanner} />
      <BusinessSections data={data.businessSection} />
      <ExpertiseSection data={data.ExpertiseSection} />
      <ResearchSection data={data.ResearchData} />
      <WhyUsSection data={data.whyUsData} />
      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </div>
  );
}
