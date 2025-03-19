const ExpertiseSection = ({ data }) => {
  return (
    <section className="py-[88px] bg-[#f9f8f8]">
      <div className="max-w-[1200px] w-full mx-auto px-[15px]">
        <span className="text-lg font-medium mb-12">Expertise</span>
        <h2 className="text-xl md:text-[40px] font-bold max-w-[970px] pr-7 md:mb-14 xl:mb-28 leading-[30px] md:leading-[48px]">
          Cutting edge Technology <br />
          Solutions
        </h2>
        <div className="flex flex-col relative">
          <div className="w-full flex justify-end mb-0 lg:mb-8 md:absolute md:right-0 md:-top-[200px]">
            <i className="w-[153px] h-[153px] md:w-[200px] md:h-[200px] bg-black flex items-center justify-center">
              <img
                src={data.cartImage}
                alt="Cutting-edge Web Development Solutions"
                title="Cutting-edge Web Development Solutions"
                loading="lazy"
                className="w-1/2"
              />
            </i>
          </div>
          <ul className="xl:w-[83%] w-full bg-red-500 flex flex-row flex-wrap">
            {data.technologies.map((tech, index) => (
              <li
                key={index}
                className={`flex items-center justify-center w-1/3 md:w-[20%] h-[146px] border-r-[1px] border-b-[1px] border-white ${
                  index % 5 === 4 ? "md:border-r-0" : ""
                }`}
              >
                <span>
                  <i>
                    <img src={tech.image} alt={tech.name} />
                  </i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
