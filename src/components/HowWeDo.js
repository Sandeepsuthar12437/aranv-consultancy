const HowWeDo = ({ data }) => {
  return (
    <section className="my-11 md:my-0">
      <div className="bg-[#f5f5f5]">
        <div className="bg-white pb-24">
          <div className="max-w-[1200px] px-4 mx-auto text-xl font-medium">
            How We Do
          </div>
        </div>
        <div className="max-w-[1200px] px-4 mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap justify-between">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`w-full md:w-[48%] h-[323px] md:h-[457px] p-7 md:px-10 md:py-8 md-lg:px-[72px] md-lg:py-[61px] mb-10 shadow-[5px_0_68px_rgba(0,0,0,0.16)] ${
                  index === 1 ? "md:mt-[132px]" : ""
                } ${index === 2 ? "md:-mt-[173px]" : ""} bg-white`}
              >
                <i>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-4 md:mb-[30px]"
                  />
                </i>
                <h2 className="text-xl md:text-[30px] text-red-500 mb-4">
                  {item.title}
                </h2>
                <p className="text-base sm:text-[20px] mb-4 text-[#424242]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
