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
import { useContext, useEffect, useState } from "react";
import { Tables } from "../../db/database.types";
import { getAllLists } from "@/api/lists";

const TaskMenu = () => {
  type List = Tables<"lists">;
  const [lists, setLists] = useState<List[]>();
  const [date, setDate] = useState<Date>();

  const { showTaskMenu, setShowTaskMenu, selectedTask, setSelectedTask } =
    useContext(AppContext);

  const addTask = async () => {
    // await supabase.from("tasks").insert(formData);
  };
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const lists = await getAllLists();
        setLists(lists!);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLists();
  }, []);

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
        value={selectedTask?.name || ""}
        onChange={(e) =>
          setSelectedTask({ ...selectedTask!, name: e.target.value })
        }
      />
      <div className="bg-transparent">
        <input
          type="text"
          className="bg-transparent font-semibold outline-none text-darkGrey p-2 border rounded-lg h-36 w-full border-[#dfdfdf]"
          placeholder="Description"
          value={selectedTask?.description || ""}
          onChange={(e) =>
            setSelectedTask({ ...selectedTask!, description: e.target.value })
          }
        />
      </div>
      <div className="flex items-center justify-between w-[70%]">
        <p>List</p>
        <Select
          value={selectedTask?.list?.name || ""}
          onValueChange={(value) =>
            setSelectedTask({
              ...selectedTask!,
              list: { id: selectedTask?.list?.id, name: value },
            })
          }
        >
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="outline-none">
            {lists?.map((list) => (
              <SelectItem key={list.id} value={list.name}>
                {list.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between w-[70%]">
        <p>Due date</p>
        <DatePicker setDate={setDate} date={date} selectedTask={selectedTask} />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <p className="text-2xl font-semibold">Subtask:</p>
        <AddTaskButton />
        <TaskInput task={selectedTask!} size="sm" />
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
