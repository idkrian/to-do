import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

const Description = () => {
  return (
    <div className="col-span-2">
      Today
      <Button className="w-full bg-transparent">Add new Task</Button>
      <div className="items-top flex space-x-2">
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

export default Description;
