import React from "react";
import { extraNavData } from "../../assets/Projectdata/navdata";

import { IoSearch } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiNotification4Line } from "react-icons/ri";

const Nav = () => {
  return (
    <div className=" bg-background-secondary  z-50">
      <div className="h-[68px] Pagearea flex items-center justify-between border-b border-border-secondary bg-background">
        <div className="left flex items-center gap-4 w-[50%]">
          <form
            className=" flex items-center bg-background-secondary rounded-full overflow-hidden w-full"
            action=""
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[40px] block px-6 py-1"
            />
            <button className="w-[30px] shrink-0">
              <IoSearch className="text-lg" />
            </button>
          </form>
        </div>
        <div className="right flex items-center gap-6">
          <div>
            <MdOutlineDarkMode className="text-xl" />
          </div>
          <div>
            <RiNotification4Line className="text-xl" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src="/images/extra/profile/2.jpg"
              className="w-full h-full "
              alt=""
            />
          </div>
        </div>
      </div>
      {/* This is the main navigation component that renders the extra navigation items */}

      {/*     <div className=" Pagearea h-[50px] bg-background-secondary  flex items-center justify-start gap-9 ">
        {extraNavData.map((item, index) => {
          const Icon = item.icon; // এইখানে icon টা একটা Component
          return (
            <div
              key={index}
              className="flex items-center gap-1   rounded-full cursor-pointer"
              onClick={() => console.log(`Navigating to ${item.path}`)}
            >
              <Icon className="text-lg " />
              <span className="text-sm font-medium text-text-secondary">
                {item.name}
              </span>
            </div>
          );
        })}
      </div> */}
      {/*  This is where you can add more navigation items or components */}
    </div>
  );
};

export default Nav;
