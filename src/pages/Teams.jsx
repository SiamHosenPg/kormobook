import React from "react";
import { useTeams } from "../context/TeamsContext";
import Teambox from "../components/Teambox";

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
            <Teambox key={team.teamId} team={team} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;
