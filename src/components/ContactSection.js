import Link from "next/link";
import React from "react";

export const ContactSection = ({ data }) => {
  console.log("data", data);

  return (
    <section>
      <div className="min-h-[439px] lg:min-h-[760px] md:relative">
        <div
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
          }}
          className="h-[439px] lg:h-[760px] w-full md:w-[60%] bg-no-repeat bg-cover"
        ></div>
        <div className="max-w-[1200px] mx-auto px-0 md:px-[15px] md:relative">
          <div className="w-full md:w-[400px] lg:w-[570px] lg:h-[477px] xl:h-[595px] p-8 md:p-10 lg:pt-[86px] lg:pr-[87px] lg:pb-[74px] lg:pl-[87px] bg-red-500 text-white md:absolute bottom-0 right-0 2xl:after:content-[''] 2xl:after:absolute 2xl:after:bg-gray-100 2xl:after:w-[61%] 2xl:after:h-full 2xl:after:left-full 2xl:after:top-0 2xl:after:-z-10">
            <h4 className="text-[18px] mb-7 lg:mb-[70px]">Get in Touch</h4>
            <strong className="block mt-2 text-[28px] mb-4 lg:mb-[32px]">
              {data.address}
            </strong>
            <div className="mb-6 border-b border-[#f7a09b] text-[18px]">
              <label className="font-semibold">Call:</label>
              <Link href="tel:(347)460-9278‬" className="text-white">
                {data.phone}
              </Link>
            </div>
            <div className="mb-6 border-b border-[#f7a09b] text-[18px]">
              <label className="font-semibold">Skype:</label>
              <Link
                href="skype:sales.aranv?chat"
                className="text-white underline"
              >
                {data.skype}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
