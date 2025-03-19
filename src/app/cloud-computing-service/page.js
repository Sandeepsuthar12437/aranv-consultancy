import Banner from "@/components/Banner";
import { ContactSection } from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowWeDo from "@/components/HowWeDo";
import OthreBanner from "@/components/OtherBanner";
import { OurCulture } from "@/components/OurCulture";
import SectionComponent from "@/components/SectionComponent";
import { WhyUsSection } from "@/components/WhyUsSection";
import data from "@data/data.json";

const page = () => {
  return (
    <>
      <Header data={data.Header} />
      <OthreBanner data={data.CloudBanner} />
      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
