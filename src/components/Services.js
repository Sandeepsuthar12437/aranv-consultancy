const Services = ({ data }) => {
  return (
    <section className="pt-8 lg:pt-14 pb-12 lg:pb-20">
      <div className="max-w-[1200px] px-[15px] mx-auto">
        <h2 className="text-[18px] mb-8 lg:mb-[59px]">{data.title}</h2>
        <ul className="flex flex-row flex-wrap justify-center md:gap-9 lg:gap-0 lg:justify-between">
          {data.services.map((service, index) => (
            <li
              key={index}
              className="w-full md:w-[369px] pt-[43px] pr-[37px] pb-[34px] pl-[40px] shadow-[5px_0_68px_rgba(0,0,0,0.16)] mb-[29px]"
            >
              <h3 className="text-xl sm:text-[25px] font-bold leading-[30px] mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-[17px] leading-[26px] text-[#424242]">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
