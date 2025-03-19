"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = ({ data }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header id="header" className="w-full bg-white z-[9] py-6 lg:py-10 m-0">
      <div className="flex flex-row items-center px-[15px]">
        <div>
          <span
            className="headerbtn w-[31px] border-t-[5px] border-black float-left mr-[26px] cursor-pointer my-auto"
            onClick={toggleNav}
          >
            <span className="block w-full h-[5px] bg-black mt-[5px]"></span>
            <span className="block w-full h-[5px] bg-black mt-[5px]"></span>
          </span>
          {/* Toggle Navbar */}
          <div
            className={`demo fixed w-full h-screen left-0 top-0 z-50 bg-white transition-opacity duration-500 ${
              isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <span
              className="closebtn font-bold absolute top-14 left-7 h-8 w-8 before:content-[''] before:absolute before:h-0.5 before:w-full before:top-1/2 before:left-1/2 before:bg-black before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 after:content-[''] after:absolute after:h-0.5 after:w-full after:top-1/2 after:left-1/2 after:bg-black after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45"
              onClick={toggleNav}
            ></span>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[33%] px-20 py-14 xl:w-[26%] md:px-10 xl:px-20 md:pt-28 xl:pt-52 md:pb-10 xl:pb-28 bg-[#ef4036] md:h-screen grid grid-rows-[1fr_100px] justify-between">
                <ul>
                  {data.navLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-2xl lg:text-[40px] text-white font-normal mb-3"
                    >
                      <Link href={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row gap-5 my-9">
                  {data.socialLinks.map((social, index) => (
                    <Link key={index} href={social.url}>
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox={social.viewBox}
                          className="w-8 h-8"
                        >
                          <path d={social.path}></path>
                        </svg>
                      </i>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-[33%] xl:w-[25%] md:px-10 xl:px-20 md:pt-28 xl:pt-52 md:pb-10 xl:pb-28 h-screen hidden md:block bg-black">
                <h2 className="text-[40px] text-white font-bold mb-4">
                  Service
                </h2>
                <ul>
                  {data.services.map((link, index) => (
                    <li
                      key={index}
                      className="relative text-lg font-semibold pr-5 border-b-[1px] border-gray-400 py-4 mb-3 text-white"
                    >
                      <Link href={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-[33%] xl:w-[48%]">
                <div className="relative px-10 py-10 md:pt-28 xl:py-[78px] md:pr-10 xl:pr-[78px] md:pl-20 xl:pl-[130px] md:h-screen flex flex-col">
                  <Image
                    src={data.toggleNavImage}
                    alt=""
                    width={400}
                    height={400}
                    className="mx-auto mb-[130px] w-[45%] md:w-[65%]"
                  />
                  <Link
                    href={data.contactLink}
                    className="text-3xl lg:text-[40px] text-black mx-auto font-bold after:content-['>'] after:absolute after:px-4 after:text-red-500 after:font-normal"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End Toggle Navbar */}
        </div>
        <div className="hidden flex-row md:flex">
          <ul className="flex flex-row items-center">
            {data.navLinks.slice(0, 3).map((link, index) => (
              <li
                key={index}
                className="text-2xl mr-5 lg:text-[40px] text-white font-normal mb-3"
              >
                <Link
                  href={link.url}
                  className="text-[#6a6a6a] text-lg font-medium relative block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute left-0 right-0 mx-auto max-w-[120px] lg:max-w-[233px]">
          <Link href={data.logoLink}>
            <Image
              src={data.logoImage}
              alt="aranv"
              width={233}
              height={73}
              title="aranv"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="ml-auto">
          <Link
            href={data.contactLink}
            className="relative hidden md:block ml-auto min-w-[140px] lg:min-w-[199px] text-white lg:h-[58px] px-[10px] py-[5px] text-[18px] leading-[46px] rounded-[30px] hover:text-white overflow-hidden bg-[linear-gradient(to_right,_black_50%,_red_50%)] transition-all duration-500 ease-out bg-[size:200%_100%] bg-[position:right_bottom] hover:bg-[position:left_bottom]"
          >
            <span className="block text-center text-[16px] font-bold transition-all duration-600 ease-out">
              Get in Touch
            </span>
          </Link>
          <Link href={data.contactLink} className="ml-auto">
            <Image
              src={data.getInTouchImage}
              alt=""
              width={56}
              height={56}
              className="md:hidden block w-14 h-14 border-[1px] border-black p-[6px] rounded-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
