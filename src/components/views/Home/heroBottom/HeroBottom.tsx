import React from "react";
import HeroBottomMain from "./heroBottomMain/HeroBottomMain";
import HeroBottomSide from "./heroBottomSide/HeroBottomSide";

function HeroBottom() {
  return (
    <div className=" container mt-16 pb-14 ">
      <div className=" grid grid-cols-1 xl:grid-cols-3 lg:gap-20 gap-y-16">
        <div className=" order-2 lg:order-1 grid col-span-1 xl:col-span-2">
          <HeroBottomMain />
        </div>
        {/* for bottom side */}
        <div className=" order-1 lg:order-2">
          <HeroBottomSide />
        </div>
      </div>
    </div>
  );
}

export default HeroBottom;
