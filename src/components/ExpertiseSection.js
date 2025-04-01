const ExpertiseSection = ({ data }) => {
  return (
    <section className="bg-[#f9f8f8] pt-[30px] pb-10 mt-5 md:pt-[60px] md:pb-[70px] xl:py-[88px] 2xl:pt-[88px] 2xl:pb-[120px] 2xl:mt-[60px]">
      <div className="container">
        <span className="text-[18px] capitalize block leading-[normal] tracking-[0.1px] font-medium mb-[15px] md:mb-[30px] xl:mb-12">
          Expertise
        </span>
        <h2
          className="text-[24px] leading-[normal] font-bold max-w-[970px] pr-7 mb-3 md:mb-14 md:text-[40px] md:leading-[48px] lg:mb-[66px] xl:mb-[116px]"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />

        <div className="cutting-edge flex flex-col relative">
          <i className="flex ml-auto mb-0 w-[100px] h-[100px] bg-black flex items-center justify-center md:absolute md:right-0 md:top-[-125px] md:w-[125px] md:h-[125px] lg:w-[169px] lg:h-[169px] lg:mt-[-169px] xl:w-[200px] xl:h-[200px] xl:top-[-31px]">
            <img
              src={data.cartImage}
              alt="Cutting-edge Web Development Solutions"
              className="w-1/2"
            />
          </i>
          <ul
            className={`md:w-[83%] w-full  flex flex-row flex-wrap ${
              data.technologies ? "" : ""
            }`}
          >
            {data.technologies &&
              data.technologies.map((tech, index) => (
                <li
                  key={index}
                  className={`w-1/3 h-[100px] relative border-r-[1px] border-b-[1px] border-white md:w-[20%] md:h-[123px] lg:h-[146px] ${
                    index % 5 === 4 ? "md:border-r-0" : ""
                  }`}
                >
                  <div className="cutting-edge-tech w-full h-full bg-[#ef4036] flex items-center justify-center bg-clip-border bg-none relative overflow-hidden">
                    <span className="relative z-[2] text-center leading-none">
                      <i>
                        <img src={tech.image} alt={tech.name} />
                      </i>
                    </span>
                    <span className="hover-effect"></span>
                  </div>
                </li>
              ))}
            {data.image && (
              <>
                <img src={data.image} alt="" />
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
