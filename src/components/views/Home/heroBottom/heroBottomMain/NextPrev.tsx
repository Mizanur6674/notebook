import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { nextPrevData } from "./heroBottomData";

function NextPrev() {
  return (
    <div className="mt-7 lg:my-20">
      <div className=" flex items-center gap-2 lg:gap-4 justify-center">
        <button className="py-2 px-4 flex items-center gap-1 border border-theme-light-gray rounded hover:bg-theme-parsian-green text-theme-gray hover:boreder-none hover:text-[#fff]">
          <BsArrowLeft className=" w-3 h-3 sm:w-5 sm:h-5 " />
          <p className="p12 sm:p15 ">Prev.</p>
        </button>
        {nextPrevData.map((item, index) => {
          return (
            <div key={index}>
              <button className="py-2 px-4  flex items-center gap-1 border border-theme-light-gray rounded">
                <p className="p15 text-theme-gray">{item.btn}</p>
              </button>
            </div>
          );
        })}

        <button className="py-2 px-4 flex items-center gap-1 border border-theme-light-gray rounded hover:bg-theme-parsian-green text-theme-gray hover:boreder-none hover:text-[#fff]">
          <p className="p12 sm:p15">Next</p>
          <BsArrowRight className=" w-3 h-3 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}

export default NextPrev;
