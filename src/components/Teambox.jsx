import React from "react";
import Statusbox from "./Statusbox";

const Teambox = ({ team }) => {
  return (
    <div className="bg-background   ">
      <div className="w-full aspect-6/2 border-b  border-border-secondary relative ">
        <img
          src={team.teamImage}
          alt={team.teamName}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="mt-4 flex items-center px-8 py-2 pb-8  justify-between">
        <div>
          <h4 className=" font-semibold">{team.teamName}</h4>
          <p className="text-sm text-text-secondary"> {team.specialty}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-text-secondary">{team.leaderName}</p>
          <div className="flex items-center justify-end mt-1">
            <Statusbox text={team.teamStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teambox;
