import Banner from "@/components/Banner";
import BusinessSections from "@/components/BusinessSection";
import { ContactSection } from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import Header from "@/components/Header";
import HowWeDo from "@/components/HowWeDo";
import OdooThemesSection from "@/components/OdooThemesSection";
import OthreBanner from "@/components/OtherBanner";
import { OurCulture } from "@/components/OurCulture";
import SectionComponent from "@/components/SectionComponent";
import ServiceSlide from "@/components/ServiceSlide";
import TechnologiesSection from "@/components/TechnologiesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import data from "@data/data.json";

const page = () => {
  return (
    <>
      <Header data={data.Header} />
      <OthreBanner data={data.ecommerseBanner} />
      <TechnologiesSection data={data.technologieEcommerse} />
      <BusinessSections data={data.ecommerseSection} />
      <ServiceSlide data={data.ecommerseServiceData} />
      <OdooThemesSection data={data.odooThemedata} />
      <GridSection data={data.eCommerceWebsiteData} />
      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
