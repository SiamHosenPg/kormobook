import React from "react";
import Statusbox from "../Statusbox";
import { IoMdLink } from "react-icons/io";
import { TbHandClick } from "react-icons/tb";
import ProjectStatusIcon from "../ProjectStatusIcon";

const ProjectBox = ({ project }) => {
  return (
    <ul className="bg-background flex items-center justify-between px-8 py-4">
      <li className=" w-2/12  ">{project.projectId}</li>
      <li className=" w-3/12 ">{project.projectName}</li>
      <li className=" w-2/12 ">
        <ProjectStatusIcon text={project.status} />
      </li>
      <li className=" w-3/12 ">{project.contributeTeam}</li>
      <li className=" w-2/12 ">{project.price} $</li>
      <li className=" w-2/12 ">{project.projectDeliveryTime}</li>
      <li className=" w-[70px] shrink-0 flex items-center justify-end gap-4  text-right">
        <IoMdLink className="text-xl" />
        <TbHandClick className="text-xl" />
      </li>
    </ul>
  );
};

export default ProjectBox;
