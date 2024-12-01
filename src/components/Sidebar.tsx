import { LuMenu } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  FaAngleDoubleRight,
  FaTasks,
  FaRegCalendarAlt,
  FaRegStickyNote,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import SidebarItem from "./sidebar/SidebarItem";
import { useState } from "react";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div
      className={`flex flex-col rounded-xl gap-4 bg-lightGrey text-black transition-all ${
        showSidebar ? "h-full w-full max-w-[20rem] p-6" : "w-fit p-2"
      }`}
    >
      <div className="flex justify-between items-center">
        <p
          className={`text-2xl font-semibold ${
            showSidebar ? "flex" : "hidden"
          }`}
        >
          Menu
        </p>
        <LuMenu
          className="size-8 cursor-pointer"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
      {showSidebar && (
        <>
          <div className="relative flex items-center">
            <FaMagnifyingGlass className="absolute inset-y-2.5 ml-2 start-0 text-darkGrey flex items-center pointer-events-none size-4" />
            <input
              type="text"
              className="bg-lightGrey outline-none text-darkGrey pl-7 p-2 border-2 rounded-lg h-9 w-full border-[#dfdfdf]"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xs font-bold">TASKS</p>
            <SidebarItem
              icon={<FaAngleDoubleRight />}
              text="Upcoming"
              number={12}
            />
            <SidebarItem icon={<FaTasks />} text="Today" number={5} />
            <SidebarItem icon={<FaRegCalendarAlt />} text="Calendar" />
            <SidebarItem icon={<FaRegStickyNote />} text="Sticky Wall" />
          </div>
          <div className="h-0.5 w-full bg-mediumGrey" />
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xs font-bold">LISTS</p>
            <SidebarItem
              icon={<div className="size-5 rounded-md bg-green-500" />}
              text="Personal"
              number={12}
            />
            <SidebarItem
              icon={<div className="size-5 rounded-md bg-purple-500" />}
              text="Work"
              number={8}
            />
            <SidebarItem
              icon={<div className="size-5 rounded-md bg-orange-500" />}
              text="Home"
              number={3}
            />
          </div>
          <div className="mt-auto flex items-center my-4 gap-2 cursor-pointer group">
            <MdLogout className="size-5 text-darkGrey cursor-pointer" />
            <p className="text-darkGrey group-hover:font-semibold">Sign Out</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
