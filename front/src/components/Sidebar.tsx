import { useAtom } from "jotai";
import { sidebarDataAtom, sidebarOpenAtom } from "./storage/atoms";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../lib/ui/alert-dialog";
import { useToast } from "../lib/ui/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { addDays, format } from "date-fns";

const Sidebar = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    list: "",
    date: new Date(),
  });
  const [sidebarOpen] = useAtom(sidebarOpenAtom);
  const [sidebarData] = useAtom(sidebarDataAtom);

  useEffect(() => {
    setFormData(sidebarData);
  }, [sidebarData]);

  function postTask(data: unknown) {
    axios.post("http://localhost:5000/tasks", data);
  }

  return (
    <div
      className={` px-4 py-2 ${
        !sidebarOpen
          ? "max-w-0 opacity-0 overflow-hidden mb-0"
          : "max-w-sm bg-[#ebebeb] opacity-100 m-5"
      }  transition-all duration-500 rounded-xl`}
    >
      <h1 className="font-bold text-2xl">Task:</h1>
      <form onSubmit={() => postTask(formData)}>
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="flex font-semibold align-middle items-center rounded-xl p-3 border-2 mt-8 mb-3 cursor-pointer">
                <p>Delete Task</p>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <button
            type="submit"
            className="flex font-semibold align-middle items-center rounded-xl p-3 border-2 mt-8 mb-3 bg-[#ffd43b] cursor-pointer"
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
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
