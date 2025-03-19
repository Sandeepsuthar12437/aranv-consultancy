import React from "react";

const SectionComponent = ({ data }) => {
  return (
    <section
      className={`py-10 xl:pt-28 xl:pb-20 ${data.reverse ? "pt-[52px]" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div
          className={`flex flex-col ${
            data.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } justify-between items-center`}
        >
          <div
            className={`md:w-[350px] lg:w-[570px] ${
              !data.reverse ? "pt-8" : "w-full md:w-[54%] mt-5 md:mt-0 order-1"
            }`}
          >
            {data.heading && (
              <div className="mb-6 md:mb-12 font-bold">{data.heading}</div>
            )}
            <h2 className="text-[27px] lg:text-[40px] font-bold mb-3 tracking-tight leading-[48px]">
              {data.title}
            </h2>
            <p className="text-[15px] lg:text-xl text-[#424242] mb-3 xl:mb-9">
              {data.description}
            </p>
            {!data.reverse && data.images && (
              <div className="flex flex-row items-center gap-2">
                {data.images.map((img, index) => (
                  <div
                    key={index}
                    className="p-4 hover:shadow-[5px_0_68px_rgba(0,0,0,0.16)]"
                  >
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className={`${
              data.reverse
                ? "w-full md:w-[38%]"
                : "flex flex-row flex-wrap md:w-[300px] lg:w-[570px] justify-end"
            }`}
          >
            <img src={data.mainImage} alt="Main Section" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComponent;
