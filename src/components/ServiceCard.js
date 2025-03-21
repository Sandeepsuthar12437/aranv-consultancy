"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServiceCard = ({ data }) => {
  const path = usePathname();

  return (
    <section className="pt-20">
      {(data.heading && path === "/mobile-app-development") ||
        ("marketing-strategy-consultants" && (
          <div className="max-w-[1200px] mx-auto px-[15px] mb-4 sm:mb-8 md:mb-12 lg:mb-28">
            <h2 className="text-xl font-medium">{data.heading}</h2>
          </div>
        ))}
      <div className="max-w-[1200px] px-4 mx-auto bg-[#f5f5f5] py-12 md:py-[60px] relativemax-w-[1200px] px-4 mx-auto bg-[#f5f5f5] py-12 md:py-[60px] relative xl:before:content-[''] xl:before:absolute xl:before:top-0 xl:before:left-[-190px] xl:before:w-[220px] xl:before:h-full xl:before:-z-1 xl:before:bg-[#f5f5f5] xl:after:content-[''] xl:after:absolute xl:after:top-0 xl:after:-right-[190px] xl:after:w-[220px] xl:after:h-full xl:after:-z-1 xl:after:bg-[#f5f5f5]">
        <ul className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          {data.card.map((app, index) => (
            <li
              key={index}
              className={`w-full md:w-1/3 lg:w-[369px] h-full min-h-[353px] shadow-[5px_0_68px_rgba(0,0,0,0.16)] ${
                index === 0 ? "md:-mt-32" : index === 2 ? "md:mt-28" : ""
              }`}
            >
              <div>
                <img src={app.image} alt={app.alt} className="w-full" />
              </div>
              <div className="pt-8 px-6 md:pt-[35px] md:pr-[27px] md:pb-[35px] md:pl-[44px]">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {app.title}
                </h3>
                <p className="text-base md:text-[17px] text-[#424242] mb-3 leading-[26px]">
                  {app.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {path !== "/mobile-app-development" ||
          ("marketing-strategy-consultants" && (
            <Link
              href={data.cta.link}
              className="relative mx-auto mt-8 md:-mt-14 max-w-[140px] lg:max-w-[199px] text-white lg:h-[58px] px-[10px] py-[5px] text-[18px] leading-[46px] rounded-[30px] block hover:text-white overflow-hidden bg-[linear-gradient(to_right,_black_50%,_red_50%)] transition-all duration-500 ease-out bg-[size:200%_100%] bg-[position:right_bottom] hover:bg-[position:left_bottom]"
            >
              <span className="block text-center text-[18px] font-bold transition-all duration-600 ease-out">
                {data.cta.text}
              </span>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default ServiceCard;
