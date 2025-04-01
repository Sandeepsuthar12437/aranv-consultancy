"use client";
import { useRef } from "react";
import Image from "next/image";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SplideWrapper from "./SplideWrapper";
import { usePathname } from "next/navigation";

export default function ServiceSlide({ data }) {
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
              <div className="w-full md:w-[400px] lg:w-full h-auto sm:h-[450px] md:h-[480px] lg:h-[489px] p-6 sm:p-8 md:p-10 lg:p-[43px] shadow-lg mb-[29px] bg-white">
                <div
                  className={`${
                    path === "/cloud-computing-service"
                      ? "flex items-center justify-center w-[89px] h-[89px]  mb-6"
                      : "bg-[#ffe9e8] flex items-center justify-center w-[89px] h-[89px] rounded-full mb-6"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                </div>
                {service.title && (
                  <h3 className="text-[25px] font-bold leading-[30px] mb-3">
                    {service.title}
                  </h3>
                )}
                {service.description && (
                  <p className="text-[17px] leading-[26px] text-[#424242]">
                    {service.description}
                  </p>
                )}
              </div>
            </SplideSlide>
          ))}
        </SplideWrapper>
      </div>
    </section>
  );
}
