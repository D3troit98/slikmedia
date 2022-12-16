import React from "react";
import BannerImage from "../assets/Rectangle 5.png";
const Banner = () => {
  return (
    <div>
      <img
        src={BannerImage}
        alt="bannerimage"
        className="w-[834px] lg:w-full  md:w-[1440px] lg:h-[550px]"
      />
      <p className="text-white font-DMSans font-bold leading-[36.46px] md:leading-[50px] lg:leading-[93.74px] absolute z-10 text-[28px]  sm:text-[40px] md:text-[50px] lg:text-[72px]   text-center lg:text-start flex left-[80px] sm:left-[180px] md:left-[180px] lg:left-[100px] top-[150px] sm:top-[200px] md:top-[200px] lg:top-[247px]  justify-center items-center place-items-center">
        Watch <br className="hidden md:flex" /> something <br /> incredible.
      </p>
    </div>
  );
};

export default Banner;
