"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ data }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("open-navmenu");
    } else {
      document.body.classList.remove("open-navmenu");
    }
  }, [isNavOpen]);

  return (
    <header id="header" className="w-full bg-white z-[9] py-6 lg:py-10 m-0">
      <div className="container flex flex-row items-center">
        <div
          className="headerbtn w-[31px] border-t-[5px] border-black float-left mr-[26px] cursor-pointer my-auto"
          onClick={toggleNav}
        >
          <span className="block w-full h-[5px] bg-black mt-[5px]"></span>
          <span className="block w-full h-[5px] bg-black mt-[5px]"></span>
        </div>
        {/* Toggle Navbar */}
        <div
          className={`fixed w-full h-screen left-0 top-0 z-50 bg-white transition-all duration-500 ${
            isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <span
            className="closebtn cursor-pointer font-bold absolute top-[52px] left-9 h-[25px] w-[25px] before:content-[''] before:absolute before:h-[5px] before:w-full before:top-1/2 before:left-1/2 before:bg-black before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 after:content-[''] after:absolute after:h-[5px] after:w-full after:top-1/2 after:left-1/2 after:bg-black after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45"
            onClick={toggleNav}
          ></span>

          <div className="flex flex-col md:flex-row">
            <div className="mega-about-menu w-full md:w-[33%] px-20 py-14 xl:w-[27.40%] md:px-10 xl:px-20 md:pt-28 xl:pt-52 md:pb-10 xl:pb-28 bg-[#ef4036] md:h-screen grid grid-rows-[1fr_100px] justify-between">
              <ul className="">
                {data.navLinks.map((link, index) => (
                  <li key={index} className="mb-[26px] overflow-hidden">
                    <Link
                      href={link.url}
                      className="text-2xl lg:text-[40px] lg:leading-[48px] text-white font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="my-9">
                {data.socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mega-social-link"
                  >
                    <i className={social.class} aria-hidden={true}></i>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mega-service-menu w-[33%] xl:w-[25.80%] md:px-10 xl:px-20 md:pt-28 xl:pt-52 md:pb-10 xl:pb-28 h-screen hidden md:block bg-black">
              <h2 className="text-[40px] text-white font-bold mb-4">Service</h2>
              <ul>
                {data.services.map((service, index) => (
                  <li
                    key={index}
                    className="relative border-b border-[#323232]"
                  >
                    <Link href={service.url} className="service-menu-link">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navmenu-right-img md:w-[33%] xl:w-[53.20%]">
              <div className="relative px-10 py-10 flex flex-col md:h-screen md:pt-28 md:pr-10 md:pl-20 xl:py-[78px] xl:pb-[78px] xl:pr-[78px] xl:pl-[130px]">
                <img
                  src={data.toggleNavImage}
                  alt=""
                  className="mx-auto mb-[110px]"
                />
                <Link href={data.contactLink} className="black-link">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Toggle Navbar */}
        <div className="topbar-list hidden md:block">
          <ul>
            {data.navLinks.slice(0, 3).map((link, index) => (
              <li key={index} className="mr-6 inline-block align-middle">
                <Link
                  href={link.url}
                  className="text-transparent font-medium text-[18px] leading-normal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute left-0 right-0 mx-auto max-w-[120px] lg:max-w-[233px]">
          <Link href={data.logoLink}>
            <img
              src={data.logoImage}
              alt="aranv"
              title="aranv"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="ml-auto">
          <Link href={data.contactLink} className="cmn-btn">
            Get in Touch
          </Link>
          <Link href={data.contactLink} className="ml-auto">
            <img
              src={data.getInTouchImage}
              alt=""
              className="md:hidden block w-14 h-14 border-[1px] border-black p-[6px] rounded-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
