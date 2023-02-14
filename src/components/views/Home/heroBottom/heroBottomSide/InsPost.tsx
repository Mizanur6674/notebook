import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { insPostsData } from "./HeroBottomSideData";

function InsPost() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="mt-14">
      <h3 className="  text-theme-black text-[19px] lg:text-[21px]">
        <span className=" bg-theme-parsian-green text-white px-1 mr-2 font-thin text-[19px] lg:text-[21px]">Instagram </span>Posts
      </h3>
      <div className=" mt-11 grid grid-cols-3 gap-3">
        {insPostsData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex group justify-center items-center rounded bg-[#D9D9D9] hover:bg-[#acacad] aspect-square"
            >
              <AiOutlineInstagram size={26} className="hidden group-hover:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InsPost;
