import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leftnav from "./ui/navigation/Leftnav";
import Nav from "./ui/navigation/Nav";
import Dashboard from "./pages/Dashboard";
import { EmployeeProvider } from "./context/EmployeeContext";
import Members from "./pages/Members";
import Teams from "./pages/Teams";
import { TeamProvider } from "./context/TeamsContext";
import Projects from "./pages/Projects";
import { ProjectProvider } from "./context/ProjectContext";
import Profie from "./pages/extrapage/Profie";

function App() {
  return (
    <>
      <EmployeeProvider>
        <TeamProvider>
          <ProjectProvider>
            <Router>
              <div className=" flex justify-between w-full ">
                <div className=" bg-background w-[350px] h-screen shrink-0 sticky top-0 border-r border-e-border-secondary">
                  <Leftnav />
                </div>
                <div className=" w-full">
                  <div className=" sticky  top-0">
                    <Nav />
                  </div>
                  <div className="overflow-y-auto text-sm ">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/employees" element={<Members />} />
                      <Route path="/teams" element={<Teams />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/profile/:emp_id" element={<Profie />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </Router>
          </ProjectProvider>
        </TeamProvider>
      </EmployeeProvider>
    </>
  );
}

export default App;
