import React from "react";

const PostComponent = ({ data }) => {
  return (
    <div>
      <img src={data.imageSrc} alt="Post" className="w-full" />
      <div className="flex flex-row justify-between pt-[20px] pb-4 border-b-[1px] border-black mb-[68px]">
        <div className="text-xl font-normal leading-[33px] text-[#1d1d1d]">
          <span>{data.date}</span>
        </div>
        <div className="text-xl font-normal leading-[33px] text-[#1d1d1d]">
          <span>Posted by {data.author}</span>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
