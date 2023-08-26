import React from "react";
import { FaPlus } from "react-icons/fa6";
import Checkbox from "./Atoms/Checkbox";
import Sidebar from "./Sidebar";

const Today = () => {
  const teste = true;
  return (
    <div className="p-5 grid col-span-2 justify-between grid-flow-col auto-cols-auto">
      <div>
        <h1 className="font-bold text-5xl">Today</h1>
        <div className="flex align-middle items-center rounded-md p-3 border-2 mt-8 mb-3">
          <div className="pr-2">
            <FaPlus />
          </div>
          <p>Add new task</p>
        </div>
        <Checkbox label="Teste checkbox 2" />
      </div>
      {teste && <Sidebar />}
    </div>
  );
};

export default Today;
