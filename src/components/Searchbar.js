import Image from "next/image";

const Searchbar = () => {
  return (
    <div>
      <form action="" className="relative mb-[27px]">
        <input
          type="search"
          className="w-full p-6 border-[1px] border-black outline-none placeholder:text-xl placeholder:font-normal pt-[20px] pr-[56px] pb-[17px] pl-[22px]"
          placeholder="Search Articles"
        />
        <Image
          src="/images/search-interface-symbol.png"
          alt="Search"
          width={20}
          height={20}
          className="w-[20px] h-[20px] absolute right-5 top-1/2 transform -translate-y-1/2"
        />
      </form>
    </div>
  );
};

export default Searchbar;
