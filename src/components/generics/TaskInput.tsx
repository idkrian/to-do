import { Checkbox } from "@/components/ui/checkbox";
import { AppContext } from "@/context/context";
import { useContext } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Tables } from "../../../db/database.types";

type Task = Tables<"tasks"> & {
  list?: { name: string | undefined; id: number | undefined };
};

type TaskInputProps = {
  size?: "sm" | "md";
  task: Task;
};

const TaskInput = ({ task, size }: TaskInputProps) => {
  const { setShowTaskMenu, setSelectedTask } = useContext(AppContext);

  return (
    <>
      {task && (
        <div
          onClick={() => {
            setShowTaskMenu(false);
            setSelectedTask(task);
          }}
          className={`flex cursor-pointer items-center justify-between border-b-[1px] text-lightBlack ${
            size == "md" ? "px-8 py-4" : "px-4 py-2"
          }`}
        >
          <div className="flex items-center gap-4">
            <Checkbox />
            <p>{task.name}</p>
          </div>
          <FaChevronRight
            className="text-lightBlack"
            size={size == "sm" ? 10 : 15}
          />
        </div>
      )}
    </>
  );
};

export default TaskInput;
