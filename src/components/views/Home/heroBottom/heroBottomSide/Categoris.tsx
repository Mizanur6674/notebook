import React from "react";
import { categoriesData } from "./HeroBottomSideData";

function Categoris() {
  return (
    <div className=" my-14">
      <h3 className=" inline p-[2px] bg-theme-parsian-green">Categories </h3>
      <div className=" mt-11">
        {categoriesData.map((item, index) => {
          return (
            <div
              key={index}
              className=" last:border-b-0 flex items-center justify-between border-b border-dotted border-theme-light-gray py-3"
            >
              <h6 className=" text-theme-black">{item.title}</h6>
              <h6 className=" text-theme-black">{item.digit}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categoris;
