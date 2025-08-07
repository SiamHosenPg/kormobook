import React from "react";
import { useEmployees } from "../context/EmployeeContext";
import Profilecard from "../components/card/Profilecard";

const Members = () => {
  const { employees, loading } = useEmployees();
  return (
    <div className="Pagearea Toparea">
      <div className="memberbox grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {employees.map((employee) => (
          <Profilecard employee={employee} key={employee.emp_id} />
        ))}
      </div>
    </div>
  );
};

export default Members;
