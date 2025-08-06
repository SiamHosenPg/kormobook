import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

import { MdOutlineAccessTime } from "react-icons/md";
import { BiError } from "react-icons/bi";

import { IoIosCheckmarkCircle } from "react-icons/io";

const ProjectStatusIcon = ({ text }) => {
  return (
    <div className=" ">
      {text === "Completed" && (
        <IoIosCheckmarkCircle className="text-green-500 text-xl" />
      )}
      {text === "Immediate" && <BiError className="text-red-500 text-xl" />}
      {text === "Review" && (
        <MdOutlineAccessTime className="text-yellow-500 text-xl" />
      )}
      {text === "Progress" && (
        <BiLoaderCircle className="text-blue-500 text-xl" />
      )}
    </div>
  );
};

export default ProjectStatusIcon;
