import Link from "next/link";

const ResearchSection = ({ data }) => {
  return (
    <section className="pt-[30px] pb-10 md:pt-[50px] md:pb-[60px] lg:pt-[68px] lg:pb-20 xl:pt-[88px] xl:pb-[110px] 2xl:pt-[98px] 2xl:pb-[122px]">
      <div className="container">
        <h2 className="text-[24px] leading-[normal] font-bold mb-[25px] md:text-[40px] md:leading-[48px] md:mb-[35px] lg:max-w-[60%] xl:max-w-[40%] xl:mb-[45px] xl:mb-[55px]">
          {data.heading}
        </h2>
        <div className="flex gap-[30px] flex-wrap justify-center mb-8 md:justify-between md:gap-[26px] md:flex-nowrap md:mb-[25px] lg:mb-[30px] lg:gap-[30px] xl:mb-[74px] xl:gap-8">
          {data.Research.map((item, i) => (
            <div
              key={i}
              className="w-full flex flex-col md:w-1/3 shadow-[5px_0_68px_rgba(0,0,0,0.16)]"
            >
              <Link href="../dist/world-if-artificial-intelligence-not-exist.html">
                <img
                  src={item.image}
                  alt=""
                  className="w-full max-h-[218px] min-h-[218px] object-cover"
                />
              </Link>
              <div className="flex-1 flex flex-col py-5 px-[15px] lg:py-[30px] lg:px-[25px] xl:py-[38px] xl:px-11">
                <span className="text-[18px] leading-[normal] tracking-normal font-medium text-[#818181] inline-block mb-[5px] lg:text-[20px] lg:mb-2 xl:mb-3">
                  {item.researchheading}
                </span>
                <h4 className="flex-1 text-[18px] leading-[normal] text-black font-bold mb-4 md:mb-4 lg:text-[20px] lg:mb-6">
                  {item.researchdescription}
                </h4>
                <Link
                  href={item.readmore.text}
                  className="text-[18px] leading-[normal] red-link"
                >
                  {item.readmore.text} &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mx-auto justify-center">
          <Link href={data.Button.link} className="view-all-btn">
            {data.Button.text} &gt;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
