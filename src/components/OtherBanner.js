import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

const OthreBanner = ({ data }) => {
  return (
    <div className="bg-center bg-cover bg-no-repeat min-h-[531px] relative w-full overflow-hidden bg-black flex items-center pt-10 before:content-[''] before:absolute before:inset-0 before:bg-[rgba(23,23,23,0.76)] before:-z-1">
      <div className="max-w-[1200px] w-full px-[15px] mx-auto relative">
        <div className="">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-[80px] text-white font-bold mb-3 md:mb-8 lg:mb-11 lg:leading-[82px]"
            dangerouslySetInnerHTML={{ __html: data?.title }}
          />

          {data?.subtitle && (
            <p
              className="text-xl text-white mb-6"
              dangerouslySetInnerHTML={{ __html: data.subtitle }}
            />
          )}
          {data.breadcrumbs && <Breadcrumbs breadcrumb={data.breadcrumbs} />}
        </div>
      </div>
      <div className="bg-no-repeat max-w-[380px] xl:max-w-[749px] mr-[3%] w-full absolute top-auto bottom-0 right-0 mb-4 hidden lg:block">
        <img
          src={data.image.src}
          title={data.image.title}
          alt={data.image.alt}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default OthreBanner;
