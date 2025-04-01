import Banner from "../../components/Banner";
import BusinessSections from "../../components/BusinessSection";
import CaliberSection from "../../components/CaliberSection";
import ContactPageSection from "../../components/ContactPageSection";
import ExpertiseSection from "../../components/ExpertiseSection";
import GridSection from "../../components/GridSection";
import HireExperts from "../../components/HireExperts";
import HowWeDo from "../../components/HowWeDo";
import MultiPurposeOdooTheme from "../../components/MultiPurposeOdooTheme";
import OdooThemeSlide from "../../components/OdooThemeSlide";
import OdooThemesSection from "../../components/OdooThemesSection";
import OthreBanner from "../../components/OtherBanner";
import OurCulture from "../../components/OurCulture";
import ProcessSection from "../../components/ProcessSection";
import QuoteBanner from "../../components/QuoteBanner";
import SectionComponent from "../../components/SectionComponent";
import ServiceCard from "../../components/ServiceCard";
import Services from "../../components/Services";
import ServiceSlide from "../../components/ServiceSlide";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import SupportSection from "../../components/SupportSection";
import Technologies from "../../components/Technologies";
import TechnologiesSection from "../../components/TechnologiesSection";
import WhyUs from "../../components/WhyUs";
import WhyUsSection from "../../components/WhyUsSection";
import data from "../../data/data.json";
import { notFound } from "next/navigation";

// Page configurations
const pageConfigurations = {
  about: {
    metadata: {
      title: "About - Aranv",
      description:
        "Overview of Aranv Consultancy, including how they operate, their expertise, unique selling points, and company culture.",
    },
    components: [
      { Component: Banner, dataKey: "aboutBanner" },
      { Component: SectionComponent, dataKey: "sectionDataAbout" },
      { Component: HowWeDo, dataKey: "howWeDoData" },
      { Component: ExpertiseSection, dataKey: "expertiseSectionAbout" },
      { Component: WhyUsSection, dataKey: "whyUsDataAbout" },
      { Component: OurCulture, dataKey: "ourCulture" },
    ],
  },
  "Business-Intelligence": {
    metadata: {
      title: "Business Intelligence - Aranv",
      description:
        "Data-driven solutions with BI tools like Power BI and Tableau.",
    },
    components: [
      { Component: OthreBanner, dataKey: "businessIntelligenceBanner" },
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
    metadata: {
      title: "Cloud Solutions - Aranv",
      description: "cloud-computing-service",
    },
    components: [
      { Component: OthreBanner, dataKey: "cloudBanner" },
      { Component: TechnologiesSection, dataKey: "technologiesCloudData" },
      { Component: BusinessSections, dataKey: "cloudSection" },
      { Component: ServiceSlide, dataKey: "cloudServiceData" },
      { Component: GridSection, dataKey: "cloudTechdata" },
      { Component: QuoteBanner, dataKey: "quoteBannerData" },
      { Component: WhyUsSection, dataKey: "whyUsCloudData" },
      { Component: CaliberSection, dataKey: "mobileCaliberData" },
    ],
  },
  contact: {
    metadata: {
      title: "Contact - Aranv",
      description: "contact",
    },
    components: [
      { Component: Banner, dataKey: "contactBanner" },
      { Component: ContactPageSection, dataKey: "contactPageData" },
      { Component: SupportSection, dataKey: "supportData" },
    ],
  },
  "content-management-system": {
    metadata: {
      title: "CMS Development - Aranv",
      description: "content-management-system",
    },
    components: [
      { Component: OthreBanner, dataKey: "contentManagementBanner" },
      { Component: TechnologiesSection, dataKey: "technologiesCMSData" },
      { Component: ServiceCard, dataKey: "cmsDomainData" },
      { Component: TechnologiesSection, dataKey: "technologiesAranvCmsData" },
      { Component: TechnologiesSection, dataKey: "technologiesCmsData" },
      { Component: GridSection, dataKey: "cmsGridData" },
      { Component: CaliberSection, dataKey: "cmsCaliberData" },
    ],
  },
  "ecommerce-development": {
    metadata: {
      title: "E-commerce - Aranv",
      description: "ecommerce-development.",
    },
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
    metadata: {
      title: "Seo And Digital Marketing - Aranv",
      description: "marketing-strategy-consultants.",
    },
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
      { Component: WhyUs, dataKey: "whyUsSeoData" },
      { Component: CaliberSection, dataKey: "seoCaliberData" },
    ],
  },
  "mobile-app-development": {
    metadata: {
      title: "Mobile app Development - Aranv",
      description: "mobile-app-development.",
    },
    components: [
      { Component: OthreBanner, dataKey: "mobileAppBanner" },
      { Component: TechnologiesSection, dataKey: "mobileAppTechbanner" },
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
    metadata: {
      title: "Odoo - Aranv",
      description: "odoo-development.",
    },
    components: [
      { Component: OthreBanner, dataKey: "odooBanner" },
      { Component: TechnologiesSection, dataKey: "technologiesOdooData" },
      { Component: ServiceCard, dataKey: "odooServicesData" },
      { Component: TechnologiesSection, dataKey: "technologiesOdooErpData" },
      { Component: GridSection, dataKey: "odooDevelopmentGridData" },
      {
        Component: MultiPurposeOdooTheme,
        dataKey: "multipurposeOdooThemedata",
      },
      { Component: OdooThemeSlide, dataKey: "odooThemeData" },
      { Component: SocialMediaLinks, dataKey: "socialMediaData" },
      { Component: HireExperts, dataKey: "hireOdooExpert" },
      { Component: WhyUs, dataKey: "whyOdooData" },
      { Component: CaliberSection, dataKey: "seoCaliberData" },
    ],
  },
  services: {
    metadata: {
      title: "Services - Aranv",
      description: "odoo-development",
    },
    components: [
      { Component: Banner, dataKey: "serviceBanner" },
      { Component: SectionComponent, dataKey: "sectionDataServices" },
      { Component: ServiceCard, dataKey: "businessData" },
      { Component: SectionComponent, dataKey: "sectionDataEcommerse" },
      { Component: ServiceCard, dataKey: "ecommerseData" },
      { Component: SectionComponent, dataKey: "sectionDataCms" },
      { Component: ServiceCard, dataKey: "cmsData" },
      { Component: SectionComponent, dataKey: "sectionBigData" },
      { Component: ServiceCard, dataKey: "bigData" },
      { Component: SectionComponent, dataKey: "sectionDataCloud" },
      { Component: ServiceCard, dataKey: "cloudData" },
      { Component: SectionComponent, dataKey: "sectionDataOdoo" },
      { Component: ServiceCard, dataKey: "odooData" },
      { Component: SectionComponent, dataKey: "sectionDataUser" },
      { Component: ServiceCard, dataKey: "userServiceData" },
      { Component: ExpertiseSection, dataKey: "expertiseSection" },
      { Component: SocialMediaLinks, dataKey: "socialMediaData" },
      { Component: HireExperts, dataKey: "hireExpert" },
    ],
  },
  technologies: {
    metadata: {
      title: "Technologies - Aranv",
      description: "technologies.",
    },
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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageConfig = pageConfigurations[slug];

  if (!pageConfig) {
    return {
      title: "Page Not Found - Aranv Consultancy",
      description: "The page you are looking for does not exist.",
    };
  }

  console.log("pageConfig.title ", pageConfig.metadata.title);

  return {
    title: pageConfig.metadata.title || "Aranv Consultancy",
    description:
      pageConfig.metadata.description || "Explore our services and expertise.",
    openGraph: {
      title: pageConfig.metadata.title || "Aranv Consultancy",
      description:
        pageConfig.metadata.description ||
        "Explore our services and expertise.",
      url: `https://yourwebsite.com/${slug}`,
      type: "website",
    },
  };
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const pageConfig = pageConfigurations[slug];

  console.log("pageConfig", pageConfig);

  if (!pageConfig) {
    return notFound();
  }

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
