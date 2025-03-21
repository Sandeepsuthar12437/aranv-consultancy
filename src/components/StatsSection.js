import React from "react";

const StatsSection = ({ data }) => {
  return (
    <section className="py-[30px] md:py-[60px] xl:py-[110px] 2xl:pt-[163px] 2xl:pb-[151px]">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full mb-[35px] md:mb-0 md:w-[48%] lg:w-[570px] lg:pt-8">
            <h2 className="text-[24px] leading-[normal] font-bold mb-[15px] tracking-normal md:mb-[27px] md:text-[30px] lg:text-[40px] lg:leading-[48px]">
              {data.heading}
            </h2>
            <p className="text-[15px] leading-[22px] mb-[25px] md:text-[20px] md:mb-[35px]">
              {data.description}
            </p>
            <a
              href={data.link.url}
              className="red-link text-[18px] leading-[24px] relative inline-block"
            >
              {data.link.text}
            </a>
          </div>

          <div className="flex flex-row flex-wrap w-full md:w-[49%] lg:w-[570px] justify-center sm:justify-end">
            <div className="flex justify-center items-center w-1/2 h-[130px] md:w-[180px] md:h-[160px] lg:w-[270px] lg:h-[200px]">
              <i className="max-w-[65px] md:max-w-[80px] lg:max-w-fit">
                <img src={data.image} alt="smile" />
              </i>
            </div>

            {data.stats.map((stat, index) => (
              <div
                key={index}
                className={`flex justify-center flex-col items-center w-1/2 h-[130px] md:w-[180px] md:h-[160px] lg:h-[200px]  ${
                  index === 1 ? " lg:w-[270px] " : " lg:w-[200px] "
                }  ${stat.bgColor}`}
              >
                <strong
                  className={`relative font-bold text-[36px] right-3 md:text-[40px] lg:text-[50px] lg:right-3.5 ${stat.textColor} after:content-['+'] after:absolute after:top-0 text-[36px] after:right-[-22px] md:text-[40px] after:md:right-[-26px] lg:text-[50px] after:lg:right-[-30px]`}
                >
                  {stat.value}
                </strong>
                <small
                  className={`leading-[normal] font-medium tracking-normal text-[14px] md:text-[16px] lg:text-[20px] ${stat.textColor}`}
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
