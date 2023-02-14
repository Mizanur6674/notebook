import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { aboutBottomData } from "./AboutBottomData";
import WriteOnNotebook from "./WriteOnNotebook";

function AboutBottom() {
  return (
    <div>
      <div className=" container my-16 lg:my-20">
        <div className=" w-[95%] md:w-[45%] mx-auto mb-14">
          <h1 className=" text-theme-black text-center tracking-wide">
            <span className=" bg-theme-parsian-green text-white mr-2 tracking-wide font-thin">Meet </span> Our Authors
          </h1>
        </div>
        <div className=" w-full mx-auto 2xl:ml-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-6">
          {aboutBottomData.map((item, index) => {
            return (
              <div key={index} className=" flex items-center gap-2 lg:gap-4">
                <div className=" w-[150px] h-[150px] rounded bg-theme-light-gray"></div>
                {/* <img src={item.img} alt="" /> */}
                <div className=" ">
                  <h2 className=" text-theme-black">{item.name}</h2>
                  <h6 className=" text-[#777] pt-3 pb-5"> {item.post}</h6>
                  <div className=" flex items-center justify-center gap-1">
                    <p className=" p12 sm:text-[15px] text-theme-parsian-green text-center">{item.author} </p>
                    <HiArrowNarrowRight className=" p12 sm:text-[15px] text-theme-parsian-green" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <WriteOnNotebook />
      </div>
    </div>
  );
}

export default AboutBottom;
