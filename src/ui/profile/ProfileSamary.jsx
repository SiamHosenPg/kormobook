import React from "react";
import Button from "../../components/buttons/Button";
import { SlBadge } from "react-icons/sl";

const ProfileSamary = ({ user }) => {
  return (
    <div className="  flex justify-between">
      <div className=" ">
        <div className="pb-12">
          <h5 className="">Achievement</h5>
          <ul className=" mt-4 flex gap-3 font-medium flex-col">
            {user.achievement &&
              user.achievement.map((data, index) => (
                <li key={index} className="flex items-center gap-2">
                  <SlBadge className="text-lg " />
                  <span>{data.title}</span>
                </li>
              ))}
          </ul>
        </div>
        <h5 className="">Skills</h5>
        <div className=" pb-12 flex items-center gap-2 font-medium mt-4 ">
          {user.skills.map((data, index) => {
            return (
              <div
                key={index}
                className=" bg-background-tertiary px-4 py-1 rounded "
              >
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileSamary;
