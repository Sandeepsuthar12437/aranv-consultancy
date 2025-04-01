"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ data }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("");
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop) {
        setScrollDirection(
          "translate-y-[-138px] transition-all duration-500 ease-in-out"
        );
      } else {
        setScrollDirection("transition-all duration-500 ease-in-out");
      }
      setLastScrollTop(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      id="header"
      className={`w-full bg-white z-[9] py-3 md:py-6 lg:py-10 m-0 ${scrollDirection}`}
    >
      <div className="container flex flex-row items-center">
        <div
          className="headerbtn w-[31px] border-t-[5px] border-black float-left cursor-pointer my-auto md:mr-5 lg:mr-[26px]"
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
            className="closebtn cursor-pointer font-bold absolute h-[25px] w-[25px] left-5 top-[25px] md:top-11 xl:left-[30px] xl:top-12 2xl:top-[52px] 2xl:left-9 before:content-[''] before:absolute before:h-[5px] before:w-full before:top-1/2 before:left-1/2 before:bg-black before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 after:content-[''] after:absolute after:h-[5px] after:w-full after:top-1/2 after:left-1/2 after:bg-black after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45"
            onClick={toggleNav}
          ></span>

          <div className="flex flex-col h-screen md:flex-row">
            <div className="mega-about-menu grid grid-rows-[1fr_100px] justify-between w-full bg-[#ef4036] px-5 pt-[78px] flex-1 md:flex-auto md:w-[33%] md:h-screen md:px-5 xl:px-20 md:pt-28 md:pb-0 xl:pt-[150px] xl:px-[30px] xl:w-[32.50%] 2xl:pt-52 2xl:px-20 2xl:w-[27.40%]">
              <ul className="">
                {data.navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="overflow-hidden mb-1.5 lg:mb-2.5 xl:mb-5 2xl:mb-[26px] "
                  >
                    <Link
                      href={link.url}
                      className="text-white font-normal text-[28px] leading-[normal] lg:text-[30px] xl:text-[40px] xl:leading-[48px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="my-9 h-fit">
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
            <div className="mega-service-menu w-[35%] h-screen hidden bg-black md:block md:pt-28 md:px-5 md:pb-0 xl:pt-[150px] xl:px-[30px] xl:w-[33.50%] 2xl:pt-52 2xl:px-20 2xl:w-[25.80%]">
              <h2 className="text-[40px] leading-none text-white font-bold mb-4">
                Service
              </h2>
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
            <div className="navmenu-right-img flex-1 md:flex-auto md:w-[33%] xl:w-[48.60%] 2xl:w-[53.20%]">
              <div className="relative px-10 py-10 flex flex-col justify-center md:h-screen md:pt-28 md:pr-10 md:p-8 lg:p-10 xl:p-20 2xl:py-[78px] 2xl:pb-[78px] 2xl:pr-[78px] 2xl:pl-[130px]">
                <img
                  src={data.toggleNavImage}
                  alt=""
                  className="mx-auto md:mb-[50px] lg:mb-[60px] xl:mb-[70px] 2xl:mb-[110px]"
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
              <li
                key={index}
                className="inline-block align-middle md:mr-3.5 lg:mr-6"
              >
                <Link
                  href={link.url}
                  className="text-transparent font-medium md:text-[16px] leading-normal lg:text-[18px]"
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
          <Link
            href={data.contactLink}
            className="get-in-touch-mob-btn ml-auto"
          >
            <img src={data.getInTouchImage} alt="" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
