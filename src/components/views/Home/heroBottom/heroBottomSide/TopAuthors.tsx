import React, { useState } from "react";
import { heroBottomSideData, HeroBottomSideDataType } from "./HeroBottomSideData";
import SocialIcons from "./SocialIcons";

function TopAuthors() {
  return (
    <div>
      <h3 className=" text-theme-black text-[19px] lg:text-[21px]">
        <span className=" bg-theme-parsian-green text-white px-1 py-1 mr-2 font-thin text-[19px] lg:text-[21px]">Top</span>Authors
      </h3>
      <div className=" lg:py-4">
        {heroBottomSideData.map((item: HeroBottomSideDataType, index) => {
          return (
            <div key={index} className=" mt-10 flex items-center gap-6">
              <div className=" w-20 h-20">
                <div className="w-full h-full bg-theme-light-gray rounded-full"></div>
              </div>
              <div className=" w-[16rem]">
                <h5 className=" text-theme-black">{item.title}</h5>
                <p className=" pt-2 pb-3 p12_3 text-theme-gray">
                  {item.subTitle}
                  <a className="p12 text-theme-black" href="">
                    {item.link}
                  </a>
                </p>

                {/* for social icon */}
                <SocialIcons />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopAuthors;
