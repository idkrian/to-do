import { FaPlus } from "react-icons/fa6";
import Checkbox from "./Atoms/Checkbox";
import { useAtom } from "jotai";
import { sidebarOpenAtom } from "./storage/atoms";
import axios from "axios";
import { useEffect, useState } from "react";
import format from "date-fns/format";
import { addDays } from "date-fns";

export interface TaskProps {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  date: Date;
  list: string;
}

const Today = () => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const today = format(new Date(), "dd/MM/yyyy");
  const todayTasks = tasks.filter(
    (e) => format(addDays(new Date(e.date), 1), "dd/MM/yyyy") === today
  );

  const getAllTasks = async () => {
    await axios
      .get("http://localhost:5000/tasks")
      .then((res) => setTasks(res.data.allTasks));
  };
  useEffect(() => {
    getAllTasks();
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
            <div onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Checkbox label={task.title} key={task._id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Today;
