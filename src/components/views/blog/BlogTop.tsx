import React from "react";
import { FaEdit } from "react-icons/fa";

function BlogTop() {
  return (
    <div className=" bg-theme-grinish-cyan">
      <div className=" container py-20">
        {/* for notebook */}
        <div className=" flex justify-center">
          <div className=" flex gap-1 items-center">
            <div className="bg-theme-parsian-green flex items-center gap-4 px-2 text-white">
              <FaEdit className=" w-5 h-5 " />
              <h1 className=" font-thin text-[19px] lg:text-[27px]">Write on</h1>
            </div>
            <h1 className=" ml-2 text-theme-black text-[19px] lg:text-[27px]">Notebook</h1>
          </div>
        </div>
        {/* for paragarph */}
        <div className=" mt-10 w-[95%] md:w-[40%] mx-auto">
          <h5 className=" text-theme-black text-center capitalize">Write on notebook is very simple</h5>

          <p className=" p15 my-6 text-theme-gray text-center">
            Go to your mail and start typing your article with title & categories, attached your image/video file (if have).
          </p>
          <h5 className=" p15 text-theme-black text-center capitalize mb-1">type your personal information.</h5>
          <p className=" p15 text-theme-gray text-center">(Name, Occupation, Address, Social media links)</p>
          <p className=" p15 text-theme-black text-center mt-6">
            <span className=" text-theme-dark-gray">Send it on:</span>blog.notebook@gmail.com
          </p>
          {/* for button */}
          <div className=" flex justify-center">
            <button className="mt-8 py-3 px-6 p15 text-theme-parsian-green capitalize border border-theme-parsian-green rounded">
              go to your mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogTop;
