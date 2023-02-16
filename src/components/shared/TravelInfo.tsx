import Image from "next/image";
import React from "react";
import { heroTopData } from "../views/Home/HeroData";
import { propsDataType } from "./PropsData";
import coolImages from "cool-images";
export const TravelInfo: React.FC<{
  data: propsDataType[];
  amount: number;
  isShowImage?: boolean;
  className?: string;
}> = ({ data, amount, isShowImage = true, className }) => {
  
  return (
    <div>
      {/* for playback */}
      {[...data].slice(0, amount).map((item, index) => {
        return (
          <div key={index} className=" mt-8 lg:mt-12 gap-5 lg:gap-8 flex flex-col lg:flex lg:flex-row">
            {isShowImage && (
              <div className=" relative rounded overflow-hidden w-full h-52 lg:h-[180px] lg:w-[266px] order-2 lg:order-1">
                <Image src={coolImages.one()} alt="Picture of the author" layout="fill" />
              </div>
            )}
            <div key={index} className=" order-1 lg:order-2">
              <button className=" mb-2 p12 bg-theme-deep-grinish-cyan px-1 text-theme-gray rounded hover:bg-theme-parsian-green hover:text-white ">
                {item.btn}
              </button>
              <h5 className={` w-full text-[17px] text-theme-black ${className}`}>{item.header}</h5>

              {/* for time and date */}
              <div className=" lg:w-[401px]">
                <div className=" w-full flex items-center">
                  {heroTopData.map((item, index) => {
                    return (
                      <div key={index} className=" my-4 flex items-center">
                        <div className=" rounded-full overflow-hidden">
                          <Image src={item.img} width={16} height={16} alt="hrimg" />
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
  );
};
