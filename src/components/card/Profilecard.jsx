import React from "react";
import Statusbox from "../Statusbox";
import Badge from "../badge/Badge";
import { NavLink } from "react-router-dom";

const Profilecard = ({ employee }) => {
  return (
    <NavLink
      to={`/profile/${employee.emp_id}`}
      className="member-card bg-background px-8 py-5 pb-6"
    >
      <div className="flex items-center justify-between ">
        <div className={`w-16 h-16 rounded-full overflow-hidden `}>
          <img
            src={employee.image}
            alt={employee.name}
            className="w-full h-full rounded-full"
          />
        </div>
        <div>
          <span className="text-sm block text-end font-medium text-text-secondary">
            {employee.emp_id}
          </span>
          <div className="flex items-center mt-1  justify-end">
            <Statusbox text={employee.status} />
          </div>
        </div>
      </div>
      <div className="member-info mt-2">
        <h5 className="text-lg font-semibold flex items-center gap-1">
          {employee.name} <Badge badge={employee.level} />
        </h5>
        <p className="text-sm  text-text-secondary">{employee.position}</p>
        <p className="mt-2 text-sm line-clamp-2">{employee.about}</p>
      </div>
    </NavLink>
  );
};

export default Profilecard;
