"use client";
import CaliberSection from "@/components/CaliberSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import Header from "@/components/Header";
import HireExperts from "@/components/HireExperts";
import OthreBanner from "@/components/OtherBanner";
import ProcessSection from "@/components/ProcessSection";
import ServiceCard from "@/components/ServiceCard";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import TechnologiesSection from "@/components/TechnologiesSection";
import WhyUs from "@/components/WhyUs";
import data from "@data/data.json";

const page = () => {
  return (
    <>
      <Header data={data.Header} />
      <OthreBanner data={data.mobileAppBanner} />
      <TechnologiesSection data={data.mobileappbanner} />
      <ServiceCard data={data.businessData} />
      <TechnologiesSection data={data.iosData} />
      <TechnologiesSection data={data.appData} />
      <SocialMediaLinks data={data.socialMediaData} />
      <GridSection data={data.specializedDevelopers} />
      <HireExperts data={data.hireExpert} />
      <ProcessSection data={data.processSectionData} />
      <WhyUs data={data.WhyUsData} />
      <CaliberSection data={data.mobileCaliberData} />
      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
