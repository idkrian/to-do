import { FaPlus } from "react-icons/fa6";
import { useAtom } from "jotai";
import { sidebarOpenAtom } from "../storage/atoms.js";
import { getAllTasks } from "../../helpers/api.js";
import { useEffect, useState } from "react";
import format from "date-fns/format";
import { TaskProps } from "../../helpers/interfaces.js";
import TaskItem from "../Atoms/TaskItem.js";

const Today = () => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const today = format(new Date(), "dd/MM/yyyy");
  const todayTasks = tasks.filter(
    (e) => format(new Date(e.date), "dd/MM/yyyy") === today
  );

  const getTasks = async () => {
    const tasksData = await getAllTasks();
    setTasks(tasksData);
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="p-5 justify-between grow">
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-4xl mr-4">Today</h1>
          <div className="border-2 px-3 rounded-md">
            <h1 className="font-bold text-3xl">{todayTasks.length}</h1>
          </div>
        </div>
        <div
          className="flex align-middle items-center rounded-md p-3 border-2 mt-8 mb-3 cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <div className="pr-2">
            <FaPlus />
          </div>
          <p>Add new task</p>
        </div>
        <div>
          {todayTasks.map((task) => (
            <TaskItem task={task} key={task._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Today;
