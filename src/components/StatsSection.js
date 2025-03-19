import React from "react";

const StatsSection = ({ data }) => {
  return (
    <section className="py-[40px] xl:py-[163px]">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-[350px] lg:w-[570px] pt-8">
            <h2 className="text-xl md:text-[27px] lg:text-[40px] font-bold mb-3 tracking-tight leading-[26px] lg:leading-[48px]">
              {data.heading}
            </h2>
            <p className="text-[15px] lg:text-[21px] text-[#424242] mb-3 xl:mb-9">
              {data.description}
            </p>

            <div className="relative inline-block cursor-pointer group">
              <a
                href={data.link.url}
                className="text-red-500 text-lg mb-4 md:mb-0 font-medium relative block"
              >
                {data.link.text}
              </a>
              <a
                href={data.link.url}
                className="absolute top-0 left-0 text-black text-lg mb-4 md:mb-0 font-medium w-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out group-hover:w-full pointer-events-none"
              >
                {data.link.text}
              </a>
            </div>
          </div>

          <div className="flex flex-row flex-wrap w-full sm:w-[300px] lg:w-[570px] justify-center sm:justify-end">
            <div className="flex justify-center items-center w-[150px] lg:w-[270px] h-[150px] lg:h-[200px]">
              <i>
                <img src={data.image} alt="smile" />
              </i>
            </div>

            {data.stats.map((stat, index) => (
              <div
                key={index}
                className={`flex justify-center flex-col items-center w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] ${stat.bgColor}`}
              >
                <strong className={`text-[50px] font-bold ${stat.textColor}`}>
                  {stat.value}
                </strong>
                <small
                  className={`text-xl font-medium tracking-normal ${stat.textColor}`}
                >
                  {stat.label}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
