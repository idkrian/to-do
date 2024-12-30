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
import { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "../../db/supabase";
import { Tables } from "../../db/database.types";
type List = Tables<"lists">;
type TaskList = {
  tasks: {
    created_at: string;
    description: string | null;
    due_date: string | null;
    id: number;
    name: string;
    subtask: number | null;
  } | null;
  lists: { created_at: string; id: number; name: string } | null;
};
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [lists, setLists] = useState<List[] | null>([]);
  const [taskLists, setTaskLists] = useState<TaskList[] | null>([]);
  async function fetch() {
    const { data: lists } = await supabase.from("lists").select();
    setLists(lists);

    const { data: taskLists } = await supabase
      .from("task_lists")
      .select("tasks(*), lists(*)");

    setTaskLists(taskLists);
  }

  const countSidebarItemsValue = (taskId: number) => {
    const lists = taskLists?.filter(
      (taskList) => taskList.lists?.id === taskId
    );

    return lists?.length;
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div
      className={`flex flex-col rounded-xl gap-4 bg-lightGrey text-black ${
        showSidebar ? "h-full w-full max-w-[20rem] p-6" : "w-fit h-fit p-2"
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
            <Link href="/upcoming">
              <SidebarItem
                icon={<FaAngleDoubleRight />}
                text="Upcoming"
                number={12}
              />
            </Link>
            <Link href="/today">
              <SidebarItem icon={<FaTasks />} text="Today" number={5} />
            </Link>
            <SidebarItem icon={<FaRegCalendarAlt />} text="Calendar" />
            <Link href="/sticky-wall">
              <SidebarItem icon={<FaRegStickyNote />} text="Sticky Wall" />
            </Link>
          </div>
          <div className="h-0.5 w-full bg-mediumGrey" />
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xs font-bold">LISTS</p>
            {lists &&
              lists.map((list) => (
                <Link href={`/list/${list.id}`} key={list.id}>
                  <SidebarItem
                    icon={<div className="size-5 rounded-md bg-green-500" />}
                    text={list.name}
                    number={countSidebarItemsValue(list.id)}
                    key={list.id}
                  />
                </Link>
              ))}
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
