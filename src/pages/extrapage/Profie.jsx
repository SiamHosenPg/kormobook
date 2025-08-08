import React from "react";
import { useEmployees } from "../../context/EmployeeContext";
import { useParams } from "react-router-dom";
import Profiletop from "../../ui/profile/Profiletop";
import ProfileSamary from "../../ui/profile/ProfileSamary";
import ProfileCountingbox from "../../components/card/ProfileCountingbox";

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
        <div className="flex mt-10 justify-between gap-8 h-full">
          <div className="w-5/12 ">
            <ProfileSamary user={user} />
          </div>

          <div className="w-7/12">
            <div className="flex items-center justify-between gap-2 p-2 ">
              <ProfileCountingbox number={user.rank} text="Rank Score" />
              <ProfileCountingbox
                number={user.projects_count}
                text="Project Completed"
              />
              <ProfileCountingbox
                number={user.projects_count}
                text="Project Completed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profie;
