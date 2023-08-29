import { FaPlus } from "react-icons/fa6";
import Checkbox from "./Atoms/Checkbox";
import { useAtom } from "jotai";
import { sidebarOpenAtom } from "./storage/atoms";

const Today = () => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);

  return (
    <div className="p-5 justify-between grow">
      <div>
        <h1 className="font-bold text-5xl">Today</h1>
        <div className="flex align-middle items-center rounded-md p-3 border-2 mt-8 mb-3">
          <div className="pr-2">
            <FaPlus />
          </div>
          <p>Add new task</p>
        </div>
        <div onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Checkbox label="Teste checkbox 2" />
        </div>
      </div>
    </div>
  );
};

export default Today;
