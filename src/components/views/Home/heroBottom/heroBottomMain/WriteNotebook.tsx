import React from "react";
import { BiEdit } from "react-icons/bi";

function WriteNotebook() {
  return (
    <div className=" flex justify-center bg-theme-grinish-cyan rounded -mx-6 lg:-mx-0 px-12 lg:px-0 py-14">
      <div>
        <h3 className=" text-theme-black text-center">Share your knowledge with our readers</h3>
        <div className=" flex justify-center">
          <button className="mt-6 py-3 px-4 border border-theme-parsian-green rounded">
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

export default WriteNotebook;
