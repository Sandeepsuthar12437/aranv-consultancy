const WhyUsSection = ({ data }) => {
  return (
    <section>
      <div className="w-full relative bg-black">
        <div className="max-w-[1200px] mx-auto pt-10 lg:pt-[89px] pb-14 lg:pb-[103px] px-[15px] min-h-[857px]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[500px] md:pr-5 mb-10 md:mb-0">
              <h2 className="text-[18px] font-medium text-white mb-10 md:mb-[70px]">
                {data.heading}
              </h2>

              {data.points.map((item, i) => {
                return (
                  <div key={i}>
                    <h3 className="text-2xl md:text-[40px] font-bold text-red-500 mb-[21px]">
                      {item.title}
                    </h3>
                    <p className="text-[#818181] text-xl leading-[26px] mb-[40px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              style={{ backgroundImage: `url(${data?.bgImage || ""})` }}
              className="w-full lg:w-1/2 h-[400px] lg:h-full lg:absolute md:top-0 md:right-0 bg-no-repeat bg-cover"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
