"use client";
import Banner from "@/components/Banner";
import { ContactSection } from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import Header from "@/components/Header";
import HireExperts from "@/components/HireExperts";
import HowWeDo from "@/components/HowWeDo";
import OthreBanner from "@/components/OtherBanner";
import { OurCulture } from "@/components/OurCulture";
import SectionComponent from "@/components/SectionComponent";
import ServiceCard from "@/components/ServiceCard";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import TechnologiesSection from "@/components/TechnologiesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import data from "@data/data.json";
import { usePathname } from "next/navigation";

const page = () => {
  const path = usePathname();

  return (
    <>
      <Header data={data.Header} />
      <OthreBanner data={data.mobileAppBanner} />
      <TechnologiesSection data={data.mobileappbanner} path={path} />
      <ServiceCard data={data.businessData} path={path} />
      <TechnologiesSection data={data.iosData} path={path} />
      <TechnologiesSection data={data.appData} path={path} />
      <SocialMediaLinks data={data.socialMediaData} />

      <HireExperts data={data.hireExpert} />

      <GridSection data={data.specializedDevelopers} path={path} />
      <ContactSection data={data.contactdata} />
      <Footer data={data.footer} />
    </>
  );
};

export default page;
