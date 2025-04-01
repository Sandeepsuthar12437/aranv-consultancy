import Link from "next/link";
import React from "react";

const Footer = ({ data }) => {
  return (
    <footer className="bg-white text-white">
      <div className="py-[30px] md:py-[50px] lg:pt-[75px] lg:pb-[60px] xl:pt-[84px] xl:pb-[60px] 2xl:pt-[105px] 2xl:pb-[70px]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo */}
            <div className="w-full mb-7 md:mb-0 md:w-2/5 lg:w-[350px]">
              {data?.logo?.src && (
                <Link href={data.logo.href}>
                  <img
                    src={data.logo.src}
                    alt={data.logo.alt}
                    title={data.logo.title}
                    className="max-w-[120px] md:max-w-fit"
                  />
                </Link>
              )}

              <div className="ftr-social mt-4 md:mt-[30px] xl:mt-[43px] 2xl:mt-[63px]">
                {data.socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ftr-social-link text-[20px] mr-[15px] md:text-[26px] md:mr-[34px]"
                  >
                    <i className={social.class} aria-hidden={true}></i>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="w-full md:w-3/5 lg:w-[600px]">
              <h4 className="font-medium text-[18px] leading-[normal] text-[#424242] mb-3.5 md:mb-[19px]">
                {data.services.title}
              </h4>
              <ul className="ftr-menu flex flex-wrap gap-1.5 md:gap-1 md:justify-between lg:justify-start">
                {data?.services?.columns?.map((column, colIndex) => (
                  <li key={colIndex} className="inline-block">
                    <Link
                      href={column.href}
                      className="text-[14px] relative block md:pr-2.5 lg:text-[16px]"
                    >
                      {column.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] py-6">
        <div className="container">
          <p className="mb-0 font-normal !text-black text-[14px]">
            {data.copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
