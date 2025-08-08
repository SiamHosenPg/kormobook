import React from "react";
import Statusbox from "../../components/Statusbox";
import Button from "../../components/buttons/Button";
import { LiaUserEditSolid } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const Profiletop = ({ user }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center gap-8">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-background-secondary">
            <img
              className="w-full h-full object-cover bg-background-secondary"
              src={user.image}
              alt=""
            />
          </div>
          <div>
            <h2 className=" ">{user.name}</h2>
            <h5 className=" text-text mt-1">{user.position}</h5>
            <div className="mt-1">
              <Statusbox text={user.status} />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex flex-col gap-2">
            <div className="flex items-center justify-end gap-2">
              <button className="p-2 rounded bg-background-tertiary  transition duration-300">
                <LiaUserEditSolid className="text-text-secondary text-xl " />
              </button>
              <Button text="Download CV" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2  w-fit pr-4 py-2 ">
          <CgProfile className="text-xl" />
          <span className="font-medium">{user.emp_id}</span>
        </div>
        <div className="flex items-center gap-2  w-fit pr-4 py-2 ">
          <MdOutlineAlternateEmail className="text-xl" />
          <span className="font-medium">{user.email}</span>
        </div>
        <div className="flex items-center gap-2  w-fit  pr-4 py-2 ">
          <FiPhone className="text-lg" />
          <span className="font-medium">{user.phone}</span>
        </div>
        <div className="flex items-center gap-2  w-fit  py-2 ">
          <MdOutlineLocationOn className="text-xl" />
          <span className="font-medium">{user.location}</span>
        </div>
      </div>
      <div className="mt-2 border-b border-border-secondary pb-6">
        {user.about}
      </div>
    </div>
  );
};

export default Profiletop;
