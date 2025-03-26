import Image from "next/image";
import React from "react";

const BusinessSections = ({ data }) => {
  return (
    <section className="py-[30px] md:pt-5 md:pb-10 xl:py-[89px]">
      <div className="container">
        <div className="flex flex-col md:flex-row flex-wrap justify-center sm:justify-between">
          {data.sections.map((section, index) => (
            <div
              key={index}
              className={`max-w-full mt-0 md:my-10 md:max-w-[48%] lg:max-w-[470px] ${
                section.marginTop
              } ${index === 0 || index === 5 ? section.marginBottom : "mb-9"}`}
            >
              {section.image && (
                <div className="mb-[25px] lg:mb-[30px] xl:mb-12 2xl:mb-[61px]">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    className="w-full"
                    width={300}
                    height={300}
                  />
                </div>
              )}
              <h2
                dangerouslySetInnerHTML={{ __html: section.title }}
                className={`text-2xl font-bold   mb-[5px] leading-[normal] md:text-[28px] md:mb-2 lg:text-[35px] lg:mb-[13px] xl:text-[40px] xl:leading-[48px] ${
                  index === 0 ? "text-[#ef4036]" : "text-black"
                }`}
              />
              <p className="text-[18px] leading-[22px] md:text-[20px] md:leading-[26px] text-[#424242] mb-[15px]">
                {section.description}
              </p>
              {index !== 0 && (
                <a href={section.link} className="red-link text-[18px]">
                  Learn More &gt;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSections;
