"use client";
import { usePathname } from "next/navigation";
import React from "react";

const QuoteBanner = ({ data }) => {
  const path = usePathname();
  return (
    <section>
      <div
        className={
          !data.handleCss
            ? `${
                path === "/Business-Intelligence" ||
                path === "/marketing-strategy-consultants"
                  ? "max-w-[1863px] mx-5"
                  : "max-w-[1583px]"
              }  mx-auto min-h-[500px] md:min-h-[600px] lg:min-h-[629px] relative my-6 md:my-10 lg:my-24 object-fill bg-cover`
            : "bg-no-repeat bg-center bg-cover max-w-full min-h-[350px] md:min-h-[455px]"
        }
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        {data.quote && (
          <>
            <div className="max-w-[80%] md:max-w-[75%] lg:max-w-[553px] bg-black px-3 md:px-12 lg:px-24 pt-4 md:pt-8 lg:pt-20 pb-4 md:pb-12 lg:pb-28 absolute bottom-10 lg:-bottom-[50px] right-10 lg:right-52 text-center md:text-left">
              {data.commaImage && (
                <img
                  src={data.commaImage}
                  alt="Quote Icon"
                  className="mb-2 mx-auto md:mx-0 md:mb-11"
                />
              )}
              {data.quote.text && (
                <p
                  className={`${data.quote.textcss}`}
                  dangerouslySetInnerHTML={{ __html: data.quote.text }}
                />
              )}
              {data.quote.author && (
                <span className="text-white before:content-['-'] before:pr-2">
                  {data.quote.author},
                </span>
              )}
              <span className="text-white"> {data.quote.position}</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default QuoteBanner;
