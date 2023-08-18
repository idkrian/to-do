import React from "react";
import { FaAnglesRight, FaListUl } from "react-icons/fa6";
import { Alert } from "../components/ui/alert";
import { Separator } from "../components/ui/separator";
import Link from "next/link";
import Tabs from "@/components/atoms/Tabs";

const Menu = () => {
  return (
    <div className="bg-[#f0f0f0] m-4 p-4 rounded-xl">
      <span className="font-bold text-2xl">Menu</span>
      <div>
        Tasks
        <div>
          <Tabs
            icon={<FaAnglesRight />}
            label={"Upcoming"}
            route={"/Upcoming"}
          />
          <Tabs icon={<FaListUl />} label={"Today"} route={"/"} />
        </div>
      </div>
      <Separator />

      <div>
        Lists
        <div>
          <div>personal</div>
          <div>work</div>
          <div>add new list</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
