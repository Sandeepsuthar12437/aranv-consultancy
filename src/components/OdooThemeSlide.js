"use client";
import { useRef } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SplideWrapper from "./SplideWrapper";
import { usePathname } from "next/navigation";
import Link from "next/link";

const OdooThemeSlide = ({ data }) => {
  const splideRef = useRef(null);

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.go("+1");
    }
  };

  const handlePrevious = () => {
    if (splideRef.current) {
      splideRef.current.go("-1");
    }
  };

  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "20px",
    pagination: false,
    arrows: false,
    breakpoints: {
      768: { perPage: 2 },
      640: { perPage: 1 },
    },
  };

  const path = usePathname();

  return (
    <section className="pt-8 md:pt-14 pb-8 md:pb-20 bg-[#f5f5f5]">
      <div className="max-w-[1200px] px-[15px] mx-auto flex flex-row mb-[59px] items-center justify-between gap-4 md:gap-8">
        <h2 className="text-2xl sm:text-[40px] font-bold">{data.heading}</h2>
        <div className="flex gap-2 md:gap-4">
          <button
            id="previous"
            onClick={handlePrevious}
            className="inline-block w-10 h-10 font-bold bg-white shadow hover:bg-gray-200 transition"
          >
            &lt;
          </button>
          <button
            id="next"
            onClick={handleNext}
            className="inline-block w-10 h-10 font-bold bg-white shadow hover:bg-gray-200 transition"
          >
            &gt;
          </button>
        </div>
      </div>

      <div
        id="image-slider"
        className="p-3 w-full xl:w-[80%] px-[15px] ml-auto"
      >
        <SplideWrapper options={splideOptions} ref={splideRef}>
          {data.content.map((service, index) => (
            <SplideSlide key={index}>
              <div className="w-full text-center md:w-[400px] lg:ml-3 lg:w-full h-auto sm:h-[450px] md:h-[480px] lg:h-[489px] mb-[29px]">
                <img
                  src={service.image}
                  alt="Neon Theme Preview"
                  className="shadow-[5px_0_68px_rgba(0,0,0,0.16)] mb-10"
                />
                <h3 className="text-[25px] font-bold leading-[30px] mb-3">
                  {service.title}
                </h3>
                <Link
                  href="#"
                  className="mt-[10px] pr-3 text-red-500 after:content-['>'] after:text-red-500 after:pl-2"
                >
                  Live Preview
                </Link>
              </div>
            </SplideSlide>
          ))}
        </SplideWrapper>
      </div>
    </section>
  );
};
export default OdooThemeSlide;
