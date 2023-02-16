import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { navbarData } from "./NavbarData";

function MobileNav() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" relative">
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <HiBars3CenterLeft className="w-6 h-6 text-theme-black cursor-pointer" />
      </button>

      {toggle ? (
        <div className=" w-48 mt-3 z-50 absolute top-6 h-64 opacity-95 pb-6 bg-white rounded">
          <div className=" pt-4 px-3">
            <ul className=" text-theme-dark-gray flex-1 space-y-4">
              {navbarData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" group flex items-center gap-1 hover:bg-theme-deep-grinish-cyan hover:px-2 hover:scale-110 hover:duration-100"
                  >
                    <a href={item.href}>
                      <p className=" p15 text-theme-light-black">{item.name}</p>
                    </a>
                    {item.child.length != 0 && (
                      <button className="  focus:outline-none rounded-md text-gray-700 hover:text-gray-900 py-2 px-1">
                        <BiChevronRight className="w-6 h-6 text-[#1E1E1E]" />
                      </button>
                    )}

                    <ul className=" text-theme-black hidden group-hover:block absolute -right-32 -top-0 w-32 bg-white rounded-md shadow-md">
                      {item.child.map((e, index) => {
                        return (
                          <a key={index} href={e.href}>
                            <li className="py-2 px-2 hover:bg-gray-200 hover:text-theme-parsian-green cursor-pointer">
                              {e.name}
                            </li>
                          </a>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MobileNav;
