"use client";
import { usePathname } from "next/navigation";

const TechnologiesSection = ({ data }) => {
  const path = usePathname();

  return (
    <section>
      <div className={`w-full lg:relative ${data.bgColor ? data.bgColor : ""}`}>
        <div
          className={`${
            path === "/mobile-app-development"
              ? "max-w-[1200px] mx-auto px-[15px] min-h-[680px] flex items-center"
              : "max-w-[1200px] mx-auto px-[15px] lg:h-[556px] text-center lg:text-left flex items-center "
          }`}
        >
          <div
            className={`${
              data.reverseLayout ? "mr-auto" : " ml-auto "
            } lg:max-w-[600px] pb-8 lg:pb-0 lg:pr-5`}
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
            <h2 className="!text-[40px] leading-[42px] md:text-[50px] font-bold my-4 md:my-10">
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
              <h4 className="font-semibold text-lg py-4 md:my-6 text-red-500">
                {data.subtitle}
              </h4>
            )}
            {data.services && (
              <ul
                className="grid grid-cols-2 
               gap-2"
              >
                {data.services.map((service, index) => (
                  <li
                    key={index}
                    className="font-bold text-lg mb-3 flex items-center"
                  >
                    <span className="text-red-500 mr-2">&gt;</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            )}
            {data.button && (
              <a
                href={data.button.href}
                className="max-w-[199px] mt-6 md:mt-8 lg:mt-12 text-red-500 h-[58px] px-[10px] py-[5px] leading-[46px] rounded-[30px] block hover:text-white overflow-hidden bg-[linear-gradient(to_right,_red_50%,_white_50%)] transition-all duration-500 ease-out bg-[size:200%_100%] bg-[position:right_bottom] hover:bg-[position:left_bottom]"
              >
                <span className="block text-center text-[18px] font-semibold transition-all duration-600 ease-out">
                  {data.button.text}&gt;
                </span>
              </a>
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
