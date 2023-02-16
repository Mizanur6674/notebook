import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { Avatar } from "react-lorem-ipsum";
import { insPostsData } from "./HeroBottomSideData";
import coolImages from "cool-images";

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
              className=" relative group rounded cursor-pointer w-[113px] h-[114px]">
              <Image src={coolImages.one()} layout="fill" alt="instapic"/>
              <AiOutlineInstagram size={26} className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InsPost;
