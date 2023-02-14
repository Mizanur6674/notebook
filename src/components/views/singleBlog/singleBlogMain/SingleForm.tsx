import React from "react";
import { AiOutlineGoogle, AiOutlineHeart, AiOutlineQuestionCircle, AiOutlineTwitter } from "react-icons/ai";
import { BiCaretDown, BiError } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { SiDisqus } from "react-icons/si";

function SingleForm() {
  return (
    <div className=" mt-4">
      {/* for favourite */}
      <div className=" flex flex-col sm:flex-row items-center gap-2 lg:gap-8 justify-between">
        <div className=" flex  items-center gap-2 sm:gap-8">
          <div className=" flex items-center gap-1">
            <AiOutlineHeart className=" text-red-500" />
            <p className=" p15 text-theme-gray"> favourite</p>
          </div>
          <div className=" flex items-center gap-1 bg-[#30E3DF] px-2">
            <AiOutlineTwitter className=" text-white" />
            <p className=" p15 text-white"> Twitter</p>
          </div>
          <div className=" flex items-center gap-1 bg-blue-500 px-2">
            <RiFacebookFill className=" text-white" />
            <p className=" p15 text-white"> Share</p>
          </div>
        </div>
        <div className=" flex items-center gap-x-1 cursor-pointer mt-2 sm:mt-0 mb-2 sm:mb-0">
          <p className=" p15 text-theme-gray">Sort by Best</p>
          <BiCaretDown className=" text-theme-gray" />
        </div>
      </div>

      {/* for form */}
      <div className=" mt-4 flex items-center gap-4">
        <FcBusinessman className=" w-12 h-12" />
        <input
          type="text"
          className=" w-full text-theme-gray border border-theme-gray opacity-50 py-2 px-2 rounded placeholder:text-theme-gray placeholder:text-xl"
          placeholder="Start the discussion..."
        />
      </div>
      {/* for icon */}
      <div className=" mt-2 ml-[7%]">
        <p className=" text-theme-gray uppercase">log in with</p>
        <div className=" mt-3 flex flex-col sm:flex-row gap-y-12 sm:gap-y-0 items-center gap-4">
          <div className=" flex items-center gap-2">
            <SiDisqus className="w-9 h-9 text-[#30E3DF]" />
            <div className=" bg-blue-900 p-2 mx-auto rounded-full">
              <RiFacebookFill className="w-5 h-5 text-white text-center" />
            </div>
            <div className=" bg-[#30E3DF] p-2 mx-auto rounded-full">
              <AiOutlineTwitter className="w-5 h-5 text-white text-center" />
            </div>
            <div className=" bg-red-600 p-2 mx-auto rounded-full">
              <AiOutlineGoogle className="w-5 h-5 text-white text-center" />
            </div>
          </div>
          <div className=" w-full">
            <div className="-mt-8 pb-2 flex items-center gap-1">
              <p className="p15 text-theme-gray uppercase"> or sign up with disqus</p>
              <AiOutlineQuestionCircle className=" text-theme-gray" />
            </div>
            <input
              type="text"
              className=" w-full py-1 px-2 border border-theme-gray rounded opacity-50 placeholder: text-theme-gray"
              placeholder="Name"
            />
          </div>
        </div>
      </div>

      <p className=" mt-12 sm:mt-24 p15 text-theme-gray text-center"> Be the first to comment</p>

      <div className="mt-10 lg:mt-20 border-t-2 border-t-theme-light-gray ">
        <div className=" flex flex-col md:flex-row items-center justify-between">
          <div className=" mt-3 flex flex-col sm:flex-row items-center gap-y-3 sm:gap-8">
            <div className=" flex items-end gap-2">
              <MdOutlineUnsubscribe className="w-5 h-5 text-theme-gray" />
              <p className=" p15 text-theme-gray"> Subscribe</p>
            </div>
            <div className=" flex items-end gap-2">
              <SiDisqus className="w-5 h-5 text-theme-gray" />
              <p className=" p15 text-theme-gray">Add Disqus to your site</p>
            </div>
            <div className=" flex items-end gap-2">
              <BiError className="w-5 h-5 text-theme-gray" />
              <p className=" p15 text-theme-gray">Do Not Sell My Data</p>
            </div>
          </div>
          <h1 className="mt-3 text-theme-dark-gray uppercase"> disqus</h1>
        </div>
      </div>
    </div>
  );
}

export default SingleForm;
