const ContactForm = ({ services }) => {
  return (
    <div className="py-8 xl:py-[60px] px-8 xl:px-[65px] bg-[#f5f5f5] mx-auto lg:mx-0 max-w-[600px]">
      <h5 className="text-[23px] font-semibold pb-6">
        Let’s Talk to Give Your Business a 360 Change
      </h5>
      <form>
        <div className="pb-[30px]">
          <input
            type="text"
            placeholder="Name"
            className="w-full h-[50px] bg-[#f5f5f5] focus:border-b-black placeholder:text-[#757575] py-3 text-[17px] font-medium outline-none border-b-2 border-b-[#e6e6e6]"
          />
        </div>
        <div className="pb-[30px]">
          <input
            type="text"
            placeholder="Email"
            className="w-full h-[50px] bg-[#f5f5f5] focus:border-b-black placeholder:text-[#757575] py-3 text-[17px] font-medium outline-none border-b-2 border-b-[#e6e6e6]"
          />
        </div>
        <div className="pb-[30px]">
          <input
            type="text"
            placeholder="Phone"
            className="w-full h-[50px] bg-[#f5f5f5] focus:border-b-black placeholder:text-[#757575] py-3 text-[17px] font-medium outline-none border-b-2 border-b-[#e6e6e6]"
          />
        </div>
        <div className="pb-[30px]">
          <select className="w-full h-[50px] outline-none bg-[#f5f5f5] border-b-2 border-b-[#e6e6e6] placeholder:text-[#757575] focus:border-b-black">
            <option value="">Select Services</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div className="pb-[30px]">
          <input
            type="textarea"
            placeholder="Write something"
            className="w-full h-[50px] bg-[#f5f5f5] placeholder:text-[#757575] focus:border-b-black py-3 text-[17px] font-medium outline-none border-b-2 border-b-[#e6e6e6]"
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="min-w-[165px] text-xl my-3 flex bg-black h-[58px] text-white rounded-full"
        />
      </form>
    </div>
  );
};

export default ContactForm;
