import MenuItem from "./Atoms/MenuItem";
import { FaAnglesRight, FaList, FaPlus } from "react-icons/fa6";
import { Separator } from "../lib/ui/separator";
import Cube from "./Atoms/Cube";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../lib/ui/dialog";
import { Button } from "../lib/ui/button";

const Menu = () => {
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
      <h1 className="font-bold text-sm">LISTS</h1>
      <div>
        <MenuItem icon={<Cube />} label={"Work"} />
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
