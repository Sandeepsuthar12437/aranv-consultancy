export const OurCulture = ({ data }) => {
  if (!data || !data.images) return null; // Prevents errors if data is missing

  return (
    <section className="pt-10 pb-10 md:pt-[89px] md:pb-[94px]">
      <div className="max-w-[1612px] mx-auto px-[15px]">
        <div className="mb-8 md:mb-[58px] ml-3 md:ml-[204px] text-[18px]">
          {data.heading}
        </div>
        <div className="flex flex-col md:gap-0 gap-4 md:flex-row justify-between">
          {data.images.map((item, i) => (
            <div key={i} className="w-full md:w-[507px]">
              <img src={item.src} alt={item.alt || `Culture image ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
