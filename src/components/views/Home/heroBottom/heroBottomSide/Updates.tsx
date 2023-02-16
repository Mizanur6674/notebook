import React from "react";
import { updateData } from "./HeroBottomSideData";

function Updates() {
  return (
    <div className="mt-6">
      <h3 className="  text-theme-black text-[19px] lg:text-[21px]">
        <span className=" bg-theme-parsian-green text-white px-1 mr-2 font-thin text-[19px] lg:text-[21px]">Today&apos;s </span>Update
      </h3>
      <div className="mt-11 grid grid-cols-2 gap-6">
        {updateData.map((item, index) => {
          return (
            <div key={index} className="flex justify-center bg-theme-grinish-cyan rounded shadow">
              <div className=" w-[75%] my-6">
                <h2 className=" text-theme-parsian-green text-center">{item.digit}</h2>
                <p className=" p15 text-theme-black text-center">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Updates;
