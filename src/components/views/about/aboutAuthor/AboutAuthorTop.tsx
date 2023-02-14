import React from "react";
import { aboutAuthorTopData } from "./AboutAthorTopData";

function AboutAuthorTop() {
  return (
    <div className=" bg-theme-grinish-cyan">
      <div className=" container pt-14 lg:py-20">
        <div className=" flex flex-col lg:flex-row items-center gap-6">
          <div className=" -mx-6 lg:mx-0 order-2 lg:order-1">
            <img className=" w-full" src="/images/authorRectangle1.svg" alt="" />
          </div>
          <div className=" w-full md:w-[60%] order-1">
            <h2 className=" text-theme-black">Hi! I&#39;m Saimon D&#39;silva</h2>
            <p className=" p15 text-theme-gray py-6">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives
              without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities.
              Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly brand emerging sources and
              compelling materials. Globally iterate parallel content
            </p>
            <h5 className=" text-theme-black capitalize">The best ideas can change who we are.</h5>
            <p className=" p15 text-theme-gray pt-4 pb-10">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives
              without 24/365 catalysts for
            </p>
            <h5 className=" text-theme-black capitalize">Follow on social media:</h5>
            <div className=" flex items-center gap-4 mt-8">
              {aboutAuthorTopData.map((item, index) => {
                return (
                  <div key={index} className="">
                    <item.icon className="w-6 h-6 text-[#999] border border-theme-light-gray rounded hover:border-none hover:text-white hover:p-1 hover:bg-theme-parsian-green" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAuthorTop;
