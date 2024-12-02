import { IoClose } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "./ui/date-picker";
import AddTaskButton from "./generics/AddTaskButton";
import TaskInput from "./generics/TaskInput";
import { AppContext } from "@/context/context";
import { useContext } from "react";

const TaskMenu = () => {
  const { showTaskMenu, setShowTaskMenu } = useContext(AppContext);
  return (
    <div
      className={`transition-all flex-col gap-3 text-lightBlack bg-lightGrey rounded-xl p-6 ${
        showTaskMenu ? "hidden" : "max-w-[20rem] flex w-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">Task:</p>
        <IoClose
          className="cursor-pointer"
          size={25}
          onClick={() => setShowTaskMenu(!showTaskMenu)}
        />
      </div>
      <input
        type="text"
        className="bg-lightGrey font-semibold outline-none text-darkGrey p-2 border rounded-lg h-10 w-full border-[#dfdfdf]"
        placeholder="Title"
      />
      <input
        type="text"
        className="bg-lightGrey font-semibold outline-none text-darkGrey p-2 border rounded-lg h-full max-h-36 w-full border-[#dfdfdf]"
        placeholder="Description"
      />
      <div className="flex items-center justify-between w-[80%]">
        <p>List</p>
        <Select>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="outline-none">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between w-[80%]">
        <p>Due date</p>
        <DatePicker />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <p className="text-2xl font-semibold">Task:</p>
        <AddTaskButton />
        <TaskInput name="Escovar Cachorro" size="sm" />
      </div>
    </div>
  );
};

export default TaskMenu;
