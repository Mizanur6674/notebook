import React from "react";
import SingleBlogMain from "./singleBlogMain/SingleBlogMain";
import SingleBlogSide from "./singleBlogSide/SingleBlogSide";

function SingleBlog() {
  return (
    <div className=" container py-10 lg:py-20">
      <div className=" flex flex-col lg:flex-row gap-x-16">
        <SingleBlogMain />
        <SingleBlogSide />
      </div>
    </div>
  );
}

export default SingleBlog;
