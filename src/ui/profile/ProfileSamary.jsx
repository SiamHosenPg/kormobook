import React from "react";
import Button from "../../components/buttons/Button";

const ProfileSamary = ({ user }) => {
  return (
    <div className="mt-8  flex justify-between">
      <div className=" ">
        <div className="mt-4">
          <h5> </h5>
          <div className=" flex gap-2 flex-col">
            {user.achievement &&
              user.achievement.map((data, index) => (
                <div key={index}>
                  <h5>{data.title}</h5>
                  <p>{data.text}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-2 font-medium mt-4 ">
          {user.skills.map((data, index) => {
            return (
              <div
                key={index}
                className=" bg-background-secondary px-4 py-1 rounded-full "
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
