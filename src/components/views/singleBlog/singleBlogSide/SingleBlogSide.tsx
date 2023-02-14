import React from "react";
import Categoris from "../../Home/heroBottom/heroBottomSide/Categoris";
import InsPost from "../../Home/heroBottom/heroBottomSide/InsPost";
import SearchTags from "../../Home/heroBottom/heroBottomSide/SearchTags";
import SideAdd from "../../Home/heroBottom/heroBottomSide/SideAdd";
import TopAuthors from "../../Home/heroBottom/heroBottomSide/TopAuthors";
import Updates from "../../Home/heroBottom/heroBottomSide/Updates";

function SingleBlogSide() {
  return (
    <div className=" mt-10 lg:mt-0 lg:w-[361px]">
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
