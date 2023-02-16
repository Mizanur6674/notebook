import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

function Error() {
  return (
    <div className=" my-16 sm:my-24 sm:w-[375px] mx-auto">
      <p className="text-[130px] sm:text-[200px] text-center sm:leading-[200px] text-[#00AAA1] font-bold">404</p>
      <h5 className=" text-theme-black text-center mt- sm:mt-6 capitalize">the page you are looking for does not exist!</h5>
      <Link href="/hero">
      <div className="mt-5 sm:mt-10 flex items-center justify-center gap-3 text-[#00AAA1] cursor-pointer">
        <BsArrowLeft className=" w-6 h-6" />
        <h4>Back To Homepage</h4>
      </div>
      </Link>
    </div>
  );
}

export default Error;
