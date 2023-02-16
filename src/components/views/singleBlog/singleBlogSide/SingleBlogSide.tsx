import React from "react";
import Categoris from "../../Home/heroBottom/heroBottomSide/Categoris";
import InsPost from "../../Home/heroBottom/heroBottomSide/InsPost";
import SearchTags from "../../Home/heroBottom/heroBottomSide/SearchTags";
import SideAdd from "../../Home/heroBottom/heroBottomSide/SideAdd";
import Updates from "../../Home/heroBottom/heroBottomSide/Updates";
import dynamic from "next/dynamic"
const TopAuthors = dynamic(() => import('../../Home/heroBottom/heroBottomSide/TopAuthors'),{
  ssr:false
})
function SingleBlogSide() {
  return (
    <div className=" mt-10 lg:mt-0 sm:max-lg:mx-auto sm:max-lg:w-[55%] lg:w-[361px]">
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

export default SingleBlogSide;
