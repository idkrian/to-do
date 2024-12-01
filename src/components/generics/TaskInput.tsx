import { Checkbox } from "@/components/ui/checkbox";
import { FaChevronRight } from "react-icons/fa";

type TaskInputProps = {
  name: string;
};
const TaskInput = ({ name }: TaskInputProps) => {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b-[1px] text-lightBlack">
      <div className="flex items-center gap-4">
        <Checkbox />
        <p>{name}</p>
      </div>
      <FaChevronRight className="text-lightBlack" />
    </div>
  );
};

export default TaskInput;
