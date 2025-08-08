import React from "react";

const ProfileCountingbox = ({ number, text }) => {
  return (
    <div className="rounded w-full px-8 py-5">
      <div className="">
        <div className="text-4xl text-right font-bold ">{number}</div>
        <div className=" mt-3 text-right text-text-secondary uppercase font-medium text-[13px]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ProfileCountingbox;
