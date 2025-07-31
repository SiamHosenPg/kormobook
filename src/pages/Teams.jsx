import React from "react";
import { useTeams } from "../context/TeamsContext";

const Teams = () => {
  const { Teams, loading } = useTeams();
  return (
    <div className="Pagearea Toparea">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Teams.map((team) => (
            <div key={team.teamId} className="bg-white p-4  ">
              <img
                src={team.teamImage}
                alt={team.teamName}
                className="w-full h-32 object-cover  mb-4"
              />
              <h3 className="text-lg font-semibold">{team.teamName}</h3>
              <p className="text-sm text-gray-600">
                Leader ID: {team.leaderId}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;
