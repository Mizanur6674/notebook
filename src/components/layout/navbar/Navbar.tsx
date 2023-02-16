import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { BiSun } from "react-icons/bi";
import { HiOutlineMoon } from "react-icons/hi";
import { navbarData } from "./NavbarData";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <div className=" bg-[#E8F3F3]">
      <div className=" pt-6 pb-5 container flex items-center justify-between">
        {/* mobile nav start */}
        <div className=" md:hidden">
          <MobileNav />
        </div>
        {/* mobile nav end */}

        {/*  destopNav start */}
        <div className=" hidden md:flex items-center gap-8">
          {navbarData.map((item, index) => {
            return (
              <div key={index} className=" flex group relative items-center">
                <a href={item.href}>
                  <p className=" p15 text-theme-light-black">{item.name}</p>
                </a>
                {item.child.length != 0 && (
                  <button className="  focus:outline-none rounded-md text-gray-700 hover:text-gray-900 py-2 px-1">
                    <BiChevronDown className="w-6 h-6 text-[#1E1E1E]" />
                  </button>
                )}

                <ul className=" text-theme-black hidden group-hover:block absolute right-0 top-10 w-32 bg-white rounded-md shadow-md">
                  {item.child.map((e,index) => {
                    return (
                      <a key={index} href={e.href}>
                        <li className="py-2 px-2 hover:bg-gray-200 hover:text-theme-parsian-green cursor-pointer">{e.name}</li>
                      </a>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        {/*  destopNav endcc */}

        <div className=" flex items-baseline">
          <h1 className=" bg-theme-parsian-green font-thin text-[20px] lg:text-[27px] px-[2px]">Note</h1>
          <h5 className=" text-theme-black font-thin text-sm lg:text-[17px] ml-[2px]">Book</h5>
          <div className=" bg-theme-parsian-green w-1 h-1 rounded-full"></div>
        </div>

        <div className=" flex items-center gap-x-10 text-theme-light-black cursor-pointer">
          <div className="hidden lg:flex items-center lg:gap-x-10  text-theme-light-black">
            <CgSearch />
            <FiEdit />
            <p className="p15">Contact</p>
            <div className=" flex items-center gap-1">
              <p className=" p15 ">En</p>
              <BiChevronDown className=" w-full text-[#1E1E1E]" />
            </div>
          </div>

          <div className=" text-theme-parsian-green flex items-center gap-2">
            <BiSun />
            <div className="p-1 text-white bg-theme-parsian-green rounded">
              <HiOutlineMoon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
