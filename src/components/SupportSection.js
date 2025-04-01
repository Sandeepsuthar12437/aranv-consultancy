const SupportSection = ({ data }) => {
  return (
    <section className="mt-18 pt-3 md:pt-0 md:pb-20 bg-[#f5f5f5] relative innovative-approach md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-0 md:before:w-full md:before:h-[146px] md:before:bg-white">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <h5 className="text-lg mb-14 font-medium text-black z-40">
          When You Contact Us
        </h5>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.support.map((item, i) => (
            <li
              key={i}
              className="p-8 md:pt-[54px] md:pr-[70px] md:pb-[54px] md:pl-[65px] min-h-[414px] max-w-[568px] shadow-[5px_0_68px_rgba(0,0,0,0.16)] z-40 bg-white"
            >
              <img src={item.image} alt={item.title} className="mb-5" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:leading-9">
                {item.title}
              </h2>
              <p className="mb-[15px] text-[20px] leading-[26px] font-normal text-[#424242] tracking-normal">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SupportSection;
