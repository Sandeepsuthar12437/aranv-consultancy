export default function BlogContent({ data }) {
  return (
    <div>
      {data.title && (
        <h1 className="text-2xl md:text-[40px] md:leading-[48px] font-bold my-4 md:my-10">
          {data.title}
        </h1>
      )}

      {data.content.map((item, index) => {
        if (typeof item === "string") {
          return (
            <p
              key={index}
              className="mb-[26px] text-xl text-justify font-normal leading-[33px] text-[#1d1d1d]"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          );
        } else if (item.type === "html") {
          return (
            <div
              key={index}
              className="mb-[26px] text-xl font-normal leading-[33px] text-[#1d1d1d]"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          );
        } else {
          return (
            <div key={index} className="w-full ">
              <img src={item.image} alt="Manufacturing" />
            </div>
          );
        }
      })}
    </div>
  );
}
