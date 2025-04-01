const CaliberSection = ({ data }) => {
  return (
    <section className="py-8 sm:py-16 md:py-[137px]">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <h2
          dangerouslySetInnerHTML={{ __html: data.title }}
          className="text-xl md:text-[40px] font-bold md:leading-[48px] md:my-12 mx-auto  text-center"
        />

        <div className="relative">
          <a
            href={data.buttonLink}
            className="relative mx-auto max-w-[170px] md:max-w-[285px] mt-5 md:mt-20 text-red-500 h-[60px] px-[10px] py-[5px] text-[18px] leading-[46px] rounded-[30px] block overflow-hidden bg-[linear-gradient(to_right,_black_50%,_white_50%)] border-[1px] border-black transition-all duration-500 ease-out bg-[size:200%_100%] bg-[position:right_bottom] hover:bg-[position:left_bottom]"
          >
            <span className="block text-center text-[22px] transition-all duration-600 ease-out">
              {data.buttonText}
            </span>
          </a>

          <span className="bg-[url('/images/square-plus-icon-shape.png')] w-[125px] h-[125px] absolute -top-[298px] -left-[127px] hidden xl:block"></span>
          <span className="bg-[url('/images/small-square-plus-shape.png')] w-[125px] h-[125px] absolute -top-[300px] right-0 hidden xl:block bg-no-repeat"></span>
          <span className="bg-[url('/images/horizontal-plus-shape.png')] w-[128px] h-4 absolute left-24 top-7 bg-no-repeat hidden xl:block"></span>
          <span className="bg-[url('/images/square-plus-icon-shape.png')] w-[125px] h-[125px] absolute bottom-0 -right-[284px] hidden xl:block bg-no-repeat"></span>
        </div>
      </div>
    </section>
  );
};

export default CaliberSection;
