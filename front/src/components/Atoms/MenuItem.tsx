import React from "react";
interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  itemsLength: number;
}
const MenuItem = ({ icon, label, itemsLength }: MenuItemProps) => {
  return (
    <div className="flex align-middle items-center justify-between p-2 px-4 mt-1 hover:bg-[#e2e2e2] rounded-lg cursor-pointer hover:font-bold">
      <div className="flex items-center">
        <div className="mr-4">{icon}</div>
        <p className="">{label}</p>
      </div>
      <div className="border-2 px-2 ml-4 h-1/2 rounded-md bg-[#dddddd] my-auto ">
        <h1 className="font-bold text-sm">{itemsLength}</h1>
      </div>
    </div>
  );
};

export default MenuItem;
