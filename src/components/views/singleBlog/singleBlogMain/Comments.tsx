import clsx from "clsx";
import React, { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { commentsData } from "./SingleBlogMainData";

function Comments() {
  const [active, setActive] = useState(commentsData[0].id);
  return (
    <div className=" flex flex-col sm:flex-row items-center gap-y-4 justify-between mt-4 sm:border-b border-theme-light-gray">
      <div className=" flex items-center gap-2 lg:gap-6 ">
        {commentsData.map((item, index) => {
          return (
            <div key={index}>
              <p
                className={clsx(
                  " pb-2 p15 text-theme-gray cursor-pointer",
                  active === item.id && " border-b-2 border-b-theme-parsian-green"
                )}
                onClick={() => setActive(item.id)}
              >
                {item.comments}
              </p>
            </div>
          );
        })}
      </div>
      <div className=" flex items-center gap-x-1 cursor-pointer mb-2 sm:mb-0">
        <p className=" p15 text-theme-gray">Login</p>
        <BiCaretDown className=" text-theme-gray" />
      </div>
    </div>
  );
}

export default Comments;
