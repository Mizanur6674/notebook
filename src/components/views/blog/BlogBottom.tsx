import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

function BlogBottom() {
  return (
    <div className=" my-24 container">
      <div className=" flex justify-center">
        <div className=" mb-14">
          <h1 className=" text-theme-black text-[19px] lg:text-[27px]">
            <span className=" bg-theme-parsian-green text-white pr-1 mr-2 font-thin text-[19px] lg:text-[27px]">
              How Can You Earn
            </span>
            By Wrinting on Medium
          </h1>
        </div>
      </div>
      <div className=" w-[95%] md:w-[89%] mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[10rem]">
          <div>
            <h3 className=" text-theme-black capitalize text-center mb-6">by ad revinue</h3>
            <p className=" p15 text-theme-gray text-center">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives
              without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities.
            </p>
          </div>
          <div>
            <h3 className=" text-theme-black capitalize text-center mb-6">by affiliate programme</h3>
            <p className=" p15 text-theme-gray text-center">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives
              without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities.
              Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand
            </p>
          </div>
        </div>
      </div>
      <h3 className=" text-theme-black mt-20 mb-6 text-center">Want To Know More?</h3>
      <div className=" flex items-center justify-center gap-1">
        <h6 className=" text-theme-parsian-green capitalize text-center">Go to FEQ page </h6>
        <HiArrowSmRight className=" text-theme-parsian-green" />
      </div>
    </div>
  );
}

export default BlogBottom;
