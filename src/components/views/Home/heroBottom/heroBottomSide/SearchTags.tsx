import clsx from "clsx";
import React, { useState } from "react";
import { searchTagsData } from "./HeroBottomSideData";

function SearchTags() {
  const [active, setActive] = useState(searchTagsData[3].title);

  return (
    <div className="my-10 lg:my-14">
      <h3 className="  text-theme-black text-[19px] lg:text-[21px]">
        <span className=" bg-theme-parsian-green text-white px-1 mr-2 font-thin text-[19px] lg:text-[21px]">Search </span>With
        Tags
      </h3>
      <div className=" max-w[337px] mt-11 flex flex-wrap gap-3 cursor-pointer">
        {searchTagsData.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                " py-2 px-5 border border-theme-light-gray text-theme-gray rounded ",
                item.title === active && "bg-theme-parsian-green border-none text-white"
              )}
              onClick={() => setActive(item.title)}
            >
              <p className={clsx(" p15", item.title === active && "font-thin tracking-wide")}>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchTags;
