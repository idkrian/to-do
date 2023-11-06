import MenuItem from "../Atoms/MenuItem.js";
import { FaAnglesRight, FaList, FaPlus } from "react-icons/fa6";
import { Separator } from "../../lib/ui/separator.js";
import { getAllTasks, getTasksbyId } from "../../helpers/api.js";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../lib/ui/dialog.js";
import { Button } from "../../lib/ui/button.js";
import { useEffect, useState } from "react";
import { TaskProps } from "../../helpers/interfaces.js";
import { format, isThisWeek } from "date-fns";
import Cube from "../Atoms/Cube.js";

const Menu = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const today = format(new Date(), "dd/MM/yyyy");
  const todayTasks = tasks.filter(
    (e) => format(new Date(e.date), "dd/MM/yyyy") === today
  );
  const thisWeekTasks = tasks.filter((e) => isThisWeek(new Date(e.date)));
  const getTasks = async () => {
    const userId = localStorage.getItem("userId");
    const tasksData = await getTasksbyId(userId);
    setTasks(tasksData);
  };
  useEffect(() => {
    getTasks();
  }, []);

  const listItems = [...new Set(tasks.map((e) => e.list))];

  return (
    <div className="bg-[#ebebeb] p-5 w-60 rounded-xl m-5">
      <h1 className="font-bold text-3xl">Menu</h1>
      <div className="mt-4">
        <h1 className="font-bold text-sm">TASKS</h1>
        <Link to="/upcoming">
          <MenuItem
            icon={<FaAnglesRight />}
            label={"Upcoming"}
            itemsLength={thisWeekTasks.length}
          />
        </Link>
        <Link to="/today">
          <MenuItem
            icon={<FaList />}
            label={"Today"}
            itemsLength={todayTasks.length}
          />
        </Link>
      </div>
      <Separator className="my-4" />
      <h1 className="font-bold text-sm ">LISTS</h1>
      <div>
        {/* {listItems.map((item) => (
          <a href={`/list/${item}`} key={item}>
            <MenuItem
              icon={<Cube color={"red-500"} />}
              label={item.charAt(0).toUpperCase() + item.slice(1)}
              itemsLength={tasks.filter((i) => i.list === item).length}
            />
          </a>
        ))} */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <div className="pr-2">
                <FaPlus />
              </div>
              Add new List
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create a new List</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <h1 className="text-right">List Name:</h1>
                <input
                  id="list"
                  className="col-span-3 border-2 p-2 rounded-md"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Menu;
