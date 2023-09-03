import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Today from "./components/Today";
import Upcoming from "./components/Upcoming";

function App() {
  return (
    <div className="bg-[#fafafa] m-5 align-middle justify-center rounded-xl flex">
      <Menu />
      {/* <Today /> */}
      <Upcoming />
      <Sidebar />
    </div>
  );
}

export default App;
