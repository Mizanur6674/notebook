import Image from "next/image";
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
                className=" py-7 bg-theme-deep-grinish-cyan text-theme-black rounded shadow cursor-pointer hover:bg-theme-parsian-green hover:text-white group"
              >
                <div className=" mb-6">
                  <Image className="group-hover:hidden mx-auto" width={34.4} height={40} src={item.img} alt=" ctgImg" />
                  <Image className="hidden group-hover:block mx-auto" width={34.4} height={40} src={item.img1} alt=" ctgImg" />
                 
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
