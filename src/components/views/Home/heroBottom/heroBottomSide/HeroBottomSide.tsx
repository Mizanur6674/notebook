import React from "react";
import Categoris from "./Categoris";
import InsPost from "./InsPost";
import SearchTags from "./SearchTags";
import SideAdd from "./SideAdd";
import Updates from "./Updates";
import dynamic from "next/dynamic"
const TopAuthors = dynamic(() => import('./TopAuthors'),{
  ssr:false
})

function HeroBottomSide() {

  return (
    <div className=" sm:max-lg:mx-auto sm:max-lg:w-[55%] lg:w-[361px]">
      <div>
        <TopAuthors />
      </div>
      <div>
        <SideAdd />
      </div>
      <div>
        <Categoris />
      </div>
      <div>
        <Updates />
      </div>
      <div>
        <InsPost />
      </div>
      <div>
        <SearchTags />
      </div>
    </div>
  );
}

export default HeroBottomSide;
