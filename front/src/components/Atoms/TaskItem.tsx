import { useAtom } from "jotai";
import {
  isUpdateAtom,
  sidebarDataAtom,
  sidebarOpenAtom,
} from "../storage/atoms";
import Checkbox from "./Checkbox";

interface TaskItemProps {
  task: {
    id?: string;
    title: string;
    description: string;
    date: Date;
    list?: string;
  };
}
const TaskItem = ({ task }: TaskItemProps) => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const [, setSidebarData] = useAtom(sidebarDataAtom);
  const [, setIsUpdade] = useAtom(isUpdateAtom);

  return (
    <div
      onClick={() => {
        sidebarOpen === false ? setSidebarOpen(!sidebarOpen) : "";
        setSidebarData(task);
        setIsUpdade(true);
      }}
      key={task.id}
    >
      <Checkbox label={task.title} key={task.id} />
    </div>
  );
};

export default TaskItem;
