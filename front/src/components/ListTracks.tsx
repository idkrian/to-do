import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskProps } from "../helpers/interfaces";
import { getAllTasks } from "../helpers/api";
import Checkbox from "./Atoms/Checkbox";
import { FaPlus } from "react-icons/fa6";
import { useAtom } from "jotai";
import { sidebarDataAtom, sidebarOpenAtom } from "./storage/atoms";

const ListTracks = () => {
  const { listName } = useParams();
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const [sidebarData, setSidebarData] = useAtom(sidebarDataAtom);

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const getTasks = async () => {
    const tasksData = await getAllTasks();
    const listData = tasksData.filter(
      (e: { list: string | undefined }) => e.list === listName
    );

    setTasks(listData);
  };
  useEffect(() => {
    getTasks();
  }, [sidebarData]);
  console.log(tasks);

  return (
    <div className="p-5 justify-between grow">
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-4xl mr-4">Today</h1>
          <div className="border-2 px-3 rounded-md">
            <h1 className="font-bold text-3xl">{tasks.length}</h1>
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
          {tasks.map((task) => (
            <div
              onClick={() => {
                sidebarOpen === false ? setSidebarOpen(!sidebarOpen) : "";
                setSidebarData(task);
              }}
              key={task._id}
            >
              <Checkbox label={task.title} key={task._id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTracks;
