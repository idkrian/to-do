import { useAtom } from "jotai";
import { sidebarOpenAtom } from "../storage/atoms";
import { FaPlus } from "react-icons/fa6";
import { TaskProps } from "../../helpers/interfaces";
import TaskItem from "./TaskItem";

interface TaskContainerProps {
  title: string;
  tasks: TaskProps[];
  style?: string;
}
const TaskContainer = ({ title, tasks, style }: TaskContainerProps) => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);

  return (
    <div className={`border-2 my-4 p-4 rounded-lg ${style}`}>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div
        className="flex align-middle items-center rounded-md p-3 border-2 mt-4 mb-3 cursor-pointer"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <div className="pr-2">
          <FaPlus />
        </div>
        <p>Add new task</p>
      </div>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskContainer;
