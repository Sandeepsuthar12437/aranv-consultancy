import Link from "next/link";
import React from "react";

const Footer = ({ data }) => {
  return (
    <footer className="bg-white text-white ">
      <div className="pt-[50px] md:pt-[105px] pb-[35px] md:pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-[15px] flex flex-col md:flex-row justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            {data?.logo?.src && (
              <Link href={data.logo.href}>
                <img
                  src={data.logo.src}
                  alt={data.logo.alt}
                  title={data.logo.title}
                />
              </Link>
            )}
          </div>

          {/* Services Section */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-black mb-2">
              {data.services.title}
            </h4>
            <div className="flex  flex-wrap gap-8">
              {data?.services?.columns?.map((column, colIndex) => (
                <div key={colIndex}>
                  <ul>
                    {column.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-black text-base font-medium relative block"
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto pt-[24px] pb-[17px] px-[15px]">
          <p className="mb-[15px] font-normal text-black text-[14px]">
            {data.copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
