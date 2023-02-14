import React from "react";
import { heroData, heroTopData } from "../HeroData";
import HeroTopSide from "./HeroTopSide";

function HeroTop() {
  return (
    <div className=" bg-theme-grinish-cyan">
      <div className=" container py-10 lg:py-16">
        <div className=" flex-1 lg:flex lg:gap-8 2xl:gap-14">
          {/* for feature */}
          <div className=" flex-1">
            <h3 className=" text-theme-black text-[19px] lg:text-[21px]">
              <span className=" bg-theme-parsian-green text-white py-1 mr-2 font-thin text-[19px] lg:text-[21px]">Featured</span>
              This Month
            </h3>
            {/* for playback */}
            <div className=" grid grid-cols-1 xl:grid-cols-2 gap-x-8">
              {heroData.map((item, index) => {
                return (
                  <div key={index} className=" mt-7 lg:mt-14">
                    <button className="mb-2 p12 bg-theme-deep-grinish-cyan hover:bg-theme-parsian-green hover:text-white px-2 text-theme-gray rounded">
                      {item.btn}
                    </button>
                    <h1 className="  lg:w-[82%] text-theme-black">{item.header}</h1>
                    <div className="my-4 lg:my-6">
                      <img src={item.img} alt="" />
                    </div>

                    <div>
                      <div className=" w-full flex items-center gap-2 ">
                        {heroTopData.map((item, index) => {
                          return (
                            <div key={index} className=" mb-4 flex gap-2 items-center ">
                              <div className=" w-4 h-4">
                                <img className=" w-full" src={item.img} alt="hrimg" />
                              </div>
                              <p className=" p12 text-[#777]">{item.name}</p>
                              {item.id !== heroTopData.length && <div className=" border-r border-[#777] h-3 "></div>}
                            </div>
                          );
                        })}
                      </div>
                      <p className=" p15 text-theme-gray">{item.paragraph}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* for border */}
          <div className="hidden lg:block relative h-[435px] mt-[84px] w-[2px] rounded-full bg-theme-light-gray">
            <div className="w-1 rounded-full -left-[1px] top-0 absolute h-[50%] bg-theme-parsian-green overflow-hidden "></div>
          </div>
          {/* for popular */}
          <div className=" mt-10 lg:mt-0 w-full  lg:max-w-[400px]">
            <HeroTopSide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTop;
