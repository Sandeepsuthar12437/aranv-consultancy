import React from "react";

const HireExperts = ({ data }) => {
  return (
    <section className="pt-[69px] pb-[115px]">
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div
          className="max-w-[339px] w-full mx-auto min-h-[125px] bg-no-repeat flex flex-row gap-3 justify-center items-center"
          style={{ backgroundImage: `url(${data.bgImage})` }}
        >
          {data.images.map((image, index) => (
            <div key={index} className="w-20 h-20">
              <img
                decoding="async"
                src={image.src}
                title={image.title}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <h2 className="text-[42px] leading-[48px] max-w-[790px] mx-auto my-5 font-semibold text-center">
          {data.heading}
        </h2>
        <p className="text-[20px] text-center text-[#424242]">
          {data.description}
        </p>
        <a
          href={data.button.link}
          className="relative mx-auto max-w-[344px] mt-5 md:mt-20 text-red-500 h-[60px] px-[10px] py-[5px] text-[18px] leading-[46px] rounded-[30px] block overflow-hidden bg-[linear-gradient(to_right,_black_50%,_white_50%)] border-[1px] border-black transition-all duration-500 ease-out bg-[size:200%_100%] bg-[position:right_bottom] hover:bg-[position:left_bottom]"
        >
          <span className="block text-center text-[22px] font-normal transition-all duration-600 ease-out">
            {data.button.text}
          </span>
        </a>
      </div>
    </section>
  );
};

export default HireExperts;
