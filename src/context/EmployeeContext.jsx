import React, { createContext, useState, useEffect, useContext } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch Data from JSON File with async/await
  const fetchEmployees = async () => {
    try {
      const res = await fetch("/data/employee.json");
      const data = await res.json();
      setEmployees(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Create
  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  // Update
  const updateEmployee = (emp_id, updatedData) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.emp_id === emp_id ? { ...emp, ...updatedData } : emp
      )
    );
  };

  // Delete
  const deleteEmployee = (emp_id) => {
    setEmployees((prev) => prev.filter((emp) => emp.emp_id !== emp_id));
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        loading,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);
