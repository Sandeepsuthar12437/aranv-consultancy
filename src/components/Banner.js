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
        className={`bg-center bg-cover bg-no-repeat ${
          data.handleheight ? " min-h-[353px]" : "min-h-[457px]"
        }  relative w-full overflow-hidden] flex items-center pt-10`}
        style={{ backgroundImage: `url(${data?.bgImage || ""})` }}
      >
        <div className="max-w-[1200px] w-full px-[15px] mx-auto">
          <div className="max-w-[850px]">
            <h1 className="text-7xl text-white font-bold leading-[82px] mb-4">
              {data.heading}
            </h1>
            <div className="text-white font-bold">
              <Link href="/" className="after:content-['/'] after:px-2">
                Home
              </Link>
              <span>About</span>
            </div>
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
