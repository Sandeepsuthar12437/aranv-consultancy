import Banner from "@/components/Banner";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HireExperts from "@/components/HireExperts";
import Services from "@/components/Services";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Technologies from "@/components/Technologies";
import TechnologiesSection from "@/components/TechnologiesSection";
import data from "@data/data.json";

const page = () => {
  return (
    <div>
      <Header data={data.Header} />
      <Banner data={data.technologiesBanner} />
      <Technologies data={data.technologies} />
      <TechnologiesSection data={data.technologieReactNative} />
      <Services data={data.reeactNativeServices} />

      <TechnologiesSection data={data.technologieReact} />
      <Services data={data.reeactServices} />

      <TechnologiesSection data={data.technologieAngularjs} />
      <Services data={data.angularServices} />

      <TechnologiesSection data={data.technologieNodejs} />
      <Services data={data.nodejsServices} />

      <SocialMediaLinks data={data.socialMediaData} />

      <HireExperts data={data.hireExpert} />

      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </div>
  );
};

export default page;
