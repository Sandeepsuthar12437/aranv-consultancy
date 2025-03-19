import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HireExperts from "@/components/HireExperts";
import data from "@data/data.json";

const page = () => {
  return (
    <>
      <Header data={data.Header} />
      <HireExperts data={data.hireExpert} />

      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
