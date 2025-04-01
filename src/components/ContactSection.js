import Link from "next/link";

const ContactSection = ({ data }) => {
  return (
    <section className="overflow-hidden min-h-fit md:relative md:min-h-[500px] xl:min-h-[760px]">
      <div
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
        className="w-full static bg-no-repeat bg-cover md:absolute md:h-full md:w-[60%] md:bg_right_center xl:bg-right-top"
      ></div>
      <div className="container !px-0 md:!px-[15px] md:relative md:min-h-[inherit]">
        <div className="w-full pt-[30px] px-7 pb-5 bg-[#ef4036] text-white bottom-0 md:absolute md:w-[375px] md:right-[5%] md:p-10 lg:p-10 xl:w-[570px] xl:px-[87px] xl:pb-[74px] xl:pt-[86px] xl:right-0 md:after:content-[''] md:after:absolute md:after:bg-gray-100 md:after:w-[600%] md:after:h-full md:after:left-full md:after:top-0 md:after:-z-10">
          <h4 className="text-[18px] mb-[15px] tracking-[0.1px] lg:mb-5 xl:mb-[70px]">
            Get in Touch
          </h4>
          <strong className="block text-[26px] leading-[normal] mb-[22px] md:mb-[33px] md:text-[28px] xl:text-[40px]">
            {data.address}
          </strong>
          <div className="mb-6 pb-0.5 border-b border-[#f7a09b] text-[20px] font-medium">
            <label className="mr-[5px]">Call:</label>
            <Link
              href="tel:(347)460-9278‬"
              className="!bg-none !bg-clip-border !text-white"
            >
              {data.phone}
            </Link>
          </div>
          <div className="mb-6 pb-0.5 border-b border-[#f7a09b] text-[20px]">
            <label className="mr-[5px]">Skype:</label>
            <Link
              href="skype:sales.aranv?chat"
              className="!bg-none !bg-clip-border !text-white"
            >
              {data.skype}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
