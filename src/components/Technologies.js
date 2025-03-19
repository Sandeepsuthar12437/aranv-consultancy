const Technologies = ({ data }) => {
  return (
    <section className="py-14 md:py-28">
      <div className="max-w-[1200px] mx-auto px-[15px] text-center">
        <div>
          <h2 className="mb-2 md:mb-7 text-2xl sm:text-3xl md:text-[40px] font-semibold">
            {data.heading}
          </h2>
          <p className="md:max-w-[44%] text-[#424242] mx-auto text-[20px]">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
