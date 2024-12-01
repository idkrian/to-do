import { ReactNode } from "react";

type SidebarItemProps = {
  icon: ReactNode;
  text: string;
  number?: number;
};
const SidebarItem = ({ icon, text, number }: SidebarItemProps) => {
  return (
    <div className="flex justify-between group transition-all items-center h-9 p-2 w-full hover:bg-mediumGrey cursor-pointer rounded-md">
      <div className="flex items-center">
        <i className="mx-2 text-md text-blackGrey">{icon}</i>
        <p className="text-blackGrey font-medium group-hover:font-semibold">
          {text}
        </p>
      </div>
      {number && (
        <p className="group-hover:bg-lightGrey font-semibold text-sm flex items-center justify-center rounded-sm bg-mediumGrey w-8 h-full">
          {number}
        </p>
      )}
    </div>
  );
};

export default SidebarItem;
