import clsx from "clsx";
import React, { useState } from "react";
import { footerSocialData, headerNameData } from "./FooterData";
import MblFooter from "./MblFooter";

function Footer() {
  const [active, setActive] = useState(footerSocialData[0].id);
  return (
    <div className=" bg-theme-grinish-cyan">
      <div className=" container pt-10 lg:pt-24">
        <div className=" flex-1 lg:flex items-start justify-between">
          {/* for Notebook */}
          <div>
            <div className=" flex items-baseline">
              <div className=" bg-theme-parsian-green">
                <h3>Note</h3>
              </div>
              <h5 className=" text-theme-black">Book</h5>
              <div className=" bg-theme-parsian-green w-1 h-1 rounded-full"></div>
            </div>
            <p className=" w-[236px] pt-6 p15 text-theme-dark-gray">
              Did you come here for something in particular or just general Riker
            </p>
          </div>
          <div className=" mt-6 lg:mt-0 flex justify-between md:justify-around xl:justify-around lg:flex-1">
            {headerNameData.map((item, index) => {
              return (
                <div key={index}>
                  <h5 className="pb-6 text-theme-black">{item.title}</h5>
                  <div>
                    {item.name.map((obj, key: number) => {
                      return (
                        <p key={key} className=" pb-2 p15 text-theme-gray">
                          {obj.title}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" mt-9 lg:mt-0">
            <h5 className=" text-theme-black">Subscribe for newsletter</h5>
            <div className=" mt-6 mb-10 flex items-center">
              <input
                className=" w-full text-theme-gray bg-theme-deep-grinish-cyan py-3 px-3 rounded outline-none placeholder:text-theme-gray"
                type="text"
                placeholder="Your Email"
              />
              <button className="bg-theme-parsian-green p15 btn2 rounded">Subscribe</button>
            </div>
            <h5 className=" text-theme-black pb-7">Follow On:</h5>
            <div className=" flex items-center gap-4">
              {footerSocialData.map((item, index) => {
                return (
                  <div key={index} onClick={() => setActive(item.id)}>
                    <item.icon
                      className={clsx(
                        "w-6 h-6 text-[#999] cursor-pointer border border-theme-light-gray rounded",
                        item.id === active && "p-1 bg-theme-parsian-green border-none text-[#fff]"
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" lg:hidden mt-7 lg:mt-16 border-t border-t-[#D1E7E5]">
          <div className=" my-5 p12 text-theme-gray text-center">
            <MblFooter />
          </div>
        </div>
        <div className=" lg:mt-16 border-t border-t-[#D1E7E5]">
          <p className="mt-4 lg:mt-6 pb-6 lg:pb-7 p12 text-theme-gray text-center">
            Designed By Themefisher & Developed By Gethugothemes
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
