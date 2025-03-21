const OdooThemesSection = ({ data }) => {
  return (
    <section>
      <div className="w-full relative max-h-full md:min-h-[700px] lg:min-h-[857px] bg-[#0e1e2c]">
        <div className="max-w-[1200px] mx-auto pt-6 sm:pt-10 md:pt-12 lg:pt-[89px] pb-6 sm:pb-10 md:pb-16 lg:pb-[103px] px-[15px]">
          <div className="lg:max-w-[554px] ml-auto bg-black md:bg-[#0e1e2c] p-3 md:p-0 md:pr-5">
            <h2 className="text-2xl md:text-4xl lg:text-[54px] font-bold text-white mb-4 md:mb-[40px] md:leading-[56px]">
              {data.title}{" "}
              <span className="text-[#e262bf]">{data.highlight}</span>
            </h2>
            <p className="text-[#818181] text-lg md:text-[20px] mb-4 md:mb-[40px]">
              {data.description1}
            </p>
            <p className="text-[#818181] text-lg md:text-[20px] mb-4 md:mb-[40px]">
              {data.description2}
            </p>
            <a
              href={data.buttonLink}
              className="relative w-[199px] h-[58px] px-[10px] py-[5px] text-[18px] leading-[46px] rounded-[30px] block text-white hover:text-white overflow-hidden bg-[linear-gradient(to_right,_black_50%,_red_50%)] transition-all duration-500 ease-out bg-[size:200%_100%] bg-[position:right_bottom] hover:bg-[position:left_bottom]"
            >
              <span className="block text-center text-[16px] font-bold transition-all duration-600 ease-out">
                {data.buttonText}
              </span>
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
          className="absolute top-0 bg-no-repeat h-[857px] w-[49%] -left-16 bg-[100%_100%] hidden lg:block"
        ></div>
      </div>
    </section>
  );
};

export default OdooThemesSection;
