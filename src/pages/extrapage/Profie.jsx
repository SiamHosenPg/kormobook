import React from "react";
import { useEmployees } from "../../context/EmployeeContext";
import { useParams } from "react-router-dom";

const Profie = () => {
  const { employees, loading } = useEmployees();
  const { emp_id } = useParams();

  const user = employees.find((u) => u.emp_id === parseInt(emp_id));

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div>
      {emp_id}
      <div>{user.name}</div>
    </div>
  );
};

export default Profie;
