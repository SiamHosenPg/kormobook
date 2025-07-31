import Leftnav from "./ui/navigation/Leftnav";
import Nav from "./ui/navigation/Nav";

function App() {
  return (
    <>
      <div className=" flex justify-between w-full ">
        <div className=" bg-background w-[350px] h-screen shrink-0 sticky top-0 border-r border-e-border-secondary">
          <Leftnav />
        </div>
        <div className=" w-full">
          <div className=" sticky  top-0">
            <Nav />
          </div>
          <div className="overflow-y-auto text-sm "></div>
        </div>
      </div>
    </>
  );
}

export default App;
