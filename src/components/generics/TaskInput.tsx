import { Checkbox } from "@/components/ui/checkbox";
import { AppContext } from "@/context/context";
import { useContext } from "react";
import { FaChevronRight } from "react-icons/fa";

type TaskInputProps = {
  name: string;
  size?: "sm" | "md";
};
const TaskInput = ({ name, size }: TaskInputProps) => {
  const { showTaskMenu, setShowTaskMenu } = useContext(AppContext);

  return (
    <div
      onClick={() => setShowTaskMenu(!showTaskMenu)}
      className={`flex cursor-pointer items-center justify-between border-b-[1px] text-lightBlack ${
        size == "md" ? "px-8 py-4" : "px-4 py-2"
      }`}
    >
      <div className="flex items-center gap-4">
        <Checkbox />
        <p>{name}</p>
      </div>
      <FaChevronRight
        className="text-lightBlack"
        size={size == "sm" ? 10 : 15}
      />
    </div>
  );
};

export default TaskInput;
