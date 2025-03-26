"use client";
import { useState } from "react";
import Image from "next/image";

const WhyUs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section>
      <div className="w-full lg:relative bg-black">
        <div className="lg:absolute top-0 p-4 lg:p-0 right-0 bg-no-repeat lg:h-[857px] lg:w-[49%]">
          <Image src={data.src} alt="Why Us" width={933} height={857} />
        </div>
        <div className="max-w-[1200px] mx-auto pt-6 md:pt-16 lg:pt-[89px] pb-8 md:pb-16 lg:pb-[103px] px-[15px] lg:h-[857px]">
          <div className="lg:max-w-[500px] py-4 lg:p-0 lg:pr-5">
            <h2 className="text-[18px] font-bold text-white mb-4 md:mb-8 lg:mb-[40px]">
              Why Us
            </h2>
            <div>
              {data.content.map((item, index) => (
                <div key={index} className="border-b-2 border-white">
                  <h3
                    className={`text-[25px] font-bold pr-[50px] pt-[20px] pb-[23px] relative cursor-pointer relative after:content-[''] after:absolute after:right-[21px] after:top-[38px] after:w-[14px] after:h-[9px] after:bg-no-repeat  ${
                      activeIndex === index
                        ? "text-[#ef4036] after:rotate-180 after:bg-[url('/images/accordion-dropdown-hover-arrow.png')]"
                        : "text-white after:bg-[url('/images/contact-dropdown-arrow.png')]"
                    }`}
                    onClick={() => toggleDescription(index)}
                  >
                    {item.title}
                  </h3>
                  <div
                    className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                      activeIndex === index
                        ? "grid-rows-[1fr] opacity-100 "
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-white mb-[23px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
