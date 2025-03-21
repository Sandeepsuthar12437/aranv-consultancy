import Banner from "@/components/Banner";
import CaliberSection from "@/components/CaliberSection";
import { ContactSection } from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import Header from "@/components/Header";
import HowWeDo from "@/components/HowWeDo";
import OthreBanner from "@/components/OtherBanner";
import { OurCulture } from "@/components/OurCulture";
import SectionComponent from "@/components/SectionComponent";
import ServiceCard from "@/components/ServiceCard";
import TechnologiesSection from "@/components/TechnologiesSection";
import WhyUs from "@/components/WhyUs";
import { WhyUsSection } from "@/components/WhyUsSection";
import data from "@data/data.json";

const page = () => {
  return (
    <>
      <Header data={data.Header} />
      <OthreBanner data={data.ContentManagementBanner} />
      <TechnologiesSection data={data.technologiesCMSData} />
      <ServiceCard data={data.cmsDomainData} />
      <TechnologiesSection data={data.technologiesAranvCmsData} />

      <TechnologiesSection data={data.technologiesCmsData} />
      <GridSection data={data.cmsGridData} />

      <CaliberSection data={data.cmsCaliberData} />

      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
