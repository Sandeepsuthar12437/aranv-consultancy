const WhyUsSection = ({ data }) => {
  return (
    <section className="w-full relative bg-black">
      <div className="container">
        <div className="pt-[30px] pb-0 md:pt-10 md:pb-4 lg:pb-8 xl:pt-[70px] xl:pb-[103px]">
          <div className="w-full lg:w-[500px] md:pr-5 mb-10 md:mb-0">
            <h2 className="text-[18px] leading-[normal] capitalize tracking-[0.1px] font-medium text-white mb-5 md:mb-[15px] xl:mb-[70px]">
              {data.heading}
            </h2>

            {data.points.map((item, i) => {
              return (
                <div key={i} className="mb-5 xl:mb-[49px]">
                  <h3 className="font-bold text-[#ef4036] text-[28px] leading-[normal] mb-2.5 md:text-[32px] xl:text-[40px] xl:leading-[48px] xl:mb-[21px]">
                    {item.title}
                  </h3>
                  <p className="!text-[#818181] text-[15px] !leading-[22px] md:text-[20px] md:!leading-[26px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${data?.bgImage || ""})` }}
        className="w-full lg:w-1/2 h-[400px] lg:h-full lg:absolute md:top-0 md:right-0 bg-no-repeat bg-cover"
      ></div>
    </section>
  );
};

export default WhyUsSection;
