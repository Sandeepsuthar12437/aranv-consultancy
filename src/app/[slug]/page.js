// import BusinessSections from "@/components/BusinessSection";
// import ExpertiseSection from "@/components/ExpertiseSection";

// import HomeBanner from "@/components/HomeBanner";
// import QuoteBanner from "@/components/QuoteBanner";
// import { ResearchSection } from "@/components/ResearchSection";
// import StatsSection from "@/components/StatsSection";
// import { WhyUsSection } from "@/components/WhyUsSection";
// import data from "@data/data.json";

// export default function Home({ params }) {
//   const { slug } = params;
//   console.log("slug", slug);

//   return (
//     <main>
//       <HomeBanner data={data.homeBanner} />
//       <StatsSection data={data.StatsSection} />
//       <QuoteBanner data={data.indexBanner} />
//       <BusinessSections data={data.businessSection} />
//       <ExpertiseSection data={data.ExpertiseSection} />
//       <ResearchSection data={data.ResearchData} />
//       <WhyUsSection data={data.whyUsData} />
//     </main>
//   );
// }

// export async function generateStaticParams() {
//   return Object.keys(data).map((slug) => ({ slug }));
// }

// app/[slug]/page.tsx

import data from "@data/data.json";

// Home page components
import BusinessSections from "@/components/BusinessSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import HomeBanner from "@/components/HomeBanner";
import QuoteBanner from "@/components/QuoteBanner";
import { ResearchSection } from "@/components/ResearchSection";
import StatsSection from "@/components/StatsSection";
import { WhyUsSection } from "@/components/WhyUsSection";

// About page components
import Banner from "@/components/Banner";
import { ContactSection } from "@/components/ContactSection";
import HowWeDo from "@/components/HowWeDo";
import { OurCulture } from "@/components/OurCulture";
import SectionComponent from "@/components/SectionComponent";

// Business Intelligence page components
import CaliberSection from "@/components/CaliberSection";
import GridSection from "@/components/GridSection";
import OthreBanner from "@/components/OtherBanner";
import ServiceCard from "@/components/ServiceCard";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import TechnologiesSection from "@/components/TechnologiesSection";

import ServiceSlide from "@/components/ServiceSlide";
import { ContactPageSection } from "@/components/ContactPageSection";
import SupportSection from "@/components/SupportSection";
import WhyUs from "@/components/WhyUs";
import HireExperts from "@/components/HireExperts";
import ProcessSection from "@/components/ProcessSection";
import MultiPurposeOdooTheme from "@/components/MultiPurposeOdooTheme";
import OdooThemeSlide from "@/components/OdooThemeSlide";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import OdooThemesSection from "@/components/OdooThemesSection";

// Page configurations
const pageConfigurations = {
  index: {
    components: [
      { Component: HomeBanner, dataKey: "homeBanner" },
      { Component: StatsSection, dataKey: "StatsSection" },
      { Component: QuoteBanner, dataKey: "indexBanner" },
      { Component: BusinessSections, dataKey: "businessSection" },
      { Component: ExpertiseSection, dataKey: "ExpertiseSection" },
      { Component: ResearchSection, dataKey: "ResearchData" },
      { Component: WhyUsSection, dataKey: "whyUsData" },
    ],
  },
  about: {
    components: [
      { Component: Banner, dataKey: "aboutBanner" },
      { Component: SectionComponent, dataKey: "sectiondataAbout" },
      { Component: HowWeDo, dataKey: "howWeDoData" },
      { Component: ExpertiseSection, dataKey: "ExpertiseSectionAbout" },
      { Component: WhyUsSection, dataKey: "whyUsDataAbout" },
      { Component: OurCulture, dataKey: "OurCulture" },
    ],
  },
  "business-intengence": {
    components: [
      { Component: OthreBanner, dataKey: "BusinessIntelligenceBanner" },
      { Component: TechnologiesSection, dataKey: "technologiesCMSData" },
      { Component: ServiceCard, dataKey: "biData" },
      { Component: QuoteBanner, dataKey: "quoteBannerBiData" },
      { Component: GridSection, dataKey: "biGridData" },
      { Component: TechnologiesSection, dataKey: "technologiePowerBi" },
      { Component: TechnologiesSection, dataKey: "technologieTableau" },
      { Component: TechnologiesSection, dataKey: "technologieElasticResearch" },
      { Component: SocialMediaLinks, dataKey: "socialMediaData" },
      { Component: CaliberSection, dataKey: "biCaliberData" },
    ],
  },
  "cloud-computing-service": {
    components: [
      { Component: OthreBanner, dataKey: "CloudBanner" },
      { Component: TechnologiesSection, dataKey: "technologiesCloudData" },
      { Component: BusinessSections, dataKey: "cloudSection" },
      { Component: ServiceSlide, dataKey: "cloudServiceData" },
      { Component: WhyUsSection, dataKey: "whyUsCloudData" },
      { Component: GridSection, dataKey: "cloudtechdata" },
      { Component: QuoteBanner, dataKey: "quoteBannerData" },
      { Component: CaliberSection, dataKey: "mobileCaliberData" },
    ],
  },
  contact: {
    components: [
      { Component: Banner, dataKey: "contactBanner" },
      { Component: ContactPageSection, dataKey: "contactPagedata" },
      { Component: SupportSection, dataKey: "supportdata" },
    ],
  },
  "content-management-system": {
    components: [
      { Component: OthreBanner, dataKey: "ContentManagementBanner" },
      { Component: TechnologiesSection, dataKey: "technologiesCMSData" },
      { Component: ServiceCard, dataKey: "cmsDomainData" },
      { Component: TechnologiesSection, dataKey: "technologiesAranvCmsData" },
      { Component: TechnologiesSection, dataKey: "technologiesCmsData" },
      { Component: GridSection, dataKey: "cmsGridData" },
      { Component: CaliberSection, dataKey: "cmsCaliberData" },
    ],
  },
  "ecommerce-development": {
    components: [
      { Component: OthreBanner, dataKey: "ecommerseBanner" },
      { Component: TechnologiesSection, dataKey: "technologieEcommerse" },
      { Component: BusinessSections, dataKey: "ecommerseSection" },
      { Component: ServiceSlide, dataKey: "ecommerseServiceData" },
      { Component: OdooThemesSection, dataKey: "odooThemedata" },
      { Component: GridSection, dataKey: "eCommerceWebsiteData" },
    ],
  },
  "marketing-strategy-consultants": {
    components: [
      { Component: OthreBanner, dataKey: "seoBanner" },
      { Component: TechnologiesSection, dataKey: "technologiesSeoData" },
      { Component: ServiceCard, dataKey: "seoDomainData" },
      { Component: QuoteBanner, dataKey: "quoteSeoBanner" },
      { Component: GridSection, dataKey: "seoGridData" },
      {
        Component: TechnologiesSection,
        dataKey: "technologiesSeoMarketingData",
      },

      { Component: TechnologiesSection, dataKey: "seoIosData" },

      { Component: SocialMediaLinks, dataKey: "socialMediaData" },

      { Component: WhyUs, dataKey: "WhyUsSeoData" },
      { Component: CaliberSection, dataKey: "seoCaliberData" },
    ],
  },
  "mobile-app-development": {
    components: [
      { Component: OthreBanner, dataKey: "mobileAppBanner" },
      { Component: TechnologiesSection, dataKey: "mobileappbanner" },
      { Component: ServiceCard, dataKey: "businessData" },
      { Component: TechnologiesSection, dataKey: "iosData" },
      { Component: TechnologiesSection, dataKey: "appData" },
      { Component: SocialMediaLinks, dataKey: "socialMediaData" },
      { Component: GridSection, dataKey: "specializedDevelopers" },
      { Component: HireExperts, dataKey: "hireMobileExpert" },
      { Component: ProcessSection, dataKey: "processSectionData" },
      { Component: WhyUs, dataKey: "WhyUsData" },
      { Component: CaliberSection, dataKey: "mobileCaliberData" },
    ],
  },

  "odoo-development": {
    components: [
      { Component: OthreBanner, dataKey: "odooBanner" },
      { Component: TechnologiesSection, dataKey: "technologiesOdooData" },
      { Component: ServiceCard, dataKey: "odooData" },
      { Component: TechnologiesSection, dataKey: "technologiesOdooErpData" },
      { Component: GridSection, dataKey: "odooDevelopmentGridData" },
      {
        Component: MultiPurposeOdooTheme,
        dataKey: "multipurposeOdooThemedata",
      },
      { Component: OdooThemeSlide, dataKey: "odooThemeData" },
      { Component: SocialMediaLinks, dataKey: "socialMediaData" },
      { Component: HireExperts, dataKey: "hireOdooExpert" },
    ],
  },
  services: {
    components: [
      { Component: Banner, dataKey: "serviceBanner" },
      { Component: SectionComponent, dataKey: "sectiondataServices" },
      { Component: ServiceCard, dataKey: "businessData" },
      { Component: SectionComponent, dataKey: "sectiondataEcommerse" },
      { Component: ServiceCard, dataKey: "ecommersedata" },
      { Component: SectionComponent, dataKey: "sectiondataCms" },
      { Component: ServiceCard, dataKey: "cmsdata" },
      { Component: SectionComponent, dataKey: "sectionBigData" },
      { Component: ServiceCard, dataKey: "bigdata" },
      { Component: SectionComponent, dataKey: "sectiondataCloud" },
      { Component: ServiceCard, dataKey: "clouddata" },
      { Component: SectionComponent, dataKey: "sectiondataOdoo" },
      { Component: ServiceCard, dataKey: "odddata" },
      { Component: SectionComponent, dataKey: "sectiondataUser" },
      { Component: ServiceCard, dataKey: "userServicedata" },
      { Component: ExpertiseSection, dataKey: "ExpertiseSection" },
      { Component: SocialMediaLinks, dataKey: "socialMediaData" },
      { Component: HireExperts, dataKey: "hireExpert" },
    ],
  },
  technologies: {
    components: [
      { Component: Banner, dataKey: "technologiesBanner" },
      { Component: Technologies, dataKey: "technologies" },
      { Component: TechnologiesSection, dataKey: "technologieReactNative" },
      { Component: Services, dataKey: "reeactNativeServices" },
      { Component: TechnologiesSection, dataKey: "technologieReact" },
      { Component: Services, dataKey: "reeactServices" },
      { Component: TechnologiesSection, dataKey: "technologieAngularjs" },
      { Component: Services, dataKey: "angularServices" },
      { Component: TechnologiesSection, dataKey: "technologieNodejs" },
      { Component: Services, dataKey: "nodejsServices" },
      { Component: SocialMediaLinks, dataKey: "socialMediaData" },
      { Component: HireExperts, dataKey: "hireTechExpert" },
    ],
  },
};

export default function DynamicPage({ params }) {
  const { slug } = params;
  const pageConfig = pageConfigurations[slug] || pageConfigurations[""];

  console.log("slug", slug);

  return (
    <main>
      {pageConfig.components.map(({ Component, dataKey }, index) => (
        <Component key={index} data={data[dataKey]} />
      ))}
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(pageConfigurations).map((slug) => ({ slug }));
}
