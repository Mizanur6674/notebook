import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

function MblFooter() {
  return (
    <div className="flex items-center justify-center gap-x-10 text-theme-light-black">
      <CgSearch className=" w-4 h-4" />
      <FiEdit className=" w-4 h-4" />
      <p className="p15">Contact</p>
      <div className=" flex items-center gap-1">
        <p className=" p15 ">En</p>
        <BiChevronDown className=" w-full text-[#1E1E1E]" />
      </div>
    </div>
  );
}

export default MblFooter;
