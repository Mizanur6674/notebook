import clsx from "clsx";
import React, { useState } from "react";
import { singleBlogMainData, socialIconsData, stepData } from "./SingleBlogMainData";
import { IoShareSocialOutline } from "react-icons/io5";
import { heroData, heroTopData } from "../../Home/HeroData";
import Comments from "./Comments";
import SingleForm from "./SingleForm";

function SingleBlogMain() {
  const [active, setActive] = useState(stepData[0].id);
  return (
    <div>
      {/* for playback  */}
      <div>
        <button className="mb-2 p12 bg-theme-deep-grinish-cyan px-1 text-theme-gray rounded">Travel</button>
        <h1 className=" lg:w-[85%] text-theme-black">I Created a Developer Rap Video - Here&#39;s What I Learned</h1>
        <div>
          <div className=" my-4 w-full flex items-center">
            <div className=" flex items-center">
              <div className=" w-4 h-4">
                <img className=" w-[14px]" src="/images/heroTop1.svg" alt="hrimg" />
              </div>
              <p className="p12 ml-1 mr-2 text-[#777]">Jesica Koli</p>
              <div className="mr-2 border-r border-[#777] h-3 "></div>
              <div className=" w-4 h-4">
                <img className=" w-[14px]" src="/images/heroTop2.svg" alt="hrimg" />
              </div>
              <p className="p12 ml-1 mr-2 text-[#777]">02 December 2022</p>
            </div>
          </div>
          <div className="my-6 lg:my-10 xl:w-[856px]">
            <img className=" w-full " src="/images/HeroRectangle.svg" alt="" />
          </div>

          <p className=" p15 text-theme-gray">
            Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed,you
            appeared for an instant to be in two places at once. We have a saboteur aboard. We know you are dealing in stolen ore.
            But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer
            for 75 years? Fate. It protects fools, little children, and ships.
          </p>
        </div>
      </div>

      <div className=" mt-8">
        <h3 className="mb-5 text-[#333]">I Created a Developer Rap Video - Here&#39;s What I Learned</h3>
        <p className=" p15 text-theme-gray">
          Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you
          appeared for an instant to be in two places at once. We have a saboteur aboard. We know you are dealing in stolen
          ore.But I wanna talk about th assassination attempt
        </p>
      </div>
      <div className=" mt-8">
        <div className=" bg-theme-deep-grinish-cyan rounded flex items-center justify-around">
          <h5 className="py-1 text-theme-parsian-green">First</h5>
          <h5 className="py-1 text-theme-parsian-green">Last</h5>
          <h5 className="py-1 text-theme-parsian-green">Handle</h5>
        </div>

        <div className=" mt-3">
          {singleBlogMainData.map((item, index) => {
            return (
              <div key={index} className=" mt-6 flex items-center justify-around">
                <p className=" p15 text-theme-gray">{item.title1}</p>
                <p className=" p15 text-theme-gray">{item.title2}</p>
                <p className=" p15 text-theme-gray">{item.title3}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" mt-8">
        <p className=" p15 text-theme-gray">
          Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you
          appeared for an instant to be in two places at once. We have a saboteur aboard.
        </p>
      </div>
      <div className=" bg-theme-grinish-cyan mt-8 -mx-5 sm:-mx-0">
        <p className=" p-8 p15 text-theme-gray italic">
          “Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you
          appeared for an instant to be in two places at once. We have a saboteur aboard. We know you are dealing in stolen ore.
          But I wanna talk about the assassination attempt on Lieutenant Worf.”
        </p>
      </div>
      <div className=" mt-8">
        <p className=" p15 text-theme-gray">
          Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you
          appeared for an instant to be in two places at once. We have a saboteur aboard.
        </p>
      </div>
      <div className=" mt-8">
        <h3 className="mb-5 text-[#333]">I Created a Developer Rap Video - Here&#39;s What I Learned</h3>
        <p className=" p15 text-theme-gray">
          Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you
          appeared for an instant to be in two places at once. We have a saboteur aboard.
        </p>
      </div>
      <div className=" mt-6">
        <li className=" pt-4 p15 text-theme-gray list-decimal">Did you come here for something in particular or just general</li>
        <li className=" pt-4 p15 text-theme-gray list-decimal">
          Did you come here for something in particular or just general Riker-bashing
        </li>
        <li className=" pt-4 p15 text-theme-gray list-decimal">Did you come here for something in particula</li>
        <p className=" pt-4 p15 text-theme-gray">
          Did you come here for something in particular or just general Riker-bashing? And blowing into maximum
        </p>
      </div>
      <div className=" mt-8">
        <div className=" flex items-center">
          {stepData.map((item, index) => {
            return (
              <div key={index}>
                <p
                  className={clsx(
                    " text-theme-parsian-green p15 border py-2 px-7 cursor-pointer",
                    active === item.id && " bg-theme-grinish-cyan text-[#333]"
                  )}
                  onClick={() => setActive(item.id)}
                >
                  {item.step}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" p-8 bg-theme-grinish-cyan -mx-5 sm:-mx-0">
          <h4 className="pb-4 text-[#333]">Title goes here</h4>
          <p className=" p15 text-theme-gray">
            “Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you
            appeared for an instant to be in two places at once. We have a saboteur aboard. We know you are dealing in stolen ore.
            But I wanna talk about the assassination attempt on Lieutenant Worf.”
          </p>
        </div>
      </div>
      <div className=" mt-8 flex items-center gap-8">
        <div className=" border-y border-y-theme-light-gray w-[40%]"></div>
        <div className=" flex items-center gap-4">
          {socialIconsData.map((item, index) => {
            return (
              <div className="w-5 h-5 border border-theme-light-gray rounded-full hover:bg-theme-parsian-green">
                <item.icon className="w-full text-theme-gray hover:text-white text-center" />
              </div>
            );
          })}
        </div>
        <div className=" border-y border-y-theme-light-gray w-[40%]"></div>
      </div>
      <IoShareSocialOutline className="w-6 h-6 mt-8 text-theme-gray " />

      <div className=" mt-8 flex gap-8">
        {/* for feature */}
        <div className=" flex-1">
          <h3 className=" text-theme-black">
            <span className=" bg-theme-parsian-green text-white px-1 mr-3">See Related</span>Posts
          </h3>
          {/* for playback */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            {heroData.map((item, index) => {
              return (
                <div key={index}>
                  <div className=" mt-10 lg:mt-14 mb-6">
                    <img src={item.img} alt="" className=" w-full" />
                  </div>
                  <button className="mb-2 p12 bg-theme-deep-grinish-cyan px-1 text-theme-gray rounded hover:bg-theme-parsian-green hover:text-white">
                    {item.btn}
                  </button>
                  <h1 className=" text-theme-black">{item.header}</h1>
                  <div>
                    <div className="mt-6 mb-4 w-full flex items-center">
                      {heroTopData.map((item, index) => {
                        return (
                          <div key={index} className=" flex items-center ">
                            <div className=" w-4 h-4">
                              <img className=" w-[14px]" src={item.img} alt="hrimg" />
                            </div>
                            <p className="p12 ml-1 mr-2  text-[#777]">{item.name}</p>
                            {item.id !== heroTopData.length && <div className="mr-2 border-r border-[#777] h-3 "></div>}
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
      </div>
      <div className=" mt-14">
        <Comments />
        <SingleForm />
      </div>
    </div>
  );
}

export default SingleBlogMain;
