import React from "react";

const HomeBanner = ({ data }) => {
  console.log("data", data);
  console.log("++++", data.backgroundImage);

  return (
    <div
      className="bg-center bg-cover bg-no-repeat min-h-[400px] xl:min-h-[730px] relative w-full overflow-hidden flex items-center pt-10"
      style={{ backgroundImage: `url(${data?.backgroundImage || ""})` }}
    >
      <div className="max-w-[1200px] w-full px-[15px] mx-auto">
        <div className="max-w-[400px] lg:max-w-[600px] xl:max-w-[850px] mt-0 xl:mt-[60px] mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-[33px] lg:text-5xl xl:text-7xl font-bold mb-4 leading-9 xl:leading-[82px] text-black -tracking-[2px]">
            {data.heading}
          </h1>
          <div className="text-xl md:text-[26px] text-black max-w-[442px] w-full mb-5 xl:mb-10">
            {data.subHeading}
          </div>
          <div className="text-white text-lg max-w-[198px] mx-auto md:mx-0 w-full bg-red-500 hover:bg-red-700 transition duration-500 text-center px-1.5 py-3.5 my-3.5 rounded-full">
            <a href={data.ctaLink} className="btn btn-lets-talk">
              {data.ctaText}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-no-repeat max-w-[380px] xl:max-w-[749px] mr-[3%] w-full absolute top-auto bottom-0 right-0 hidden md:block">
        <img
          src={"/images/home-banner-img.png"}
          title={data?.bannerImageTitle}
          alt={data?.bannerImageAlt}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
