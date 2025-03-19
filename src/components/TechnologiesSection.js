import React from "react";

const TechnologiesSection = ({ data, path }) => {
  return (
    <section>
      <div className="w-full lg:relative">
        <div
          className={`${
            path === "/mobile-app-development"
              ? "max-w-[1200px] mx-auto px-[15px] min-h-[680px] flex items-center"
              : '"max-w-[1200px] mx-auto px-[15px] lg:h-[556px] text-center lg:text-left'
          }`}
        >
          <div
            className={`${
              data.reverseLayout
                ? "lg:max-w-[600px] mr-auto  pb-8 lg:pb-0 lg:pr-5"
                : "lg:max-w-[600px] ml-auto  pb-8 lg:pb-0 lg:pr-5"
            }`}
          >
            {data.techImage && (
              <div>
                <img
                  src={data.techImage}
                  alt="ReactJS Technology"
                  className="mx-auto md:mx-0"
                />
              </div>
            )}
            <h2 className="text-3xl md:text-[50px] font-bold my-4 md:my-10">
              {data.title}
            </h2>
            {data.paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-[#424242] mx-auto text-lg md:text-[20px] leading-6 md:leading-[26px]"
              >
                {text}
              </p>
            ))}
            {data.subtitle && (
              <h4 className="font-semibold text-lg py-4 md:my-10 text-red-500">
                {data.subtitle}
              </h4>
            )}
            {data.services && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.services.map((service, index) => (
                  <li
                    key={index}
                    className="font-bold text-lg mb-3 flex items-center"
                  >
                    <span className="text-red-500 mr-2">➤</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div
          className={`${
            data.reverseLayout
              ? `bg-no-repeat bg-cover bg-center h-[300px] lg:h-[680px] w-full lg:w-[45%] lg:absolute lg:top-0 lg:right-0`
              : `bg-no-repeat bg-cover bg-center h-[300px] ${
                  path === "/mobile-app-development"
                    ? "lg:h-[680px]"
                    : "lg:h-[556px]"
                } w-full lg:w-[45%] lg:absolute lg:top-0 lg:left-0`
          }`}
        >
          <img src={data.techSideImage} alt="React Native Technology" />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
