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
import QuoteBanner from "@/components/QuoteBanner";
import SectionComponent from "@/components/SectionComponent";
import ServiceCard from "@/components/ServiceCard";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import TechnologiesSection from "@/components/TechnologiesSection";
import WhyUs from "@/components/WhyUs";
import { WhyUsSection } from "@/components/WhyUsSection";
import data from "@data/data.json";

const page = () => {
  return (
    <>
      <Header data={data.Header} />
      <OthreBanner data={data.seoBanner} />
      <TechnologiesSection data={data.technologiesSeoData} />
      <ServiceCard data={data.seoDomainData} />

      <QuoteBanner data={data.quoteSeoBanner} />
      <GridSection data={data.seoGridData} />
      <TechnologiesSection data={data.technologiesSeoMarketingData} />
      <TechnologiesSection data={data.seoIosData} />
      <SocialMediaLinks data={data.socialMediaData} />
      <WhyUs data={data.WhyUsSeoData} />
      <CaliberSection data={data.seoCaliberData} />
      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
