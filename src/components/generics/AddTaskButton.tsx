import { FaPlus } from "react-icons/fa6";

const AddTaskButton = () => {
  return (
    <button className="flex items-center gap-6 border w-full py-3 px-6 rounded-xl">
      <FaPlus className="text-darkGrey" />
      <p className="text-darkGrey font-medium">Add New Task</p>
    </button>
  );
};

export default AddTaskButton;
