import React from "react";

const BusinessSections = ({ data }) => {
  return (
    <section className="py-10 md:py-[89px]">
      <div className="max-w-[1200px] mx-auto px-[15px] flex flex-col md:flex-row flex-wrap justify-center sm:justify-between">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className={`max-w-full lg:max-w-[470px] my-10 ${section.marginBottom} ${section.marginTop}`}
          >
            {section.image && (
              <div className="mb-12">
                <img src={section.image} alt={section.alt} className="w-full" />
              </div>
            )}
            <h2 className="text-2xl md:text-[40px] font-bold text-red-500 md:leading-[48px] mb-5">
              {section.title}
            </h2>
            <p className="text-lg md:text-xl text-[#424242] mb-5">
              {section.description}
            </p>
            <div className="relative inline-block cursor-pointer group">
              <a
                href={section.link}
                className="text-red-500 text-lg font-medium relative block"
              >
                Learn More &gt;
              </a>
              <a
                href="#"
                className="absolute top-0 left-0 text-black text-lg font-medium w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out group-hover:w-full pointer-events-none"
              >
                Learn More &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSections;
