import clsx from "clsx";
import React, { useState } from "react";
import { propsData } from "../../shared/PropsData";
import { TravelInfo } from "../../shared/TravelInfo";

function SearchResult() {
  const [active, setActive] = useState(false);
  return (
    <div className=" my-10 lg:my-24 container">
      <div className=" border-b border-theme-light-gray">
        <p
          className={clsx(
            " p15 text-theme-gray cursor-pointer",
            active === true && "border-b-2 pb-3 border-b-theme-parsian-green w-[50%] lg:w-[15%]"
          )}
          onClick={() => setActive(!active)}
        >
          Search Result For <span className=" text-theme-black">Travel</span>
        </p>
      </div>
      <div className=" w-full lg:w-[65%]">
        <TravelInfo data={propsData} amount={4} className="text-[27px] font-semibold pb-1" />
      </div>
    </div>
  );
}

export default SearchResult;
