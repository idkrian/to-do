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
import { useContext, useState } from "react";
import supabase from "../../db/supabase";

const TaskMenu = () => {
  type Task = {
    name: string;
    description: string;
    created_at: string;
  };
  const [formData, setFormData] = useState<Task>({
    name: "",
    description: "",
    created_at: new Date().toISOString(),
  });
  const { showTaskMenu, setShowTaskMenu } = useContext(AppContext);

  const addTask = async () => {
    await supabase.from("tasks").insert(formData);
  };
  return (
    <div
      className={`transition-all flex-col gap-3 text-lightBlack bg-lightGrey rounded-xl p-6 ${
        showTaskMenu ? "hidden" : "max-w-[24rem] flex w-full"
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
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <div className="bg-transparent">
        <input
          type="text"
          className="bg-transparent font-semibold outline-none text-darkGrey p-2 border rounded-lg h-36 w-full border-[#dfdfdf]"
          placeholder="Description"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>
      <div className="flex items-center justify-between w-[70%]">
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
      <div className="flex items-center justify-between w-[70%]">
        <p>Due date</p>
        <DatePicker />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <p className="text-2xl font-semibold">Subtask:</p>
        <AddTaskButton />
        <TaskInput name="Escovar Cachorro" size="sm" />
      </div>

      <div className="flex justify-between mt-auto gap-4">
        <button className="py-2 border px-4 rounded-lg w-full font-semibold">
          Delete Task
        </button>
        <button
          onClick={() => addTask()}
          className="py-2 border px-4 rounded-lg w-full bg-[#a72eff] font-semibold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default TaskMenu;
