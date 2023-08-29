import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Today from "./components/Today";
import { useAtom } from "jotai";
import { sidebarOpenAtom } from "./components/storage/atoms";

function App() {
  return (
    <div className="bg-[#fafafa] m-5 align-middle justify-center rounded-lg flex">
      <Menu />
      <Today />
      <Sidebar />
    </div>
  );
}

export default App;
