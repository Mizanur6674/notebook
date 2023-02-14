import React, { useState } from "react";
import { socialIconsData } from "./HeroBottomSideData";

function SocialIcons() {
  //   const [active, setActive] = useState(0);
  return (
    <div className=" flex items-center gap-4">
      {socialIconsData.map((item, index) => {
        return (
          <div key={index} className="">
            <a href={item.link}>
              {
                <item.icon className="w-5 h-5 text-[#999] border border-theme-light-gray rounded hover:bg-theme-parsian-green hover:border-none hover:text-[#fff] hover:p-1" />
              }
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default SocialIcons;
