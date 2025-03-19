import Banner from "@/components/Banner";
import { ContactSection } from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HireExperts from "@/components/HireExperts";
import SectionComponent from "@/components/SectionComponent";
import ServiceCard from "@/components/ServiceCard";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import data from "@data/data.json";

const page = () => {
  return (
    <>
      <Header data={data.Header} />
      <Banner data={data.serviceBanner} />

      <SectionComponent data={data.sectiondataServices} />
      <ServiceCard data={data.businessData} />

      <SectionComponent data={data.sectiondataEcommerse} />
      <ServiceCard data={data.ecommersedata} />

      <SectionComponent data={data.sectiondataCms} />
      <ServiceCard data={data.cmsdata} />

      <SectionComponent data={data.sectionBigData} />
      <ServiceCard data={data.bigdata} />

      <SectionComponent data={data.sectiondataCloud} />
      <ServiceCard data={data.clouddata} />

      <SectionComponent data={data.sectiondataOdoo} />
      <ServiceCard data={data.odddata} />

      <SectionComponent data={data.sectiondataUser} />
      <ServiceCard data={data.userServicedata} />

      <ExpertiseSection data={data.ExpertiseSection} />
      <SocialMediaLinks data={data.socialMediaData} />

      <HireExperts data={data.hireExpert} />

      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
