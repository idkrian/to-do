import React from "react";
import { Button } from "@/components/ui/button";
import TaskCheckbox from "@/components/atoms/TaskCheckbox";

const Upcoming = () => {
  return (
    <div className="col-span-2">
      <span className="text-6xl font-bold ">Upcoming</span>
      <div className="items-top flex space-x-2 rounded-md my-5 border border-[#dfdfdf] p-4 flex-col">
        <span className="text-4xl font-bold ">Today</span>
        <Button className="w-full">Add new Task</Button>
        <TaskCheckbox label={"Teste 4"} />
      </div>
      <div className="flex">
        <div className="items-top flex space-x-2 rounded-md my-5 border border-[#dfdfdf] p-4 flex-col w-2/3 mr-1">
          <span className="text-4xl font-bold ">Tomorrow</span>
          <Button className="w-full">Add new Task</Button>
          <TaskCheckbox label={"Teste 2"} />
        </div>
        <div className="items-top flex space-x-2 rounded-md my-5 border border-[#dfdfdf] p-4 flex-col w-2/3 ml-1">
          <span className="text-4xl font-bold ">This Week</span>
          <Button className="w-full">Add new Task</Button>
          <TaskCheckbox label={"Teste"} />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
