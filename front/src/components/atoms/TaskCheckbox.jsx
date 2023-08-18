import React from "react";
import { Checkbox } from "../ui/checkbox";

const TaskCheckbox = ({ label }) => {
  return (
    <div className="flex my-4">
      <Checkbox id="terms1" />
      <label
        htmlFor="terms1"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default TaskCheckbox;
