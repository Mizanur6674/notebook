import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { aboutTopData } from "./AboutTopData";
import Image from "next/image";

function AboutTop() {
  return (
    <div className=" bg-theme-grinish-cyan">
      <div className=" py-14 lg:py-24 container">
        <div className=" flex justify-center">
          <div className=" lg:w-[45%] mx-auto mb-14">
            <h1 className=" text-[19px] lg:text-[27px]  text-theme-black text-center capitalize tracking-wide">
              <span className=" bg-theme-parsian-green text-white pr-1 mr-2 tracking-wide font-thin text-[19px] lg:text-[27px] capitalize">
                Notebook is a place
              </span>
              where you can find your perfect blogs
            </h1>
          </div>
        </div>
        <div className=" w-full md:w-[52%] mx-auto">
          <div>
            <p className=" p15 text-theme-dark-gray text-center">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives
              without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities.
              Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand emerging sources and
              compelling materials. Globally iterate parallel content
            </p>
          </div>
          <div>
            <h5 className=" text-theme-black capitalize text-center mt-6 mb-4">The best ideas can change who we are.</h5>
            <p className=" p15 text-theme-gray text-center">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives
              without 24/365 catalysts for
            </p>
          </div>
        </div>
        <div className=" mt-10 lg:mt-24 mb-7 lg:mb-12">
          <h1 className=" text-theme-black text-center tracking-wide text-[19px] lg:text-[27px]">
            <span className=" bg-theme-parsian-green text-white mr-2 tracking-wide font-thin capitalize">We Are</span>
            Featured On
          </h1>
        </div>
        {/* using swiper */}
        <Swiper
          spaceBetween={5}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination]}
          slidesPerView={2}
          pagination={{ clickable: true }}
          className=" h-28 lg:h-24"
        >
          {aboutTopData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
               <Image src={item.img} width={114} height={34} alt="hrimg" className=" mx-auto" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default AboutTop;
