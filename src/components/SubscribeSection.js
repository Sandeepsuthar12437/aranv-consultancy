export default function SubscribeSection() {
  return (
    <div className="bg-red-500 p-8 sticky z-10 transition-all duration-300 top-36">
      <div className="grid grid-cols-1">
        <div>
          <h2 className="text-xl sm:text-3xl md:text-[34px] font-bold max-w-[900px] mb-4 md:mb-10 text-white md:leading-[41px]">
            Stay tuned with the latest technology insights
          </h2>
        </div>
        <div className="w-full border-[1px] border-white px-3 sm:py-6 md:py-11">
          <form>
            <div className="my-4">
              <input
                type="email"
                placeholder="Enter your email ID"
                className="w-full px-6 h-[50px] focus:border-b-black bg-red-500 placeholder:text-[#818181] py-2 sm:py-3 text-[17px] font-medium text-black outline-none border-b-2 border-b-[#e6e6e6]"
                required
              />
            </div>
            <input
              type="submit"
              value="Subscribe"
              className="py-3 sm:py-5 bg-white text-xl min-w-[150px] text-red-500 rounded-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
