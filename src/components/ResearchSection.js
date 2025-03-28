import Link from "next/link";
import React from "react";

const ResearchSection = ({ data }) => {
  return (
    <section className="pt-10 xl:pt-[98px] pb-14 xl:pb-[122px]">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <h2 className="text-2xl md:text-[40px] font-bold pr-[15px] md:max-w-[60%] xl:max-w-[40%] mb-8 xl:mb-[55px] md:leading-[48px]">
          {data.heading}
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap mb-10 gap-3 md:gap-0 justify-center md:justify-between">
          {data.Research.map((item, i) => (
            <div
              key={i}
              className="w-full sm:w-[250px] lg:w-[308px] xl:w-[355px] my-3 md:my-0 md:mx-2 md:mb-8 shadow-[5px_0_68px_rgba(0,0,0,0.16)]"
            >
              <Link href={`/${item.readmore.link}`}>
                <img
                  src={item.image}
                  alt=""
                  className="w-full min-h-[218px] object-cover"
                />
              </Link>
              <div className="px-5 lg:px-11 pt-[14px] lg:pt-[28px] pb-[39px]">
                <span className="text-lg font-bold text-gray-500">
                  {item.researchheading}
                </span>
                <h4 className="text-[20px] font-bold my-2">
                  {item.researchdescription}
                </h4>
                <Link href={`/${item.readmore.link}`}>
                  {item.readmore.text} &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mx-auto justify-center">
          {data.Button && (
            <Link
              href={data.Button.link}
              className="relative mx-auto min-w-[140px] lg:min-w-[224px] text-red-500 lg:h-[60] px-[10px] py-[5px] leading-[46px] border-[1px] border-black rounded-[30px] block overflow-hidden bg-[linear-gradient(to_right,_black_50%,_white_50%)] transition-all duration-500 ease-out bg-[size:200%_100%] bg-[position:right_bottom] hover:bg-[position:left_bottom]"
            >
              <span className="block text-center text-[22px] font-normal transition-all duration-600 ease-out">
                {data.Button.text} &gt;
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
