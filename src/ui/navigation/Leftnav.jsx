import React from "react";
import { navData } from "../../assets/Projectdata/navdata";
import { IconBase } from "react-icons";

const Leftnav = () => {
  return (
    <div>
      <div className="h-[68px] pl-[60px] flex items-center justify-between border-b border-border-secondary bg-background">
        <h4>KormoBook</h4>
      </div>
      <div className="flex flex-col gap-4 mt-12 pl-[60px]">
        {navData.map((item, index) => {
          const Icon = item.icon; // এইখানে icon টা একটা Component
          return (
            <div
              key={index}
              className="flex w-[200px] items-center gap-3  hover:gap-2 duration-200 py-2 cursor-pointer"
              onClick={() => console.log(`Navigating to ${item.path}`)}
            >
              {/*  <span className={`icon-${item.icon} mr-2`}></span> */}
              <Icon className="text-xl" />
              <span className="font-medium">{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-12 text-[12px] px-[40px] text-sm pb-6 text-text-secondary">
        <p>copyright &copy; 2025 KormoBook. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Leftnav;
