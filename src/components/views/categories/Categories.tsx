import React from "react";
import { categoriesData } from "./CategoriesData";

function Categories() {
  return (
    <div className=" lg:bg-theme-grinish-cyan lg:mb-24">
      <div className=" container py-16 lg:py-24 ">
        <h1 className=" text-theme-black text-center text-[19px] lg:text-[27px]">Categories</h1>
        <div className=" w-full lg:w-[85%] mx-auto mt-8 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((item, index) => {
            return (
              <div
                key={index}
                className=" py-7 bg-theme-deep-grinish-cyan text-theme-black rounded shadow hover:bg-theme-parsian-green hover:text-white group"
              >
                <div className=" w-10 h-10 mb-6 mx-auto">
                  <img className="group-hover:hidden" src={item.img} alt="" />
                  <img className="hidden group-hover:block" src={item.img1} alt="" />
                </div>
                <h5 className="  text-center capitalize "> {item.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
