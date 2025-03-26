import React from "react";

const ProcessSection = ({ data }) => {
  return (
    <section>
      <div className="max-w-[1200px] text-lg px-4 mx-auto mb-6 sm:mb-12 md:mb-16 lg:mb-32 font-semibold">
        Our Process
      </div>
      <div className="max-w-[1200px] px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`w-full max-h-[527px] px-6 lg:px-[42px] py-8 lg:py-[48px] mb-10 shadow-[5px_0_68px_rgba(0,0,0,0.16)] bg-white ${
                index === 0
                  ? "lg:-mt-[44px]"
                  : index === 1
                  ? "lg:mt-[132px]"
                  : index === 2
                  ? "lg:-mt-[173px]"
                  : ""
              }`}
            >
              <div className="relative">
                <i>
                  <img src={item.image} alt="" className="mb-[30px]" />
                </i>
                <span
                  className={`absolute text-red-500 text-white text-lg ${
                    index === 0
                      ? "top-[42px] left-[37px]"
                      : index === 1
                      ? "top-[16px] left-[22px]"
                      : index === 2
                      ? "top-[21px] left-[28px]"
                      : index === 3
                      ? "top-[39px] left-[17px]"
                      : "" // Default empty case to avoid errors
                  }`}
                >
                  0{index + 1}
                </span>
              </div>
              <h2 className="text-xl lg:text-[30px] font-bold text-red-500 mb-4">
                {item.title}
              </h2>
              <p className="text-[20px] mb-4 text-[#424242] leading-[26px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
