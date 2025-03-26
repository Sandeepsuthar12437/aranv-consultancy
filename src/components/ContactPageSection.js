import Image from "next/image";
import ContactForm from "./ContactForm";

export const ContactPageSection = ({ data }) => {
  return (
    <section className="pt-6 md:pt-[69px] pb-8 md:pb-[89px]">
      <div className="max-w-[1200px] px-[15px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="py-8 lg:pr-16 xl:pr-44 flex flex-col justify-center mx-auto lg:mx-0 max-w-[585px] text-center lg:text-left">
          <Image
            src="/images/aranv-large-icon.png"
            alt=""
            className="mb-14 w-[135px] mx-auto lg:mx-0 h-[135px]"
            width={200}
            height={200}
          />
          <h2 className="text-2xl md:text-[40px] font-bold md:leading-[48px] mb-4 md:mb-16">
            We will be delighted to offer you the desired solutions
          </h2>
          <div className="mb-6 border-b border-red-500 text-[18px] pb-2">
            <label className="text-xl mr-1 text-red-500">Call:</label>
            <a href={`tel:${data.phone}`} className="text-red-500 text-xl">
              {data.phone}
            </a>
          </div>
          <div className="mb-6 border-b border-red-500 text-[18px] pb-2">
            <label className="mr-1 text-xl text-red-500">Email:</label>
            <a href={`mailto:${data.email}`} className="text-red-500 text-xl">
              {data.email}
            </a>
          </div>
          <div className="mb-6 border-b border-red-500 text-[18px] pb-2">
            <label className="mr-1 text-red-500 text-xl">Skype:</label>
            <a
              href={`skype:${data.skype}?chat`}
              className="text-red-500 text-xl"
            >
              {data.skype}
            </a>
          </div>
        </div>
        <ContactForm services={data.services} />
      </div>
    </section>
  );
};
