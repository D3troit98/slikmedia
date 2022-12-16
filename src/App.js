import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";
import { data } from "autoprefixer";
export default function App() {
  const [marvel, setMarvel] = useState();

  const [dc, setDc] = useState();
  useEffect(() => {
    //http://www.omdbapi.com/?i=tt3896198&apikey=33a6cf02
    axios
      .get("http://www.omdbapi.com/?t=marvel&apikey=33a6cf02")
      .then((res) => {
        let duplicatedObject = [];
        for (let i = 0; i < 10; i++) {
          duplicatedObject.push(Object.assign({}, res, data));
        }
        setMarvel(duplicatedObject);
      });
  }, []);

  useEffect(() => {
    //http://www.omdbapi.com/?i=tt3896198&apikey=33a6cf02
    axios
      .get("http://www.omdbapi.com/?t=batman&apikey=33a6cf02")
      .then((res) => {
        let duplicatedObject = [];
        for (let i = 0; i < 10; i++) {
          duplicatedObject.push(Object.assign({}, res, data));
        }
        setDc(duplicatedObject);
      });
  }, []);

  return (
    <div className="w-full ">
      <Header />
      <Banner />
      <Search />

      <div className="pt-[33px] md:pt-[48px] pl-[28px] md:pl-[67px] bg-white">
        <p className="text-black font-DMSans font-[24px] mb-[18px]">Marvel</p>
        <div className="overflow-x-scroll flex flex-row  w-full justify-center items-center  gap-[10px]">
          {marvel &&
            marvel.map((item) => (
              <div className="w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
                <Card item={item} />
              </div>
            ))}
        </div>
      </div>

      <div className="md:pt-[48px] pt-[33px] pl-[28px] md:pl-[67px] bg-white">
        <p className="text-black font-DMSans font-[24px] mb-[18px]">DC</p>
        <div className=" flex flex-row items-start p-10px gap-[10px] overflow-x-auto ">
          {dc &&
            dc.map((item) => (
              <div className=" w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
                <Card item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
