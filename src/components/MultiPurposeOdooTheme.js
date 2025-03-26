const MultiPurposeOdooTheme = ({ data }) => {
  return (
    <section className="relative">
      <div
        className="w-full bg-[#0e1e2c] bg-blend-multiply lg:h-[872px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        <div className="max-w-[1200px] pt-8 md:pt-16 lg:pt-40 pb-10 md:pb-16 lg:pb-52 px-[15px] mx-auto">
          <div className="lg:w-[75%]">
            <h2 className="text-2xl md:text-3xl lg:text-[50px] lg:leading-[60px] text-white font-bold mb-3 lg:mb-6">
              {data.heading}
            </h2>
            <p className="text-xl text-[#c6c6c6] font-medium mb-3">
              {data.description}
            </p>
            <ul className="mt-6 md:mt-10 lg:mt-[60px] grid grid-cols-1">
              {data.features.map((feature, index) => (
                <li
                  key={index}
                  className="mr-6 text-lg md:text-[23px] text-white font-medium mb-3 inline-block before:content-['>'] before:pr-2 before:text-red-500"
                >
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={data.button.link}
              className="relative max-w-[170px] mt-5 md:mt-[39px] lg:max-w-[199px] text-white lg:h-[58px] px-[10px] py-[5px] text-[18px] leading-[46px] rounded-[30px] block hover:text-white overflow-hidden bg-[linear-gradient(to_right,_black_50%,_red_50%)] transition-all duration-500 ease-out bg-[size:200%_100%] bg-[position:right_bottom] hover:bg-[position:left_bottom]"
            >
              <span className="block text-center text-[18px] font-medium transition-all duration-600 ease-out after:content-['>'] after:pl-3">
                {data.button.text}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiPurposeOdooTheme;
