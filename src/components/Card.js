import React from "react";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="rounded-[12px] bg-black flex items-center justify-center p-[10px] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
      <p className="text-white font-[18px] md:font-[24px] font-DMSans flex ">
        {item.data.Title}
      </p>
    </div>
  );
};

export default Card;
