import React from "react";

const Search = () => {
  return (
    <div className="pt-[53px] md:pt-[63px] bg-white  px-[28px] md:px-[77px]">
      <div className="flex-col items-start p-0 gap-[4px]">
        <p className="text-black text-[16px] md:text-[24px] font-DMSans font-normal ">
          Search
        </p>
        <input className="w-full box-border  h-[54px] border-[1px] border-[#000000]" />
      </div>
    </div>
  );
};

export default Search;
