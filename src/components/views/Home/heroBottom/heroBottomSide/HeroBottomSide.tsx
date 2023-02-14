import React from "react";
import HeroBottomMain from "../heroBottomMain/HeroBottomMain";
import Categoris from "./Categoris";
import { heroBottomSideData } from "./HeroBottomSideData";
import InsPost from "./InsPost";
import SearchTags from "./SearchTags";
import SideAdd from "./SideAdd";
import TopAuthors from "./TopAuthors";
import Updates from "./Updates";

function HeroBottomSide() {
  return (
    <div className=" w-full">
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
