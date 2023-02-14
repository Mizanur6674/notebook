import React from "react";
import { propsData } from "../../../../shared/PropsData";
import { TravelInfo } from "../../../../shared/TravelInfo";
import NextPrev from "./NextPrev";
import WriteNotebook from "./WriteNotebook";

function HeroBottomMain() {
  return (
    <div className=" w-full">
      <div>
        <h3 className=" text-theme-black text-[19px] lg:text-[21px]">
          <span className=" bg-theme-parsian-green text-white px-1 py-1 mr-2 font-thin text-[19px] lg:text-[21px]">Recently</span>
          Posted
        </h3>
      </div>
      <div>
        <TravelInfo data={propsData} amount={3} className=" text-[27px] font-semibold pb-1" />
      </div>
      {/* for write notebook */}
      <div className=" my-14">
        <WriteNotebook />
      </div>
      <div>
        <TravelInfo data={propsData} amount={6} className="text-[27px] font-semibold w-[85%] pb-1" />
      </div>
      <div>
        <NextPrev />
      </div>
    </div>
  );
}

export default HeroBottomMain;
