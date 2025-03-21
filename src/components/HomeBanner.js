import Link from "next/link";
import React from "react";

const HomeBanner = ({ data }) => {
  console.log("data", data);
  console.log("++++", data.backgroundImage);

  return (
    <div
      className="home bg-center bg-cover bg-no-repeat min-h-[250px] relative w-full overflow-hidden flex items-center py-[30px] md:pb-0 lg:pt-6 xl:pt-10 md:min-h-[370px] lg:min-h-[400px] xl:min-h-[470px] 2xl:min-h-[730px]"
      style={{ backgroundImage: `url(${data?.backgroundImage || ""})` }}
    >
      <div className="container">
        <div className="max-w-full mt-0 mx-auto text-center md:mx-0 md:text-left md:max-w-[60%] lg:max-w-[70%] 2xl:max-w-[850px] 2xl:mt-[60px]">
          <h1 className="text-[32px] leading-[normal] mb-2.5 font-bold text-black tracking-[-2.4px] md:text-[40px] md:leading-[46px] md:mb-2 lg:mb-[15px] lg:text-[48px] lg:leading-[58px] xl:text-[55px] xl:leading-[63px] 2xl:text-[72px] 2xl:leading-[82px] 2xl:mb-[17px]">
            {data.heading}
          </h1>
          <div className="text-xl text-black max-w-[442px] w-full mb-5 tracking-normal md:mb-[25px] md:text-[26px] md:leading-[normal] lg:mb-5 2xl:mb-[50px]">
            {data.subHeading}
          </div>
          <div className="button-banner">
            <Link href={data.ctaLink} className="btn btn-lets-talk">
              {data.ctaText}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-no-repeat max-w-[380px] w-full absolute top-auto bottom-0 right-0 hidden md:block md:max-w-[355px] lg:max-w-[385px] xl:mr-[3%] xl:max-w-[450px] 2xl:max-w-[711px]">
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
