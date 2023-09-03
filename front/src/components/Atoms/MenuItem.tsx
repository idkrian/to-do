import React from "react";
interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
}
const MenuItem = ({ icon, label }: MenuItemProps) => {
  return (
    <div className="flex align-middle items-center p-2 mt-1 hover:bg-[#e2e2e2] rounded-sm cursor-pointer hover:font-bold">
      <div className="mr-4">{icon}</div>
      <p className="">{label}</p>
    </div>
  );
};

export default MenuItem;
