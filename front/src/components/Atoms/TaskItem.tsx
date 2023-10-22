import { useAtom } from "jotai";
import { sidebarDataAtom, sidebarOpenAtom } from "../storage/atoms";
import Checkbox from "./Checkbox";

interface TaskItemProps {
  task: {
    _id: string;
    title: string;
    description: string;
    done?: boolean;
    date: Date;
    list: string;
  };
}
const TaskItem = ({ task }: TaskItemProps) => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const [, setSidebarData] = useAtom(sidebarDataAtom);

  return (
    <div
      onClick={() => {
        sidebarOpen === false ? setSidebarOpen(!sidebarOpen) : "";
        setSidebarData(task);
      }}
      key={task._id}
    >
      <Checkbox label={task.title} key={task._id} />
    </div>
  );
};

export default TaskItem;
