import React from "react";
import { heroTopData } from "../../Home/HeroData";
import { authorBlogsData } from "./AuthorBlogsData";

function Authorblogs() {
  return (
    <div className=" mt-14 lg:mt-24 mb-14 container">
      <div className="mb-10 lg:mb-14">
        <h1 className=" text-theme-black tracking-wide">
          <span className=" bg-theme-parsian-green text-white pr-1 mr-2 tracking-wide font-thin">Read</span>Author blogs
        </h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7">
        {authorBlogsData.map((item, index) => {
          return (
            <div key={index} className=" flex flex-col lg:mb-8">
              <div className=" w-full mt-5 lg:mt-0 order-2 lg:order-1">
                <img src="/images/HeroRectangle.svg" className=" w-full" alt="" />
              </div>

              {/* for playback */}
              <div className=" w-full lg:mt-8 order-1 lg:order-2">
                <button className="mb-2 p12 bg-theme-deep-grinish-cyan px-1 text-theme-gray rounded hover:bg-theme-parsian-green hover:text-white">
                  {item.btn}
                </button>
                <h1 className="text-theme-black">{item.header}</h1>
                <div>
                  <div className=" mt-6 mb-4 w-full flex items-center">
                    {heroTopData.map((item, index) => {
                      return (
                        <div key={index} className=" flex items-center">
                          <div className=" w-4 h-4">
                            <img className="w-[14px]" src={item.img} alt="hrimg" />
                          </div>
                          <p className="p12 pl-1 mr-2 text-[#777]">{item.name}</p>
                          {item.id !== heroTopData.length && <div className="mr-2 border-r border-[#777] h-3 "></div>}
                        </div>
                      );
                    })}
                  </div>
                  <p className=" p15 text-theme-gray">{item.paragraph}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Authorblogs;
