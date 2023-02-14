import React from "react";
import { BiEdit } from "react-icons/bi";

function WriteOnNotebook() {
  return (
    <div className=" w-full lg:w-[90%] lg:mx-auto mb-16 lg:mb-24 flex justify-center bg-theme-grinish-cyan rounded py-14">
      <div>
        <h3 className=" text-theme-black capitalize pb-4 text-center">want to write on notebook?</h3>
        <p className=" mx-5 md:mx-0 p15 text-theme-gray text-center capitalize">
          there have some simple steps, by following these steps you can be a regular author in notebook
        </p>
        <div className=" flex justify-center">
          <button className="mt-8 py-2 px-4 border border-theme-parsian-green rounded">
            <div className=" flex gap-2 items-center text-theme-parsian-green">
              <BiEdit className=" w-5 h-5" />
              <h5>Write on notebook</h5>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteOnNotebook;
