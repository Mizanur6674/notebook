import React from "react";
import { data, heroSideData, heroTopData } from "../HeroData";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

function HeroTopSide() {
  const [active, setActive] = useState(heroSideData[0].id);
  return (
    <div className="" id="top-side">
      <h3 className=" text-theme-black text-[19px] lg:text-[21px]">
        <span className=" bg-theme-parsian-green text-white py-1 mr-2 font-thin text-[19px] lg:text-[21px]">Populer</span>Posted
      </h3>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className=" h-[540px] sm:h-[490px]"
      >
        {data.map((e,index) => (
          <div key={index}>
          <SwiperSlide>
            {e.map((item, index) => {
              return (
                <div key={index} className=" mt-14 ">
                  <button className="mb-2 p12 bg-theme-deep-grinish-cyan hover:bg-theme-parsian-green hover:text-white px-2 text-theme-gray rounded">
                    {item.btn}
                  </button>
                  <h5 className=" mb-4 w-full text-theme-black">{item.header}</h5>

                  <div>
                    <div className=" w-full flex items-center gap-3 ">
                      {heroTopData.map((item, index) => {
                        return (
                          <div key={index} className=" mb-4 flex gap-2 items-center ">
                            <div className=" rounded-full overflow-hidden">
                          <Image src={item.img} width={16} height={16} alt="hrimg" />
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
          </SwiperSlide>

          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroTopSide;
