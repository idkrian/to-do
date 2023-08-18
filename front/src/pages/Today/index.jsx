import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Today = () => {
  return (
    <div className="col-span-2">
      <span className="text-6xl font-bold ">Today</span>
      <Button className="w-full">Add new Task</Button>
      <div className="items-top flex space-x-2 rounded-md my-5 border-2 border-cyan-900 p-4">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Today;
