"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const Banner = ({ data }) => {
  const router = useSearchParams();
  console.log(router);
  return (
    <section>
      <div
        className={`bg-center bg-cover bg-no-repeat before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/10 before:z-[-1] ${
          data.handleheight
            ? "min-h-[136px] md:min-h-[253px] lg:min-h-[353px]"
            : "min-h-[457px]"
        }  relative z-0 w-full overflow-hidden] flex items-center`}
        style={{ backgroundImage: `url(${data?.bgImage || ""})` }}
      >
        <div className="container">
          <h1 className="text-white font-bold mb-2 tracking-normal text-[30px] leading-[normal] md:text-[40px] md:leading-[46px] lg:text-[45px] lg:leading-[52px] xl:text-[67px] xl:leading-[74px] 2xl:text-[80px] 2xl:leading-[87px]">
            {data.heading}
          </h1>
          <div className="text-white font-medium capitalize text-[16px] leading-[normal] md:text-[18px]">
            <Link
              href="/"
              className="!bg-none !text-white relative mr-[18px] hover:!text-[#ef4036] after:content-['/'] after:absolute after:-right-[13px] after:top-0 after:text-white hover:after:text-white"
            >
              Home
            </Link>
            <span>About</span>
          </div>
        </div>
        {data?.arrowImage && (
          <>
            <div className="bg-no-repeat hidden lg:block max-w-[380px] xl:max-w-[749px] mr-[3%] w-full absolute top-auto bottom-0 right-0 mb-4">
              <Image
                src={data.arrowImage}
                alt="Run Business uninterruptedly with High-tech Solutions"
                loading="lazy"
                width={500}
                height={500}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Banner;
