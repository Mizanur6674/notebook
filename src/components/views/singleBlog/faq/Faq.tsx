import clsx from "clsx";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { faqData } from "./FaqData";

function Faq() {
  const [isActive, setActive] = useState(0);
  return (
    <div className="w-full lg:w-[746px] my-16 lg:my-20 mx-auto">
      <div className="mb-10">
        <h3 className="  text-theme-black text-center text-[19px] lg:text-[21px]">
          <span className=" bg-theme-parsian-green text-white px-1 mr-2 font-thin text-[19px] lg:text-[21px]">Frequently</span>
          Asked Question
        </h3>
        <p className=" p15 pt-4 text-theme-gray text-center">
          Did you come here for something in particular or just general Riker-bashing? And blowing
        </p>
      </div>

      <div className=" space-y-5">
        {faqData.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={clsx(
                  "flex items-center justify-between rounded py-5 px-5",
                  index === isActive ? "bg-theme-deep-grinish-cyan text-theme-black" : "bg-theme-grinish-cyan"
                )}
              >
                <h5 className=" capitalize text-theme-light-black">{item.title}</h5>
                <button className="w-6 h-6 text-theme-cyan-blue cursor-pointer" onClick={() => setActive(index)}>
                  {isActive !== index ? <FaPlus /> : <FaMinus />}
                </button>
              </div>
              {index === isActive && (
                <div className=" bg-theme-grinish-cyan">
                  <p className=" p15 px-5 py-3 text-theme-gray">{item.subtitle}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* for Q & A */}
      <div className=" mt-20">
        <h4 className=" text-theme-black text-center capitalize">Can't find an answer to your question?</h4>
        <button className="mt-4 flex items-center justify-center gap-1 border border-theme-parsian-green rounded py-2 px-4 mx-auto">
          <h6 className=" text-theme-parsian-green text-center">Contact us</h6>
          <HiArrowSmRight className=" text-theme-parsian-green" />
        </button>
      </div>
    </div>
  );
}

export default Faq;
