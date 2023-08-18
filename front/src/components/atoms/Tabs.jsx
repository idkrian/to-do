import React from "react";
import Link from "next/link";

const Tabs = ({ label, icon, route }) => {
  return (
    <Link href={route}>
      <div className="cursor-pointer h-10 hover:bg-[#e2e2e2] rounded-xl flex items-center ">
        <div className="flex items-center px-2">
          <span className="flex items-center px-1">{icon}</span>
          <span className="flex items-center px-1">{label}</span>
        </div>
      </div>
    </Link>
  );
};

export default Tabs;
