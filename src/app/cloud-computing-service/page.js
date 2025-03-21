import Banner from "@/components/Banner";
import BusinessSections from "@/components/BusinessSection";
import CaliberSection from "@/components/CaliberSection";
import { ContactSection } from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import Header from "@/components/Header";
import HowWeDo from "@/components/HowWeDo";
import OthreBanner from "@/components/OtherBanner";
import { OurCulture } from "@/components/OurCulture";
import QuoteBanner from "@/components/QuoteBanner";
import SectionComponent from "@/components/SectionComponent";
import ServiceSlide from "@/components/ServiceSlide";
import TechnologiesSection from "@/components/TechnologiesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import data from "@data/data.json";

const page = () => {
  return (
    <>
      <Header data={data.Header} />
      <OthreBanner data={data.CloudBanner} />
      <TechnologiesSection data={data.technologiesCloudData} />
      <BusinessSections data={data.cloudSection} />
      <ServiceSlide data={data.cloudServiceData} />

      <WhyUsSection data={data.whyUsCloudData} />

      <GridSection data={data.cloudtechdata} />
      <QuoteBanner data={data.quoteBannerData} />
      <CaliberSection data={data.mobileCaliberData} />

      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
