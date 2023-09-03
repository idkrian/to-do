import React from "react";
import Checkbox from "./Atoms/Checkbox";
import { FaPlus } from "react-icons/fa6";
import { useAtom } from "jotai";
import { sidebarOpenAtom } from "./storage/atoms";

const Upcoming = () => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);

  return (
    <div className="p-5 justify-between grow">
      <div>
        <h1 className="font-bold text-5xl">Upcoming</h1>
        <div className="border-2 my-4 p-4 rounded-lg">
          <h1 className="font-bold text-2xl">Today</h1>
          <div
            className="flex align-middle items-center rounded-md p-3 border-2 mt-4 mb-3 cursor-pointer"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <div className="pr-2">
              <FaPlus />
            </div>
            <p>Add new task</p>
          </div>
          <div>
            <Checkbox label="Teste checkbox 2" />
          </div>
        </div>
        <div className="flex w-full">
          <div className="border-2 my-4 p-4 rounded-lg w-1/2 mr-2">
            <h1 className="font-bold text-2xl">Tomorrow</h1>
            <div className="flex align-middle items-center rounded-md p-3 border-2 mt-4 mb-3 cursor-pointer">
              <div className="pr-2">
                <FaPlus />
              </div>
              <p>Add new task</p>
            </div>
            <div>
              <Checkbox label="Teste checkbox 2" />
            </div>
          </div>
          <div className="border-2 my-4 p-4 rounded-lg w-1/2 ml-2">
            <h1 className="font-bold text-2xl">This Week</h1>
            <div className="flex align-middle items-center rounded-md p-3 border-2 mt-4 mb-3 cursor-pointer">
              <div className="pr-2">
                <FaPlus />
              </div>
              <p>Add new task</p>
            </div>
            <div>
              <Checkbox label="Teste checkbox 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
