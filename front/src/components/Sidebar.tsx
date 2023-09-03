import { useAtom } from "jotai";
import { sidebarOpenAtom } from "./storage/atoms";
import { FaPlus } from "react-icons/fa6";
import Checkbox from "./Atoms/Checkbox";
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
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
const Sidebar = () => {
  const { toast } = useToast();
  const [sidebarOpen] = useAtom(sidebarOpenAtom);
  const { register, handleSubmit } = useForm();

  function postTask(data: any) {
    console.log(data);
    axios.post("http://localhost:5000/tasks", data);
  }

  return (
    <div
      className={` px-4 py-2 ${
        !sidebarOpen.open
          ? "max-w-0 opacity-0 overflow-hidden mb-0"
          : "max-w-sm bg-[#f4f4f4] opacity-100 m-5"
      }  transition-all duration-500 rounded-xl`}
    >
      <h1 className="font-bold text-2xl">Task:</h1>
      <form onSubmit={handleSubmit((data) => postTask(data))}>
        <input
          className="w-full h-6 rounded-xl p-4 bg-transparent border-[#e4e6ea] border-2 border-solid my-2"
          type="text"
          id=""
          placeholder="Title"
          {...register("title")}
        />
        <input
          className="w-full h-32 rounded-xl p-4 bg-transparent border-[#e4e6ea] border-2 border-solid my-2"
          type="text"
          id=""
          placeholder="Description"
          {...register("description")}
        />
        <div className="items-center flex my-2">
          <p className="mr-4">List:</p>
          <select
            id=""
            {...register("list")}
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
            id=""
            {...register("date")}
            className="py-1 px-3 rounded-lg border-[#e4e6ea] border-2 border-solid bg-transparent"
          />
        </div>
        <h1 className="font-bold text-2xl">Subtasks:</h1>
        <div className="flex align-middle items-center rounded-md p-3 border-2 mt-4 mb-3">
          <div className="pr-2">
            <FaPlus />
          </div>
          <p>Add new Subtask</p>
        </div>

        <Checkbox label="Subtask" />

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
              postTask();
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
