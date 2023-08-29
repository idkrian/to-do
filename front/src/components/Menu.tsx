import MenuItem from "./Atoms/MenuItem";
import { FaAnglesRight, FaList } from "react-icons/fa6";

const Menu = () => {
  return (
    <div className="bg-[#f4f4f4] p-5">
      <h1 className="font-bold text-3xl">Menu</h1>
      <div>search</div>
      <div>
        <h1 className="font-bold text-sm">TASKS</h1>
        <MenuItem icon={<FaAnglesRight />} label={"Upcoming"} />
        <MenuItem icon={<FaList />} label={"Today"} />
      </div>
    </div>
  );
};

export default Menu;
