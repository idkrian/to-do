import { useAtom } from "jotai";
import { sidebarOpenAtom } from "./storage/atoms";
import { DatePicker } from "./Atoms/DatePicker";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../lib/ui/select";
import { useToast } from "../lib/ui/use-toast";
const Sidebar = () => {
  const { toast } = useToast();
  const [sidebarOpen] = useAtom(sidebarOpenAtom);
  console.log(sidebarOpen);

  return (
    <div
      className={` px-4 py-2 ${
        !sidebarOpen
          ? "max-w-0 opacity-0 overflow-hidden mb-0"
          : "max-w-sm bg-[#f4f4f4] opacity-100 m-5"
      }  transition-all duration-500 rounded-xl`}
    >
      <h1 className="font-bold text-2xl">Task:</h1>
      <input
        className="w-full h-6 rounded-xl p-4 bg-transparent border-[#e4e6ea] border-2 border-solid my-2"
        type="text"
        name=""
        id=""
        placeholder="Lavar a Louça"
      />
      <input
        className="w-full h-32 rounded-xl p-4 bg-transparent border-[#e4e6ea] border-2 border-solid my-2"
        type="text"
        name=""
        id=""
        placeholder="Description"
      />
      <div className="items-center flex my-2">
        <p className="mr-4">List:</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="items-center flex my-2">
        <p className="mr-4">Due date:</p>
        <DatePicker />
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
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
