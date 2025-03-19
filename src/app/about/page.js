import Banner from "@/components/Banner";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionComponent from "@/components/SectionComponent";
import { WhyUsSection } from "@/components/WhyUsSection";
import data from "@data/data.json";

const page = () => {
  return (
    <>
      <Header data={data.Header} />
      <Banner data={data.aboutBanner} />
      <SectionComponent data={data.sectiondataAbout} />
      <WhyUsSection data={data.whyUsDataAbout} />
      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
