import React from "react";
import { useEmployees } from "../../context/EmployeeContext";
import { useParams } from "react-router-dom";
import Profiletop from "../../ui/profile/Profiletop";
import ProfileSamary from "../../ui/profile/ProfileSamary";

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
    <div className="Pagearea Toparea ">
      <div className="px-16 py-16 bg-background">
        <Profiletop user={user} />
        <div className="flex justify-between gap-8 h-full">
          <div className="w-7/12">
            <ProfileSamary user={user} />
          </div>

          <div className="w-5/12"></div>
        </div>
      </div>
    </div>
  );
};

export default Profie;
