const SocialMediaLinks = ({ data }) => {
  return (
    <div className="flex flex-row my-4 gap-4 px-4 items-center">
      {data.map((item) => (
        <div key={item.id} className="w-[2.3rem]">
          <a href={item.href}>
            <svg
              focusable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className={item.hasBorder ? "border-r-2 border-black pr-1" : ""}
            >
              <path fill="black" d={item.svgPath}></path>
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
