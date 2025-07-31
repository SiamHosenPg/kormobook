import React, { createContext, useState, useEffect, useContext } from "react";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [Teams, setteam] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch Data from JSON File with async/await
  const fetchTeam = async () => {
    try {
      const res = await fetch("/data/teams.json");
      const data = await res.json();
      setteam(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch Team:", error);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  // Create
  const addTeam = (employee) => {
    setteam((prev) => [...prev, employee]);
  };

  // Update
  const updateTeam = (emp_id, updatedData) => {
    setteam((prev) =>
      prev.map((emp) =>
        emp.emp_id === emp_id ? { ...emp, ...updatedData } : emp
      )
    );
  };

  // Delete
  const deleteTeam = (emp_id) => {
    setteam((prev) => prev.filter((emp) => emp.emp_id !== emp_id));
  };

  return (
    <TeamContext.Provider
      value={{
        Teams,
        loading,
        addTeam,
        updateTeam,
        deleteTeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeams = () => useContext(TeamContext);
