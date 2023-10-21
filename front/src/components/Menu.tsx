import MenuItem from "./Atoms/MenuItem";
import { FaAnglesRight, FaList, FaPlus } from "react-icons/fa6";
import { Separator } from "../lib/ui/separator";
import { getAllTasks } from "../helpers/api.js";
import ListItem from "./Atoms/ListItem.js";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../lib/ui/dialog";
import { Button } from "../lib/ui/button";
import { useEffect, useState } from "react";
import { TaskProps } from "../helpers/interfaces.js";

const Menu = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const getTasks = async () => {
    const tasksData = await getAllTasks();
    setTasks(tasksData);
  };
  useEffect(() => {
    getTasks();
  }, []);

  const listItems = [...new Set(tasks.map((e) => e.list))];

  /////////////////////////////////////////////////////////////

  // function getRandomValue(options: string[]): string {
  //   const randomIndex = Math.floor(Math.random() * options.length);
  //   return options[randomIndex];
  // }

  // // Seu array de strings originais
  // const originalArray: string[] = ["Item 1", "Item 2", "Item 3", "Item 4"];

  // // Array de opções de valores aleatórios
  // const randomOptions: string[] = ["Random 1", "Random 2", "Random 3"];

  // // Use .map() para atribuir valores aleatórios a cada item no array original
  // const newArray = originalArray.map((item) => {
  //   const randomValue = getRandomValue(randomOptions);
  //   return { label: item, color: randomValue };
  // });

  return (
    <div className="bg-[#ebebeb] p-5 w-60 rounded-xl m-5">
      <h1 className="font-bold text-3xl">Menu</h1>
      <div className="mt-4">
        <h1 className="font-bold text-sm">TASKS</h1>
        <a href="/upcoming">
          <MenuItem icon={<FaAnglesRight />} label={"Upcoming"} />
        </a>
        <a href="/">
          <MenuItem icon={<FaList />} label={"Today"} />
        </a>
      </div>
      <Separator className="my-4" />
      <h1 className="font-bold text-sm ">LISTS</h1>
      <div>
        {/* <a href="">
          <ListItem data={tasks} cubeColor={"lime-500"} label={"Work"} />
        </a> */}
        {listItems.map((item) => (
          <a href={`/list/${item}`} key={item}>
            <ListItem
              data={tasks}
              cubeColor={"red-500"}
              label={item.charAt(0).toUpperCase() + item.slice(1)}
            />
          </a>
        ))}
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
