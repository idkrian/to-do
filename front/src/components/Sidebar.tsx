import { useAtom } from "jotai";
import {
  isUpdateAtom,
  sidebarDataAtom,
  sidebarOpenAtom,
} from "./storage/atoms";
import { useToast } from "../lib/ui/use-toast";
import { FormEvent, useEffect, useState } from "react";
import { addDays, format } from "date-fns";
import { createTask, deleteTask, updateTask } from "../helpers/api";
import { TaskProps } from "../helpers/interfaces";
import { IoCloseSharp } from "react-icons/io5";
import AlertModal from "./Atoms/AlertModal";

const Sidebar = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    description: "",
    list: "",
    date: new Date(),
  });
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);
  const [sidebarData, setSidebarData] = useAtom(sidebarDataAtom);
  const [isUpdate] = useAtom(isUpdateAtom);

  useEffect(() => {
    setFormData(sidebarData);
  }, [sidebarData, sidebarOpen]);

  const handleTask = async (e: FormEvent<HTMLFormElement>, data: TaskProps) => {
    e.preventDefault();
    if (isUpdate) {
      await updateTask(data._id, data);
    } else {
      await createTask(data);
    }
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setSidebarData({
      _id: "",
      title: "",
      description: "",
      list: "",
      date: new Date(),
    });
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    closeSidebar();
  };

  return (
    <div
      className={` px-4 py-2 ${
        !sidebarOpen
          ? "max-w-0 opacity-0 overflow-hidden mb-0"
          : "max-w-sm bg-[#ebebeb] opacity-100 m-5"
      }  transition-all duration-500 rounded-xl`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Task:</h1>
        <IoCloseSharp
          size={25}
          className="cursor-pointer"
          onClick={() => closeSidebar()}
        />
      </div>
      <form onSubmit={(e) => handleTask(e, formData)}>
        <input
          className="w-full h-6 rounded-xl p-4 bg-transparent border-[#e4e6ea] border-2 border-solid my-2"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
        <input
          className="w-full h-32 rounded-xl p-4 bg-transparent border-[#e4e6ea] border-2 border-solid my-2"
          type="text"
          value={formData.description}
          placeholder="Description"
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        />
        <div className="items-center flex my-2">
          <p className="mr-4">List:</p>
          <select
            value={formData.list}
            onChange={(e) => {
              setFormData({ ...formData, list: e.target.value });
            }}
            className="py-1 px-3 rounded-lg border-[#e4e6ea] border-2 border-solid bg-transparent"
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
          </select>
        </div>
        <div className="items-center flex my-2">
          <p className="mr-4">Due date:</p>
          <input
            type="date"
            value={format(new Date(formData.date), "yyyy-MM-dd")}
            onChange={(e) => {
              const handleDate = addDays(new Date(e.target.value), 1);
              setFormData({ ...formData, date: handleDate });
            }}
            className="py-1 px-3 rounded-lg border-[#e4e6ea] border-2 border-solid bg-transparent"
          />
        </div>

        <div className="flex justify-between">
          <AlertModal data={sidebarData} handleDeleteTask={handleDeleteTask} />
          <button
            type="submit"
            className="flex font-semibold align-middle items-center rounded-xl p-3 border-2 mt-8 mb-3 bg-[#ffd43b] cursor-pointer"
            onClick={() => {
              toast({
                variant: "default",
                title: isUpdate
                  ? "The task was edited!"
                  : "The task was created!",
              });
            }}
          >
            <p>Save Changes</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
