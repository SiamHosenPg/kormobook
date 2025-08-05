import React, { createContext, useState, useEffect, useContext } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [Project, setProject] = useState([]);
  const [LoadingProject, setProjectLoading] = useState(true);

  // ✅ Fetch Data from JSON File with async/await
  const fetchProject = async () => {
    try {
      const res = await fetch("data/projects.json");
      const data = await res.json();
      setProject(data);
      setProjectLoading(false);
    } catch (error) {
      console.error("Failed to fetch Team:", error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  // Create
  const addProject = (employee) => {
    setProject((prev) => [...prev, employee]);
  };

  // Update
  const updateProject = (emp_id, updatedData) => {
    setProject((prev) =>
      prev.map((emp) =>
        emp.emp_id === emp_id ? { ...emp, ...updatedData } : emp
      )
    );
  };

  // Delete
  const deleteProject = (emp_id) => {
    setProject((prev) => prev.filter((emp) => emp.emp_id !== emp_id));
  };

  return (
    <ProjectContext.Provider
      value={{
        Project,
        LoadingProject,
        addProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
