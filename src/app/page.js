import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import StatsSection from "@/components/StatsSection";
import QuoteBanner from "@/components/QuoteBanner";
import BusinessSections from "@/components/BusinessSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import { ResearchSection } from "@/components/ResearchSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import data from "@data/data.json";

export default function Home() {
  const sections = [
    { Component: HomeBanner, data: data.homeBanner },
    { Component: StatsSection, data: data.StatsSection },
    { Component: QuoteBanner, data: data.indexBanner },
    { Component: BusinessSections, data: data.businessSection },
    { Component: ExpertiseSection, data: data.ExpertiseSection },
    { Component: ResearchSection, data: data.ResearchData },
    { Component: WhyUsSection, data: data.whyUsData },
    { Component: ContactSection, data: data.contactdata },
  ];

  return (
    <main>
      <Header data={data.Header} />
      {sections.map(({ Component, data }, index) => (
        <Component key={index} data={data} />
      ))}
      <Footer data={data.footer} />
    </main>
  );
}
