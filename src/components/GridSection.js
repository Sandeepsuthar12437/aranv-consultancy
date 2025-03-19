import React from "react";
import Image from "next/image";

const GridSection = ({ data, path }) => {
  return (
    <section className="pt-14 pb-20">
      <div className="max-w-[1200px] px-[15px] mx-auto">
        <div className="max-w-[1200px] text-lg mx-auto mb-14 font-semibold">
          {data.title}
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[33px]">
          {data.items.map((item, index) => (
            <li
              key={index}
              className={`${
                path === "/mobile-app-development"
                  ? "bg-[#f5f5f5] "
                  : "shadow-[5px_0_68px_rgba(0,0,0,0.16)] mb-[29px]"
              }pt-[43px] pr-[37px] pb-[34px] pl-[40px] `}
            >
              <div
                className={`${
                  path === "/mobile-app-development"
                    ? "mb-6 w-12 h-12"
                    : "bg-[#ffe9e8] rounded-full  mb-6  flex items-center h-[89px]  w-[89px] justify-center  "
                } `}
              >
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={52}
                  height={46}
                />
              </div>
              <h3 className="text-[25px] font-bold leading-[30px] mb-3">
                {item.title}
              </h3>
              <p className="text-[17px] leading-[26px] text-[#424242] font-normal">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GridSection;
